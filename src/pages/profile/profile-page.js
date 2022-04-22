import Layout from "../../components/layout/layout";
import {Avatar, Button, Card, CardContent, Container, Divider, Grid, Stack, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {Call, Contacts, Edit, Mail, Male, Map, Person} from "@mui/icons-material";
import {grey, purple} from "@mui/material/colors";
import Info from "../../components/shared/info";
import {Link} from "react-router-dom";

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

    return (
        <Layout>
            <Container className={classes.container}>
                <Grid alignItems="center" justifyContent="space-between" container={true}>
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
                                    '&:hover':{
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
                                        src="/assets/images/profile.jpg"
                                    />
                                </Stack>
                                <Typography
                                    mb={1}
                                    variant="body1"
                                    align="center">
                                    Stanley Hayford
                                </Typography>
                                <Typography
                                    mb={1}
                                    variant="body2"
                                    align="center">
                                    Active
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
                                        Account Details
                                    </Button>
                                </Stack>

                                <Divider light={true} sx={{my: 1}} variant="middle"/>

                                <Stack
                                    divider={<Divider light={true} variant="middle"/>}
                                    direction="column">
                                    <Info
                                        icon={<Person sx={{color: grey[600]}}/>}
                                        title="Account holding name"
                                        value="Stanley Hayford"

                                    />
                                    <Info
                                        icon={<Person sx={{color: grey[600]}}/>}
                                        title="Account Number"
                                        value="08511244783"

                                    />
                                    <Info
                                        icon={<Person sx={{color: grey[600]}}/>}
                                        title="Account Usage"
                                        value="Business"
                                    />
                                    <Info
                                        icon={<Person sx={{color: grey[600]}}/>}
                                        title="Account Type"
                                        value="Savings"

                                    />
                                    <Info
                                        icon={<Person sx={{color: grey[600]}}/>}
                                        title="Balance"
                                        value="$1,200,000.00"
                                    />
                                    <Info
                                        icon={<Person sx={{color: grey[600]}}/>}
                                        title="Status"
                                        value="Active"

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
                                                    value="Stanley"

                                                />
                                            </Grid>
                                            <Grid item={true} xs={12} md={6}>
                                                <Info
                                                    icon={<Person sx={{color: grey[600]}}/>}
                                                    title="Surname"
                                                    value="Hayford"

                                                />
                                            </Grid>
                                            <Grid item={true} xs={12} md={6}>
                                                <Info
                                                    icon={<Male sx={{color: grey[600]}}/>}
                                                    title="Gender"
                                                    value="Male"
                                                />
                                            </Grid>
                                            <Grid item={true} xs={12} md={6}>
                                                <Info
                                                    icon={<Person sx={{color: grey[600]}}/>}
                                                    title="Username"
                                                    value="sahayford"

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
                                                    value="dev.stanley.hayford@gmail.com"

                                                />
                                            </Grid>
                                            <Grid item={true} xs={12} md={6}>
                                                <Info
                                                    icon={<Call sx={{color: grey[600]}}/>}
                                                    title="Phone"
                                                    value="+2332 7004 8319"

                                                />
                                            </Grid>
                                            <Grid item={true} xs={12} md={6}>
                                                <Info
                                                    icon={<Call sx={{color: grey[600]}}/>}
                                                    title="Emergency Phone"
                                                    value="+2335 5518 0048"
                                                />
                                            </Grid>
                                            <Grid item={true} xs={12} md={6}>
                                                <Info
                                                    icon={<Person sx={{color: grey[600]}}/>}
                                                    title="Username"
                                                    value="sahayford"

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
                                                    value="USA"

                                                />
                                            </Grid>
                                            <Grid item={true} xs={12} md={6}>
                                                <Info
                                                    icon={<Person sx={{color: grey[600]}}/>}
                                                    title="State"
                                                    value="New York"

                                                />
                                            </Grid>
                                            <Grid item={true} xs={12} md={6}>
                                                <Info
                                                    icon={<Person sx={{color: grey[600]}}/>}
                                                    title="City"
                                                    value="Bronx"
                                                />
                                            </Grid>
                                            <Grid item={true} xs={12} md={6}>
                                                <Info
                                                    icon={<Person sx={{color: grey[600]}}/>}
                                                    title="Address"
                                                    value="468 street"
                                                />
                                            </Grid>
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
