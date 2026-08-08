import './Nav.css'
import About from './pages/about/About';
import Home from './pages/home/Home';


function Nav(){
    return(
        <>
        <div className="nav-bar">
            <h1>LOGO</h1>

            <div>
                <ul className="nav-links">
                    <li><a to="/Home">Home</a></li>
                    <li><a to="/About">About</a></li>
                    <li><a to="*">Contact</a></li>
                    <li><a to="*">Service</a></li>
                </ul>
            </div>
        </div>
        </>
    )
}

export default Nav