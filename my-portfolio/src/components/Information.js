import { Box, Avatar } from "@mui/material"
import { flexbox } from "@mui/system"

const Information = () => {
    return (
        <Box sx={{
            width: 'fixed',
            height: '400x',
        }}>
            <Box sx={{
                marginTop: 9.4,
                marginLeft: 30,
                width: 685,
                height: 400,
                background: 'hsla(240, 61%, 93%, 0.2)',
                borderRadius: '100px 10px 10px 10px '
            }}>
                <Avatar
                    alt="Remy Sharp"
                    src="/static/images/avatar/1.jpg"
                    sx={{ width: 150, height: 150, top: -75, left: -50}}
                />            
            </Box>

        </Box>
    )
}

export default Information