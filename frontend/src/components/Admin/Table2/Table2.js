import './table2.scss'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function Table2({data}) {
    
  return (
    <>
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">User ID</TableCell>
            <TableCell className="tableCell">Name</TableCell>
            <TableCell className="tableCell">Email</TableCell>
            <TableCell className="tableCell">Joining Date</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((row) => (
            <TableRow key={row._id}>
              <TableCell className="tableCell">{row._id.substr(0, 10)}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.profile_image} alt="" className="image" />
                  {row.name}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.email}</TableCell>
              <TableCell className="tableCell">{row.createdAt.substr(0, 10)}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.isBlocked}`}>{row.isBlocked?"Blocked":"Active"}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  )
}

export default Table2