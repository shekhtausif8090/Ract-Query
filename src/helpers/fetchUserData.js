export async function fetchUserData({ queryKey }) {
  const key = queryKey[1];
  const result = await fetch(`/api/users/${key}`);

  if (!result.ok) {
    throw new Error("SOmethin went wrong");
  }
  return result.json();
}
