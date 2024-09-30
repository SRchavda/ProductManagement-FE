import * as React from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { Button, CircularProgress } from "@mui/material";
import { Fragment } from "react";

export default function CustomTable({
  headCells,
  rowSettings,
  isLoading,
  data,
  handleEdit,
  handleDelete,
  fallBackMsg = "No Data Found!!",
}) {
  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ mb: 2, p: "20px" }}>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={"small"}
          >
            <TableHead>
              <TableRow>
                {headCells.map((headCell) => (
                  <TableCell
                    key={headCell.id}
                    align={headCell.numeric ? "right" : "left"}
                    padding={headCell.disablePadding ? "none" : "normal"}
                  >
                    <Typography fontWeight="700">{headCell.label}</Typography>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {isLoading ? (
                <TableRow>
                  <TableCell colSpan={4} scope="row" align="center">
                    <CircularProgress />
                  </TableCell>
                </TableRow>
              ) : data.length === 0 ? (
                <>
                  <TableRow tabIndex={-1} sx={{}}>
                    <TableCell
                      colSpan={4}
                      component="th"
                      scope="row"
                      align="center"
                    >
                      {fallBackMsg}
                    </TableCell>
                  </TableRow>
                </>
              ) : (
                data?.map((item, index) => {
                  return (
                    <TableRow
                      hover
                      tabIndex={-1}
                      key={item.id}
                      sx={{ cursor: "pointer" }}
                    >
                      {rowSettings?.map((row, index) => {
                        return (
                          <Fragment key={index}>
                            {!row.isButton ? (
                              <TableCell
                                align={index === 0 ? "left" : "right"}
                                height={40}
                              >
                                {row.isNest
                                  ? item[row?.per][row?.prop]
                                  : item[row?.prop]}
                              </TableCell>
                            ) : (
                              <TableCell align="right">
                                {handleEdit && (
                                  <Button
                                    variant="outlined"
                                    size="small"
                                    color="primary"
                                    sx={{ marginRight: "5px" }}
                                    onClick={() => handleEdit(item)}
                                  >
                                    Edit
                                  </Button>
                                )}
                                {handleDelete && (
                                  <Button
                                    variant="outlined"
                                    size="small"
                                    color="error"
                                    onClick={() => handleDelete(item.id)}
                                  >
                                    Delete
                                  </Button>
                                )}
                              </TableCell>
                            )}
                          </Fragment>
                        );
                      })}
                    </TableRow>
                  );
                })
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}
