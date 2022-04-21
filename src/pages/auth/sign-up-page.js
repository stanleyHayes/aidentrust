import {
    Box, Container, Grid, Typography,
} from "@mui/material";

import {useSelector} from "react-redux";
import {useParams} from "react-router";
import {selectAuth} from "../../redux/auth/auth-reducer";
import PersonalInfoForm from "../../components/shared/personal-info-form";
import BankAccountInfoForm from "../../components/shared/bank-account-info-form";
import PaymentInfoForm from "../../components/shared/payment-info-form";
import AccountInfoForm from "../../components/shared/account-info-form";
import SignUpSummary from "../../components/shared/sign-up-summary";
import SignUpSuccess from "../../components/shared/sign-up-success";
import SignUpFailure from "../../components/shared/sign-up-failure";
import SignUpInstructions from "../../components/shared/sign-up-instructions";

const ClientSignUpResponse = () => {

    const {page} = useSelector(selectAuth);

    const {invitationID, code} = useParams();

    const renderPage = page => {
        switch (page) {
            case 0:
                return <SignUpInstructions/>;
            case 1:
                return <PersonalInfoForm/>;
            case 2:
                return <BankAccountInfoForm/>;
            case 3:
                return <PaymentInfoForm/>;
            case 4:
                return <AccountInfoForm code={code}/>;
            case 5:
                return <SignUpSummary invitationID={invitationID}/>;
            case 6:
                return <SignUpSuccess/>;
            case 7:
                return <SignUpFailure/>;
            default:
                return <SignUpInstructions/>;
        }
    }


    return (
        <Box sx={{backgroundColor: 'background.default', minHeight: '100vh', display: 'flex', alignItems: 'center'}}>
            <Grid container={true} justifyContent="center">
                <Grid item={true} xs={12} md={6}>
                    <Container maxWidth="sm" sx={{my: 3}}>
                        <Typography
                            mb={3}
                            sx={{
                                color: 'text.primary', fontWeight: 'bold', textTransform: 'uppercase'
                            }}
                            gutterBottom={true}
                            align="center"
                            variant="h4">
                            Aiden Trust
                        </Typography>
                        <Typography
                            mb={3}
                            sx={{
                                color: 'text.secondary', fontWeight: 'bold', textTransform: 'capitalize'
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
        </Box>)
}

export default ClientSignUpResponse;
