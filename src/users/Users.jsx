import React, {useEffect, useState} from 'react';
import style from '../style.module.css'
import {Link, useNavigate} from "react-router-dom";
import Swal from 'sweetalert2'
import axios from "axios";
import WithAlert from "../HOC/WithAlert";
import useTitle from "../hooks/useTitle";

const Users = (props) => {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [mainUsers, setMainUsers] = useState([]);
    const {Confirm, Alert} = props

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
            setUsers(res.data)
            setMainUsers(res.data)
        }).catch(err => {
            console.log(err)
        })
    }, []);
    useTitle("کاربران")
    const handleDeleteItem = async (itemId) => {
        if (await Confirm(`آیا از حذف رکورد ${itemId} اطمینان دارید؟ `)) {
            axios({
                method: "DELETE",
                url: `https://jsonplaceholder.typicode.com/users/${itemId}`
            }).then(res => {
                if (res.status === 200) {
                    const newUsers = users.filter(u => u.id !== itemId)
                    setUsers(newUsers)
                    console.log(res)
                    Alert("حذف با موفقیت انجام شد. ", "success")

                } else {
                    Alert("عملیات با خطا مواجه شد", "error")
                }

            })

        } else {
            Alert("شما از حذف رکورد منصرف شدید!", "info")

        }


    }
    const handleSearch = (e) => {
        setUsers(mainUsers.filter(u => u.name.includes(e.target.value)))
        console.log(e.target.value)
    }
    return (
        <div className={`${style.item_content} mt-5 p-4 container-fluid`}>
            <h4 className="text-center">مدیریت کاربران</h4>
            <div className="row my-2 mb-4 justify-content-between w-100 mx-0">
                <div className="form-group col-10 col-md-6 col-lg-4">
                    <input type="text" className="form-control shadow" placeholder="جستجو"
                           onChange={handleSearch}/>
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

                    {users.map(u => (
                        <tr key={u.id}>
                            <td>{u.id}</td>
                            <td>{u.name}</td>
                            <td>{u.username}</td>
                            <td>{u.email}</td>
                            <td>
                                <i className="fas fa-edit text-warning mx-2 pointer"
                                   onClick={() => navigate(`/user/add/${u.id}`)}
                                ></i>
                                <i onClick={() => handleDeleteItem(u.id)}
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