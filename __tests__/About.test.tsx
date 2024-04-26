import {render, screen, renderHook} from '@testing-library/react'
import About from '@/components/About'

describe('About', () => {
    it('should have text About ', () => {
        render(<About/>)
        expect(screen.getByText('About')).toBeInTheDocument()
        expect(screen.getAllByRole('paragraph')).toHaveTextContent
    })
})