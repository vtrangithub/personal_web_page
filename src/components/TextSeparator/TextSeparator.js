import React, { useState } from 'react';
import {
    TextField,
    Button,
    Typography,
    Grid,
    makeStyles
} from '@material-ui/core';
import './TextSeparator.css';

const useStyles = makeStyles(() => ({
    root: {
        margin: '16px auto',
        padding: '16px',
        maxWidth: '400px',
    },
    highlightedText: {
        backgroundColor: '#FFFF00',
    },
}));

const TextSeparator = () => {
    const classes = useStyles();
    const [inputText, setInputText] = useState('');
    const [stringResult, setStringResult] = useState('');
    const [numberResult, setNumberResult] = useState('');
    const [specialCharResult, setSpecialCharResult] = useState('');

    const separateText = () => {
        if (inputText.trim() === '') {
            alert('You should enter something to separate!');
            return;
        }
        const stringRegex = /[A-Za-z]+/g;
        const numberRegex = /[0-9]+/g;
        const specialCharRegex = /[^A-Za-z0-9]+/g;

        const strings = inputText.match(stringRegex);
        const numbers = inputText.match(numberRegex);
        const specialChars = inputText.match(specialCharRegex);

        setStringResult(strings ? strings.join(' ') : '');
        setNumberResult(numbers ? numbers.join(' ') : '');
        setSpecialCharResult(specialChars ? specialChars.join(' ') : '');
    };

    const resetText = () => {
        setInputText('');
        setStringResult('');
        setNumberResult('');
        setSpecialCharResult('');
    };

    const highlightText = (text, highlightClass) => {
        return text.split(' ').map((word, index) => (
            <span key={index} className={highlightClass}>
                {word}
            </span>
        ));
    };

    return (
        <Grid container justify="center" className="center-content">
            <Grid item xs={12} sm={8} md={6} lg={4}>
                <div className={`text-separator ${classes.root}`}>
                    <div className='rainbow-text'>
                        <Typography variant="h4" align="center" gutterBottom>
                            Text Separator App
                        </Typography>
                    </div>

                    <TextField
                        label="Enter your text here"
                        fullWidth
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        margin="normal"
                    />
                    <div className="button-group">
                        <Button variant="contained" color="primary" onClick={separateText}>
                            Separate
                        </Button>
                        <Button variant="contained" color="secondary" onClick={resetText}>
                            Reset
                        </Button>
                    </div>
                    <br />
                    <Typography variant="body1" align="center" gutterBottom>
                        Strings: {highlightText(stringResult, classes.highlightedText)}
                    </Typography>
                    <Typography variant="body1" align="center" gutterBottom>
                        Numbers: {highlightText(numberResult, classes.highlightedText)}
                    </Typography>
                    <Typography variant="body1" align="center">
                        Special Characters:{' '}
                        {highlightText(specialCharResult, classes.highlightedText)}
                    </Typography>
                </div>
            </Grid>
        </Grid>
    );
};

export default TextSeparator;