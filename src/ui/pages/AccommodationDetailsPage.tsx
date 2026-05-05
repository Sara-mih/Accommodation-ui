import useAccommodationDetails from '../../hooks/useAccommodationDetails';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Box, Breadcrumbs, Button, Chip, CircularProgress, Paper, Stack, Typography } from '@mui/material';
import { ArrowBack, Category, Home } from '@mui/icons-material';

const AccommodationDetailsPage = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { accommodation, loading, error } = useAccommodationDetails(id!);

    if (loading) return (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <CircularProgress/>
        </Box>
    );

    if (error || !accommodation) return (
        <Box sx={{ mt: 4 }}>
            <Typography color="error">Error loading accommodation</Typography>
            <Button startIcon={<ArrowBack/>} onClick={() => navigate('/accommodations')}>Back</Button>
        </Box>
    );

    return (
        <Box>
            <Breadcrumbs sx={{ mb: 3 }}>
                <Link to='/accommodations' style={{ textDecoration: 'none', color: 'inherit' }}>
                    Accommodations
                </Link>
                <Typography color='text.primary'>{accommodation.name}</Typography>
            </Breadcrumbs>
            <Paper elevation={2} sx={{ p: 4, borderRadius: 4 }}>
                <Typography variant='h3' sx={{ mb: 2 }}>{accommodation.name}</Typography>
                <Typography variant='h6' color='text.secondary' sx={{ mb: 2 }}>
                    Host: {accommodation.hostName} {accommodation.hostSurname}
                </Typography>
                <Stack direction='row' spacing={1} sx={{ mb: 3 }}>
                    <Chip icon={<Category/>} label={accommodation.category} color='primary' variant='outlined'/>
                    <Chip icon={<Home/>} label={`${accommodation.numRooms} Rooms`} color='secondary' variant='outlined'/>
                    <Chip
                        label={accommodation.isRented ? 'Rented' : 'Available'}
                        color={accommodation.isRented ? 'error' : 'success'}
                    />
                </Stack>
                <Button variant='outlined' startIcon={<ArrowBack/>} onClick={() => navigate('/accommodations')}>
                    Back to Accommodations
                </Button>
            </Paper>
        </Box>
    );
};

export default AccommodationDetailsPage;