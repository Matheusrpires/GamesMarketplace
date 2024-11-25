import { screen, waitFor } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import userEvent from '@testing-library/user-event'
import { Email } from '@styled-icons/material-outlined/Email'

import TextField from '.'

describe('<TextField />', () => {
  it('Render with label', () => {
    renderWithTheme(<TextField label="Label" labelFor="Field" id="Field" />)

    expect(screen.getByLabelText('Label')).toBeInTheDocument()
  })

  it('Render without label', () => {
    renderWithTheme(<TextField id="Field" />)

    expect(screen.queryByLabelText('Label')).not.toBeInTheDocument()
  })

  it('Render with placeholder', () => {
    renderWithTheme(<TextField placeholder="hey you" />)

    expect(screen.getByPlaceholderText('hey you')).toBeInTheDocument()
  })

  it('Renders with icon', () => {
    renderWithTheme(
      <TextField
        label="Label"
        labelFor="Field"
        id="Field"
        icon={<Email data-testid="icon" />}
      />
    )

    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('Renders with icon in the right side', () => {
    renderWithTheme(
      <TextField
        label="Label"
        labelFor="Field"
        id="Field"
        icon={<Email data-testid="icon" />}
        iconPosition="right"
      />
    )

    expect(screen.getByTestId('icon').parentElement?.parentElement).toHaveStyle(
      {
        'flex-direction': 'row-reverse'
      }
    )
  })

  it('Change value when typing', async () => {
    const onInput = jest.fn()
    renderWithTheme(
      <TextField
        onInput={onInput}
        label="TextField"
        labelFor="TextField"
        id="TextField"
      />
    )
    const input = screen.getByRole('textbox')
    const text = 'This is my new text'
    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).toHaveValue(text)
      expect(onInput).toHaveBeenCalledTimes(text.length)
    })

    expect(onInput).toHaveBeenCalledWith(text)
  })

  it('Is accessible by tab', () => {
    renderWithTheme(
      <TextField label="TextField" labelFor="TextField" id="TextField" />
    )

    const input = screen.getByLabelText('TextField')
    expect(document.body).toHaveFocus()

    userEvent.tab()
    expect(input).toHaveFocus()
  })

  it('Is not accessible by tab when disabled', () => {
    renderWithTheme(
      <TextField
        label="TextField"
        labelFor="TextField"
        id="TextField"
        disabled
      />
    )
    const input = screen.getByLabelText('TextField')
    expect(document.body).toHaveFocus()
    userEvent.tab()
    expect(input).not.toHaveFocus()
  })

  it('Does not changes its value when disabled', async () => {
    const onInput = jest.fn()
    renderWithTheme(
      <TextField
        onInput={onInput}
        label="TextField"
        labelFor="TextField"
        id="TextField"
        disabled
      />
    )
    const input = screen.getByRole('textbox')
    expect(input).toBeDisabled()

    const text = 'This is my new text'
    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).not.toHaveValue(text)
    })

    expect(onInput).not.toHaveBeenCalled()
  })

  it('Render disabled', () => {
    renderWithTheme(
      <TextField label="Label" labelFor="Field" id="Field" disabled />
    )

    expect(screen.getByLabelText('Label')).toBeDisabled()
  })
})
