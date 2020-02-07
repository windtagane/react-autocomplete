import React from 'react';
import './LoginForm.css';

import Button from '../../Button/Button';
import Input from '../../Input/Input';

class LoginForm extends React.Component {
    render() {
        return (
            <div className="LoginForm">
                <div className="LoginForm-Title">Connexion</div>

                <div className="Wrapper">
                    <form method="POST" action="/login">
                        <Input />
                        <Button name="Connexion" type="submit"/>
                    </form>
                </div>
            </div>
        ) 
    }
}

export default LoginForm;
