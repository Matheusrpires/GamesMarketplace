import { render, screen } from '@testing-library/react'
import { Settings } from 'react-slick'
import styled from 'styled-components'

import Slider from '.'

const settings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1
}

const Slide = styled.div`
  background: gray;
  width: 30rem;
  padding: 10rem 0;
  border: 0.1rem solid red;
  color: white;
  text-align: center;
`
describe('<Slider />', () => {
  it('should render the heading', () => {
    const { container } = render(
      <Slider settings={settings}>
        <Slide>1</Slide>
        <Slide>2</Slide>
        <Slide>3</Slide>
        <Slide>4</Slide>
        <Slide>5</Slide>
        <Slide>6</Slide>
      </Slider>
    )

    expect(screen.getByRole('heading', { name: /Slider/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
