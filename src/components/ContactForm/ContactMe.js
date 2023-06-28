import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Typography } from '@mui/material';

const useStyles = makeStyles((theme) => ({
    form: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '300px',
        margin: '0 auto',
    },
    input: {
        marginBottom: theme.spacing(2),
    },
    submitButton: {
        alignSelf: 'flex-end',
    },
}));

export default function ContactMe() {
    
    // Configure my EmailJS service and template IDs
    const serviceId = 'service_ti5dkhr';
    const templateId = 'template_hd49uta';
    const userId = 'IeF-RQgFYCfQN2_by';

    const classes = useStyles();
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(serviceId, templateId, form.current, userId)
            .then((result) => {
                console.log(result.text);
                alert('Your message was sent. Thanks for contacting me. Have a great day!');
                form.current.reset();
            })
            .catch((error) => {
                console.log(error.text);
            });
    };

    return (
        <form className={classes.form} ref={form} onSubmit={sendEmail}>
            <Typography color="springgreen" align ="center" variant="p" component="p" gutterBottom>
                <b>Contact Me</b>
            </Typography>

            <TextField
                className={classes.input}
                label="Your Name"
                type="text"
                name="user_name"
                required
            />
            <TextField
                className={classes.input}
                label="Your Email"
                type="email"
                name="user_email"
                required
            />
            <TextField
                className={classes.input}
                label="Your Message"
                name="message"
                multiline
                rows={4}
                required
            />
            <Button
                className={classes.submitButton}
                variant="contained"
                color="primary"
                type="submit"
            >
                Send
            </Button>
        </form>
    );
}
