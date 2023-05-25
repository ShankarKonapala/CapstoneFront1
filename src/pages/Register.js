import {Form } from 'antd'
import {Link, useNavigate} from 'react-router-dom'
import Input from 'antd/lib/input/Input'
import React from 'react'
import '../resources/authentication.css'
import axios from 'axios'

function Register() {
    const navigate = useNavigate()
    const onFinish = async (values) =>{
        try{
            await axios.post('https://capstoneback.onrender.com/api/users/register', values)
            // message.success('Registration successful!!!')
            console.log("Registration successful!!!")
            navigate('/home')
        } catch(error){
            // message.error('Something went wrong!');
            console.log("Something went wrong!")
        }
    }

  return (
    <div className='register'>
        <div className='row justify-content-center align-items-center w-100 h-150'>
            <div className='col-md-5'>
                <div className='lottie'>
                <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_1idqu1ac.json"  background="transparent"  speed="1"   loop autoplay></lottie-player>
                </div>
            </div>
            <div className='col-md-5'>
                <Form layout='vertical' onFinish={onFinish}>
                    <h1>Register</h1>
                    <br></br>
                    <Form.Item label='Name' name='name'>
                        <Input />
                    </Form.Item>

                    <Form.Item label='Email' name='email'>
                        <Input />
                    </Form.Item>

                    <Form.Item label='Password' name='password'>
                        <Input />
                    </Form.Item>
                    <div className='d-flex justify-content-between align-items-center'>
                        <Link to='/'>Already Registered, click here to Login</Link>
                        <button className='primary' type='submit'>Register</button>
                    </div>
                </Form>
                
            </div>
        </div>
    </div>
  )
}

export default Register
