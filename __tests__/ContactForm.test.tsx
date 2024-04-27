import {render, screen} from '@testing-library/react'
import ContactForm from '@/components/ContactForm'
import userEvent from '@testing-library/user-event'

jest.mock("react-dom", () => ({
    ...jest.requireActual("react-dom"),
     useFormStatus: () => ({ pending: false }),
  }));

describe('ContactForm',  () => {
   
      
    it('should have change button disability ', () => {
       render (<ContactForm/>)
       const email = screen.getByTestId('email')
       const message = screen.getByTestId('message')
        const button = screen.getByTestId('button')
       
        expect(button).toBeDisabled
        expect(email).not.toHaveTextContent
        expect(message).not.toHaveTextContent

       userEvent.type(email, 'test@test.com')
       userEvent.type(message, 'test')
       userEvent.click(button)

        expect(button).not.toBeDisabled()

    })
})