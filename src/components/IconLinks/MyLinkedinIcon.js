import React from 'react';
import { IconButton } from '@material-ui/core';
import { LinkedIn } from '@material-ui/icons';

const MyLinkedinIcon = () => {
    const openLinkedInProfile = () => {
        window.open('https://www.linkedin.com/in/viet-tran-95baab172', '_blank');
    };

    return (
        <IconButton onClick={openLinkedInProfile}>
            <LinkedIn />
        </IconButton>
    );
};

export default MyLinkedinIcon;
