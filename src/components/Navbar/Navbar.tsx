import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Container } from '@mui/material';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav>
      <Container maxWidth="xl">
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" color='transparent'>
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Link to="/" style={{ paddingLeft: 13, textDecoration: 'none', color: 'white' }}>
                  QShort
                </Link>
              </Typography>
              <Button>
                <a href="https://github.com/GauravGhost/QShort" target='_blank'>
                  <GitHubIcon sx={{ color: 'white' }} />
                </a>
              </Button>
            </Toolbar>
          </AppBar>
        </Box>
      </Container>
    </nav>
  )
}

export default Navbar