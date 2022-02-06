import { fireEvent, screen } from '@testing-library/react'
import theme from 'styles/theme'
import { renderWithTheme } from 'utils/tests/helpers'

import GameCard from '.'

const gameProps = {
  title: 'Population Zero',
  developer: 'Rockstar Games',
  img: 'https://source.unsplash.com/user/willianjusten/300x140',
  price: 'R$ 235,00'
}

describe('<GameCard />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<GameCard {...gameProps} />)

    expect(
      screen.getByRole('heading', { name: gameProps.title })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: gameProps.developer })
    ).toBeInTheDocument()

    expect(screen.queryByText('R$ 235,00')).toBeInTheDocument()

    expect(
      screen.getByRole('img', { name: /Population Zero/i })
    ).toHaveAttribute('src', `${gameProps.img}`)

    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render price in label', () => {
    renderWithTheme(<GameCard {...gameProps} />)

    const price = screen.getByText('R$ 235,00')

    expect(price).not.toHaveStyle({ textDecoration: 'line-through' })
    expect(price).toHaveStyle({ backgroundColor: theme.colors.secondary })
  })

  it('should render a line-through in price when promotional', () => {
    renderWithTheme(<GameCard {...gameProps} promotionalPrice="R$ 15,00" />)

    expect(screen.getByText('R$ 235,00')).toHaveStyle({
      textDecoration: 'line-through'
    })

    expect(screen.getByText('R$ 15,00')).not.toHaveStyle({
      textDecoration: 'line-through'
    })
  })

  it('should render a filled Favorite icon when favorite is true', () => {
    renderWithTheme(<GameCard {...gameProps} favorite />)

    expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument()
  })

  it('should call onFav method when favorite is clicked', () => {
    const onFav = jest.fn()
    renderWithTheme(<GameCard {...gameProps} favorite onFav={onFav} />)

    fireEvent.click(screen.getAllByRole('button')[0])

    expect(onFav).toBeCalled()
  })
})
