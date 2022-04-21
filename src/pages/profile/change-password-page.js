import {
    Alert,
    AlertTitle,
    Button,
    Card,
    CardContent,
    CircularProgress,
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
    Typography
} from "@mui/material";
import {useState} from "react";
import {Save, Visibility, VisibilityOff} from "@mui/icons-material";
import validator from "validator";
import {useSelector} from "react-redux";
import {selectAuth} from "../../redux/auth/auth-reducer";
import {LoadingButton} from "@mui/lab";
import Layout from "../../components/layout/layout";

const ChangePasswordPage = () => {

    const [passwords, setPasswords] = useState({});
    const [visiblePassword, setVisiblePassword] = useState(false);
    const [confirmVisiblePassword, setConfirmVisiblePassword] = useState(false);
    const [currentVisiblePassword, setCurrentVisiblePassword] = useState(false);
    const {confirmPassword, password, currentPassword} = passwords;
    const [error, setError] = useState({});

    const {authLoading, authError} = useSelector(selectAuth);

    const handleChange = event => {
        setPasswords({...passwords, [event.target.name]: event.target.value});
    }

    const handleSubmit = event => {
        event.preventDefault();

        if (!currentPassword) {
            setError({error, currentPassword: 'Field required'});
            return;
        } else {
            setError({error, currentPassword: null});
        }

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
        console.log(password);
    }


    return (<Layout>
        <Container sx={{my: 4}}>
            <Grid container={true} alignItems="center" spacing={2} justifyContent="space-between">
                <Grid item={true} xs={12} md="auto">
                    <Typography color="text.title" variant="h4">Change Password</Typography>
                </Grid>
                <Grid item={true} xs={12} md="auto">
                    <Button
                        sx={{
                            fontWeight: 'bold',
                            textTransform: 'capitalize',
                            borderWidth: 2,
                            borderStyle: 'solid',
                            borderColor: 'secondary.main',
                            color: 'secondary.main',
                            '&:hover': {
                                backgroundColor: 'light.secondary',
                                color: 'secondary.main',
                                transition: 'all 500ms 150ms ease-in-out',
                                borderWidth: 2,
                                borderStyle: 'solid',
                                borderColor: 'secondary.main',
                            },
                            '&:focus': {
                                borderWidth: 2,
                                borderStyle: 'solid',
                                borderColor: 'secondary.main',
                                backgroundColor: 'light.secondary',
                                color: 'secondary.main'
                            },
                            '&:active': {
                                borderWidth: 2,
                                borderStyle: 'solid',
                                borderColor: 'secondary.main',
                                backgroundColor: 'light.secondary',
                                color: 'secondary.main'
                            }
                        }}
                        size="large"
                        startIcon={<Save/>}
                        fullWidth={true}
                        disableElevation={true}
                        variant="outlined">
                        Update Password
                    </Button>
                </Grid>
            </Grid>
            <Divider variant="fullWidth" light={true} sx={{my: 2}}/>
            <Grid container={true}>
                <Grid item={true} xs={12} md={6} lg={4}>
                    <Card elevation={0}>
                        {authLoading && <LinearProgress variant="query" color="secondary"/>}
                        <CardContent>
                            {authError && (<Alert sx={{my: 3}} severity="error" color="error" variant="standard">
                                <AlertTitle>{authError}</AlertTitle>
                            </Alert>)}
                            <Stack my={3} spacing={2} direction="column">
                                <FormControl variant="outlined">
                                    <InputLabel htmlFor="currentPassword">Current Password</InputLabel>
                                    <OutlinedInput
                                        id="currentPassword"
                                        label="Current Password"
                                        fullWidth={true}
                                        name="confirmPassword"
                                        required={true}
                                        variant="outlined"
                                        size="medium"
                                        placeholder="Enter current password"
                                        error={Boolean(error.currentPassword)}
                                        helperText={error.currentPassword}
                                        type={visiblePassword ? 'text' : 'password'}
                                        value={currentPassword}
                                        onChange={handleChange}
                                        endAdornment={<InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={() => setCurrentVisiblePassword(!currentVisiblePassword)}
                                                onMouseDown={() => setCurrentVisiblePassword(!currentVisiblePassword)}
                                                edge="end"
                                            >
                                                {currentVisiblePassword ? <VisibilityOff/> : <Visibility/>}
                                            </IconButton>
                                        </InputAdornment>}
                                    />
                                </FormControl>

                                <FormControl variant="outlined">
                                    <InputLabel htmlFor="password">New Password</InputLabel>
                                    <OutlinedInput
                                        id="password"
                                        label="Enter Password"
                                        fullWidth={true}
                                        name="password"
                                        required={true}
                                        size="medium"
                                        placeholder="Enter a password"
                                        variant="outlined"
                                        error={Boolean(error.password)}
                                        helperText={error.password}
                                        type={visiblePassword ? 'text' : 'password'}
                                        value={password}
                                        onChange={handleChange}
                                        endAdornment={<InputAdornment position="end">
                                            <IconButton
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
                                        placeholder="Confirm password"
                                        variant="outlined"
                                        size="medium"
                                        error={Boolean(error.confirmPassword)}
                                        helperText={error.confirmPassword}
                                        type={confirmVisiblePassword ? 'text' : 'password'}
                                        value={confirmPassword}
                                        onChange={handleChange}
                                        endAdornment={<InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={() => setConfirmVisiblePassword(!confirmVisiblePassword)}
                                                onMouseDown={() => setConfirmVisiblePassword(!confirmVisiblePassword)}
                                                edge="end"
                                            >
                                                {confirmVisiblePassword ? <VisibilityOff/> : <Visibility/>}
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
                                startIcon={authLoading && <CircularProgress color="secondary"/>}
                                loadingPosition="start"
                                loading={authLoading}
                                loadingIndicator={<CircularProgress color="secondary"/>}
                                onSubmit={handleSubmit}
                                onClick={handleSubmit}
                                fullWidth={true}
                                disableElevation={true}
                                disabled={authLoading}
                                variant="outlined">
                                Change Password
                            </LoadingButton>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    </Layout>)
}

export default ChangePasswordPage;
