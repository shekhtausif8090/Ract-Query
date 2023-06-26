import { GoIssueClosed, GoIssueOpened } from "react-icons/go";
import { possibleStatus } from "../helpers/defaultData";
import { relativeDate } from "../helpers/relativeDate";
import useUserData from "../helpers/useUserData";

function IssueHeader({
  title,
  number,
  status = "todo",
  createdBy,
  createdDate,
  comments,
}) {
  const createdUser = useUserData(createdBy);
  const statusObject = possibleStatus.find((pstatus) => pstatus.id === status);
  return (
    <header>
      <h2>
        {title} <span>#{number}</span>
      </h2>
      <div>
        <span
          className={
            status === "done" || status === "cancelled" ? "closed" : "open"
          }
        >
          {status === "done" || status === "cancelled" ? (
            <GoIssueClosed />
          ) : (
            <GoIssueOpened />
          )}
          {statusObject.label}
        </span>
        <span className="created-by">
          {createdUser.isLoading ? "..." : createdUser.data?.name}
        </span>{" "}
        opened this issue {relativeDate(createdDate)} · {comments.length}{" "}
        comments
      </div>
    </header>
  );
}

export default IssueHeader;
