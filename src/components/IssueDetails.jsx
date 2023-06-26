import { useInfiniteQuery, useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { relativeDate } from "../helpers/relativeDate";
import useIssueDetails from "../helpers/useIssueDetails";
import useScrollToBottomAction from "../helpers/useScrollToBottomAction";
import useUserData from "../helpers/useUserData";
import IssueHeader from "./IssueHeader";
import Loader from "./Loader";

export default function IssueDetails() {
  const { number } = useParams();
  const result = useIssueDetails(number);
  const commentsQuery = useIssueComments(number);

  useScrollToBottomAction(document, commentsQuery.fetchNextPage, 100);

  if (result.isLoading) {
    return <span>Loading..</span>;
  }

  function useIssueComments(issueNumber) {
    return useInfiniteQuery(
      ["issues", issueNumber, "comments"],
      ({ signal, pageParam = 1 }) => {
        return fetch(`/api/issues/${issueNumber}/comments?page=${pageParam}`, {
          signal,
        }).then((res) => res.json());
      },
      {
        getNextPageParam: (lastPage, pages) => {
          if (lastPage.length === 0) return;
          return pages.length + 1;
        },
      }
    );
  }

  return (
    <div>
      <IssueHeader {...result.data} />
      <main>
        <section>
          {commentsQuery.isLoading ? (
            <p>Loading...</p>
          ) : (
            commentsQuery.data?.pages.map((commentPage) =>
              commentPage?.map((comment) => (
                <Comment key={comment.id} {...comment} />
              ))
            )
          )}
          {commentsQuery.isFetchingNextPage && <Loader />}
        </section>
        <aside></aside>
      </main>
    </div>
  );
}

function Comment({ comment, createdBy, createdDate }) {
  const userQuery = useUserData(createdBy);

  if (userQuery.isLoading)
    return (
      <div className="comment">
        <div>
          <div className="comment-header">Loading...</div>
        </div>
      </div>
    );

  return (
    <div className="comment">
      <img src={userQuery.data.profilePictureUrl} alt="Commenter Avatar" />
      <div>
        <div className="comment-header">
          <span>{userQuery.data.name}</span> commented{" "}
          <span>{relativeDate(createdDate)}</span>
        </div>
        <div className="comment-body">{comment}</div>
      </div>
    </div>
  );
}
