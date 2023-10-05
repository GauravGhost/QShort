import { Box, Card, CardContent, Container, Typography } from '@mui/material'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import copy from 'copy-to-clipboard';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

const LinkSection = ({ shortUrl, setBar, setOpen }) => {
    const [url, setUrl] = useState('');
    const [copied, setCopied] = useState(false);
    useEffect(() => {
        setUrl(window.location.href);
    }, [])
    const copyHandler = () => {
        copy(`${url}${shortUrl}`)
        setOpen(true);
        setBar({ text: "Copied!", variant: 'success' });
        setCopied(true);
    }
    return (
        <div>
            <Card>
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', p: 2 }}>
                    <Typography variant="subtitle1">
                        <Link to={`/${shortUrl}`} target='_blank'>
                            {`${url}${shortUrl}`}
                        </Link>
                    </Typography>
                    {
                        !copied
                            ?
                            <ContentCopyIcon sx={{ cursor: 'pointer' }} onClick={copyHandler} />
                            : <TaskAltIcon sx={{color: 'green'}} />
                    }
                </Box>
            </Card>
        </div>
    )
}

export default LinkSection