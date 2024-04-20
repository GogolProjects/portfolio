import {render, screen} from '@testing-library/react'
import About from '@/components/About'
import { describe } from 'node:test'

describe('About', () => {
    it('should have a header ', () => {
        render(<About/>)
        const myElem = screen.getByRole('header')
        expect(myElem).toBeInTheDocument()
    })
})