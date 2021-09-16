import React from 'react';
import styled, { css } from 'styled-components';

import defaultTheme from '../themes';
import Loader from './Loader';

const Button: React.FC<ButtonProps> = ({ label, type = 'button', disabled = false, loading = false, ...props }) => {
  let _loading = loading;

  if (disabled) {
    _loading = false;
  }

  return (
    <Root disabled={disabled || loading} $disabled={disabled} $loading={_loading} type={type} {...props}>
      {_loading ? (
        <Loader color={props.variant === 'primary' ? defaultTheme.colors.color1 : defaultTheme.colors.color2} />
      ) : (
        label
      )}
    </Root>
  );
};

export interface ButtonProps {
  variant: ButtonVariant;
  label: string;
  type?: ButtonType;
  disabled?: boolean;
  loading?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick: (...args: any[]) => any;
}

export type ButtonVariant = 'primary' | 'secondary';

export type ButtonType = 'button' | 'reset' | 'submit';

interface RootProps extends Omit<ButtonProps, 'disabled' | 'loading' | 'label' | 'onClick'> {
  $loading: boolean;
  $disabled: boolean;
}

const Root = styled.button<RootProps>`
  min-height: 54px;
  border: 0;

  padding: 17px;
  min-width: 100px;
  transition: 0.3s;
  ${({ theme, variant, disabled }) => css`
    ${variant === 'primary' ? theme.typography.subhead1 : theme.typography.subhead2}
    ${disabled &&
    css`
      opacity: 1;
    `}
  `};
  cursor: ${({ $loading, $disabled }) => {
    if ($disabled || $loading) {
      return 'default';
    } else {
      return 'pointer';
    }
  }};
  color: ${({ variant, $disabled, theme: { colors } }) => {
    switch (variant) {
      case 'primary':
        if ($disabled) {
          return colors.color2;
        } else {
          return colors.color1;
        }
      case 'secondary':
        if ($disabled) {
          return colors.color3;
        } else {
          return colors.color2;
        }
      default:
        return colors.color2;
    }
  }};
  background-color: ${({ variant, $disabled, theme: { colors } }) => {
    switch (variant) {
      case 'primary':
        if ($disabled) {
          return colors.color8;
        } else {
          return colors.color6;
        }
      case 'secondary':
        return colors.color5;
      default:
        return colors.color4;
    }
  }};
  &:hover {
    ${({ variant, $disabled, $loading }) =>
      variant === 'primary' &&
      !$disabled &&
      !$loading &&
      css`
        opacity: 0.7;
      `};
  }
`;
export default Button;
