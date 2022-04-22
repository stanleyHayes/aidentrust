import {Box, Button, Card, CardContent, Container, Divider, Grid, Typography} from "@mui/material";
import {ChevronLeft, ChevronRight} from "@mui/icons-material";
import {useDispatch} from "react-redux";
import {REQUEST_ACTION_CREATORS} from "../../redux/requests/request-action-creators";

const SignUpInstructions = () => {

    const dispatch = useDispatch();

    return (
        <Box>
            <Container>
                <Card elevation={0} variant="elevation">
                    <CardContent>
                        <Typography variant="h5" align="center">Instructions</Typography>

                        <Divider sx={{my: 3}} variant="fullWidth" light={true}/>

                        <Box mb={4}>
                            <Typography mb={2} variant="body1">
                                Follow these instructions carefully
                            </Typography>
                            <Typography
                                sx={{color: 'primary'}}
                                mb={2}
                                variant="body1">
                                Send the amount specified in the invitation email to one of the following Mobile Money
                                Accounts
                            </Typography>

                            <Typography
                                sx={{color: 'primary.main'}}
                                fontWeight={700} mb={2}
                                variant="body2">
                                MTN Momo - +233555180048 - Stanley Asoku Hayford
                            </Typography>
                            <Typography
                                sx={{color: 'primary.main'}}
                                fontWeight={700} mb={2}
                                variant="body2">
                                AirtelTigo - +233270048319 - Stanley Asoku Hayford
                            </Typography>
                            <Typography
                                sx={{color: 'primary.main'}}
                                fontWeight={700} mb={2}
                                variant="body2">
                                Vodafone Cash - +233502595892 - Stanley Asoku Hayford
                            </Typography>

                            <Typography mb={1} variant="body2">
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
                                    variant="contained">Next</Button>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Container>
        </Box>
    )
}

export default SignUpInstructions;
