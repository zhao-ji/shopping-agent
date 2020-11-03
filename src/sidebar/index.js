import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { MDBIcon } from 'mdbreact';


const menu = [
    {
        icon: "shopping-cart",
        name: "Record",
        subMenu: [
            {
                name: "All records",
                link: "/",
            }, {
                name: "Add new record",
                link: "/record/create",
            },
        ],
    }, {
        icon: "gifts",
        name: "Sku",
        subMenu: [
            {
                name: "All skus",
                link: "/sku",
            }, {
                name: "Add new sku",
                link: "/sku/create",
            },
        ],
    }, {
        icon: "users",
        name: "Client",
        subMenu: [
            {
                name: "All clients",
                link: "/client",
            }, {
                name: "Add new client",
                link: "/client/create",
            },
        ],
    }, {
        icon: "store",
        name: "Shop",
        subMenu: [
            {
                name: "All shops",
                link: "/shop",
            }, {
                name: "Add new shop",
                link: "/shop/create",
            },
        ],
    }, {
        icon: "fighter-jet",
        name: "Post",
        subMenu: [
            {
                name: "All post companies",
                link: "/post",
            }, {
                name: "Add new post company",
                link: "/post/create",
            },
        ],
    },
];


function MenuItem({ history, currentPath, icon, name, link }) {
    const isViewingClass = currentPath === link ? "blue-text" : "";
    return (
        <div className="d-flex flex-row py-2 cursor-pointer" onClick={() => history.push(link)}>
            <div className={`mx-4 ${isViewingClass}`}>
                <MDBIcon icon={icon}/>
            </div>
            <div className={`flex-grow-1 ${isViewingClass}`}>
                {name}
            </div>
        </div>
    );
}

function MenuItemWithSubMenu({ history, currentPath, icon, name, subMenu }) {
    const isInThisMenu = subMenu.map(item => item.link).includes(currentPath);
    const [expand, setExpand] = useState(isInThisMenu);
    return (<>
        <div onClick={() => setExpand(!expand)} className="d-flex flex-row py-2 cursor-pointer">
            <div className={`mx-4 ${expand ? "blue-text" : ""}`}>
                <MDBIcon icon={icon}/>
            </div>
            <div className={ `flex-grow-1 ${expand ? "blue-text" : ""}` }>
                <span> {name} </span>
            </div>
            <div className="mx-4">
                { expand ?
                        <MDBIcon icon="chevron-up" />
                        :
                        <MDBIcon icon="chevron-down" />
                }
            </div>
        </div>
        <div style={{ backgroundColor: "rgba(95,93,93,0.15)" }}>
            {expand && subMenu.map(menu => (
                <div
                    className={`py-2 ml-5 pl-3 cursor-pointer ${isInThisMenu && menu.link === currentPath && "blue-text"}`}
                    onClick={() => history.push(menu.link)}
                >
                    {menu.name}
                </div>
            ))}
        </div>
    </>);
}

export function Sidebar() {
    const location = useLocation();
    const currentPath = location.pathname;
    const history = useHistory();
    const routeConfig = {
        currentPath,
        history,
    };

    const menuList = menu.map(item => {
        if (item.subMenu && item.subMenu.length > 0)
            return <MenuItemWithSubMenu {...routeConfig} {...item} />;
        return <MenuItem {...routeConfig} {...item} />;
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
