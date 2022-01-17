import React from 'react'
import { Link, Typography } from '@mui/material'
import { Container, ImageList, ImageListItem } from '@mui/material'
import { styled } from '@mui/material/styles'

const ContainerStyle = styled(Container)(({ theme }) => ({
    position: "sticky",
    top: 0,
}));

const LinkStyle = styled(Link)(({ theme }) => ({
    marginRight: theme.spacing(2),
    color: "#0e0d0d",
    fontSize: 16
}));

const Rightbar = () => {
    return (
        <ContainerStyle>
            <ImageList rowHeight={100} cols={1} sx={{ width: 300, height: "100%", marginBottom: 5, alignItems: 'center' }}>
                <ImageListItem sx={{
                    height: '100%',
                    width: '100%', marginBottom: 10
                }}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt="reactJS" />
                </ImageListItem>
                <ImageListItem sx={{
                    height: '300px',
                    width: '100%', marginBottom: 20
                }} size="small">
                    <img src="https://mui.com/static/logo.png" alt="MUI" />
                </ImageListItem>
            </ImageList>
        </ContainerStyle>
    )
}

export default Rightbar
