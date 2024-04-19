import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import Swal from "sweetalert2";
import {jpAxios} from "../JpAxios";
import {setUserService, updateUserService} from "../services/UserService";
import {setPostService, updatePostService} from "../services/PostService";

const AddUser = () => {
    const {postId} = useParams();
    const navigate = useNavigate();
    const [users , setUsers] = useState([])
    const [data, setData] = useState({
        userId: "",
        id: "",
        title: "",
        body: "",
    });


    const handleAddPost = (e) => {
        e.preventDefault();
        if (!postId) {
            setPostService(data);
        } else {
          updatePostService(data,postId)
        }
    }

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
            setUsers(res.data)
        }).catch(err => {
            console.log(err)
        })
        jpAxios.get(`/posts/${postId}`).then(res => {
            setData({
                userId: res.data.userId,
                id: res.data.id,
                title: res.data.title,
                body: res.data.body,

            })
        })
    }, []);

    return (
        <div className="row justify-content-center mt-5 ">
            <div className="col-9">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            {postId ? "ویرایش پست" : "افزودن پست جدید"}
                        </h4>
                        <form onSubmit={handleAddPost} >
                            <div className="form-group row mt-4">
                                <label htmlFor="name" className="col-md-2 col-form-label">کاربر</label>
                                <div className="col-md-10">
                                    <select name="" className="form-control" value={data.userId}
                                    onChange={(e)=>setData({... data ,
                                       userId: e.target.value})}>
                                        <option value="">کاربر مورد نظر را وارد کنید</option>
                                        {users.map(u=>(
                                            <option value={u.id} key={u.id} >{u.name}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="form-group row mt-4">
                                <label htmlFor="name" className="col-md-2 col-form-label">شناسه کاربر</label>
                                <div className="col-md-10">
                                    <input className="form-control" type="text" id="name" value={data.userId}
                                           onChange={(e) => setData({
                                               ...data,
                                               userId: e.target.value
                                           })}
                                    />
                                </div>
                            </div>
                            <div className="form-group row mt-4">
                                <label htmlFor="name" className="col-md-2 col-form-label">عنوان</label>
                                <div className="col-md-10">
                                    <input className="form-control" type="text" id="name" value={data.title}
                                           onChange={(e) => setData({
                                               ...data,
                                               title: e.target.value
                                           })}
                                    />
                                </div>
                            </div>

                            <div className="form-group row mt-3">
                                <label htmlFor="username" className="col-md-2 col-form-label">متن</label>
                                <div className="col-md-10">

                                    <textarea name="" id="" rows={5}  value={data.body} className="form-control"
                                              onChange={(e) => setData({
                                        ...data, body: e.target.value})}></textarea>

                                </div>
                            </div>





                            <div className="col-12 d-flex justify-content-end mt-4">
                                <button type="button" className="btn btn-outline-danger w-md mx-2 "
                                        onClick={() => navigate(-1)}
                                >بازگشت
                                </button>
                                <button type="submit" className="btn btn-outline-info w-md ">
                                    {postId ? "ویرایش " : "افزودن"}
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