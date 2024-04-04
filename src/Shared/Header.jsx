import logo from ".././assets/logo.png";
import moment from 'moment';
import Breaking from "../Pages/Home/Breaking";
const Header = () => {
    return (
        <div>
            <img className="mx-auto" src={logo} alt="" />
            <p className="text-lg text-center mt-5">Journalism Without Fear or Favour</p>
            <p className="text-xl text-center my-4">{moment().format("dddd, MMMM DD, YYYY")}</p>
           <Breaking />
        </div>
    );
};

export default Header;