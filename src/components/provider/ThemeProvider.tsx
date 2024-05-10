import { createContext } from 'react';
import { CardInfoProps } from '@/types/CardDetail';

interface Theme {
  cardDetailData: CardInfoProps;
  title: string;
  openToDoEditModal: () => void;
  onClose: () => void;
}

const INITIAL_DATA: Theme = {
  cardDetailData: {
    id: 0,
    title: '',
    description: '',
    tags: [],
    dueDate: '',
    assignee: {
      profileImageUrl: '',
      nickname: '',
      id: 0,
    },
    imageUrl: '',
    teamId: '',
    columnId: 0,
    dashboardId: 0,
    createdAt: '',
    updatedAt: '',
  },
  title: '',
  openToDoEditModal: () => {},
  onClose: () => {},
};

export const ThemeContext = createContext<Theme>(INITIAL_DATA);
function ThemeContextProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeContext.Provider value={INITIAL_DATA}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;
