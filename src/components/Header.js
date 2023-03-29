import {useContext} from "react";
import ThemeContext from '../context/ThemeContext';

function Header() {
    const {theme, setTheme} = useContext(ThemeContext);
    return (
        <div id="header">
            <div className="container">
                <div className="row">
                    <div className="col col-12 header__content">
                        <div className="img">
                            <img src="img/logo.svg" alt="logo" />
                        </div>
                        <div className="headline">
                            <span>A history of everything you copy</span>
                            <p>Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all your devices.</p>
                        </div>
                        <div className="download">
                            <button className="btn btn-success">Download for IOS</button>
                            <button className="btn btn-primary">Download for Mac</button>
                        </div>
                    </div>
                    <div className="col col-12 text-center">
                        <p>Header Active Theme: {theme}</p>
                        <button onClick={() => setTheme(theme === 'lightTheme' ? 'darkTheme' : 'lightTheme')}>Change Theme</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
