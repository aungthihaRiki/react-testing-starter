import { render, screen } from '@testing-library/react'
import { it, expect, describe } from 'vitest'
import Greet from '../../components/Greet'
import '@testing-library/jest-dom/vitest'

describe('Greet Test', () => {
    it('should render Hello with the name when name is provided', () => {
        render(<Greet name="John" />)
        const heading = screen.getByRole('heading');
        expect(heading).toBeInTheDocument();
    })
})