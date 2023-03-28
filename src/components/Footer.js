import {useContext} from "react";
import ThemeContext from '../context/ThemeContext';

function Footer() {
    const {theme, setTheme} = useContext(ThemeContext);
    return (
        <div>
            <p>Footer Active Theme: {theme}</p>
            <button onClick={() => setTheme(theme === 'lightTheme' ? 'darkTheme' : 'lightTheme')}>Change Theme</button>
        </div>
    );
}

export default Footer;
