import React, {useState} from 'react';
import { Formik, Form, Field } from "formik";
import {RegisterSchema} from "./register.schema";
import { useHistory} from 'react-router-dom';
import config from '../config/index';
import logo from './logo.png'
import './Register.scss'



function Register() {
    const history = useHistory();
    const [showError, setError] = useState(false);

    const submit  = async  (values) =>{
        setError(false);
            const res = await fetch(config.apiUrl +'/users', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            });
            if(res.status === 201){
                console.log('success');
                history.push('/login')
            } else if(res.status === 409){
                setError(true);
                console.log('email or username exists')
            } else {
                console.log('Unknown Error');
            }
         return res;
    };
    return (
        <div className="d-flex justify-content-center">
            <div className="flex-lg-row flex-column col-lg-8 d-flex pt-5"  >
                <img className="logo m-5" src={logo} alt=""/>
                <Formik
                    initialValues={{username:'', password: '', email:'', agreeTerms:false}}
                validationSchema={RegisterSchema}
                onSubmit={submit}>
                    {({errors, touched, isSubmitting}) =>(
                        <div>
                        <h2 className="text-center">Registration</h2>
                        <Form className="mt-4">
                            {showError && <div className="form-group">
                                 <small className="text-danger">
                                    username or email already exists
                                </small>
                            </div>}
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <Field  name="username" type="username" className="form-control" id="username" placeholder="2-16 characters" />
                                { errors.username && touched.username && <small className="text-danger pl-2">{errors.username}</small> }
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <Field name="email"type="email" className="form-control" id="email" placeholder="Enter email address"  />
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                { errors.email && touched.email && <small className="text-danger pl-2">{errors.email}</small> }
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <Field name="password" type="password" className="form-control" id="password" placeholder="6-16 characters" />
                                { errors.password && touched.password && <small className="text-danger pl-2">{errors.password}</small> }
                            </div>
                            <div className="form-group form-check">
                                <Field name="agreeTerms" type="checkbox" className="form-check-input" id="check" />
                                <label className="form-check-label" htmlFor="checkBox">Agree to terms</label>
                                    <div>
                                    { errors.agreeTerms && touched.agreeTerms && <small className="text-danger pl-2">{errors.agreeTerms}</small> }
                                    </div>
                            </div>
                            <button type="submit" className="regButton w-100 btn btn-dark mb-4" disabled={isSubmitting}>Submit</button>
                        </Form>
                        </div>
                    )}
                </Formik>
            </div>
        </div>
    );
}

export default Register;