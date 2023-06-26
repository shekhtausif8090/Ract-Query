import { useQuery } from "react-query";
import { fetchIssueDetails } from "./fetchIssueDetails";

function useIssueDetails(number) {
  const detailsQuery = useQuery(["Details", number], fetchIssueDetails);

  return detailsQuery;
}

export default useIssueDetails;
