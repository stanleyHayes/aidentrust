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

import {AUTH_ACTION_CREATORS} from "../../redux/auth/auth-action-creators";
import {selectAuth} from "../../redux/auth/auth-reducer";
import {REQUEST_ACTION_CREATORS} from "../../redux/requests/request-action-creators";

const BankAccountInfoForm = () => {

    const {bankAccountInfo} = useSelector(selectAuth);

    const [bankAccount, setBankAccount] = useState({...bankAccountInfo});
    const [error, setError] = useState({});

    const {number, currency = "", type = "", usage = "", balance} = bankAccount;

    const handleChange = event => {
        setBankAccount({...bankAccount, [event.target.name]: event.target.value});
    }

    const handleSubmit = event => {
        event.preventDefault();

        if (!number) {
            setError({error, number: 'Select image'});
            return;
        } else {
            setError({error, number: null});
        }

        if (!type) {
            setError({error, type: 'Field required'});
            return;
        } else {
            setError({error, type: null});
        }

        if (!usage) {
            setError({error, usage: 'Field required'});
            return;
        } else {
            setError({error, usage: null});
        }

        if (!balance) {
            setError({error, balance: 'Field required'});
            return;
        } else {
            setError({error, balance: null});
        }

        if (!currency) {
            setError({error, currency: 'Field required'});
            return;
        } else {
            setError({error, currency: null});
        }
        dispatch(REQUEST_ACTION_CREATORS.saveBankAccountInfo({number, currency, type, usage, balance}));
        dispatch(REQUEST_ACTION_CREATORS.nextPage());
    }

    const dispatch = useDispatch();

    return (<Card elevation={1}>
            <CardContent>
                <Typography gutterBottom={true} align="center" variant="h6">
                    Bank Account Information
                </Typography>
                <Stack my={3} spacing={2} direction="column">

                    <TextField
                        label="Account number"
                        fullWidth={true}
                        name="number"
                        required={true}
                        variant="outlined"
                        value={number}
                        error={Boolean(error.number)}
                        helperText={error.number}
                        type="number"
                        color="secondary"
                        placeholder="Enter account number"
                        size="medium"
                        onChange={handleChange}
                    />

                    <TextField
                        label="Balance"
                        fullWidth={true}
                        name="balance"
                        required={true}
                        variant="outlined"
                        value={balance}
                        error={Boolean(error.balance)}
                        helperText={error.balance}
                        type="text"
                        color="secondary"
                        placeholder="Enter balance"
                        size="medium"
                        onChange={handleChange}
                    />

                    <FormControl fullWidth>
                        <InputLabel htmlFor="type">Account Type</InputLabel>
                        <Select
                            labelId="type"
                            label="Account Type"
                            name="type"
                            id="type"
                            onChange={handleChange}
                            fullWidth={true}
                            value={type}>
                            <MenuItem value="">Type</MenuItem>
                            <MenuItem value="Savings">Savings</MenuItem>
                            <MenuItem value="Checkings">Checkings</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl fullWidth>
                        <InputLabel htmlFor="usage">Usage</InputLabel>
                        <Select
                            labelId="usage"
                            label="Usage"
                            name="usage"
                            id="usage"
                            onChange={handleChange}
                            fullWidth={true}
                            value={usage}>
                            <MenuItem value="">Select Account Usage</MenuItem>
                            <MenuItem value="Personal">Personal</MenuItem>
                            <MenuItem value="Business">Business</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl fullWidth>
                        <InputLabel htmlFor="usage">Currency</InputLabel>
                        <Select
                            labelId="currency"
                            label="Currency"
                            name="currency"
                            id="currency"
                            onChange={handleChange}
                            fullWidth={true}
                            value={currency}>
                            <MenuItem value="">Select Account Currency</MenuItem>
                            <MenuItem value="USD">USD</MenuItem>
                            <MenuItem value="GHS">GHS</MenuItem>
                            <MenuItem value="Euro">Euro</MenuItem>
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
                            onClick={() => dispatch(AUTH_ACTION_CREATORS.previousPage())}
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

export default BankAccountInfoForm;
