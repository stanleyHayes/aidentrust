import {
    Alert,
    AlertTitle,
    Avatar,
    Box,
    Button,
    Card,
    CardContent,
    CircularProgress,
    Container,
    Divider,
    Grid,
    LinearProgress,
    Stack,
    Typography
} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {Call, CheckCircle, ChevronLeft, Mail, Male, Map, Password, Person, Pin} from "@mui/icons-material";
import {selectRequest} from "../../redux/requests/request-reducer";
import {REQUEST_ACTION_CREATORS} from "../../redux/requests/request-action-creators";
import {LoadingButton} from "@mui/lab";
import {grey, red} from "@mui/material/colors";
import {useState} from "react";
import RejectDialog from "../dialogs/reject/reject-dialog";
import Info from "./info";

const SignUpSummary = ({requestID}) => {

    const {
        accountInfo,
        paymentInfo,
        bankAccountInfo,
        personalInfo,
        addressInfo,
        requestLoading,
        requestError
    } = useSelector(selectRequest);

    const dispatch = useDispatch();

    const handleSubmit = () => {

        dispatch(REQUEST_ACTION_CREATORS.acceptRequest({
            userDetails: {...personalInfo},
            paymentDetails: {...paymentInfo},
            accountDetails: {...accountInfo},
            bankAccountDetails: {...bankAccountInfo},
            addressDetails: {...addressInfo}
        }, requestID))
    }

    const [rejectDialogOpen, setRejectDialogOpen] = useState(false);

    const handleReject = () => {
        setRejectDialogOpen(true);
    }

    return (<Box my={4}>
        <Container>
            <Card sx={{mb: 2}} elevation={0} variant="elevation">
                {requestLoading && <LinearProgress variant="query" color="primary"/>}
                <CardContent>
                    {requestError && (
                        <Alert severity="error" sx={{my: 2}}><AlertTitle>{requestError}</AlertTitle></Alert>)}
                    <Typography variant="h4" align="center">Summary</Typography>

                    <Divider sx={{my: 2}} variant="fullWidth" light={true}/>

                    <Grid container={true} spacing={2} alignItems="center">
                        <Grid item={true} xs={12} md={4}>
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
                        <Grid item={true} xs={12} md={4}>
                            <Button
                                sx={{
                                    fontWeight: 'bold',
                                    textTransform: 'capitalize',
                                    backgroundColor: red[600],
                                    color: 'white',
                                    '&:hover': {
                                        backgroundColor: red[800], color: 'secondary.main'
                                    },
                                    '&:focus': {
                                        backgroundColor: red[800], color: 'secondary.main'
                                    },
                                    '&:active': {
                                        backgroundColor: red[800], color: 'secondary.main'
                                    },
                                }}
                                fullWidth={true}
                                size="large"
                                disableElevation={true}
                                onClick={handleReject}
                                variant="contained">Reject Invitation</Button>
                        </Grid>
                        <Grid item={true} xs={12} md={4}>
                            <LoadingButton
                                loading={requestLoading}
                                loadingIndicator={<CircularProgress color="secondary" size={20}/>}
                                sx={{
                                    fontWeight: 'bold',
                                    textTransform: 'capitalize',
                                    backgroundColor: 'primary.main',
                                    color: 'secondary.main',
                                }}
                                fullWidth={true}
                                size="large"
                                disableElevation={true}
                                onClick={handleSubmit}
                                endIcon={<CheckCircle color="secondary"/>}
                                variant="contained">Submit Information</LoadingButton>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>

            <Grid spacing={2} container={true}>
                <Grid item={true} xs={12} md={4}>
                    <Card elevation={0} sx={{mb: 2}}>
                        <CardContent>
                            <Stack mb={2} direction="row" justifyContent="center">
                                <Avatar
                                    sx={{width: 100, height: 100}}
                                    src={personalInfo.image}
                                />
                            </Stack>
                            <Typography
                                variant="body1"
                                align="center">
                                {`${personalInfo.firstName} ${personalInfo.lastName}`}
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card elevation={0} sx={{mb: 2}}>
                        <CardContent>
                            <Stack
                                direction="row"
                                justifyContent="space-between"
                                alignItems="center">
                                <Button variant="text" size="small" startIcon={<Person/>}>
                                    Bank Account Details
                                </Button>
                            </Stack>

                            <Divider light={true} sx={{my: 1}} variant="middle"/>

                            <Stack
                                divider={<Divider light={true} variant="middle"/>}
                                direction="column">
                                <Info
                                    icon={<Person sx={{color: grey[600]}}/>}
                                    title="Account holding name"
                                    value={`${personalInfo.firstName} ${personalInfo.lastName}`}

                                />
                                <Info
                                    icon={<Person sx={{color: grey[600]}}/>}
                                    title="Account Number"
                                    value={bankAccountInfo.number}

                                />
                                <Info
                                    icon={<Person sx={{color: grey[600]}}/>}
                                    title="Account Usage"
                                    value={bankAccountInfo.usage}
                                />
                                <Info
                                    icon={<Person sx={{color: grey[600]}}/>}
                                    title="Account Type"
                                    value={bankAccountInfo.type}

                                />
                                <Info
                                    icon={<Person sx={{color: grey[600]}}/>}
                                    title="Balance"
                                    value={`${bankAccountInfo.balance}USD`}
                                />
                                <Info
                                    icon={<Person sx={{color: grey[600]}}/>}
                                    title="Currency"
                                    value={bankAccountInfo.currency}
                                />
                            </Stack>
                        </CardContent>
                    </Card>
                    <Card elevation={0}>
                        <CardContent>
                            <Stack
                                mb={1}
                                direction="row"
                                justifyContent="space-between"
                                alignItems="center">
                                <Button
                                    disableRipple={true}
                                    variant="text"
                                    size="small"
                                    startIcon={<Map/>}>
                                    Account Details
                                </Button>
                            </Stack>

                            <Divider light={true} sx={{my: 1}} variant="middle"/>

                            <Stack
                                divider={<Divider light={true} variant="middle"/>}
                                direction="column">
                                <Info
                                    icon={<Pin sx={{color: grey[600]}}/>}
                                    title="Pin"
                                    value={accountInfo.pin}

                                />

                                <Info
                                    icon={<Password sx={{color: grey[600]}}/>}
                                    title="Password"
                                    value={accountInfo.password}

                                />
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item={true} xs={12} md={8}>
                    <Grid spacing={2} container={true}>
                        <Grid item={true} xs={12}>
                            <Card elevation={0}>
                                <CardContent>
                                    <Stack
                                        mb={1}
                                        direction="row"
                                        justifyContent="space-between"
                                        alignItems="center">
                                        <Button
                                            disableRipple={true}
                                            variant="text"
                                            size="small"
                                            startIcon={<Person/>}>
                                            Personal Details
                                        </Button>
                                    </Stack>

                                    <Divider light={true} sx={{my: 1}} variant="middle"/>

                                    <Grid spacing={2} container={true}>
                                        <Grid item={true} xs={12} md={6}>
                                            <Info
                                                icon={<Mail sx={{color: grey[600]}}/>}
                                                title="Email"
                                                value={personalInfo.email}

                                            />
                                        </Grid>
                                        <Grid item={true} xs={12} md={6}>
                                            <Info
                                                icon={<Call sx={{color: grey[600]}}/>}
                                                title="Phone"
                                                value={personalInfo.phoneNumber}

                                            />
                                        </Grid>
                                        <Grid item={true} xs={12} md={6}>
                                            <Info
                                                icon={<Male sx={{color: grey[600]}}/>}
                                                title="Gender"
                                                value={personalInfo.gender}
                                            />
                                        </Grid>
                                        <Grid item={true} xs={12} md={6}>
                                            <Info
                                                icon={<Call sx={{color: grey[600]}}/>}
                                                title="Emergency Phone"
                                                value={personalInfo.emergencyPhoneNumber}
                                            />
                                        </Grid>
                                        <Grid item={true} xs={12} md={6}>
                                            <Info
                                                icon={<Call sx={{color: grey[600]}}/>}
                                                title="DOB"
                                                value={new Date(personalInfo.dateOfBirth).toLocaleDateString()}
                                            />
                                        </Grid>
                                        <Grid item={true} xs={12} md={6}>
                                            <Info
                                                icon={<Call sx={{color: grey[600]}}/>}
                                                title="Username"
                                                value={personalInfo.username}
                                            />
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item={true} xs={12}>
                            <Card elevation={0}>
                                <CardContent>
                                    <Stack
                                        mb={1}
                                        direction="row"
                                        justifyContent="space-between"
                                        alignItems="center">
                                        <Button
                                            disableRipple={true}
                                            variant="text"
                                            size="small"
                                            startIcon={<Map/>}>
                                            Address Details
                                        </Button>
                                    </Stack>

                                    <Divider light={true} sx={{my: 1}} variant="middle"/>

                                    <Grid spacing={2} container={true}>
                                        <Grid item={true} xs={12} md={6}>
                                            <Info
                                                icon={<Person sx={{color: grey[600]}}/>}
                                                title="Country"
                                                value={addressInfo.country}

                                            />
                                        </Grid>
                                        <Grid item={true} xs={12} md={6}>
                                            <Info
                                                icon={<Person sx={{color: grey[600]}}/>}
                                                title="State"
                                                value={addressInfo.state}

                                            />
                                        </Grid>
                                        <Grid item={true} xs={12} md={6}>
                                            <Info
                                                icon={<Person sx={{color: grey[600]}}/>}
                                                title="City"
                                                value={addressInfo.city}
                                            />
                                        </Grid>
                                        <Grid item={true} xs={12} md={6}>
                                            <Info
                                                icon={<Person sx={{color: grey[600]}}/>}
                                                title="Address Line 1"
                                                value={addressInfo.addressLine1}
                                            />
                                        </Grid>
                                        {addressInfo.addressLine2 && (<Grid item={true} xs={12} md={6}>
                                            <Info
                                                icon={<Person sx={{color: grey[600]}}/>}
                                                title="Address Line 2"
                                                value={addressInfo.addressLine2}
                                            />
                                        </Grid>)}
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item={true} xs={12}>
                            <Card elevation={0}>
                                <CardContent>
                                    <Stack
                                        mb={1}
                                        direction="row"
                                        justifyContent="space-between"
                                        alignItems="center">
                                        <Button
                                            disableRipple={true}
                                            variant="text"
                                            size="small"
                                            startIcon={<Map/>}>
                                            Payment Details
                                        </Button>
                                    </Stack>

                                    <Divider light={true} sx={{my: 1}} variant="middle"/>

                                    <Grid spacing={2} container={true}>
                                        <Grid item={true} xs={12} md={6}>
                                            <Info
                                                icon={<Person sx={{color: grey[600]}}/>}
                                                title="Amount"
                                                value={`${paymentInfo.amount} GHS`}
                                            />
                                        </Grid>
                                        <Grid item={true} xs={12} md={6}>
                                            <Info
                                                icon={<Person sx={{color: grey[600]}}/>}
                                                title="Transaction ID"
                                                value={paymentInfo.transactionID}

                                            />
                                        </Grid>
                                        <Grid item={true} xs={12} md={6}>
                                            <Info
                                                icon={<Person sx={{color: grey[600]}}/>}
                                                title="Provider"
                                                value={paymentInfo.provider}
                                            />
                                        </Grid>
                                        <Grid item={true} xs={12} md={6}>
                                            <Info
                                                icon={<Person sx={{color: grey[600]}}/>}
                                                title="Phone"
                                                value={paymentInfo.paymentPhoneNumber}
                                            />
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            {rejectDialogOpen && (<RejectDialog
                open={rejectDialogOpen}
                handleClose={() => setRejectDialogOpen(false)}
                handleDelete={() => dispatch(REQUEST_ACTION_CREATORS.rejectRequest(requestID))}
                message="Are you sure you want to reject this invitation?"/>)}

        </Container>
    </Box>)
}

export default SignUpSummary;
