import React, {useContext} from 'react';
import { Formik, Form, Field } from "formik";
import { LoginSchema } from "../Login/Login.schema";
import { UserContext } from '../user-context';
import { Link, useHistory } from 'react-router-dom';
import config from '../config/index';



function Login() {

    const { setUser } = useContext(UserContext);
    const history = useHistory();

    const submit = async (values) =>{
        const res = await fetch(config.apiUrl + '/users/login', {
            method : 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            credentials:"include",
            body:JSON.stringify(values)
        });

        if(res.status === 200){
            const loggedUser = await res.json();
            setUser(loggedUser);
            history.push('/')
        } else if(res.status === 401){
            console.log('no')
        } else{
            console.log('error')
        }
    };
    return (
            <div>
                <h2>Login Page</h2>
                <div className="Login container m-5">
                    <div>
                    </div>
                    <Formik
                        initialValues={{username:'', password: ''}}
                        onSubmit={submit}
                        validationSchema={LoginSchema}
                    >
                        {({errors, touched, isSubmitting}) =>(
                            <Form className="col-4 mt-4">
                                <div className="form-group">
                                    <label htmlFor="username">Username</label>
                                    <Field  name="username" type="username" className="form-control" id="username" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <Field name="password" type="password" className="form-control" id="password" />
                                </div>
                                <button type="submit" className="btn btn-dark" disabled={isSubmitting}>Login</button>
                                <hr className="mt-4" />
                                <div className="text-center">
                                    Don't have an account? <Link to="/register" className="Login__register-link">Register</Link>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
    );
}

export default Login;