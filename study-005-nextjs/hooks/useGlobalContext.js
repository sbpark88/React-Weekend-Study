import { createContext, useCallback, useContext, useState } from "react";

const GlobalContext = createContext(null);

const INITIAL_STATE = { displayName: "", uid: "" };

export function GlobalProvider({ children }) {
  const [loginInfo, setLoginInfo] = useState(INITIAL_STATE);

  const resetLoginInfo = useCallback(() => {
    setLoginInfo(INITIAL_STATE);
  }, []);

  return (
    <GlobalContext.Provider value={{ loginInfo, setLoginInfo, resetLoginInfo }}>
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobalData() {
  const context = useContext(GlobalContext);
  if (!context)
    throw new Error(
      "useGlobalData hook 은 GlobalProvider 컴포넌트 안쪽에서만 호출할 수 있습니다.",
    );
  return context;
}
