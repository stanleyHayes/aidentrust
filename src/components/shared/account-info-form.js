import {
    Alert,
    AlertTitle,
    Button,
    Card,
    CardContent,
    FormControl,
    Grid,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import {ChevronLeft, ChevronRight, Visibility, VisibilityOff} from "@mui/icons-material";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import validator from "validator";
import {selectRequest} from "../../redux/requests/request-reducer";
import {REQUEST_ACTION_CREATORS} from "../../redux/requests/request-action-creators";

const AccountInfoForm = ({code}) => {

    const {accountInfo} = useSelector(selectRequest);

    const [user, setUser] = useState({...accountInfo, code});
    const [error, setError] = useState({});

    const [visiblePassword, setVisiblePassword] = useState(false);
    const [visibleConfirmPassword, setVisibleConfirmPassword] = useState(false);
    const {pin, password, confirmPassword} = user;

    const handleChange = event => {
        setUser({...user, [event.target.name]: event.target.value});
    }

    const handleSubmit = event => {
        event.preventDefault();

        if (!pin) {
            setError({error, pin: 'Field required'});
            return;
        } else {
            setError({error, pin: null});
        }

        if (!code) {
            setError({error, code: 'Field required'});
            return;
        } else {
            setError({error, code: null});
        }

        if (!password) {
            setError({error, password: 'Field required'});
            return;
        } else {
            setError({error, password: null});
        }

        if (!validator.isStrongPassword(password)) {
            setError({
                error,
                password: 'Choose a password that contains uppercase, lowercase, a digit and a special character. It must also be at least 8 characters long'
            });
            return;
        } else {
            setError({error, password: null});
        }

        if (!confirmPassword) {
            setError({error, confirmPassword: 'Field required'});
            return;
        } else {
            setError({error, confirmPassword: null});
        }


        if (password !== confirmPassword) {
            setError({error, confirmPassword: 'Password mismatch', password: 'Password mismatch'});
            return;
        } else {
            setError({error, confirmPassword: null, password: null});
        }

        dispatch(REQUEST_ACTION_CREATORS.saveAccountInfo(user));
        dispatch(REQUEST_ACTION_CREATORS.nextPage());
    }

    const dispatch = useDispatch();

    return (
        <Card elevation={0}>
            <CardContent>
                <Typography gutterBottom={true} align="center" variant="h5">
                    Account Information
                </Typography>
                <Stack my={3} spacing={2} direction="column">
                    {error.password && (<Alert severity="error">
                        <AlertTitle>{error.password}</AlertTitle>
                    </Alert>)}
                    {error.confirmPassword && (<Alert severity="error">
                        <AlertTitle>{error.confirmPassword}</AlertTitle>
                    </Alert>)}
                    <TextField
                        autoComplete="off"
                        label="Pin"
                        fullWidth={true}
                        name="pin"
                        required={true}
                        variant="outlined"
                        value={pin}
                        error={Boolean(error.pin)}
                        helperText={error.pin}
                        type="text"
                        color="primary"
                        placeholder="Enter pin"
                        size="medium"
                        onChange={handleChange}
                    />

                    <TextField
                        autoComplete="off"
                        label="Code"
                        fullWidth={true}
                        name="code"
                        required={true}
                        variant="outlined"
                        value={code}
                        disabled={true}
                        error={Boolean(error.code)}
                        helperText={error.code}
                        type="number"
                        color="primary"
                        placeholder="Enter code"
                        size="medium"
                        onChange={handleChange}
                    />


                    <FormControl variant="outlined">
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <OutlinedInput
                            autoComplete="off"
                            id="password"
                            label="Password"
                            fullWidth={true}
                            name="password"
                            required={true}
                            color="primary"
                            placeholder="Enter password"
                            variant="outlined"
                            error={Boolean(error.password)}
                            type={visiblePassword ? 'text' : 'password'}
                            value={password}
                            onChange={handleChange}
                            endAdornment={<InputAdornment position="end">
                                <IconButton
                                    sx={{color: 'primary.main'}}
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

                    <FormControl variant="outlined">
                        <InputLabel htmlFor="confirm-password">Confirm Password</InputLabel>
                        <OutlinedInput
                            autoComplete="off"
                            id="confirm-password"
                            label="Confirm Password"
                            fullWidth={true}
                            name="confirmPassword"
                            required={true}
                            color="primary"
                            placeholder="Enter password"
                            variant="outlined"
                            error={Boolean(error.confirmPassword)}
                            type={visibleConfirmPassword ? 'text' : 'password'}
                            value={confirmPassword}
                            onChange={handleChange}
                            endAdornment={<InputAdornment position="end">
                                <IconButton
                                    sx={{color: 'primary.main'}}
                                    aria-label="toggle password visibility"
                                    onClick={() => setVisibleConfirmPassword(!visibleConfirmPassword)}
                                    onMouseDown={() => setVisibleConfirmPassword(!visibleConfirmPassword)}
                                    edge="end">
                                    {visibleConfirmPassword ? <VisibilityOff/> : <Visibility/>}
                                </IconButton>
                            </InputAdornment>}
                        />
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
                            variant="contained">Next</Button>
                    </Grid>
                </Grid>

            </CardContent>
        </Card>)
}

export default AccountInfoForm;
