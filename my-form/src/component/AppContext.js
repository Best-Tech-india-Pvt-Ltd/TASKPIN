import React, { createContext, useContext, useReducer } from 'react';

const AppContext = createContext();

const initialState = {
  formData1: {
    jobTitle: '',
    companyName: '',
    industry: '',
    location: '',
    remoteType: '',
  },
  formData2: {
    minExperience: '',
    maxExperience: '',
    minSalary: '',
    maxSalary: '',
    totalEmployee: '',
    applyType: '',
  },
  isForm1Complete: false,
  isForm2Complete: false,
};

const actionTypes = {
  SET_FORM_DATA_1: 'SET_FORM_DATA_1',
  SET_FORM_DATA_2: 'SET_FORM_DATA_2',
  SET_FORM_1_COMPLETE: 'SET_FORM_1_COMPLETE',
  SET_FORM_2_COMPLETE: 'SET_FORM_2_COMPLETE',
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_FORM_DATA_1:
      return { ...state, formData1: { ...state.formData1, ...action.payload } };
    case actionTypes.SET_FORM_DATA_2:
      return { ...state, formData2: { ...state.formData2, ...action.payload } };
    case actionTypes.SET_FORM_1_COMPLETE:
      return { ...state, isForm1Complete: action.payload };
    case actionTypes.SET_FORM_2_COMPLETE:
      return { ...state, isForm2Complete: action.payload };
    default:
      return state;
  }
};

const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setFormData1 = (data) => dispatch({ type: actionTypes.SET_FORM_DATA_1, payload: data });
  const setFormData2 = (data) => dispatch({ type: actionTypes.SET_FORM_DATA_2, payload: data });
  const setForm1Complete = (value) => dispatch({ type: actionTypes.SET_FORM_1_COMPLETE, payload: value });
  const setForm2Complete = (value) => dispatch({ type: actionTypes.SET_FORM_2_COMPLETE, payload: value });

  return (
    <AppContext.Provider value={{ state, setFormData1, setFormData2, setForm1Complete, setForm2Complete }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppContextProvider');
  }
  return context;
};

export { AppContextProvider, useAppContext };
