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
    LinearProgress, MenuItem,
    OutlinedInput, Select,
    Stack,
    TextField,
    Typography
} from "@mui/material";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import {LoadingButton} from "@mui/lab";
import {useState} from "react";
import {useSelector} from "react-redux";
import {selectTransaction} from "../../../redux/transactions/transaction-reducer";

const MakePaymentDialog = ({open, handleClose}) => {

    const [transfer, setTransfer] = useState({});
    const [visiblePassword, setVisiblePassword] = useState(false);
    const [error, setError] = useState({});

    const {
        amount, service, password
    } = transfer;

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
    }

    const handleChange = event => {
        setTransfer({...transfer, [event.target.name]: event.target.name});
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
                    color="secondary"
                    placeholder="Enter amount"
                    size="medium"
                    onChange={handleChange}
                />

                <Select
                    margin="dense"
                    name="service"
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

                <FormControl variant="outlined">
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <OutlinedInput
                        id="password"
                        label="Password"
                        fullWidth={true}
                        name="password"
                        required={true}
                        color="secondary"
                        placeholder="Enter password"
                        variant="outlined"
                        error={Boolean(error.password)}
                        type={visiblePassword ? 'text' : 'password'}
                        value={password}
                        onChange={handleChange}
                        endAdornment={<InputAdornment position="end">
                            <IconButton
                                sx={{color: 'secondary.main'}}
                                aria-label="toggle password visibility"
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
