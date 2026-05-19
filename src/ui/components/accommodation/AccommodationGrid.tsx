import type { Accommodation } from '../../../api/types/accommodation';
import { Grid } from '@mui/material';
import AccommodationCard from './AccommodationCard';

interface AccommodationGridProps {
    accommodations: Accommodation[];
    onEdit: (accommodation: Accommodation) => void;
    onDelete: (id: number) => void;
    onInfo: (accommodation: Accommodation) => void;
}

const AccommodationGrid = ({ accommodations, onEdit, onDelete, onInfo }: AccommodationGridProps) => {
    return (
        <Grid container spacing={{ xs: 2, md: 3 }}>
            {accommodations.map((accommodation) => (
                <Grid key={accommodation.id}>
                    <AccommodationCard
                        accommodation={accommodation}
                        onEdit={onEdit}
                        onDelete={onDelete}
                        onInfo={onInfo}
                    />
                </Grid>
            ))}
        </Grid>
    );
};

export default AccommodationGrid;