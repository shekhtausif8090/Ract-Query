function StatusSelect({ onChange, value }) {
  const possibleStatus = [
    { id: "backlog", label: "Backlog" },
    { id: "todo", label: "To-do" },
    { id: "inProgress", label: "In Progress" },
    { id: "done", label: "Done" },
    { id: "cancelled", label: "Cancelled" },
  ];

  return (
    <select className="status-select" value={value} onChange={onChange}>
      {possibleStatus.map((status) => (
        <option key={status.id} value={status.id}>
          {status.label}
        </option>
      ))}
    </select>
  );
}
export default StatusSelect;
