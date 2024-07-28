import Banner from '@/components/Banner'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

describe('<Banner />', () => {

  test('renders the component with the correct title', () => {
    render(<Banner />)
    screen.getByText('Adrià Gomis')
  })

  test('renders the avatar placeholder', () => {
    render(<Banner />)
    screen.getByText('AG')
  })
})
