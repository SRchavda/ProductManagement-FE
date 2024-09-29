import { Box } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const menu = [
  {
    title: "Stocks",
    path: "stocks",
  },
  {
    title: "Orders",
    path: "orders",
  },
];

const SideBar = () => {
  return (
    <Box
      sx={{
        width: "20vw",
        height: "100%",
        borderRight: "2px solid black",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
      }}
      className="sidebar"
    >
      {menu?.map((x, i) => {
        return (
          <NavLink
            to={x.path}
            key={i}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <Box
              sx={{
                height: "50px",
                padding: "10px",
                fontSize: "25px",
                borderBottom: "2px solid black",
                textAlign: "center",
                cursor: "pointer",
                textDecoration: "none",
                "&:hover": {
                  bgcolor: blueGrey["A100"],
                },
                "&:focus": {
                  bgcolor: blueGrey["A100"],
                },
              }}
            >
              {x.title}
            </Box>
          </NavLink>
        );
      })}
    </Box>
  );
};

export default SideBar;
