import React, {useContext} from 'react';
import { Formik, Form, Field } from "formik";
import Avatar from "../../../common/Avatar/Avatar";
import {CommentCreateSchema} from "./CommentCreate.schema";
import {UserContext} from "../../../user-context";
import config from '../../../config/index'

function CommentCreate({postId, onAdd}) {
    const { user} = useContext(UserContext);

   async function submit (values, {resetForm}) {
       const newComment = await (await fetch(`${config.apiUrl}/posts/${postId}/comment`, {
           method: 'PUT',
           headers: {
               'Content-Type': 'application/json'
           },
           credentials: 'include',
           body: JSON.stringify(values)
       })).json()
       onAdd(newComment)
       resetForm();
   }

    return (
        <div className="CommentCreate">
            <Formik
                initialValues={{content:''}}
                onSubmit={submit}
                validationSchema={CommentCreateSchema}>
                {({isSubmitting}) => (
                    <Form>
                        <div className="form-group d-flex">
                            <div className="mr-2">
                                <Avatar size="sm" image={user.avatar}/>
                            </div>
                            <Field type="textarea" name="content" className="form-control"/>
                        </div>
                        <div className="form-group text-right">
                            <button className="btn btn-primary btn-sm"
                                    disabled={isSubmitting}>
                                submit
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default CommentCreate;