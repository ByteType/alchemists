const API_BASE_URL = process.env.REACT_APP_API;

export const apiEndpoints = {
  SIGN_IN: `${API_BASE_URL}/auth/signin`,
  SIGN_UP: `${API_BASE_URL}/auth/signup`,
  SIGN_OUT: `${API_BASE_URL}/auth/signout`,
  CREATE_DELIVERY: `${API_BASE_URL}/parcels`,
  LOCKER_DELIVERY: `${API_BASE_URL}/parcels/delivery`,
  LOCKER_PICKUP: `${API_BASE_URL}/parcels/pickup`,
  LOCKER_PICKER: `${API_BASE_URL}/lockers/all`,
  USER_INFO: `${API_BASE_URL}`,
  PARCEL_DETAIL: `${API_BASE_URL}`,
  DELETE_ACCOUNT: `${API_BASE_URL}`,
  DRIVER_LOCKER: `${API_BASE_URL}/lockers`,
  DRIVER_CABINET: `${API_BASE_URL}/cabinets`,
  DRIVER_SEARCH: `${API_BASE_URL}/parcels`,
  DRIVER_ARRIVE: `${API_BASE_URL}/parcels/arrive`
};
