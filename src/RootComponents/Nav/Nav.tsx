import { StyledNav } from "./Nav.style";
import {Link} from 'react-router-dom';

const Nav = () => {
    return (
        <StyledNav>
            <p data-item='SAFECUBE'>SAFECUBE</p>
            <ul className="menuItems">
                <li><a href={'/'} data-item='Home'>Home</a></li>
                <li><a href={'/liste'} data-item='Liste'>Liste</a></li>
                <li><a href={'/charts'} data-item='Charts'>Charts</a></li>
                <li><a href={'/chartsv2'} data-item='ChartsV2'>ChartsV2</a></li>
                <li><a href={'/aviexp'} data-item='aviexp'>AviExp</a></li>
                <Link to={'/aviexp'}>AEX</Link>
            </ul>
        </StyledNav>
    );
}

export default Nav