import Layout from "../../components/layout/layout";
import {
    Box,
    Button,
    Container,
    Divider,
    Grid,
    LinearProgress,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
    Typography,
    Alert, AlertTitle, Tooltip,
} from "@mui/material";
import {useState} from "react";
import {Download, Visibility} from "@mui/icons-material";
import {green, grey, purple, red} from "@mui/material/colors";
import {useSelector} from "react-redux";
import {selectTransaction} from "../../redux/transactions/transaction-reducer";
import {makeStyles} from "@mui/styles";
import { DatePicker} from "@mui/lab";
import moment from "moment";
import {useNavigate} from "react-router";

const StatementsPage = () => {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const {transactions, transactionError, transactionLoading} = useSelector(selectTransaction);

    const useStyles = makeStyles(theme => {
        return {
            container: {
                marginTop: 16, marginBottom: 16
            }
        }
    });

    const classes = useStyles();
    const navigate = useNavigate();

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
                    fullWidth={true}
                    disableElevation={true}
                    sx={{backgroundColor: green[600], color: 'white', textTransform: 'capitalize'}}
                    size="small"
                    variant="contained">{status}</Button>);
            case 'Failed':
                return (<Button
                    fullWidth={true}
                    disableElevation={true}
                    size="small"
                    sx={{backgroundColor: red[600], color: 'white', textTransform: 'capitalize'}}
                    variant="contained">{status}</Button>);
            default:
                return (<Button
                    fullWidth={true}
                    disableElevation={true}
                    size="small"
                    sx={{backgroundColor: grey[600], color: 'white', textTransform: 'capitalize'}}
                    variant="contained">{status}</Button>);
        }
    }

    return (<Layout>
        {transactionLoading && <LinearProgress color="secondary" variant="query"/>}
        <Container className={classes.container}>
            {transactionError && (<Alert severity="error" variant="standard">
                <AlertTitle>Error</AlertTitle>
                <Typography variant="h6">
                    {transactionError}
                </Typography>
            </Alert>)}
            <Grid
                mb={2}
                spacing={2}
                container={true}
                justifyContent="space-between"
                alignItems="center">
                <Grid item={true} xs={12} md={3}>
                    <Typography variant="h5">Bank Statement</Typography>
                </Grid>
                <Grid item={true} xs={12} md={3}>
                    <Box>
                        <DatePicker
                            rawValue={startDate}
                            label="Start Date"
                            value={startDate}
                            onChange={(date) => {
                                setStartDate(date)
                            }}
                            renderInput={
                                (params) =>
                                    <TextField
                                        size="small"
                                        variant="outlined"
                                        fullWidth={true}
                                        placeholder="Date of birth"
                                        margin="none"
                                        label="Start Date" {...params} />}
                            date={startDate}
                        />
                    </Box>
                </Grid>
                <Grid item={true} xs={12} md={3}>
                    <Box>
                        <DatePicker
                            rawValue={endDate}
                            label="End Date"
                            value={endDate}
                            onChange={(date) => {
                                setEndDate(date)
                            }}
                            renderInput={
                                (params) =>
                                    <TextField
                                        size="small"
                                        variant="outlined"
                                        fullWidth={true}
                                        placeholder="Date of birth"
                                        margin="none"
                                        label="Start Date" {...params} />}
                            date={endDate}
                        />
                    </Box>
                </Grid>
                <Grid item={true} xs={12} md={3}>
                    <Button
                        size="medium"
                        variant="contained"
                        disableElevation={true}
                        fullWidth={true}
                        endIcon={<Download/>}>
                        Download
                    </Button>
                </Grid>
            </Grid>

            <Divider light={true} variant="fullWidth" sx={{my: 4}}/>

            {transactions && transactions.length > 0 &&
                <TableContainer component={Paper} elevation={0}>
                    <Table size="small" aria-label="transactions table">
                        <TableHead>
                            <TableRow>
                                <TableCell>#</TableCell>
                                <TableCell>ID</TableCell>
                                <TableCell>Type</TableCell>
                                <TableCell>Amount</TableCell>
                                <TableCell>Status</TableCell>
                                <TableCell>Date</TableCell>
                                <TableCell>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {transactions && transactions.map((transaction, index) => {
                                return (<TableRow
                                    hover={true}
                                    key={index}>
                                    <TableCell>{index + 1}</TableCell>
                                    <TableCell>{transaction._id}</TableCell>
                                    <TableCell>{transaction.type}</TableCell>
                                    <TableCell>${transaction.amount}</TableCell>
                                    <TableCell>{renderStatus(transaction.status)}</TableCell>
                                    <TableCell>
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
                                <TableCell>#</TableCell>
                                <TableCell>ID</TableCell>
                                <TableCell>Type</TableCell>
                                <TableCell>Amount</TableCell>
                                <TableCell>Status</TableCell>
                                <TableCell>Date</TableCell>
                                <TableCell>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                    </Table>
                </TableContainer>
                <Box sx={{backgroundColor: purple[50]}} py={5}>
                    <Typography sx={{color: purple[600]}} variant="body1">
                        No transactions available
                    </Typography>
                </Box>
            </Box>)}
        </Container>
    </Layout>)
}

export default StatementsPage;
