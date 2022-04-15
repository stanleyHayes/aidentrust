import {Box, Button, Divider, Stack} from "@mui/material";
import SidebarLink from "../shared/sidebar-link";
import {useLocation} from "react-router";
import {
    CompareArrows,
    CompareArrowsOutlined,
    CreditCard,
    CreditCardOutlined,
    Edit,
    EditOutlined,
    Home,
    HomeOutlined,
    Lock,
    LockOutlined,
    Logout,
    Person,
    PersonOutline,
} from "@mui/icons-material";
import {purple, grey} from "@mui/material/colors";

const DesktopDrawer = () => {

    const {pathname} = useLocation();

    return (<Box
            sx={{
                minHeight: '92vh', display: 'flex', flexDirection: 'column', mt: 3, width: '100%'
            }}>
            <Box sx={{flex: 1}}>
                <Stack
                    divider={<Divider variant="fullWidth" light={true}/>}
                    direction="column">
                    <SidebarLink
                        icon={pathname === '/' ? <Home
                            sx={{
                                color: purple[600],
                                backgroundColor: purple[200],
                                padding: .2,
                                borderRadius: .4,
                                fontSize: 36
                            }}/> : <HomeOutlined
                            sx={{
                                color: grey[600],
                                backgroundColor: grey[200],
                                padding: 0.2,
                                borderRadius: 0.4,
                                fontSize: 36
                            }}/>}
                        path="/"
                        label="Home"
                        active={pathname === '/'}
                    />
                    <SidebarLink
                        icon={pathname === '/transactions' ? <CompareArrows
                            sx={{
                                color: purple[600], backgroundColor: purple[200], padding: .1, borderRadius: .4
                            }}/> : <CompareArrowsOutlined
                            sx={{
                                color: grey[600], backgroundColor: grey[200], padding: .1, borderRadius: .4
                            }}/>}
                        path="/transactions"
                        label="Transactions"
                        active={pathname === '/transactions'}
                    />

                    <SidebarLink
                        icon={pathname === '/statements' ? <CreditCard
                            sx={{
                                color: purple[600], backgroundColor: purple[200], padding: .1, borderRadius: .4
                            }}
                        /> : <CreditCardOutlined
                            fontSize="large"
                            sx={{
                                color: grey[600], backgroundColor: grey[200], padding: 0.1, borderRadius: 0.4
                            }}
                        />}
                        path="/statements"
                        label="Statements"
                        active={pathname === '/statements'}
                    />
                </Stack>
            </Box>

            <Box sx={{pb: 2}}>
                <Stack
                    divider={<Divider variant="fullWidth" light={true}/>}
                    direction="column">

                    <SidebarLink
                        icon={pathname === '/profile' ? <Person
                            sx={{
                                color: purple[600], backgroundColor: purple[200], padding: .1, borderRadius: .4
                            }}/> : <PersonOutline
                            fontSize="large"
                            sx={{
                                color: grey[600], backgroundColor: grey[200], padding: 0.1, borderRadius: 0.4
                            }}
                        />}
                        path="/profile"
                        label="Profile"
                        active={pathname === '/profile'}
                    />

                    <SidebarLink
                        icon={pathname === '/edit-profile' ? <Edit
                            sx={{
                                color: purple[600], backgroundColor: purple[200], padding: .1, borderRadius: .4
                            }}/> : <EditOutlined
                            fontSize="large"
                            sx={{
                                color: grey[600], backgroundColor: grey[200], padding: 0.1, borderRadius: 0.4
                            }}
                        />}
                        path="/edit-profile"
                        label="Edit Profile"
                        active={pathname === '/edit-profile'}
                    />

                    <SidebarLink
                        icon={pathname === '/change-password' ? <Lock
                            sx={{
                                color: purple[600], backgroundColor: purple[200], padding: .1, borderRadius: .4
                            }}/> : <LockOutlined
                            fontSize="large"
                            sx={{
                                color: grey[600], backgroundColor: grey[200], padding: 0.1, borderRadius: 0.4
                            }}
                        />}
                        path="/change-password"
                        label="Change Password"
                        active={pathname === '/change-password'}
                    />

                    <Button
                        startIcon={<Logout
                            sx={{
                                color: purple[600], padding: .1, borderRadius: .4
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

        </Box>)
}

export default DesktopDrawer;
