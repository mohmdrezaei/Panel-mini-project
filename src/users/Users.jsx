import React, {useEffect, useState} from 'react';
import style from '../style.module.css'
import {Link, useNavigate} from "react-router-dom";
import Swal from 'sweetalert2'
import axios from "axios";

const Users = ()=>{
    const navigate = useNavigate();
    const [users ,setUsers] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users").then(res =>{
            setUsers(res.data)
        }).catch(err=>{
            console.log(err)
        })
    }, []);

const handleDeleteItem = (itemId) =>{



    Swal.fire({
        title: "حذف رکورد",
        text: `آیا از حذف رکورد ${itemId} اطمینان دارید؟ `,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "بله حذف کن!",
        cancelButtonText : "لغو"
    }).then((result) => {
        if (result.isConfirmed) {
            axios({
                method : "DELETE",
                url : `https://jsonplaceholder.typicode.com/users/${itemId}`
            }).then(res=>{
                if (res.status === 200){
                    const newUsers = users.filter(u=>u.id !== itemId)
                    setUsers(newUsers)
                }
                console.log(res)
                Swal.fire({
                    title: "عملیات موفق",
                    text: "حذف با موفقیت انجام شد. ",
                    icon: "success"
                });
            })

        }
    });

}
    return (
        <div className={`${style.item_content} mt-5 p-4 container-fluid`}>
            <h4 className="text-center">مدیریت کاربران</h4>
            <div className="row my-2 mb-4 justify-content-between w-100 mx-0">
                <div className="form-group col-10 col-md-6 col-lg-4">
                    <input type="text" className="form-control shadow" placeholder="جستجو"/>
                </div>
                <div className="col-2 text-start px-0">
                   <Link to="/user/add">
                       <button className="btn btn-success">
                           <i className="fas fa-plus text-light"></i>
                       </button>
                   </Link>
                </div>
            </div>
            {users.length ?
                <table className="table bg-light shadow">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>نام</th>
                        <th>نام کاربری</th>
                        <th>ایمیل</th>
                        <th>عملیات</th>
                    </tr>
                    </thead>
                    <tbody>

                    {users.map(u=>(
                        <tr key={u.id}>
                            <td>{u.id}</td>
                            <td>{u.name}</td>
                            <td>{u.username}</td>
                            <td>{u.email}</td>
                            <td>
                                <i className="fas fa-edit text-warning mx-2 pointer"
                                   onClick={()=>navigate("/user/add/2")}
                                ></i>
                                <i onClick={()=>handleDeleteItem(u.id)}
                                   className="fas fa-trash text-danger mx-2 pointer"></i>
                            </td>
                        </tr>
                    ))}

                    </tbody>
                </table>
            :
                <h4 className="text-center text-info">لطفا صبر کنید ...</h4>
            }
        </div>
    )

}

export default Users;