import { useEffect, useState } from 'react';
import Modal from '../../components/common/Modal';
import * as S from './components/style/MemoryDetailStyle';
import { CommentList, ImageContent, InputForm, TextContent } from './components';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import {
  getDetailComments,
  getDetailAlbum,
  deleteAlbum,
  getEmpathy,
  getComment,
  deleteComment,
} from './MemoryDetailApi';
import Spinner from '../../components/common/Spinner';
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
  const [isSharedAlbum, setSharedAlbum] = useState<boolean>(false);
  const albumId = useParams().id;
  const location = useLocation();
  const navigate = useNavigate();
  const [isCheckedEmpathy, setIsCheckedEmpathy] = useState<boolean>(false);
  const [empathyCount, setEmpathyCount] = useState<number>(0);
  const [commentCount, setCommentCount] = useState<number>(0);
  const [isCommentDelete, setCommentDelete] = useState<boolean>(false);
  const [targetCommentId, setTargetCommentId] = useState<number>(0);

  const firstBtnHandler = () => {
    setModal(false);
    setIsRevise(false);
    setCommentDelete(false);
  };

  const secondBtnHandler = async () => {
    if (isRevise) {
      navigate(`/writeAlbum/${albumId}`, { state: { detailInfo } });
    } else if (isCommentDelete) {
      const res = await deleteComment(albumId, targetCommentId);
      if (!res) {
        fetchDetailComments();
      }
    } else {
      const res = await deleteAlbum(albumId);
      if (!res) {
        navigate('/memory/myAlbum');
      }
    }

    setModal(false);
    setIsRevise(false);
    setCommentDelete(false);
  };

  const handleRevise = () => {
    setIsRevise(true);
    setModal(true);
  };

  const handleAlbumDelete = () => {
    setIsRevise(false);
    setModal(true);
  };

  const handleCommentDelete = (commentId: number) => {
    setCommentDelete(true);
    setModal(true);
    setTargetCommentId(commentId);
  };

  const fetchDetailAlbum = async () => {
    const data = await getDetailAlbum(albumId);
    setDetailInfo(data);
  };

  const fetchDetailComments = async () => {
    const data = await getDetailComments(albumId);
    setCommentList(data.content);
    setCommentCount(() => {
      return data.content.reduce((acc: number, arr: CommentType) => {
        if (!arr.child) return acc + 1;
        else {
          return acc + 1 + arr.child.length;
        }
      }, 0);
    });
  };

  const fetchEmapty = async () => {
    const data = await getEmpathy(albumId);
    setEmpathyCount(data.empathyCount);
    setIsCheckedEmpathy(data.empathyExistAboutUser);
  };

  useEffect(() => {
    if (location.pathname.includes('/memory/sharedAlbum')) {
      setSharedAlbum(true);
    }
    fetchDetailAlbum();
    fetchDetailComments();
    fetchEmapty();
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
          handleAlbumDelete={handleAlbumDelete}
          detailInfo={detailInfo}
          albumId={albumId}
          empathy={empathyCount}
          comment={commentCount}
          isCheckedEmpathy={isCheckedEmpathy}
          setIsCheckedEmpathy={setIsCheckedEmpathy}
        />
        {isSharedAlbum ? (
          <InputForm
            albumId={albumId}
            accessUserProfileImageUrl={detailInfo.accessUserProfileImageUrl}
          />
        ) : null}
        <S.CommentBox>
          {commentList.length !== 0 ? (
            commentList.map((comment) => (
              <CommentList
                comment={comment}
                key={comment.commentId}
                albumId={albumId}
                accessUserProfileImageUrl={detailInfo.accessUserProfileImageUrl}
                isSharedAlbum={isSharedAlbum}
                handleCommentDelete={handleCommentDelete}
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
