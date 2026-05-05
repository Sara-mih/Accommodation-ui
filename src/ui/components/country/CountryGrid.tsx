import type { Country } from '../../../api/types/country';
import { Grid } from '@mui/material';
import CountryCard from './CountryCard';

interface CountryGridProps {
    countries: Country[];
}

const CountryGrid = ({ countries }: CountryGridProps) => {
    return (
        <Grid container spacing={{ xs: 2, md: 3 }}>
            {countries.map((country) => (
                <Grid key={country.id}>
                    <CountryCard country={country}/>
                </Grid>
            ))}
        </Grid>
    );
};

export default CountryGrid;