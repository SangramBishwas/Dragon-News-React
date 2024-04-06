import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider";

const Register = () => {
    const {creatUser} = useContext(AuthContext)
    const handlRegister = (e) => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const name = form.get('name');
        const photo = form.get('photo');
        const password = form.get('password');
        console.log(name, photo, email, password);
        creatUser(email, password)
        .then((resutl) => {
            const user = resutl.user;
            console.log(user);
        })
        .catch((error) => console.error(error))
    }
    return (
        <div>
            <h2 className="text-center text-3xl font-bold my-10">Please Register</h2>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto">
                <form onSubmit={handlRegister} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input type="text"
                            placeholder="Your Name"
                            name="name"
                            className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text"
                            placeholder="Photo URL"
                            name="photo"
                            className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email"
                            placeholder="Email"
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
                        <div className="flex items-center gap-2 pt-5">
                            <input type="checkbox" name="term" id="term" />
                            <span>Accept our term and condition</span>
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <span className="mx-auto pb-5">
                    Already have account <Link to='/login' className="font-bold text-blue-500">Login</Link>
                </span>
            </div>
        </div>
    );
};

export default Register;