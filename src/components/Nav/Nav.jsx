import SearchBar from '../SearchBar/SearchBar.jsx';
import { Link, useNavigate } from 'react-router-dom';
import style from "./Nav.module.css"

const Nav = ({onSearch,  setAccess}) =>{
    const navigate = useNavigate();
    const handleLogOut = ()=>{
            setAccess(false);
            navigate('/');
    }
    return (
        <nav>
            <button className={style.boton}>
                <Link to='/about'>ABOUT</Link>
            </button>
            <button className={style.boton}>
                <Link to ='/home' >HOME</Link>
            </button>
            <button onClick={handleLogOut}>Log out</button>
            <SearchBar onSearch={onSearch}> </SearchBar>
        </nav>
    )
}

export default Nav;