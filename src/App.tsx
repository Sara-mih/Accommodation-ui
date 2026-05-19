import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './ui/components/layout/Layout';
import HomePage from './ui/pages/HomePage';
import AccommodationsPage from './ui/pages/AccommodationsPage';
import AccommodationDetailsPage from './ui/pages/AccommodationDetailsPage';
import HostsPage from './ui/pages/HostsPage';
import HostDetailsPage from './ui/pages/HostDetailsPage';
import CountriesPage from './ui/pages/CountriesPage';
import CountryDetailsPage from './ui/pages/CountryDetailsPage';
import LoginPage from './ui/pages/LoginPage';
import RegisterPage from './ui/pages/RegisterPage';
import SnackbarProvider from './providers/SnackbarProvider';
import AccommodationsProvider from './providers/AccommodationsProvider';
import HostsProvider from './providers/HostsProvider';
import CountriesProvider from './providers/CountriesProvider';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './ui/components/common/ProtectedRoute';

function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <SnackbarProvider>
                    <AccommodationsProvider>
                        <HostsProvider>
                            <CountriesProvider>
                                <Routes>
                                    <Route path='/' element={<Layout/>}>
                                        <Route index element={<HomePage/>}/>
                                        <Route path='login' element={<LoginPage/>}/>
                                        <Route path='register' element={<RegisterPage/>}/>
                                        <Route element={<ProtectedRoute/>}>
                                            <Route path='accommodations' element={<AccommodationsPage/>}/>
                                            <Route path='accommodations/:id' element={<AccommodationDetailsPage/>}/>
                                            <Route path='hosts' element={<HostsPage/>}/>
                                            <Route path='hosts/:id' element={<HostDetailsPage/>}/>
                                            <Route path='countries' element={<CountriesPage/>}/>
                                            <Route path='countries/:id' element={<CountryDetailsPage/>}/>
                                        </Route>
                                    </Route>
                                </Routes>
                            </CountriesProvider>
                        </HostsProvider>
                    </AccommodationsProvider>
                </SnackbarProvider>
            </AuthProvider>
        </BrowserRouter>
    );
}

export default App;