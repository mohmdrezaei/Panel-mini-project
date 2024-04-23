import React, {useContext} from 'react';
import {MainContext} from "./contexts/MainContext"
import Gallery from './gallery/Gallery';
import Posts from './posts/Posts';
import style from './style.module.css'
import Todos from './todos/Todos';
import Users from './users/Users';
import {Navigate, Route, Routes} from "react-router-dom";
import AddUser from "./users/AddUser";
import WithAlert2 from "./HOC/WithAlert2";
import AddPost from "./posts/AddPost";
import AddPost2 from "./posts/AddPost2";

const Content = () => {
    const {showMenu, setShowMenu} = useContext(MainContext)
 const renderUser = (Confirm, Alert) => <Users Confirm={Confirm} Alert={Alert}/>
    const handleShowMenu = (e) => {
        e.stopPropagation();
        setShowMenu(!showMenu)
    }
    return (
        <div className={style.content_section} onClick={() => {
            setShowMenu(false)
        }}>
            <i className={`${style.menu_button} fas fa-bars text-dark m-2 pointer`}
               onClick={handleShowMenu}
            ></i>
            <Routes>
                <Route path='/user' element={
                    <WithAlert2 render={renderUser}/>
                }/>
                <Route path='/user/add' element={<AddUser/>}>
                    <Route path=":userId"/>
                </Route>
                <Route path='/post' element={<Posts/>}/>
                <Route path='/post/add' element={<AddPost2/>}>
                    <Route path=":postId"/>
                </Route>
                <Route path='/gallery' element={<Gallery/>}/>
                <Route path='/todo' element={<Todos/>}/>
                <Route path='*'  element={
                    <WithAlert2 render={renderUser}/>
                }/>
            </Routes>
        </div>
    )

}

export default Content;