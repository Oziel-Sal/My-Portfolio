import Button from '@mui/material/Button';
import '../../styles/HireButton.css'

const HireButton = () => {
    return (
        <Button sx={{
            backgroundImage: "linear-gradient(.25turn, #f00, #00f)",
            width: '198px',
            height: '200px',
            position: 'absolute',
            right: 0
        }}
            variant="contained">Hire Me</Button>
    )
}

export default HireButton