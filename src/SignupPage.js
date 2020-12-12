import React from 'react'
import {Link} from 'react-router-dom'
import {Formik, Field, Form, ErrorMessage} from 'formik'
const validateForm = (values) =>{
    let errors = {}
    if(!values.userEmail){ 
        errors.userEmail = 'Required'
    }
    //eslint-disable-next-line
    if(! /^[a-z0-9._%+-]+@[a-z]+\.[a-z\.]+$/i.test(values.userEmail)){
        errors.userEmail= 'Invalid Email'
    }
    if(values.phnum.length !== 10){ 
        errors.phnum = 'Enter valid phone number'
    }
    if(/[0-9]+/.test(values.userName)){
        errors.userName = 'Enter a valid name'
    }
    if(values.password.length < 8){
        errors.password = 'Password must be at least 8 characters long'
    }
    if(values.password !== values.password2){
        errors.password2='Passwords do not match'
    }
    return errors
}
const handleFormSubmit = (values, setSubmitting, func) =>{
    setTimeout(()=>{
        alert('Form successfully submitted')
        func(values)
        setSubmitting(false)
    }, 500)
}
const {useState} = React;
function SignupPage({props, func}){
    const [flag, setFlag] = useState(false)
    return(
        <div className="container-fluid">
            <Formik
                initialValues={{userName: '', userEmail: '', phnum: '', password: '', password2: '' }}
                validate = { validateForm }  
                onSubmit = {(values, {setSubmitting})=>{
                    handleFormSubmit(values, setSubmitting, func);
                    setFlag(true)
                    }
                }             
            >
                <Form>
                    <div className ="form-group">
                        <label className="form-label" htmlFor="userName">Name</label>
                        <Field className="form-control" id="userName" type="text" name="userName" placeholder="Mihir" />
                        <small style={{color:"red"}}><ErrorMessage className="form-text" name="userName"/></small>
                    </div>

                    <div className ="form-group">
                        <label className="form-label" htmlFor="userEmail">Email</label>
                        <Field className="form-control" id="userEmail" type="email" name="userEmail" placeholder="mihir123@gmail.com" />
                        <small style={{color:"red"}}><ErrorMessage className="form-text" name="userEmail"/></small>
                    </div>

                    <div className ="form-group">
                        <label className="form-label"  htmlFor="phnum">Phone Number</label>
                        <Field className="form-control" id="phnum" name="phnum" placeholder="1234567890" />
                        <small style={{color:"red"}}><ErrorMessage className="form-text" name="phnum"/></small>
                    </div>

                    <div className ="form-group">
                        <label className="form-label" htmlFor="password">Password</label>
                        <Field className="form-control" id="password" name="password" type="password" placeholder="" />
                        <small style={{color:"red"}}><ErrorMessage className="form-text" name="password" /></small>
                    </div>
                    <div className ="form-group">
                        <label className="form-label" htmlFor="password2">Retype Password</label>
                        <Field className="form-control" id="password2" name="password2" type="password" placeholder="" />
                        <small style={{color:"red"}}><ErrorMessage  className="form-text" name="password2"/></small>
                    </div>
                    <div className="row justify-content-center">
                        <button className="btn" id="submit-button" type="submit" style={{display: flag ? "none" : ""}}>Register Profile</button>
                    </div>
                    <div className="row justify-content-center">
                        <Link to="/todolist" className="btn"  id="link-button" style={{display: flag ? "" : "none"}}>Proceed to To-Do App<i className="fas fa-clipboard-list"></i></Link>
                        
                    </div>
                
                </Form>
                
            </Formik> 
        </div>
    )
}

export default SignupPage