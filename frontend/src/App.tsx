import { Button, Divider, List, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { Stack } from '@mui/system';
import { useState } from 'react';
import { CreateModal } from './components/CreateModal';
import { UserListRow } from './components/UserListRow';

const users = [
  {
    id: 1,
    name: 'foobar',
    email: 'foobar@foo.bar',
  },
  {
    id: 2,
    name: 'martti',
    email: 'martti@goog.le',
  },
  {
    id: 3,
    name: 'maija',
    email: 'maija@hel.fi',
  },
  {
    id: 4,
    name: 'ankka',
    email: 'vaak@birdmail.fi',
  },
]

function App() {
  const [createModalOpen, setCreateModalOpen] = useState(false);

  const handleOpen = () => {
    setCreateModalOpen(true);
  }

  const handleClose = () => {
    setCreateModalOpen(false);
  }

  return (
    <Box p={5}>
      <Typography variant='h1'>User Page</Typography>
      <List>
        {users.map(user => (<UserListRow user={user} />))}
      </List>
      <Divider />
      <Stack marginTop={4} direction='row' spacing={2}>
        <Button
          variant='contained'
          size='large'
          onClick={handleOpen}
        >
          Create new user
        </Button>
      </Stack>
      <CreateModal isOpen={createModalOpen} handleClose={handleClose} />
    </Box>
  );
}

export default App;
