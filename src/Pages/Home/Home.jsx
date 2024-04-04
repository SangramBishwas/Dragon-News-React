import Header from "../../Shared/Header";
import LeftSide from "../../Shared/LeftSide";
import Navbar from "../../Shared/Navbar";
import RightSide from "../../Shared/RightSide";

const Home = () => {
    return (
        <div>
            <Header />
            <Navbar />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <LeftSide />
                <div className="border col-span-2">
                    <h2>News comming...</h2>
                </div>
                <RightSide />
            </div>
        </div>
    );
};

export default Home;