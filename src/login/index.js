import React from "react";
import {
    MDBCard, MDBCardImage, MDBCardBody,
    MDBBtn, MDBInput
} from "mdbreact";

export function LoginPage () {
    return (
        <div id="login">
            <MDBCard id="login-form" className="mx-auto">
                <MDBCardImage className="img-fluid" src="/dashboard-card-img.png" waves />
                <MDBCardBody>
                    <p className="h5 text-center mb-4">
                        Sign in
                    </p>
                    <div className="grey-text">
                        <MDBInput
                            label="Type your email"
                            type="email"
                            icon="envelope"
                            group
                            validate
                            error="wrong" success="right"/>
                        <MDBInput
                            label="Type your password"
                            type="password"
                            icon="lock"
                            group
                            validate />
                    </div>
                    <div className="text-center">
                        <MDBBtn>Login</MDBBtn>
                    </div>
                </MDBCardBody>
            </MDBCard>
        </div>
    );
};
