import React from 'react';
import { useContext } from 'react';
import { AuthContext } from "../../AuthContext/AuthContext";
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import Home from '@mui/icons-material/Home'
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button'
import LogoutIcon from '@mui/icons-material/Logout';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { styled } from '@mui/material/styles';
import { logout } from '../../AuthContext/AuthActions'


const ContainerStyled = styled(Container)(({ theme }) => ({
    height: '100vh',
    color: "white",
    position: "sticky",
    top: "0",
    paddingTop: theme.spacing(2),
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.up('sm')]: {
        backgroundColor: "white",
        color: "#555",
        border: "1px solid #ece7e7"
    }
}));

const Item = styled('div')(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
        marginBottom: theme.spacing(3),
        cursor: "pointer"
    }
}));

const Text = styled(Typography)(({ theme }) => ({
    fontWeight: 500,
    [theme.breakpoints.down('sm')]: {
        display: "none"
    }
}));

const Leftbar = () => {
    const { dispatch } = useContext(AuthContext);
    const handleLogout = () => {
        dispatch({ type: "LOGOUT" })
    }

    return (
        <ContainerStyled maxWidth="lg" >
            <Item >
                <IconButton href="/" >
                <Home sx={{ mr: "1rem", fontSize: { sm: "18px" } }} />
                    <Text >Home</Text>
                </IconButton>
            </Item>
            <Item >
                <IconButton href="https://github.com/Luks3110">
                <GitHubIcon sx={{ mr: "1rem", fontSize: { sm: "18px" } }} />
                    <Text >Github</Text>
                </IconButton>
            </Item>
            <Item >
            <IconButton href="https://www.linkedin.com/in/luks3110/">
                <LinkedInIcon sx={{ mr: "1rem", fontSize: { sm: "18px" } }} />
                    <Text >LinkedIn</Text>
                </IconButton>
            </Item>
            <Item >
            <IconButton onClick={handleLogout}>
                    <LogoutIcon sx={{ mr: "1rem", fontSize: { sm: "18px" } }} />
                        <Text >Logout</Text>
                    </IconButton>
            </Item>
        </ContainerStyled>
    )
}

export default Leftbar
