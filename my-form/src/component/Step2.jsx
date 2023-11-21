import React from 'react';
import axios from 'axios';
import { useAppContext } from './AppContext';
import { useNavigate } from 'react-router-dom';
function Step2() {
  const { state, setFormData2, setForm2Complete } = useAppContext();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData2({ ...state.formData2, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Validate form 2 data, and set isForm2Complete to true if valid
      setForm2Complete(true);

      // Check if both forms are complete before navigating
      if (state.isForm1Complete && state.isForm2Complete) {
        // Make API request using Axios
        const response = await axios.post(
          'https://6556eeecbd4bcef8b611d6fb.mockapi.io/users',
          { ...state.formData1, ...state.formData2 }
        );
        const userId = response.data.id;
        navigate(`/card/${userId}`);
        // Handle response as needed
        console.log(response.data);
      } else {
        console.log('Form 2 is not complete yet.');
      }
    } catch (error) {
      // Handle validation errors or API request errors
      console.error('Error submitting form:', error);
    }
  };

  return (
    <form
                  onSubmit={handleSubmit}
      className="flex flex-col gap-4 p-8 absolute top-56 left-40 rounded border border-solid border-gray-300"
      style={{ height: '564px', width: '577px' }}
    >
 <div className='flex justify-between'>
      <h2 className="text-left mb-0 text-base font-semibold">Create Job</h2>
      <h2 className="text-left mb-0 text-base font-semibold">Step 2</h2>
      </div>      <div className="flex gap-8 w-full">
        <div className="" style={{ width: '241px' }}>
          <label className="block mb-1 font-semibold" htmlFor="location">
            Experience
          </label>
          <input
            type="text"
            pattern="[0-9]*"
            name="minExperience"
            placeholder="Minimum"
            value={state.formData2.minExperience}
            onChange={handleChange}
            className="w-full border border-gray-500 rounded px-2 py-1"
          />
        </div>
        <div className="" style={{ width: '241px' }}>
          <label className="block mb-1 font-semibold leading-6" htmlFor="remoteType">
          </label>
          <input
            type="text"
            pattern="[0-9]*"
            name="maxExperience"
            placeholder="Maximum"
            value={state.formData2.maxExperience}
            onChange={handleChange}
            className="w-full border border-gray-500 rounded px-2 py-1 mt-6"
          />
        </div>
      </div>
      <div className="flex gap-8 w-full">
        <div className="" style={{ width: '241px' }}>
          <label className="block mb-1 font-semibold leading-6" htmlFor="location">
            Salary
          </label>
          <input
            type="text"
            pattern="[0-9]*"
            name="minSalary"
            placeholder="Min"
            value={state.formData2.minSalary}
            onChange={handleChange}
            className="w-full border border-gray-500 rounded px-2 py-1"
          />
        </div>
        <div className="" style={{ width: '241px' }}>
          <label className="block mb-1 font-semibold leading-6" htmlFor="maxSalary">
          </label>
          <input
            type="text"
            pattern="[0-9]*"
            name="maxSalary"
            placeholder="Maximum"
            value={state.formData2.maxSalary}
            onChange={handleChange}
            className="w-full border border-gray-500 rounded px-2 py-1 mt-6"
          />
        </div>
      </div>
      <div className="" style={{ width: '513px' }}>
        <label className="block mb-1 font-semibold leading-6" htmlFor="totalEmployee">
          Total employee
        </label>
        <input
          type="text"
          pattern="[0-9]*"
          name="totalEmployee"
          placeholder="ex.100"
          value={state.formData2.totalEmployee}
          onChange={handleChange}
          className="w-full border border-gray-500 rounded px-2 py-1"
        />
      </div>
      <div className="" style={{ width: '513px' }}>
        <label className="block mb-1 font-semibold" htmlFor="industry">
          Apply type</label></div>

      <div className="flex">
        <div className="flex items-center me-4">
          <input
            id="quickApply"
            type="radio"
            value="Quick Apply" 
            name="applyType"
            className="w-5 h-5 border-gray-200 dark:focus:ring-blue-600"
            onChange={handleChange}
          />
          <label htmlFor="quickApply" className="ms-1 font-semibold leading-6 text-gray-500 dark:text-gray-500 text-xl">
            Quick apply
          </label>
        </div>
        <div className="flex items-center me-4">
          <input
            id="externalApply"
            type="radio"
            value="External Apply" 
            name="applyType"
            className="w-5 h-5 border-gray-200 dark:focus:ring-blue-600"
            onChange={handleChange}
          />
          <label htmlFor="externalApply" className="ms-1 font-semibold leading-6 text-gray-500 dark:text-gray-500 text-xl">
            External apply
          </label>
        </div>
      </div>

      <div className="mt-16 self-end">
        <button
          type="submit"
          className="h-10 px-4 rounded bg-blue-500 text-white"
        >
          Save
        </button>
      </div>
    </form>
  );
}
export default Step2;
