import useHosts from '../../hooks/useHosts';
import { Box, CircularProgress, Typography } from '@mui/material';
import HostGrid from '../components/host/HostGrid';

const HostsPage = () => {
    const { hosts, loading } = useHosts();
    return (
        <Box>
            <Typography variant='h4' sx={{ mb: 3 }}>👤 Hosts</Typography>
            {loading && (
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                    <CircularProgress/>
                </Box>
            )}
            {!loading && <HostGrid hosts={hosts}/>}
        </Box>
    );
};

export default HostsPage;