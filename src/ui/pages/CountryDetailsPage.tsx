import useCountryDetails from '../../hooks/useCountryDetails';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Box, Breadcrumbs, Button, Chip, CircularProgress, Paper, Stack, Typography } from '@mui/material';
import { ArrowBack, LocationOn, Public } from '@mui/icons-material';

const CountryDetailsPage = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { country, loading, error } = useCountryDetails(id!);

    if (loading) return <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}><CircularProgress/></Box>;

    if (error || !country) return (
        <Box sx={{ mt: 4 }}>
            <Typography color="error">Error loading country</Typography>
            <Button startIcon={<ArrowBack/>} onClick={() => navigate('/countries')}>Back</Button>
        </Box>
    );

    return (
        <Box>
            <Breadcrumbs sx={{ mb: 3 }}>
                <Link to='/countries' style={{ textDecoration: 'none', color: 'inherit' }}>Countries</Link>
                <Typography color='text.primary'>{country.name}</Typography>
            </Breadcrumbs>
            <Paper elevation={2} sx={{ p: 4, borderRadius: 4 }}>
                <Typography variant='h3' sx={{ mb: 2 }}>{country.name}</Typography>
                <Stack direction='row' spacing={1} sx={{ mb: 3 }}>
                    <Chip icon={<LocationOn/>} label={country.name} color='primary' variant='outlined'/>
                    <Chip icon={<Public/>} label={country.continent} color='info' variant='outlined'/>
                </Stack>
                <Button variant='outlined' startIcon={<ArrowBack/>} onClick={() => navigate('/countries')}>
                    Back to Countries
                </Button>
            </Paper>
        </Box>
    );
};

export default CountryDetailsPage;