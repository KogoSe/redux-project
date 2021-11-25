import React,{useState} from 'react'
import { AUTH_MODEL } from '../../Models/AuthenModel'
import { useDispatch } from 'react-redux'
import { Form, Input, Button, Checkbox } from 'antd'
import { useNavigate } from 'react-router-dom'

const LoginComponents = () => {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const dispath = useDispatch()
    const history = useNavigate()

    
    const onLogin =async()=>{
        try {
            console.log(username)
            if(username !== AUTH_MODEL.username || password !== AUTH_MODEL.password)
                return alert("Username and Password is invalid!")
            
            if(username === AUTH_MODEL.username && password === AUTH_MODEL.password){
                await dispath({ type: "set_user", user: AUTH_MODEL})
                await history("/user/home")
            }

        } catch (error) {
            console.log(error.message);
        }
    }
    return (
        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
             <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
     
      autoComplete="on"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input  value={username} onChange={e=>setUsername(e.target.value)}/>
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password value={password} onChange={e=>setPassword(e.target.value)}/>
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" onClick={onLogin} >
          Login
        </Button>
      </Form.Item>
    </Form>
        </div>
    )
}

export default LoginComponents
