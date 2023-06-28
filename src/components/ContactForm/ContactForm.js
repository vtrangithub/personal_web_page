import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import emailjs from 'emailjs-com';
import { Typography } from '@mui/material';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Configure my EmailJS service and template IDs
        const serviceId = 'service_ti5dkhr';
        const templateId = 'template_hd49uta';
        const userId = 'IeF-RQgFYCfQN2_by';

        emailjs.send(serviceId, templateId, formData, userId)
            .then(() => {
                alert('Your message has been sent successfully!');
                setFormData({ name: '', email: '', message: '' });
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('Oops! Something went wrong. Please try again later.');
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <Typography color="springgreen" align ="center" variant="p" component="p" gutterBottom>
                <b>Contact Me</b>
            </Typography>
            <TextField
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                variant="outlined"
                margin="normal"
                required
                fullWidth
            />
            <TextField
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                variant="outlined"
                margin="normal"
                type="email"
                required
                fullWidth
            />
            <TextField
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                variant="outlined"
                margin="normal"
                multiline
                rows={4}
                required
                fullWidth
            />
            <Button type="submit" variant="contained" color="primary">
                Send Message
            </Button>
        </form>
    );
};

export default ContactForm;