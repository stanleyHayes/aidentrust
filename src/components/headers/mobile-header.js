import {Button, Grid, MenuItem, Toolbar, Typography} from "@mui/material";
import {KeyboardArrowDown, Menu} from "@mui/icons-material";
import {Link} from "react-router-dom";
import {makeStyles} from "@mui/styles";
import {useDispatch} from "react-redux";
import UI_ACTION_CREATORS from "../../redux/ui/ui-action-creators";
import Feint from "../shared/feint";
import { purple} from "@mui/material/colors";
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
            <Grid container={true} alignItems="center" spacing={2}>
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
                                color: 'primary.main', fontFamily: 'Chakra Petch'
                            }}
                            variant="h6">
                            Aiden Trust
                        </Typography>
                    </Link>
                </Grid>
                <Grid item={true}>
                    <Feint
                        color="purple"
                        children={
                            <KeyboardArrowDown
                                sx={{color: purple[600]}}
                                onClick={handleMenuClick} color="primary"/>
                        }/>
                    <Menu
                        elevation={1}
                        open={menuOpen}
                        onClose={handleMenuClose}
                        anchorEl={anchorEl}>
                        <MenuItem>
                            <Link to="/account/profile" className={classes.dropDownLink}>
                                <Button
                                    variant="text"
                                    size="small">
                                    Profile
                                </Button>
                            </Link>
                        </MenuItem>
                    </Menu>
                </Grid>
            </Grid>
        </Toolbar>
    )
}

export default MobileHeader
