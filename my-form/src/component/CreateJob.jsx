import React from 'react';
import { useAppContext } from './AppContext';
import { useNavigate } from 'react-router-dom';

function CreateJob() {
  const { state, setFormData1, setForm1Complete } = useAppContext();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData1({ ...state.formData1, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Validate form 1 data, and set isForm1Complete to true if valid
      setForm1Complete(true);
      navigate('/step2');
    } catch (error) {
      // Handle validation errors
      console.error('Error submitting form:', error);
    }
  };

  const renderInput = (label, name, placeholder, width = '513px') => {
    return (
      <div className="" style={{ width }}>
        <label className="block mb-1" htmlFor={name}>
          {label}
        </label>
        <input
          type="text"
          name={name}
          placeholder={placeholder}
          value={state.formData1[name]}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-2 py-1"
        />
      </div>
    );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 p-8 absolute top-56 left-40 rounded border border-solid border-gray-300"
      style={{ height: '564px', width: '577px' }}
    >
      <div className='flex justify-between'>
        <h2 className="text-left mb-0 text-base font-semibold">Create Job</h2>
        <h2 className="text-left mb-0 text-base font-semibold">Step 1</h2>
      </div>
      {renderInput('Job Title', 'jobTitle', 'ex. UI UX Designer')}
      {renderInput('Company Name', 'companyName', 'ex. Google')}
      {renderInput('Industry', 'industry', 'ex. Information Technology')}
      <div className="flex gap-8 w-full">
        {renderInput('Location', 'location', 'ex. Chennai', '241px')}
        {renderInput('Remote Type', 'remoteType', 'ex. In-office', '241px')}
      </div>
      <div className="mt-16 self-end">
        <button type="submit" className="h-10 px-4 rounded bg-blue-500 text-white">
          Next
        </button>
      </div>
    </form>
  );
}

export default CreateJob;
