import React, { useContext } from 'react';

import style from './style.module.css';
import {MainContext} from "./contexts/MainContext";
import {Link, NavLink} from "react-router-dom";

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
                <NavLink className={({isActive})=> {return isActive ? "active" : "" }} to="/user">
                <li className="py-3  border-bottom  border-secondary">

                    <i className="fa fa-user mx-3 fa-1x"></i>
                        کاربران
                </li>
                </NavLink>
                <NavLink className={({isActive})=> {return isActive ? "active": "" }} to="/post">
                <li className=" py-3 border-bottom  border-secondary">

                     <i className="fa fa-newspaper mx-3 fa-1x"></i>
                        پست ها
                </li >
                </NavLink>
                <NavLink className={({isActive})=> {return isActive ? "active": "" }} to="/gallery">
                <li className=" py-3 border-bottom border-secondary ">
                    <i className="fa fa-image mx-3 fa-1x"></i>
                        گالری
                </li>
                </NavLink>

                <NavLink className={({isActive})=> {return isActive ? "active": "" }} to="/todo">
                <li className="py-3  border-bottom border-secondary">

                    <i className="fa fa-list-ul mx-3 fa-1x"></i>
                        کارها
                </li>
                </NavLink>
            </ul>
        </div>
    )

}

export default Sidebar;