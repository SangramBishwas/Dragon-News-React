import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import Qzone1 from "../assets/qZone1.png";
import Qzone2 from "../assets/qZone2.png";
import Qzone3 from "../assets/qZone3.png";
const RightSide = () => {
    return (
        <div className="space-y-5">
            <div>
                <h2 className="text-xl font-bold">Login With</h2>
                <button className="btn btn-outline mt-5 w-full">
                    <FcGoogle className="text-lg" />
                    Login with Google
                </button>
                <button className="btn btn-outline mt-5 w-full">
                    <FaGithub className="text-lg" />
                    Login with Github
                </button>
            </div>

            <div>
                <h2 className="text-xl font-bold mb-5">Find Us On</h2>
                <a className="flex gap-2 items-center border rounded p-3 cursor-pointer text-lg"><FaFacebook />Facebook</a>
                <a className="flex gap-2 items-center border-x rounded p-3 cursor-pointer text-lg"><FaTwitter />Twitter</a>
                <a className="flex gap-2 items-center border rounded p-3 cursor-pointer text-lg"><FaInstagram />Instagram</a>
            </div>

            <div>
                <h2 className="text-xl font-bold mb-5">Q-Zone</h2>
                <div className="bg-[#F3F3F3] p-5">
                    <img src={Qzone1} alt="" />
                    <img src={Qzone2} alt="" />
                    <img src={Qzone3} alt="" />
                </div>
            </div>
        </div>
    );
};

export default RightSide;