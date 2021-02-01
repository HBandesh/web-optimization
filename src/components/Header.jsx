import React from 'react';
import { NavigationListItem } from './NavigationListItem';

export const Header = ({navigation, url}) => {
    return(
        <header>
            <div className="container logo-wrapper">
                <img src="/images/fakeLogo.png" alt="logo" className="logo"></img>
            </div>
            <nav className="nav-container">
                <ul className="container nav-list">
                    {navigation.map((itm,idx) => <NavigationListItem key={idx} item={itm} url={url}/>)}
                </ul>
            </nav>
        </header>
    )
}