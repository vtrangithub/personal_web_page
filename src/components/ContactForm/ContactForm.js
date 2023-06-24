// import React, { useState, useEffect } from 'react';
// import { Typography, Grid, Button, TextField } from '@mui/material';
// import validate from 'validate.js';
// import emailjs from 'emailjs-com';

// const USER_ID = "IeF-RQgFYCfQN2_by"
// const TEMPLATE_ID = "template_hd49uta"
// const SERVICE_ID = "service_ti5dkhr";


// const schema = {
//   name: {
//     presence: { allowEmpty: false, message: 'is required' },
//     length: {
//       maximum: 128,
//     },
//   },
//   email: {
//     presence: { allowEmpty: false, message: 'is required' },
//     email: true,
//     length: {
//       maximum: 300,
//     },
//   },
// };


// const ContactForm = () => {

//   const sendEmail = (e) => {
//     e.preventDefault();

//         emailjs.sendForm(
//           SERVICE_ID,
//           TEMPLATE_ID,
//           e.target,
//           USER_ID
//         )
//         .then((res) => console.log('SUCCESS!', res.status, res.text))
//         .catch(error => console.log('FAILED...', error));

//         setFormState(formState => ({
//           ...formState,
//           isValid: false,
//           values: {},
//           touched: {},
//           errors: {}
//         }));
//   }

//   const [formState, setFormState] = useState({
//     isValid: false,
//     values: {},
//     touched: {},
//     errors: {},
//   });

//   useEffect(() => {
//     const errors = validate(formState.values, schema);

//     setFormState(formState => ({
//       ...formState,
//       isValid: errors ? false : true,
//       errors: errors || {},
//     }));
//   }, [formState.values]);

//   const handleChange = (e) => {
//     e.persist();

//     setFormState(formState => ({
//       ...formState,
//       values: {
//         ...formState.values,
//         [e.target.name]:
//           e.target.type === 'checkbox'
//             ? e.target.checked
//             : e.target.value,
//       },
//       touched: {
//         ...formState.touched,
//         [e.target.name]: true,
//       },
//     }));
//   };

//   const hasError = (field) =>
//     formState.touched[field] && formState.errors[field] ? true : false;

//   return (
//     <div>
//       <form 
//         headers='application/json'
//         name="contact-form"
//         onSubmit={sendEmail}
//       >
//         <Grid container spacing={2}>
//           <Grid item xs={12}>
//             {/* <Typography variant="h6" align="center">
//               <strong>Contact Me</strong>
//             </Typography> */}
//             <Typography variant="p" color="textSecondary" align="center">
//               Contact Me
//             </Typography>
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               placeholder="Name"
//               label="Name *"
//               variant="outlined"
//               size="medium"
//               name="name"
//               id="name"
//               fullWidth
//               helperText={
//                 hasError('name') ? formState.errors.name[0] : null
//               }
//               error={hasError('name')}
//               onChange={handleChange}
//               type="text"
//               value={formState.values.name || ''}
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               placeholder="E-mail"
//               label="E-mail *"
//               variant="outlined"
//               size="medium"
//               name="email"
//               fullWidth
//               helperText={hasError('email') ? formState.errors.email[0] : null}
//               error={hasError('email')}
//               onChange={handleChange}
//               type="email"
//               value={formState.values.email || ''}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <Button
//               size="large"
//               variant="contained"
//               type="submit"
//               color="primary"
//               disabled={!formState.isValid}
//             >
//               Send
//             </Button>
//           </Grid>
//         </Grid>
//       </form>
//     </div>
//   );
// };

// export default ContactForm;
// *************************************************************************
// import React, { useState } from 'react';
// import emailjs from 'emailjs-com';

// const ContactForm = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         message: '',
//     });

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         // Configure your EmailJS service and template IDs
//         const serviceId = 'service_ti5dkhr';
//         const templateId = 'template_hd49uta';
//         const userId = 'IeF-RQgFYCfQN2_by';


//         emailjs.send(serviceId, templateId, formData, userId)
//             .then(() => {
//                 alert('Your message has been sent successfully!');
//                 setFormData({ name: '', email: '', message: '' });
//             })
//             .catch((error) => {
//                 console.error('Error:', error);
//                 alert('Oops! Something went wrong. Please try again later.');
//             });
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <div>
//                 <label htmlFor="name">Name:</label>
//                 <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                 />
//             </div>
//             <div>
//                 <label htmlFor="email">Email:</label>
//                 <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                 />
//             </div>
//             <div>
//                 <label htmlFor="message">Message:</label>
//                 <textarea
//                     id="message"
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     required
//                 />
//             </div>
//             <button type="submit">Send Message</button>
//         </form>
//     );
// };

// export default ContactForm;

//*************************************************************************************************
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

        // Configure your EmailJS service and template IDs
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
            <Typography color="greenyellow" align ="center" variant="p" component="p" gutterBottom>
                Contact Me
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
