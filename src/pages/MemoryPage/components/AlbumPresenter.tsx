import { Link } from 'react-router-dom';
import { AlbumContainer } from './style/AlbumPresenterStyle';
import type { AlbumContent } from '../../../type/AlbumType';

type AlbumPresenterProps = {
  albumData: AlbumContent[];
};

const AlbumPresenter = ({ albumData }: AlbumPresenterProps) => {
  return (
    <AlbumContainer>
      {albumData.map((item) => (
        <Link to={`${item.albumId}`} className="imgLink" key={item.albumId}>
          <figure>
            <img src={item.imageUrl} loading="lazy" alt={item.title} />
            <div className="figBox">
              <figcaption>
                <div className="figItemBox">
                  <img src="/img/HeartDog.svg" alt="HeartDog" className="figItemImg" />
                  <div>{item.empathyCount}</div>
                </div>
                <div className="figItemBox">
                  <img src="/img/Comment.svg" alt="Comment" className="figItemImg" />
                  <div>{item.commentCount}</div>
                </div>
              </figcaption>
            </div>
          </figure>
        </Link>
      ))}
    </AlbumContainer>
  );
};

export default AlbumPresenter;
