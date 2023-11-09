import { Box, Stack } from '@mui/material'

import { ReviewButtons, SearchReview } from '@/components'
import { BodyWrapper } from '@/components/common'

export default function ({ children }) {
    return (
        <>
            <Stack sx={{ mx: '2.63rem', my: '1.75rem' }} direction='row' justifyContent='space-between'>
                <ReviewButtons />
                <SearchReview />
            </Stack>
            <BodyWrapper>
                { children }
            </BodyWrapper>
        </>
    )
}