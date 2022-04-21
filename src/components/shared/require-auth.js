import React, {useEffect} from "react";
import {Navigate, useLocation, useNavigate} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {selectAuth} from "../../redux/authentication/auth-reducer";
import {AUTH_ACTION_CREATORS} from "../../redux/authentication/auth-action-creators";
import Splash from "./splash";

const RequireAuth = ({children}) => {

    const {token, authLoading} = useSelector(selectAuth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        dispatch(AUTH_ACTION_CREATORS.getProfile(token, navigate))
    }, [dispatch, navigate, token]);

    if (authLoading) {
        return <Splash/>;
    }

    if (!authLoading && !token) {
        return <Navigate to="/auth/login" state={{path: location.pathname}}/>
    }

    return (
        <React.Fragment>
            {children}
        </React.Fragment>
    )
}

export default RequireAuth;
