import {Button} from "@mui/material";
import {useNavigate} from "react-router";
import {useDispatch} from "react-redux";
import UI_ACTION_CREATORS from "../../redux/ui/ui-action-creators";
import {green, grey} from "@mui/material/colors";
import {makeStyles} from "@mui/styles";

const SidebarLink = ({active, path, label, icon}) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(path);
        dispatch(UI_ACTION_CREATORS.changeURL(path));
        dispatch(UI_ACTION_CREATORS.closeDrawer());
    }

    const useStyles = makeStyles(theme => {
        return {
            button: {
                borderRightWidth: active ? 3 : 0,
                borderRightStyle: active ? 'solid' : 'none',
                borderRightColor: active ? "primary.main" : 'none',
                backgroundColor: active ? green[50] : 'none',
                color: active ? green[600] : grey[700],
                fontWeight: active ? 'bolder' : 'normal',
                borderRadius: 0,
                justifyContent: 'flex-start',
                textTransform: 'capitalize',
                fontSize: 14,
                paddingLeft: 30,
                paddingTop: 8,
                paddingBottom: 8,
            }
        }
    })

    const classes = useStyles();

    return (
        <Button
            sx={{
                borderRightWidth: active ? 3 : 0,
                borderRightStyle: active ? 'solid' : 'none',
                borderRightColor: active ? "primary.main" : 'none',
                backgroundColor: active ? green[50] : 'none',
                color: active ? green[600] : grey[600],
                fontWeight: active ? 'bolder' : 'normal',
                borderRadius: 0,
                justifyContent: 'flex-start',
                textTransform: 'capitalize',
                fontSize: 14,
                paddingLeft: 4,
                paddingTop: 1,
                paddingBottom: 1,
            }}
            startIcon={icon}
            className={classes.button}
            variant="text"
            size="medium"
            fullWidth={true}
            onClick={handleClick}>
            {label}
        </Button>
    )
}

export default SidebarLink;
