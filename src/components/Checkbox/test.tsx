import { screen } from '@testing-library/react'

import Checkbox from '.'
import { renderWithTheme } from 'utils/tests/helpers'

describe('<Checkbox />', () => {
  it('should render with label', () => {
    renderWithTheme(<Checkbox label="checkbox label" labelFor="checkbox" />)

    expect(screen.getByRole('checkbox')).toBeInTheDocument()

    expect(screen.getByLabelText(/checkbox label/i)).toBeInTheDocument()

    expect(screen.getByText(/checkbox label/i)).toHaveAttribute(
      'for',
      'checkbox'
    )
  })

  it('should render without a label', () => {
    renderWithTheme(<Checkbox />)

    expect(screen.queryByText(/checkbox label/i)).not.toBeInTheDocument()
  })

  it('should render with a black label', () => {
    renderWithTheme(
      <Checkbox label="checkbox label" labelFor="checkbox" labelColor="black" />
    )

    expect(screen.queryByText(/checkbox label/i)).toHaveStyle({
      color: '#030517'
    })
  })
})
