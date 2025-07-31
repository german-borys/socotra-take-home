import React, {ReactNode, useContext, useMemo, useReducer} from 'react';

type State = {
  activeStep: number | null,
  applicationSubmitted: boolean,
  personalInfo: {
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    dob: string,
  },
  address: {
    street: string,
    city: string,
    state: string,
    zip: number | null,
  },
  vehicleInfo: {
    year: number | null,
    make: string,
    model: string,
    vin: number | null,
  },
   coverageOpts: {
    type: string,
    liabilityLimits: string,
    collisionLimits: string,
   }
}
const defaultState: State = {
  activeStep: null,
  applicationSubmitted: false,
  personalInfo: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dob: ''
  },
  address: {
    street: '',
    city: '',
    state: '',
    zip: null,
  },
  vehicleInfo: {
    year: null,
    make: '',
    model: '',
    vin: null,
  },
  coverageOpts: {
    type: '',
    liabilityLimits: '',
    collisionLimits: '',
   } 
}

// store state here
export const ContextData = React.createContext(defaultState);

// store actions here
export const ContextApi = React.createContext({
  nextStep: () => {},
  prevStep: () => {},
  submitApplication: () => {},
  updateApplication: (payload:any) => {}
});

type Action = {type: 'next-step' | 'prev-step' | 'submit-application'} | {type: 'update-application', payload: any};
const reducer = (state: State, action: Action): State => {
  switch(action.type) {
    case 'next-step':
      return {...state, activeStep: state.activeStep !== null ? state.activeStep + 1 : 0}
    case 'prev-step':
      return {...state, activeStep: state.activeStep ? state.activeStep - 1 : null}
    case 'submit-application':
      return {...state, applicationSubmitted: true}
    case 'update-application':
      return {...state, ...action.payload}
  }
  return state;
}

const AppContext = ({children}: {children: ReactNode}) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const data = useMemo(() => ({...state}), [state]);
  const api = useMemo(() => {
    return {
      nextStep: () => dispatch({type: 'next-step'}),
      prevStep: () => dispatch({type: 'prev-step'}),
      submitApplication: () => dispatch({type: 'submit-application'}),
      updateApplication: (payload: any) => dispatch({type: 'update-application', payload})
    }
  }, [])

  return (
    <ContextData.Provider value={data}>
      <ContextApi.Provider value={api}> {children}</ContextApi.Provider>
    </ContextData.Provider>
  )
}

export const useApplicationData = () => useContext(ContextData);
export const useApplicationApi = () => useContext(ContextApi);

export default AppContext;