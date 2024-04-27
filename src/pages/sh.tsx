import { useState } from 'react';
import SelectBox from '@/components/common/SelectBox';
import AddIconButton from '@/components/common/button/AddIconButton';
import Button from '@/components/common/button/Button';
import ToDoCreateModal from '@/components/common/modal/ToDoCreateModal';
import ToDoEditModal from '@/components/common/modal/ToDoEditModal';
import { BUTTON_TYPE } from '@/constants/BUTTON_TYPE';

const selectBoxOptions = [
  { value: '배유철', label: '배유철' },
  { value: '배동석', label: '배동석' },
  { value: 'ToDo', label: '🔹To Do' },
  { value: '박지윤', label: '박지윤' },
  { value: '난사람', label: 'alallalalalaalalallalalalalaaalalalaalal' },
];

const cardDetailInfo = {
  id: 5708,
  title: 'jhgff',
  description: 'lkuhgy',
  tags: ['곧 마감'],
  dueDate: '2024-05-02 23:30',
  assignee: {
    id: 1679,
    nickname: 'SH',
    profileImageUrl: null,
  },
  imageUrl:
    'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/taskify/task_image/4-11_24728_1714139820514.png',
  teamId: '4-11',
  columnId: 24728,
  dashboardId: 7373,
  createdAt: '2024-04-26T22:57:14.576Z',
  updatedAt: '2024-04-26T22:57:14.576Z',
};

function sh() {
  const [isModalOpen, setisModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  // async function fetchData() {
  //   try {
  //     const response = await testApi.postSignIn({
  //       email: 'test@test.com',
  //       password: '123qwe!!!',
  //     });
  //     console.log('로그인:', response.data);
  //   } catch (error) {
  //     console.error('로그인 에러:', error.response.data.message);
  //   }
  // }

  // fetchData();
  return (
    <>
      <Button size="S" styleType={BUTTON_TYPE.DESTRUCTIVE}>
        삭제
      </Button>
      <Button
        size="L"
        styleType={BUTTON_TYPE.PRIMARY}
        style={{ width: '30rem' }}
        disabled
      >
        버튼
      </Button>
      <Button
        size="L"
        styleType={BUTTON_TYPE.PRIMARY}
        style={{ width: '30rem' }}
        onClick={() => {
          setisModalOpen(true);
        }}
      >
        모달
      </Button>
      {isModalOpen && (
        <ToDoCreateModal
          isOpen={isModalOpen}
          onClose={() => setisModalOpen(false)}
        />
      )}
      <Button styleType={BUTTON_TYPE.SECONDARY}>취소</Button>

      <AddIconButton />
      <AddIconButton>새로운 대시보드</AddIconButton>

      <SelectBox options={selectBoxOptions} placeholder />

      <Button
        onClick={() => {
          setIsEditModalOpen(true);
        }}
      >
        버튼할게
      </Button>
      {isEditModalOpen && (
        <ToDoEditModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          id={cardDetailInfo.id}
          dashboardId={cardDetailInfo.dashboardId}
          columnId={cardDetailInfo.columnId}
          title={cardDetailInfo.title}
          description={cardDetailInfo.description}
          dueDate={cardDetailInfo.dueDate}
          tags={cardDetailInfo.tags}
          assignee={cardDetailInfo.assignee}
          imageUrl={cardDetailInfo.imageUrl}
        />
      )}
      <Button>버튼할게</Button>
      <Button>버튼할게</Button>
      <Button>버튼할게</Button>
    </>
  );
}

export default sh;
