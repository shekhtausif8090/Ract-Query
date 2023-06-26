import useLabelsData from "../helpers/useLabelsData";

export default function LabelList({ toggle, selected }) {
  const labels = useLabelsData();
  if (labels.isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="labels">
      <ul>
        {labels.data.map((label) => (
          <li key={label.id}>
            <button
              onClick={() => toggle(label.id)}
              className={`label ${
                selected.includes(label.id) ? "selected " : ""
              }${label.color}`}
            >
              {label.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
