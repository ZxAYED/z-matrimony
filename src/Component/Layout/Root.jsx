
import { Outlet } from 'react-router-dom';
import Navbars from '../Shared/Navbars';
import { Footer } from '../Shared/Footer';

const Root = () => {
    return (
        <div >
            <Navbars></Navbars>
            <Outlet></Outlet>
            <Footer></Footer>
            </div>
    );
};

export default Root;