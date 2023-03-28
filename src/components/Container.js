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
          <Header/>
          <hr/>
          <Main/>
          <hr/>
          <Footer/>
          <hr/>
          <Button/>
        </div>
    );
}

export default Container;
