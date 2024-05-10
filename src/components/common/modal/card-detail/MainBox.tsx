import styled from 'styled-components';
import Comment from '@/components/common/Modal/card-detail/Comment';
import ContentAndImageBox from '@/components/common/Modal/card-detail/ContentAndImageBox';
import TagBox from '@/components/common/Modal/card-detail/TagBox';
import MEDIA_QUERIES from '@/constants/MEDIAQUERIES';
import { CardInfoProps } from '@/types/CardDetail';

const S = {
  MainAndSideBox: styled.div`
    display: flex;
  `,
  MainBox: styled.div`
    display: flex;
    flex-direction: column;
    width: 45rem;
    flex: 1;

    ${MEDIA_QUERIES.onMobile} {
      width: 100%;
      word-break: break-all;
    }
  `,
};

function MainBox() {
  return (
    <S.MainBox>
      <TagBox />
      <ContentAndImageBox />
      <Comment />
    </S.MainBox>
  );
}
export default MainBox;
