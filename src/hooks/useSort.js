import React from 'react';

const getSortFunctionForType = (type, sortProp) => {
  switch (type) {
    case 'number':
    default:
      return (a, b) => (b[sortProp] > a[sortProp] ? 1 : -1);
  }
}

const getSortFunctionAsc = (func, sortAsc) => {
  if (!sortAsc) {
    return func;
  }
  return (a, b) => func(b, a);
}

const useSort = (tableData, headersConfig, sortProp, sortAsc) => {
  if (!sortProp) {
    return tableData;
  }
  const columnData = headersConfig.find(({propName}) => sortProp === propName);
  if (!columnData) {
    console.warn('invalid sort prop value');
    return tableData;
  }
  const results = [...tableData];
  const sortFunctionByProp = getSortFunctionForType(headersConfig.propName, sortProp)
  const sortFunction = getSortFunctionAsc(sortFunctionByProp, sortAsc);
  results.sort(sortFunction);
  return results;
}

export default useSort;
