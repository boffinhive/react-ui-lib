import React from 'react';
import { Button, ButtonProps } from 'primereact/button';
import '../styles/tailwind.css';
import '../styles/primereact.scss';

export const StyledButton = (props: ButtonProps) => {
  return <Button {...props} className={`p-button ${props.className || ''}`} />;
};