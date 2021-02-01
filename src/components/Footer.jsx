import React from 'react';

export const Footer = ({navigation, url}) => {
    return(
        <footer className="footer">
            <div className="footer-logo-wrapper">
                <img src="/images/fakeLogo.png" alt="logo" className="logo"></img>
            </div>
            <ul className="footer-nav-wrapper">
                {navigation.map((itm,idx) => (
                    <li key={idx} className="footer-nav-item" onClick={() => window.location = url}>
                        <span>{itm.value}</span>
                        <ul className="footer-sub-nav-wrapper">
                            {itm.children.map((item,index) => (
                                <li key={index} className="footer-sub-nav-item">{item}</li>
                            ))}
                        </ul>
                        
                    </li>
                ))}
            </ul>
        </footer>
    )
}