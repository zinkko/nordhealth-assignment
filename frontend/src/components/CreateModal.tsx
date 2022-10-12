import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Modal, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";

interface CreateModalProps {
    isOpen: boolean;
    handleClose: (...args: unknown[]) => unknown,
}

export const CreateModal = ({ isOpen, handleClose }: CreateModalProps) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const create = () => {
        // TODO add api logic
        handleClose();
    }

    return (
        <Dialog
            open={isOpen}
            onClose={handleClose}
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
                <Button onClick={handleClose}>Cancel</Button>
            </DialogActions>
        </Dialog>
    );
}