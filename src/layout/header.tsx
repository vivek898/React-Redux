import React from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth";

const Header = () => {
    const dispatch = useDispatch();
    const submitHandler = (e: any) => {
        e.preventDefault();
        dispatch(authActions.login());
    };
    return (
        <div className="header">
            <form action="" onSubmit={submitHandler}>
                <label htmlFor="">User Name:</label><br />
                <input type="text" /><br />
                <label htmlFor="">Password</label><br />
                <input type="password" /><br />
                <input type="submit" value="Login" />
            </form>
        </div>
    )
};

export default Header;