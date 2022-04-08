import Layout from "../../components/layout/layout";
import {
    Box,
    Button,
    Container, Divider,
    FormControl,
    Grid,
    InputLabel,
    LinearProgress,
    Menu,
    MenuItem, Paper,
    Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
    TextField,
    Typography
} from "@mui/material";
import {useState} from "react";
import Feint from "../../components/shared/feint";
import {Add, KeyboardArrowDown, Visibility} from "@mui/icons-material";
import {green, grey, purple, red} from "@mui/material/colors";
import {useSelector} from "react-redux";
import {selectTransaction} from "../../redux/transactions/transaction-reducer";
import {makeStyles} from "@mui/styles";
import {Alert, AlertTitle} from "@mui/lab";
import moment from "moment";

const TransactionsPage = () => {

    const [query, setQuery] = useState("");
    const [status, setStatus] = useState("");
    const [type, setType] = useState("");
    const [menuOpen, setMenuOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuClick = event => {
        setMenuOpen(true);
        setAnchorEl(event.currentTarget);
    }

    const handleMenuClose = () => {
        setAnchorEl(null);
        setMenuOpen(false);
    }

    const {transactions, transactionError, transactionLoading} = useSelector(selectTransaction);

    const useStyles = makeStyles(theme => {
        return {
            container: {
                marginTop: 16,
                marginBottom: 16
            }
        }
    });

    const classes = useStyles();

    const renderStatus = status => {
        switch (status) {
            case 'pending':
                return (
                    <Button
                        disableElevation={true}
                        sx={{backgroundColor: grey[400], color: 'white', textTransform: 'capitalize'}}
                        size="small"
                        variant="contained">{status}</Button>
                )
            case 'success':
                return (
                    <Button
                        disableElevation={true}
                        sx={{backgroundColor: green[400], color: 'white', textTransform: 'capitalize'}}
                        size="small"
                        variant="contained">{status}</Button>
                );
            case 'failed':
                return (
                    <Button
                        disableElevation={true}
                        size="small"
                        sx={{backgroundColor: red[400], color: 'white', textTransform: 'capitalize'}}
                        variant="contained">{status}</Button>
                );
            default:
                return (
                    <Button
                        disableElevation={true}
                        size="small"
                        sx={{backgroundColor: grey[400], color: 'white', textTransform: 'capitalize'}}
                        variant="contained">{status}</Button>
                );
        }
    }

    return (
        <Layout>
            {transactionLoading && <LinearProgress color="secondary" variant="query"/>}
            <Container className={classes.container}>
                {
                    transactionError &&
                    (
                        <Alert severity="error" variant="standard">
                            <AlertTitle>Error</AlertTitle>
                            <Typography variant="h6" align="center">
                                {transactionError}
                            </Typography>
                        </Alert>
                    )
                }
                <Grid
                    mb={2}
                    spacing={2}
                    container={true}
                    justifyContent="space-between"
                    alignItems="center">
                    <Grid item={true} xs={12} md={4}>
                        <Typography variant="h4">Transactions(69)</Typography>
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
                            color="primary"
                            size="large"
                            sx={{textTransform: 'capitalize', fontWeight: 'bold'}}>
                            Search
                        </Button>
                    </Grid>
                </Grid>

                <Grid
                    mb={2}
                    spacing={2}
                    container={true}
                    justifyContent="space-between"
                    alignItems="center">
                    <Grid item={true} xs={12} md={4}>
                        <Button
                            size="large"
                            sx={{
                                justifyContent: 'flex-start',
                                backgroundColor: 'primary.main',
                                color: 'white',
                                py: 1.5
                            }}
                            onClick={handleMenuClick}
                            startIcon={<KeyboardArrowDown/>}
                            fullWidth={true}
                            variant="outlined"
                            color="primary">
                            Make Transaction
                        </Button>

                        <Menu
                            sx={{width: '100%'}}
                            fullWidth={true}
                            anchorEl={anchorEl}
                            variant="selectedMenu"
                            elevation={2}
                            open={menuOpen}
                            onClose={handleMenuClose}>
                            <MenuItem sx={{width: '100%'}}>
                                <Button
                                    sx={{
                                        justifyContent: "flex-start",
                                        textTransform: 'capitalize',
                                        color: green[600]
                                    }}
                                    size="medium"
                                    variant="text"
                                    fullWidth={true}
                                    startIcon={
                                        <Feint
                                            color="green"
                                            padding={0.4}
                                            children={<Add sx={{color: green[600]}}/>}/>}>
                                    Make Deposit
                                </Button>
                            </MenuItem>
                            <MenuItem>
                                <Button
                                    sx={{
                                        justifyContent: "flex-start",
                                        textTransform: 'capitalize',
                                        color: purple[600]
                                    }}
                                    size="medium"
                                    variant="text"
                                    fullWidth={true}
                                    startIcon={
                                        <Feint
                                            color="purple"
                                            padding={0.4}
                                            children={<Add sx={{color: purple[600]}}/>}/>}>
                                    Transfer Money
                                </Button>
                            </MenuItem>
                            <MenuItem>
                                <Button
                                    sx={{
                                        justifyContent: "flex-start",
                                        textTransform: 'capitalize',
                                        color: red[600]
                                    }}
                                    size="medium"
                                    variant="text"
                                    fullWidth={true}
                                    startIcon={
                                        <Feint
                                            color="red"
                                            padding={0.4}
                                            children={<Add sx={{color: red[600]}}/>}/>}>
                                    Make Payment
                                </Button>
                            </MenuItem>
                            <MenuItem>
                                <Button
                                    sx={{
                                        justifyContent: "flex-start",
                                        textTransform: 'capitalize',
                                        color: green[600]
                                    }}
                                    size="medium"
                                    variant="text"
                                    fullWidth={true}
                                    startIcon={
                                        <Feint
                                            color="green"
                                            padding={0.4}
                                            children={<Add sx={{color: green[600]}}/>}/>}>
                                    Receive Money
                                </Button>
                            </MenuItem>
                        </Menu>
                    </Grid>

                    <Grid item={true} xs={12} md={4}>
                        <FormControl fullWidth={true}>
                            <InputLabel variant="outlined" htmlFor="status">Status</InputLabel>
                            <Select
                                size="medium"
                                id="status"
                                fullWidth={true}
                                onChange={event => setStatus(event.target.value)}
                                value={status}
                                variant="outlined">
                                <MenuItem value="success">Success</MenuItem>
                                <MenuItem value="fail">Fail</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item={true} xs={12} md={4}>
                        <FormControl fullWidth={true}>
                            <InputLabel variant="outlined" htmlFor="type">Type</InputLabel>
                            <Select
                                size="medium"
                                id="type"
                                fullWidth={true}
                                onChange={event => setType(event.target.value)}
                                value={type}
                                variant="outlined">
                                <MenuItem value="success">Success</MenuItem>
                                <MenuItem value="fail">Fail</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>

                <Divider light={true} variant="fullWidth" sx={{my: 4}}/>

                {
                    transactions && transactions.length > 0 &&
                    <TableContainer component={Paper} elevation={0}>
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
                                {
                                    transactions && transactions.map((transaction, index) => {
                                        return (
                                            <TableRow
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
                                            </TableRow>
                                        )
                                    })
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                }

                {
                    transactions && transactions.length === 0 &&
                    (
                        <Box my={4}>
                            <TableContainer component={Paper} elevation={0}>
                                <Table size="small" sx={{minWidth: 650}} aria-label="transactions table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align="center">#</TableCell>
                                            <TableCell align="center">Sender Account</TableCell>
                                            <TableCell align="center">Recipient Account</TableCell>
                                            <TableCell align="center">Type</TableCell>
                                            <TableCell align="center">Amount</TableCell>
                                            <TableCell align="center">Status</TableCell>
                                            <TableCell align="center">Date</TableCell>
                                            <TableCell align="center">Actions</TableCell>
                                        </TableRow>
                                    </TableHead>
                                </Table>
                            </TableContainer>
                            <Typography variant="h6" align="center">
                                No Transactions available
                            </Typography>
                        </Box>
                    )
                }
            </Container>
        </Layout>
    )
}

export default TransactionsPage;
