export const SEARCH = 'SEARCH';


export const search = (value) => {
  return {
    type:SEARCH,
    payload: value
  }
}
