import {useContext} from "react";
import Button from './Button';
import Header from './Header';
import ThemeContext from '../context/ThemeContext';
function Container() {
    const {theme} = useContext(ThemeContext);
    return (
        <div className={`theme__mode ${theme === 'darkTheme' ? theme : 'lightTheme'}`}>
          <Header />
          <hr/>
          <Button />
        </div>
    );
}

export default Container;
