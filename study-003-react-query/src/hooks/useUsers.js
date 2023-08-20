import { useQuery } from "@tanstack/react-query";

const fetchUser = async () => {
  // https://jsonplaceholder.typicode.com
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  return await response.json();
};

export const useUserQuery = () =>
  useQuery({
    queryKey: ["user"],
    queryFn: fetchUser,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    staleTime: 1000 * 2, // fresh -> stale 로 넘어가는 시간
    cacheTime: 1000 * 3, // 컴포넌트가 unmount 되어 inactive 상태에서 데이터를 cache 로 유지할 시간
  });

/**
 * fresh : 서버 데이터를 최신 상태로 인식하는 상태
 * stale : 서버 데이터를 오래된 데이터로 인식하는 상태 (default: 0ms)
 * inactive : 서버 데이터가 더이상 컴포넌트에서 활용되지 않는 상태 (cache time 이후 소멸, cache default: 5 minutes = 1000 * 6 * 5)
 */
