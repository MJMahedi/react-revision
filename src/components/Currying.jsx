import React, { useState } from 'react'

const handleInputChange = (fieldName) => (event) => {
  return { [fieldName]: event.target.value };
};

function CurriedinputComponents() {
  const [values, setValues] = useState({ firstName: '', lastName: '' });

  const handleChange = (fieldName) => (event) => {
    setValues({
      ...values,
      ...handleInputChange(fieldName)(event),
    });
  };

  return (<>
    <h1 className='p-6'>Currying</h1>
    <div className='flex items-center justify-evenly pt-6 pb-8 border-2 border-teal-500'>
      <input type='text' placeholder='First Name' value={values.firstName}
        onChange={handleChange('firstName')}
      />
      <input type='text' placeholder='Last Name'  value={values.lastName}
        onChange={handleChange('lastName')}/>
      <p>First Name :{values.firstName}</p>
      <p>Last Name :{values.lastName}</p>
    </div>
  </>
  )
}

export default CurriedinputComponents
