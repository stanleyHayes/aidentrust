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
import MakeTransactionPage from "./pages/transactions/make-transaction-page";
import ChangePasswordPage from "./pages/profile/change-password-page";
import EditProfilePage from "./pages/profile/edit-profile-page";
import ClientSignUpResponse from "./pages/auth/sign-up-page";

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
                <Route element={<HomePage/>} path="/"/>
                <Route element={<ForgotPasswordPage/>} path="/auth/forgot-password"/>
                <Route element={<ResetPasswordPage/>} path="/auth/reset-password"/>
                <Route element={<ChangePasswordPage/>} path="/change-password"/>
                <Route element={<EditProfilePage/>} path="/edit-profile"/>
                <Route element={<SignInPage/>} path="/auth/login"/>
                <Route element={<ClientSignUpResponse/>} path="/auth/invitations/:invitationID/:code"/>
                <Route element={<VerifyAccountPage/>} path="/auth/verify"/>
                <Route element={<AboutPage/>} path="/about"/>
                <Route element={<ContactPage/>} path="/contact"/>
                <Route element={<FAQPage/>} path="/faq"/>
                <Route element={<PrivacyPage/>} path="/privacy"/>
                <Route element={<TermsPage/>} path="/terms"/>
                <Route element={<ProfilePage/>} path="/profile"/>
                <Route element={<NotificationsPage/>} path="/notifications"/>
                <Route element={<SettingsPage/>} path="/settings"/>
                <Route element={<StatementsPage/>} path="/statements"/>
                <Route element={<TransactionDetailPage/>} path="/transactions/:transactionID"/>
                <Route element={<TransactionsPage/>} path="/transactions"/>
                <Route element={<MakeTransactionPage/>} path="/transaction/new"/>
            </Routes>
        </ThemeProvider>
    );
}

export default App;
