import {useContext} from "react";
import ThemeContext from '../context/ThemeContext';

function Header() {
    const {theme, setTheme} = useContext(ThemeContext);
    return (
        <div id="header">
            <div className="header__content">
                <div className="img">
                    <img src="img/logo.svg" alt="logo" />
                </div>
            </div>
            <p>Header Active Theme: {theme}</p>
            <button onClick={() => setTheme(theme === 'lightTheme' ? 'darkTheme' : 'lightTheme')}>Change Theme</button>
        </div>
    );
}

export default Header;
