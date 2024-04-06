import { useLoaderData } from "react-router-dom";
import Header from "../../Shared/Header";
import LeftSide from "../../Shared/LeftSide";
import Navbar from "../../Shared/Navbar";
import RightSide from "../../Shared/RightSide";
import NewsCard from "./NewsCard";

const Home = () => {
    const news = useLoaderData();
    console.log(news)
    return (
        <div>
            <Header />
            <Navbar />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <LeftSide />
                {/* News Container */}
                <div className="col-span-2">
                    {
                        news.map((item) => 
                            <NewsCard
                                key={item._id}
                                news={item}></NewsCard>
                        )
                    }
                </div>
                <RightSide />
            </div>
        </div>
    );
};

export default Home;