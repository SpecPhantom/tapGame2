import { experimental_extendTheme as extendTheme } from '@mui/material/styles'
import { deepPurple } from '@mui/material/colors'

const theme = extendTheme({
    colorSchemes: {
        light: {
            palette: {
                primary: {
                    main: '#de162d',
                },
            },
        },
        dark: {
            palette: {
                primary: {
                    main: '#d44d5c',
                },
            },
        },
    },
})

export default theme
