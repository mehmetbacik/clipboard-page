import {useContext} from "react";
import Button from './Button';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ThemeContext from '../context/ThemeContext';
function Container() {
    const {theme} = useContext(ThemeContext);
    return (
        <div className={`theme__mode ${theme === 'darkTheme' ? theme : 'lightTheme'}`}>
          <div className="container-fluid">
            <div className="row">
              <div className="col col-12">
                <Header/>
              </div>
              <div className="col col-12">
                <Main/>
              </div>
              <div className="col col-12">
                <Footer/>
              </div>
            </div>
          </div>
          <Button/>
        </div>
    );
}

export default Container;
