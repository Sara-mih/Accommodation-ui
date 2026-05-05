import type { Accommodation } from '../../../api/types/accommodation';
import { Grid } from '@mui/material';
import AccommodationCard from './AccommodationCard';

interface AccommodationGridProps {
    accommodations: Accommodation[];
}

const AccommodationGrid = ({ accommodations }: AccommodationGridProps) => {
    return (
        <Grid container spacing={{ xs: 2, md: 3 }}>
            {accommodations.map((accommodation) => (
                <Grid key={accommodation.id}>
                    <AccommodationCard accommodation={accommodation}/>
                </Grid>
            ))}
        </Grid>
    );
};

export default AccommodationGrid;