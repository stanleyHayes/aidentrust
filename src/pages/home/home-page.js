import Layout from "../../components/layout/layout";
import {Avatar, Box, Button, Card, CardContent, Container, Divider, Grid, Stack, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";
import Stat from "../../components/shared/stat";
import {Link} from "react-router-dom";
import Feint from "../../components/shared/feint";
import {Add, Call, CreditCard, Mail, MoreHoriz, VerifiedUser} from "@mui/icons-material";
import {green, grey, purple, red} from "@mui/material/colors";
import {useSelector} from "react-redux";
import {selectTransaction} from "../../redux/transactions/transaction-reducer";
import TransactionItem from "../../components/shared/transaction-item";

const HomePage = () => {

    const useStyles = makeStyles(theme => {
        return {
            container: {
                paddingTop: 16,
                paddingBottom: 16,
                [theme.breakpoints.down('sm')]: {
                    paddingTop: 32
                }
            },
            link: {
                textDecoration: 'none'
            }
        }
    });

    const classes = useStyles();

    const {transactions} = useSelector(selectTransaction);

    return (
        <Layout>
            <Container className={classes.container}>
                <Box mb={2}>
                    <Typography mb={1} variant="h6">Overview</Typography>
                    <Grid container={true} spacing={2} alignItems="center">
                        <Grid item={true} xs={12} md={6} lg={3}>
                            <Stat color="green" title="Income" value="$40,00"/>
                        </Grid>
                        <Grid item={true} xs={12} md={6} lg={3}>
                            <Stat color="red" title="Spending" value="$40,00"/>
                        </Grid>
                        <Grid item={true} xs={12} md={6} lg={3}>
                            <Stat color="grey" title="Balance" value="$40,00"/>
                        </Grid>
                        <Grid item={true} xs={12} md={6} lg={3}>
                            <Stat color="purple" title="Transactions" value="$40,00"/>
                        </Grid>
                    </Grid>
                </Box>

                <Grid
                    container={true}
                    spacing={2}>
                    <Grid item={true} xs={12} md={8}>
                        <Box mb={2}>
                            <Grid
                                container={true}
                                spacing={2}
                                alignItems="stretch">
                                <Grid item={true} xs={12}>
                                    <Card elevation={0} mb={4}>
                                        <CardContent>
                                            <Typography mb={1} variant="h6">Spending</Typography>
                                            <Stat color="green" title="Income" value="$40,00"/>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item={true} xs={12}>
                                    <Card elevation={0} mb={4}>
                                        <CardContent>
                                            <Typography mb={1} variant="h6">Income</Typography>
                                            <Stat color="red" title="Spending" value="$40,00"/>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid
                        item={true}
                        xs={12}
                        md={4}>
                        <Card elevation={0}>
                            <CardContent>
                                <Stack mb={2} justifyContent="center" alignItems="center">
                                    <Avatar
                                        variant="circular"
                                        sx={{width: 75, height: 75}}
                                        src="/assets/images/profile.jpg"
                                    />
                                </Stack>
                                <Grid
                                    container={true}
                                    spacing={1}
                                    alignItems="center"
                                    justifyContent="space-between">
                                    <Grid item={true} xs={6} md={3}>
                                        <Stack justifyContent="center" direction="row">
                                            <Feint
                                                mb={1}
                                                padding={0.4}
                                                children={<Call sx={{color: purple[600]}}/>}
                                                color="purple"/>
                                        </Stack>
                                        <Typography
                                            align="center"
                                            variant="body2"
                                            sx={{
                                                fontSize: 10,
                                                color: grey[600]
                                            }}>
                                            +2332748319
                                        </Typography>
                                    </Grid>
                                    <Grid item={true} xs={6} md={3}>
                                        <Stack justifyContent="center" direction="row">
                                            <Feint
                                                mb={1}
                                                padding={0.4}
                                                children={<VerifiedUser sx={{color: red[600]}}/>}
                                                color="red"/>
                                        </Stack>
                                        <Typography
                                            align="center"
                                            variant="body2"
                                            sx={{
                                                fontSize: 10,
                                                color: grey[600]
                                            }}>
                                            +2332748319
                                        </Typography>
                                    </Grid>
                                    <Grid item={true} xs={6} md={3}>
                                        <Stack justifyContent="center" direction="row">
                                            <Feint
                                                mb={1}
                                                padding={0.4}
                                                children={<Mail sx={{color: green[600]}}/>}
                                                color="green"/>
                                        </Stack>
                                        <Typography
                                            align="center"
                                            variant="body2"
                                            sx={{
                                                fontSize: 10,
                                                color: grey[600]
                                            }}>
                                            dev.stanley@gmail.com
                                        </Typography>
                                    </Grid>
                                    <Grid item={true} xs={6} md={3}>
                                        <Stack justifyContent="center" direction="row">
                                            <Feint
                                                mb={1}
                                                padding={0.4}
                                                children={<MoreHoriz sx={{color: grey[600]}}/>}
                                                color="grey"/>
                                        </Stack>
                                        <Typography
                                            align="center"
                                            variant="body2"
                                            sx={{
                                                fontSize: 10,
                                                color: grey[600]
                                            }}>
                                            More
                                        </Typography>
                                    </Grid>
                                </Grid>

                                <Divider variant="middle" light={true} sx={{my: 3}}/>

                                <Stack direction="column" spacing={1}>
                                    <Button
                                        fullWidth={true}
                                        disableElevation={true}
                                        variant="contained"
                                        sx={{
                                            justifyContent: "space-between",
                                            borderRadius: 0,
                                            backgroundColor: purple[600],
                                            color: 'white'
                                        }}
                                        startIcon={
                                            <Feint
                                                padding={0.4}
                                                color="purple"
                                                children={
                                                    <CreditCard
                                                        fontSize="small"
                                                        sx={{color: purple[600]}}/>}
                                            />}
                                        endIcon={
                                            <Feint
                                                padding={0.4}
                                                color="purple"
                                                children={
                                                    <Add
                                                        fontSize="small"
                                                        sx={{color: purple[600]}}/>}
                                            />}>
                                        Deposit Money
                                    </Button>

                                    <Button
                                        fullWidth={true}
                                        disableElevation={true}
                                        variant="contained"
                                        sx={{
                                            justifyContent: "space-between",
                                            borderRadius: 0,
                                            backgroundColor: red[600],
                                            color: 'white'
                                        }}
                                        startIcon={
                                            <Feint
                                                padding={0.4}
                                                color="red"
                                                children={
                                                    <CreditCard
                                                        fontSize="small"
                                                        sx={{color: red[600]}}/>}/>}
                                        endIcon={
                                            <Feint
                                                padding={0.4}
                                                color="red"
                                                children={
                                                    <Add fontSize="small" sx={{color: red[600]}}/>}/>}>
                                        Transfer Money
                                    </Button>

                                    <Button
                                        fullWidth={true}
                                        disableElevation={true}
                                        variant="outlined"
                                        sx={{
                                            justifyContent: "space-between",
                                            borderRadius: 0,
                                            backgroundColor: grey[600],
                                            color: 'white'
                                        }}
                                        startIcon={
                                            <Feint
                                                padding={0.4}
                                                color="grey"
                                                children={
                                                    <CreditCard fontSize="small" sx={{color: grey[600]}}/>}/>}
                                        endIcon={
                                            <Feint
                                                padding={0.4}
                                                color="grey"
                                                children={
                                                    <Add fontSize="small" sx={{color: grey[600]}}/>}/>}>
                                        Make Payment
                                    </Button>

                                    <Button
                                        fullWidth={true}
                                        disableElevation={true}
                                        variant="outlined"
                                        sx={{
                                            justifyContent: "space-between",
                                            borderRadius: 0,
                                            backgroundColor: green[600],
                                            color: 'white'
                                        }}
                                        startIcon={
                                            <Feint
                                                padding={0.4}
                                                color="green"
                                                children={
                                                    <CreditCard fontSize="small" sx={{color: green[600]}}/>}/>}
                                        endIcon={
                                            <Feint
                                                padding={0.4}
                                                color="green"
                                                children={
                                                    <Add fontSize="small" sx={{color: green[600]}}/>}/>}>
                                        Receive Money
                                    </Button>
                                </Stack>

                                <Divider variant="middle" light={true} sx={{my: 3}}/>

                                <Stack justifyContent="space-between" alignItems="center" direction="row">
                                    <Typography variant="h6">Recent Transactions</Typography>
                                    <Link className={classes.link} to="/transactions">
                                        <Button variant="text">See all</Button>
                                    </Link>
                                </Stack>
                                {transactions && transactions.length === 0 ? (
                                    <Box>
                                        <Typography variant="body2" align="center">
                                            No recent transactions
                                        </Typography>
                                    </Box>
                                ) : (
                                    <Stack
                                        direction="column"
                                        divider={<Divider variant="middle" light={true}/>}>
                                        {
                                            transactions && transactions.slice(5).map((transaction, index) => {
                                                return (
                                                    <TransactionItem
                                                        key={index}
                                                        transaction={transaction}
                                                    />
                                                )
                                            })
                                        }
                                    </Stack>
                                )}
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Layout>
    )
}

export default HomePage;
