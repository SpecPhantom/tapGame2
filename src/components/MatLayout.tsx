import {
    AppBar,
    Box,
    Button,
    Container,
    Toolbar,
    Typography,
} from '@mui/material'
import { Outlet, useNavigate } from 'react-router-dom'
import { ProjectName } from '../App'
import React from 'react'

function MatLayout() {
    const navigate = useNavigate()

    const gotoBoard = () => {
        navigate('/')
    }

    const goToScore = () => {
        navigate('/scores')
    }

    // const goToTestPage = () => {
    //     navigate('/GamePage')
    // }

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1 }}
                        >
                            {ProjectName}
                        </Typography>

                        <Button color="inherit" onClick={gotoBoard}>
                            Game
                        </Button>
                        <Button color="inherit" onClick={goToScore}>
                            Example Scores API
                        </Button>
                        {/* <Button color="inherit" onClick={goToTestPage}>
                            GameTap
                        </Button> */}
                    </Toolbar>
                </AppBar>
            </Box>
            <Container
                sx={{
                    mt: 1,
                }}
            >
                {/* Where the each page show up in the same layout */}
                <Outlet />
            </Container>
        </>
    )
}

export default MatLayout
