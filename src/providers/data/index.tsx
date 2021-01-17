import React, { useEffect, createContext, useReducer, ReactNode } from 'react';
import Api from 'services/api';
import { normalizeEntries } from 'services/contentful';
import { City, Person, Page, Error, Action } from 'types';
import { createAction } from 'utils/createAction';
import { URL_STRINGS } from 'utils/url-contstants';

type ProviderProps = {
  children: ReactNode;
};
type State = {
  isLoading: boolean;
  data: {
    assets: { [key: string]: any };
    city: City[];
    people: Person[];
    page: Page;
  } | null;
  error: Error | null;
  cityQuery?: (c: string) => void;
};

const initialState: State = {
  isLoading: false,
  data: null,
  error: null,
  cityQuery: undefined,
};

export const DataContext = createContext(initialState);

DataContext.displayName = 'DataContext';

const request = () => createAction('request');
const success = (data: any) => createAction('success', normalizeEntries(data));
const error = (error: Error) => createAction('error', error);
const updatePeople = (data: any) => createAction('error', data);

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'request':
      return { ...state, isLoading: true };
    case 'error':
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        data: null,
      };
    case 'success':
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case 'update people':
      return {
        ...state,
        data: {
          ...state.data,
          people: action.payload,
        },
      };

    default:
      return state;
  }
};

const DataProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch(request());
    Api.get(URL_STRINGS.ENTITIES)
      .then((res) => dispatch(success(res.data)))
      .catch((errorResponse: any) => {
        if (errorResponse.response) {
          return dispatch(
            error({
              message: errorResponse.response,
              status: errorResponse.response.status,
            })
          );
        }
        dispatch(error({ message: errorResponse.message }));
      });
  }, []);

  return <DataContext.Provider value={state}>{children}</DataContext.Provider>;
};

export default DataProvider;
