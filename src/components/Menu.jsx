import * as React from 'react';
import {Menu, MenuItemLink} from 'react-admin';
import {DesignServices, Money, RepeatOne} from "@mui/icons-material";
import PeopleIcon from '@mui/icons-material/People';

export const MyMenu = (props) => (
    <Menu {...props}>
        <MenuItemLink to="/doctors" primaryText="Врачи" leftIcon={<PeopleIcon/>}/>
        <MenuItemLink to="/average" primaryText="Средний чек" leftIcon={<Money/>}/>
        <MenuItemLink to="/popular" primaryText="Популярность услуг" leftIcon={<DesignServices/>}/>
        <MenuItemLink to="/returns" primaryText="Возвращаемость" leftIcon={<RepeatOne/>}/>
    </Menu>
);
