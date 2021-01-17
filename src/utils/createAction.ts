export const createAction = (type: string, payload?: any, meta?: any) => {
  if (typeof payload === 'undefined' && typeof meta === 'undefined') {
    return { type };
  } else if (typeof meta === 'undefined') {
    return { type, payload };
  } else {
    return { type, payload, meta };
  }
};
