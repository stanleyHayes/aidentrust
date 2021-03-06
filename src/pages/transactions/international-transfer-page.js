import {
    Alert,
    AlertTitle,
    Box,
    Button,
    Card,
    CardContent,
    Container,
    Divider,
    FormControl,
    Grid,
    IconButton,
    InputAdornment,
    InputLabel,
    LinearProgress,
    OutlinedInput,
    Stack,
    TextField,
    Typography
} from "@mui/material";
import {Paid, Visibility, VisibilityOff} from "@mui/icons-material";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import Layout from "../../components/layout/layout";
import {purple} from "@mui/material/colors";
import ConfirmDialog from "../../components/dialogs/confirm/confirm-dialog";
import {TRANSACTION_ACTION_CREATORS} from "../../redux/transactions/transaction-action-creators";
import {selectAuth} from "../../redux/auth/auth-reducer";
import {selectTransaction} from "../../redux/transactions/transaction-reducer";

const InternationalTransferPage = () => {

    const [transaction, setTransfer] = useState({type: 'international'});
    const [visiblePassword, setVisiblePassword] = useState(false);
    const [error, setError] = useState({});

    const {token} = useSelector(selectAuth);

    const {
        number,
        amount,
        routingNumber,
        swiftCode,
        addressLine1,
        addressLine2, city, country, state, name, pin
    } = transaction;

    const handleChange = event => {
        setTransfer({...transaction, [event.target.name]: event.target.value});
    }

    const dispatch = useDispatch();


    const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);

    const handleTransferConfirmation = () => {
        if (!number) {
            setError({error, number: 'Field required'});
            return;
        } else {
            setError({error, number: null});
        }

        if (!name) {
            setError({error, name: 'Field required'});
            return;
        } else {
            setError({error, name: null});
        }

        if (!routingNumber) {
            setError({error, routingNumber: 'Field required'});
            return;
        } else {
            setError({error, routingNumber: null});
        }

        if (!swiftCode) {
            setError({error, swiftCode: 'Field required'});
            return;
        } else {
            setError({error, swiftCode: null});
        }

        if (!country) {
            setError({error, country: 'Field required'});
            return;
        } else {
            setError({error, country: null});
        }

        if (!state) {
            setError({error, state: 'Field required'});
            return;
        } else {
            setError({error, state: null});
        }

        if (!city) {
            setError({error, city: 'Field required'});
            return;
        } else {
            setError({error, city: null});
        }

        if (!addressLine1) {
            setError({error, addressLine1: 'Field required'});
            return;
        } else {
            setError({error, addressLine1: null});
        }

        if (!pin) {
            setError({error, pin: 'Field required'});
            return;
        } else {
            setError({error, pin: null});
        }

        dispatch(TRANSACTION_ACTION_CREATORS.createTransaction(transaction, token, () => setConfirmDialogOpen(false)));
        setTransfer({
            ...transaction,
            number: "",
            amount: "",
            routingNumber: "",
            swiftCode: "",
            addressLine1: "",
            addressLine2: "", city: "", country: "", state: "", name: "", pin: ""
        });
    }

    const {transactionLoading, transactionError, transactionMessage} = useSelector(selectTransaction);

    return (
        <Layout>
            <Box sx={{py: 8.5}}>
                {transactionLoading && <LinearProgress color="primary" variant="query"/>}
                <Container sx={{my: {md: 2}}}>
                    {transactionError && (
                        <Alert severity="error"><AlertTitle>{transactionError}</AlertTitle></Alert>)}

                    {transactionMessage && (
                        <Alert severity="success"><AlertTitle>{transactionMessage}</AlertTitle></Alert>)}

                    <Grid
                        spacing={2}
                        alignItems="center"
                        justifyContent="space-between"
                        container={true}>
                        <Grid item={true} xs={12} md="auto">
                            <Typography variant="h4">International Transfer</Typography>
                        </Grid>
                        <Grid item={true} xs={12} md="auto">
                            <Button
                                onClick={() => setConfirmDialogOpen(true)}
                                sx={{
                                    textTransform: 'capitalize',
                                    color: purple[600],
                                    backgroundColor: 'white',
                                    borderWidth: 2,
                                    '&:hover': {
                                        borderWidth: 2,
                                    }
                                }}
                                startIcon={<Paid fontSize="small" sx={{color: purple[600]}}/>}
                                variant="outlined"
                                fullWidth={true}
                                disableElevation={true}
                                size="large">
                                Mayke Payment
                            </Button>
                        </Grid>
                    </Grid>

                    <Divider light={true} sx={{my: 4}}/>
                    <Grid container={true} spacing={2}>
                        <Grid item={true} xs={12} md={6}>
                            <Card elevation={0}>
                                <CardContent>
                                    <Stack spacing={2} direction="column">
                                        <Typography variant="h6">
                                            Transfer Information
                                        </Typography>
                                        <Divider light={true} sx={{my: 4}}/>
                                        <TextField
                                            label="Name"
                                            fullWidth={true}
                                            name="name"
                                            required={true}
                                            variant="outlined"
                                            value={name}
                                            error={Boolean(error.name)}
                                            helperText={error.name}
                                            type="text"
                                            color="primary"
                                            placeholder="Enter name"
                                            size="medium"
                                            onChange={handleChange}
                                        />

                                        <TextField
                                            label="Account Number"
                                            fullWidth={true}
                                            name="number"
                                            required={true}
                                            variant="outlined"
                                            value={number}
                                            error={Boolean(error.number)}
                                            helperText={error.number}
                                            type="text"
                                            color="primary"
                                            placeholder="Enter number"
                                            size="medium"
                                            onChange={handleChange}
                                        />

                                        <TextField
                                            label="Amount"
                                            fullWidth={true}
                                            name="amount"
                                            required={true}
                                            variant="outlined"
                                            value={amount}
                                            error={Boolean(error.amount)}
                                            helperText={error.amount}
                                            type="number"
                                            color="primary"
                                            placeholder="Enter amount"
                                            size="medium"
                                            onChange={handleChange}
                                        />

                                        <TextField
                                            label="Routing Number"
                                            fullWidth={true}
                                            name="routingNumber"
                                            required={true}
                                            variant="outlined"
                                            value={routingNumber}
                                            error={Boolean(error.routingNumber)}
                                            helperText={error.routingNumber}
                                            type="text"
                                            color="primary"
                                            placeholder="Enter routing number"
                                            size="medium"
                                            onChange={handleChange}
                                        />

                                        <TextField
                                            label="Swift Code"
                                            fullWidth={true}
                                            name="swiftCode"
                                            required={true}
                                            variant="outlined"
                                            value={swiftCode}
                                            error={Boolean(error.swiftCode)}
                                            helperText={error.swiftCode}
                                            type="text"
                                            color="primary"
                                            placeholder="Enter swift code"
                                            size="medium"
                                            onChange={handleChange}
                                        />

                                        <FormControl variant="outlined">
                                            <InputLabel htmlFor="pin">Pin</InputLabel>
                                            <OutlinedInput
                                                id="pin"
                                                label="Pin"
                                                fullWidth={true}
                                                name="pin"
                                                required={true}
                                                color="primary"
                                                placeholder="Enter pin"
                                                variant="outlined"
                                                error={Boolean(error.pin)}
                                                type={visiblePassword ? 'text' : 'password'}
                                                value={pin}
                                                onChange={handleChange}
                                                endAdornment={<InputAdornment position="end">
                                                    <IconButton
                                                        sx={{color: 'primary.main'}}
                                                        aria-label="toggle pin visibility"
                                                        onClick={() => setVisiblePassword(!visiblePassword)}
                                                        onMouseDown={() => setVisiblePassword(!visiblePassword)}
                                                        edge="end"
                                                    >
                                                        {visiblePassword ? <VisibilityOff/> : <Visibility/>}
                                                    </IconButton>
                                                </InputAdornment>}
                                            />
                                        </FormControl>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item={true} xs={12} md={6}>
                            <Card elevation={0}>
                                <CardContent>
                                    <Stack spacing={2} direction="column">
                                        <Typography variant="h6">
                                            Address Information
                                        </Typography>
                                        <Divider light={true} sx={{my: 4}}/>

                                        <TextField
                                            label="Country"
                                            fullWidth={true}
                                            name="country"
                                            required={true}
                                            variant="outlined"
                                            value={country}
                                            error={Boolean(error.country)}
                                            helperText={error.country}
                                            type="text"
                                            color="primary"
                                            placeholder="Enter country"
                                            size="medium"
                                            onChange={handleChange}
                                        />

                                        <TextField
                                            label="State/Region/Province"
                                            fullWidth={true}
                                            name="state"
                                            required={true}
                                            variant="outlined"
                                            value={state}
                                            error={Boolean(error.state)}
                                            helperText={error.state}
                                            type="text"
                                            color="primary"
                                            placeholder="Enter swift code"
                                            size="medium"
                                            onChange={handleChange}
                                        />

                                        <TextField
                                            label="City"
                                            fullWidth={true}
                                            name="city"
                                            required={true}
                                            variant="outlined"
                                            value={city}
                                            error={Boolean(error.city)}
                                            helperText={error.city}
                                            type="text"
                                            color="primary"
                                            placeholder="Enter city"
                                            size="medium"
                                            onChange={handleChange}
                                        />

                                        <TextField
                                            label="Address Line 1"
                                            fullWidth={true}
                                            name="addressLine1"
                                            required={true}
                                            variant="outlined"
                                            value={addressLine1}
                                            error={Boolean(error.addressLine1)}
                                            helperText={error.addressLine1}
                                            type="text"
                                            color="primary"
                                            placeholder="Address line 1"
                                            size="medium"
                                            multiline={true}
                                            minRows={2.5}
                                            onChange={handleChange}
                                        />

                                        <TextField
                                            label="Address Line 2"
                                            fullWidth={true}
                                            name="addressLine2"
                                            required={true}
                                            variant="outlined"
                                            minRows={2.6}
                                            value={addressLine2}
                                            error={Boolean(error.addressLine2)}
                                            helperText={error.addressLine2}
                                            type="text"
                                            color="primary"
                                            placeholder="Enter address line 2"
                                            size="medium"
                                            multiline={true}
                                            onChange={handleChange}
                                        />
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
                {confirmDialogOpen && (
                    <ConfirmDialog
                        message="Are you sure you want to proceed with the payment?"
                        handleClose={() => setConfirmDialogOpen(false)}
                        open={confirmDialogOpen}
                        handleProceed={handleTransferConfirmation}
                    />
                )}
            </Box>
        </Layout>)
}

export default InternationalTransferPage;
