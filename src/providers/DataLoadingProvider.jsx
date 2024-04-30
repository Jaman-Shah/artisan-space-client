import React, { createContext, useEffect, useState } from "react";

export const DataLoadingContext = createContext();
const DataLoadingProvider = ({ children }) => {
  const [dataLoading, setDataLoading] = useState(true);

  const loadingInfo = {
    dataLoading,
    setDataLoading,
  };
  return (
    <DataLoadingContext.Provider value={loadingInfo}>
      {children}
    </DataLoadingContext.Provider>
  );
};

export default DataLoadingProvider;
