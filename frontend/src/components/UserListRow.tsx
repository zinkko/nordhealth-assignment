import { Button, ListItem, Stack, Typography } from "@mui/material";
import InboxIcon from '@mui/icons-material/Inbox';
import { User } from "../types";
import { deleteUser } from "../api/api";

interface UserListRowProps {
    user: User;
    onDelete: (...args: unknown[]) => unknown;
}

export const UserListRow = ({ user, onDelete }: UserListRowProps) => (
    <ListItem key={user.id}>
        <Stack direction='row' spacing={2}>
            <Typography fontWeight={700}>{user.name}</Typography>
            <InboxIcon />
            <Typography>{user.email}</Typography>
            <Button
                variant='contained'
                color='error'
                size='small'
                onClick={() => {
                    deleteUser(user.id);
                    onDelete();
                }}
            >
                delete
            </Button>
        </Stack>
    </ListItem>
);
