import { Card } from "@mui/material"
import TapGame from "./TapGame"


const TapBoardContainer = () => {
    return (
        <>
        <Card
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
