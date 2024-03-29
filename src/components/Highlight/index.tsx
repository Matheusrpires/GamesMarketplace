import Button from 'components/Button'
import * as S from './styles'

export type HighLightProps = {
  alignment?: 'right' | 'left'
  title: string
  subtitle: string
  backgroundImage: string
  floatImage?: string
  buttonLabel: string
  buttonLink: string
}

const Highlight = ({
  alignment = 'right',
  title,
  subtitle,
  backgroundImage,
  floatImage,
  buttonLabel,
  buttonLink
}: HighLightProps) => (
  <S.Wrapper backgroundImage={backgroundImage} alignment={alignment}>
    {!!floatImage && <S.FloatImage src={floatImage} alt={title} />}
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>
      <Button as="a" href={buttonLink}>
        {buttonLabel}
      </Button>
    </S.Container>
  </S.Wrapper>
)

export default Highlight
