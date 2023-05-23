import { useEffect, useState } from 'react';
import Modal from '../../components/Modal';
import * as S from './components/style/MemoryDetailStyle';
import { CommentList, ImageContent, InputForm, TextContent } from './components';
import { useParams } from 'react-router-dom';
import { getDetailComments, getDetailAlbum } from './MemoryDetailApi';
import Spinner from '../../components/Spinner';
import { AlbumDetail, initialDetail } from '../../type/AlbumType';
import type { CommentType } from '../../type/CommentType';
import { refetchAtom } from '../../atom/atom';
import { useRecoilState } from 'recoil';

const deleteModalText = {
  text: '삭제하시겠습니까?',
  btnText1: '취소',
  btnText2: '삭제',
};

const reviseModalText = {
  text: '수정하시겠습니까?',
  btnText1: '취소',
  btnText2: '수정',
};

const MemoryDetailContainer = () => {
  const [isModal, setModal] = useState<boolean>(false);
  const [isRevise, setIsRevise] = useState<boolean>(false);
  const [isloading, setLoading] = useState<boolean>(true);
  const [commentList, setCommentList] = useState<CommentType[]>([]);
  const [detailInfo, setDetailInfo] = useState<AlbumDetail>(initialDetail);
  const [refetch, setRefetch] = useRecoilState<boolean>(refetchAtom);
  const albumId = useParams().id;

  const firstBtnHandler = () => {
    setModal(false);
    setIsRevise(false);
  };

  const secondBtnHandler = () => {
    console.log('second');
  };

  const handleRevise = () => {
    setIsRevise(true);
    setModal(true);
  };

  const handleDelete = () => {
    setIsRevise(false);
    setModal(true);
  };

  const fetchDetailAlbum = async () => {
    const data = await getDetailAlbum(albumId);
    console.log(data);
    setDetailInfo(data);
  };

  const fetchDetailComments = async () => {
    const data = await getDetailComments(albumId);
    console.log('comment', data);
    setCommentList(data.content);
  };

  useEffect(() => {
    fetchDetailAlbum();
    fetchDetailComments();
    setLoading(false);
  }, []);

  useEffect(() => {
    if (refetch) {
      fetchDetailComments();
    }
    setRefetch(false);
  }, [refetch]);

  if (isloading) {
    return <Spinner />;
  }

  return (
    <S.DetailBox>
      <Modal
        ModalText={isRevise ? reviseModalText : deleteModalText}
        isModal={isModal}
        firstBtnHandler={firstBtnHandler}
        SecondBtnHandler={secondBtnHandler}
      />
      <ImageContent imageUrl={detailInfo?.imageUrlList} />
      <S.DetailWrapper>
        <TextContent
          handleRevise={handleRevise}
          handleDelete={handleDelete}
          detailInfo={detailInfo}
          albumId={albumId}
        />
        <InputForm
          albumId={albumId}
          accessUserProfileImageUrl={detailInfo.accessUserProfileImageUrl}
        />
        <S.CommentBox>
          {commentList.length !== 0 ? (
            commentList.map((comment) => (
              <CommentList
                comment={comment}
                key={comment.commentId}
                albumId={albumId}
                accessUserProfileImageUrl={detailInfo.accessUserProfileImageUrl}
              />
            ))
          ) : (
            <div className="nocontent">댓글이 없습니다</div>
          )}
        </S.CommentBox>
      </S.DetailWrapper>
    </S.DetailBox>
  );
};

export default MemoryDetailContainer;
