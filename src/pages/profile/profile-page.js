import Layout from "../../components/layout/layout";
import {Avatar, Button, Card, CardContent, Container, Divider, Grid, Stack, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {Call, Contacts, Edit, Mail, Male, Map, Person} from "@mui/icons-material";
import {grey, purple} from "@mui/material/colors";
import Info from "../../components/shared/info";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectAuth} from "../../redux/auth/auth-reducer";

const ProfilePage = () => {

    const useStyles = makeStyles(theme => {
        return {
            container: {
                paddingTop: 16,
                paddingBottom: 16
            },
            link: {
                textDecoration: 'none'
            }
        }
    });

    const classes = useStyles();

    const {authData, bankAccount} = useSelector(selectAuth);

    return (
        <Layout>
            <Container className={classes.container}>
                <Grid
                    spacing={2}
                    alignItems="center"
                    justifyContent="space-between"
                    container={true}>
                    <Grid item={true} xs={12} md="auto">
                        <Typography variant="h4">Profile</Typography>
                    </Grid>
                    <Grid item={true} xs={12} md="auto">
                        <Link to="/edit-profile" className={classes.link}>
                            <Button
                                sx={{
                                    textTransform: 'capitalize',
                                    color: purple[600],
                                    backgroundColor: 'white',
                                    borderWidth: 2,
                                    '&:hover': {
                                        borderWidth: 2,
                                    }
                                }}
                                startIcon={
                                    <Edit fontSize="small" sx={{color: purple[600]}}/>}
                                variant="outlined"
                                fullWidth={true}
                                disableElevation={true}
                                size="large">
                                Update Profile
                            </Button>
                        </Link>
                    </Grid>
                </Grid>

                <Divider light={true} sx={{my: 4}}/>

                <Grid spacing={2} container={true}>
                    <Grid item={true} xs={12} md={4}>
                        <Card elevation={0} sx={{mb: 2}}>
                            <CardContent>
                                <Stack mb={2} direction="row" justifyContent="center">
                                    <Avatar
                                        sx={{width: 100, height: 100}}
                                        src={authData?.image}
                                    />
                                </Stack>
                                <Typography
                                    mb={1}
                                    variant="body1"
                                    align="center">
                                    {`${authData?.firstName} ${authData?.lastName}`}
                                </Typography>
                                <Typography
                                    mb={1}
                                    variant="body2"
                                    align="center">
                                    {authData?.status}
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card elevation={0}>
                            <CardContent>
                                <Stack
                                    mb={1}
                                    direction="row"
                                    justifyContent="space-between"
                                    alignItems="center">
                                    <Button variant="text" size="small" startIcon={<Person/>}>
                                        Bank Account Details
                                    </Button>
                                </Stack>

                                <Divider light={true} sx={{my: 1}} variant="middle"/>

                                <Stack
                                    divider={<Divider light={true} variant="middle"/>}
                                    direction="column">
                                    <Info
                                        icon={<Person sx={{color: grey[600]}}/>}
                                        title="Account holding name"
                                        value={`${authData?.firstName} ${authData?.lastName}`}

                                    />
                                    <Info
                                        icon={<Person sx={{color: grey[600]}}/>}
                                        title="Account Number"
                                        value={bankAccount?.number}

                                    />
                                    <Info
                                        icon={<Person sx={{color: grey[600]}}/>}
                                        title="Account Usage"
                                        value={bankAccount?.usage}
                                    />
                                    <Info
                                        icon={<Person sx={{color: grey[600]}}/>}
                                        title="Account Type"
                                        value={bankAccount?.type}

                                    />
                                    <Info
                                        icon={<Person sx={{color: grey[600]}}/>}
                                        title="Balance"
                                        value={`$${bankAccount?.balance}`}
                                    />
                                    <Info
                                        icon={<Person sx={{color: grey[600]}}/>}
                                        title="Status"
                                        value={bankAccount?.status}

                                    />
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item={true} xs={12} md={8}>
                        <Grid spacing={2} container={true}>
                            <Grid item={true} xs={12}>
                                <Card elevation={0}>
                                    <CardContent>
                                        <Stack
                                            mb={1}
                                            direction="row"
                                            justifyContent="space-between"
                                            alignItems="center">
                                            <Button
                                                disableRipple={true}
                                                variant="text"
                                                size="small"
                                                startIcon={<Person/>}>
                                                Personal Details
                                            </Button>
                                        </Stack>

                                        <Divider light={true} sx={{my: 1}} variant="middle"/>

                                        <Grid spacing={2} container={true}>
                                            <Grid item={true} xs={12} md={6}>
                                                <Info
                                                    icon={<Person sx={{color: grey[600]}}/>}
                                                    title="First Name"
                                                    value={authData?.firstName}

                                                />
                                            </Grid>
                                            <Grid item={true} xs={12} md={6}>
                                                <Info
                                                    icon={<Person sx={{color: grey[600]}}/>}
                                                    title="Surname"
                                                    value={authData?.lastName}

                                                />
                                            </Grid>
                                            <Grid item={true} xs={12} md={6}>
                                                <Info
                                                    icon={<Male sx={{color: grey[600]}}/>}
                                                    title="Gender"
                                                    value={authData?.gender}
                                                />
                                            </Grid>
                                            <Grid item={true} xs={12} md={6}>
                                                <Info
                                                    icon={<Person sx={{color: grey[600]}}/>}
                                                    title="Username"
                                                    value={authData?.username}

                                                />
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item={true} xs={12}>
                                <Card elevation={0}>
                                    <CardContent>
                                        <Stack
                                            mb={1}
                                            direction="row"
                                            justifyContent="space-between"
                                            alignItems="center">
                                            <Button
                                                disableRipple={true}
                                                variant="text"
                                                size="small"
                                                startIcon={<Contacts/>}>
                                                Contact Details
                                            </Button>
                                        </Stack>

                                        <Divider light={true} sx={{my: 1}} variant="middle"/>

                                        <Grid spacing={2} container={true}>
                                            <Grid item={true} xs={12} md={6}>
                                                <Info
                                                    icon={<Mail sx={{color: grey[600]}}/>}
                                                    title="Email"
                                                    value={authData?.email}

                                                />
                                            </Grid>
                                            <Grid item={true} xs={12} md={6}>
                                                <Info
                                                    icon={<Call sx={{color: grey[600]}}/>}
                                                    title="Phone"
                                                    value={authData?.phoneNumber}

                                                />
                                            </Grid>
                                            <Grid item={true} xs={12} md={6}>
                                                <Info
                                                    icon={<Call sx={{color: grey[600]}}/>}
                                                    title="Emergency Phone"
                                                    value={authData?.emergencyPhoneNumber}
                                                />
                                            </Grid>
                                            <Grid item={true} xs={12} md={6}>
                                                <Info
                                                    icon={<Person sx={{color: grey[600]}}/>}
                                                    title="Date of Birth"
                                                    value={new Date(authData?.dateOfBirth).toDateString()}

                                                />
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item={true} xs={12}>
                                <Card elevation={0}>
                                    <CardContent>
                                        <Stack
                                            mb={1}
                                            direction="row"
                                            justifyContent="space-between"
                                            alignItems="center">
                                            <Button
                                                disableRipple={true}
                                                variant="text"
                                                size="small"
                                                startIcon={<Map/>}>
                                                Address Details
                                            </Button>
                                        </Stack>

                                        <Divider light={true} sx={{my: 1}} variant="middle"/>

                                        <Grid spacing={2} container={true}>
                                            <Grid item={true} xs={12} md={6}>
                                                <Info
                                                    icon={<Person sx={{color: grey[600]}}/>}
                                                    title="Country"
                                                    value={authData?.address?.country}

                                                />
                                            </Grid>
                                            <Grid item={true} xs={12} md={6}>
                                                <Info
                                                    icon={<Person sx={{color: grey[600]}}/>}
                                                    title="State"
                                                    value={authData?.address?.state}

                                                />
                                            </Grid>
                                            <Grid item={true} xs={12} md={6}>
                                                <Info
                                                    icon={<Person sx={{color: grey[600]}}/>}
                                                    title="City"
                                                    value={authData?.address?.city}
                                                />
                                            </Grid>
                                            <Grid item={true} xs={12} md={6}>
                                                <Info
                                                    icon={<Person sx={{color: grey[600]}}/>}
                                                    title="Address Line 1"
                                                    value={authData?.address?.addressLine1}
                                                />
                                            </Grid>
                                            {authData?.address?.addressLine2 && (
                                                <Grid item={true} xs={12} md={6}>
                                                    <Info
                                                        icon={<Person sx={{color: grey[600]}}/>}
                                                        title="Address Line 2"
                                                        value={authData?.address?.addressLine2}
                                                    />
                                                </Grid>
                                            )}
                                        </Grid>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Layout>
    )
}

export default ProfilePage;
