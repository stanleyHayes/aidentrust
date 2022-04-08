import React from "react";
import {AppBar, Hidden} from "@mui/material";
import MobileHeader from "./mobile-header";
import DesktopHeader from "./desktop-header";

const Header = () => {

    return (
        <React.Fragment>
            <AppBar variant="elevation" elevation={0} color="primary">
                <Hidden mdUp={true}>
                    <MobileHeader/>
                </Hidden>
            </AppBar>
            <Hidden mdDown={true}>
                <DesktopHeader/>
            </Hidden>
        </React.Fragment>
    )
}

export default Header;
