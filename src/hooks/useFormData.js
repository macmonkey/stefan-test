import React, {useState} from 'react';


const FormContext = React.createContext([{}, () => {}]);


const initialData = [
  //Monday
  {
    beschreibung: '',
    someNumber  : ''
  },
  //Tuesday
  {
    beschreibung: '',
    someNumber  : ''
  }
];


const weekdays    = ['Monday', 'Tuesday'];
const dayInitData = {beschreibung: '', someNumber: ''};


const useFormData = () =>
{
  const [formData, setFormData] = useState(() =>
  {
    return weekdays.map(() => {return dayInitData;});
  });

  const fetchFormData = () =>
  {
    console.log('fetch data from DB');
    //.... Dummy
    const fetchedData = [];

    //Monday
    fetchedData.push({
      beschreibung: 'blupp',
      someNumber  : 120
    });

    fetchedData.push({
      beschreibung: 'blah',
      someNumber  : 200
    });

    setFormData(fetchedData);

  };


  const updateFieldValue = (dayID, fieldID, val) =>
  {
    const newData           = Array.from(formData);
    newData[dayID][fieldID] = val;
    setFormData(newData);

    console.log('field data update', 'day:', dayID, 'field:', fieldID, 'value:', val);

    pushData();
  };

  const pushData = () =>
  {
    //DB Push
    console.log('hier der DB push, mit allen werten', formData);
  };


  return {formData, fetchFormData, updateFieldValue};
};

export {FormContext, useFormData, weekdays};