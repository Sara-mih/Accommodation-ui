import axiosInstance from '../axios/axios';
import type { Accommodation } from './types/accommodation';

const accommodationApi = {
    findAll: async () => {
        return await axiosInstance.get<Accommodation[]>('/accommodations');
    },
    findById: async (id: string) => {
        return await axiosInstance.get<Accommodation>(`/accommodations/${id}`);
    }
};

export default accommodationApi;