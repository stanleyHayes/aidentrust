import {Avatar, Badge, Button, Container, Grid, Menu, MenuItem, Stack, Toolbar, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {Link} from "react-router-dom";
import {KeyboardArrowDown, Notifications} from "@mui/icons-material";
import {useState} from "react";
import Feint from "../shared/feint";
import {green} from "@mui/material/colors";

const DesktopHeader = () => {

    const useStyles = makeStyles(() => {
        return {
            link: {
                textDecoration: 'none'
            },
            dropDownLink: {
                textDecoration: 'none',
                display: 'block',
                width: '100%'
            }
        }
    });

    const classes = useStyles();

    const [menuOpen, setMenuOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuClick = event => {
        setMenuOpen(true);
        setAnchorEl(event.currentTarget);
    }

    const handleMenuClose = () => {
        setMenuOpen(false);
        setAnchorEl(null);
    }

    return (
        <Toolbar
            variant="regular">
            <Container>
                <Grid container={true} alignItems="center" justifyContent="space-around">
                    <Grid item={true} lg={3}>

                    </Grid>

                    <Grid alignItems="center" container={true} lg={9} spacing={2} justifyContent="flex-end">
                        <Grid item={true}>
                            <Stack spacing={3} direction="row" alignItems="center">
                                <Badge badgeContent={5} color="primary" variant="dot">
                                    <Feint
                                        color="green"
                                        children={
                                            <Notifications
                                                sx={{color: green[600]}}/>
                                        }/>
                                </Badge>

                                <Avatar
                                    sx={{backgroundColor: 'primary.main'}}
                                    src="/assets/images/profile.jpg"
                                    variant="rounded"
                                />

                                <Typography sx={{fontWeight: 'bold'}} variant="body2">{"Stanley Hayford"}</Typography>

                                <Feint
                                    color="green"
                                    children={
                                        <KeyboardArrowDown
                                            sx={{color: green[600]}}
                                            onClick={handleMenuClick} color="primary"/>
                                    }/>
                                <Menu open={menuOpen} onClose={handleMenuClose} anchorEl={anchorEl}>
                                    <MenuItem>
                                        <Link to="/account/profile" className={classes.dropDownLink}>
                                            <Button variant="text" size="large">Profile</Button>
                                        </Link>
                                    </MenuItem>
                                </Menu>
                            </Stack>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Toolbar>
    )
}

export default DesktopHeader
