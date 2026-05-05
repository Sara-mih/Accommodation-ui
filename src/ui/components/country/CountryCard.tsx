import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import PublicIcon from '@mui/icons-material/Public';
import type { Country } from '../../../api/types/country';
import { useNavigate } from 'react-router-dom';

interface CountryCardProps {
    country: Country;
}

const CountryCard = ({ country }: CountryCardProps) => {
    const navigate = useNavigate();
    return (
        <Card sx={{ maxWidth: 320, borderRadius: 3, boxShadow: 3, p: 1 }}>
            <CardContent>
                <PublicIcon color="primary" sx={{ mb: 1 }} />
                <Typography variant='h6' sx={{ fontWeight: 'bold' }}>{country.name}</Typography>
                <Typography variant='body2' color="text.secondary">
                    🌍 Continent: {country.continent}
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    variant="contained"
                    startIcon={<InfoIcon/>}
                    onClick={() => navigate(`/countries/${country.id}`)}
                    fullWidth
                >
                    Details
                </Button>
            </CardActions>
        </Card>
    );
};

export default CountryCard;