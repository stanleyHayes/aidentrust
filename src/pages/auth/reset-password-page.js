import {
    Box,
    Card,
    CardContent,
    CircularProgress,
    Container,
    FormControl,
    Grid,
    IconButton,
    InputAdornment,
    InputLabel,
    LinearProgress,
    OutlinedInput,
    Stack,
    Typography
} from "@mui/material";
import {useState} from "react";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import validator from "validator";
import {AUTH_ACTION_CREATORS} from "../../redux/auth/auth-action-creators";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router";
import {selectAuth} from "../../redux/auth/auth-reducer";
import {LoadingButton} from "@mui/lab";

const ResetPasswordPage = () => {
    const [user, setUser] = useState({});
    const [visiblePassword, setVisiblePassword] = useState(false);
    const [confirmVisiblePassword, setVisibleConfirmPassword] = useState(false);
    const [error, setError] = useState({});
    const {confirmPassword, password} = user;

    const handleChange = event => {
        setUser({...user, [event.target.name]: event.target.value});
    }

    const {authLoading} = useSelector(selectAuth);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {token} = useParams();

    const handleSubmit = event => {
        event.preventDefault();

        if (!password) {
            setError({error, password: 'Field required'});
            return;
        } else {
            setError({error, password: null});
        }

        if (!validator.isStrongPassword(password)) {
            setError({error, password: 'Field required'});
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
        dispatch(AUTH_ACTION_CREATORS.resetPassword({password}, token, navigate));
    }

    return (<Box
        sx={{
            minHeight: '100vh', display: 'flex', alignItems: ' center', backgroundColor: 'background.default'
        }}>
        <Container>
            <Grid container={true} justifyContent="center">
                <Grid item={true} xs={12} md={6} lg={4}>
                    <Card elevation={1} variant="elevation">
                        {authLoading && <LinearProgress color="primary" variant="query"/>}
                        <CardContent>
                            <Typography
                                sx={{color: 'primary.main', fontWeight: 'bold'}}
                                gutterBottom={true}
                                align="center"
                                variant="h4">
                                Aiden Trust
                            </Typography>
                            <Typography gutterBottom={true} align="center" variant="h6">
                                Reset Password
                            </Typography>
                            <Typography gutterBottom={true} align="center" variant="body2">
                                Set a strong password to protect your data
                            </Typography>

                            <Stack my={3} spacing={2} direction="column">
                                <FormControl variant="outlined">
                                    <InputLabel htmlFor="password">Password</InputLabel>
                                    <OutlinedInput
                                        id="password"
                                        label="Password"
                                        fullWidth={true}
                                        name="password"
                                        required={true}
                                        variant="outlined"
                                        error={Boolean(error.password)}
                                        helperText={error.password}
                                        type={visiblePassword ? 'text' : 'password'}
                                        value={password}
                                        onChange={handleChange}
                                        endAdornment={<InputAdornment position="end">
                                            <IconButton
                                                color="primary"
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
                                    <InputLabel htmlFor="confirmPassword">Confirm Password</InputLabel>
                                    <OutlinedInput
                                        id="confirmPassword"
                                        label="Confirm Password"
                                        fullWidth={true}
                                        name="confirmPassword"
                                        required={true}
                                        variant="outlined"
                                        error={Boolean(error.confirmPassword)}
                                        helperText={error.confirmPassword}
                                        type={visiblePassword ? 'text' : 'password'}
                                        value={confirmPassword}
                                        onChange={handleChange}
                                        endAdornment={<InputAdornment position="end">
                                            <IconButton
                                                color="primary"
                                                aria-label="toggle password visibility"
                                                onClick={() => setVisibleConfirmPassword(!confirmVisiblePassword)}
                                                onMouseDown={() => setVisibleConfirmPassword(!confirmVisiblePassword)}
                                                edge="end"
                                            >
                                                {confirmVisiblePassword ? <VisibilityOff/> : <Visibility/>}
                                            </IconButton>
                                        </InputAdornment>}
                                    />
                                </FormControl>
                            </Stack>

                            <LoadingButton
                                loading={authLoading}
                                loadingIndicator={<CircularProgress size="small" color="secondary"/>}
                                onClick={handleSubmit}
                                sx={{
                                    backgroundColor: 'primary.main',
                                    color: 'secondary.main',
                                    textTransform: 'capitalize',
                                    '&:hover': {
                                        color: 'primary.main'
                                    },
                                    '&:focus': {
                                        color: 'primary.main'
                                    },
                                    '&:active': {
                                        color: 'primary.main'
                                    }
                                }}
                                size="large"
                                fullWidth={true}
                                variant="outlined">
                                Reset Password
                            </LoadingButton>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    </Box>)
}

export default ResetPasswordPage;
