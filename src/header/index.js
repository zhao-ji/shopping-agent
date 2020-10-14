import React from 'react';
import { 
    MDBBtn
} from 'mdbreact';

export function Header() {
    return (
        <div id="header" className="d-flex flex-row">
            <span className="pl-3 flex-grow-1 h4">
                Welcome <strong>Admin</strong>!
            </span>
            <MDBBtn
                color="info"
                className="mr-3"
                size="sm"
                rounded
                href="https://shopping-agent.minganci.org"
                target="_blank"
            >
                Admin page
            </MDBBtn>
            <MDBBtn color="warning" size="sm" rounded>
                Logout
            </MDBBtn>
        </div>
    );
}
