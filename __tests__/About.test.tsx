import {render, screen} from '@testing-library/react'
import About from '@/components/About'


describe('About', () => {
    it('should have text About ', () => {
        render(<About/>)
        const myElem = screen.getByText('About')
        expect(myElem).toBeInTheDocument()
    })
})