import React from 'react';

import './Navigation.css';
import NavItem from '../../components/NavItem/NavItem';
import ActionItem from '../../components/ActionItem/ActionItem';

import Settings from '@material-ui/icons/Settings';
import ExitToApp from '@material-ui/icons/ExitToApp';
import Dashboard from '@material-ui/icons/Dashboard';
import TableChart from '@material-ui/icons/TableChart';
import History from '@material-ui/icons/History';

const Navigation = (props) => {
  return (
    <div className='Navigation'>
      <div className='navigation-wrapper'>
        <NavItem url='/' icon={<Dashboard />}>Oma sivu</NavItem>
        <NavItem url='/leaderboards' icon={<TableChart />}>Tulostaulukko</NavItem>
        <NavItem url='/events/leads' icon={<History />}>Tapahtumat</NavItem>
      </div>
      <div className='action-wrapper'>
        {props.roles !== undefined && props.roles[1] !== undefined ? 
          <NavItem url='/admin/users' icon={<Settings />}>Hallinta</NavItem>
          : null
        }
        <ActionItem icon={<ExitToApp/>} onClick={props.handleLogout}>Kirjaudu ulos</ActionItem>
      </div>
    </div>
  );
};

export default Navigation;