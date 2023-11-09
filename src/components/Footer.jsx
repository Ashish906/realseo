import { Stack, Typography } from '@mui/material'

import '@/css/footerStyle.css'

export default function () {
    return (
            <Stack sx={{ mx: '2.63rem', mb: '2.31rem' }} direction='row' justifyContent='space-between'>
                <Typography className='footer-text'>
                        Copyright @ Realseo.digital 2023
                </Typography>
                <Stack spacing={8} direction='row' justifyContent='space-between'  >
                    <Typography className='footer-text'>
                        Terms and Conditions
                    </Typography>
                    <Typography className='footer-text'>
                        Privacy Policy
                    </Typography>
                </Stack>
        </Stack>
    )
}