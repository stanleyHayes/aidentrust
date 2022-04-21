import {
    Alert,
    AlertTitle,
    Box,
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
import ImageUploader from "react-images-upload";
import validator from "validator";
import {DatePicker} from "@mui/lab";
import {selectRequest} from "../../redux/requests/request-reducer";
import {REQUEST_ACTION_CREATORS} from "../../redux/requests/request-action-creators";

const PersonalInfoForm = () => {

    const {personalInfo} = useSelector(selectRequest);

    const [user, setUser] = useState({...personalInfo});
    const [error, setError] = useState({});
    const [dateOfBirth, setDateOfBirth] = useState(personalInfo.dateOfBirth);

    const {firstName, phone, emergencyPhoneNumber, username, image, gender = "", lastName, email} = user;

    const handleChange = event => {
        setUser({...user, [event.target.name]: event.target.value});
    }
    const dispatch = useDispatch();

    const handleSubmit = event => {
        event.preventDefault();

        if (!image) {
            setError({error, image: 'Select image'});
            return;
        } else {
            setError({error, image: null});
        }

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

        if (!username) {
            setError({error, username: 'Field required'});
            return;
        } else {
            setError({error, username: null});
        }

        if (!email) {
            setError({error, email: 'Field required'});
            return;
        } else {
            setError({error, email: null});
        }


        if (!validator.isEmail(email)) {
            setError({error, email: 'Field required'});
            return;
        } else {
            setError({error, email: null});
        }

        if (!phone) {
            setError({error, phone: 'Field required'});
            return;
        } else {
            setError({error, phone: null});
        }


        if (!validator.isMobilePhone(phone)) {
            setError({error, phone: 'Field required'});
            return;
        } else {
            setError({error, phone: null});
        }

        if (!emergencyPhoneNumber) {
            setError({error, emergencyPhoneNumber: 'Field required'});
            return;
        } else {
            setError({error, emergencyPhoneNumber: null});
        }

        if (!validator.isMobilePhone(emergencyPhoneNumber)) {
            setError({error, emergencyPhoneNumber: 'Field required'});
            return;
        } else {
            setError({error, emergencyPhoneNumber: null});
        }

        if (!dateOfBirth) {
            setError({error, dateOfBirth: 'Select date of birth'});
            return;
        } else {
            setError({error, dateOfBirth: null});
        }

        if (!gender) {
            setError({error, gender: 'Field required'});
            return;
        } else {
            setError({error, gender: null});
        }


        dispatch(REQUEST_ACTION_CREATORS.savePersonalInfo({...user, dateOfBirth}));
        dispatch(REQUEST_ACTION_CREATORS.nextPage());
    }

    const handleImageSelect = (files, pictures) => {
        setUser({...user, image: pictures[0]});
    }



    return (<Card elevation={1}>
        <CardContent>
            {error.image && (<Alert sx={{my: 3}} severity="error" color="error" variant="standard">
                <AlertTitle>{error.image}</AlertTitle>
            </Alert>)}

            {error.gender && (<Alert sx={{my: 3}} severity="error" color="error" variant="standard">
                <AlertTitle>{error.gender}</AlertTitle>
            </Alert>)}

            {error.dateOfBirth && (<Alert sx={{my: 3}} severity="error" color="error" variant="standard">
                <AlertTitle>{error.dateOfBirth}</AlertTitle>
            </Alert>)}

            <Typography gutterBottom={true} align="center" variant="h6">
                Personal Information
            </Typography>
            <Stack my={3} spacing={2} direction="column">

                <Box>
                    <ImageUploader
                        onChange={handleImageSelect}
                        fileContainerStyle={{
                            backgroundColor: '#F5F6FA'
                        }}
                        labelStyles={{color: '#5D3EBC'}}
                        withIcon={true}
                        label="Accepted jpg|png|jpeg"
                        withLabel={true}
                        withPreview={true}
                        buttonText="Choose Profile"
                        imgExtension={['.jpg', '.png', '.jpeg']}
                        singleImage={true}
                        name="image"
                        buttonStyles={{
                            backgroundColor: '#5D3EBC',
                            color: '#ffffff',
                            borderRadius: 4,
                            paddingTop: 8,
                            paddingBottom: 8,
                            fontFamily: 'Chakra Petch'
                        }}
                    />
                </Box>

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
                    color="secondary"
                    placeholder="Enter first name"
                    size="medium"
                    onChange={handleChange}
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
                    color="secondary"
                    placeholder="Enter last name"
                    size="medium"
                    onChange={handleChange}
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
                    color="secondary"
                    placeholder="Enter email"
                    size="medium"
                    onChange={handleChange}
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
                    color="secondary"
                    placeholder="Enter username"
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
                    helperText={error.phone}
                    type="tel"
                    color="secondary"
                    placeholder="Enter phone"
                    size="medium"
                    onChange={handleChange}
                />

                <TextField
                    label="Emergency Phone"
                    fullWidth={true}
                    name="emergencyPhoneNumber"
                    required={true}
                    variant="outlined"
                    value={emergencyPhoneNumber}
                    error={Boolean(error.emergencyPhoneNumber)}
                    helperText={error.emergencyPhoneNumber}
                    type="tel"
                    color="secondary"
                    placeholder="Enter emergency phone"
                    size="medium"
                    onChange={handleChange}
                />

                <Box>
                    <DatePicker
                        rawValue={dateOfBirth}
                        label="Date of Birth"
                        value={dateOfBirth}
                        onChange={(date) => {
                            setDateOfBirth(date)
                        }}
                        renderInput={(params) => <TextField
                            size="medium"
                            variant="outlined"
                            fullWidth={true}
                            placeholder="Date of birth"
                            margin="none"
                            name="dateOfBirth"
                            label="Date of birth" {...params} />}
                        date={dateOfBirth}
                    />
                </Box>

                <FormControl fullWidth>
                    <InputLabel htmlFor="gender-label">Gender</InputLabel>
                    <Select
                        labelId="gender-label"
                        label="Gender"
                        name="gender"
                        id="gender"
                        onChange={handleChange}
                        fullWidth={true}
                        value={gender}>
                        <MenuItem value="">Select Gender</MenuItem>
                        <MenuItem value="Male">Male</MenuItem>
                        <MenuItem value="Female">Female</MenuItem>
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

export default PersonalInfoForm;
