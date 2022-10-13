import DeleteIcon from '@mui/icons-material/Delete';
import MailIcon from '@mui/icons-material/Mail';
import { Grid, IconButton, ListItem, Stack, Tooltip, Typography } from "@mui/material";
import { deleteUser } from "../api/api";
import { User } from "../types";
import useMediaQuery from '@mui/material/useMediaQuery';

interface UserListRowProps {
    user: User;
    onDelete: (...args: unknown[]) => unknown;
}

export const UserListRow = ({ user, onDelete }: UserListRowProps) => {
    return (
        <ListItem key={user.id}>
            <Grid container spacing={2} alignItems='center'>
                <Grid item xs={1}>
                    <Typography color='gray'>{user.id}</Typography>
                </Grid>
                <Grid item xs={11} sm={5}>
                    <Typography fontWeight={700}>{user.name}</Typography>
                </Grid>
                <Grid item xs={11} sm={5} alignContent='center'>
                    <MailSection email={user.email} />
                </Grid>
                <Grid item xs={1}>
                    <DeleteButton user={user} onDelete={onDelete} />
                </Grid>
            </Grid>
        </ListItem>
    );
};

interface MailSectionProps {
    email: string,
};

const MailSection = ({ email }: MailSectionProps) => {
    const isMediumOrLarger = useMediaQuery('(min-width:700px)');

    if (isMediumOrLarger) {
        return (
            <Stack direction='row' spacing={0.5}>
                <MailIcon color='info' />
                <Typography>{email}</Typography>
            </Stack>
        );
    }

    return (
        <Typography fontSize={14}>{email}</Typography>
    );
};

type DeleteButtonProps = UserListRowProps;

const DeleteButton = ({ user, onDelete }: DeleteButtonProps) => {
    const isSmallOrLarger = useMediaQuery('(min-width:400px)');

    return (
        <Tooltip
            title={`Delete user ${user.name}`}
            placement={isSmallOrLarger ? 'right' : 'left'}
        >
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
    );
}
