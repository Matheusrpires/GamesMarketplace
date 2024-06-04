import { screen, waitFor } from '@testing-library/react'

import Checkbox from '.'
import { renderWithTheme } from 'utils/tests/helpers'
import userEvent from '@testing-library/user-event'

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

  it('should dispatch onCheck when status changes', async () => {
    const onCheck = jest.fn()

    renderWithTheme(
      <Checkbox
        label="checkbox label"
        labelFor="checkbox"
        labelColor="black"
        onCheck={onCheck}
      />
    )

    expect(onCheck).not.toHaveBeenCalled()

    userEvent.click(screen.getByRole('checkbox'))

    await waitFor(() => {
      expect(onCheck).toHaveBeenNthCalledWith(1, true)
    })
  })

  it('should render checked when isChecked is true', async () => {
    const onCheck = jest.fn()

    renderWithTheme(
      <Checkbox
        label="checkbox label"
        labelFor="checkbox"
        labelColor="black"
        onCheck={onCheck}
        isChecked
      />
    )

    expect(onCheck).not.toHaveBeenCalled()

    userEvent.click(screen.getByRole('checkbox'))

    await waitFor(() => {
      expect(onCheck).toHaveBeenNthCalledWith(1, false)
    })
  })
})
