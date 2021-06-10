// @ts-nocheck

import React from "react";

// Import components
import { UserListRow } from "./user-list-row";

// Import styles
import "./styles/user-list.scss";

// Create interfaces
interface UserUI {}

interface UserListUI {
  user: UserUI[];
  loading?: boolean;
}

export const UserList = (props: UserListUI) => {
  const currentPosts = props.user;

  // Show loading message
  if (props.loading) return <p>Leaderboard table is loading...</p>;
  console.log(props);
  /* tslint:disable */
  return (
    <>
      <div className="user-text">Tezos blocks</div>

      <table className="table">
        <thead className="table-head">
          <tr className="header-text">
            <th className="table-head-item">Block ID </th>
            <hr className="head-hr" />
            <th className="table-head-item">Baker</th>
            <hr className="head-hr" />
            <th className="table-head-item one">Created</th>
            <hr className="head-hr" />
            <th className="table-head-item of">of operations </th>
            <hr className="head-hr" />
            <th className="table-head-item gender">Volume</th>
            <hr className="head-hr" />
            <th className="table-head-item addres">Fees</th>
            <hr className="head-hr" />
            <th className="table-head-item click">Endorsements</th>
            <hr className="head-hr" />

            <th className="table-head-item" />
          </tr>
        </thead>

        <tbody className="table-body">
          <div>
            {currentPosts.length > 0 ? (
              currentPosts.map((user: UserUI, _idx) => (
                <UserListRow
                  key={user.level}
                  user={user}
                  position={user.level}
                />
              ))
            ) : (
              <tr className="table-row">
                <td
                  className="table-item"
                  style={{ textAlign: "center" }}
                  colSpan={6}
                >
                  There are no user to show. Create one!
                </td>
              </tr>
            )}
          </div>
        </tbody>
      </table>
    </>
  );
};
