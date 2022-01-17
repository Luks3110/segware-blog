import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from './Login';

test ('Campos de inserção aparecem e só é permitido enviar após preenchidos', () => {
    render(<Login />);
    expect(screen.getByRole('textbox', {name: /Username/i})).toBeVisible();
    expect(screen.getByLabelText(/Password/i)).toBeVisible();
    expect(screen.getByRole('link', {  name: /não tem conta\? registre\-se!/i})).toBeVisible();
    expect(screen.getByRole('button', {name: /Entrar/i})).toBeEnabled();
    expect(screen.getByRole('link', {  name: /esqueceu a senha\?/i})).toBeVisible();

})



