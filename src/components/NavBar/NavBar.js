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
            <div><a href="" className={classes.log}>Разработал <span className={classes.log__name}>PROSTO_EM</span></a></div>
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