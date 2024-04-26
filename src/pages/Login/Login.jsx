import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContextProvider";
import { FaGithub, FaGoogle } from "react-icons/fa";
import Swal from "sweetalert2";
const Login = () => {
  const { logIn, googleLogin, githubLogin } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const handleLOgin = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;

    const user = { name, email, password, photo };
    console.log(user);

    logIn(email, password)
      .then(() => {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "LogIn successful",
          showConfirmButton: false,
          timer: 2000,
        });

        setSuccess("LogIn successful");

        //  navigate login
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "wrong password or email address!",
        });

        setError(error.massage);
      });
  };
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "LogIn successful",
          showConfirmButton: false,
          timer: 2000,
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleGithubLogin = () => {
    githubLogin()
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "LogIn successful",
          showConfirmButton: false,
          timer: 2000,
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="min-h-[calc(100vh-250px)]">
      {/* <pageTitle title={"Register page | Our country"}></pageTitle> */}

      <div className="hero min-h-screen bg-base-200 bg-base-200 px-1] lg:px-10">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold animate__animated animate__bounce text-blue-800">
              login now!
            </h1>
            <p className="py-6">
              Login Now ! Are you not a new user ? If you new user then please
              login .
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLOgin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative mb-4">
                  <input
                    type="password"
                    placeholder="password"
                    name="password"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>

                {/* error */}
                {error && <p className="text-red-600">{error}</p>}
                {success && <p className="text-green-600">{success}</p>}
              </div>
              <p>
                Are You new please ?{" "}
                <Link className="link-primary hover:link" to="/register">
                  register
                </Link>
              </p>
            </form>
            <p className="text-center border-b-2">or</p>
            <div className="flex items-center gap-3">
            <button
              onClick={handleGoogleLogin}
              className="btn btn-primary my-4 items-center"
            >
              <FaGoogle className=""></FaGoogle>login with google
            </button>
            <button
              onClick={handleGithubLogin}
              className="btn btn-secondary  items-center"
            >
              <FaGithub className="font-bold"></FaGithub>login with Github
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Login;
