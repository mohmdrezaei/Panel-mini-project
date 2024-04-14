import {useState} from "react";
import Swal from "sweetalert2";

const WithAlert = MainComponent => {
    const NewComponent = (props) => {
       const Confirm = (message) => {
          return  Swal.fire({
               title: "حذف رکورد",
               text: message,
               icon: "warning",
               showCancelButton: true,
               confirmButtonColor: "#3085d6",
               cancelButtonColor: "#d33",
               confirmButtonText: "بله حذف کن!",
               cancelButtonText : "لغو"
           })
       }
       const Alert = (message,icon) => {
         return Swal.fire({
             text: message,
             icon: icon
         });
       }
        return (
            <MainComponent {... props} Confirm={Confirm} Alert={Alert}/>
        )
    }
    return NewComponent
}
export default WithAlert;