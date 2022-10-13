import { Button, ListItem, Stack, Typography } from "@mui/material";
import InboxIcon from '@mui/icons-material/Inbox';
import { User } from "../types";

interface UserListRowProps {
    user: User;
}

export const UserListRow = ({ user }: UserListRowProps) => (
    <ListItem key={user.id}>
        <Stack direction='row' spacing={2}>
            <Typography fontWeight={700}>{user.name}</Typography>
            <InboxIcon />
            <Typography>{user.email}</Typography>
            <Button
                variant='contained'
                color='error'
                size='small'
            >
                delete
            </Button>
        </Stack>
    </ListItem>
);
