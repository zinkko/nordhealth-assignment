import { Button, Divider, List, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { Stack } from '@mui/system';
import { useEffect, useState } from 'react';
import { getUsers } from './api/api';
import { CreateModal } from './components/CreateModal';
import { UserListRow } from './components/UserListRow';
import { LoadingStatus, User } from './types';


function App() {
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [users, setUsers] = useState<User[]>([]);
  const [loadingStatus, setLoadingStatus] = useState(LoadingStatus.ShouldLoad);

  const handleOpen = () => {
    setCreateModalOpen(true);
  }

  const handleClose = () => {
    setCreateModalOpen(false);
  }

  useEffect(() => {
    if (loadingStatus === LoadingStatus.ShouldLoad) {
      setLoadingStatus(LoadingStatus.Loading);
      getUsers().then((users: User[]) => {
        setUsers(users);
        setLoadingStatus(LoadingStatus.Done);
      });
    }
  });

  return (
    <Box p={5}>
      <Typography variant='h1'>User Page</Typography>
      <List>
        {users.map(user => (
          <UserListRow
            key={user.id}
            user={user}
            onDelete={() => setLoadingStatus(LoadingStatus.ShouldLoad)}
          />
        ))}
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
      <CreateModal
        isOpen={createModalOpen}
        handleClose={handleClose}
        requestReload={() => setLoadingStatus(LoadingStatus.ShouldLoad)}
      />
    </Box>
  );
}

export default App;
