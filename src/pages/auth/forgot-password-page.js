import {
    Alert,
    AlertTitle,
    Box,
    Button,
    Card,
    CardContent,
    CircularProgress,
    Container,
    Grid,
    LinearProgress,
    Stack,
    TextField,
    Typography
} from "@mui/material";
import {useState} from "react";
import {ChevronLeft} from "@mui/icons-material";
import {useNavigate} from "react-router";
import validator from "validator";
import {useDispatch, useSelector} from "react-redux";
import {AUTH_ACTION_CREATORS} from "../../redux/auth/auth-action-creators";
import {LoadingButton} from "@mui/lab";
import {selectAuth} from "../../redux/auth/auth-reducer";

const ForgotPasswordPage = () => {

    const [email, setEmail] = useState("");
    const [error, setError] = useState(null);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {authLoading, authError} = useSelector(selectAuth);

    const handleSubmit = event => {
        event.preventDefault();

        if (!email) {
            setError({error, password: 'Field required'});
            return;
        } else {
            setError({error, password: null});
        }

        if (!validator.isEmail(email)) {
            setError({error, email: 'Invalid email'});
            return;
        } else {
            setError({error, email: null});
        }

        dispatch(AUTH_ACTION_CREATORS.forgotPassword({email}));
    }

    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: ' center',
                backgroundColor: 'background.default'
            }}>
            <Container>
                <Grid container={true} justifyContent="center">
                    <Grid item={true} xs={12} md={6} lg={4}>
                        <Card elevation={0} variant="elevation">
                            {authLoading && <LinearProgress color="secondary" variant="query"/>}
                            <CardContent>
                                {
                                    authError && (
                                        <Alert sx={{my: 1}} severity="error" color="error" variant="standard">
                                            <AlertTitle>{authError}</AlertTitle>
                                        </Alert>
                                    )
                                }
                                <Button
                                    onClick={() => navigate(-1)}
                                    sx={{
                                        fontWeight: 'bold',
                                        textTransform: 'capitalize',
                                        color: 'primary'
                                    }}
                                    color="primary"
                                    mb={4}
                                    startIcon={<ChevronLeft sx={{color: 'primary'}} fontSize="medium"/>} variant="text">
                                    Back
                                </Button>

                                <Typography
                                    sx={{color: 'primary.main', fontWeight: 'bold'}}
                                    gutterBottom={true}
                                    align="center"
                                    variant="h4">
                                    Aideen Trust
                                </Typography>
                                <Typography mb={1} gutterBottom={true} align="center" variant="body1">
                                    Forgot Password
                                </Typography>
                                <Typography
                                    gutterBottom={true} align="center" variant="body2">
                                    Enter your email to get a password link
                                </Typography>

                                <Stack my={3} spacing={2} direction="column">
                                    <TextField
                                        label="Email"
                                        fullWidth={true}
                                        name="email"
                                        required={true}
                                        variant="outlined"
                                        value={email}
                                        error={Boolean(error)}
                                        helperText={error}
                                        type="email"
                                        size="medium"
                                        defaultValue=""
                                        onChange={event => setEmail(event.target.value)}
                                    />
                                </Stack>

                                <LoadingButton
                                    startIcon={authLoading ? <CircularProgress color="secondary"/> : null}
                                    loading={authLoading}
                                    loadingIndicator={<CircularProgress color="secondary"/>}
                                    loadingPosition="start"
                                    onClick={handleSubmit}
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
                                    fullWidth={true}
                                    variant="outlined">
                                    Get Reset Link
                                </LoadingButton>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>

        </Box>
    )
}

export default ForgotPasswordPage;
