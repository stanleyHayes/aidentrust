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
import {
    Call,
    Mail, MonetizationOn,
    MoreHoriz,
    Paid,
    ShoppingCartCheckout,
    VerifiedUser
} from "@mui/icons-material";
import {green, grey, purple, red} from "@mui/material/colors";
import {useSelector} from "react-redux";
import {selectTransaction} from "../../redux/transactions/transaction-reducer";
import TransactionItem from "../../components/shared/transaction-item";
import {selectDashboard} from "../../redux/dashboard/dashboard-reducer";
import {Alert, AlertTitle} from "@mui/lab";
import InternationalTransferDialog from "../../components/dialogs/new/international-transfer-dialog";
import LocalTransferDialog from "../../components/dialogs/new/local-transfer-dialog";
import MakePaymentDialog from "../../components/dialogs/new/make-payment-dialog";
import ReceiveMoneyDialog from "../../components/dialogs/new/receive-money-dialog";
import {useState} from "react";
import {selectAuth} from "../../redux/auth/auth-reducer";

const HomePage = () => {

    const [internationalTransferDialogOpen, setInternationalTransferDialogOpen] = useState(false);
    const [localTransferDialogOpen, setLocalTransferDialogOpen] = useState(false);
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

    const {transactions} = useSelector(selectTransaction);
    const {authData} = useSelector(selectAuth);
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

    return (
        <Layout>
            <Container className={classes.container}>
                {dashboardLoading && <LinearProgress color="secondary" variant="query"/>}
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
                                value={`$${dashboard.income}`}
                            />
                        </Grid>
                        <Grid item={true} xs={12} md={6} lg={4}>
                            <Stat
                                icon={<ShoppingCartCheckout
                                    fontSize="large"
                                    sx={{color: renderColor('red')}}
                                />} color="red"
                                title="Spending"
                                value={`$${dashboard.spending}`}
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
                                value={`$${dashboard.currentBalance}`}
                            />
                        </Grid>
                    </Grid>
                </Box>

                <Grid container={true} spacing={2}>

                    <Grid item={true} xs={12} md={6}>
                        <Card elevation={0}>
                            <CardContent>
                                <Stack justifyContent="space-between" alignItems="center" direction="row">
                                    <Typography variant="h6">Recent Transactions</Typography>
                                    <Link className={classes.link} to="/transactions">
                                        <Button variant="text">See all</Button>
                                    </Link>
                                </Stack>
                                {transactions && transactions.length === 0 ? (
                                    <Box sx={{backgroundColor: purple[50]}} py={5}>
                                        <Typography sx={{color: purple[600]}} variant="body2" align="center">
                                            No transactions available
                                        </Typography>
                                    </Box>
                                ) : (
                                    <Stack
                                        direction="column"
                                        divider={<Divider variant="middle" light={true}/>}>
                                        {
                                            transactions && transactions.map((transaction, index) => {
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
                                    <Avatar
                                        variant="circular"
                                        sx={{width: 75, height: 75}}
                                        src="/assets/images/profile.jpg"
                                    />
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
                                <Card
                                    elevation={0}
                                    sx={{cursor: 'pointer'}}
                                    onClick={() => setInternationalTransferDialogOpen(true)}>
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
                            </Grid>
                            <Grid xs={6} item={true}>
                                <Card
                                    sx={{cursor: 'pointer'}}
                                    onClick={() => setLocalTransferDialogOpen(true)}
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
                            </Grid>

                            <Grid xs={6} item={true}>
                                <Card
                                    sx={{cursor: 'pointer'}}
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
                                    sx={{cursor: 'pointer'}}
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
                                            Receive Money
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>

                    </Grid>
                </Grid>

                {internationalTransferDialogOpen && (
                    <InternationalTransferDialog
                        handleClose={() => setInternationalTransferDialogOpen(false)}
                        open={internationalTransferDialogOpen}
                    />
                )}

                {localTransferDialogOpen && (
                    <LocalTransferDialog
                        handleClose={() => setLocalTransferDialogOpen(false)}
                        open={localTransferDialogOpen}
                    />
                )}

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
        </Layout>
    )
}

export default HomePage;
