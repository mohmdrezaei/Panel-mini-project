import React, {useEffect, useState} from 'react';
import style from '../style.module.css'
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import {getPostService} from "../services/PostService";


const Posts = () => {
    const navigate = useNavigate();
    const [posts, setPosts] = useState([])
    const [mainPosts , setMainPosts]=useState([])
    const [uId , setUId] = useState(0)

    const handleSearch = () => {
        if (uId > 0 ) setPosts(mainPosts.filter(p=>p.userId == uId))
        else  setPosts(mainPosts)
    }
    const handleDeleteItem = () => {}
    const getPosts = async () => {
        const res = await getPostService();
        setPosts(res.data)
        setMainPosts(res.data)
    }

    useEffect(() => {
        console.log("first render")
        getPosts()
    }, []);
    useEffect(() => {
        console.log("every render")
    });
    useEffect(() => {
        console.log("every change")
        handleSearch()
    },[uId]);


    return (
        <div className={`${style.item_content} mt-5 p-4 container-fluid`}>
            <h4 className="text-center">مدیریت پست ها</h4>
            <div className="row my-2 mb-4 justify-content-between w-100 mx-0">
                <div className="form-group col-10 col-md-6 col-lg-4">
                    <input type="number" className="form-control shadow" placeholder="جستجو"
                           value={uId}
                       onChange={(e)=>setUId(e.target.value)}/>
                </div>
                <div className="col-2 text-start px-0">
                    <Link to="/post/add">
                        <button className="btn btn-success">
                            <i className="fas fa-plus text-light"></i>
                        </button>
                    </Link>
                </div>
            </div>
            {posts.length ?
                <table className="table bg-light shadow">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>شناسه کاربر</th>
                        <th>عنوان</th>
                        <th>متن</th>
                        <th>عملیات</th>
                    </tr>
                    </thead>
                    <tbody>

                    {posts.map(p => (
                        <tr key={p.id}>
                            <td>{p.id}</td>
                            <td className="text-primary" onClick={()=>setUId(p.userId)}
                                style={{cursor:"pointer"}}>{p.userId}</td>
                            <td>{p.title}</td>
                            <td>{p.body}</td>
                            <td>
                                <i className="fas fa-edit text-warning mx-2 pointer"
                                   onClick={() => navigate(`/post/add/${p.id}`)}
                                ></i>
                                <i onClick={() => handleDeleteItem(p.id)}
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

};

export default Posts;