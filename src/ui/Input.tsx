import React from 'react';
import styled, { css } from 'styled-components';

import SvgInputErrorIcon from '../assets/svg/InputErrorIcon';
import SvgInputSuccessIcon from '../assets/svg/InputSuccessIcon';

const Input: React.FC<InputProps> = ({
  success = false,
  hasError = false,
  readOnly = false,
  maxLength = 256,
  disabled = false,
  ...props
}) => {
  let _success = success;
  let _hasError = hasError;

  if (_success && _hasError) {
    _success = false;
    _hasError = false;
  }

  return (
    <Root>
      <StyledInput
        $success={_success}
        $hasError={_hasError}
        readOnly={readOnly}
        disabled={disabled}
        maxLength={maxLength}
        {...props}
      />
      <SuccessIcon $visible={_success} disabled={disabled} />
      <InputErrorIcon $visible={_hasError} disabled={disabled} />
    </Root>
  );
};

const Root = styled.div`
  position: relative;
`;

export interface InputProps {
  value: string | number;
  type?: InputType;
  placeholder?: string;
  name?: string;
  disabled?: boolean;
  success?: boolean;
  hasError?: boolean;
  min?: number;
  max?: number;
  maxLength?: number;
  readOnly?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange: (...args: any[]) => any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onKeyDown?: (...args: any[]) => any;
}

export type InputType = 'text' | 'number' | 'textarea';

interface StyledInputProps extends Omit<InputProps, 'type' | 'value' | 'placeholder' | 'onChange'> {
  $success?: boolean;
  $hasError?: boolean;
}

const StyledInput = styled.input<StyledInputProps>`
  ${({ theme, disabled }) => css`
    ${theme.typography.subhead2}
    ${disabled &&
    css`
      opacity: 0.7;
    `}
  `};
  transition: 0.3s;
  width: 100%;
  padding: 12px;
  box-sizing: border-box;
  border-radius: 14px;
  border: 1px solid transparent;
  outline: none;
  color: ${({ disabled, $hasError, theme: { colors } }) => {
    if (disabled) {
      return colors.color3;
    }
    if ($hasError) {
      return colors.color12;
    } else {
      return colors.color0;
    }
  }};
  background-color: ${({ $success, $hasError, theme: { colors } }) => {
    if ($success || $hasError) {
      return colors.color14;
    } else {
      return colors.color5;
    }
  }};
  :focus {
    border: 1px solid #e2e2ea;
  }
`;

interface SuccessIconProps {
  disabled: boolean;
  $visible: boolean;
}

const SuccessIcon = styled(SvgInputSuccessIcon)<SuccessIconProps>`
  transition: 0.1s;
  position: absolute;
  top: 10px;
  right: 12px;
  pointer-events: none;
  opacity: ${({ disabled, $visible }) => {
    if ($visible && disabled) {
      return 0.5;
    } else if ($visible) {
      return 1;
    } else {
      return 0;
    }
  }};
`;

interface InputErrorIconProps {
  disabled: boolean;
  $visible: boolean;
}

const InputErrorIcon = styled(SvgInputErrorIcon)<InputErrorIconProps>`
  transition: 0.1s;
  position: absolute;
  top: 10px;
  right: 12px;
  pointer-events: none;
  opacity: ${({ disabled, $visible }) => {
    if ($visible && disabled) {
      return 0.5;
    } else if ($visible) {
      return 1;
    } else {
      return 0;
    }
  }};
`;

export default Input;
