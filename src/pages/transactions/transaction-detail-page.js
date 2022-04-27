import Layout from "../../components/layout/layout";
import {Box, Button, Container, Divider, Grid, LinearProgress, Typography} from "@mui/material";
import {Alert, AlertTitle} from "@mui/lab";
import {useDispatch, useSelector} from "react-redux";
import {selectTransaction} from "../../redux/transactions/transaction-reducer";
import {useEffect} from "react";
import {selectAuth} from "../../redux/auth/auth-reducer";
import {TRANSACTION_ACTION_CREATORS} from "../../redux/transactions/transaction-action-creators";
import {useParams} from "react-router";

const TransactionDetailPage = () => {

    const {transactionDetail, transactionError, transactionLoading} = useSelector(selectTransaction);
    const dispatch = useDispatch();
    const {transactionID} = useParams();

    const {token} = useSelector(selectAuth);
    useEffect(() => {
        dispatch(TRANSACTION_ACTION_CREATORS.getTransaction(transactionID, token));
    }, []);

    return (
        <Layout>
            <Box sx={{pt: 8.3}}>
                {transactionLoading && <LinearProgress color="primary" variant="query"/>}
                <Container sx={{py: 12}}>
                    {transactionError && (<Alert severity="error" variant="standard">
                        <AlertTitle>Error</AlertTitle>
                        <Typography variant="h6" align="center">
                            {transactionError}
                        </Typography>
                    </Alert>)
                    }
                    <Grid
                        mb={2}
                        spacing={2}
                        container={true}
                        justifyContent="space-between"
                        alignItems="center">
                        <Grid item={true} xs={12} md="auto">
                            <Typography variant="h4">Transaction Detail</Typography>
                        </Grid>
                        <Grid item={true} xs={12} md="auto">
                            <Button
                                fullWidth={true}
                                variant="outlined"
                                size="medium"
                                sx={{
                                    backgroundColor: 'primary.main',
                                    textTransform: 'capitalize',
                                    fontWeight: 'bold',
                                    color: 'white',
                                    '&:hover': {
                                        color: 'primary.main'
                                    }
                                }}>
                                Back
                            </Button>
                        </Grid>
                    </Grid>


                    <Divider light={true} variant="fullWidth" sx={{my: 4}}/>

                    {transactionDetail && transactionDetail.type === '' ? (
                        <Box></Box>
                    ) : transactionDetail.type === '' ? (
                        <Box></Box>
                    ) : transactionDetail.type === '' ? (
                        <Box></Box>
                    ) : (
                        <Box></Box>
                    )}
                </Container>
            </Box>
        </Layout>
    )
}

export default TransactionDetailPage;
