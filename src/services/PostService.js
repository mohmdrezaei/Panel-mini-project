import {jpAxios} from "../JpAxios";
import Swal from "sweetalert2";
export const getPostService = ()=>{
   return  jpAxios.get("/posts");
}


export  const setPostService = async (data) => {
    const res = await jpAxios.post("/posts", data);
    if (res) {
        console.log(res)
        Swal.fire({
            title: "عملیات موفق",
            text: ` پست شما با موفقیت ایجاد شد`,
            icon: "success"
        });
    }
}

export const updatePostService = async (data,postId) => {
    const res = await  jpAxios.put(`/posts/${postId}`, data);
    if (res) {
        console.log(res)
        Swal.fire({
            title: "عملیات موفق",
            text: ` پست مورد نظر با موفقیت ویرایش شد`,
            icon: "success"
        });
    }
}
