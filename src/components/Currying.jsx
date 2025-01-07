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
  const getBackgroundColor = (value) => {
    if (!value) return 'orange'; // Default color
    if (value.length < 3) return 'lightcoral'; // Short input
    if (value.length < 6) return 'lightblue'; // Medium input
    return 'lightgreen'; // Long input
  };



  return (<>
    <div className='m-6 text-center pb-20'>

      <div className='flex justify-evenly  border-2 border-teal-500 bg-teal-500'>
        <div className='w-full grid row-span-3  h-[120px] w-[220px] bg-teal-200 text-center  items-center'>
          <h1 className='text-3xl font-bold'>Currying</h1>
        </div>
        <div className='grid w-full'>
          <div className='flex items-center justify-around	bg-gray-400 gap-4'>
            <p className=''>First Name :{values.firstName}</p>
            <input className='w-[50%' type='text' placeholder='First Name' value={values.firstName}
              onChange={handleChange('firstName')} style={{
                backgroundColor: getBackgroundColor(values.lastName),
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ccc',
                fontSize: '16px',
              }}
            />

          </div>
          <div className='flex items-center justify-around	bg-gray-300 gap-4'>
            <p>Last Name :{values.lastName}</p>
            <input type='text' placeholder='Last Name' value={values.lastName}
              onChange={handleChange('lastName')} />
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default CurriedinputComponents
