import { Fab } from '@mui/material';
import { Tooltip, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState } from "react";
import axios from 'axios';
import * as React from 'react';
import AddIcon from '@mui/icons-material/Add';
import Modal from '@mui/material/Modal';
import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const FabStyled = styled(Fab)(({ theme }) => ({
    position: 'fixed',
    bottom: 10,
    right: 10,
}));

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ContainerStyled = styled(Container)(({ theme }) => ({
    width: 425,
    height: 450,
    backgroundColor: "white",
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: 'auto',
    marginTop: '7%',
    [theme.breakpoints.down('sm')]: {
        width: '100vw',
        height: '100vh',
    }
}));

const Item = styled('div')(({ theme }) => ({
    marginBottom: theme.spacing(3),
}));

const Add = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const [openAlert, setOpenAlert] = React.useState(false)
    const [post, setPost] = useState("");
    const url = "https://segware-book-api.segware.io/api/feed";
    const [severity, setSeverity] = useState("")
    const [message, setMessage] = useState("")
    const [contentError, setContentError] = useState(false)


    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(post)
        if(post.length === 0){
            setContentError(true);
            setSeverity("error")
            setMessage("Preencha o campo de conteúdo do post!")
        }

        if (contentError !== true) {
            try {
                const res = await axios.post(url,
                    { content: post }, {
                    headers: {
                        Authorization: "Bearer " + JSON.parse(localStorage.getItem("token"))
                    },
                });
                setMessage("Post adicionado com sucesso!")
                setSeverity("success")
                console.log(res)
                setOpen(false)
            } catch (error) {
                console.log(error)
                setMessage("Erro ao adicionar post")
                setSeverity("error")
            }
        }
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenAlert(false);
    };

    return (
        <>
            <Tooltip title="Add" aria-label="Add" onClick={handleOpen}>
                <FabStyled color="primary">
                    <AddIcon />
                </FabStyled>
            </Tooltip>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <ContainerStyled>
                    <Box
                        component="form"
                        autoComplete="off"
                        sx={{ padding: 2 }}
                        onSubmit={handleSubmit}
                    >
                        <Typography variant="h6" gutterBottom>Crie um post!</Typography>
                        <Item>
                            <TextField
                                required
                                fullWidth
                                sx={{ width: '100%', mt: 5 }}
                                id="outlined-multiline-static"
                                label="Conteúdo do texto"
                                multiline
                                rows={10}
                                size="small"
                                placeholder="Escreva aqui seu texto"
                                onChange={(e) => setPost(e.target.value)}
                                error={contentError}
                            />

                        </Item>
                        <Item>
                            <Button
                                type="submit"
                                variant="outlined"
                                sx={{ mr: 2 }}
                                onClick={() => setOpenAlert(true)}
                            >
                                Criar
                            </Button>
                            <Button
                                variant="outlined"
                                color="error"
                                sx={{ mr: 2 }}
                                onClick={() => setOpen(false)} >
                                Cancelar
                            </Button>
                        </Item>
                    </Box>
                </ContainerStyled>
            </Modal>

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
        </>
    )
}

export default Add
