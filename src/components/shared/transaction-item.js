import {Avatar, CardHeader, Grid, Typography} from "@mui/material";
import {green, grey, purple} from "@mui/material/colors";
import moment from "moment";

const TransactionItem = ({transaction}) => {
    const renderVariant = type => {
        switch (type) {
            case 'international':
                return (
                    <Avatar variant="circular" sx={{backgroundColor: grey[100]}}>
                        <Typography
                            sx={{color: grey[600]}}
                            variant="h6">{type[0].toUpperCase()}
                        </Typography>
                    </Avatar>
                )
            case 'local':
                return (
                    <Avatar variant="circular" sx={{backgroundColor: grey[100]}}>
                        <Typography
                            sx={{color: grey[600]}}
                            variant="h6">{type[0].toUpperCase()}
                        </Typography>
                    </Avatar>
                )

            case 'deposit':
                return (
                    <Avatar variant="circular" sx={{backgroundColor: green[100]}}>
                        <Typography
                            sx={{color: green[600]}}
                            variant="h6">{type[0].toUpperCase()}
                        </Typography>
                    </Avatar>
                )

            case 'payment':
                return (
                    <Avatar variant="circular" sx={{backgroundColor: purple[100]}}>
                        <Typography
                            sx={{color: purple[600]}}
                            variant="h6">{type[0].toUpperCase()}
                        </Typography>
                    </Avatar>
                )
            default:
                return (
                    <Avatar variant="circular" sx={{backgroundColor: grey[100]}}>
                        <Typography
                            sx={{color: grey[600]}}
                            variant="h6">{type[0].toUpperCase()}
                        </Typography>
                    </Avatar>
                )
        }
    }
    return (
        <CardHeader
            avatar={renderVariant(transaction.type)}
            subheader={
                <Typography
                    variant="body2"
                    sx={{color: grey[500], fontSize: 12}}>
                    {transaction.type}
                </Typography>}
            title={
            <Grid container={true} justifyContent="space-between" alignItems="center">
                <Grid item={true}>
                    <Typography
                        variant="body2"
                        sx={{color: grey[600], fontSize: 14}}>
                        ${transaction.amount}
                    </Typography>
                </Grid>
                <Grid item={true}>
                    <Typography
                        variant="body2"
                        sx={{color: grey[500], fontSize: 12}}>
                        {moment(transaction.updatedAt).fromNow()}
                    </Typography>
                </Grid>
            </Grid>

            }
        />
    )
}

export default TransactionItem;
