import Layout from "../../components/layout/layout";
import { Container, Divider, Grid, Typography} from "@mui/material";

import {makeStyles} from "@mui/styles";

const AboutPage = () => {

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
                </Grid>

                <Divider light={true} sx={{my: 4}}/>
            </Container>
        </Layout>
    )
}

export default AboutPage;
