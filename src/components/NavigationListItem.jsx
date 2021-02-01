import React, {useState} from 'react';

export const NavigationListItem = ({item, url}) => {
    const [showSubMenu, toggleSubMenu] = useState(false);
    return(
        <li key={item.value}
            className="nav-item"
            onMouseEnter={() => toggleSubMenu(true)}
            onMouseLeave={() => toggleSubMenu(false)}
            onClick={() => window.location = url}
            >
                {item.value}
            {showSubMenu && (
                <ul className="sub-menu">
                    {item.children.map(itm => (
                        <li key={itm} className="sub-nav-item">
                            {itm}
                        </li>
                    ))}
                </ul>
            )}
        </li>
    )
}