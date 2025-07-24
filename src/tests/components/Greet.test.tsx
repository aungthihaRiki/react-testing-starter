import { render, screen } from '@testing-library/react'
import Greet from '../../components/Greet'

describe('Greet Test', () => {
    it('should render Hello with the name when name is provided', () => {
        render(<Greet name="John" />)

        const heading = screen.getByRole('heading');    // h1,h2,h3
        expect(heading).toBeInTheDocument();
        expect(heading).toHaveTextContent(/John/i); // case insensitive match Hello, john, JOHN, JoHn is fine
    })

        it('should render Button when name is not provided', () => {
        render(<Greet />)

        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent(/Login/i);
    })
})