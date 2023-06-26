import { useQuery } from "react-query";
import { defaultLabels } from "./defaultData";
import { fetchLabelData } from "./fetchLabelsData";

function useLabelsData() {
  const labelsQuery = useQuery(["lables"], fetchLabelData, {
    staleTime: 1000 * 60 * 5,
    placeholderData: defaultLabels,
  });

  return labelsQuery;
}
export default useLabelsData;
