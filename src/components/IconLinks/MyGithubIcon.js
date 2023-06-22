import React from 'react';
import { IconButton } from '@material-ui/core';
import { GitHub } from '@material-ui/icons';

const MyGithubIcon = () => {
  const openGithubProfile = () => {
    window.open('https://github.com/vtrangithub', '_blank');
  };

  return (
    <IconButton onClick={openGithubProfile}>
      <GitHub />
    </IconButton>
  );
};

export default MyGithubIcon;
