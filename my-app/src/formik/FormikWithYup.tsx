import React from 'react';
import { useFormik } from "formik";
import * as Yup from 'yup';

function FormikWithYup() {
    const validationSchema = Yup.object().shape({
       
        firstName: Yup.string().required("FirstName is required"),
      
        lastName: Yup.string()
            .required("LastName is required"),
      
            address: Yup.string()
            .required("Address is required"),
       
            email: Yup.string().required("Email is required").email("Email is invalid"),
       
        password: Yup.string()
        .matches( /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            "Must Contain 8 Characters , One Uppercase, One Lowercase, One Number and one special case Character")
            .required("Password is required"),
            // .min(8, "Password must be at least 6 characters")
            // .max(16, "Password must not exceed 40 characters"),
            
        confirmPassword: Yup.string()
            .required("Confirm Password is required")
            .oneOf([Yup.ref("password"), null], "Confirm Password does not match"),
       
    });

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            address:"",
            email: "",
            password: "",
            confirmPassword: "",
          
        },
        validationSchema,
        onSubmit: (data) => {
            console.log("data", data)
        },
    });
    return (
       

      <div className="container-fluid">
        <div className="row">
            <div className="col-lg-6">
                <form onSubmit={formik.handleSubmit}>

                    <div className="form-group">
                    <label>First Name</label>
                    <input
                        type="text" className="form-control"
                        placeholder="First Name" name='firstName'
                        onChange={formik.handleChange}
                        value={formik.values.firstName}
                    />
                    <div className="text-danger">
                        {formik.errors.firstName ? formik.errors.firstName : null}
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="lastName"> Last Name </label>
                    <input
                        name="lastName"
                        type="text"
                        className="form-control"
                        onChange={formik.handleChange}
                        value={formik.values.lastName}
                    />
                    <div className="text-danger">
                        {formik.errors.lastName ? formik.errors.lastName : null}
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="address"> Address </label>
                    <input
                        name="address"
                        type="text"
                        className="form-control"
                        onChange={formik.handleChange}
                        value={formik.values.address}
                    />
                    <div className="text-danger">
                        {formik.errors.address ? formik.errors.address : null}
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="email"> Email </label>
                    <input
                        name="email"
                        type="email"
                        className="form-control"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                    <div className="text-danger">
                        {formik.errors.email ? formik.errors.email : null}
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="password"> Password </label>
                    <input
                        name="password"
                        type="password"
                        className="form-control"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                    />
                    <div className="text-danger">
                        {formik.errors.password ? formik.errors.password : null}
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="confirmPassword"> Confirm Password </label>
                    <input
                        name="confirmPassword"
                        type="password"
                        className="form-control"
                        onChange={formik.handleChange}
                        value={formik.values.confirmPassword}
                    />
                    <div className="text-danger">
                        {formik.errors.confirmPassword
                            ? formik.errors.confirmPassword
                            : null}
                    </div>
                </div>
             
            
               <div className="form-group">
                    <button type="submit" className="btn btn-primary mt-2">
                        Submit
                    </button>
                 
                </div>
            </form>
        </div>
        </div>
        </div>
    );
}

export default FormikWithYup;


