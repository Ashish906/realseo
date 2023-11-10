import { Stack } from '@mui/material'

import { ReviewButtons, ReviewsToRemove, SearchReview } from '@/components'
import { BodyWrapper } from '@/components/common'

export default function Home() {
  return (
    <>
      <Stack sx={{ mx: '2.63rem', my: '1.75rem' }} direction='row' justifyContent='space-between'>
        <ReviewButtons />
        <SearchReview />
      </Stack>
      <BodyWrapper>
        <ReviewsToRemove />
      </BodyWrapper>
    </>
  )
}
