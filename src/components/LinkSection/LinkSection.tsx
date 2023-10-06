import { Box, Card, Typography } from '@mui/material'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import copy from 'copy-to-clipboard';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

type LinkSectionProps = {
    shortUrl: string;
    setBar: (value: { text: string; variant: string }) => void;
    setOpen: (value: boolean) => void;
};

const LinkSection = ({ shortUrl, setBar, setOpen }: LinkSectionProps) => {
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
                            : <TaskAltIcon sx={{ color: 'green' }} />
                    }
                </Box>
            </Card>
        </div>
    )
}

export default LinkSection