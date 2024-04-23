import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useReducer, useState} from "react";
import axios from "axios";
import Swal from "sweetalert2";
import {jpAxios} from "../JpAxios";
import {setUserService, updateUserService} from "../services/UserService";
import {setPostService, updatePostService} from "../services/PostService";
import {init, reducer} from "./PostReducer";

const AddPost2 = () => {
    const {postId} = useParams();
    const navigate = useNavigate();
 const [data , dispatch] =useReducer(reducer , init)


    const handleAddPost = (e) => {
        e.preventDefault();
        if (!postId) {
            setPostService(data.postData);
        } else {
          updatePostService(data.postData,postId)
        }
    }
const setInputValues = (e,propName) => {
dispatch({
    type : "setInputValue",
    propName :propName,
    propValue:e.target.value
})
}
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
            dispatch({
                type: "changeUser",
                payload : res.data
            })
        }).catch(err => {
            console.log(err)
        })
      if(postId){
          jpAxios.get(`/posts/${postId}`).then(res => {
              dispatch({
                  type: "isUpdate",
                  payload : res.data
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
                            {postId ? "ویرایش پست" : "افزودن پست جدید"}
                        </h4>
                        <form onSubmit={handleAddPost} >
                            <div className="form-group row mt-4">
                                <label htmlFor="name" className="col-md-2 col-form-label">کاربر</label>
                                <div className="col-md-10">
                                    <select name="" className="form-control" value={data.postData.userId}
                                    onChange={(e)=>setInputValues(e,"userId")}>
                                        <option value="">کاربر مورد نظر را وارد کنید</option>
                                        {data.users.map(u=>(
                                            <option value={u.id} key={u.id} >{u.name}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="form-group row mt-4">
                                <label htmlFor="name" className="col-md-2 col-form-label">شناسه کاربر</label>
                                <div className="col-md-10">
                                    <input className="form-control" type="text" id="name" value={data.postData.userId}
                                           onChange={(e) =>setInputValues(e,"userId")}
                                    />
                                </div>
                            </div>
                            <div className="form-group row mt-4">
                                <label htmlFor="name" className="col-md-2 col-form-label">عنوان</label>
                                <div className="col-md-10">
                                    <input className="form-control" type="text" id="name" value={data.postData.title}
                                           onChange={(e) =>setInputValues(e,"title")}
                                    />
                                </div>
                            </div>

                            <div className="form-group row mt-3">
                                <label htmlFor="username" className="col-md-2 col-form-label">متن</label>
                                <div className="col-md-10">

                                    <textarea name="" id="" rows={5}  value={data.postData.body} className="form-control"
                                      onChange={(e) =>setInputValues(e,"body")}></textarea>

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

export default AddPost2;