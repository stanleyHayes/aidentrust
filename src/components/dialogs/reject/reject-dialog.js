import {Button, Dialog, DialogActions, DialogContent, Divider, Grid, Stack, Typography} from "@mui/material";
import {Warning} from "@mui/icons-material";

const RejectDialog = ({open, handleClose, handleDelete, message}) => {
    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogContent>
                <Stack direction="row" mb={2} justifyContent="center">
                    <Warning sx={{fontSize: 36}} color="warning"/>
                </Stack>
                <Typography mb={2} variant="h5" align="center">
                    Caution
                </Typography>
                <Typography align="center" variant="body2">
                    {message}
                </Typography>
            </DialogContent>
            <Divider variant="fullWidth" light={true} />
            <DialogActions>
                <Grid container={true} spacing={2}>
                    <Grid item={true} xs={6}>
                        <Button onClick={handleClose} variant="text" size="large" fullWidth={true}>
                            Cancel
                        </Button>
                    </Grid>
                    <Grid item={true} xs={6}>
                        <Button onClick={handleDelete} color="error" variant="text" size="large" fullWidth={true}>
                            Delete
                        </Button>
                    </Grid>
                </Grid>
            </DialogActions>
        </Dialog>
    )
}

export default RejectDialog;
