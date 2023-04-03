import {useContext} from "react";
import Button from './Button';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ThemeContext from '../context/ThemeContext';
function Container() {
    const {theme} = useContext(ThemeContext);
    return (
        <div className={`theme__clipboard ${theme === 'darkTheme' ? theme : 'lightTheme'}`}>
          <div className="container-fluid">
            <div className="row">
              <div className="col col-12 p-0">
                <Header/>
              </div>
              <div className="col col-12 p-0">
                <Main/>
              </div>
              <div className="col col-12 p-0">
                <Footer/>
              </div>
            </div>
          </div>
          <Button/>
        </div>
    );
}

export default Container;
