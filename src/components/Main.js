import {useContext} from "react";
import ThemeContext from '../context/ThemeContext';

function Main() {
    const {theme, setTheme} = useContext(ThemeContext);
    return (
        <div id="main">
            <p>Main Active Theme: {theme}</p>
            <button onClick={() => setTheme(theme === 'lightTheme' ? 'darkTheme' : 'lightTheme')}>Change Theme</button>
        </div>
    );
}

export default Main;
