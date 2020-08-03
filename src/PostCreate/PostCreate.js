import React from 'react';
import { Formik, Form, Field } from "formik";
import {PostCreateSchema} from "../PostCreate/PostCreate.schema"
import config  from '../config/index'
import {useHistory} from "react-router-dom";
import  Loader  from '../common/Loader/Loader'







function PostCreate(props) {

    const buildFormData = (values) =>{
        const data = new FormData();
        for(const key in values){
            data.append(key, values[key]);
        }
        return data;
    };
    const history = useHistory();

    const submit = async (values) =>{
        const data = buildFormData(values)
       const res = await fetch(`${config.apiUrl}/posts`, {
            method : 'PUT',
            credentials:"include",
            body:data
        });
        if(res.status === 201){
            history.push('/')
        } else if(res.status === 401){
            console.log('no')
        } else {
            console.log('error')
        }
    };
    return (
        <div>
            <h2>Create Post</h2>

            <Formik
                initialValues={{image:'', description: ''}}
                onSubmit={submit}
                validationSchema={PostCreateSchema}
            >
                {({isSubmitting, setFieldValue}) =>(
                    <Form className="col-4 mt-4">
                        <div className="form-group">
                            <label htmlFor="image">Select Image</label>
                            <input type="file" id="image" name="image" onChange={(e) =>{
                                setFieldValue('image', e.currentTarget.files[0])
                            }}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <Field as="textarea" name="description" className="form-control" id="description" />
                        </div>
                        <button type="submit" className="btn btn-dark" disabled={isSubmitting}>Post</button>
                        <Loader show={isSubmitting}/>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default PostCreate;