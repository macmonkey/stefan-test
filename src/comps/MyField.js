import React, {useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';


const MyField = (props) =>
{
  return (
    <>
      <input value={props.value} placeholder={props.placeholder} onChange={props.onFieldChange} id={props.name} />
    </>
  );
};

export {MyField};

MyField.propTypes = {
  value        : PropTypes.string,
  name         : PropTypes.string,
  placeholder  : PropTypes.string,
  onFieldChange: PropTypes.func
};
