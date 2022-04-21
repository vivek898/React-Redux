import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/auth";
const Auth = () => {
    const authData: any = useSelector<any>(state => state.auth.isAuth)
    const dispatch = useDispatch();
    const logoutHandler = () => {
        dispatch(authActions.logout());
    }
    return (
        <div className="auth">
            {authData && <nav> <ul>
                <li>Product</li>
                <li>About</li>
                <li><button onClick={logoutHandler}>Logout</button></li>
            </ul>
            </nav>}
        </div>
    );
};

export default Auth;