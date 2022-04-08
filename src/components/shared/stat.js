import {Card, CardContent, Stack, Typography} from "@mui/material";
import Feint from "./feint";
import {Send} from "@mui/icons-material";
import {green, grey, purple, red} from "@mui/material/colors";

const Stat = ({title, value, color}) => {

    const renderColor = color => {
        switch (color) {
            case 'red':
                return red[600];
            case 'green':
                return green[600];
            case 'grey':
                return grey[600];
            case 'purple':
                return purple[600];
            default:
                return grey[600];
        }
    }

    return (
        <Card elevation={0}>
            <CardContent>
                <Stack direction="row" justifyContent="space-between" alignItems="center">

                    <Feint
                        color={color}
                        children={
                        <Send
                            fontSize="large"
                            sx={{color: renderColor(color)}}
                        />} />

                    <Stack direction="column">
                        <Typography
                            sx={{color: grey[600]}}
                            mb={1}
                            variant="h5"
                            align="center">
                            {value}
                        </Typography>

                        <Typography
                            sx={{color: grey[400]}}
                            variant="body2"
                            align="center">
                            {title}
                        </Typography>
                    </Stack>
                </Stack>
            </CardContent>
        </Card>
    )
}

export default Stat;
