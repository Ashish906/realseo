import { Input, InputAdornment } from '@mui/material'

import { SearchIcon } from '@/icons'

export default function () {
    return (
        <Input
            id="input-with-icon-adornment"
            disableUnderline={true}
            sx={{ backgroundColor: '#EBEBEB', borderRadius: '.313rem', height: '3.69rem', width: '23.69rem' }}
            placeholder='Search'
            inputProps={{
                style: { color: '#868686', fontWeight: '500', fontSize: '1.13rem' }
            }}
            startAdornment={
                <InputAdornment position="start" sx={{ ml: '1.33rem' }}>
                    <SearchIcon />
                </InputAdornment>
            }
        />
    )
}