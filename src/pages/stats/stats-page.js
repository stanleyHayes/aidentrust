import Layout from "../../components/layout/layout";
import {Button, Card, CardContent, Container, Divider, Grid, Typography} from "@mui/material";
import {green, grey, purple} from "@mui/material/colors";
import Feint from "../../components/shared/feint";
import {Edit} from "@mui/icons-material";
import {makeStyles} from "@mui/styles";

const StatsPage = () => {

    const useStyles = makeStyles(theme => {
        return {
            container: {
                paddingTop: 8,
                paddingBottom: 8
            }
        }
    });

    const classes = useStyles();

    return (
        <Layout>
            <Container className={classes.container}>
                <Grid alignItems="center" justifyContent="space-between" container={true}>
                    <Grid item={true} xs={12} md="auto">
                        <Typography variant="h4">Activities</Typography>
                    </Grid>
                </Grid>

                <Divider light={true} sx={{my: 4}}/>

                <Card elevation={0} sx={{mb: 4}}>
                    <CardContent>
                        <Typography variant="h6">Income</Typography>
                        <Divider light={true} sx={{my: 2}}/>

                    </CardContent>
                </Card>

                <Card elevation={0} sx={{mb: 4}}>
                    <CardContent>
                        <Typography variant="h6">Spending</Typography>
                        <Divider light={true} sx={{my: 2}}/>

                    </CardContent>
                </Card>

            </Container>
        </Layout>
    )
}

export default StatsPage;
