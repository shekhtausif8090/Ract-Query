export async function fetchIssueDetails({ queryKey }) {
  const key = queryKey[1];
  console.log(key);
  const result = await fetch(`/api/issues/${key}`);

  if (!result.ok) {
    throw new Error("SOmethin went wrong");
  }
  return result.json();
}
