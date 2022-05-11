import {
    Alert,
    AlertTitle,
    CircularProgress,
    Dialog,
    DialogContent,
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
    LinearProgress,
    MenuItem,
    OutlinedInput,
    Select,
    Stack,
    TextField,
    Typography
} from "@mui/material";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import {LoadingButton} from "@mui/lab";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectTransaction} from "../../../redux/transactions/transaction-reducer";
import {TRANSACTION_ACTION_CREATORS} from "../../../redux/transactions/transaction-action-creators";
import {selectAuth} from "../../../redux/auth/auth-reducer";

const MakePaymentDialog = ({open, handleClose}) => {

    const [transfer, setTransfer] = useState({type: 'payment'});
    const [visiblePassword, setVisiblePassword] = useState(false);
    const [error, setError] = useState({});

    const {token} = useSelector(selectAuth);

    const {amount, service, pin} = transfer;
    const dispatch = useDispatch();

    const handleClick = () => {
        if (!amount) {
            setError({error, amount: 'Field required'});
            return;
        } else {
            setError({error, amount: null});
        }

        if (!service) {
            setError({error, service: 'Field required'});
            return;
        } else {
            setError({error, service: null});
        }
        dispatch(TRANSACTION_ACTION_CREATORS.createTransaction(transfer, token, handleClose));
    }

    const handleChange = event => {
        setTransfer({...transfer, [event.target.name]: event.target.value});
    }

    const {transactionLoading, transactionError} = useSelector(selectTransaction);

    return (<Dialog open={open} onClose={handleClose}>
        {transactionLoading && <LinearProgress color="primary" variant="query"/>}
        <DialogContent>
            {transactionError && (<Alert severity="error"><AlertTitle>{transactionError}</AlertTitle></Alert>)}
            <Typography mb={2} variant="h4" align="center">
                Payment
            </Typography>

            <Stack my={3} spacing={2} direction="column">
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

                <FormControl fullWidth={true} variant="outlined">
                    <InputLabel htmlFor="service">Service</InputLabel>
                    <Select
                        margin="dense"
                        id="service"
                        name="service"
                        label="Service"
                        onChange={handleChange}
                        variant="outlined"
                        size="medium"
                        fullWidth={true}
                        color="primary">
                        <MenuItem value="Uber">Uber</MenuItem>
                        <MenuItem value="McDonald">McDonald</MenuItem>
                        <MenuItem value="Starbucks">Starbucks</MenuItem>
                        <MenuItem value="KFC">KFC</MenuItem>
                        <MenuItem value="Burger King">Burger King</MenuItem>
                        <MenuItem value="Other">Other</MenuItem>
                    </Select>
                </FormControl>

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
                                sx={{color: 'secondary.main'}}
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

            <LoadingButton
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
                    py: 1.5
                }}
                size="large"
                startIcon={transactionLoading && <CircularProgress color="secondary"/>}
                loadingPosition="start"
                loading={transactionLoading}
                loadingIndicator={<CircularProgress color="secondary"/>}
                onSubmit={handleClick}
                onClick={handleClick}
                fullWidth={true}
                disableElevation={true}
                disabled={transactionLoading}
                variant="outlined">
                Pay
            </LoadingButton>
        </DialogContent>
    </Dialog>)
}

export default MakePaymentDialog;
