import {
    Box,
    Button,
    Card,
    CardContent,
    Container,
    Divider,
    Grid,
    Stack,
    TextField,
    Typography
} from "@mui/material";
import {ChevronLeft, ChevronRight} from "@mui/icons-material";
import {REQUEST_ACTION_CREATORS} from "../../redux/requests/request-action-creators";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectRequest} from "../../redux/requests/request-reducer";

const AddressInfoForm = () => {

    const {addressInfo} = useSelector(selectRequest);

    const [error, setError] = useState({});
    const [address, setAddress] = useState({...addressInfo});
    const dispatch = useDispatch();
    const {
        addressLine1,
        addressLine2,
        city,
        country,
        state,
    } = address;

    const handleClick = () => {
        if(!country){
            setError({error, country: 'Field required'});
            return;
        }else{
            setError({error, country: null});
        }

        if(!state){
            setError({error, state: 'Field required'});
            return;
        }else{
            setError({error, state: null});
        }

        if(!city){
            setError({error, city: 'Field required'});
            return;
        }else{
            setError({error, city: null});
        }

        if(!addressLine1){
            setError({error, addressLine1: 'Field required'});
            return;
        }else{
            setError({error, addressLine1: null});
        }

        dispatch(REQUEST_ACTION_CREATORS.saveAddressInfo(address));
        dispatch(REQUEST_ACTION_CREATORS.nextPage());
    }

    const handleChange = event => {
        setAddress({...address, [event.target.name]: event.target.value});
    }


    return (
        <Box>
            <Container>
                <Card elevation={0} variant="elevation">
                    <CardContent>
                        <Typography variant="h5" align="center">Address Information</Typography>

                        <Divider sx={{my: 3}} variant="fullWidth" light={true}/>

                        <Stack my={3} spacing={2} direction="column">

                            <TextField
                                label="Country"
                                fullWidth={true}
                                name="country"
                                required={true}
                                variant="outlined"
                                value={country}
                                error={Boolean(error.country)}
                                helperText={error.country}
                                type="text"
                                color="primary"
                                placeholder="Enter country"
                                size="medium"
                                onChange={handleChange}
                            />

                            <TextField
                                label="State"
                                fullWidth={true}
                                name="state"
                                required={true}
                                variant="outlined"
                                value={state}
                                error={Boolean(error.state)}
                                helperText={error.state}
                                type="text"
                                color="primary"
                                placeholder="Enter state"
                                size="medium"
                                onChange={handleChange}
                            />

                            <TextField
                                label="City"
                                fullWidth={true}
                                name="city"
                                required={true}
                                variant="outlined"
                                value={city}
                                error={Boolean(error.city)}
                                helperText={error.city}
                                type="text"
                                color="primary"
                                placeholder="Enter city"
                                size="medium"
                                onChange={handleChange}
                            />

                            <TextField
                                label="Address Line 1"
                                fullWidth={true}
                                name="addressLine1"
                                required={true}
                                variant="outlined"
                                value={addressLine1}
                                error={Boolean(error.addressLine1)}
                                helperText={error.addressLine1}
                                type="text"
                                color="primary"
                                placeholder="Address line 1"
                                size="medium"
                                multiline={true}
                                minRows={2}
                                onChange={handleChange}
                            />

                            <TextField
                                label="Address Line 2"
                                fullWidth={true}
                                name="addressLine2"
                                required={true}
                                variant="outlined"
                                minRows={2}
                                value={addressLine2}
                                error={Boolean(error.addressLine2)}
                                helperText={error.addressLine2}
                                type="text"
                                color="primary"
                                placeholder="Enter address line 2"
                                size="medium"
                                multiline={true}
                                onChange={handleChange}
                            />
                        </Stack>

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
                                    onClick={handleClick}
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

export default AddressInfoForm;
