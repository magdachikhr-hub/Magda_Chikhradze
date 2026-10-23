import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  userName: yup.string().required("userName is required!!!"),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is required!!!"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters long!!!")
    .required("Password is required!!!"),
});

function Forms() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div style={{ border: "1px solid black" }}>
      <h3>welcome to the registration form</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ marginTop: "8px" }}>
          <label>userName:</label>
          <input
            type="text"
            placeholder="Enter your username"
            {...register("userName")}
          />
          <div>
            {errors.userName && (
              <p style={{ fontSize: "12px", color: "red", margin: "0" }}>
                {errors.userName.message}
              </p>
            )}
          </div>
        </div>

        <div style={{ marginTop: "8px" }}>
          <label>Email:</label>
          <input
            type="email"
            placeholder="Enter your email"
            {...register("email")}
          />
          <div>
            {errors.email && (
              <p style={{ fontSize: "12px", color: "red", margin: "0" }}>
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        <div style={{ marginTop: "8px" }}>
          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter your password"
            {...register("password")}
          />

          <div>
            {errors.password && (
              <p style={{ fontSize: "12px", color: "red", margin: "0" }}>
                {errors.password.message}
              </p>
            )}
          </div>
        </div>
        <button type="submit">register now!</button>
      </form>
    </div>
  );
}

export default Forms;
