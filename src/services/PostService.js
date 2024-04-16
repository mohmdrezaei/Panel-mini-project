import {jpAxios} from "../JpAxios";
import Swal from "sweetalert2";
export const getPostService = ()=>{
   return  jpAxios.get("/posts");
}

/*
export  const setUserService = async (data) => {
    const res = await jpAxios.post("/users", data);
    if (res) {
        console.log(res)
        Swal.fire({
            title: "عملیات موفق",
            text: `کاربر ${res.data.name} با موفقیت ایجاد شد`,
            icon: "success"
        });
    }
}

export const updateUserService = async (data,userId) => {
    const res = await  jpAxios.put(`/users/${userId}`, data);
    if (res) {
        console.log(res)
        Swal.fire({
            title: "عملیات موفق",
            text: `کاربر ${res.data.name} با موفقیت ویرایش شد`,
            icon: "success"
        });
    }
}*/
