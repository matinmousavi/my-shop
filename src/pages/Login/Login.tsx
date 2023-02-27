import React, { useState } from "react";
import "./Login.css";
import Header from "../../components/Header/Header";

interface FormValues {
  username: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

interface FormErrors {
  username?: string;
  email?: string;
  phone?: string;
  password?: string;
  confirmPassword?: string;
}

function LoginForm() {
  const [values, setValues] = useState<FormValues>({
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formErrors: FormErrors = {};

    if (!values.username) {
      formErrors.username = "Username is required";
    }

    if (!values.email) {
      formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      formErrors.email = "Email is invalid";
    }

    if (!values.phone) {
      formErrors.phone = "Phone is required";
    } else if (!/^[0-9]+$/.test(values.phone)) {
      formErrors.phone = "Phone is invalid";
    }

    if (!values.password) {
      formErrors.password = "Password is required";
    } else if (values.password.length < 8) {
      formErrors.password = "Password must be at least 8 characters";
    }

    if (values.password !== values.confirmPassword) {
      formErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      // TODO: handle successful form submission
    }
  }

  return (
    <>
    <Header />
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <span>{errors.username}</span>}
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <span>{errors.email}</span>}
        </label>
        <br />
        <label>
          Phone:
          <input
            type="tel"
            name="phone"
            value={values.phone}
            onChange={handleChange}
          />
          {errors.phone && <span>{errors.phone}</span>}
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <span>{errors.password}</span>}
        </label>
        <br />
        <label>
          Confirm Password:
          <input
            type="password"
            name="confirmPassword"
            value={values.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default LoginForm;
