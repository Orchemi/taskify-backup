import { useContext } from 'react';
import styled from 'styled-components';
import HashTag from '@/components/common/tag/HashTag';
import StateTag from '@/components/common/tag/StateTag';
import { ThemeContext } from '@/components/provider/ThemeProvider';
import useWindowSize, { Size } from '@/hooks/useWindowSize';
import MEDIA_QUERIES from '@/constants/MEDIAQUERIES';
import { CardInfoProps } from '@/types/CardDetail';

const S = {
  TagBox: styled.div`
    display: flex;
    margin-bottom: 2.5rem;

    ${MEDIA_QUERIES.onMobile} {
      margin: 1rem 0 2.3rem 0;
    }
  `,
  HashTagBox: styled.div`
    padding-right: 0.5rem;
  `,
  HeightLine: styled.div`
    border: 1px solid ${({ theme }) => theme.color.grayLight};
    margin: 0 2rem 0.2rem 2rem;
  `,
};

function TagBox() {
  const { cardDetailData, title: stateTag } = useContext(ThemeContext);
  const tags = cardDetailData && cardDetailData.tags;
  const { width }: Size = useWindowSize();
  const isMobile: boolean = width !== undefined && width <= 768;

  return (
    <S.TagBox>
      <StateTag isMobile={isMobile}>{stateTag}</StateTag>
      <S.HeightLine />
      {tags &&
        tags.map((tag, color) => (
          <S.HashTagBox>
            <HashTag isMobile={isMobile} index={color}>
              {tag}
            </HashTag>
          </S.HashTagBox>
        ))}
    </S.TagBox>
  );
}
export default TagBox;
