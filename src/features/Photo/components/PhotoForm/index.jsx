import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, FormGroup, Input, Label, Spinner } from 'reactstrap';
import { PHOTO_CATEGORY_OPTIONS } from 'constants/global';
import Images from 'constants/images';
import { FastField, Form, Formik } from 'formik';
import InputField from 'custom-fields/InputField';
import SelectField from 'custom-fields/SelectField';
import RandomPhotoField from 'custom-fields/RandomPhotoField';
import * as Yup from 'yup';

PhotoForm.propTypes = {
  isAddMode: PropTypes.bool,
  onSubmit: PropTypes.func,
};

PhotoForm.defaultProps = {
  onSubmit: null,
};

function PhotoForm(props) {
  const { initialValues, isAddMode } = props;
  // create schema
  const validationSchema = Yup.object().shape({
    title: Yup.string().required('This field is required.'),
    categoryId: Yup.number().required('This field is required.').nullable(),
    photo: Yup.string().when('categoryId', {
      is: 1,
      then: Yup.string().required('This field is required.'),
      otherwise: Yup.string().notRequired(),
    })
  });
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={props.onSubmit}
    >
      {formikProps => {
        const { values, errors, touched, isSubmitting } = formikProps;
        console.log({ values, errors, touched });
        return (
          <Form>
            <FastField
              name='title'
              component={InputField}

              label='Title'
              placeholder='Eg: Wow nature ...'
            />

            <FastField
              name='categoryId'
              component={SelectField}

              label='Category'
              placeholder="What's your photo category"
              options={PHOTO_CATEGORY_OPTIONS}
            />

            <FastField
              name="photo"
              component={RandomPhotoField}

              label="Photo"
            />

            <FormGroup>
              <Button type='submit' color={isAddMode ? "primary" : "success"}>
                {isSubmitting && <Spinner size='sm' />}
                {isAddMode ? 'Add to album' : 'Update'}
              </Button>
            </FormGroup>
          </Form>
        );
      }}
    </Formik>
  );
}

export default PhotoForm;