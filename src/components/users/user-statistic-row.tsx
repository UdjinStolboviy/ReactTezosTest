import React from "react";

interface UserStatsticListRowUI {
  statistic: any;
}

export const UserStatisticListRow = (props: UserStatsticListRowUI) => (
  <tr className="table-row">
    <td className="table-item table-static">{props.statistic.clicks}</td>

    <td className="table-item table-static">{props.statistic.page_views}</td>
  </tr>
);
