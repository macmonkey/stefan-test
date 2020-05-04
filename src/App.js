import React, {useEffect} from 'react';
import './App.css';
import {MyDay} from './comps/MyDay';
import {useFormData, FormContext, weekdays} from './hooks/useFormData';


function App()
{

  const {formData, fetchFormData, updateFieldValue} = useFormData();

  useEffect(() =>
  {
    //init Fetch Data
    fetchFormData();

  }, []);


  //erzeugen der comps für die einzelnen Tage
  const DayComps = weekdays.map((item, i) =>
  {
    return <MyDay name={item} dayId={i} key={i} />;
  });


  return (
    <div className="App">
      <FormContext.Provider
        value={{
          formData        : formData,
          updateFieldValue: updateFieldValue
        }}
      >

        {DayComps}

      </FormContext.Provider>

    </div>
  );
}

export default App;
