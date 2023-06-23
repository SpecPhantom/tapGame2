import { Card } from "@mui/material"
import TapGame from "./TapGame"
// import '../images/store.png'
import '../components/pic.css'

const TapBoardContainer = () => {
    return (
        <>
        <Card className = 'pic'
            variant="outlined"
            style={{
                padding: '24px',
                marginTop: '24px',
            }}
        >
            <TapGame/>
            
        </Card>
        </>
    )
}

export default TapBoardContainer  
