import useLabelsData from "../helpers/useLabelsData";

function Label({ label }) {
  const labelQuery = useLabelsData();
  if (labelQuery.isLoading) {
    return null;
  }
  const obj = labelQuery.data.find((qlabel) => qlabel.id === label);
  if (!obj) return null;

  return <span className={`label ${obj.color}`}>{obj.name}</span>;
}
export default Label;
