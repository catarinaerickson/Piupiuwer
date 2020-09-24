import React, { ButtonHTMLAttributes } from 'react';
import { ButtonComponent } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
    isSmall: boolean;
}

const Button: React.FC<ButtonProps> = ({ title, isSmall, ...rest}) => {
    return (
        <ButtonComponent isSmall={ isSmall } { ...rest }>
            { title }
        </ButtonComponent>
    )
}

export default Button