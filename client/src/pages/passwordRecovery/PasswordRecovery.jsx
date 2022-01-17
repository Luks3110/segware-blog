import * as React from 'react';
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from "react";

const theme = createTheme();

export function PasswordRecovery() {
    const baseUrl = 'https://segware-book-api.segware.io/api/forgot-password'

    const Default = () => (
        <>
            <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoFocus
                onChange={(e) => setUsername(e.target.value)}
                error={usernameError}
            />

            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
            >
                Recuperar
            </Button>
            <Grid container>
                <Grid item>
                    <Link href="/register" variant="body2">
                        {"Não tem conta? Registre-se!"}
                    </Link>
                </Grid>
            </Grid>
        </>
    )

    const [component, setComponent] = useState(<Default />);
    const [username, setUsername] = useState("");
    const [openAlert, setOpenAlert] = useState(false);
    const [severity, setSeverity] = useState("success");
    const [message, setMessage] = useState("");
    const [usernameError, setUsernameError] = useState(false);
    const user = {
        username: "",
        password: "",
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // eslint-disable-next-line no-console
        setUsernameError(false);

        if (username === "") {
            setUsernameError(true);
        }
        else {
            axios.get(`${baseUrl}/${username}`)
                .then(function (response) {
                    if (response.data.username !== undefined && response.data.password !== undefined) {
                        user.username = response.data.username;
                        user.password = response.data.password;
                        console.log(user);
                        setOpenAlert(true);
                        setSeverity("success");
                        setMessage("Senha recuperada com sucesso!")
                        setComponent(<Recovered />);
                    } else {
                        setOpenAlert(true);
                        setSeverity("error");
                        setMessage("Usuário não encontrado.")
                    }
                })
                .catch(function (error) {
                    console.log(error);
                    setSeverity("error");
                });
        }
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenAlert(false);
    };

    const Recovered = () => (
        <>
            <Typography variant="h6">
                Username: {user.username}
            </Typography>
            <Typography variant="h6">
                Password: {user.password}
            </Typography>
        </>
    )

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Recupere a senha
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        {component}
                    </Box>
                </Box>
            </Container>
            <Snackbar
                open={openAlert}

                autoHideDuration={4000}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}>
                <Alert
                    onClose={handleClose}
                    severity={severity}
                    sx={{ width: '100%' }}>
                    {message}
                </Alert>
            </Snackbar>
        </ThemeProvider>
    );
}