import {Box, Button, Card, CardContent, CardMedia, Container, Divider, Grid, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {CheckCircle, ChevronLeft} from "@mui/icons-material";
import {selectRequest} from "../../redux/requests/request-reducer";
import {REQUEST_ACTION_CREATORS} from "../../redux/requests/request-action-creators";

const SignUpSummary = ({invitationID}) => {

    const {accountInfo, paymentInfo, bankAccountInfo, personalInfo} = useSelector(selectRequest);

    const dispatch = useDispatch();

    const handleSubmit = event => {
        event.preventDefault();


    }

    return (
        <Box>
            <Container>
                <Card elevation={1} variant="elevation">
                    <CardContent>
                        <Typography variant="h4" align="center">Summary</Typography>

                        <Divider sx={{my: 2}} variant="fullWidth" light={true}/>

                        <Box mb={4}>
                            <Typography gutterBottom={true} variant="h6">
                                Personal Information
                            </Typography>
                            <Divider sx={{my: 2}} variant="fullWidth" light={true}/>

                            <CardMedia
                                sx={{
                                    height: 250,
                                    mb: 1,
                                    borderRadius: 2,
                                    objectPosition: 'top',
                                    objectFit: 'cover'
                                }} component="img" src={personalInfo.image}/>

                            <Typography sx={{color: 'text.secondary'}} mb={1} variant="body2">
                                First Name
                            </Typography>
                            <Typography sx={{color: 'text.primary'}} mb={2} variant="body1">
                                {personalInfo.firstName}
                            </Typography>


                            <Typography sx={{color: 'text.secondary'}} mb={1} variant="body2">
                                Last Name
                            </Typography>
                            <Typography sx={{color: 'text.primary'}} mb={2} variant="body1">
                                {personalInfo.lastName}
                            </Typography>

                            <Typography sx={{color: 'text.secondary'}} mb={1} variant="body2">
                                Email
                            </Typography>
                            <Typography sx={{color: 'text.primary'}} mb={2} variant="body1">
                                {personalInfo.email}
                            </Typography>

                            <Typography sx={{color: 'text.secondary'}} mb={1} variant="body2">
                                Username
                            </Typography>
                            <Typography sx={{color: 'text.primary'}} mb={2} variant="body1">
                                {personalInfo.username}
                            </Typography>

                            <Typography sx={{color: 'text.secondary'}} mb={1} variant="body2">
                                Date of Birth
                            </Typography>
                            <Typography sx={{color: 'text.primary'}} mb={2} variant="body1">
                                {new Date(personalInfo.dateOfBirth).toLocaleDateString()}
                            </Typography>

                            <Typography sx={{color: 'text.secondary'}} mb={1} variant="body2">
                                Gender
                            </Typography>
                            <Typography sx={{color: 'text.primary'}} mb={2} variant="body1">
                                {personalInfo.gender}
                            </Typography>

                            <Typography sx={{color: 'text.secondary'}} mb={1} variant="body2">
                                Phone
                            </Typography>
                            <Typography sx={{color: 'text.primary'}} mb={2} variant="body1">
                                {personalInfo.phone}
                            </Typography>

                            <Typography sx={{color: 'text.secondary'}} mb={1} variant="body2">
                                Emergency Phone
                            </Typography>
                            <Typography sx={{color: 'text.primary'}} mb={2} variant="body1">
                                {personalInfo.emergencyPhoneNumber}
                            </Typography>
                        </Box>

                        <Box mb={4}>
                            <Typography  gutterBottom={true} variant="h6">
                                Bank Account Information
                            </Typography>
                            <Divider sx={{my: 2}} variant="fullWidth" light={true}/>

                            <Typography sx={{color: 'text.secondary'}} mb={1} variant="body2">
                                Number
                            </Typography>
                            <Typography sx={{color: 'text.primary'}} mb={2} variant="body1">
                                {bankAccountInfo.number}
                            </Typography>


                            <Typography sx={{color: 'text.secondary'}} mb={1} variant="body2">
                                Type
                            </Typography>
                            <Typography sx={{color: 'text.primary'}} mb={2} variant="body1">
                                {bankAccountInfo.type}
                            </Typography>

                            <Typography sx={{color: 'text.secondary'}} mb={1} variant="body2">
                                Usage
                            </Typography>
                            <Typography sx={{color: 'text.primary'}} mb={2} variant="body1">
                                {bankAccountInfo.usage}
                            </Typography>

                            <Typography sx={{color: 'text.secondary'}} mb={1} variant="body2">
                                Balance
                            </Typography>
                            <Typography sx={{color: 'text.primary'}} mb={2} variant="body1">
                                ${bankAccountInfo.balance}
                            </Typography>

                            <Typography sx={{color: 'text.secondary'}} mb={1} variant="body2">
                                Currency
                            </Typography>
                            <Typography sx={{color: 'text.primary'}} mb={2} variant="body1">
                                {bankAccountInfo.currency}
                            </Typography>
                        </Box>

                        <Box mb={4}>
                            <Typography  gutterBottom={true} variant="h6">
                                Payment Information
                            </Typography>
                            <Divider sx={{my: 2}} variant="fullWidth" light={true}/>

                            <Typography sx={{color: 'text.secondary'}} mb={1} variant="body2">
                                Transaction ID
                            </Typography>
                            <Typography sx={{color: 'text.primary'}} mb={2} variant="body1">
                                {paymentInfo.transactionID}
                            </Typography>


                            <Typography sx={{color: 'text.secondary'}} mb={1} variant="body2">
                                Provider
                            </Typography>
                            <Typography sx={{color: 'text.primary'}} mb={2} variant="body1">
                                {paymentInfo.provider}
                            </Typography>

                            <Typography sx={{color: 'text.secondary'}} mb={1} variant="body2">
                                Phone
                            </Typography>
                            <Typography sx={{color: 'text.primary'}} mb={2} variant="body1">
                                {paymentInfo.phone}
                            </Typography>

                            <Typography sx={{color: 'text.secondary'}} mb={1} variant="body2">
                                Amount
                            </Typography>
                            <Typography sx={{color: 'text.primary'}} mb={2} variant="body1">
                                {paymentInfo.amount} GHS
                            </Typography>
                        </Box>

                        <Box mb={4}>
                            <Typography gutterBottom={true} variant="h6" align="center">
                                Account Information
                            </Typography>
                            <Divider sx={{my: 2}} variant="fullWidth" light={true}/>

                            <Typography sx={{color: 'text.secondary'}} mb={1} variant="body2">
                                Code
                            </Typography>
                            <Typography sx={{color: 'text.primary'}} mb={2} variant="body1">
                                {accountInfo.code}
                            </Typography>

                            <Typography sx={{color: 'text.secondary'}} mb={1} variant="body2">
                                Pin
                            </Typography>
                            <Typography sx={{color: 'text.primary'}} mb={2} variant="body1">
                                {accountInfo.pin}
                            </Typography>
                        </Box>

                        <Grid container={true} spacing={1} alignItems="center">
                            <Grid item={true} xs={12} md={6}>
                                <Button
                                    sx={{
                                        textTransform: 'capitalize',
                                        color: 'primary.main',
                                        fontWeight: 'bold',
                                        backgroundColor: 'secondary.main',
                                        '&:hover': {
                                            borderColor: 'secondary.light',
                                            backgroundColor: 'secondary.dark',
                                            borderWidth: 2,
                                        }
                                    }}
                                    size="large"
                                    startIcon={<ChevronLeft color="primary"/>}
                                    fullWidth={true}
                                    disableElevation={true}
                                    onClick={() => dispatch(REQUEST_ACTION_CREATORS.previousPage())}
                                    variant="contained">
                                    Previous
                                </Button>
                            </Grid>
                            <Grid item={true} xs={12} md={6}>
                                <Button
                                    sx={{
                                        fontWeight: 'bold',
                                        textTransform: 'capitalize',
                                        backgroundColor: 'primary.main',
                                        color: 'secondary.main',
                                        '&:hover': {
                                            color: 'secondary.main'
                                        },
                                        '&:focus': {
                                            color: 'secondary.main'
                                        },
                                        '&:active': {
                                            color: 'secondary.main'
                                        },
                                    }}
                                    fullWidth={true}
                                    size="large"
                                    onClick={handleSubmit}
                                    endIcon={<CheckCircle color="secondary"/>}
                                    variant="outlined">Submit Information</Button>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Container>
        </Box>
    )
}

export default SignUpSummary;
