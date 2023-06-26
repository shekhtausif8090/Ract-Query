import fetchWithError from "./fetchWithError";

export async function fetchData({ queryKey }) {
  console.log(queryKey);
  const alllabel = queryKey[1].label;
  const status = queryKey[1].status;
  const pageNum = queryKey[1].pageNum;
  const statusString = status ? `&status=${status}` : "";
  const labelsString = alllabel.map((label) => `labels[]=${label}`).join("&");
  const paginationString = pageNum ? `&page=${pageNum}` : "";
  const result = await fetchWithError(
    `/api/issues?${labelsString}${statusString}${paginationString}`
  );
  return result;
}
