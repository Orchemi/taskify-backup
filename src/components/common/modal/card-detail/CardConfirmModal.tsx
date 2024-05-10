import { useEffect } from 'react';
import styled from 'styled-components';
import MainBox from '@/components/common/Modal/card-detail/MainBox';
import ModalHeader from '@/components/common/Modal/card-detail/ModalHeader';
import SideBox from '@/components/common/Modal/card-detail/SideBox';
import BackDropModal from '@/components/common/modal/BackDropModal';
import useSafeThemeContext from '@/components/provider/ThemeProvider';
import useDetailCardQuery from '@/hooks/query/cards/useDetailCardQuery';
import MEDIA_QUERIES from '@/constants/MEDIAQUERIES';

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
  cardId: number;
}
function CardConfirmModal({ cardId }: ModalOpenAndCloseProps) {
  const { showConfirmModal, closeConfirmModal, setCardDetailData } =
    useSafeThemeContext();

  const { data: cardDetailData } = useDetailCardQuery({
    cardId,
  });

  useEffect(() => {
    setCardDetailData(cardDetailData);
  }, [setCardDetailData, cardDetailData]);

  return (
    <BackDropModal isOpen={showConfirmModal} onClose={closeConfirmModal}>
      <S.ModalLayout>
        <ModalHeader />
        <S.ModalBody>
          <MainBox />
          <SideBox />
        </S.ModalBody>
      </S.ModalLayout>
    </BackDropModal>
  );
}

export default CardConfirmModal;
