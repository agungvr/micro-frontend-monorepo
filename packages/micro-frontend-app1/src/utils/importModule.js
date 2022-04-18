import React, { lazy } from "react";

const handleImport = async (appName, moduleName) => {
  try {
    const comp = await System.import(appName);
    return comp[moduleName];
  } catch {
    return () => <React.Fragment />;
  }
};

export const importModule = (appName, moduleName) =>
  lazy(() =>
    handleImport(appName, moduleName).then((comp) => ({
      default: comp,
    }))
  );
