import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Register from './Register';

test ('Campos de texto, botões e links habilitados', () => {
    render(<Register />);
    expect(screen.getByRole('textbox', {name: /Username/i})).toBeVisible();
    expect(screen.getByRole('button', {name: /Registrar/i})).toBeEnabled();
    expect(screen.getByRole('link')).toBeVisible();
    expect(getByLabelText(/Password */i)).toBeVisible();
})



