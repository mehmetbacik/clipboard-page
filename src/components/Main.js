import React from "react";

function Main() {
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
                                <div className="text-child">
                                    <span>Quick Search</span>
                                    <p>Easily search your snippets by content, <br className="large" />category, web adress, application, and more.</p>
                                </div>
                                <div className="text-child">
                                    <span>iCloud Sync</span>
                                    <p>Instantly saves and syncs snippets across all <br className="large" />your devices.</p>
                                </div>
                                <div className="text-child">
                                    <span>Complete History</span>
                                    <p>Retrieve any snippets from the first moment <br className="large" />you started using the app.</p>
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
                                <div className="col col-12 col-md-4 col-lg-4 detail-child">
                                    <img src="img/icon-blacklist.svg" alt="img" />
                                    <span>Create blacklists</span>
                                    <p>Ensure sensitive information never makes its <br className="large" />way to your clipboard by excluding certain <br className="large" />sources.</p>
                                </div>
                                <div className="col col-12 col-md-4 col-lg-4 detail-child">
                                    <img src="img/icon-text.svg" alt="img" />
                                    <span>Plain text snippets</span>
                                    <p>Remove unwanted formatting from copied text <br className="large" />for a consistent look.</p>
                                </div>
                                <div className="col col-12 col-md-4 col-lg-4 detail-child">
                                    <img src="img/icon-preview.svg" alt="img" />
                                    <span>Sneak preview</span>
                                    <p>Quick preview of all snippets on your Clipboard <br className="large" />for easy access.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col col-12 brands">
                        <div className="brand-content">
                            <img src="img/logo-google.png" alt="img" />
                        </div>
                        <div className="brand-content">
                            <img src="img/logo-ibm.png" alt="img" />
                        </div>
                        <div className="brand-content">
                            <img src="img/logo-microsoft.png" alt="img" />
                        </div>
                        <div className="brand-content">
                            <img src="img/logo-hp.png" alt="img" />
                        </div>
                        <div className="brand-content">
                            <img src="img/logo-vector-graphics.png" alt="img" />
                        </div>
                    </div>
                    <div className="col col-12 download">
                        <div className="headline">
                            <span>Clipboard for iOS and Mac OS</span>
                            <p>Available for free on the App Store. Download for Mac or iOS, sync with iCloud and <br className="large" />you're ready to start adding to your clipboard.</p>
                        </div>
                        <div className="download-btns">
                            <button className="btn btn-success">Download for IOS</button>
                            <button className="btn btn-primary">Download for Mac</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
