import React, { useContext, useState } from 'react';
import {useAuthState} from 'react-firebase-hooks/auth'
import { Context } from '../../index';
import classes from './Chat.module.css'
import {useCollectionData} from 'react-firebase-hooks/firestore'
import Load from '../Load/load';
import firebase from 'firebase';

const Chat = () => {

    const {auth, firestore} = useContext(Context)
    const [user] = useAuthState(auth)
    const [value, setValue] = useState('')
    const [messages, loading] = useCollectionData(
        firestore.collection('messages').orderBy('createdAt')
    )

    const sendMessage = async () => {
        firestore.collection('messages').add({
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
            text: value,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setValue('')
    }

    if (loading) {
        return <Load />
    }

    return (
        <div className = {classes.chat} style = {{height: window.innerHeight - 60}}>
            <div className = {classes.window}>
                {messages.map( messages => 
                    <div className = {classes.message} 
                    style = {{
                        border: user.uid === messages.uid ? '3px solid #2EE59D' : '3px solid black',
                        marginLeft: user.uid === messages.uid ? 'auto' : '10px',
                    }}> 
                    <div className = {classes.info}>
                        <img className = {classes.avatar} src = {messages.photoURL}/>
                        <div className = {classes.name}>{messages.displayName}</div>
                    </div>
                        <div className = {classes.text} >{messages.text}</div>
                    </div>
                    ) }
            </div>
            <form className = {classes.form}>
                <input 
                    className = {classes.input} 
                    maxlength = "90" 
                    value = {value} 
                    onChange = {e => setValue(e.target.value)}>

                </input>
                <button className = {classes.button} onClick={sendMessage} type = 'button'>отправить</button>
                
            </form>
        </div>
    )
}

export default Chat;