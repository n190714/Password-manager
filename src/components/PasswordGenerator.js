import React, { useState } from 'react';
import '../App.css'; // Ensure this path is correct

const PasswordGenerator = () => {
    const [username, setUsername] = useState('');
    const [username2, setUsername2] = useState('');
    const [password, setPassword] = useState('');
    const [passwordLength, setPasswordLength] = useState(12);
    const [includeUppercase, setIncludeUppercase] = useState(true);
    const [includeLowercase, setIncludeLowercase] = useState(true);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSymbols, setIncludeSymbols] = useState(true);
    const [generatedPassword, setGeneratedPassword] = useState('');

    const generatePassword = () => {
        let charset = '';
        if (includeUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (includeLowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
        if (includeNumbers) charset += '0123456789';
        if (includeSymbols) charset += '!@#$%^&*()_+~`|}{[]:;?><,./-=';

        let password = '';
        for (let i = 0; i < passwordLength; ++i) {
            const randomChar = charset.charAt(Math.floor(Math.random() * charset.length));
            password += randomChar;
        }
        setGeneratedPassword(password);
    };

    const handleSave = () => {
        localStorage.setItem(username, generatedPassword);
        setUsername('');
        setGeneratedPassword('');
    };

    const handleRetrieve = () => {
        const savedPassword = localStorage.getItem(username);
        if (savedPassword) {
            setGeneratedPassword(savedPassword);
        } else {
            alert('Password not found for this username.');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Username:', username);
        console.log('Username2:', username2);
        console.log('Password:', password);
        // Additional handling logic here
    };

    return (
        <div className="container">
            
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Username:
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Password Length:
                        <input
                            type="number"
                            value={passwordLength}
                            onChange={(e) => setPasswordLength(parseInt(e.target.value))}
                        />
                    </label>
                </div>
                <div className="checkbox-container">
                    <label className="checkbox-label">
                        <input
                            type="checkbox"
                            checked={includeUppercase}
                            onChange={() => setIncludeUppercase(!includeUppercase)}
                        />{' '}
                        Include Uppercase
                    </label>
                    <label className="checkbox-label">
                        <input
                            type="checkbox"
                            checked={includeLowercase}
                            onChange={() => setIncludeLowercase(!includeLowercase)}
                        />{' '}
                        Include Lowercase
                    </label>
                    <label className="checkbox-label">
                        <input
                            type="checkbox"
                            checked={includeNumbers}
                            onChange={() => setIncludeNumbers(!includeNumbers)}
                        />{' '}
                        Include Numbers
                    </label>
                    <label className="checkbox-label">
                        <input
                            type="checkbox"
                            checked={includeSymbols}
                            onChange={() => setIncludeSymbols(!includeSymbols)}
                        />{' '}
                        Include Symbols
                    </label>
                </div>
                <button type="button" onClick={generatePassword}>Generate Password</button>
                <div>
                    <label>
                        Generated Password:
                        <input
                            type="text"
                            value={generatedPassword}
                            readOnly
                        />
                    </label>
                </div>
                <button type="button" onClick={handleSave}>Save</button>
                <button type="button" onClick={handleRetrieve}>Retrieve</button>
                <div className="header">PASSWORD MANAGEMENT</div>
                <div>
                    <label>
                        Username :
                        <input
                            type="text"
                            value={username2}
                            onChange={(e) => setUsername2(e.target.value)}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Password:
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default PasswordGenerator;
