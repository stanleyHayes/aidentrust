import {Button, Grid, MenuItem, Toolbar, Typography, Menu as MenuComponent} from "@mui/material";
import {KeyboardArrowDown, Menu} from "@mui/icons-material";
import {Link} from "react-router-dom";
import {makeStyles} from "@mui/styles";
import {useDispatch} from "react-redux";
import UI_ACTION_CREATORS from "../../redux/ui/ui-action-creators";
import Feint from "../shared/feint";
import {grey, purple} from "@mui/material/colors";
import {useState} from "react";

const MobileHeader = () => {

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
    const dispatch = useDispatch();

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
        <Toolbar variant="regular" sx={{color: '#ffffff'}}>
            <Grid container={true} alignItems="center" justifyContent="space-between">
                <Grid item={true}>
                    <Feint
                        children={
                            <Menu
                                sx={{color: purple[600]}}
                                onClick={() => dispatch(UI_ACTION_CREATORS.openDrawer())}/>}
                        padding={0.4}
                        color="purple"/>

                </Grid>
                <Grid item={true}>
                    <Link to="/" className={classes.link}>
                        <Typography
                            sx={{
                                color: 'primary.main',
                                fontWeight: 700,
                                fontSmooth: "large",
                                fontSizeAdjust: "from-front"
                            }}
                            variant="h5">
                            Aiden Trust
                        </Typography>
                    </Link>
                </Grid>
                <Grid item={true}>
                    <Feint
                        padding={0.4}
                        color="purple"
                        children={
                            <KeyboardArrowDown
                                sx={{color: purple[600]}}
                                onClick={handleMenuClick} color="primary"/>
                        }/>
                    <MenuComponent
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
                                        justifyContent: 'flex-start'
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
                                        justifyContent: 'flex-start'
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
                                        justifyContent: 'flex-start'
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
                                        justifyContent: 'flex-start'
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
                                        justifyContent: 'flex-start'
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
                                        justifyContent: 'flex-start'
                                    }}
                                    variant="text"
                                    size="small">
                                    FAQ
                                </Button>
                            </Link>
                        </MenuItem>
                    </MenuComponent>
                </Grid>
            </Grid>
        </Toolbar>
    )
}

export default MobileHeader
