import { createContext, useContext, useMemo, useState } from 'react';
import { CardInfoProps } from '@/types/CardDetail';

const DEFAULT_CARD_DATA = {
  id: 0,
  title: '',
  description: '',
  tags: [],
  dueDate: '',
  assignee: {
    profileImageUrl: null,
    nickname: '',
    id: 0,
  },
  imageUrl: '',
  teamId: '',
  columnId: 0,
  dashboardId: 0,
  createdAt: '',
  updatedAt: '',
};

interface Theme {
  cardDetailData: CardInfoProps;
  setCardDetailData: React.Dispatch<React.SetStateAction<CardInfoProps | null>>;
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  closeEditModal: () => void;
  openEditModal: () => void;
  closeConfirmModal: () => void;
  openConfirmModal: () => void;
  showConfirmModal: boolean;
  showEditModal: boolean;
}

const ThemeContext = createContext<Theme | null>(null);
export function ThemeContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [title, setTitle] = useState('');
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  // eslint-disable-next-line
  const [_cardDetailData, setCardDetailData] = useState<CardInfoProps | null>(
    null,
  );

  const cardDetailData = useMemo(() => {
    if (_cardDetailData) return _cardDetailData;
    console.warn('cardDetailData is empty');
    return DEFAULT_CARD_DATA;
  }, [_cardDetailData]);

  const openConfirmModal = () => setShowConfirmModal(true);
  const closeConfirmModal = () => setShowConfirmModal(false);
  const openEditModal = () => setShowEditModal(true);
  const closeEditModal = () => setShowEditModal(false);

  const initialValue = useMemo(() => {
    return {
      title,
      setTitle,
      cardDetailData,
      setCardDetailData,
      openConfirmModal,
      closeConfirmModal,
      openEditModal,
      closeEditModal,
      showConfirmModal,
      showEditModal,
    };
  }, [
    title,
    setTitle,
    cardDetailData,
    setCardDetailData,
    showConfirmModal,
    showEditModal,
  ]);

  return (
    <ThemeContext.Provider value={initialValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export default function useSafeThemeContext(): Theme {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useSafeThemeContext must be used within a ThemeContext');
  }
  return context;
}
