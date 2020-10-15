import React from "react";
import { useState } from "react";
import {
    useHistory,
} from "react-router-dom";
import {
    MDBCard, MDBCardImage, MDBCardBody,
    MDBBtn, MDBInput
} from "mdbreact";

import api from "../utils";

export function LoginPage () {
    const history = useHistory();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function login() {
        api.post("/login/", { username, password })
            .then(function (response) {
                if (response.statusText === "OK") {
                    history.replace("/");
                } else {
                    console.error(response);
                }
            })
            .catch(function (error) {
                console.error(error);
            });
    }
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
                            label="Type your Username"
                            type="text"
                            onChange={(event) => setUsername(event.target.value)}
                            icon="user"
                            error="wrong" success="right"
                            group validate />
                        <MDBInput
                            label="Type your password"
                            type="password"
                            onChange={(event) => setPassword(event.target.value)}
                            icon="lock"
                            group validate />
                    </div>
                    <div className="text-center">
                        <MDBBtn
                            onClick={login}
                            disabled={username.length === 0 || password.length === 0}
                        >
                            Login
                        </MDBBtn>
                    </div>
                </MDBCardBody>
            </MDBCard>
        </div>
    );
};
