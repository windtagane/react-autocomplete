import React from 'react';
import './Input.css';

class Input extends React.Component {
    render() {
        return (
            <div className="inputWrapper">
                <div className="login-username">
                    <label for="username">Nom d'utilisateur :</label>
                    <input type="text" name="username" />
                </div>
                <div className="login-password">
                    <label for="password">Mot de passe :</label>
                    <input type="password" name="password" />
                </div>
            </div>
        )
    }
}

export default Input;