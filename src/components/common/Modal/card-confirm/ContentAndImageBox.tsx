import Image from 'next/image';
import { CardConfirmModalProps } from './types';
import styled from 'styled-components';
import MEDIA_QUERIES from '@/constants/MEDIAQUERIES';

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    ${MEDIA_QUERIES.onMobile} {
      width: 100%;
      word-break: break-all;
    }
  `,
  ContentBox: styled.div`
    width: 100%;
    margin-bottom: 2.5rem;
  `,
  Image: styled(Image)`
    ${MEDIA_QUERIES.onMobile} {
      width: 100%;
      height: 16rem;
    }
  `,
};
function ContentAndImageBox({ cardInfoData }: CardConfirmModalProps) {
  return (
    <S.Container>
      <S.ContentBox>{cardInfoData.description}</S.ContentBox>
      <S.Image
        src={cardInfoData.imageUrl}
        width={450}
        height={260}
        alt="상세 이미지"
      />
    </S.Container>
  );
}

export default ContentAndImageBox;
