import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack, TextField } from "@mui/material";
import { useState } from "react";
import { createUser } from "../api/api";

interface CreateModalProps {
    isOpen: boolean;
    handleClose: () => void,
    requestReload: () => void,
}

export const CreateModal = ({ isOpen, handleClose, requestReload }: CreateModalProps) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const create = () => {
        createUser({ name, email });
        requestReload();
        cleanUpAndClose();
    }

    const cleanUpAndClose = () => {
        setName('');
        setEmail('');
        handleClose();
    }

    return (
        <Dialog
            open={isOpen}
            onClose={cleanUpAndClose}
        >
            <DialogTitle>Create User</DialogTitle>
            <DialogContent>
                <Stack>
                    <TextField
                        autoFocus
                        id='name-input'
                        label='name'
                        variant='standard'
                        value={name}
                        onChange={(evt) => setName(evt.target.value)}
                        />
                    <TextField
                        id='email-input'
                        label='email'
                        type='email'
                        variant='standard'
                        value={email}
                        onChange={(evt) => setEmail(evt.target.value)}
                    />
                </Stack>
            </DialogContent>
            <DialogActions disableSpacing>
                <Button onClick={create}>Create</Button>
                <Button onClick={cleanUpAndClose}>Cancel</Button>
            </DialogActions>
        </Dialog>
    );
}