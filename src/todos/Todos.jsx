import React from 'react';
import style from '../style.module.css'
import Counter from "./Counter";
import useTitle from "../hooks/useTitle";
import useCounter from "../hooks/useCounter";

const Todos = ()=>{
    const [count1 , increment1 , decrement1 , reset1] =useCounter(1,5)
    useTitle("کار ها")
    return (
        <div className={`${style.item_content} mt-5 p-4 container-fluid`}>
           <div className="text-center my-3">
               <h4 className="text-center">مدیریت کارها </h4>
               <h3 className="text-center my-3 text-info">{count1}</h3>
               <button className="btn btn-success" onClick={increment1}>افزایش</button>
               <button className="btn btn-danger" onClick={decrement1}>کاهش</button>
               <button className="btn btn-warning" onClick={reset1}>ریست</button>
           </div>

        </div>
    )

}

export default Todos;