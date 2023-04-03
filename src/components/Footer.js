import {useContext} from "react";
import ThemeContext from '../context/ThemeContext';

function Footer() {
    const {theme, setTheme} = useContext(ThemeContext);
    return (
        <div id="footer">
            <div className="container-fluid">
                <div className="row">
                    <div className="col col-12 col-lg-3">
                        <div className="img">
                            <img src="img/logo.svg" alt="logo" />
                        </div>
                    </div>
                    <div className="col col-12 col-lg-6">
                        Menü
                    </div>
                    <div className="col col-12 col-lg-3">
                        <div className="social">
                            <div className="social-child">
                                <img src="img/icon-facebook.svg" alt="fb" />
                            </div>
                            <div className="social-child">
                                <img src="img/icon-twitter.svg" alt="tw" />
                            </div>
                            <div className="social-child">
                                <img src="img/icon-instagram.svg" alt="in" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p>Footer Active Theme: {theme}</p>
            <button onClick={() => setTheme(theme === 'lightTheme' ? 'darkTheme' : 'lightTheme')}>Change Theme</button>
        </div>
    );
}

export default Footer;
