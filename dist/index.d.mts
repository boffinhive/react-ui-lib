import * as react_jsx_runtime from 'react/jsx-runtime';
import { ButtonProps } from 'primereact/button';

interface CustomButtonProps extends ButtonProps {
    className?: string;
}
declare const Button: ({ className, ...props }: CustomButtonProps) => react_jsx_runtime.JSX.Element;

export { Button, type CustomButtonProps };
