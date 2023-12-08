const API_BASE_URL = process.env.REACT_APP_API;

export const apiEndpoints = {
  LOGIN: `${API_BASE_URL}/auth/signin`,
  SIGN_UP: `${API_BASE_URL}/auth/signup`,
  LOCKER_DELIVERY: `${API_BASE_URL}/parcels/delivery`,
  LOCKER_PICKUP: `${API_BASE_URL}/parcels/pickup`,
  CREATE_DELIVERY: `${API_BASE_URL}/parcels`,
  LOCKER_PICKER: `${API_BASE_URL}/lockers/all`,
  USER_INFO: `${API_BASE_URL}`,
  PARCEL_DETAIL: `${API_BASE_URL}`,
  SIGN_OUT: `${API_BASE_URL}/auth/signout`,
  DELETE_ACCOUNT: `${API_BASE_URL}`,
};
