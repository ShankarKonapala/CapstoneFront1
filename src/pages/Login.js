import {Form } from 'antd'
import {Link, useNavigate} from 'react-router-dom'
import Input from 'antd/lib/input/Input'
import React from 'react'
import '../resources/authentication.css'
import axios from 'axios'


function Login() {
  const navigate = useNavigate()
  const onFinish = async (values) =>{
    try{
      const response = await axios.post('https://646f487af48025004efeef43--phenomenal-donut-75a29d.netlify.app/api/users/login', values)
      localStorage.setItem('userdata', JSON.stringify(response) )
      // message.success("Login successful!")
      console.log("LogIn successful")
      navigate('/home')
    } catch (error){
      // message.error('Login failed!')
      console.log("LogIn Failed")
    }
}

return (
<div className='login'>
    <div className='row justify-content-center align-middle'>
        <div className='col-md-5'>
            <div className='lottie'>
            <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_1idqu1ac.json"  background="transparent"  speed="1"   loop autoplay></lottie-player>
            </div>
        </div>
        <div className='col-md-5'>
            <Form layout='vertical' onFinish={onFinish}>
                <h1>Log-in</h1>
                <br></br>
                <Form.Item label='Email' name='email'>
                    <Input />
                </Form.Item>

                <Form.Item label='Password' name='password'>
                    <Input />
                </Form.Item>
                <div className='d-flex justify-content-between align-items-center'>
                    <Link to='/register'>Not yet registered? click here to Login</Link>
                    <button className='primary' type='submit'>LOGIN</button>
                </div>
            </Form>
            
        </div>
    </div>
</div>
)
}

export default Login