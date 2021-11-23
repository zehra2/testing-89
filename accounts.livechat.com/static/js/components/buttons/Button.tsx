import React from 'react';
import classNames from 'classnames';
import { useTheme, Theme } from '../../contexts/ThemeContext';
import './button.css';

interface IProps {
  ghost?: boolean;
  small?: boolean;
  lighter?: boolean;
  onClick?(e: any): void;
}

const Button = (props: IProps & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { disabled, ghost, small, lighter, form, color, onClick, tabIndex, children, ...buttonProps } = props;
  const { theme } = useTheme();

  let defaultColor;

  switch (theme) {
    case Theme.integration:
      defaultColor = 'blue';
      break;
    default:
      defaultColor = 'red';
  }

  const classes = classNames('button', color || defaultColor, {
    disabled,
    ghost,
    small,
    lighter,
    form
  });

  return (
    <button
      {...buttonProps}
      className={classes}
      disabled={disabled}
      onClick={onClick}
      onTouchStart={onClick}
      tabIndex={tabIndex}
    >
      <span>{children}</span>
    </button>
  );
};

export default Button;
