import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'reactstrap';
import { Link, useHistory } from 'react-router-dom';
import Banner from 'components/Banner';
import Images from 'constants/images';
import { useDispatch, useSelector } from 'react-redux';
import PhotoList from 'features/Photo/components/PhotoList';
import { removePhoto } from 'features/Photo/photoSlice';

MainPage.propTypes = {

};

function MainPage(props) {
  const photos = useSelector(state => state.photos);
  const history = useHistory();
  console.log('List of photos: ', photos);

  const dispatch = useDispatch();

  const handlePhotoEditClick = (photo) => {
    console.log('edit', photo);
    const editPhotoUrl = `/photos/${photo.id}`;
    history.push(editPhotoUrl);
  }

  const handlePhotoRemoveClick = (photo) => {
    console.log('remove', photo);
    dispatch(removePhoto(photo.id));
  }

  return (
    <div className="photo-main">
      <Banner title="Your awesome photos" backgroundUrl={Images.PINK_BG} />

      <Container className="text-center">
        <div className="py-5">
          <Link to="/photos/add">Add new photo</Link>
        </div>

        <PhotoList
          photoList={photos}
          onPhotoEditClick={handlePhotoEditClick}
          onPhotoRemoveClick={handlePhotoRemoveClick}
        />
      </Container>
    </div>
  );
}

export default MainPage;