import React from "react";
import Swal from "sweetalert2";

const WithAlert2 = (props) => {
    const Confirm = (message) => {
        return  Swal.fire({
            title: "حذف رکورد",
            text: message,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "بله حذف کن!",
            cancelButtonText : "لغو",
            dangerMode : true
        })
    }
    const Alert = (message,icon) => {
        return Swal.fire({
            text: message,
            icon: icon
        });
    }
  return(
<>
    {props.render(Confirm, Alert)}
</>
  )
}
export default WithAlert2