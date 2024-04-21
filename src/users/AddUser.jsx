import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import Swal from "sweetalert2";
import {jpAxios} from "../JpAxios";
import {setUserService, updateUserService} from "../services/UserService";

const AddUser = () => {
    const {userId} = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState({
        name: "",
        userName: "",
        email: "",
        address: {
            street: "",
            city: "",
            suite: "",
            zipcode: ""
        }
    });


    const handleAddUser = (e) => {
        e.preventDefault();
        if (!userId) {
            setUserService(data);
        } else {
          updateUserService(data,userId)
        }
    }

    useEffect(() => {
        if (userId){
            jpAxios.get(`/users/${userId}`).then(res => {
                setData({
                    name: res.data.name,
                    userName: res.data.username,
                    email: res.data.email,
                    address: {
                        street: res.data.address.street,
                        city: res.data.address.city,
                        suite: res.data.address.suite,
                        zipcode: res.data.address.zipcode
                    }
                })
            })
        }
    }, []);

    return (
        <div className="row justify-content-center mt-5 ">
            <div className="col-9">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            {userId ? "ویرایش کاربر" : "افزودن کاربر جدید"}
                        </h4>
                        <form onSubmit={handleAddUser}>
                            <div className="form-group row mt-4">
                                <label htmlFor="name" className="col-md-2 col-form-label">نام و نام خانوادگی</label>
                                <div className="col-md-10">
                                    <input className="form-control" type="text" id="name" value={data.name}
                                           onChange={(e) => setData({
                                               ...data,
                                               name: e.target.value
                                           })}
                                    />
                                </div>
                            </div>

                            <div className="form-group row mt-3">
                                <label htmlFor="username" className="col-md-2 col-form-label">نام کاربری</label>
                                <div className="col-md-10">
                                    <input className="form-control" type="text" id="username" value={data.userName}
                                           onChange={(e) => setData({
                                               ...data,
                                               userName: e.target.value
                                           })}/>
                                </div>
                            </div>

                            <div className="form-group row mt-3">
                                <label htmlFor="email" className="col-md-2 col-form-label">ایمیل</label>
                                <div className="col-md-10">
                                    <input className="form-control" type="text" id="email" value={data.email}
                                           onChange={(e) => setData({
                                               ...data,
                                               email: e.target.value
                                           })}/>
                                </div>
                            </div>

                            <div className="form-group row justify-content-end mt-3">
                                <label htmlFor="address" className="col-md-2 col-form-label">آدرس</label>
                                <div className="col-md-5">
                                    <input className="form-control" type="text" placeholder="شهر" id="address"
                                           value={data.address.city}
                                           onChange={(e) => setData({
                                               ...data,
                                               address: {...data.address, city: e.target.value}
                                           })}
                                    />
                                </div>
                                <div className="col-md-5 ">
                                    <input className="form-control" type="text" placeholder="خیابان" id="address"
                                           value={data.address.street}
                                           onChange={(e) => setData({
                                               ...data,
                                               address: {...data.address, street: e.target.value}
                                           })}/>
                                </div>
                                <div className="col-md-5 mt-4">
                                    <input className="form-control" type="text" placeholder="ادامه آدرس" id="address"
                                           value={data.address.suite}
                                           onChange={(e) => setData({
                                               ...data,
                                               address: {...data.address, suite: e.target.value}
                                           })}/>
                                </div>
                                <div className="col-md-5 mt-4">
                                    <input className="form-control" type="text" placeholder="کد پستی" id="address"
                                           value={data.address.zipcode}
                                           onChange={(e) => setData({
                                               ...data,
                                               address: {...data.address, zipcode: e.target.value}
                                           })}/>
                                </div>
                            </div>

                            <div className="col-12 d-flex justify-content-end mt-4">
                                <button type="button" className="btn btn-outline-danger w-md mx-2 "
                                        onClick={() => navigate(-1)}
                                >بازگشت
                                </button>
                                <button type="submit" className="btn btn-outline-info w-md ">
                                    {userId ? "ویرایش " : "افزودن"}
                                </button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddUser;