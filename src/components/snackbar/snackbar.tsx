import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Alert } from '@mui/material';

export default function QSnackbar({ open, setOpen, bar }) {
    const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const action = (
        <>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </>
    );

    return (
        <div>
            <Snackbar
                open={open}
                autoHideDuration={600}
                onClose={handleClose}
                action={action}
            >
                <Alert onClose={handleClose} severity={bar.variant} sx={{ width: '100%', bgcolor: 'black', color: 'white' }}>
                    {bar.text}
                </Alert>
            </Snackbar>
        </div>
    );
}
