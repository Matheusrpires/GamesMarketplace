import Home, { HomeTemplateProps } from '../Templates/Home'
import bannersMock from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export function getServerSideProps() {
  return {
    props: {
      banners: bannersMock,
      newReleases: gamesMock,
      mostPopularHighLight: highlightMock,
      mostPopularGames: gamesMock,
      comingSoonGames: gamesMock,
      comingSoonHighLight: highlightMock,
      comingSoonMoreGames: gamesMock,
      freeGamesHighLight: highlightMock,
      freeGames: gamesMock
    }
  }
}
