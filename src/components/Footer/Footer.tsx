import { GitHub, LinkedIn } from '@mui/icons-material';
import { Box, Container, Typography } from '@mui/material'

const Footer = () => {
  const date = new Date;
  return (
    <footer style={{ backgroundColor: '#111111', paddingBlock: '0.5rem' }}>
      <Container maxWidth="md">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box>
            <Typography variant='h6'>
              {`@${date.getFullYear()} Gyanendra Kumar`}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <a target='_blank' href="https://github.com/gauravghost">
              <GitHub sx={{ color: 'white'}} />
            </a>
            <a target='_blank' href="https://linkedin.com/in/gyanendrak874">
              <LinkedIn sx={{color: 'white'}} />
            </a>
          </Box>
        </Box>
      </Container>
    </footer>
  )
}

export default Footer