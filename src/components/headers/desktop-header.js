import {Avatar, Badge, Button, Container, Grid, Menu, MenuItem, Stack, Toolbar, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {Link} from "react-router-dom";
import {KeyboardArrowDown, Notifications} from "@mui/icons-material";
import {useState} from "react";
import Feint from "../shared/feint";
import {grey, purple} from "@mui/material/colors";
import {useSelector} from "react-redux";
import {selectAuth} from "../../redux/auth/auth-reducer";
import {UTILS} from "../../utils/constants/utils";
import logoWithName from "./../../assets/images/logoWithName.jpeg";

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

    const {authData} = useSelector(selectAuth);

    return (
        <Toolbar
            variant="regular">
            <Container maxWidth="xl">
                <Grid container={true} alignItems="center" justifyContent="space-around">
                    <Grid item={true} lg={4}>
                        <Stack direction="row" alignItems="center" spacing={2}>
                            <img src={logoWithName} alt="Aideen Trust logo"
                                 style={{width: 250, height: 'auto', objectFit: 'cover', objectPosition: 'center'}}/>
                        </Stack>
                    </Grid>
                    <Grid
                        alignItems="center"
                        container={true}
                        lg={8}
                        spacing={2}
                        justifyContent="flex-end">
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
                                    sx={{backgroundColor: purple[100]}}
                                    variant="rounded">
                                    <Typography variant="h5" sx={{color: 'primary.main'}}>
                                        {authData && UTILS.getInitials(`${authData?.firstName} ${authData?.lastName}`)}
                                    </Typography>
                                </Avatar>

                                <Typography
                                    sx={{color: grey[600]}}
                                    variant="body1">
                                    {`${authData?.firstName} ${authData?.lastName}`}
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
                                                sx={{
                                                    color: grey[600],
                                                    textTransform: 'capitalize',
                                                    justifyContent: 'flex-start',
                                                }}
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
                                                sx={{
                                                    color: grey[600],
                                                    textTransform: 'capitalize',
                                                    justifyContent: 'flex-start',
                                                }}
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
                                                sx={{
                                                    color: grey[600],
                                                    textTransform: 'capitalize',
                                                    justifyContent: 'flex-start',
                                                }}
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
                                                sx={{
                                                    color: grey[600],
                                                    textTransform: 'capitalize',
                                                    justifyContent: 'flex-start',
                                                }}
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
                                                sx={{
                                                    color: grey[600],
                                                    textTransform: 'capitalize',
                                                    justifyContent: 'flex-start',
                                                }}
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
                                                sx={{
                                                    color: grey[600],
                                                    textTransform: 'capitalize',
                                                    justifyContent: 'flex-start',
                                                }}
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
