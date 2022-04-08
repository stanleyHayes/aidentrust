import Layout from "../../components/layout/layout";
import {Card, CardContent, Container, Grid, Tab, Tabs} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {useState} from "react";
import Feint from "../../components/shared/feint";
import {DeleteForever, Settings} from "@mui/icons-material";
import {green, grey, red} from "@mui/material/colors";
import SettingsTabContent from "../../components/tab-contents/settings-tab-content";
import ChangePasswordTabContent from "../../components/tab-contents/change-password-tab-content";
import ContactUsTabContent from "../../components/tab-contents/contact-us-tab-content";
import FAQTabContent from "../../components/tab-contents/faq-tab-content";
import PrivacyTabContent from "../../components/tab-contents/privacy-tab-content";
import TermsTabContent from "../../components/tab-contents/terms-tab-content";
import CloseAccountTabContent from "../../components/tab-contents/close-account-tab-content";
import EditProfileTabContent from "../../components/tab-contents/edit-profile-tab-content";

const SettingsPage = () => {

    const useStyles = makeStyles(theme => {
        return {
            container: {
                paddingTop: 16,
                paddingBottom: 16
            }
        }
    });

    const classes = useStyles();

    const [index, setIndex] = useState("settings");

    const renderTabContent = index => {
        switch (index) {
            case 'settings':
                return <SettingsTabContent/>;

            case 'edit-profile':
                return <EditProfileTabContent/>;

            case 'change-password':
                return <ChangePasswordTabContent/>;

            case 'contact-us':
                return <ContactUsTabContent/>;

            case 'faq':
                return <FAQTabContent/>;

            case 'privacy':
                return <PrivacyTabContent/>;

            case 'terms':
                return <TermsTabContent/>;

            case 'close-account':
                return <CloseAccountTabContent/>;
            default:
                return <ChangePasswordTabContent/>;
        }
    }
    return (
        <Layout>
            <Container className={classes.container}>
                <Grid container={true} spacing={2}>
                    <Grid item={true} xs={false} md={3}>
                        <Card elevation={0}>
                            <CardContent>
                                <Tabs
                                    visibleScrollbar={true}
                                    textColor="primary"
                                    orientation="vertical"
                                    value={index}
                                    title="Settings"
                                    color="secondary"
                                    indicatorColor="primary"
                                    variant="fullWidth"
                                    onChange={(event, value) => setIndex(value)}>
                                    <Tab
                                        sx={{
                                            textTransform: 'capitalize',
                                            fontSize: 14,
                                            color: index === 'settings' ? green[600] : grey[600],
                                            width: '100%',
                                            justifyContent: 'flex-start'
                                        }}
                                        value="settings"
                                        title="Settings"
                                        label="Settings"
                                        iconPosition="start"
                                        icon={
                                            <Feint
                                                padding={0.1}
                                                children={<Settings fontSize="small"/>}/>
                                        }
                                    />
                                    <Tab
                                        sx={{
                                            textTransform: 'capitalize',
                                            fontSize: 14,
                                            color: index === 'change-password' ? green[600] : grey[600],
                                            width: '100%',
                                            justifyContent: 'flex-start'
                                        }}
                                        value="change-password"
                                        title="Change Password"
                                        label="Change Password"
                                        iconPosition="start"
                                        icon={
                                            <Feint
                                                padding={0.1}
                                                children={<Settings fontSize="small"/>}/>
                                        }
                                    />
                                    <Tab
                                        sx={{
                                            textTransform: 'capitalize',
                                            fontSize: 14,
                                            color: index === 'about-us' ? green[600] : grey[600],
                                            width: '100%',
                                            justifyContent: 'flex-start'
                                        }}
                                        value="about-us"
                                        title="About Us"
                                        label="About Us"
                                        iconPosition="start"
                                        icon={
                                            <Feint
                                                padding={0.1}
                                                children={<Settings fontSize="small"/>}/>
                                        }
                                    />
                                    <Tab
                                        sx={{
                                            textTransform: 'capitalize',
                                            fontSize: 14,
                                            color: index === 'faq' ? green[600] : grey[600],
                                            width: '100%',
                                            justifyContent: 'flex-start'
                                        }}
                                        value="faq"
                                        title="FAQ"
                                        label="FAQ"
                                        iconPosition="start"
                                        icon={
                                            <Feint
                                                padding={0.1}
                                                children={<Settings fontSize="small"/>}/>
                                        }
                                    />
                                    <Tab
                                        sx={{
                                            textTransform: 'capitalize',
                                            fontSize: 14,
                                            color: index === 'privacy' ? green[600] : grey[600],
                                            width: '100%',
                                            justifyContent: 'flex-start'
                                        }}
                                        value="privacy"
                                        title="Privacy"
                                        label="Privacy"
                                        iconPosition="start"
                                        icon={
                                            <Feint
                                                padding={0.1}
                                                children={<Settings fontSize="small"/>}/>
                                        }
                                    />
                                    <Tab
                                        sx={{
                                            textTransform: 'capitalize',
                                            fontSize: 14,
                                            color: index === 'terms' ? green[600] : grey[600],
                                            width: '100%',
                                            justifyContent: 'flex-start'
                                        }}
                                        value="terms"
                                        title="Terms"
                                        label="Terms"
                                        iconPosition="start"
                                        icon={
                                            <Feint
                                                padding={0.1}
                                                children={<Settings fontSize="small"/>}/>
                                        }
                                    />

                                    <Tab
                                        sx={{
                                            textTransform: 'capitalize',
                                            fontSize: 14,
                                            color: red[600],
                                            width: '100%',
                                            justifyContent: 'flex-start'
                                        }}
                                        value="close-account"
                                        title="Close Account"
                                        label="Close Account"
                                        color="danger"
                                        iconPosition="start"
                                        icon={
                                            <Feint
                                                color="red"
                                                padding={0.1}
                                                children={
                                                    <DeleteForever
                                                        sx={{color: red[600]}}
                                                        fontSize="small"/>
                                                }/>
                                        }
                                    />
                                </Tabs>

                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item={true} xs={12} md={9}>
                        <Card elevation={0}>
                            <CardContent>
                                {renderTabContent(index)}
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Layout>
    )
}

export default SettingsPage;
