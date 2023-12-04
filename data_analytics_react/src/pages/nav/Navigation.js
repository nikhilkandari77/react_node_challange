import React from 'react';
import { Link,NavLink } from 'react-router-dom';
import { List, ListItem, ListItemText } from '@mui/material';
import NavItems from './NavItems';
import './navigation.css'


const Navigation = () => {
  return (
    <List style={{background:"white",fontWeight:"bold",padding:"10px",}}>
  {NavItems.map((item, index) => (
      <ListItem>
      <NavLink
      key={index}
      to={item.path}
      style={{ textDecoration: 'none',padding:"10px",color:"grey" }}
      className={({ isActive }) => (isActive ? 'active' : 'inactive')}
    >
     {item.title}
    </NavLink>
    </ListItem>
  ))}
</List>
  );
};

export default Navigation;