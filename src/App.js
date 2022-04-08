import {Route, Routes} from "react-router-dom";
import {useLocation} from "react-router";
import './App.css';
import {THEMES} from "./themes/themes";
import {ThemeProvider} from "@mui/styles";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import UI_ACTION_CREATORS from "./redux/ui/ui-action-creators";
import {selectUI} from "./redux/ui/ui-reducer";
import {CssBaseline} from "@mui/material";
import HomePage from "./pages/home/home-page";
import AccountsPage from "./pages/accounts/accounts-page";
import AccountDetailPage from "./pages/accounts/account-detail-page";
import ForgotPasswordPage from "./pages/auth/forgot-password-page";
import ResetPasswordPage from "./pages/auth/reset-password-page";
import SignInPage from "./pages/auth/sign-in-page";
import SignUpPage from "./pages/auth/sign-up-page";
import VerifyAccountPage from "./pages/auth/verify-account-page";
import CardsPage from "./pages/cards/cards-page";
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

function App() {

    const dispatch = useDispatch();
    const {pathname} = useLocation();
    const {themeVariant} = useSelector(selectUI);

    useEffect(() => {
        if (pathname)
            dispatch(UI_ACTION_CREATORS.changeURL(pathname))
    }, [dispatch, pathname]);

    return (
        <ThemeProvider theme={themeVariant === 'light' ? THEMES.lightTheme : THEMES.darkTheme}>
            <CssBaseline/>
            <Routes>
                <Route element={<HomePage/>} path="/"/>
                <Route element={<AccountsPage/>} path="/accounts"/>
                <Route element={<AccountDetailPage/>} path="/accounts/:accountID"/>
                <Route element={<ForgotPasswordPage/>} path="/auth/forgot-password"/>
                <Route element={<ResetPasswordPage/>} path="/auth/reset-password"/>
                <Route element={<SignInPage/>} path="/auth/login"/>
                <Route element={<SignUpPage/>} path="/auth/register"/>
                <Route element={<VerifyAccountPage/>} path="/auth/verify"/>
                <Route element={<CardsPage/>} path="/cards"/>
                <Route element={<AboutPage/>} path="/about"/>
                <Route element={<ContactPage/>} path="/contact"/>
                <Route element={<FAQPage/>} path="/faq"/>
                <Route element={<PrivacyPage/>} path="/privacy"/>
                <Route element={<TermsPage/>} path="/terms"/>
                <Route element={<ProfilePage/>} path="/profile"/>
                <Route element={<NotificationsPage/>} path="/notifications"/>
                <Route element={<SettingsPage/>} path="/settings"/>
                <Route element={<StatementsPage/>} path="/statements"/>
                <Route element={<StatementsPage/>} path="/stats"/>
                <Route element={<TransactionDetailPage/>} path="/transactions/:transactionID"/>
                <Route element={<TransactionsPage/>} path="/transactions"/>
                <Route element={<MakeTransactionPage/>} path="/transaction/new"/>
            </Routes>
        </ThemeProvider>
    );
}

export default App;
