import Navbar from '@/components/Navbar'
import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('Navbar', () => {
  test('renders component', () => {
    render(
      <Navbar />
    )
  })

  test('has two buttons', () => {
    render(
      <Navbar />
    )
    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(2)
  })

  describe('Contact Menu', () => {
    test('clicking on contact button opens contact menu', async () => {
      render(
        <Navbar />
      )

      const user = userEvent.setup()

      expect(screen.queryByTestId('contact-menu')).toBeNull()

      const contactButton = screen.getByTestId('contact-button')
      await user.click(contactButton)

      screen.getByTestId('contact-menu')
    })

    test('contact links have hrefs', async () => {
      render(
        <Navbar />
      )
      const user = userEvent.setup()

      const contactButton = screen.getByTestId('contact-button')
      await user.click(contactButton)

      screen.getByTestId('contact-menu')

      const githubLink = screen.getByTestId('github-link')
      expect(githubLink).toHaveAttribute('href', 'https://github.com/gomisroca/')
    })
  })

  describe('Theme Menu', () => {
    test('clicking on theme button opens theme menu', async () => {
      render(
        <Navbar />
      )

      const user = userEvent.setup()

      expect(screen.queryByTestId('theme-menu')).toBeNull()

      const themeButton = screen.getByTestId('theme-button')
      await user.click(themeButton)

      screen.getByTestId('theme-menu')
    })
  })
})
