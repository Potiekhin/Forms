import React from "react";
import "../components/Form.css";
import useForm from "./useForm";
import validate from "../validate";

function Form() {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submit,
    validate
  );
  function submit() {
    console.log(values);
  }

  return (
    <div>
      <form noValidate onSubmit={handleSubmit}>
        <div>
          <label>Login</label>
          <div>
            <input
              name="login"
              type="login"
              value={values.login}
              onChange={handleChange}
              className={`${errors.login && "inputError"}`}
            />
            {errors.login && <p className="error">{errors.login}</p>}
          </div>
        </div>
        <div>
          <label>Email</label>
          <div>
            <input
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              className={`${errors.email && "inputError"}`}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
        </div>
        <div>
          <label>Password</label>
          <div>
            <input
              name="password"
              type="password"
              value={values.password}
              onChange={handleChange}
              className={`${errors.password && "inputError"}`}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
        </div>
        <div>
          <label>Confirm Password</label>
          <div>
            <input
              name="confirm_password"
              type="password"
              value={values.confirm_password}
              onChange={handleChange}
              className={`${errors.confirm_password && "inputError"}`}
            />
            {errors.confirm_password && (
              <p className="error">{errors.confirm_password}</p>
            )}
          </div>
        </div>
        <div>
          <label>Phone</label>
          <div>
            <input
              name="phone"
              type="phone"
              value={values.phone}
              onChange={handleChange}
              className={`${errors.phone && "inputError"}`}
            />
            {errors.phone && <p className="error">{errors.phone}</p>}
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
