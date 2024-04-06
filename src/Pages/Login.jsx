import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider";
import Navbar from "../Shared/Navbar";

const Login = () => {
    const { logIn } = useContext(AuthContext);
    const location = useLocation();
    console.log('loacation', location)
    const navigate = useNavigate()
    const handleLogIn = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password')
        logIn(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                // navigate after login
                navigate(location?.state ? location.state : '/')
            })
            .catch((error) => console.error(error))
    }
    return (
        <div>
            <Navbar />
            <h2 className="text-center text-3xl font-bold my-10">Please Login</h2>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto">
                <form onSubmit={handleLogIn} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email"
                            placeholder="email"
                            name="email"
                            className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password"
                            placeholder="password"
                            name="password"
                            className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <span className="mx-auto pb-5">
                    Do not have account <Link to='/register' className="font-bold text-blue-500">Register </Link>
                </span>
            </div>
        </div>
    );
};

export default Login;