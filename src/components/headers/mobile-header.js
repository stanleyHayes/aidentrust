import {Grid, Toolbar, Typography} from "@mui/material";
import {Menu} from "@mui/icons-material";
import {Link} from "react-router-dom";
import {makeStyles} from "@mui/styles";
import {useDispatch} from "react-redux";
import UI_ACTION_CREATORS from "../../redux/ui/ui-action-creators";
import Feint from "../shared/feint";
import {green} from "@mui/material/colors";

const MobileHeader = () => {

    const useStyles = makeStyles(() => {
        return {
            link: {
                textDecoration: 'none'
            }
        }
    });

    const classes = useStyles();
    const dispatch = useDispatch();

    return (
        <Toolbar variant="regular" sx={{color: '#ffffff'}}>
            <Grid container={true} alignItems="center" spacing={2}>
                <Grid item={true}>
                    <Feint
                        children={
                            <Menu
                                sx={{color: green[600]}}
                                onClick={() => dispatch(UI_ACTION_CREATORS.openDrawer())}/>}
                        padding={0.4}
                        color="green"/>

                </Grid>
                <Grid item={true}>
                    <Link to="/" className={classes.link}>
                        <Typography
                            sx={{
                                color: 'white', fontFamily: 'Chakra Petch'
                            }}
                            variant="h6">
                            Aiden Trust
                        </Typography>
                    </Link>
                </Grid>
            </Grid>
        </Toolbar>
    )
}

export default MobileHeader
