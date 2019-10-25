import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List'

import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';

const iconByName = iconname => {
    switch (iconname) {
            case ('dashboard') :
                return (<DashboardIcon/>)
            case ('shoppingCart') :
                return (<ShoppingCartIcon/>)
            case ('peaple') :
                return (<PeopleIcon/>)
            case ('barChart') :
                return (<BarChartIcon/>)
            case ('layers') :
                return (<LayersIcon/>)
            case ('assignment') :
                return (<AssignmentIcon/>)
            default :
                return (<DashboardIcon/>)
    }
} 

const ButtonItem = ({ itemText, itemIcon }) => (
    <ListItem button >
      <ListItemIcon >
        {iconByName(itemIcon)}
      </ListItemIcon>
      <ListItemText primary={itemText} />
    </ListItem>
)

const ListItems = ({ subheader, listItems }) => (
    <List>
        {subheader && (<ListSubheader inset>{subheader}</ListSubheader>)}
        {listItems && 
            listItems.map( (item, index) => 
                <ButtonItem key={index} itemText={item.itemText} itemIcon={item.itemIcon}/>
        )}
    </List>
)

export default ListItems