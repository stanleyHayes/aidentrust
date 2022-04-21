import {Box, Button, Card, CardContent, Container, Divider, Grid, Typography} from "@mui/material";
import {ChevronLeft, ChevronRight} from "@mui/icons-material";
import {useDispatch} from "react-redux";
import {REQUEST_ACTION_CREATORS} from "../../redux/requests/request-action-creators";

const SignUpInstructions = () => {

    const dispatch = useDispatch();

    return (
        <Box>
            <Container>
                <Card elevation={1} variant="elevation">
                    <CardContent>
                        <Typography variant="h4" align="center">Instructions</Typography>

                        <Divider sx={{my: 2}} variant="fullWidth" light={true}/>

                        <Box mb={4}>
                            <Typography mb={1} variant="h6" align="center">
                                Follow these instructions carefully
                            </Typography>
                            <Typography sx={{color: 'primary.main'}} fontWeight={700} mb={2} variant="body2"
                                        align="center">
                                Send 3000GHS to the Momo Account +233270048319 or +233555180048 or +233502595892
                            </Typography>
                            <Typography sx={{color: 'primary.main'}} fontWeight={700} mb={2} variant="body2"
                                        align="center">
                                The name associated with the accounts are Stanley Asoku Hayford
                            </Typography>
                            <Typography mb={1} variant="body2" align="center">
                                Fill in the information correctly and wait for confirmation email and text message.
                            </Typography>
                        </Box>

                        <Grid container={true} spacing={1} alignItems="center">
                            <Grid item={true} xs={12} md={6}>
                                <Button
                                    sx={{
                                        textTransform: 'capitalize',
                                        color: 'primary.main',
                                        fontWeight: 'bold',
                                        backgroundColor: 'secondary.main',
                                        '&:hover': {
                                            borderColor: 'secondary.light',
                                            backgroundColor: 'secondary.dark',
                                            borderWidth: 2,
                                        }
                                    }}
                                    size="large"
                                    startIcon={<ChevronLeft color="primary"/>}
                                    fullWidth={true}
                                    disabled={true}
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
                                    onClick={() => dispatch(REQUEST_ACTION_CREATORS.nextPage())}
                                    endIcon={<ChevronRight color="secondary"/>}
                                    variant="outlined">Next</Button>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Container>
        </Box>
    )
}

export default SignUpInstructions;
