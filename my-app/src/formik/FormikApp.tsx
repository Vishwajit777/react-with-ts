import React from 'react'
import { useFormik } from 'formik';

interface FiledTypes {
    name: string
    email: string
    password: string
}
const initialValues = {
    name: '',
    email: '',
    password: ''
}

export const FormikApp = () => {

    const formik = useFormik({
        initialValues,
        onSubmit: (values: FiledTypes) => {
            console.log("done", values)
        },
        validate: (values: FiledTypes) => {
            let errors = {
                name: '',
                email: '',
                password: ''
            }
            if (!values.name) {
                errors.name = "Name is required"
            }
            if (!formik.values.email) {
                errors.email = "Email is required"
            }
            else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }

            if (!values.password) {
                errors.password = 'Required'
            } else if (values.password.length < 8) {
                errors.password = 'Must be 8 characters or more'
            } else if (values.password === '12345678') {
                errors.password = 'Must not be 12345678 !!!'
            }
            return errors
        }
    })
    if (!formik.values) { console.log('form val', formik.values) }
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-6">
                    <form onSubmit={formik.handleSubmit}>

                        <div className="form-group">

                            <label >Name</label>
                            <input
                                type="text" className="form-control"
                                placeholder="Name" name='name'
                                onChange={formik.handleChange}
                                value={formik.values.name}
                                onBlur={formik.handleBlur} />
                            {formik.touched.name && formik.errors.name
                                ?
                                <div>
                                    {formik.errors.name}
                                </div>
                                :
                                null}
                        </div>

                        <div className="form-group">
                            <label >Email address</label>
                            <input
                                type="email" className="form-control"
                                placeholder="Email" name='email'
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                onBlur={formik.handleBlur} />
                            {formik.touched.email && formik.errors.email
                                ?
                                <div>
                                    {formik.errors.email}
                                </div>
                                :
                                null}
                        </div>
                        <div className="form-group">
                            <label >Password</label>
                            <input
                                type="password" className="form-control "
                                id="passwordInput" placeholder="Password"
                                name='password'
                                onChange={formik.handleChange}
                                value={formik.values.password}
                                onBlur={formik.handleBlur} />
                            {formik.touched.password && formik.errors.password
                                ?
                                <div>
                                    {formik.errors.password}
                                </div>
                                :
                                null}
                        </div>
                        <button type="submit"
                            className="btn btn-primary col-xs-offset-9 col-xs-3 mt-2">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
