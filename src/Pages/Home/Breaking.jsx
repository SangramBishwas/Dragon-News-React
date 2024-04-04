import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const Breaking = () => {
    return (
        <div className="flex my-5">
            <button className="btn btn-primary text-white">Breaking:</button>
            <Marquee pauseOnHover={true} speed={100}>
                <Link to='/'>
                    Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                </Link>
                <Link to='/'>
                    Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                </Link>
                <Link to='/'>
                    Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                </Link>
            </Marquee>
        </div>
    );
};

export default Breaking;