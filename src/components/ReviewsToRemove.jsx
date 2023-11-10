'use client'

import Link from 'next/link'
import {
    Button,
    Checkbox,
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Paper,
    Grid,
    Rating,
    Stack,
    Typography,
    Select,
    MenuItem
} from '@mui/material'
import { tableCellClasses } from '@mui/material/TableCell'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { ChevronLeft, ChevronRight } from '@mui/icons-material'

import { styled } from '@mui/material/styles'
import '@/css/dataTable.css'

const StyledTableCell = styled(TableCell)(() => ({
    [`&.${tableCellClasses.head}`]: {
        fontSize: '1.13rem',
        fontWeight: '550',
        paddingLeft: '2.19rem'
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: '1rem',
        fontWeight: '450',
        paddingLeft: '2.19rem'
    },
}));

const theme = createTheme({
    typography: {
        button: {
            textTransform: "none"
        }
    }
});

export default function () {
    const data = [
        {
            reviewer: 'Dina N. Hamilton',
            review: "You'll get the most out of this guide if your desire to learn search engine optimization (SEO) is exceeded only by your willingness to execute and test concepts.",
            link: 'Link will be Here',
            rate: 4,
            isChecked: true
        },
        {
            reviewer: 'Elizabeth B. Frechette',
            review: "I'd be happy to provide some reviews! However, I'll need more specific information about what you'd like a review of. Please provide the name or type of product.",
            link: "Link will be Here",
            rate: 5
        },
        {
            reviewer: 'Adam S. Saldana',
            review: "Creative Niloy is a best SEO service provider in Bangladesh I have ever seen. He does a great job of providing top-notch service for his clients and he always responds promptly to any questions.",
            link: "Link will be Here",
            rate: 3
        },
        {
            reviewer: 'Jack M. Blackwell',
            review: "Creative Niloy is a best seo service provider in Bangladesh. We are offering professional web design and seo services like web search engine.",
            link: "Link will be Here",
            rate: 4,
            isChecked: true
        },
        {
            reviewer: 'Mary W. Nicodemus',
            review: "I was looking for a reputable SMM agency for my social media page management and run a small campaign.",
            link: "Link will be Here",
            rate: 5
        },
        {
            reviewer: 'Robert A. Winburn',
            review: "Most probably the best SEO service company in Bangladesh. THEY ALSO offer website design, SMM, Digital Marketing, Content Creations and many more",
            link: "Link will be Here",
            rate: 4
        },
        {
            reviewer: 'Wanda J. Johnson',
            review: "Truly result making SEO farm in Bangladesh. They know how to rank any business in the Google search and others",
            link: "Link will be Here",
            rate: 5
        },
        {
            reviewer: 'Christopher R. Harris',
            review: "Crack brigade is a fantastic place to work for.. The work balance standard that they have created with ample opportunity to learn and grow is hard to find anywhere in Bangladesh.",
            link: "Link will be Here",
            rate: 4
        },
        {
            reviewer: 'Robert F. Mitchell',
            review: "They are best as their name. Service is world class. Their most of the clients choose them for their best quality. I recommend Crack Brigade for your SEO & SMM services.",
            link: "Link will be Here",
            rate: 4
        },
        {
            reviewer: 'Dennis B. Barbee',
            review: "Crack Brigade is the best SEO agency in Dhaka. They have a dedicated team for marketing and branding also. I suggest Crack Brigade without any hesitation.",
            link: "Link will be Here",
            rate: 5
        },
    ]

    const paginateButtons = [
        {
            value: 1,
            isActive: true
        },
        {
            value: 2,
            isActive: false
        },
        {
            value: 3,
            isActive: false
        },
        {
            value: 4,
            isActive: false
        },
        {
            value: 5,
            isActive: false
        }
    ]

    return (
        <ThemeProvider theme={theme}>
            <Grid container minHeight='100vh'>
                <Grid item xs={12} sx={{ backgroundColor: 'rgba(134, 147, 127, 0.2)' }}>
                    <Paper sx={{ mx: '1.5rem', my: '1.75rem', boxShadow: 'none' }}>
                        <TableContainer>
                            <Table aria-label="customized table">
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell>Reviewer Name</StyledTableCell>
                                        <StyledTableCell style={{ width: '47.38rem' }}>Review</StyledTableCell>
                                        <StyledTableCell>Link to Review</StyledTableCell>
                                        <StyledTableCell>Star Ratings</StyledTableCell>
                                        <StyledTableCell></StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        data.map((item, index) => {
                                            return (
                                                <TableRow key={index}>
                                                    <StyledTableCell>{item.reviewer}</StyledTableCell>
                                                    <StyledTableCell>{item.review}</StyledTableCell>
                                                    <StyledTableCell>
                                                        <Stack direction='row' alignItems='center'>
                                                            <Checkbox defaultChecked={!!item.isChecked} color="default" sx={{ '& .MuiSvgIcon-root': { fontSize: '1.2rem' } }} />
                                                            <Link href={item.link} style={{ textDecorationColor: 'black', color: 'black' }}>Link will be here</Link>
                                                        </Stack>
                                                    </StyledTableCell>
                                                    <StyledTableCell><Rating name="read-only" value={item.rate} readOnly /></StyledTableCell>
                                                    <StyledTableCell>
                                                        <Button variant="contained" sx={{ backgroundColor: '#006A00', width: '11rem', height: '2.69rem' }}>
                                                            Review Deleted
                                                        </Button>
                                                    </StyledTableCell>
                                                </TableRow>
                                            )
                                        })
                                    }
                                </TableBody>
                            </Table>
                            <Stack justifyContent='space-between' direction='row' sx={{ mx: '2.19rem', my: '2.57rem' }}>
                                <Stack justifyContent='space-between' direction='row' spacing={1}>
                                    <Typography fontSize='1.13rem' fontWeight='500'>Show rows</Typography>
                                    <Select
                                        labelId="demo-customized-select-label"
                                        id="demo-customized-select"
                                        value={10}
                                        sx={{ height: '1.81rem', fontSize: '0.875rem', width: '3.25rem', backgroundColor: '#E9E9E9', borderWidth: 0 }}
                                    >
                                        <MenuItem selected value={10}>10</MenuItem>
                                        <MenuItem value={20}>20</MenuItem>
                                        <MenuItem value={30}>30</MenuItem>
                                    </Select>
                                </Stack>
                                <Stack justifyContent='space-between' direction='row' spacing={1}>
                                    <Button sx={{ color: 'black', borderRadius: 1, border: '1px solid #86937F', minWidth: '0rem', width: '2.5rem', height: '2.5rem' }}>
                                        <ChevronLeft/>
                                    </Button>
                                    {
                                        paginateButtons.map((item) => {
                                            return (
                                                <Button key={item.value} variant={item.isActive ? 'contained' : 'outlined'}
                                                    sx={{
                                                        minWidth: '0rem',
                                                        width: '2.5rem',
                                                        height: '2.5rem',
                                                        border: '1px solid #86937F',
                                                        backgroundColor: `${item.isActive ? '#86937F' : 'none'}`,
                                                        fontSize: '0.875rem',
                                                        fontWeight: '600',
                                                        color: 'black',
                                                        boxShadow: 'none'
                                                    }}
                                                >
                                                    {item.value}
                                                </Button>
                                            )
                                        })
                                    }
                                    <Button sx={{ color: 'black', borderRadius: 1, border: '1px solid #86937F', minWidth: '0rem', width: '2.5rem', height: '2.5rem' }}>
                                        <ChevronRight/>
                                    </Button>
                                </Stack>
                            </Stack>
                        </TableContainer>
                    </Paper>
                </Grid>
            </Grid>
        </ThemeProvider>
    )
}