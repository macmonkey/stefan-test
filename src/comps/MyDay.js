import React, {useContext, useEffect, useRef, useState} from 'react';
import {FormContext} from '../hooks/useFormData';
import {MyField} from './MyField';
import PropTypes from 'prop-types';


const MyDay = (props) =>
{
  const {formData, updateFieldValue} = useContext(FormContext);

  const onFieldChange = (e) =>
  {
    const curVal  = e.currentTarget.value;
    const fieldId = e.currentTarget.id;

    updateFieldValue(props.dayId, fieldId, curVal);
  };


  return (
    <>
      <h1>Day: {props.name}</h1>
      <MyField placeholder={'beschreibung'} value={formData[props.dayId]['beschreibung']} name={'beschreibung'} onFieldChange={(e) => onFieldChange(e)} />
      <MyField placeholder={'some number'} value={formData[props.dayId]['someNumber']} name={'someNumber'} onFieldChange={(e) => onFieldChange(e)} />
    </>
  );
};

export {MyDay};

MyDay.propTypes = {
  name : PropTypes.string.isRequired,
  dayId: PropTypes.number.isRequired
};