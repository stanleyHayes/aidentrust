import Layout from "../../components/layout/layout";
import {
    Avatar,
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
import {makeStyles} from "@mui/styles";
import Stat from "../../components/shared/stat";
import {Link} from "react-router-dom";
import Feint from "../../components/shared/feint";
import {Call, Mail, MonetizationOn, MoreHoriz, Paid, ShoppingCartCheckout, VerifiedUser} from "@mui/icons-material";
import {green, grey, purple, red} from "@mui/material/colors";
import {useDispatch, useSelector} from "react-redux";
import TransactionItem from "../../components/shared/transaction-item";
import {selectDashboard} from "../../redux/dashboard/dashboard-reducer";
import {Alert, AlertTitle} from "@mui/lab";
import MakePaymentDialog from "../../components/dialogs/new/make-payment-dialog";
import ReceiveMoneyDialog from "../../components/dialogs/new/receive-money-dialog";
import {useEffect, useState} from "react";
import {selectAuth} from "../../redux/auth/auth-reducer";
import {UTILS} from "../../utils/constants/utils";
import {DASHBOARD_ACTION_CREATORS} from "../../redux/dashboard/dashboard-action-creators";
import currencyFormatter from "currency-formatter";

const HomePage = () => {

    const [paymentDialogOpen, setPaymentDialogOpen] = useState(false);
    const [receiveMoneyDialogOpen, setReceiveMoneyDialogOpen] = useState(false);

    const useStyles = makeStyles(theme => {
        return {
            container: {
                paddingTop: 16,
                paddingBottom: 16,
                [theme.breakpoints.down('sm')]: {
                    paddingTop: 32
                }
            },
            link: {
                textDecoration: 'none'
            }
        }
    });

    const classes = useStyles();
    const dispatch = useDispatch();

    const {authData, token} = useSelector(selectAuth);
    const {dashboard, dashboardLoading, dashboardError} = useSelector(selectDashboard);

    const renderColor = color => {
        switch (color) {
            case 'red':
                return red[600];
            case 'green':
                return green[600];
            case 'grey':
                return grey[600];
            case 'purple':
                return purple[600];
            default:
                return grey[600];
        }
    }

    useEffect(() => {
        dispatch(DASHBOARD_ACTION_CREATORS.getDashboard(token));
    }, []);

    return (
        <Layout>
            <Box sx={{pt: 8.3}}>
            {dashboardLoading && <LinearProgress color="primary" variant="query"/>}
            <Container sx={{py: 12}}>
                {dashboardError && (<Alert severity="error" variant="standard">
                    <AlertTitle>Error</AlertTitle>
                    <Typography variant="h6" align="center">
                        {dashboardError}
                    </Typography>
                </Alert>)
                }
                <Box mb={2}>
                    <Typography mb={1} variant="h6">Overview</Typography>
                    <Grid container={true} spacing={2} alignItems="center">
                        <Grid item={true} xs={12} md={6} lg={4}>
                            <Stat
                                icon={
                                    <Paid
                                        fontSize="large"
                                        sx={{color: renderColor('green')}}
                                    />}
                                color="green"
                                title="Income"
                                value={dashboard && currencyFormatter.format(dashboard.income, {code: 'USD'})}
                            />
                        </Grid>
                        <Grid item={true} xs={12} md={6} lg={4}>
                            <Stat
                                icon={<ShoppingCartCheckout
                                    fontSize="large"
                                    sx={{color: renderColor('red')}}
                                />} color="red"
                                title="Spending"
                                value={dashboard && currencyFormatter.format(dashboard.spending, {code: 'USD'})}
                            />
                        </Grid>
                        <Grid item={true} xs={12} md={6} lg={4}>
                            <Stat
                                icon={
                                    <MonetizationOn
                                        fontSize="large"
                                        sx={{color: renderColor('grey')}}
                                    />}
                                color="grey"
                                title="Balance"
                                value={dashboard && currencyFormatter.format(dashboard.currentBalance, {code: 'USD'})}
                            />
                        </Grid>
                    </Grid>
                </Box>

                <Grid container={true} spacing={2}>

                    <Grid item={true} xs={12} md={6}>
                        <Card elevation={0} sx={{height: '100%'}}>
                            <CardContent>
                                <Stack mb={2} justifyContent="space-between" alignItems="center" direction="row">
                                    <Typography variant="h6">Recent Transactions</Typography>
                                    <Link className={classes.link} to="/transactions">
                                        <Button variant="text">See all</Button>
                                    </Link>
                                </Stack>
                                {dashboard && dashboard.recentTransactions.length === 0 ? (
                                    <Box sx={{backgroundColor: purple[50]}} py={5}>
                                        <Typography sx={{color: purple[600]}} variant="body1" align="center">
                                            No transactions available
                                        </Typography>
                                    </Box>
                                ) : (
                                    <Stack
                                        direction="column"
                                        divider={<Divider variant="middle" light={true}/>}>
                                        {
                                            dashboard && dashboard.recentTransactions.map((transaction, index) => {
                                                return (
                                                    <TransactionItem
                                                        key={index}
                                                        transaction={transaction}
                                                    />
                                                )
                                            })
                                        }
                                    </Stack>
                                )}
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item={true} xs={12} md={6}>

                        <Card sx={{mb: 2}} elevation={0}>
                            <CardContent>
                                <Stack mb={2} justifyContent="center" alignItems="center">
                                    <Avatar sx={{width: 100, height: 100, backgroundColor: purple[100]}}>
                                        <Typography
                                            sx={{color: purple[800]}}
                                            variant="h3">
                                            {authData && UTILS.getInitials(`${authData?.firstName} ${authData?.lastName}`)}
                                        </Typography>
                                    </Avatar>
                                </Stack>
                                <Grid
                                    container={true}
                                    spacing={1}
                                    alignItems="center"
                                    justifyContent="space-between">
                                    <Grid item={true} xs={6} md={3}>
                                        <Stack justifyContent="center" direction="row">
                                            <Feint
                                                mb={1}
                                                padding={0.4}
                                                children={<VerifiedUser sx={{color: purple[600]}}/>}
                                                color="purple"/>
                                        </Stack>
                                        <Typography
                                            align="center"
                                            variant="body2"
                                            sx={{
                                                fontSize: 10,
                                                color: grey[600]
                                            }}>
                                            {authData && authData.status}
                                        </Typography>
                                    </Grid>
                                    <Grid item={true} xs={6} md={3}>
                                        <Stack justifyContent="center" direction="row">
                                            <Feint
                                                mb={1}
                                                padding={0.4}
                                                children={<Call sx={{color: red[600]}}/>}
                                                color="red"/>
                                        </Stack>
                                        <Typography
                                            align="center"
                                            variant="body2"
                                            sx={{
                                                fontSize: 10,
                                                color: grey[600]
                                            }}>
                                            {authData && authData.phoneNumber}
                                        </Typography>
                                    </Grid>
                                    <Grid item={true} xs={6} md={3}>
                                        <Stack justifyContent="center" direction="row">
                                            <Feint
                                                mb={1}
                                                padding={0.4}
                                                children={<Mail sx={{color: green[600]}}/>}
                                                color="green"/>
                                        </Stack>
                                        <Typography
                                            align="center"
                                            variant="body2"
                                            sx={{
                                                fontSize: 10,
                                                color: grey[600]
                                            }}>
                                            {authData && authData.email}
                                        </Typography>
                                    </Grid>
                                    <Grid item={true} xs={6} md={3}>
                                        <Link to="/profile" className={classes.link}>
                                            <Stack justifyContent="center" direction="row">
                                                <Feint
                                                    mb={1}
                                                    padding={0.4}
                                                    children={<MoreHoriz sx={{color: grey[600]}}/>}
                                                    color="grey"/>
                                            </Stack>

                                            <Typography
                                                align="center"
                                                variant="body2"
                                                sx={{
                                                    cursor: 'pointer',
                                                    fontSize: 10,
                                                    color: grey[600]
                                                }}>
                                                More
                                            </Typography>
                                        </Link>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>

                        <Grid container={true} spacing={2}>
                            <Grid xs={6} item={true}>
                                <Link style={{textDecoration: 'none'}} to="/transfer/international">
                                    <Card
                                        elevation={0}
                                        sx={{cursor: 'pointer', height: '100%'}}>
                                        <CardContent>
                                            <Stack
                                                mb={2}
                                                justifyContent="center"
                                                direction="row">
                                                <Avatar
                                                    variant="rounded"
                                                    src="/assets/images/international-transfer.png"
                                                    sx={{color: purple[600]}}/>
                                            </Stack>
                                            <Typography
                                                align="center"
                                                variant="body2"
                                                sx={{
                                                    fontSize: 14,
                                                    color: grey[600]
                                                }}>
                                                International Transfer
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Link>
                            </Grid>
                            <Grid xs={6} item={true}>
                                <Link style={{textDecoration: 'none'}} to="/transfer/local">
                                    <Card
                                        sx={{cursor: 'pointer', height: '100%'}}
                                        elevation={0}>
                                        <CardContent>
                                            <Stack mb={2} justifyContent="center" direction="row">
                                                <Avatar
                                                    variant="rounded"
                                                    src="/assets/images/local-transfer.png"
                                                    sx={{color: purple[600]}}/>
                                            </Stack>
                                            <Typography
                                                align="center"
                                                variant="body2"
                                                sx={{
                                                    fontSize: 14,
                                                    color: grey[600]
                                                }}>
                                                Local Transfer
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Link>
                            </Grid>
                            <Grid xs={6} item={true}>
                                <Card
                                    sx={{cursor: 'pointer', height: '100%'}}
                                    onClick={() => setPaymentDialogOpen(true)}
                                    elevation={0}>
                                    <CardContent>
                                        <Stack mb={2} justifyContent="center" direction="row">
                                            <Avatar
                                                variant="rounded"
                                                src="/assets/images/payment.png"
                                                sx={{color: purple[600]}}/>
                                        </Stack>
                                        <Typography
                                            align="center"
                                            variant="body2"
                                            sx={{
                                                fontSize: 14,
                                                color: grey[600]
                                            }}>
                                            Make Payment
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid xs={6} item={true}>
                                <Card
                                    sx={{cursor: 'pointer', height: '100%'}}
                                    onClick={() => setReceiveMoneyDialogOpen(true)}
                                    elevation={0}>
                                    <CardContent>
                                        <Stack mb={2} justifyContent="center" direction="row">
                                            <Avatar
                                                src="/assets/images/receive-money.png"
                                                sx={{color: purple[600]}}
                                            />
                                        </Stack>
                                        <Typography
                                            align="center"
                                            variant="body2"
                                            sx={{
                                                fontSize: 14,
                                                color: grey[600]
                                            }}>
                                            Deposit Money
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                {paymentDialogOpen && (
                    <MakePaymentDialog
                        handleClose={() => setPaymentDialogOpen(false)}
                        open={paymentDialogOpen}
                    />
                )}

                {receiveMoneyDialogOpen && (
                    <ReceiveMoneyDialog
                        handleClose={() => setReceiveMoneyDialogOpen(false)}
                        open={receiveMoneyDialogOpen}
                    />
                )}
            </Container>
            </Box>
        </Layout>
    )
}

export default HomePage;
