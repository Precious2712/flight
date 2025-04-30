import { format, parse } from 'date-fns';

// Format date to yyyy-dd-MM hh:mm a (e.g., "2023-25-12 02:30PM")
export const formatToBackend = (date) => {
  return format(date, 'yyyy-dd-MM hh:mm a');
};

// Parse from backend format to Date object
export const parseFromBackend = (dateString) => {
  return parse(dateString, 'yyyy-dd-MM hh:mm a', new Date());
};

// For calendar displays (optional)
export const formatForDisplay = (date) => {
  return format(date, 'PPPpp');
};