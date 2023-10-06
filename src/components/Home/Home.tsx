import { Box, Button, Container, TextField, Typography } from "@mui/material"
import { useState } from "react"
import QSnackbar from "../snackbar/snackbar";
import { create } from "../../../lib/api";
import LinkSection from "../LinkSection/LinkSection";

const Home = () => {
  const [url, setUrl] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const [bar, setBar] = useState({});
  const [shortUrl, setShortUrl] = useState<string>('');

  const submitHandler = async () => {
    if (!url) {
      setOpen(true);
      setBar({ text: 'Please Enter valid url', variant: 'error' });
      return;
    }

    const response = await create(url);

    if (response.success) {
      setOpen(true);
      setBar({ text: response.message, variant: 'success' });
      setShortUrl(response.data);
    }
    else if (!response.success) {
      setOpen(true);
      setBar({ text: `${response.message}, Please Enter Valid URL`, variant: 'error' })
    }
    else {
      setOpen(true);
      setBar({ text: 'Server is Connecting! please try again', variant: 'error' });
    }
  }

  return (
    <div>
      <Container maxWidth="md">
        <Box sx={{ height: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <Box textAlign="center" marginBottom="60px">
            <Typography variant="h3">
              URL Shortner
            </Typography>
            <Typography variant="subtitle2">
              A QSort is a tool that transforms long and complex web addresses into short and easy-to-remember ones.
              It can help you share links with your audience,
              track clicks and conversions, and optimize your marketing campaigns.
              Whether you want to promote your brand, boost your online presence,
              or create engaging content, a URL shortener can help you achieve your goals.
            </Typography>

          </Box>
          <Box maxWidth="sm" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', borderRadius: '13px' }}>
            <TextField
              fullWidth
              id="outlined-basic"
              InputProps={{
                style: { height: '45px', borderTopRightRadius: '0', borderBottomRightRadius: '0' }
              }}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Enter the Url"
              variant="outlined"
              sx={{
                color: 'white',
                background: 'white',
                "& .MuiOutlinedInput-root.Mui-focused": {
                  "& fieldset": {
                    borderColor: "#1d1d1d"
                  }
                }
              }}
            />
            <Button
              variant="contained"
              sx={{
                color: 'white',
                bgcolor: '#1d1d1d',
                height: '45px',
                borderTopLeftRadius: '0',
                borderBottomLeftRadius: '0',
                '&:hover': { bgcolor: '#1d1d1da4' }
              }}
              onClick={submitHandler}
            >
              Generate
            </Button>
          </Box>
          {shortUrl && <Box marginTop="10px">
            <LinkSection shortUrl={shortUrl} setBar={setBar} setOpen={setOpen} />
          </Box>}
        </Box>
        <QSnackbar open={open} setOpen={setOpen} bar={bar} />
      </Container>
    </div>
  )
}

export default Home

