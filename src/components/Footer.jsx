import { Box, Grid, Container, Typography } from '@mui/material'

import '@/css/footerStyle.css'

export default function () {
    return (
        <Box sx={{ flexGrow: 1, mx: '42px', mb: '37px' }}>
        <Grid container spacing={2}>
            <Grid item xs={9}>
                <Typography className='footer-text'>
                    Copyright @ Realseo.digital 2023
                </Typography>
            </Grid>
            <Grid item xs={2} textAlign='right'>
                <Typography className='footer-text'>
                    Terms and Conditions
                </Typography>
            </Grid>
            <Grid item xs={1} textAlign='right'>
                <Typography className='footer-text'>
                    Privacy Policy
                </Typography>
          </Grid>
        </Grid>
      </Box>
        // <Container maxWidth="100%" sx={{ display: 'inline', justifyContent: 'center', alignItems: 'center' }}>
        //     <Typography className='footer-text'>
        //         Copyright @ Realseo.digital 2023
        //     </Typography>
        //     <Typography className='footer-text'>
        //         Terms and Conditions
        //     </Typography>
        //     <Typography className='footer-text'>
        //         Privacy Policy
        //     </Typography>
        // </Container>
    )
}