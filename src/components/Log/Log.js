import React, { useContext } from 'react';
import classes from './Log.module.css';
import {Context} from '../../index';
import firebase from 'firebase';

const Log = () => {
    
    const {auth} = useContext(Context)

    const login = async () =>{
        const provider =new firebase.auth.GoogleAuthProvider()
        const {user} = await auth.signInWithPopup(provider)
        console.log(user)
    } 

    return (
        <div className = {classes.main} style = {{height: window.innerHeight - 60}}>
            <button className = {classes.button} onClick = {login} >войти с помощью GOOGLE</button>
        </div>
    )
}

export default Log;