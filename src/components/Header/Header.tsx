import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell } from '@fortawesome/free-solid-svg-icons';
import Card from './Card';
import './header.scss';
const Header: React.FC = () => {
  return (
    <div className="header" style={{ marginTop: '20px', marginBottom: '20px' }}>
      <div className="rowflex">
        <div className="header-card">
          <span>BSE Ltd</span>
          <span className="smallfont" style={{ color: '#98D7C2' }}>
            499.50
          </span>
          <Card></Card>
        </div>
        <div className="header-card">
          <span>Nifty 50</span>
          <span className="smallfont" style={{ color: '#98D7C2' }}>
            10,371
          </span>
          <Card></Card>
        </div>
      </div>
      <div className="rowflex">
        <FontAwesomeIcon icon={faSearch} style={{ color: 'black' }} />
        <div className="bell">
          <FontAwesomeIcon icon={faBell} style={{ color: 'white' }} />
          <span style={{ color: 'white' }}>11</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
