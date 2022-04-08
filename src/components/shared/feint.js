import {Box} from "@mui/material";
import {green, grey, purple, red} from "@mui/material/colors";

const Feint = ({
                   color,
                   children,
                   padding = 0.7,
                   borderRadius = 0.6,
                   ...props
               }) => {
    const renderColor = color => {
        switch (color) {
            case 'red':
                return red[100];
            case 'green':
                return green[100];
            case 'grey':
                return grey[200];
            case 'purple':
                return purple[100];
            default:
                return grey[100];
        }
    }
    return (
        <Box
            {...props}
            sx={{
                backgroundColor: renderColor(color),
                padding,
                borderRadius,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
            {children}
        </Box>
    )
}
export default Feint;
