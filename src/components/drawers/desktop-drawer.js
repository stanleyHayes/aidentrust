import {Box, Button, Stack, Typography} from "@mui/material";
import SidebarLink from "../shared/sidebar-link";
import {useLocation} from "react-router";
import {
    AccountBalance,
    AccountBalanceOutlined,
    CompareArrows,
    CompareArrowsOutlined,
    CreditCard,
    CreditCardOutlined,
    Home,
    HomeOutlined,
    Logout,
    Settings,
    SettingsOutlined,
    VerifiedUser,
    VerifiedUserOutlined
} from "@mui/icons-material";
import {green, grey, purple} from "@mui/material/colors";
import {makeStyles} from "@mui/styles";

const DesktopDrawer = () => {

    const {pathname} = useLocation();

    const useStyles = makeStyles(theme => {
        return {
            inactive: {
                color: 'text.secondary',
                backgroundColor: grey[200],
                padding: 5,
                borderRadius: 4
            },
            active: {
                color: 'text.primary',
                backgroundColor: purple[100],
                padding: 5,
                borderRadius: 4
            }
        }
    });

    const classes = useStyles();

    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                pt: 2,
                width: '100%'
            }}>
            <Box sx={{flex: 1}}>
                <Stack mb={2} direction="column">
                    <Typography
                        sx={{
                            color: 'primary.main',
                            pl: 4,
                            fontWeight: 400,
                        }} fontWeight="normal" variant="h4">
                        Aiden Trust
                    </Typography>
                </Stack>

                <Stack
                    mt={2} direction="column">
                    <SidebarLink
                        icon={
                            pathname === '/' ?
                                <Home
                                    sx={{
                                        color: green[600],
                                        backgroundColor: green[200],
                                        padding: .1,
                                        borderRadius: .4
                                    }}/> :
                                <HomeOutlined
                                    sx={{
                                        color: grey[600],
                                        backgroundColor: grey[200],
                                        padding: 0.1,
                                        borderRadius: 0.4
                                    }}/>
                        }
                        path="/"
                        label="Home"
                        active={pathname === '/'}
                    />
                    <SidebarLink
                        icon={
                            pathname === '/transactions' ?
                                <CompareArrows
                                    sx={{
                                        color: green[600],
                                        backgroundColor: green[200],
                                        padding: .1,
                                        borderRadius: .4
                                    }}/> :
                                <CompareArrowsOutlined
                                    sx={{
                                        color: grey[600],
                                        backgroundColor: grey[200],
                                        padding: .1,
                                        borderRadius: .4
                                    }}/>
                        }
                        path="/transactions"
                        label="Transactions"
                        active={pathname === '/transactions'}
                    />
                    <SidebarLink
                        icon={
                            pathname === '/stats' ?
                                <AccountBalance
                                    sx={{
                                        color: green[600],
                                        backgroundColor: green[200],
                                        padding: .1,
                                        borderRadius: .4
                                    }}/> :
                                <AccountBalanceOutlined
                                    fontSize="large"
                                    sx={{
                                        color: grey[600],
                                        backgroundColor: grey[200],
                                        padding: 0.1,
                                        borderRadius: 0.4
                                    }}
                                />
                        }
                        path="/stats"
                        label="Stats"
                        active={pathname === '/stats'}
                    />

                    <SidebarLink
                        icon={
                            pathname === '/statements' ?
                                <CreditCard
                                    sx={{
                                        color: green[600],
                                        backgroundColor: green[200],
                                        padding: .1,
                                        borderRadius: .4
                                    }}
                                /> :
                                <CreditCardOutlined
                                    fontSize="large"
                                    sx={{
                                        color: grey[600],
                                        backgroundColor: grey[200],
                                        padding: 0.1,
                                        borderRadius: 0.4
                                    }}
                                />
                        }
                        path="/statements"
                        label="Statements"
                        active={pathname === '/statements'}
                    />
                </Stack>
            </Box>

            <Box sx={{pb: 4}}>
                <Stack
                    mt={2} direction="column">
                    <SidebarLink
                        icon={
                            pathname === '/settings' ?
                                <Settings
                                    sx={{
                                        color: green[600],
                                        backgroundColor: green[200],
                                        padding: .1,
                                        borderRadius: .4
                                    }}
                                /> :
                                <SettingsOutlined
                                    fontSize="large"
                                    sx={{
                                        color: grey[600],
                                        backgroundColor: grey[200],
                                        padding: 0.1,
                                        borderRadius: 0.4
                                    }}
                                />
                        }
                        path="/settings"
                        label="Settings"
                        active={pathname === '/settings'}
                    />

                    <SidebarLink
                        icon={
                            pathname === '/profile' ?
                                <VerifiedUser
                                    sx={{
                                        color: green[600],
                                        backgroundColor: green[200],
                                        padding: .1,
                                        borderRadius: .4
                                    }}/> :
                                <VerifiedUserOutlined
                                    fontSize="large"
                                    sx={{
                                        color: grey[600],
                                        backgroundColor: grey[200],
                                        padding: 0.1,
                                        borderRadius: 0.4
                                    }}
                                />
                        }
                        path="/profile"
                        label="Profile"
                        active={pathname === '/profile'}
                    />

                    <Button
                        startIcon={
                            <Logout
                                sx={{
                                    color: green[600],
                                    backgroundColor: green[100],
                                    padding: .1,
                                    borderRadius: .4
                                }}
                            />}
                        sx={{
                            fontWeight: 'bold',
                            borderRadius: 0,
                            justifyContent: 'flex-start',
                            textTransform: 'capitalize',
                            fontSize: 14,
                            paddingLeft: 4,
                            py: 1
                        }}
                        color="primary"
                        size="medium"
                        variant="text"
                        fullWidth={true}>
                        Logout
                    </Button>
                </Stack>
            </Box>
        </Box>
    )
}

export default DesktopDrawer;
