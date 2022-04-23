import {Card, CardContent, Stack, Typography} from "@mui/material";
import Feint from "./feint";
import {grey} from "@mui/material/colors";

const Info = ({title, value, icon}) => {

    return (
        <Card elevation={0}>
            <CardContent>
                <Stack spacing={2} direction="row" justifyContent="flex-start" alignItems="center">
                    <Feint
                        padding={0.1}
                        borderRadius={0.4}
                        children={icon}
                    />

                    <Stack direction="column">
                        <Typography
                            mb={1}
                            sx={{color: grey[400], fontSize: 12}}
                            variant="body2">
                            {title}
                        </Typography>

                        <Typography
                            sx={{color: grey[600], fontSize: 14}}
                            variant="body2">
                            {value}
                        </Typography>
                    </Stack>
                </Stack>
            </CardContent>
        </Card>
    )
}

export default Info;
