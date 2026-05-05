import useCountries from '../../hooks/useCountries';
import { Box, CircularProgress, Typography } from '@mui/material';
import CountryGrid from '../components/country/CountryGrid';

const CountriesPage = () => {
    const { countries, loading } = useCountries();
    return (
        <Box>
            <Typography variant='h4' sx={{ mb: 3 }}>🌍 Countries</Typography>
            {loading && (
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                    <CircularProgress/>
                </Box>
            )}
            {!loading && <CountryGrid countries={countries}/>}
        </Box>
    );
};

export default CountriesPage;