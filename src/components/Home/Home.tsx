
import { Box, Button, Container, TextField, Typography } from "@mui/material"
import { useState } from "react"
import QSnackbar from "../snackbar/snackbar";
import { create } from "../../../lib/api";

const Home = () => {
  const [url, setUrl] = useState("");
  const [open, setOpen] = useState(false);
  const [bar, setBar] = useState({});

  const submitHandler = async () => {
    if (!url) {
      setOpen(true);
      setBar({ text: 'Please Enter valid url', variant: 'error' });
      return;
    }
    const response = await create(url);
    console.log(response);

    if (response.success == true) {
      setOpen(true);
      setBar({ text: response.message, variant: 'success' })
    }
    else if (response.success == false) {
      setOpen(true);
      setBar({text: `${response.message}, Please Enter Valid URL`, variant: 'error'})
    }
    else {
      console.log("server is connecting");
      setOpen(true);
      setBar({ text: 'Server is Connecting! please try again', variant: 'error' });
    }
  }

  return (
    <div>
      <Container maxWidth="md">
        <Box sx={{ height: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 15 }}>
          <Box textAlign="center">
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
        </Box>
        <QSnackbar open={open} setOpen={setOpen} bar={bar} />
      </Container>
    </div>
  )
}

export default Home