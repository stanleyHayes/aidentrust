import {
    Button,
    Card,
    CardContent,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import {ChevronLeft, ChevronRight} from "@mui/icons-material";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {REQUEST_ACTION_CREATORS} from "../../redux/requests/request-action-creators";
import {selectRequest} from "../../redux/requests/request-reducer";

const PaymentInfoForm = () => {

    const {paymentInfo} = useSelector(selectRequest);

    const [payment, setPayment] = useState({...paymentInfo});
    const [error, setError] = useState({});

    const {amount, provider = "", transactionID, phone} = payment;

    const handleChange = event => {
        setPayment({...payment, [event.target.name]: event.target.value});
    }

    const handleSubmit = event => {
        event.preventDefault();

        if (!amount) {
            setError({error, amount: 'Select image'});
            return;
        } else {
            setError({error, amount: null});
        }

        if (Number(amount) <= 0) {
            setError({error, name: 'Invalid amount'});
            return;
        } else {
            setError({error, name: null});
        }

        if (!provider) {
            setError({error, provider: 'Field required'});
            return;
        } else {
            setError({error, provider: null});
        }

        if (!transactionID) {
            setError({error, transactionID: 'Field required'});
            return;
        } else {
            setError({error, transactionID: null});
        }

        if (!phone) {
            setError({error, phone: 'Field required'});
            return;
        } else {
            setError({error, phone: null});
        }

        dispatch(REQUEST_ACTION_CREATORS.savePayment({amount, provider, transactionID}));
        dispatch(REQUEST_ACTION_CREATORS.nextPage());
    }

    const dispatch = useDispatch();

    return (<Card elevation={1}>
            <CardContent>
                <Typography gutterBottom={true} align="center" variant="h6">
                    Payment Information
                </Typography>
                <Stack my={3} spacing={2} direction="column">


                    <TextField
                        label="Transaction ID"
                        fullWidth={true}
                        name="transactionID"
                        required={true}
                        variant="outlined"
                        value={transactionID}
                        error={Boolean(error.transactionID)}
                        helperText={error.transactionID || "Enter mobile money transaction ID"}
                        type="text"
                        color="secondary"
                        placeholder="Enter transaction name"
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
                        helperText={error.amount || "Enter amount paid"}
                        type="number"
                        color="secondary"
                        placeholder="Enter amount"
                        size="medium"
                        onChange={handleChange}
                    />

                    <TextField
                        label="Phone"
                        fullWidth={true}
                        name="phone"
                        required={true}
                        variant="outlined"
                        value={phone}
                        error={Boolean(error.phone)}
                        helperText={error.phone || "Enter payment phone number"}
                        type="tel"
                        color="secondary"
                        placeholder="Enter payment phone"
                        size="medium"
                        onChange={handleChange}
                    />


                    <FormControl fullWidth>
                        <InputLabel htmlFor="provider">Network Provider</InputLabel>
                        <Select
                            labelId="provider"
                            label="Provider"
                            name="provider"
                            id="provider"
                            onChange={handleChange}
                            fullWidth={true}
                            value={provider}>
                            <MenuItem value="">Select Network Provider</MenuItem>
                            <MenuItem value="MTN">MTN</MenuItem>
                            <MenuItem value="AirtelTigo">AirtelTigo</MenuItem>
                            <MenuItem value="Vodafone">Vodafone</MenuItem>
                            <MenuItem value="Other">Other</MenuItem>
                        </Select>
                    </FormControl>
                </Stack>

                <Grid container={true} spacing={1} alignItems="center">
                    <Grid item={true} xs={12} md={6}>
                        <Button
                            sx={{
                                textTransform: 'capitalize',
                                color: 'primary.main',
                                fontWeight: 'bold',
                                backgroundColor: 'secondary.main',
                                '&:hover': {
                                    borderColor: 'secondary.light', backgroundColor: 'secondary.dark', borderWidth: 2,
                                }
                            }}
                            size="large"
                            startIcon={<ChevronLeft color="primary"/>}
                            fullWidth={true}
                            disableElevation={true}
                            onClick={() => dispatch(REQUEST_ACTION_CREATORS.previousPage())}
                            variant="contained">
                            Previous
                        </Button>
                    </Grid>
                    <Grid item={true} xs={12} md={6}>
                        <Button
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
                            }}
                            fullWidth={true}
                            size="large"
                            onClick={handleSubmit}
                            endIcon={<ChevronRight color="secondary"/>}
                            variant="outlined">Next</Button>
                    </Grid>
                </Grid>

            </CardContent>
        </Card>)
}

export default PaymentInfoForm;
