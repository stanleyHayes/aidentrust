import {Card, CardContent, Stack, Typography} from "@mui/material";
import Feint from "./feint";
import {grey} from "@mui/material/colors";

const Stat = ({title, value, color, icon}) => {

    return (
        <Card elevation={0}>
            <CardContent>
                <Stack direction="row" justifyContent="space-between" alignItems="center">

                    <Feint
                        color={color}
                        children={icon}/>

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
