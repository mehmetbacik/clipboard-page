import {useContext} from "react";
import ThemeContext from '../context/ThemeContext';

function Header() {
    const {theme, setTheme} = useContext(ThemeContext);
    return (
        <div id="header">
            <p>Header Active Theme: {theme}</p>
            <button onClick={() => setTheme(theme === 'lightTheme' ? 'darkTheme' : 'lightTheme')}>Change Theme</button>
        </div>
    );
}

export default Header;
