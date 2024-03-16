import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import { ReactComponent as Bayroq } from '../../assets/svgs/flagUz.svg';
import Cookies from 'js-cookie';

const Header = () => {
  const token = Cookies.get('token');
  return (
    <div className="main-header">
      <header className="container">
        <div className="h-left">
          <Link to={'/'}>Frosh</Link>
          <Link id="usd">1 USD | 12343,48 UZS</Link>
        </div>
        <div className="h-right">
          <Bayroq />
          <select>
            <option>uz</option>
          </select>
          <select>
            <option>UZS</option>
          </select>
          <Link to={'/announcement/create'}>E’lon joylash +</Link>
          <Link to={token ? '/profile' : '/auth'}>{token ? 'Shaxsiy kabinet' : 'Ro’yxatdan o’tish'}</Link>
        </div>
      </header>
    </div>
  );
};

export default Header;
