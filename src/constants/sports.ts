export interface Sport {
  id: string;
  name: string;
  icon: string; // We'll use MaterialIcons names
}

export const AVAILABLE_SPORTS: Sport[] = [
  {
    id: 'tennis',
    name: 'Tennis',
    icon: 'sports-tennis',
  },
  {
    id: 'pickleball',
    name: 'Pickleball',
    icon: 'sports-cricket',
  },
  {
    id: 'fifa',
    name: 'FIFA',
    icon: 'sports-soccer',
  },
  {
    id: 'basketball',
    name: 'Basketball',
    icon: 'sports-basketball',
  },
  {
    id: 'badminton',
    name: 'Badminton',
    icon: 'sports-handball',
  },
  {
    id: 'table-tennis',
    name: 'Table Tennis',
    icon: 'sports-table-tennis',
  },
]; 