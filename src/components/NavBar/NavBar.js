import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { LOGIN_ROUTE } from '../../utils/consts';
import classes from './NavBar.module.css';
import {useAuthState} from 'react-firebase-hooks/auth';
import {Context} from '../../index';

const Navbar = () => {
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)
    return (
        <div className = {classes.nav}>
            {user ?
            <button onClick = {() => auth.signOut()} className = {classes.button}>выйти</button>
            :
            <NavLink to = {LOGIN_ROUTE}>
            <button className = {classes.button}>логин</button>
            </NavLink>
            }
            
            
        </div>
    )
}

export default Navbar;