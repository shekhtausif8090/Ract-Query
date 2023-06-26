import "./style.css";

import { GoIssueOpened, GoIssueClosed, GoComment } from "react-icons/go";
import { Link } from "react-router-dom";
import { relativeDate } from "../helpers/relativeDate";
import useUserData from "../helpers/useUserData";
import Label from "./Label";

function IssueItem(props) {
  const {
    title,
    number,
    assignee,
    commentCount,
    createdBy,
    createdDate,
    labels,
    status,
  } = props;

  const assign = useUserData(assignee);
  const created = useUserData(createdBy);

  return (
    <li>
      <div>
        {status === "done" || status === "cancelled" ? (
          <GoIssueClosed style={{ color: "red" }} />
        ) : (
          <GoIssueOpened style={{ color: "green" }} />
        )}
      </div>
      <div className="issue-content">
        <span>
          <Link to={`/issue/${number}`}>{title}</Link>
          {labels.map((label) => (
            <Label key={label} label={label} />
          ))}
        </span>
        <small>
          #{number} opened {relativeDate(createdDate)} by{" "}
          {created.isSuccess ? created.data.name : ""}
        </small>
      </div>
      {assignee ? (
        <img
          src={assign.isSuccess ? assign.data.profilePictureUrl : ""}
          className="assigned-to"
          alt={`Assigned to ${assign.isSuccess ? assign.data.name : "avatar"}`}
        />
      ) : null}
      <span className="comment-count">
        {commentCount > 0 ? (
          <>
            <GoComment /> {commentCount}
          </>
        ) : null}
      </span>
    </li>
  );
}

export default IssueItem;
