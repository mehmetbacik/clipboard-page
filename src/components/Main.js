import {useContext} from "react";
import ThemeContext from '../context/ThemeContext';

function Main() {
    const {theme, setTheme} = useContext(ThemeContext);
    return (
        <div id="main">
            <div className="container-fluid">
                <div className="row">
                    <div className="col col-12 keep__snippets">
                        <div className="headline">
                            <span>Keep track of your snippets</span>
                            <p>Clipboard instantly stores any item you copy in the cloud, meaning you can access<br className="large" /> 
                                your snippets immediately on all your devices. Our Mac and IOS apps will help you<br className="large" /> 
                                organize everything. 
                            </p>
                        </div>
                        <div className="content">
                            <div className="img">
                                <img src="img/image-computer.png" alt="img" />
                            </div>
                            <div className="text">
                                <div>
                                    <span>Quick Search</span>
                                    <p>Easily search your snippets by content, category, web adress, application, and more.</p>
                                </div>
                                <div>
                                    <span>iCloud Sync</span>
                                    <p>Instantly saves and syncs snippets across all your devices.</p>
                                </div>
                                <div>
                                    <span>Complete History</span>
                                    <p>Retrieve any snippets from the first moment you started using the app.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col col-12 access__clipboard">
                        <div className="headline">
                            <span>Access Clipboard Anywhere</span>
                            <p>Whether you're on the go, or at your computer, you can access all your Clipboard<br className="large" /> 
                               snippets in a few simple clicks.
                            </p>
                        </div>
                        <div className="content">
                            <div className="img">
                                <img src="img/image-devices.png" alt="img" />
                            </div>
                        </div>
                    </div>
                    <div className="col col-12 supercharge__workflow">
                        <div className="headline">
                            <span>Supercharge your workflow</span>
                            <p>We've got the tools to boost your productivity.</p>
                        </div>
                        <div className="content">
                            <div className="detail">
                                <div className="detail-child">
                                    <img src="img/icon-blacklist.svg" alt="img" />
                                    <span>Create blacklists</span>
                                    <p>Ensure sensitive information never makes its way to your clipboard by excluding certain sources.</p>
                                </div>
                                <div className="detail-child">
                                    <img src="img/icon-text.svg" alt="img" />
                                    <span>Plain text snippets</span>
                                    <p>Remove unwanted formatting from copied text for a consistent look.</p>
                                </div>
                                <div className="detail-child">
                                    <img src="img/icon-preview.svg" alt="img" />
                                    <span>Sneak preview</span>
                                    <p>Quick preview of all snippets on your Clipboard for easy access.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col col-12 theme__select">
                        <p className="d-none">Active Theme: {theme}</p>
                        <button className="btn btn-danger" onClick={() => setTheme(theme === 'lightTheme' ? 'darkTheme' : 'lightTheme')}><i className="theme-icon"/></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
