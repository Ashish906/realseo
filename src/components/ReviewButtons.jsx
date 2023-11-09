'use client'

import { ThemeProvider, createTheme } from '@mui/material/styles'
import { Button, Stack } from '@mui/material'

import { RedirectIcon, ThumbsUpIcon, ThumbsUpLightIcon } from '@/icons'

const theme = createTheme({
    typography: {
        button: {
            textTransform: "none",
            fontSize: '1.13rem',
            fontWeight: 500
        }
    }
});

export default function () {

    return (
        <ThemeProvider theme={theme}>
            <Stack spacing={2} direction="row">
                <Button variant="contained" startIcon={<ThumbsUpIcon />} sx={{ height: '3.69rem', width: '15.1rem', borderRadius: '.313rem', backgroundColor: '#D4D4D4', color: "#86937F" }}>
                    Current Reviews
                </Button>
                <Button variant="contained" startIcon={<RedirectIcon />} sx={{ height: '3.69rem', width: '16.88rem', backgroundColor: '#86937F', borderRadius: '.313rem' }}>
                    Reviews to Remove
                </Button>
                <Button variant="contained" startIcon={<ThumbsUpLightIcon />} sx={{ height: '3.69rem', width: '16.25rem', backgroundColor: '#D4D4D4', color: "#86937F", borderRadius: '.313rem' }}>
                    Removed Reviews
                </Button>
            </Stack>
        </ThemeProvider>
    )
}