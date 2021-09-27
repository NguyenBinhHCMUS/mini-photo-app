import React from 'react';
import { Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import PhotoCard from '../PhotoCard';

PhotoList.propTypes = {
  photoList: PropTypes.array,
  onPhotoEidtClick: PropTypes.func,
  onPhotoRemoveClick: PropTypes.func,
};

PhotoList.defaultProps = {
  photoList: [],
  onPhotoEditClick: null,
  onPhotoRemoveClick: null,
}

function PhotoList(props) {

  const { photoList, onPhotoEditClick, onPhotoRemoveClick } = props;

  console.log(photoList)

  return (
    <Row>
      {photoList.map(item => (
        <Col key={item.title} xs="12" md="6" lg="3">
          <PhotoCard
            photo={item}
            onEditClick={onPhotoEditClick}
            onRemoveClick={onPhotoRemoveClick}
          />
        </Col>
      ))}
    </Row>
  );
}

export default PhotoList;