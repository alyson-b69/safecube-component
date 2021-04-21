import { StyledNav } from "./Nav.style"
const url = process.env.PUBLIC_URL;
const Nav = () => {
    return (
    <StyledNav>
        <p data-item='SAFECUBE'>SAFECUBE</p>
        <ul className="menuItems">
            <li><a href={url} data-item='Home'>Home</a></li>
            <li><a href={url + 'liste'} data-item='Liste'>Liste</a></li>
            <li><a href={url + 'charts'} data-item='Charts'>Charts</a></li>
            <li><a href={url + 'chartsv2'} data-item='ChartsV2'>ChartsV2</a></li>
            <li><a href={url + 'aviexp'}  data-item='aviexp'>AviExp</a></li>
        </ul>
    </StyledNav>
    )
}

export default Nav