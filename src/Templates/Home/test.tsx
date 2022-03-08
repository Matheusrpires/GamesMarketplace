import 'match-media-mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Home from '.'

import bannersMock from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

const props = {
  banners: bannersMock,
  newReleases: [gamesMock[0]],
  mostPopularHighLight: highlightMock,
  mostPopularGames: [gamesMock[0]],
  comingSoonGames: [gamesMock[0]],
  comingSoonHighLight: highlightMock,
  comingSoonMoreGames: [gamesMock[0]],
  freeGamesHighLight: highlightMock,
  freeGames: [gamesMock[0]]
}

describe('<Home />', () => {
  it('should render the Home', () => {
    renderWithTheme(<Home {...props} />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /contact us/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /News/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Most Popular/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Upcomming/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Free Games/i })
    ).toBeInTheDocument()

    // banner
    expect(screen.getAllByText(/defy death 1/i)).toHaveLength(1)
    // card game ( 5 sections com 1 card cada = 5x1 = 5)
    expect(screen.getAllByText(/population zero/i)).toHaveLength(5)
    // highlight
    expect(screen.getAllByText(/Read Dead it’s back/i)).toHaveLength(3)
  })
})
