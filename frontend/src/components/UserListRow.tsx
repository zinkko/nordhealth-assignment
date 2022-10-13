import DeleteIcon from '@mui/icons-material/Delete';
import MailIcon from '@mui/icons-material/Mail';
import { IconButton, ListItem, Stack, Tooltip, Typography } from "@mui/material";
import { deleteUser } from "../api/api";
import { User } from "../types";

interface UserListRowProps {
    user: User;
    onDelete: (...args: unknown[]) => unknown;
}

export const UserListRow = ({ user, onDelete }: UserListRowProps) => (
    <ListItem key={user.id}>
        <Stack direction='row' spacing={2} alignItems='center'>
            <Typography color='gray'>{user.id}</Typography>
            <Typography fontWeight={700}>{user.name}</Typography>
            <Stack direction='row' spacing={0.5}>
                <MailIcon color='info' />
                <Typography>{user.email}</Typography>
            </Stack>
            <Tooltip title={`Delete user ${user.name}`} placement='right'>
                <IconButton
                    color='warning'
                    size='small'
                    onClick={() => {
                        deleteUser(user.id);
                        onDelete();
                    }}
                    >
                    <DeleteIcon />
                </IconButton>
            </Tooltip>
        </Stack>
    </ListItem>
);
