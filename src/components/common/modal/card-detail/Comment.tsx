import styled from 'styled-components';
import CommentForm from '@/components/common/Modal/card-detail/CommentForm';
import CommentList from '@/components/common/Modal/card-detail/CommentList';
import { CardInfoProps } from '@/types/CardDetail';

const S = {
  CommentContainer: styled.ul`
    list-style: none;
    padding: 0;
  `,
};

function Comment() {
  return (
    <S.CommentContainer>
      <CommentForm />
      <CommentList />
    </S.CommentContainer>
  );
}

export default Comment;
