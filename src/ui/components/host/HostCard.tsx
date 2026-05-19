import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import PersonIcon from '@mui/icons-material/Person';
import type { Host } from '../../../api/types/host';
import { useState } from 'react';
import HostDetailsModal from './HostDetailsModal';
import { useAuth } from '../../../contexts/AuthContext';

interface HostCardProps {
    host: Host;
    onEdit: (host: Host) => void;
    onDelete: (id: number) => void;
}

const HostCard = ({ host, onEdit, onDelete }: HostCardProps) => {
    const [modalOpen, setModalOpen] = useState(false);
    const { isAdmin } = useAuth();

    return (
        <>
            <Card sx={{ maxWidth: 320, borderRadius: 3, boxShadow: 3, p: 1 }}>
                <CardContent>
                    <PersonIcon color="primary" sx={{ mb: 1 }}/>
                    <Typography variant='h6' sx={{ fontWeight: 'bold' }}>{host.name} {host.surname}</Typography>
                    <Typography variant='body2' color="text.secondary">
                        🌍 Country: {host.country?.name ?? 'N/A'}
                    </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'space-between' }}>
                    <Button startIcon={<InfoIcon/>} onClick={() => setModalOpen(true)}>
                        Info
                    </Button>
                    {isAdmin && (
                        <Box>
                            <Button startIcon={<EditIcon/>} color='warning' onClick={() => onEdit(host)}>
                                Edit
                            </Button>
                            <Button startIcon={<DeleteIcon/>} color='error' onClick={() => onDelete(host.id)}>
                                Delete
                            </Button>
                        </Box>
                    )}
                </CardActions>
            </Card>
            <HostDetailsModal
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                hostId={host.id.toString()}
            />
        </>
    );
};

export default HostCard;