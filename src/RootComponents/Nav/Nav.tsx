import { StyledNav } from "./Nav.style";
import {Link} from 'react-router-dom';

const Nav = () => {
    return (
        <StyledNav>
            <p data-item='SAFECUBE'>SAFECUBE</p>
            <ul className="menuItems">
                <li><Link to={'/'} data-item='Home'>Home</Link></li>
                <li><Link to={'/liste'} data-item='Liste'>Liste</Link></li>
                <li><Link to={'/charts'} data-item='Charts'>Charts</Link></li>
                <li><Link to={'/chartsv2'} data-item='ChartsV2'>ChartsV2</Link></li>
                <li><Link to={'/aviexp'} data-item='aviexp'>AviExp</Link></li>
            </ul>
        </StyledNav>
    );
}

export default Nav