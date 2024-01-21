import React from 'react';
import style from '../style.module.css'
import {Link, useNavigate} from "react-router-dom";
import Swal from 'sweetalert2'

const Users = ()=>{
const navigate = useNavigate();

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
            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
            });
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
                    <tr>
                        <td>1</td>
                        <td>mohammad</td>
                        <td>mohammad</td>
                        <td>mhwmdrz9@gmail.com</td>
                        <td>
                            <i className="fas fa-edit text-warning mx-2 pointer"
                            onClick={()=>navigate("/user/add/2")}
                            ></i>
                            <i onClick={()=>handleDeleteItem(1)}
                                className="fas fa-trash text-danger mx-2 pointer"></i>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )

}

export default Users;