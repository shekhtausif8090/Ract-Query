export async function fetchLabelData() {
  const result = await fetch("/api/labels");
  if (!result.ok) {
    throw new Error("SOmethin went wrong");
  }
  return result.json();
}
