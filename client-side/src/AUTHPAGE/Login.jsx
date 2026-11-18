import { useForm } from "react-hook-form";
import axios from "axios";
import { Link } from "react-router-dom";
const Login_page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/user/admin-detail/Auth/detail",
        data,
      );
      localStorage.setItem("token", response.data.token);
    } catch (error) {
      console.error("error", error.message);
    }
  };
  return (
    <>
      <div className="Login_containers">
        <p className="greeting_text">
          <li>🎨 🖱️ 🖌️</li>
          Sign in to <span>NEXPIXEL</span>
        </p>
        <form className="Form" onSubmit={handleSubmit(onSubmit)}>
          <label>Username</label>
          <br />
          <input
            type="text"
            {...register("email", {
              required: "Email is required",
              maxLength: 30,
              minLength: 3,
            })}
            placeholder="ENTER YOUR EMAIL"
          />
          {errors.email && (
            <span className="error">{errors.email.message}</span>
          )}
          <br />
          <label>Password</label>
          <br />
          <input
            type="password"
            {...register("password", {
              required: "Password is required",
            })}
            placeholder="ENTER YOUR PASSWORD"
          />
          {errors.password && (
            <span className="error">{errors.password.message}</span>
          )}
          <br />
          <button className="submit">Login</button>
          <br />
        </form>
        <p className="link">
          BACK TO THE WELCOME PAGE?
          <Link to="/" className="a">
            Back
          </Link>
        </p>
      </div>
    </>
  );
};
export default Login_page;
