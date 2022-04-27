import Layout from "../../components/layout/layout";
import {
    Box,
    Card,
    CardContent,
    CircularProgress,
    Container,
    Divider,
    Grid,
    MenuItem,
    Select,
    Stack,
    TextField,
    Typography
} from "@mui/material";
import {useEffect, useState} from "react";
import {DatePicker, LoadingButton} from "@mui/lab";
import {useDispatch, useSelector} from "react-redux";
import {selectAuth} from "../../redux/auth/auth-reducer";
import validator from "validator";
import {AUTH_ACTION_CREATORS} from "../../redux/auth/auth-action-creators";
import {useNavigate} from "react-router";

const EditProfilePage = () => {

    const {authData, authLoading, token} = useSelector(selectAuth);
    const [user, setUser] = useState({});

    useEffect(() => {
        if (authData) {
            setUser({...authData});
        }
    }, [authData]);

    const [error, setError] = useState({});
    const {
        firstName,
        lastName,
        email,
        username,
        phoneNumber,
        emergencyPhoneNumber,
        gender,
        dateOfBirth,
        address = {},
    } = user;

    const {country, state, city, addressLine1, addressLine2} = address;

    const handleUserChange = event => {
        setUser({...user, [event.target.name]: event.target.value});
    }

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit = event => {
        event.preventDefault();

        if (!firstName) {
            setError({error, firstName: 'Field required'});
            return;
        } else {
            setError({error, firstName: null});
        }

        if (!lastName) {
            setError({error, lastName: 'Field required'});
            return;
        } else {
            setError({error, lastName: null});
        }

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

        if (!phoneNumber) {
            setError({error, phoneNumber: 'Field required'});
            return;
        } else {
            setError({error, phoneNumber: null});
        }

        if (!validator.isMobilePhone(phoneNumber)) {
            setError({error, phoneNumber: 'Invalid phone'});
            return;
        } else {
            setError({error, phoneNumber: null});
        }

        if (!emergencyPhoneNumber) {
            setError({error, emergencyPhoneNumber: 'Field required'});
            return;
        } else {
            setError({error, emergencyPhoneNumber: null});
        }

        if (!validator.isMobilePhone(emergencyPhoneNumber)) {
            setError({error, emergencyPhoneNumber: 'Invalid phone'});
            return;
        } else {
            setError({error, emergencyPhoneNumber: null});
        }

        if (!dateOfBirth) {
            setError({error, dateOfBirth: 'Field required'});
            return;
        } else {
            setError({error, dateOfBirth: null});
        }

        if (!country) {
            setError({error, country: 'Field required'});
            return;
        } else {
            setError({error, country: null});
        }

        if (!city) {
            setError({error, city: 'Field required'});
            return;
        } else {
            setError({error, city: null});
        }

        if (!addressLine1) {
            setError({error, addressLine1: 'Field required'});
            return;
        } else {
            setError({error, addressLine1: null});
        }

        if (!addressLine2) {
            setError({error, addressLine2: 'Field required'});
            return;
        } else {
            setError({error, addressLine2: null});
        }
        dispatch(AUTH_ACTION_CREATORS.updateProfile({
            firstName,
            lastName,
            email,
            username,
            phoneNumber,
            emergencyPhoneNumber,
            gender,
            dateOfBirth, country, state, city, addressLine1, addressLine2
        }, token, navigate));
    }

    return (
        <Layout>
            <Box sx={{pt: 8.3}}>
            <Container sx={{py: 8}}>
                <Grid
                    container={true}
                    alignItems="center"
                    justifyContent="space-between"
                    spacing={2}>
                    <Grid item={true} xs={12} md="auto">
                        <Typography variant="h4">
                            Update Profile
                        </Typography>
                    </Grid>
                    <Grid item={true} xs={12} md="auto">
                        <LoadingButton
                            loading={authLoading}
                            loadingIndicator={<CircularProgress color='secondary' size={20}/>}
                            onClick={handleSubmit}
                            sx={{
                                backgroundColor: 'primary.main',
                                color: 'secondary.main',
                                textTransform: 'capitalize'
                            }}
                            size="large"
                            fullWidth={true}
                            variant="outlined">
                            Update Profile
                        </LoadingButton>
                    </Grid>
                </Grid>

                <Divider light={true} variant="fullWidth" sx={{my: 4}}/>

                <Grid
                    spacing={2}
                    container={true}
                    justifyContent="flex-start">
                    <Grid item={true} xs={12} md={6}>
                        <Card elevation={0}>
                            <CardContent>
                                <Typography mb={2} variant="h5">Personal Information</Typography>
                                <Stack spacing={2} direction="column">
                                    <TextField
                                        label="First Name"
                                        fullWidth={true}
                                        name="firstName"
                                        required={true}
                                        variant="outlined"
                                        value={firstName}
                                        error={Boolean(error.firstName)}
                                        helperText={error.firstName}
                                        type="text"
                                        size="medium"
                                        placeholder="Enter first name"
                                        onChange={handleUserChange}
                                    />

                                    <TextField
                                        label="Last Name"
                                        fullWidth={true}
                                        name="lastName"
                                        required={true}
                                        variant="outlined"
                                        value={lastName}
                                        error={Boolean(error.lastName)}
                                        helperText={error.lastName}
                                        type="text"
                                        size="medium"
                                        placeholder="Enter last name"
                                        onChange={handleUserChange}
                                    />

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
                                        size="medium"
                                        placeholder="Enter email"
                                        onChange={handleUserChange}
                                    />

                                    <TextField
                                        label="Username"
                                        fullWidth={true}
                                        name="username"
                                        required={true}
                                        variant="outlined"
                                        value={username}
                                        error={Boolean(error.username)}
                                        helperText={error.username}
                                        type="text"
                                        size="medium"
                                        placeholder="Enter username"
                                        onChange={handleUserChange}
                                    />

                                    <Select
                                        labelId="gender-label"
                                        label="Gender"
                                        name="gender"
                                        id="gender"
                                        onChange={handleUserChange}
                                        fullWidth={true}
                                        defaultValue="Male"
                                        value={gender}>
                                        <MenuItem value="">Select Gender</MenuItem>
                                        <MenuItem value="Male">Male</MenuItem>
                                        <MenuItem value="Female">Female</MenuItem>
                                    </Select>

                                    <TextField
                                        label="Phone"
                                        fullWidth={true}
                                        name="phoneNumber"
                                        required={true}
                                        variant="outlined"
                                        value={phoneNumber}
                                        error={Boolean(error.phoneNumber)}
                                        helperText={error.phoneNumber}
                                        type="tel"
                                        size="medium"
                                        placeholder="Enter phone number"
                                        onChange={handleUserChange}
                                    />

                                    <TextField
                                        label="Emergency Phone"
                                        fullWidth={true}
                                        name="emergencyPhone"
                                        required={true}
                                        variant="outlined"
                                        value={emergencyPhoneNumber}
                                        error={Boolean(error.emergencyPhoneNumber)}
                                        helperText={error.emergencyPhoneNumber}
                                        type="tel"
                                        size="medium"
                                        onChange={handleUserChange}
                                    />

                                    <Box>
                                        <DatePicker
                                            rawValue={dateOfBirth}
                                            label="Date of birth"
                                            value={dateOfBirth}
                                            onChange={(date) => {
                                                setUser({...user, 'dateOfBirth': date})
                                            }}
                                            renderInput={
                                                (params) =>
                                                    <TextField
                                                        variant="outlined"
                                                        fullWidth={true}
                                                        placeholder="Date of birth"
                                                        margin="normal"
                                                        label="Start Date" {...params} />}
                                            date={dateOfBirth}
                                        />
                                    </Box>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item={true} xs={12} md={6}>
                        <Card elevation={0}>
                            <CardContent>
                                <Typography mb={2} variant="h5">Address Information</Typography>
                                <Stack spacing={2.2} direction="column">
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
                                        size="medium"
                                        placeholder="Enter country"
                                        onChange={handleUserChange}
                                    />


                                    <TextField
                                        label="State"
                                        fullWidth={true}
                                        name="state"
                                        required={true}
                                        variant="outlined"
                                        value={state}
                                        error={Boolean(error.state)}
                                        helperText={error.state}
                                        type="text"
                                        size="medium"
                                        placeholder="Enter state"
                                        onChange={handleUserChange}
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
                                        size="medium"
                                        onChange={handleUserChange}
                                    />

                                    <TextField
                                        label="Address Line 1"
                                        fullWidth={true}
                                        name="addressLine1"
                                        required={true}
                                        variant="outlined"
                                        value={addressLine1}
                                        error={Boolean(error.addressLine1)}
                                        helperText={error.addressLine1}
                                        type="text"
                                        size="medium"
                                        multiline={true}
                                        minRows={6}
                                        onChange={handleUserChange}
                                    />

                                    <TextField
                                        label="Address Line 2"
                                        fullWidth={true}
                                        name="addressLine2"
                                        required={true}
                                        variant="outlined"
                                        value={addressLine2}
                                        error={Boolean(error.addressLine2)}
                                        helperText={error.addressLine2}
                                        type="text"
                                        size="medium"
                                        multiline={true}
                                        minRows={6}
                                        onChange={handleUserChange}
                                    />
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
            </Box>
        </Layout>
    )
}

export default EditProfilePage;
