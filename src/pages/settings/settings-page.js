import Layout from "../../components/layout/layout";
import {Button, Container, Divider, Grid, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";
import Feint from "../../components/shared/feint";
import {Edit} from "@mui/icons-material";
import {purple} from "@mui/material/colors";

import {Link} from "react-router-dom";

const SettingsPage = () => {

    const useStyles = makeStyles(theme => {
        return {
            container: {
                paddingTop: 16,
                paddingBottom: 16
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
                                    borderWidth: 2
                                }}
                                startIcon={
                                    <Feint
                                        padding={0.1}
                                        color="purple"
                                        children={<Edit fontSize="small" sx={{color: purple[600]}}/>}/>}
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
                
            </Container>
        </Layout>
    )
}

export default SettingsPage;
