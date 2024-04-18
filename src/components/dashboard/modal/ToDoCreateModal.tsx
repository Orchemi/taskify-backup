import { useState } from 'react';
import { styled } from 'styled-components';
import DateSelector from '@/components/common/DateSelector';
import ImgFileUpload from '@/components/common/ImgFileUpload';
import SelectBox from '@/components/common/SelectBox';
import Button from '@/components/common/button/Button';
import BackDropModal from '@/components/common/modal/BackDropModal';
import { BUTTON_TYPE } from '@/constants/BUTTON_TYPE';
import { RequiredStar } from '@/styles/commonStyle';

const S = {
  Title: styled.h1`
    font-size: 2.4rem;
    font-weight: 700;
  `,

  FormContainer: styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.8rem;
    margin-top: 2.4rem;

    @media screen and (min-width: 768px) {
      width: 46rem;
      margin-top: 3.2rem;
    }
  `,

  FieldBox: styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
  `,

  Label: styled.label`
    font-size: 1.7rem;
    font-weight: 500;

    &.required {
      ${RequiredStar('after')}
    }

    @media screen and (max-width: 768px) {
      font-size: 1.6rem;
    }
  `,

  Input: styled.input`
    width: 100%;
    height: 4.8rem;
    padding: 1.6rem;
    border: ${({ theme }) => theme.border.lightGray};
    border-radius: 0.4rem;
    font-size: 1.6rem;

    &::placeholder {
      color: ${({ theme }) => theme.color.gray};
    }

    @media screen and (max-width: 768px) {
      font-size: 1.4rem;
    }
  `,

  Textarea: styled.textarea`
    min-height: 10rem;
    padding: 1.6rem;
    border: ${({ theme }) => theme.border.lightGray};
    border-radius: 0.4rem;
    font-size: 1.6rem;

    &:focus {
      outline: none;
    }
    &::placeholder {
      color: ${({ theme }) => theme.color.gray};
    }

    @media screen and (max-width: 768px) {
      font-size: 1.4rem;
    }
  `,

  ButtonContainer: styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 1.2rem;

    margin-top: 2.8rem;
  `,
};

const selectBoxOptions = [
  { value: '배유철', label: '배유철' },
  { value: '배동석', label: '배동석' },
  { value: 'ToDo', label: '🔹To Do' },
  { value: '박지윤', label: '박지윤' },
  { value: '난사람', label: 'alallalalalaalalallalalalalaaalalalaalal' },
];

function ToDoCreateModal({ isOpen, onClose }: any) {
  const [toDoInfo, setToDoInfo] = useState({
    assignee: '',
    title: '',
    description: '',
    dueDate: '',
    tags: [],
  });

  const handleOnChange = (fieldName: string, value: string | string[]) => {
    setToDoInfo((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  return (
    <BackDropModal isOpen={isOpen} onClose={onClose}>
      <div style={{ maxHeight: '90rem', overflow: 'scroll' }}>
        <S.Title>📌 할 일 생성</S.Title>
        <S.FormContainer>
          <S.FieldBox>
            <S.Label>담당자</S.Label>
            <SelectBox options={selectBoxOptions} placeholder={true} />
          </S.FieldBox>

          <S.FieldBox>
            <S.Label htmlFor="title" className="required">
              제목
            </S.Label>
            <S.Input
              id="title"
              type="text"
              placeholder="제목을 입력해주세요"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleOnChange('title', e.target.value)
              }
            />
          </S.FieldBox>

          <S.FieldBox>
            <S.Label className="required">설명</S.Label>
            <S.Textarea
              placeholder="설명을 입력해주세요"
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                handleOnChange('description', e.target.value)
              }
            />
          </S.FieldBox>

          <S.FieldBox>
            <S.Label>마감일</S.Label>
            <DateSelector />
          </S.FieldBox>

          <S.FieldBox>
            <S.Label htmlFor="tag">태그</S.Label>
            <S.Input
              id="tag"
              type="text"
              placeholder="태그를 입력해보세요"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleOnChange('title', e.target.value)
              }
            />
          </S.FieldBox>

          <S.FieldBox>
            <S.Label>이미지</S.Label>
            <ImgFileUpload edit={false} small={true} />
          </S.FieldBox>
        </S.FormContainer>

        <S.ButtonContainer>
          <Button styleType={BUTTON_TYPE.SECONDARY} onClick={onClose}>
            취소
          </Button>
          <Button disabled>생성</Button>
        </S.ButtonContainer>
      </div>
    </BackDropModal>
  );
}

export default ToDoCreateModal;
