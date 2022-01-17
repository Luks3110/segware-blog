import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Home from './Home';

test ('No render inicial, devem ser exibidos os componentes Grid, Navbar, Rightbar, Leftbar e Feed', () => {
    render(<Home />);

    expect(screen.getByRole('link', { name: /Github/i })).toBeVisible();
    expect(screen.getByRole('link', { name: /Home/i })).toBeVisible();
    expect(screen.getByRole('link', { name: /LinkedIn/i })).toBeVisible();
    expect(screen.getByRole('button', {name: /Add/i})).toBeVisible(); 
    expect(screen.getByRole('list')).toBeVisible();  
    expect(screen.getByRole('img', {name: /reactJS/i})).toBeVisible(); 
    expect(screen.getByRole('img', {name: /MUI/i})).toBeVisible(); 

})



