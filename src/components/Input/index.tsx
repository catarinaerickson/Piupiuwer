import React, {InputHTMLAttributes} from 'react';

import { InputComponent } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    label: string;
    name: string;
    type: string;
}

const Input: React.FC<InputProps> = ({ label, name, type, ...rest }) => {
    return (
        <InputComponent>
            <div className="input-block">
                <div className="label-block">
                    <label htmlFor={ name }>
                        { label }
                    </label>
                    <input id={ name } type={ type } { ...rest }/>
                </div>
            </div>
        </InputComponent>
    )
}

export default Input;