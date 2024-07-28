import Navbar from '@/components/Navbar'
import '@testing-library/jest-dom'
import {cleanup, render, screen} from '@testing-library/react'
import {MemoryRouter} from 'react-router-dom'
import {afterEach, describe, it, expect} from 'vitest'

describe('Navbar', () => {
  afterEach(cleanup)

  it('should render component', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    )
  })

  it('should have links in buttons', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    )
    const links = screen.getAllByRole('link')
    links.forEach(link => {
      expect(link).toHaveAttribute('href')
    })
  })
})
