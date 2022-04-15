import Layout from "../../components/layout/layout";
import {
    Box,
    Button,
    Card,
    CardContent,
    Container,
    Divider,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    Stack,
    TextField,
    Typography
} from "@mui/material";
import { useState} from "react";
import {DatePicker} from "@mui/lab";

const EditProfilePage = () => {

    const [user, setUser] = useState({});

    const [error, setError] = useState({});
    const {
        firstName,
        lastName,
        email,
        username,
        phoneNumber,
        emergencyPhoneNumber,
        gender,
        dateOfBirth
    } = user;

    const handleUserChange = event => {
        setUser({...user, [event.target.name]: event.target.value});
    }

    const handleSubmit = event => {
        event.preventDefault();

        if(!firstName){
            setError({error, firstName: 'Fields required'});
            return;
        }else {
            setError({error, firstName: null});
        }

        console.log(user);
    }

    return (
        <Layout>
            <Container>
                <Grid
                    container={true}
                    justifyContent="space-between"
                    spacing={2}>
                    <Grid item={true} xs={12} md="auto">
                        <Typography variant="h4">
                            Update Profile
                        </Typography>
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
                                <Stack my={3} spacing={2} direction="column">
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

                                    <FormControl fullWidth>
                                        <InputLabel htmlFor="gender-label">Gender</InputLabel>
                                        <Select
                                            labelId="gender-label"
                                            label="Gender"
                                            name="gender"
                                            id="gender"
                                            onChange={handleUserChange}
                                            fullWidth={true}
                                            value={gender}>
                                            <MenuItem value="">Select Gender</MenuItem>
                                            <MenuItem value="Male">Male</MenuItem>
                                            <MenuItem value="Female">Female</MenuItem>
                                        </Select>
                                    </FormControl>


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

                                <Button
                                    onClick={handleSubmit}
                                    sx={{backgroundColor: 'primary.main', color: 'white'}}
                                    size="large"
                                    fullWidth={true}
                                    variant="outlined">
                                    Update Profile
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Layout>
    )
}

export default EditProfilePage;
