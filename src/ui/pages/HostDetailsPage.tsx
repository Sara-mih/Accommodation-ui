import useHostDetails from '../../hooks/useHostDetails';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Box, Breadcrumbs, Button, Chip, CircularProgress, Paper, Stack, Typography } from '@mui/material';
import { ArrowBack, LocationOn, Person } from '@mui/icons-material';

const HostDetailsPage = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { host, loading, error } = useHostDetails(id!);

    if (loading) return <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}><CircularProgress/></Box>;

    if (error || !host) return (
        <Box sx={{ mt: 4 }}>
            <Typography color="error">Error loading host</Typography>
            <Button startIcon={<ArrowBack/>} onClick={() => navigate('/hosts')}>Back</Button>
        </Box>
    );

    return (
        <Box>
            <Breadcrumbs sx={{ mb: 3 }}>
                <Link to='/hosts' style={{ textDecoration: 'none', color: 'inherit' }}>Hosts</Link>
                <Typography color='text.primary'>{host.name} {host.surname}</Typography>
            </Breadcrumbs>
            <Paper elevation={2} sx={{ p: 4, borderRadius: 4 }}>
                <Typography variant='h3' sx={{ mb: 2 }}>{host.name} {host.surname}</Typography>
                <Stack direction='row' spacing={1} sx={{ mb: 3 }}>
                    <Chip icon={<Person/>} label={`${host.name} ${host.surname}`} color='primary' variant='outlined'/>
                    <Chip icon={<LocationOn/>} label={host.country.name} color='info' variant='outlined'/>
                </Stack>
                <Button variant='outlined' startIcon={<ArrowBack/>} onClick={() => navigate('/hosts')}>
                    Back to Hosts
                </Button>
            </Paper>
        </Box>
    );
};

export default HostDetailsPage;