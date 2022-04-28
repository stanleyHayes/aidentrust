import {
    Box, Container, Grid, Typography,
} from "@mui/material";
import React from "react";
import {useSelector} from "react-redux";
import {useLocation, useParams} from "react-router";
import PersonalInfoForm from "../../components/shared/personal-info-form";
import BankAccountInfoForm from "../../components/shared/bank-account-info-form";
import PaymentInfoForm from "../../components/shared/payment-info-form";
import AccountInfoForm from "../../components/shared/account-info-form";
import SignUpSummary from "../../components/shared/sign-up-summary";
import SignUpSuccess from "../../components/shared/sign-up-success";
import SignUpFailure from "../../components/shared/sign-up-failure";
import SignUpInstructions from "../../components/shared/sign-up-instructions";
import Welcome from "../../components/shared/welcome";
import AddressInfoForm from "../../components/shared/address-info-form";
import queryString from "query-string";
import {selectRequest} from "../../redux/requests/request-reducer";

const ClientSignUpResponse = () => {

    const {page} = useSelector(selectRequest);

    const {requestID, code} = useParams();
    const {search} = useLocation();
    const {email} = queryString.parse(search);

    const renderPage = page => {
        switch (page) {
            case 0:
                return <Welcome/>;
            case 1:
                return <SignUpInstructions/>
            case 2:
                return <PersonalInfoForm email={email}/>;
            case 3:
                return <BankAccountInfoForm/>;
            case 4:
                return <PaymentInfoForm/>;
            case 5:
                return <AccountInfoForm code={code}/>;
            case 6:
                return <AddressInfoForm/>;
            case 7:
                return <SignUpSummary requestID={requestID}/>;
            case 8:
                return <SignUpSuccess/>;
            case 9:
                return <SignUpFailure/>;
            default:
                return <Welcome/>;
        }
    }


    return (
        <React.Fragment>
            {
                page === 0 ? (
                    <Box>
                        <Welcome/>
                    </Box>
                ) : page === 7 ? (
                    <Box>
                        <SignUpSummary requestID={requestID}/>
                    </Box>
                ) : (
                    <Box sx={{
                        backgroundColor: 'background.default',
                        minHeight: '100vh',
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <Grid container={true} justifyContent="center">
                            <Grid item={true} xs={12} md={6}>
                                <Container maxWidth="sm" sx={{my: 3}}>
                                    <Typography
                                        mb={3}
                                        sx={{
                                            color: 'primary.main', fontWeight: 'bold', textTransform: 'uppercase'
                                        }}
                                        gutterBottom={true}
                                        align="center"
                                        variant="h4">
                                        Aiden Trust
                                    </Typography>
                                    <Typography
                                        mb={3}
                                        sx={{
                                            color: 'text.secondary', textTransform: 'capitalize'
                                        }}
                                        gutterBottom={true}
                                        align="center"
                                        variant="h6">
                                        Sign Up
                                    </Typography>
                                    {renderPage(page)}
                                </Container>
                            </Grid>
                        </Grid>
                    </Box>
                )}

        </React.Fragment>
    )
}

export default ClientSignUpResponse;
