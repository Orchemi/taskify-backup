import { useContext, useState } from 'react';
import styled from 'styled-components';
import Button from '@/components/common/button/Button';
import useSafeThemeContext from '@/components/provider/ThemeProvider';
import useCreateCommentsMutation from '@/hooks/query/comments/useCreateCommentsMutation';
import MEDIA_QUERIES from '@/constants/MEDIAQUERIES';

const S = {
  CommentFormBox: styled.div`
    margin-top: 2rem;
  `,

  Title: styled.h1`
    font-weight: 500;

    ${MEDIA_QUERIES.onMobile} {
      font-size: 1.4rem;
    }
  `,

  Form: styled.form``,

  InputWrapper: styled.div`
    position: relative;
    display: flex;
    width: 100%;
  `,
  TextArea: styled.textarea`
    padding: 1rem 0 7rem 1rem;
    margin-top: 1rem;
    height: 12rem;
    width: 100%;
    border: 1px solid ${({ theme }) => theme.color.grayLight};
    border-radius: 0.6rem;
    resize: none;

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
      box-sizing: border-box;
      padding: 0.7rem 7rem 5rem 1.2rem;
      height: 7rem;
    }
  `,

  Button: styled(Button)`
    position: absolute;
    bottom: 1rem;
    right: 2rem;

    ${MEDIA_QUERIES.onMobile} {
      top: 5rem;
      right: 2rem;
      width: 5rem;
      height: 2.5rem;
      display: flex;
      justify-content: center;
      align-items: center;

      font-size: 1.2rem;
    }
  `,
};

function CommentForm() {
  const { cardDetailData } = useSafeThemeContext();

  const [inputValue, setInputValue] = useState('');

  const { mutate: responseCreateComment } = useCreateCommentsMutation();

  const handleChangeInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmitContent = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    responseCreateComment({
      content: inputValue,
      cardId: Number(cardDetailData?.id),
      columnId: Number(cardDetailData?.columnId),
      dashboardId: Number(cardDetailData?.dashboardId),
    });

    setInputValue('');
  };

  return (
    <S.CommentFormBox>
      <S.Form onSubmit={handleSubmitContent}>
        <S.Title>댓글</S.Title>

        <S.InputWrapper>
          <S.TextArea
            onChange={handleChangeInput}
            value={inputValue}
            placeholder="댓글 작성하기"
          />

          <S.Button disabled={!inputValue} size="S">
            입력
          </S.Button>
        </S.InputWrapper>
      </S.Form>
    </S.CommentFormBox>
  );
}

export default CommentForm;
