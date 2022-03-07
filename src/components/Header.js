import {Link} from 'react-router-dom';

function Header() {
    return (
        <header>
            <nav className="w_1400">
                <ul>
                    <li><Link to={`/`}>React-Movie-App</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;