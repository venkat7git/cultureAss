

import Swal from 'sweetalert2';


import { useState } from 'react'
import './index.css'

const UserFrom = ()=>{

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [message,setMessage] = useState('');
    const [errName,seterrName] = useState('')
    const [errEmail,seterrEmail] = useState('')
    const [errMsg,seterrMsg] = useState('')
    const [trigg,setTrigg] = useState(false);

    console.log(<button type="submit" value={true} className="submit-button">
        Submit
      </button>)

    const onSubmitForm = (event)=>{
        event.preventDefault();
        Swal.fire({icon:"success",title:"success"}
        )
        
    }

    const SweetAlert = ()=>{

    }

    const onChangeName = (event)=>{
        setName(event.target.value);
        if(event.target.value){
            seterrName('')
        }
    }
    const onChangeEmail = (event)=>{
        setEmail(event.target.value);
        if(event.target.value){
            seterrEmail('')
        }
    }
    const onChangeMessage = (event)=>{
        setMessage(event.target.value);
        if(event.target.value){
            seterrMsg('')
        }
    }
    


    return (
            <form className='form-container' onSubmit={onSubmitForm}>
                <h1 className='heading'>User Form</h1>
                <div className='input-container'>
                    <label htmlFor='name'>NAME</label>
                    <br/>
                    <input type='text' onBlur={(event)=> (event.target.value.length === 0?seterrName('please enter name'):seterrName(''))} onChange={onChangeName} placeholder='Enter your name' value={name} id="name" required/>
                    <p className='err-para'>{errName}</p>
                    
                </div>
                <div className='input-container'>
                    <label htmlFor="email">EMAIL</label>
                    <br/>
                    <input type='email' onBlur={(event)=> (event.target.value.length === 0?seterrEmail('please enter email'):seterrEmail(''))} onChange={onChangeEmail} placeholder='Enter your email' value={email} id="email" required/>
                    <p className='err-para'>{errEmail}</p>
                    
                </div>
                <div className='textarea-input'>
                    <label htmlFor="message">MESSAGE</label>
                    <br/>
                    <textarea className='text-area' onBlur={(event)=> (event.target.value.length === 0?seterrMsg('please enter message'):seterrMsg(''))} onChange={onChangeMessage} id='message' value={message} cols={32} rows={8} placeholder = 'Enter Your Message'>

                    </textarea>
                    <p className='err-para'>{errMsg}</p>
                </div>
                <div className='button-container'>
                <button type="submit" className="submit-button">
                    Submit
                </button>
                </div>

            </form>
    )
}

export default UserFrom