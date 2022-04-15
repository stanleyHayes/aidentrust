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
    Paper,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
    Typography
} from "@mui/material";
import {useState} from "react";
import Feint from "../../components/shared/feint";
import { Call,  Visibility} from "@mui/icons-material";
import {green, grey, purple, red} from "@mui/material/colors";
import {useSelector} from "react-redux";
import {selectTransaction} from "../../redux/transactions/transaction-reducer";
import {makeStyles} from "@mui/styles";
import {Alert, AlertTitle} from "@mui/lab";
import moment from "moment";

const TransactionsPage = () => {

    const [query, setQuery] = useState("");

    const {transactions, transactionError, transactionLoading} = useSelector(selectTransaction);

    const useStyles = makeStyles(theme => {
        return {
            container: {
                marginTop: 16, marginBottom: 16
            }
        }
    });

    const classes = useStyles();

    const renderStatus = status => {
        switch (status) {
            case 'pending':
                return (<Button
                        disableElevation={true}
                        sx={{backgroundColor: grey[400], color: 'white', textTransform: 'capitalize'}}
                        size="small"
                        variant="contained">{status}</Button>)
            case 'success':
                return (<Button
                        disableElevation={true}
                        sx={{backgroundColor: green[400], color: 'white', textTransform: 'capitalize'}}
                        size="small"
                        variant="contained">{status}</Button>);
            case 'failed':
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

    return (<Layout>
            {transactionLoading && <LinearProgress color="secondary" variant="query"/>}
            <Container className={classes.container}>
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
                        <Typography variant="h4">Transactions(0)</Typography>
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
                        <Card elevation={0}>
                            <CardContent>
                                <Stack justifyContent="center" direction="row">
                                    <Feint
                                        mb={2}
                                        padding={0.4}
                                        children={<Call sx={{color: purple[600]}}/>}
                                        color="purple"/>
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
                    <Grid xs={6} md={3} item={true}>
                        <Card elevation={0}>
                            <CardContent>
                                <Stack justifyContent="center" direction="row">
                                    <Feint
                                        mb={2}
                                        padding={0.4}
                                        children={<Call sx={{color: purple[600]}}/>}
                                        color="purple"/>
                                </Stack>
                                <Typography
                                    align="center"
                                    variant="body2"
                                    sx={{
                                        fontSize: 14, color: grey[600]
                                    }}>
                                    Transfer Money
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid xs={6} md={3} item={true}>
                        <Card elevation={0}>
                            <CardContent>

                                <Stack justifyContent="center" direction="row">
                                    <Feint
                                        mb={2}
                                        padding={0.4}
                                        children={<Call sx={{color: purple[600]}}/>}
                                        color="purple"/>
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
                        <Card elevation={0}>
                            <CardContent>
                                <Stack justifyContent="center" direction="row">
                                    <Feint
                                        mb={2}
                                        padding={0.4}
                                        children={<Call sx={{color: purple[600]}}/>}
                                        color="purple"/>
                                </Stack>
                                <Typography
                                    align="center"
                                    variant="body2"
                                    sx={{
                                        fontSize: 14, color: grey[600]
                                    }}>
                                    Receive Money
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                </Grid>
                <Divider light={true} variant="fullWidth" sx={{my: 4}}/>

                {transactions && transactions.length > 0 && <TableContainer component={Paper} elevation={0}>
                    <Table size="small" aria-label="transactions table">
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
                                        <TableCell align="center">{transaction.variant}</TableCell>
                                        <TableCell align="center">${transaction.amount}</TableCell>
                                        <TableCell align="center">{renderStatus(transaction.status)}</TableCell>
                                        <TableCell align="center">
                                            {moment(transaction.updatedAt).fromNow()}
                                        </TableCell>
                                        <TableCell>
                                            <Grid
                                                container={true}
                                                justifyContent="center"
                                                alignItems="center"
                                                spacing={1}>
                                                <Grid item={true}>
                                                    <Visibility
                                                        fontSize="small"
                                                        color="primary"
                                                    />
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
                            <Typography sx={{color: purple[600]}} variant="body2" align="center">
                                No transactions available
                            </Typography>
                        </Box>
                    </Box>)}
            </Container>
        </Layout>)
}

export default TransactionsPage;
