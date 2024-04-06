// import PropTypes from 'prop-types';
import { useLoaderData, useParams } from 'react-router-dom';
import Header from '../../Shared/Header';
import Navbar from '../../Shared/Navbar';

const NewsDetails = () => {
    const news = useLoaderData()
    console.log(news)
    const { id } = useParams();
    const aNews = news.find((item) => item._id === id);
    console.log(aNews);
    const {details} = aNews;


    return (
        <div>
            <Header />
            <Navbar />
            <h2 className='font-bold text-3xl'>News Details</h2>
            <p className='mt-5'>{details}</p>
        </div>
    );
};

// NewsDetails.propTypes = {

// };

export default NewsDetails;