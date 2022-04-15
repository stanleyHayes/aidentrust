import {Box, SwipeableDrawer} from "@mui/material";
import DesktopDrawer from "../drawers/desktop-drawer";
import MobileDrawer from "../drawers/mobile-drawer";
import {useDispatch, useSelector} from "react-redux";
import {selectUI} from "../../redux/ui/ui-reducer";
import UI_ACTION_CREATORS from "../../redux/ui/ui-action-creators";
import Header from "../headers/header";

const Layout = ({children}) => {

    const {drawerOpen} = useSelector(selectUI);
    const dispatch = useDispatch();

    return (
        <Box>
            <Box sx={{display: 'flex', maxWidth: '100vw'}}>
                <Box
                    sx={{
                        flexBasis: {
                            xs: '0%',
                            sm: '0%',
                            md: '25%',
                            lg: '15%'
                        },
                        marginTop: 5,
                        backgroundColor: 'background.paper',
                        display: {xs: "none", md: "block"}
                    }}>
                    <DesktopDrawer/>
                </Box>
                <Box
                    sx={{
                        flexGrow: 1,
                        backgroundColor: "background.default",
                        maxWidth: '100%',
                        paddingTop: 12,
                        paddingBottom: 12,
                        maxHeight: '100vh',
                        overflowY: 'scroll',
                }}>
                    <Header />
                    {children}
                </Box>
            </Box>

            <SwipeableDrawer
                open={drawerOpen}
                onClose={() => dispatch(UI_ACTION_CREATORS.closeDrawer())}
                onOpen={() => dispatch(UI_ACTION_CREATORS.openDrawer())}>
                <MobileDrawer/>
            </SwipeableDrawer>
        </Box>


    )
}

export default Layout;
