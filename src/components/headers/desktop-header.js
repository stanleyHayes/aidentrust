import {Avatar, Badge, Button, Container, Grid, Menu, MenuItem, Stack, Toolbar, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {Link} from "react-router-dom";
import {KeyboardArrowDown, Notifications} from "@mui/icons-material";
import {useState} from "react";
import Feint from "../shared/feint";
import {grey, purple} from "@mui/material/colors";

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
                        <Typography
                            sx={{
                                color: 'primary.main',
                                pl: 4,
                                fontWeight: 400,
                            }} fontWeight="normal" variant="h4">
                            Aiden Trust
                        </Typography>
                    </Grid>

                    <Grid alignItems="center" container={true} lg={9} spacing={2} justifyContent="flex-end">
                        <Grid item={true}>
                            <Stack spacing={3} direction="row" alignItems="center">
                                <Badge badgeContent={5} color="primary" variant="dot">
                                    <Feint
                                        color="purple"
                                        children={
                                            <Notifications
                                                sx={{color: purple[600]}}/>
                                        }/>
                                </Badge>

                                <Avatar
                                    sx={{backgroundColor: 'primary.main'}}
                                    src="/assets/images/profile.jpg"
                                    variant="rounded"
                                />

                                <Typography
                                    sx={{fontWeight: 'bold', color: purple[600]}}
                                    variant="body2">
                                    {"Stanley Hayford"}
                                </Typography>

                                <Feint
                                    color="purple"
                                    children={
                                        <KeyboardArrowDown
                                            sx={{color: purple[600], cursor: 'pointer'}}
                                            onClick={handleMenuClick} color="primary"/>
                                    }/>
                                <Menu
                                    elevation={1}
                                    open={menuOpen}
                                    onClose={handleMenuClose}
                                    anchorEl={anchorEl}>
                                    <MenuItem>
                                        <Link to="/profile" className={classes.dropDownLink}>
                                            <Button
                                                fullWidth={true}
                                                sx={{color: grey[600]}}
                                                variant="text"
                                                size="small">
                                                Profile
                                            </Button>
                                        </Link>
                                    </MenuItem>
                                    <MenuItem>
                                        <Link to="/about-us" className={classes.dropDownLink}>
                                            <Button
                                                fullWidth={true}
                                                sx={{color: grey[600]}}
                                                variant="text"
                                                size="small">
                                                About Us
                                            </Button>
                                        </Link>
                                    </MenuItem>
                                    <MenuItem>
                                        <Link to="/privacy" className={classes.dropDownLink}>
                                            <Button
                                                fullWidth={true}
                                                sx={{color: grey[600]}}
                                                variant="text"
                                                size="small">
                                                Privacy Policy
                                            </Button>
                                        </Link>
                                    </MenuItem>
                                    <MenuItem>
                                        <Link to="/terms" className={classes.dropDownLink}>
                                            <Button
                                                fullWidth={true}
                                                sx={{color: grey[600]}}
                                                variant="text"
                                                size="small">
                                                Terms
                                            </Button>
                                        </Link>
                                    </MenuItem>
                                    <MenuItem>
                                        <Link to="/contact" className={classes.dropDownLink}>
                                            <Button
                                                fullWidth={true}
                                                sx={{color: grey[600]}}
                                                variant="text"
                                                size="small">
                                                Contact Us
                                            </Button>
                                        </Link>
                                    </MenuItem>
                                    <MenuItem>
                                        <Link to="/faq" className={classes.dropDownLink}>
                                            <Button
                                                fullWidth={true}
                                                sx={{color: grey[600]}}
                                                variant="text"
                                                size="small">
                                                FAQ
                                            </Button>
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
