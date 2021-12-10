import React from 'react'
import { useForm } from "react-hook-form";

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        trigger,
      } = useForm();

      const onSubmit = (data:any) => {
        console.log(data);
        reset();
      };
    
  return (
    <div className="container pt-3">
    <div className="row justify-content-sm-center pt-3">
      <div className="col-sm-6 shadow round pb-3">
        <h1 className="text-center pt-3 text-secondary">Example Form</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label className="col-form-label">Name:</label>
            <input
              type="text"
              className={`form-control ${errors.name && "invalid"}`}
              {...register("name", { required: "Name is Required" })}
              onKeyUp={() => {
                trigger("name");
              }}
            />
            {errors.name && (
              <small className="text-danger">{errors.name.message}</small>
            )}
          </div>
          <div className="form-group">
            <label className="col-form-label">Age:</label>
            <input
              type="text"
              className={`form-control ${errors.age && "invalid"}`}
              {...register("age", {
                required: "Age is Required",
                min: {
                  value: 13,
                  message: "Minimum Required age is 13",
                },
                max: {
                  value: 65,
                  message: "Maximum allowed age is 65",
                },
                pattern: {
                  value: /^[0-9]*$/,
                  message: "Only numbers are allowed",
                }
              })}
              onKeyUp={() => {
                trigger("age");
              }}
            />
            {errors.age && (
              <small className="text-danger">{errors.age.message}</small>
            )}
          </div>
          <div className="form-group">
            <label className="col-form-label">Phone:</label>
            <input
              type="text"
              className={`form-control ${errors.phone && "invalid"}`}
              {...register("phone", { required: "Phone is Required",
              pattern: {
                value: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                message: "Invalid phone no",
              },
             })}
             onKeyUp={() => {
              trigger("phone");
            }}
            />
            {errors.phone && (
              <small className="text-danger">{errors.phone.message}</small>
            )}
          </div>
              <div className="form-group">
            <label className="col-form-label">Email:</label>
            <input
              type="text"
              className={`form-control ${errors.email && "invalid"}`}
              {...register("email", { required: "Email is Required" ,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              }})}
              onKeyUp={() => {
                trigger("email");
              }}
            />
            {errors.email && (
              <small className="text-danger">{errors.email.message}</small>
            )}
          </div>

          {/* <input
            type="submit"
            className="btn btn-primary my-3"
            value="Send message"
          /> */}
             <button type="submit" className="btn btn-primary my-3">Submit</button>

        </form>
      </div>
    </div>
  </div>
  )
}

export default Login
