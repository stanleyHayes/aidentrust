import React from "react";
import {AppBar, Hidden} from "@mui/material";
import MobileHeader from "./mobile-header";
import DesktopHeader from "./desktop-header";

const Header = () => {

    return (
        <React.Fragment>
            <AppBar
                variant="outlined"
                sx={{backgroundColor: 'white'}}>
                <Hidden mdUp={true}>
                    <MobileHeader/>
                </Hidden>
                <Hidden mdDown={true}>
                    <DesktopHeader/>
                </Hidden>
            </AppBar>
        </React.Fragment>
    )
}

export default Header;
