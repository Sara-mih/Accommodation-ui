import type { Host } from '../../../api/types/host';
import { Grid } from '@mui/material';
import HostCard from './HostCard';

interface HostGridProps {
    hosts: Host[];
}

const HostGrid = ({ hosts }: HostGridProps) => {
    return (
        <Grid container spacing={{ xs: 2, md: 3 }}>
            {hosts.map((host) => (
                <Grid key={host.id}>
                    <HostCard host={host}/>
                </Grid>
            ))}
        </Grid>
    );
};

export default HostGrid;