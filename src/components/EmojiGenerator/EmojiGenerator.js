import React, { useState } from 'react';
import { Emoji } from './Emoji';
import Button from '@mui/material/Button';
import Input from '@mui/base/Input';
import Stack from '@mui/material/Stack';


const EmojiGenerator = () => {
    const [numberOfEmoji, setNumberOfEmoji] = useState(0);
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim() === '') {
            alert('You should enter something');
        }
        else if (parseInt(inputValue) === 0 || parseInt(inputValue) < 0) {
            alert('Please enter a positive number!')
        }
        else if (!isNaN(inputValue) && inputValue < 1500) {
            setNumberOfEmoji(parseInt(inputValue));

        } else {
            alert('Please enter a number which is less then 1500');

        }
    };

    const renderEmoji = () => {
        const emoji = [];
        for (let i = 0; i < numberOfEmoji; i++) {
            emoji.push(<Emoji symbol="
      😀"/>);
        }
        return emoji;
    };
    const handleResetClick = () => {
        setNumberOfEmoji(0);
        setInputValue('');
    }

    return (<>
        <form onSubmit={handleSubmit}>
            <div>
                {/* <input type="number" id="inputNumber" /> */}
                <Stack justifyContent={"center"} spacing={1} direction="row">
                    <Input type="text" value={inputValue} onChange={handleChange} />
                </Stack>
                <br />
                <Stack justifyContent={"center"} spacing={1} direction="row">
                    <Button type="submit" variant="contained" >Generate Emoji</Button>
                    <Button variant="contained" type="button" onClick={handleResetClick}>Reset</Button>
                </Stack>
            </div>
        </form>
        <div>
            {renderEmoji()}
        </div>
    </>
    );
};

export default EmojiGenerator;
