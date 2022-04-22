import {
    Box,
    Button,
    Container,
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
    LinearProgress,
    OutlinedInput,
    Stack,
    TextField,
    Typography,
    Alert,
    AlertTitle,
    CircularProgress
} from "@mui/material";
import {useState} from "react";
import {Link} from "react-router-dom";
import {makeStyles} from "@mui/styles";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import validator from "validator";
import {useDispatch, useSelector} from "react-redux";
import {AUTH_ACTION_CREATORS} from "../../redux/auth/auth-action-creators";
import {selectAuth} from "../../redux/auth/auth-reducer";
import {useLocation, useNavigate} from "react-router";
import {LoadingButton} from "@mui/lab";

const SignInPage = () => {
    const [user, setUser] = useState({email: "", password: ""});
    const [visiblePassword, setVisiblePassword] = useState(false);
    const [error, setError] = useState({});
    const {email, password} = user;

    const handleChange = event => {
        setUser({...user, [event.target.name]: event.target.value});
    }

    const useStyles = makeStyles(theme => {
        return {
            link: {
                textDecoration: 'none'
            }, auth: {
                objectFit: 'cover', objectPosition: 'center', width: '100%', height: '100%', maxHeight: '100vh'
            }
        }
    });

    const classes = useStyles();

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const handleSubmit = event => {
        event.preventDefault();

        if (!email) {
            setError({error, email: 'Field required'});
            return;
        } else {
            setError({error, email: null});
        }

        if (!validator.isEmail(email)) {
            setError({error, email: 'Invalid email'});
            return;
        } else {
            setError({error, email: null});
        }

        if (!password) {
            setError({error, password: 'Field required'});
            return;
        } else {
            setError({error, password: null});
        }
        dispatch(AUTH_ACTION_CREATORS.signIn({email, password}, navigate, location));
    }

    const {authLoading, authError} = useSelector(selectAuth);

    return (<Box>
            {authLoading && <LinearProgress variant="query" color="primary"/>}
            <Box
                sx={{
                    display: 'flex', maxWidth: '100%', maxHeight: '100vh', height: '100vh', flexDirection: {
                        xs: 'column', md: 'row'
                    }
                }}>
                <Box
                    sx={{
                        minHeight: '100%', flex: 1, backgroundColor: 'background.paper', order: {
                            xs: 1, md: 0
                        }, display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}>
                    <Container maxWidth="sm">
                        <Typography
                            sx={{
                                color: 'primary.main', fontWeight: 'bold', textTransform: 'uppercase'
                            }}
                            gutterBottom={true}
                            align="center"
                            variant="h3">
                            Aiden Trust
                        </Typography>
                        {authError && (<Alert sx={{my: 1}} severity="error" color="error" variant="standard">
                                <AlertTitle>{authError}</AlertTitle>
                            </Alert>)}
                        <Typography
                            sx={{color: 'text.primary'}}
                            gutterBottom={true}
                            align="center"
                            variant="h6">
                            Login
                        </Typography>
                        <Typography
                            sx={{color: 'text.secondary'}}
                            gutterBottom={true}
                            align="center"
                            variant="body2">
                            Welcome back
                        </Typography>

                        <form onSubmit={handleSubmit}>
                            <Stack my={3} spacing={2} direction="column">
                                <TextField
                                    label="Email"
                                    fullWidth={true}
                                    name="email"
                                    required={true}
                                    variant="outlined"
                                    value={email}
                                    error={Boolean(error.email)}
                                    helperText={error.email}
                                    type="email"
                                    color="primary"
                                    placeholder="Enter email"
                                    size="medium"
                                    onChange={handleChange}
                                />

                                <Stack direction="row" justifyContent="space-between" alignItems="center">

                                    <Link className={classes.link} to="/auth/forgot-password">
                                        <Button
                                            color="primary"
                                            sx={{textTransform: 'capitalize'}}
                                            variant="text" size="small">
                                            Forgot Password
                                        </Button>
                                    </Link>
                                </Stack>


                                <FormControl variant="outlined">
                                    <InputLabel htmlFor="password">Password</InputLabel>
                                    <OutlinedInput
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
                                                edge="end">
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
                                    py: 1.5
                                }}
                                size="large"
                                startIcon={authLoading && <CircularProgress size={20} color="secondary"/>}
                                loadingPosition="start"
                                loading={authLoading}
                                loadingIndicator={<CircularProgress size={20} color="secondary"/>}
                                onSubmit={handleSubmit}
                                onClick={handleSubmit}
                                fullWidth={true}
                                disableElevation={true}
                                disabled={authLoading}
                                variant="contained">
                                Login
                            </LoadingButton>
                        </form>
                    </Container>
                </Box>
                <Box
                    sx={{
                        display: {xs: 'none', md: 'block'},
                        flex: 1,
                        backgroundColor: 'background.default',
                        minHeight: '100%',
                        order: {
                            xs: 0, md: 1
                        }
                    }}>
                    <img className={classes.auth} src="/assets/images/auth.png" alt=""/>
                </Box>
            </Box>
        </Box>)
}

export default SignInPage;
