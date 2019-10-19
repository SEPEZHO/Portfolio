import React from 'react';
import HeaderImg from '../../../Static/Images/Me.jpg';
import TitleHeader from './TitleHeader.jsx';

import s from './Header.module.css';

const Header = () => {
  return (
    <div className={s.Header}>
    	<img alt='' src={HeaderImg}/>
    	<TitleHeader />
    </div>
  );
}

export default Header;