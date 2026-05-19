
import { Box, Button, Card, CardActions, CardContent, Chip, Typography } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import HotelIcon from '@mui/icons-material/Hotel';
import type { Accommodation } from '../../../api/types/accommodation';
import { useAuth } from '../../../contexts/AuthContext';

interface AccommodationCardProps {
    accommodation: Accommodation;
    onEdit: (accommodation: Accommodation) => void;
    onDelete: (id: number) => void;
    onInfo: (accommodation: Accommodation) => void;
}

const AccommodationCard = ({ accommodation, onEdit, onDelete, onInfo }: AccommodationCardProps) => {
    const { isAdmin } = useAuth();

    return (
        <Card sx={{ maxWidth: 320, borderRadius: 3, boxShadow: 3, p: 1 }}>
            <CardContent>
                <HotelIcon color="primary" sx={{ mb: 1 }}/>
                <Typography variant='h6' sx={{ fontWeight: 'bold' }}>{accommodation.name}</Typography>
                <Chip label={accommodation.category} color="primary" size="small" sx={{ mb: 1 }}/>
                <Typography variant='body2' color="text.secondary">🛏 Rooms: {accommodation.numRooms}</Typography>
                <Typography variant='body2' color="text.secondary">👤 Host: {accommodation.hostName} {accommodation.hostSurname}</Typography>
                <Chip
                    label={accommodation.isRented ? 'Rented' : 'Available'}
                    color={accommodation.isRented ? 'error' : 'success'}
                    size="small" sx={{ mt: 1 }}
                />
            </CardContent>
            <CardActions sx={{ justifyContent: 'space-between' }}>
                <Button startIcon={<InfoIcon/>} onClick={() => onInfo(accommodation)}>
                    Info
                </Button>
                {isAdmin && (
                    <Box>
                        <Button startIcon={<EditIcon/>} color='warning' onClick={() => onEdit(accommodation)}>
                            Edit
                        </Button>
                        <Button startIcon={<DeleteIcon/>} color='error' onClick={() => onDelete(accommodation.id)}>
                            Delete
                        </Button>
                    </Box>
                )}
            </CardActions>
        </Card>
    );
};

export default AccommodationCard;