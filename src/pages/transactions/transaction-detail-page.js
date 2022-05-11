import Layout from "../../components/layout/layout";
import {
    Box,
    Button,
    Card,
    CardContent,
    Container,
    Divider,
    Grid,
    LinearProgress,
    Stack,
    Typography
} from "@mui/material";
import {Alert, AlertTitle} from "@mui/lab";
import {useDispatch, useSelector} from "react-redux";
import {selectTransaction} from "../../redux/transactions/transaction-reducer";
import {useEffect} from "react";
import {selectAuth} from "../../redux/auth/auth-reducer";
import {TRANSACTION_ACTION_CREATORS} from "../../redux/transactions/transaction-action-creators";
import {useParams} from "react-router";
import {purple} from "@mui/material/colors";
import moment from "moment";

const TransactionDetailPage = () => {

    const {transactionDetail, transactionError, transactionLoading} = useSelector(selectTransaction);
    const dispatch = useDispatch();
    const {transactionID} = useParams();

    const {token} = useSelector(selectAuth);
    useEffect(() => {
        dispatch(TRANSACTION_ACTION_CREATORS.getTransaction(transactionID, token));
    }, []);

    console.log(transactionDetail)
    return (
        <Layout>
            <Box sx={{pt: 8.3}}>
                {transactionLoading && <LinearProgress color="primary" variant="query"/>}
                <Container sx={{py: 12}}>
                    {transactionError && (<Alert severity="error" variant="standard">
                        <AlertTitle>Error</AlertTitle>
                        <Typography variant="h6" align="center">
                            {transactionError}
                        </Typography>
                    </Alert>)
                    }
                    <Grid
                        mb={2}
                        spacing={2}
                        container={true}
                        justifyContent="space-between"
                        alignItems="center">
                        <Grid item={true} xs={12} md="auto">
                            <Typography variant="h4">Transaction Detail</Typography>
                        </Grid>
                        <Grid item={true} xs={12} md="auto">
                            <Button
                                fullWidth={true}
                                variant="outlined"
                                size="medium"
                                sx={{
                                    backgroundColor: 'primary.main',
                                    textTransform: 'capitalize',
                                    fontWeight: 'bold',
                                    color: 'white',
                                    '&:hover': {
                                        color: 'primary.main'
                                    }
                                }}>
                                Back
                            </Button>
                        </Grid>
                    </Grid>


                    <Divider light={true} variant="fullWidth" sx={{my: 4}}/>

                    {transactionDetail && (transactionDetail.type === 'international' ? (
                        <Box>
                            <Grid container={true} spacing={2}>
                                <Grid item={true} xs={12} md={4} sx={{height: '100%'}}>
                                    <Card elevation={0} sx={{height: '100%'}}>
                                        <CardContent>
                                            <Typography variant="h5">Transaction Information</Typography>
                                            <Divider variant="fullWidth" sx={{my: 2}} light={true}/>
                                            <Stack divider={<Divider light={true}/>} direction="column" spacing={2}>
                                                <Box>
                                                    <Typography mb={1} variant="body2">Amount</Typography>
                                                    <Typography variant="body1" sx={{fontWeight: 500}}>
                                                        ${transactionDetail.amount.toFixed(2)}
                                                    </Typography>
                                                </Box>
                                                <Box>
                                                    <Typography mb={1} variant="body2">
                                                        Type
                                                    </Typography>
                                                    <Typography variant="body1" sx={{fontWeight: 500}}>
                                                        {transactionDetail.type}
                                                    </Typography>
                                                </Box>
                                                <Box>
                                                    <Typography mb={1} variant="body2">Status</Typography>
                                                    <Typography variant="body1" sx={{fontWeight: 500}}>
                                                        {transactionDetail.status}
                                                    </Typography>
                                                </Box>
                                                <Box>
                                                    <Typography mb={1} variant="body2">
                                                        Date Created
                                                    </Typography>
                                                    <Typography variant="body1" sx={{fontWeight: 500}}>
                                                        {moment(transactionDetail.createdAt).fromNow()}
                                                    </Typography>
                                                </Box>

                                            </Stack>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item={true} xs={12} md={4} sx={{height: '100%'}}>
                                    <Card elevation={0} sx={{height: '100%'}}>
                                        <CardContent>
                                            <Typography variant="h5">Recipient Information</Typography>
                                            <Divider variant="fullWidth" sx={{my: 2}} light={true}/>
                                            <Stack divider={<Divider light={true}/>} direction="column" spacing={2}>
                                                <Box>
                                                    <Typography mb={1} variant="body2">Name</Typography>
                                                    <Typography variant="body1" sx={{fontWeight: 500}}>
                                                        {transactionDetail.international.recipientName}
                                                    </Typography>
                                                </Box>
                                                <Box>
                                                    <Typography mb={1} variant="body2">Account</Typography>
                                                    <Typography variant="body1" sx={{fontWeight: 500}}>
                                                        {transactionDetail.recipientAccount}
                                                    </Typography>
                                                </Box>
                                                <Box>
                                                    <Typography mb={1} variant="body2">
                                                        Routing Number
                                                    </Typography>
                                                    <Typography variant="body1" sx={{fontWeight: 500}}>
                                                        {transactionDetail.international.routingNumber}
                                                    </Typography>
                                                </Box>
                                                <Box>
                                                    <Typography mb={1} variant="body2">
                                                        Swift Code
                                                    </Typography>
                                                    <Typography variant="body1" sx={{fontWeight: 500}}>
                                                        {transactionDetail.international.swiftCode}
                                                    </Typography>
                                                </Box>
                                            </Stack>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item={true} xs={12} md={4} sx={{height: '100%'}}>
                                    <Card elevation={0} sx={{height: '100%'}}>
                                        <CardContent>
                                            <Typography variant="h5">Address Information</Typography>
                                            <Divider variant="fullWidth" sx={{my: 2}} light={true}/>
                                            <Stack divider={<Divider light={true}/>} direction="column" spacing={2}>
                                                <Box>
                                                    <Typography mb={1} variant="body2">Country</Typography>
                                                    <Typography variant="body1" sx={{fontWeight: 500}}>
                                                        {transactionDetail.address.country}
                                                    </Typography>
                                                </Box>
                                                <Box>
                                                    <Typography mb={1} variant="body2">State</Typography>
                                                    <Typography variant="body1" sx={{fontWeight: 500}}>
                                                        {transactionDetail.address.state}
                                                    </Typography>
                                                </Box>
                                                <Box>
                                                    <Typography mb={1} variant="body2">
                                                        City
                                                    </Typography>
                                                    <Typography variant="body1" sx={{fontWeight: 500}}>
                                                        {transactionDetail.address.city}
                                                    </Typography>
                                                </Box>
                                                <Box>
                                                    <Typography mb={1} variant="body2">Addres Line 1</Typography>
                                                    <Typography variant="body1" sx={{fontWeight: 500}}>
                                                        {transactionDetail.address.addressLine1}
                                                    </Typography>
                                                </Box>
                                                <Box>
                                                    <Typography mb={1} variant="body2">
                                                        Address Line 2
                                                    </Typography>
                                                    <Typography variant="body1" sx={{fontWeight: 500}}>
                                                        {transactionDetail.address.addressLine2}
                                                    </Typography>
                                                </Box>
                                            </Stack>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Box>
                    ) : transactionDetail.type === 'local' ? (
                        <Box>
                            <Grid container={true} spacing={2}>
                                <Grid item={true} xs={12} md={4} sx={{height: '100%'}}>
                                    <Card elevation={0} sx={{height: '100%'}}>
                                        <CardContent>
                                            <Typography variant="h5">Transaction Information</Typography>
                                            <Divider variant="fullWidth" sx={{my: 2}} light={true}/>
                                            <Stack divider={<Divider light={true}/>} direction="column" spacing={2}>
                                                <Box>
                                                    <Typography mb={1} variant="body2">Amount</Typography>
                                                    <Typography variant="body1" sx={{fontWeight: 500}}>
                                                        ${transactionDetail.amount.toFixed(2)}
                                                    </Typography>
                                                </Box>
                                                <Box>
                                                    <Typography mb={1} variant="body2">
                                                        Type
                                                    </Typography>
                                                    <Typography variant="body1" sx={{fontWeight: 500}}>
                                                        {transactionDetail.type}
                                                    </Typography>
                                                </Box>
                                                <Box>
                                                    <Typography mb={1} variant="body2">Status</Typography>
                                                    <Typography variant="body1" sx={{fontWeight: 500}}>
                                                        {transactionDetail.status}
                                                    </Typography>
                                                </Box>
                                                <Box>
                                                    <Typography mb={1} variant="body2">
                                                        Date Created
                                                    </Typography>
                                                    <Typography variant="body1" sx={{fontWeight: 500}}>
                                                        {moment(transactionDetail.createdAt).fromNow()}
                                                    </Typography>
                                                </Box>

                                            </Stack>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item={true} xs={12} md={4} sx={{height: '100%'}}>
                                    <Card elevation={0} sx={{height: '100%'}}>
                                        <CardContent>
                                            <Typography variant="h5">Recipient Information</Typography>
                                            <Divider variant="fullWidth" sx={{my: 2}} light={true}/>
                                            <Stack divider={<Divider light={true}/>} direction="column" spacing={2}>
                                                <Box>
                                                    <Typography mb={1} variant="body2">Name</Typography>
                                                    <Typography variant="body1" sx={{fontWeight: 500}}>
                                                        {transactionDetail.local.recipientName}
                                                    </Typography>
                                                </Box>
                                                <Box>
                                                    <Typography mb={1} variant="body2">Account</Typography>
                                                    <Typography variant="body1" sx={{fontWeight: 500}}>
                                                        {transactionDetail.recipientAccount}
                                                    </Typography>
                                                </Box>
                                                <Box>
                                                    <Typography mb={1} variant="body2">
                                                        Routing Number
                                                    </Typography>
                                                    <Typography variant="body1" sx={{fontWeight: 500}}>
                                                        {transactionDetail.local.routingNumber}
                                                    </Typography>
                                                </Box>
                                            </Stack>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item={true} xs={12} md={4} sx={{height: '100%'}}>
                                    <Card elevation={0} sx={{height: '100%'}}>
                                        <CardContent>
                                            <Typography variant="h5">Address Information</Typography>
                                            <Divider variant="fullWidth" sx={{my: 2}} light={true}/>
                                            <Stack divider={<Divider light={true}/>} direction="column" spacing={2}>
                                                <Box>
                                                    <Typography mb={1} variant="body2">Country</Typography>
                                                    <Typography variant="body1" sx={{fontWeight: 500}}>
                                                        {transactionDetail.address.country}
                                                    </Typography>
                                                </Box>
                                                <Box>
                                                    <Typography mb={1} variant="body2">State</Typography>
                                                    <Typography variant="body1" sx={{fontWeight: 500}}>
                                                        {transactionDetail.address.state}
                                                    </Typography>
                                                </Box>
                                                <Box>
                                                    <Typography mb={1} variant="body2">
                                                        City
                                                    </Typography>
                                                    <Typography variant="body1" sx={{fontWeight: 500}}>
                                                        {transactionDetail.address.city}
                                                    </Typography>
                                                </Box>
                                                <Box>
                                                    <Typography mb={1} variant="body2">Addres Line 1</Typography>
                                                    <Typography variant="body1" sx={{fontWeight: 500}}>
                                                        {transactionDetail.address.addressLine1}
                                                    </Typography>
                                                </Box>
                                                <Box>
                                                    <Typography mb={1} variant="body2">
                                                        Address Line 2
                                                    </Typography>
                                                    <Typography variant="body1" sx={{fontWeight: 500}}>
                                                        {transactionDetail.address.addressLine2}
                                                    </Typography>
                                                </Box>
                                            </Stack>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Box>
                    ) : transactionDetail.type === 'payment' ? (
                        <Box>
                            <Grid container={true} spacing={2}>
                                <Grid item={true} xs={12} md={6} sx={{height: '100%'}}>
                                    <Card elevation={0} sx={{height: '100%'}}>
                                        <CardContent>
                                            <Typography variant="h5">Transaction Information</Typography>
                                            <Divider variant="fullWidth" sx={{my: 2}} light={true}/>
                                            <Stack divider={<Divider light={true}/>} direction="column" spacing={2}>
                                                <Box>
                                                    <Typography mb={1} variant="body2">Amount</Typography>
                                                    <Typography variant="body1" sx={{fontWeight: 500}}>
                                                        ${transactionDetail.amount.toFixed(2)}
                                                    </Typography>
                                                </Box>
                                                <Box>
                                                    <Typography mb={1} variant="body2">
                                                        Type
                                                    </Typography>
                                                    <Typography variant="body1" sx={{fontWeight: 500}}>
                                                        {transactionDetail.type}
                                                    </Typography>
                                                </Box>
                                                <Box>
                                                    <Typography mb={1} variant="body2">
                                                        Service
                                                    </Typography>
                                                    <Typography variant="body1" sx={{fontWeight: 500}}>
                                                        {transactionDetail.payment.service}
                                                    </Typography>
                                                </Box>
                                                <Box>
                                                    <Typography mb={1} variant="body2">Status</Typography>
                                                    <Typography variant="body1" sx={{fontWeight: 500}}>
                                                        {transactionDetail.status}
                                                    </Typography>
                                                </Box>
                                                <Box>
                                                    <Typography mb={1} variant="body2">
                                                        Date Created
                                                    </Typography>
                                                    <Typography variant="body1" sx={{fontWeight: 500}}>
                                                        {moment(transactionDetail.createdAt).fromNow()}
                                                    </Typography>
                                                </Box>
                                            </Stack>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Box>
                    ) : transactionDetail.type === 'deposit' ? (
                        <Box>
                            <Grid container={true} spacing={2}>
                                <Grid item={true} xs={12} md={6}>
                                    <Card elevation={0}>
                                        <CardContent>
                                            <Typography variant="h6">Transaction Information</Typography>
                                            <Divider variant="fullWidth" sx={{my: 2}} light={true}/>
                                            <Stack divider={<Divider light={true}/>} direction="column" spacing={2}>
                                                <Box>
                                                    <Typography mb={1} variant="body2">Amount</Typography>
                                                    <Typography variant="body1" sx={{fontWeight: 500}}>
                                                        ${transactionDetail.amount.toFixed(2)}
                                                    </Typography>
                                                </Box>
                                                <Box>
                                                    <Typography mb={1} variant="body2">
                                                        Type
                                                    </Typography>
                                                    <Typography variant="body1" sx={{fontWeight: 500}}>
                                                        {transactionDetail.type}
                                                    </Typography>
                                                </Box>
                                                <Box>
                                                    <Typography mb={1} variant="body2">Status</Typography>
                                                    <Typography variant="body1" sx={{fontWeight: 500}}>
                                                        {transactionDetail.status}
                                                    </Typography>
                                                </Box>
                                                <Box>
                                                    <Typography mb={1} variant="body2">
                                                        Date Created
                                                    </Typography>
                                                    <Typography variant="body1" sx={{fontWeight: 500}}>
                                                        {moment(transactionDetail.createdAt).fromNow()}
                                                    </Typography>
                                                </Box>
                                            </Stack>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Box>
                    ) : (
                        <Box sx={{backgroundColor: purple[50]}} py={5}>
                            <Typography sx={{color: purple[600]}} variant="body1" align="center">
                                Unknown transaction
                            </Typography>
                        </Box>
                    ))}
                </Container>
            </Box>
        </Layout>
    )
}

export default TransactionDetailPage;
