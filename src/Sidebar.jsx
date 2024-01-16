import React, { useContext } from 'react';

import style from './style.module.css';
import {MainContext} from "./contexts/MainContext";

const Sidebar = ()=>{

    const {showMenu,setShowMenu} =useContext(MainContext)

    return (
        <div className={`${style.sidebar_section} bg-secondary`} style={showMenu ? {right:0} : {}}>
            <ul className={`${style.sidebar_list} m-0 p-0`}>
                <li className={style.sidebar_avatar}>
                    <img src="/assets/images/user2.jpg" alt="" />
                    <h5 className="text-center mt-3">محمد رضایی</h5>
                    <h6 className="text-center mt-2">مدیر</h6>
                </li>
                <li className="py-3  border-bottom  border-secondary">

                    <a href="/"> <i className="fa fa-user mx-3 fa-1x"></i>
                        کاربران</a>
                </li>
                <li className=" py-3 border-bottom  border-secondary">

                    <a href="/"> <i className="fa fa-newspaper mx-3 fa-1x"></i>
                        پست ها</a>
                </li >
                <li className=" py-3 border-bottom border-secondary ">

                    <a href="/"><i className="fa fa-image mx-3 fa-1x"></i>
                        گالری</a>
                </li>
                <li className="py-3  border-bottom border-secondary">

                    <a href="/"><i className="fa fa-list-ul mx-3 fa-1x"></i>
                        کارها</a>
                </li>
            </ul>
        </div>
    )

}

export default Sidebar;