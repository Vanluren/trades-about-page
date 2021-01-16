import React, { useEffect, createContext, useReducer, ReactNode } from 'react';
import { createAction } from 'utils/createAction';

type ProviderProps = {
  children: ReactNode;
};
type State = {
  isLoading: boolean;
  data: boolean | null;
};
type Action = {
  type: string;
  payload?: any;
  meta?: any;
};

const initialState: State = {
  isLoading: false,
  data: null,
};

const DataContext = createContext(initialState);

DataContext.displayName = 'DataContext';

const request = () => createAction('request');
const success = (data: { hello: boolean }) => createAction('success', data);

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'request':
      return { ...state, isLoading: true };
    case 'success':
      return {
        ...state,
        isLoading: false,
        data: true,
      };

    default:
      return state;
  }
};

const DataProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    if (state.data === null) {
      dispatch(request());
      dispatch(success({ hello: true }));
    }
  });

  return <DataContext.Provider value={state}>{children}</DataContext.Provider>;
};

export default DataProvider;
