import useAccommodations from '../../hooks/useAccommodations';
import { Box, CircularProgress, Typography } from '@mui/material';
import AccommodationGrid from '../components/accommodation/AccommodationGrid';

const AccommodationsPage = () => {
    const { accommodations, loading } = useAccommodations();
    return (
        <Box>
            <Typography variant='h4' sx={{ mb: 3 }}>🏨 Accommodations</Typography>
            {loading && (
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                    <CircularProgress/>
                </Box>
            )}
            {!loading && <AccommodationGrid accommodations={accommodations}/>}
        </Box>
    );
};

export default AccommodationsPage;