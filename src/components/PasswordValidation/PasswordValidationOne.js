import React, { useState } from 'react';
import Input from '@mui/base/Input';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


const PasswordValidationOne = () => {
    const [password, setPassword] = useState('');
    const [isValid, setValid] = useState(false);

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleValidation = () => {
        // Password validation logic goes here
        const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
        const isValidPassword = regex.test(password);
        setValid(isValidPassword);
    };

    const handleResetClick = () => {

        setPassword('');
    }

    return (
        <div>
            <Stack justifyContent={"center"} spacing={1} direction="row">
                <Input
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder="Enter your password here"
                />

            </Stack>
            <br />
            <Stack justifyContent={"center"} spacing={1} direction="row">
                <Button variant="contained" type="button" onClick={handleResetClick}>Reset</Button>
                <Button type="button" variant="contained" onClick={handleValidation}>Validate</Button>
                {isValid && <p><strong>Good Job! Your password is valid</strong></p>}
                {!isValid && password !== '' && <p><strong>Please check the criteria</strong></p>}
            </Stack>



        </div>
    );
};

export default PasswordValidationOne;