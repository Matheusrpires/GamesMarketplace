import styled, { css, DefaultTheme } from 'styled-components'
import { TextFieldProps } from '.'

type InputWrapper = Pick<TextFieldProps, 'iconPosition'>

type WrapperProps = Pick<TextFieldProps, 'disabled'> & { error?: boolean }

export const Label = styled.label`
  ${({ theme }) => css`
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} 0;
    background: transparent;
    border: 0;
    outline: none;
    width: 100%;
  `}
`

export const InputWrapper = styled.div<InputWrapper>`
  ${({ theme, iconPosition }) => css`
    display: flex;
    gap: ${theme.spacings.xsmall};
    background: ${theme.colors.lightGray};
    border-radius: 0.2rem;
    padding: 0 ${theme.spacings.xsmall};
    border: 0.2rem solid;
    border-color: ${theme.colors.lightGray};

    ${iconPosition == 'right' &&
    css`
      flex-direction: row-reverse;
    `}

    &:focus-within {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }
  `}
`

export const Icon = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 2.2rem;
    color: ${theme.colors.gray};

    & > svg {
      width: 100%;
    }
  `}
`

export const Error = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.red};
    font-size: ${theme.font.sizes.xsmall};
  `}
`

export const Input = styled.input`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} 0;
    background: transparent;
    border: 0;
    outline: none;
    width: 100%;
  `}
`

const wrapperModifiers = {
  disabled: (theme: DefaultTheme) => css`
    ${Label},
    ${Input},
    ${Icon} {
      cursor: not-allowed;
      color: ${theme.colors.gray};
      &::placeholder {
        color: currentColor;
      }
    }
  `,
  error: (theme: DefaultTheme) => css`
    ${InputWrapper} {
      border-color: ${theme.colors.red};
    }
    ${Icon},
    ${Label} {
      color: ${theme.colors.red};
    }
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, disabled, error }) => css`
    ${disabled && wrapperModifiers.disabled(theme)}
    ${error && wrapperModifiers.error(theme)}
  `}
`
