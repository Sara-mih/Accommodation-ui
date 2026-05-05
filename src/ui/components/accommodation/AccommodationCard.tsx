import { Button, Card, CardActions, CardContent, Chip, Typography } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import HotelIcon from '@mui/icons-material/Hotel';
import type { Accommodation } from '../../../api/types/accommodation';
import { useNavigate } from 'react-router-dom';

interface AccommodationCardProps {
    accommodation: Accommodation;
}

const AccommodationCard = ({ accommodation }: AccommodationCardProps) => {
    const navigate = useNavigate();
    return (
        <Card sx={{ maxWidth: 320, borderRadius: 3, boxShadow: 3, p: 1 }}>
            <CardContent>
                <HotelIcon color="primary" sx={{ mb: 1 }} />
                <Typography variant='h6' sx={{ fontWeight: 'bold' }}>{accommodation.name}</Typography>
                <Chip label={accommodation.category} color="primary" size="small" sx={{ mb: 1 }} />
                <Typography variant='body2' color="text.secondary">
                    🛏 Rooms: {accommodation.numRooms}
                </Typography>
                <Typography variant='body2' color="text.secondary">
                    👤 Host: {accommodation.hostName} {accommodation.hostSurname}
                </Typography>
                <Chip
                    label={accommodation.isRented ? 'Rented' : 'Available'}
                    color={accommodation.isRented ? 'error' : 'success'}
                    size="small"
                    sx={{ mt: 1 }}
                />
            </CardContent>
            <CardActions>
                <Button
                    variant="contained"
                    startIcon={<InfoIcon/>}
                    onClick={() => navigate(`/accommodations/${accommodation.id}`)}
                    fullWidth
                >
                    Details
                </Button>
            </CardActions>
        </Card>
    );
};

export default AccommodationCard;