import React, {useEffect, useRef, useState} from 'react';


const Loop = (props) =>
{
  const loopResponse = (response) =>
  {
    const weekdays       = ['monday', 'tuesday', 'wednesday']; // und so weiter
    const setStateResult = {};

    weekdays.forEach((value, i) =>
    {
      setStateResult[value+'Id'] = response[i].id;
      setStateResult[value+'Datum'] = response[i].datum;
      setStateResult[value+'Von'] = response[i].von;
      //.... und so weiter.....
    });
  };


  return (
    <>

    </>
  );
};

export {Loop};