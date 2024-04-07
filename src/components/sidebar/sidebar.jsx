import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faCog, faEdit, faMoneyBill, faClipboard, faStore, faBars, faChartBar, faFont, faSearch, faMobileAlt, faQuestionCircle, faComments, faInfoCircle, faSitemap, faEnvelope, faExclamationTriangle, faCode, faTools, faExclamation } from '@fortawesome/free-solid-svg-icons';
import data from "./option.json";
import Option from './option';

const Sidebar = ({ render }) => {
  const activation = useRef(null);

  const toggleActiveClass = (event) => {
    const activeElements = activation.current.querySelectorAll('.active');
    activeElements.forEach(element => {
      element.classList.remove('active');
    });
    event.target.classList.add('active');
  };

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'faGlobe':
        return faGlobe;
      case 'faCog':
        return faCog;
      case 'faEdit':
        return faEdit;
      case 'faMoneyBill':
        return faMoneyBill;
      case 'faClipboard':
        return faClipboard;
      case 'faStore':
        return faStore;
      case 'faBars':
        return faBars;
      case 'faChartBar':
        return faChartBar;
      case 'faFont':
        return faFont;
      case 'faSearch':
        return faSearch;
      case 'faMobileAlt':
        return faMobileAlt;
      case 'faQuestionCircle':
        return faQuestionCircle;
      case 'faComments':
        return faComments;
      case 'faInfoCircle':
        return faInfoCircle;
      case 'faSitemap':
        return faSitemap;
      case 'faEnvelope':
        return faEnvelope;
      case 'faExclamationTriangle':
        return faExclamationTriangle;
      case 'faExclamation':
        return faExclamation;
      case 'faCode':
        return faCode;
      case 'faTools':
        return faTools;
      default:
        return null;
    }
  };

  return (
    <div className='w-64 px-3' ref={activation}>
      <p className="w-full mt-0 my-3 p-2 hover:bg-stone-400 flex active items-center" onClick={(e) => { toggleActiveClass(e); render("Domains"); }}>
        <FontAwesomeIcon icon={faGlobe} className="mr-2" />
        Domains
      </p>
      {data.map((item, index) => (
        <Option key={index} name={item.name} icon={getIcon(item.icon)} handleClick={(e) => { toggleActiveClass(e); render(item.name); }} />
      ))}
    </div>
  );
}

export default Sidebar;