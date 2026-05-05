import { Box, Button, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();
    return (
        <Box sx={{ m: 0, p: 0 }}>
            <Container maxWidth='xl' sx={{ mt: 3, py: 3 }}>
                <Typography variant='h4' gutterBottom>
                    Welcome to Accommodation App! 🏨
                </Typography>
                <Typography variant='body1' sx={{ mb: 4 }}>
                    Find and explore accommodations, hosts and countries.
                </Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                    <Button variant='contained' onClick={() => navigate('/accommodations')}>
                        View Accommodations
                    </Button>
                    <Button variant='outlined' onClick={() => navigate('/hosts')}>
                        View Hosts
                    </Button>
                    <Button variant='outlined' onClick={() => navigate('/countries')}>
                        View Countries
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default HomePage;