import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Banner from '.'

const props = {
  img: 'https://source.unsplash.com/user/willianjusten/1042x580',
  title: 'Defy death',
  subtitle: '<p>Play the new <strong>CrashLands</strong> season',
  buttonLabel: 'Buy now',
  buttonLink: '/games/defy-death'
}

describe('<Banner />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<Banner {...props} />)

    expect(container.firstChild).toMatchSnapshot()
  })
  it('should have the proper props', () => {
    renderWithTheme(<Banner {...props} />)

    expect(
      screen.getByRole('heading', { name: /Defy death/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Play the new CrashLands season/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /Buy now/i })).toHaveAttribute(
      'href',
      `${props.buttonLink}`
    )

    expect(screen.getByRole('img', { name: /Defy death/i })).toBeInTheDocument()

    expect(screen.getByLabelText(/Defy death/i)).toHaveAttribute(
      'src',
      `${props.img}`
    )
  })
})
