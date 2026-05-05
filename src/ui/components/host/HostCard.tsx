import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import PersonIcon from '@mui/icons-material/Person';
import type { Host } from '../../../api/types/host';
import { useNavigate } from 'react-router-dom';

interface HostCardProps {
    host: Host;
}

const HostCard = ({ host }: HostCardProps) => {
    const navigate = useNavigate();
    return (
        <Card sx={{ maxWidth: 320, borderRadius: 3, boxShadow: 3, p: 1 }}>
            <CardContent>
                <PersonIcon color="primary" sx={{ mb: 1 }} />
                <Typography variant='h6' sx={{ fontWeight: 'bold' }}>{host.name} {host.surname}</Typography>
                <Typography variant='body2' color="text.secondary">
                    🌍 Country: {host.country.name}
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    variant="contained"
                    startIcon={<InfoIcon/>}
                    onClick={() => navigate(`/hosts/${host.id}`)}
                    fullWidth
                >
                    Details
                </Button>
            </CardActions>
        </Card>
    );
};

export default HostCard;