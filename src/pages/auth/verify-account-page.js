import {
    Button,
    Card,
    CardContent, Container,
    Grid,
    Typography
} from "@mui/material";

const VerifyAccountPage = () => {
    return (
        <Container>
            <Grid container={true} justifyContent="center">
                <Grid item={true} xs={12} md={6} lg={4}>
                    <Card elevation={1} variant="elevation">
                        <CardContent>

                            <Typography
                                sx={{color: 'primary.main', fontWeight: 'bold'}}
                                gutterBottom={true}
                                align="center"
                                variant="h3">
                                Aiden Trust
                            </Typography>
                            <Typography gutterBottom={true} align="center" variant="h6">
                                Reset Password
                            </Typography>
                            <Typography gutterBottom={true} align="center" variant="body2">
                                Set a strong password to protect your data
                            </Typography>

                            <Button
                                sx={{
                                    backgroundColor: 'primary.main',
                                    color: 'white',
                                    '&:hover': {
                                        color: 'primary.main'
                                    },
                                    '&:focus': {
                                        color: 'primary.main'
                                    },
                                    '&:active': {
                                        color: 'primary.main'
                                    }
                                }}
                                size="large"
                                fullWidth={true}
                                variant="outlined">
                                Reset Password
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    )
}

export default VerifyAccountPage;
