import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Alert } from '@mui/material';

type LinkSectionProps = {
    open: boolean;
    bar: {
        text?: string;
        variant?: 'success' | 'info' | 'warning' | 'error';
    };
    setOpen: (value: boolean) => void;
};

export default function QSnackbar({ open, setOpen, bar }: LinkSectionProps) {
    const handleClose = (_event: React.SyntheticEvent | Event, reason?: string) => {
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
                autoHideDuration={2000}
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
