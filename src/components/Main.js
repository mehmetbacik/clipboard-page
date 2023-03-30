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
                                <img src="img/image-computer.png" alt="logo" />
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
                </div>
            </div>
        </div>
    );
}

export default Main;
