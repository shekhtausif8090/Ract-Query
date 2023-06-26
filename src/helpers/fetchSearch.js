export async function fetchSearch({ queryKey }) {
  const searchValue = queryKey[1];
  const result = await fetch(`/api/search/issues?q=${searchValue}`);

  if (!result.ok) {
    throw new Error("SOmethin went wrong");
  }
  return result.json();
}
