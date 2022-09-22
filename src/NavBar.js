import './NavBar.css';

import logo from './maplogo.svg';
function NavBar() {
    return (
        <div className="navBar">
            <img src={logo} className="logo" alt="logo" />
            <div className='title'>
                MAP
            </div>
        </div>
    )
}

export default NavBar;