import { useQuery } from "react-query";
import { fetchSearch } from "./fetchSearch";

function useSearch(searchValue) {
  const search = useQuery(["issues", "search", searchValue], fetchSearch, {
    enabled: searchValue.length > 0,
  });

  return search;
}
export default useSearch;
