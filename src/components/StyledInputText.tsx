import React from 'react';
import { InputText, InputTextProps } from 'primereact/inputtext';
import '../styles/tailwind.css';
import '../styles/primereact.scss';

export const StyledInputText = (props: InputTextProps) => {
  return <InputText {...props} className={`p-inputtext ${props.className || ''}`} />;
};