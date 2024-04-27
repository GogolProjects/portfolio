import Start from '@/components/Start'
import {render, screen} from '@testing-library/react'
describe ('Start', () => {
    it('should render img and descripton', () => {
        render (<Start/>)
            expect(screen.getByTestId('img')).toBeInTheDocument()
            expect(screen.getByTestId('github')).toBeInTheDocument()
            expect(screen.getByTestId('linkedin')).toBeInTheDocument()
            expect(screen.getByTestId('description')).toBeInTheDocument()
    })
})