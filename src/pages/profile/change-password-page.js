import {
    Button,
    Card,
    CardContent,
    Container,
    Divider,
    FormControl,
    Grid,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Stack,
    Typography
} from "@mui/material";
import {useState} from "react";
import Layout from "../../components/layout/layout";
import {Visibility, VisibilityOff} from "@mui/icons-material";

const ChangePasswordPage = () => {

    const [passwords, setPasswords] = useState({});
    const [visiblePassword, setVisiblePassword] = useState(false);
    const [confirmVisiblePassword, setConfirmVisiblePassword] = useState(false);
    const [currentVisiblePassword, setCurrentVisiblePassword] = useState(false);
    const [error, setError] = useState({});
    const {confirmPassword, password, currentPassword} = passwords;

    const handlePasswordChange = event => {
        setPasswords({...passwords, [event.target.name]: event.target.value});
    }

    const handleSubmit = event => {
        event.preventDefault();

        if(!password){
            setError({error, password: 'Fields required'});
            return;
        }else {
            setError({error, password: null});
        }

        console.log(passwords);
    }

    return (<Layout>
            <Container>
                <Grid
                    container={true}
                    justifyContent="space-between"
                    spacing={2}>
                    <Grid item={true} xs={12} md="auto">
                        <Typography variant="h4">
                            Change Password
                        </Typography>
                    </Grid>
                </Grid>

                <Divider light={true} variant="fullWidth" sx={{my: 4}}/>

                <Grid container={true}>
                    <Grid item={true} xs={12} md={6} lg={4}>
                        <Card elevation={0}>
                            <CardContent>
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
                                            onChange={handlePasswordChange}
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
                                            onChange={handlePasswordChange}
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
                                            onChange={handlePasswordChange}
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

                                <Button
                                    onClick={handleSubmit}
                                    sx={{backgroundColor: 'primary.main', color: 'white'}}
                                    size="large"
                                    fullWidth={true}
                                    variant="outlined">
                                    Change Password
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Layout>)
}

export default ChangePasswordPage;
