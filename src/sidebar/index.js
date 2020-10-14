import React, { useState } from 'react';
import { faShoppingCart, faGifts, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const menu = [
    {
        icon: faShoppingCart,
        name: "Record",
        subMenu: [
            {
                name: "All records",
                link: "/",
            },{
                name: "Add new record",
                link: "/record/create",
            },
        ],
    }, {
        icon: faGifts,
        name: "Sku",
        link: "/sku",
    },
];


function MenuItem({ icon, name, link }) {
    return (
        <div className="d-flex flex-row py-2">
            <div className="mx-4">
                <FontAwesomeIcon icon={icon}/>
            </div>
            <div className="flex-grow-1">
                {name}
            </div>
        </div>
    );
}

function MenuItemWithSubMenu({ icon, name, subMenu }) {
    const [expand, setExpand] = useState(false);
    return (<>
        <div onClick={() => setExpand(!expand)} className="d-flex flex-row py-2 cursor-pointer">
            <div className={ expand ? "mx-4 blue-text" : "mx-4" }>
                <FontAwesomeIcon icon={icon} />
            </div>
            <div className={ expand ? "flex-grow-1 blue-text" : "flex-grow-1" }>
                <span> {name} </span>
            </div>
            <div className="mx-4">
                { expand ?
                        <FontAwesomeIcon icon={faChevronUp} />
                        :
                        <FontAwesomeIcon icon={faChevronDown} />
                }
            </div>
        </div>
        <div style={{ backgroundColor: "rgba(95,93,93,0.15)" }}>
            {expand && subMenu.map(menu => (
                <div className="py-2 ml-5 pl-3 cursor-pointer">
                    {menu.name}
                </div>
            ))}
        </div>
    </>);
}

export function Sidebar() {
    const menuList = menu.map(item => {
        if (item.subMenu && item.subMenu.length > 0)
            return <MenuItemWithSubMenu {...item} />;
        return <MenuItem {...item} />;
    });
    // text-uppercase font-weight-bold h2 text-monospace text-center pt-4
    return (
        <div id="sidebar" className="z-depth-2">
            <div className="text-hide mb-4">
                <img id="sidebar-header" src="/dashboard-header.png" alt="Dashboard" />
                Dashboard
            </div>
            <div>
                {menuList}
            </div>
        </div>
    );
}
