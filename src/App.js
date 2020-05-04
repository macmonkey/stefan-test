import React, {useEffect} from 'react';
import './App.css';
import {MyDay} from './comps/MyDay';
import {useFormData, FormContext} from './hooks/useFormData';


function App()
{

  const {formData, fetchFormData, updateFieldValue} = useFormData();

  useEffect(() =>
  {
    //init Fetch Data
    fetchFormData();

  }, []);


  return (
    <div className="App">
      <FormContext.Provider
        value={{
          formData        : formData,
          updateFieldValue: updateFieldValue
        }}
      >

        <MyDay name={'Monday'} dayId={0} />
        <MyDay name={'Tuesday'} dayId={1} />


      </FormContext.Provider>

    </div>
  );
}

export default App;
