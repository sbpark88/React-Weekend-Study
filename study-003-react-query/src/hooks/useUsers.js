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
  });
