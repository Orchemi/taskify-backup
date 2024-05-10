import { createContext, useMemo } from 'react';
import styled from 'styled-components';
import MainBox from '@/components/common/Modal/card-detail/MainBox';
import ModalHeader from '@/components/common/Modal/card-detail/ModalHeader';
import SideBox from '@/components/common/Modal/card-detail/SideBox';
import BackDropModal from '@/components/common/modal/BackDropModal';
import ThemeContextProvider from '@/components/provider/ThemeProvider';
import useDetailCardQuery from '@/hooks/query/cards/useDetailCardQuery';
import MEDIA_QUERIES from '@/constants/MEDIAQUERIES';
import { CardInfoProps } from '@/types/CardDetail';

// export interface ContextProps {
//   cardDetailData: CardInfoProps;
//   title: string;
// }

const S = {
  ModalLayout: styled.div`
    width: 73rem;
    max-height: 76rem;

    &::-webkit-scrollbar {
      width: 10px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.color.mainLight};
      border-radius: 10px;
      background-clip: padding-box;
      border: 2px solid transparent;
    }
    &::-webkit-scrollbar-track {
      background-color: ${({ theme }) => theme.color.white};
      border-radius: 10px;
      box-shadow: inset 0px 0px 5px white;
    }

    ${MEDIA_QUERIES.onMobile} {
      max-width: 32rem;
      max-height: 60rem;
    }
  `,

  ModalBody: styled.div`
    display: flex;
    ${MEDIA_QUERIES.onMobile} {
      display: flex;
      flex-direction: column-reverse;
    }
  `,
};

interface ModalOpenAndCloseProps {
  isOpen: boolean;
  onClose: () => void;
  cardId: number;
  title: string;
  openToDoEditModal: () => void;
}
function CardConfirmModal({
  isOpen,
  onClose,
  cardId,
  title,
  openToDoEditModal,
}: ModalOpenAndCloseProps) {
  // const { data: cardDetailData } = useDetailCardQuery({
  //   cardId,
  // });

  // const ThemeProviderInitialValue = useMemo(() => {
  //   return { cardDetailData, title, openToDoEditModal, onClose };
  // }, [cardDetailData, title, openToDoEditModal, onClose]);

  return (
    <BackDropModal isOpen={isOpen} onClose={onClose}>
      <S.ModalLayout>
        <ThemeContextProvider>
          <ModalHeader />
          <S.ModalBody>
            <MainBox />
            <SideBox />
          </S.ModalBody>
        </ThemeContextProvider>
      </S.ModalLayout>
    </BackDropModal>
  );
}

export default CardConfirmModal;
