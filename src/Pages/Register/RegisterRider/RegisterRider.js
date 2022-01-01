import React from "react";
import { useForm } from "react-hook-form";

const RegisterRider = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    fetch("https://powerful-temple-12030.herokuapp.com/riders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000/",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Full Name</label>
      <input {...register("fullName", { required: true, maxLength: 20 })} />
      <label>Email</label>
      <input {...register("email", { required: true })} />
      <label>Age</label>
      <input {...register("age", { required: true })} /> <br />
      <label>Address</label>
      <input {...register("address", { required: true })} />
      <label>Phone</label>
      <input {...register("phone", { required: true })} />
      <br />
      <label>Licence Image</label>
      <input type="file" {...register("licenceImg", { required: true })} />
      <label>Area</label>
      <input {...register("area", { required: true })} />
      <br />
      <label>NID Image</label>
      <input type="file" {...register("nidImg", { required: true })} />
      <label>Profile Image</label>
      <input type="file" {...register("profileImg", { required: true })} />
      <br />
      <label>Vehicle Name</label>
      <input {...register("vehicleName", { required: true })} />
      <label>Vehicle Type</label>
      <input {...register("vehicleType", { required: true })} />
      <label>Vehicle Model</label>
      <input {...register("model", { required: true })} />
      <br />
      <label>Name Palate</label>
      <input {...register("namePalate", { required: true })} />
      <br />
      <label>Password</label>
      <input type="password" {...register("password", { required: true })} />
      <label>Confirm Password</label>
      <input
        type="password"
        {...register("passwordConfirm", { required: true })}
      />
      <input type="submit" />
    </form>
  );
};

export default RegisterRider;
