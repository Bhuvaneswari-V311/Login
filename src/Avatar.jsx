import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
export default function ImageAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar alt="Remy Sharp" src="src/assets/avatar1.jpg" />
      <Avatar alt="Travis Howard" src="src/assets/avatar2.jpg" />
      <Avatar alt="Cindy Baker" src="src/assets/avatar3.jpg" />
    </Stack>
  );
}