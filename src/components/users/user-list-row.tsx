import React, { ReactNode } from "react";
import { Table } from "react-bootstrap";
// Create interfaces
interface UserListRowUI {
  [x: string]: ReactNode;
  user: any;
}
function convertTimestamp(timestamp: any): string {
  var d = new Date(timestamp * 1000), // Convert the passed timestamp to milliseconds
    yyyy = d.getFullYear(),
    mm = ("0" + (d.getMonth() + 1)).slice(-2), // Months are zero based. Add leading 0.
    dd = ("0" + d.getDate()).slice(-2), // Add leading 0.
    hh = d.getHours(),
    h = hh,
    min = ("0" + d.getMinutes()).slice(-2), // Add leading 0.
    // ampm = "AM",
    time;

  // if (hh > 12) {
  //   h = hh - 12;
  //   ampm = "PM";
  // } else if (hh === 12) {
  //   h = 12;
  //   ampm = "PM";
  // } else if (hh == 0) {
  //   h = 12;
  // }

  // ie: 2014-03-24, 3:00 PM
  time = yyyy + "." + mm + "." + dd + ", " + h + ":" + min + " ";
  return time;
}

export const UserListRow = (props: UserListRowUI) => (
  <Table responsive>
    <tr className="table-row">
      <td className="table-item">{props.position}</td>

      <td className="table-item">{props.user.chainId}</td>

      <td className="table-item">{convertTimestamp(props.user.timestamp)}</td>

      <td className="table-item">{props.user.number_of_operations}</td>

      <td className="table-item">{props.user.volume}</td>

      <td className="table-item">{props.user.fees}</td>
      <td className="table-item">{props.user.endorsements}</td>
    </tr>
  </Table>
);
