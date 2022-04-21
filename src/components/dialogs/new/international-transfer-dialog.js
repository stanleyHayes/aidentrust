import {
    Alert, AlertTitle,
    Button, CircularProgress,
    Dialog,
    DialogContent,
    FormControl, IconButton, InputAdornment,
    InputLabel, LinearProgress,
    OutlinedInput,
    Stack,
    TextField,
    Typography
} from "@mui/material";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import {LoadingButton} from "@mui/lab";
import {useState} from "react";
import {useSelector} from "react-redux";
import {selectTransaction} from "../../../redux/transactions/transaction-reducer";

const InternationalTransferDialog = ({open, handleClose}) => {

    const [transfer, setTransfer] = useState({});
    const [visiblePassword, setVisiblePassword] = useState(false);
    const [error, setError] = useState({});

    const {
        number,
        amount,
        routingNumber,
        swiftCode,
        addressLine1,
        addressLine2,
        city,
        country,
        stateOrRegionOrProvince,
        password
    } = transfer;

    const handleClick = () => {
        if(!number){
            setError({error, number: 'Field required'});
            return;
        }else{
            setError({error, number: null});
        }
    }

    const handleChange = event => {
        setTransfer({...transfer, [event.target.name]: event.target.name});
    }

    const {transactionLoading, transactionError} = useSelector(selectTransaction);

    return (
        <Dialog open={open} onClose={handleClose}>
            {transactionLoading && <LinearProgress color="primary" variant="query" />}
            <DialogContent>
                {transactionError && (
                    <Alert severity="error"><AlertTitle>{transactionError}</AlertTitle></Alert>
                )}
                <Typography mb={2} variant="h4" align="center">
                    International Transfer
                </Typography>

                <Stack my={3} spacing={2} direction="column">
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
                        color="secondary"
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
                        color="secondary"
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
                        color="secondary"
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
                        color="secondary"
                        placeholder="Enter swift code"
                        size="medium"
                        onChange={handleChange}
                    />

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
                        color="secondary"
                        placeholder="Enter country"
                        size="medium"
                        onChange={handleChange}
                    />

                    <TextField
                        label="State/Region/Province"
                        fullWidth={true}
                        name="stateOrRegionOrProvince"
                        required={true}
                        variant="outlined"
                        value={stateOrRegionOrProvince}
                        error={Boolean(error.stateOrRegionOrProvince)}
                        helperText={error.stateOrRegionOrProvince}
                        type="text"
                        color="secondary"
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
                        color="secondary"
                        placeholder="Enter city"
                        size="medium"
                        onChange={handleChange}
                    />

                    <TextField
                        label="Address Line 1"
                        fullWidth={true}
                        name="text"
                        required={true}
                        variant="outlined"
                        value={addressLine1}
                        error={Boolean(error.addressLine1)}
                        helperText={error.addressLine1}
                        type="number"
                        color="secondary"
                        placeholder="Address line 1"
                        size="medium"
                        multiline={true}
                        minRows={2}
                        onChange={handleChange}
                    />

                    <TextField
                        label="Address Line 2"
                        fullWidth={true}
                        name="addressLine2"
                        required={true}
                        variant="outlined"
                        minRows={2}
                        value={addressLine2}
                        error={Boolean(error.addressLine2)}
                        helperText={error.addressLine2}
                        type="text"
                        color="secondary"
                        placeholder="Enter address line 2"
                        size="medium"
                        multiline={true}
                        onChange={handleChange}
                    />

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
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        sx={{color: 'secondary.main'}}
                                        aria-label="toggle password visibility"
                                        onClick={() => setVisiblePassword(!visiblePassword)}
                                        onMouseDown={() => setVisiblePassword(!visiblePassword)}
                                        edge="end"
                                    >
                                        {visiblePassword ? <VisibilityOff/> : <Visibility/>}
                                    </IconButton>
                                </InputAdornment>
                            }
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
                    Transfer
                </LoadingButton>
            </DialogContent>
        </Dialog>
    )
}

export default InternationalTransferDialog;