
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className='mx-20'>
            <Outlet />
        </div>
    );
};

export default Root;