import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const USER_URL = "https://jsonplaceholder.typicode.com/users";
const fetchUser = async ({ queryKey }) => {
  // https://jsonplaceholder.typicode.com
  const response = await fetch(`${USER_URL}/${queryKey[1]}`);
  return await response.json();
};

export const useUserQuery = (id = 1) =>
  useQuery({
    queryKey: ["user", id],
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

const updateUserName = async ({ user, id }) => {
  console.log(user);
  try {
    const response = await fetch(`${USER_URL}/${id}`, {
      method: "PATCH",
      body: JSON.stringify(user),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    return await response.json();
  } catch (e) {
    console.error("updateUserName error occurred!", e);
  }
};

export const useUserMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateUserName,
    onSuccess: (data, variables, context) => {
      // return sample
      // {
      //   id: 1,
      //   title: 'foo',
      //   body: '...',
      //   userId: 1
      // }
      // queryClient.setQueryData(queryKey, updater)
      queryClient.setQueryData(["user", data.id], data);
    },
  });
};
