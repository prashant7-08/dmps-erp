// service.jsx
import api, { API_BASE_URL } from './api';
import schoolService from './schoolService';
export * from './mockData';
export { schoolService };

export const API_URL = API_BASE_URL;

export const login = (email, password) => {
  return api.post('/auth/login', { email, password });
};

export const getStudents = () => {
  return api.get('/api/students');
};

export const getTeachers = () => {
  return api.get('/api/teachers');
};

export const getNotices = () => {
  return api.get('/api/notices');
};

export default schoolService;
