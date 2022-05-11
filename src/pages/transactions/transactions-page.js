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
    Paper,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
    Tooltip,
    Typography
} from "@mui/material";
import {useEffect, useState} from "react";
import {Visibility} from "@mui/icons-material";
import {green, grey, purple, red} from "@mui/material/colors";
import {useDispatch, useSelector} from "react-redux";
import {selectTransaction} from "../../redux/transactions/transaction-reducer";
import {Alert, AlertTitle} from "@mui/lab";
import moment from "moment";
import MakePaymentDialog from "../../components/dialogs/new/make-payment-dialog";
import DepositDialog from "../../components/dialogs/new/receive-money-dialog";
import {Link} from "react-router-dom";
import {TRANSACTION_ACTION_CREATORS} from "../../redux/transactions/transaction-action-creators";
import {selectAuth} from "../../redux/auth/auth-reducer";
import {useNavigate} from "react-router";

const TransactionsPage = () => {

    const [query, setQuery] = useState("");
    const [paymentDialogOpen, setPaymentDialogOpen] = useState(false);
    const [depositDialogOpen, setDepositDialogOpen] = useState(false);

    const {transactions, transactionError, transactionLoading} = useSelector(selectTransaction);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {token} = useSelector(selectAuth);

    const renderStatus = status => {
        switch (status) {
            case 'Pending':
                return (<Button
                    disableElevation={true}
                    sx={{backgroundColor: grey[400], color: 'white', textTransform: 'capitalize'}}
                    size="small"
                    variant="contained">{status}</Button>)
            case 'Success':
                return (<Button
                    disableElevation={true}
                    sx={{backgroundColor: green[400], color: 'white', textTransform: 'capitalize'}}
                    size="small"
                    variant="contained">{status}</Button>);
            case 'Failed':
                return (<Button
                    disableElevation={true}
                    size="small"
                    sx={{backgroundColor: red[400], color: 'white', textTransform: 'capitalize'}}
                    variant="contained">{status}</Button>);
            default:
                return (<Button
                    disableElevation={true}
                    size="small"
                    sx={{backgroundColor: grey[400], color: 'white', textTransform: 'capitalize'}}
                    variant="contained">{status}</Button>);
        }
    }

    useEffect(() => {
        dispatch(TRANSACTION_ACTION_CREATORS.getTransactions(token));
    }, []);

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
                    <Grid item={true} xs={12} md={4}>
                        <Typography variant="h4">Transactions</Typography>
                    </Grid>
                    <Grid item={true} xs={12} md={6}>
                        <TextField
                            label="Search"
                            fullWidth={true}
                            name="search"
                            required={true}
                            variant="outlined"
                            value={query}
                            error={Boolean(query.email)}
                            helperText={query.email}
                            type="text"
                            placeholder="Search transaction"
                            size="small"
                            onChange={event => setQuery(event.target.value)}
                        />
                    </Grid>
                    <Grid item={true} xs={12} md={2}>
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
                            Search
                        </Button>
                    </Grid>
                </Grid>


                <Divider light={true} variant="fullWidth" sx={{my: 4}}/>
                <Grid container={true} spacing={2}>
                    <Grid xs={6} md={3} item={true}>
                        <Link style={{textDecoration: 'none'}} to="/transfer/international">
                            <Card
                                elevation={0}
                                sx={{cursor: 'pointer', height: '100%'}}>
                                <CardContent>
                                    <Stack mb={2} justifyContent="center" direction="row">
                                        <Avatar
                                            variant="rounded"
                                            src="/assets/images/international-transfer.png"
                                            sx={{color: purple[600]}}/>
                                    </Stack>
                                    <Typography
                                        align="center"
                                        variant="body2"
                                        sx={{
                                            fontSize: 14, color: grey[600]
                                        }}>
                                        International Transfer
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Link>
                    </Grid>
                    <Grid xs={6} md={3} item={true}>
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
                                            fontSize: 14, color: grey[600]
                                        }}>
                                        Local Transfer
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Link>
                    </Grid>

                    <Grid xs={6} md={3} item={true}>
                        <Card
                            sx={{cursor: 'pointer', height: '100%'}}
                            elevation={0}
                            onClick={() => setPaymentDialogOpen(true)}>
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
                                        fontSize: 14, color: grey[600]
                                    }}>
                                    Make Payment
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid xs={6} md={3} item={true}>
                        <Card
                            sx={{cursor: 'pointer', height: '100%'}}
                            elevation={0}
                            onClick={() => setDepositDialogOpen(true)}>
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
                                        fontSize: 14, color: grey[600]
                                    }}>
                                    Deposit Money
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                </Grid>

                <Divider light={true} variant="fullWidth" sx={{my: 4}}/>

                {transactions && transactions.length > 0 && <TableContainer component={Paper} elevation={0}>
                    <Table size="medium" aria-label="transactions table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">#</TableCell>
                                <TableCell align="center">ID</TableCell>
                                <TableCell align="center">Type</TableCell>
                                <TableCell align="center">Amount</TableCell>
                                <TableCell align="center">Status</TableCell>
                                <TableCell align="center">Date</TableCell>
                                <TableCell align="center">Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {transactions && transactions.map((transaction, index) => {
                                return (<TableRow
                                    hover={true}
                                    key={index}>
                                    <TableCell align="center">{index + 1}</TableCell>
                                    <TableCell align="center">{transaction._id}</TableCell>
                                    <TableCell align="center">{transaction.type}</TableCell>
                                    <TableCell align="center">${transaction.amount}</TableCell>
                                    <TableCell align="center">{renderStatus(transaction.status)}</TableCell>
                                    <TableCell align="center">
                                        {moment(transaction.updatedAt).fromNow()}
                                    </TableCell>
                                    <TableCell>
                                        <Grid
                                            container={true}
                                            justifyContent="flex-start"
                                            alignItems="center"
                                            spacing={1}>
                                            <Grid item={true}>
                                                <Tooltip title={`View transaction detail`}>
                                                    <Visibility
                                                        onClick={() => navigate(`/transactions/${transaction._id}`)}
                                                        sx={{
                                                            cursor: 'pointer',
                                                            backgroundColor: purple[100],
                                                            borderRadius: 0.4,
                                                            padding: 0.5,
                                                            fontSize: 28
                                                        }}
                                                        fontSize="small"
                                                        color="primary"
                                                    />
                                                </Tooltip>
                                            </Grid>
                                        </Grid>
                                    </TableCell>
                                </TableRow>)
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>}

                {transactions && transactions.length === 0 && (<Box my={4}>
                    <TableContainer component={Paper} elevation={0}>
                        <Table size="medium" sx={{minWidth: 650}} aria-label="transactions table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">#</TableCell>
                                    <TableCell align="center">ID</TableCell>
                                    <TableCell align="center">Type</TableCell>
                                    <TableCell align="center">Amount</TableCell>
                                    <TableCell align="center">Status</TableCell>
                                    <TableCell align="center">Date</TableCell>
                                    <TableCell align="center">Actions</TableCell>
                                </TableRow>
                            </TableHead>
                        </Table>
                    </TableContainer>
                    <Box sx={{backgroundColor: purple[50]}} py={5}>
                        <Typography sx={{color: purple[600]}} variant="body1" align="center">
                            No transactions available
                        </Typography>
                    </Box>
                </Box>)}

                {paymentDialogOpen && (
                    <MakePaymentDialog
                        handleClose={() => setPaymentDialogOpen(false)}
                        open={paymentDialogOpen}
                    />
                )}

                {depositDialogOpen && (
                    <DepositDialog
                        handleClose={() => setDepositDialogOpen(false)}
                        open={depositDialogOpen}
                    />
                )}
            </Container>
            </Box>
        </Layout>)
}

export default TransactionsPage;
