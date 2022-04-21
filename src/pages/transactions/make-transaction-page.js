import Layout from "../../components/layout/layout";
import {Container, Divider, Grid, Typography} from "@mui/material";

const MakeTransactionPage = () => {
    return (
        <Layout>
            <Container>
                <Grid
                    container={true}
                    justifyContent="space-between"
                    spacing={2}>
                    <Grid item={true} xs={12} md="auto">
                        <Typography variant="h4">
                            Make Transfer
                        </Typography>
                    </Grid>
                </Grid>

                <Divider light={true} variant="fullWidth" sx={{my: 4}}/>

            </Container>
        </Layout>
    )
}

export default MakeTransactionPage;
