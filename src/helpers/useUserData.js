import { useQuery } from "react-query";
import { fetchUserData } from "./fetchUserData";

function useUserData(userId) {
  if (userId === null || userId === "") {
    return {};
  }
  const usersData = useQuery(["users", userId], fetchUserData, {
    staleTime: 1000 * 60 * 5,
  });

  return usersData;
}
export default useUserData;
