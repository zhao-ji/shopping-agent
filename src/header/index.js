import React from 'react';
import { useState, useEffect } from 'react';
import { 
    MDBBtn
} from 'mdbreact';

import api from "../utils";

export function Header({ username, logout }) {
    const [user, setUser] = useState(null);
    useEffect(() => {
        api.get('/user/')
            .then((response) => {
                console.log(response.data)
                setUser(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [setUser]);
    function clickLogout() {
        api.post("/logout/")
            .then((response) => {
                console.log(response);
            });
    }
    return (
        <div id="header" className="d-flex flex-row z-depth-1">
            <span className="pl-3 pt-2 flex-grow-1 h4 align-bottom">
                Welcome <strong>{ user && user.username }</strong>!
            </span>
            <MDBBtn
                color="info"
                className="mr-3"
                size="sm"
                rounded
                href=""
                target="_blank"
            >
                Admin page
            </MDBBtn>
            <MDBBtn color="warning" size="sm" rounded onClick={clickLogout}>
                Logout
            </MDBBtn>
        </div>
    );
}
