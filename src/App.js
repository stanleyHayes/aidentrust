import {Route, Routes} from "react-router";
import {useLocation} from "react-router";
import './App.css';
import {THEMES} from "./themes/themes";
import {ThemeProvider} from "@mui/styles";
import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import UI_ACTION_CREATORS from "./redux/ui/ui-action-creators";
import {CssBaseline} from "@mui/material";
import HomePage from "./pages/home/home-page";
import ForgotPasswordPage from "./pages/auth/forgot-password-page";
import ResetPasswordPage from "./pages/auth/reset-password-page";
import SignInPage from "./pages/auth/sign-in-page";
import VerifyAccountPage from "./pages/auth/verify-account-page";
import AboutPage from "./pages/more/about-page";
import ContactPage from "./pages/more/contact-page";
import FAQPage from "./pages/more/faq-page";
import PrivacyPage from "./pages/more/privacy-page";
import TermsPage from "./pages/more/terms-page";
import ProfilePage from "./pages/profile/profile-page";
import NotificationsPage from "./pages/settings/notifications-page";
import SettingsPage from "./pages/settings/settings-page";
import StatementsPage from "./pages/settings/statements-page";
import TransactionDetailPage from "./pages/transactions/transaction-detail-page";
import TransactionsPage from "./pages/transactions/transactions-page";
import ChangePasswordPage from "./pages/profile/change-password-page";
import EditProfilePage from "./pages/profile/edit-profile-page";
import ClientSignUpResponse from "./pages/auth/sign-up-page";
import RequireAuth from "./components/shared/require-auth";

function App() {

    const dispatch = useDispatch();
    const {pathname} = useLocation();

    useEffect(() => {
        if (pathname)
            dispatch(UI_ACTION_CREATORS.changeURL(pathname))
    }, [dispatch, pathname]);

    return (
        <ThemeProvider theme={THEMES.lightTheme}>
            <CssBaseline/>
            <Routes>
                <Route element={<RequireAuth><HomePage/></RequireAuth>} path="/"/>
                <Route element={<ForgotPasswordPage/>} path="/auth/forgot-password"/>
                <Route element={<ResetPasswordPage/>} path="/auth/reset-password"/>
                <Route element={<RequireAuth><ChangePasswordPage/></RequireAuth>} path="/change-password"/>
                <Route element={<RequireAuth><EditProfilePage/></RequireAuth>} path="/edit-profile"/>
                <Route element={<SignInPage/>} path="/auth/login"/>
                <Route element={<ClientSignUpResponse/>}
                       path="/auth/requests/:requestID/:code"/>
                <Route element={<VerifyAccountPage/>} path="/auth/verify/:token"/>
                <Route element={<AboutPage/>} path="/about"/>
                <Route element={<ContactPage/>} path="/contact"/>
                <Route element={<FAQPage/>} path="/faq"/>
                <Route element={<PrivacyPage/>} path="/privacy"/>
                <Route element={<TermsPage/>} path="/terms"/>
                <Route element={<RequireAuth><ProfilePage/></RequireAuth>} path="/profile"/>
                <Route element={<RequireAuth><NotificationsPage/></RequireAuth>} path="/notifications"/>
                <Route element={<RequireAuth><SettingsPage/></RequireAuth>} path="/settings"/>
                <Route element={<RequireAuth><StatementsPage/></RequireAuth>} path="/statements"/>
                <Route element={<RequireAuth><TransactionDetailPage/></RequireAuth>}
                       path="/transactions/:transactionID"/>
                <Route element={<RequireAuth><TransactionsPage/></RequireAuth>} path="/transactions"/>
            </Routes>
        </ThemeProvider>
    );
}

export default App;
