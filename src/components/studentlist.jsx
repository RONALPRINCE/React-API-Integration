import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { FiFilter } from "react-icons/fi";
import { Badge, IconButton, Avatar } from "@mui/material";
import { Notifications, Add } from "@mui/icons-material";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "photo",
    headerName: "Photo",
    width: 100,
    renderCell: (params) => (
      <img
        src={params.value}
        alt="student photo"
        style={{ width: 50, height: 50, borderRadius: "50%" }}
      />
    ),
  },
  { field: "firstName", headerName: "First name", width: 150, editable: true },
  { field: "lastName", headerName: "Last name", width: 150, editable: true },
  { field: "email", headerName: "EmailID", width: 200, editable: true },
  { field: "phone", headerName: "Phone", width: 150, editable: true },
  { field: "City", headerName: "City", width: 130, editable: true },
];

const StudentList = (props) => {
  const { students = [] } = props;
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`${
        darkMode ? "bg-gray-900 text-white" : "bg-purple-100 text-black"
      } flex flex-col md:flex-row`}
    >
      {/* Sidebar */}
      <div
        className={`${
          darkMode ? "bg-gray-800" : "bg-purple-700"
        } h-full md:h-screen p-5`}
      >
        <div className="text-white">
          <div className="flex flex-col items-center space-y-6">
            <Avatar
              src="your_image_url_here"
              alt="Profile Image"
              className="w-12 h-12 rounded-full mb-10"
            />
            <div className="space-y-6">
              <nav className="flex-1">
                <ul>
                  <li className="p-4 hover:bg-purple-600 cursor-pointer">
                    Dashboard
                  </li>
                  <li className="p-4 hover:bg-purple-600 cursor-pointer">
                    Students
                  </li>
                  <li className="p-4 hover:bg-purple-600 cursor-pointer">
                    Reports
                  </li>
                  <li className="p-4 hover:bg-purple-600 cursor-pointer">
                    Calendar
                  </li>
                  <li className="p-4 hover:bg-purple-600 cursor-pointer">
                    Settings
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* Main Content */}
      <div
        className={`${darkMode ? "bg-gray-900" : "bg-purple-100"} p-5 w-full`}
      >
        {/* Top Navbar */}
        <div className="top-navbar flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <h1 className="text-2xl font-bold">Students</h1>
            <span className="ml-3 text-xl bg-purple-200 text-purple-800 py-1 px-3 rounded-full">
              {students.length}
            </span>
          </div>
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 w-full md:w-auto">
            <select className="select-school border p-2 rounded bg-white">
              <option>Select school</option>
              <option>Big Ben</option>
              {/* Additional schools */}
            </select>
            <div className="search-bar flex items-center border rounded p-2 bg-white w-full md:w-auto">
              <input
                type="text"
                placeholder="Search"
                className="outline-none w-full md:w-auto"
              />
              <button className="ml-2 text-purple-700">
                {/* Search Icon */}
              </button>
            </div>
            <div className="flex items-center justify-between mb-4">
              <IconButton color="primary">
                <Add />
              </IconButton>
            </div>
            <div className="flex items-center space-x-2">
              <button className="bg-purple-700 text-white p-2 rounded w-full md:w-auto flex items-center space-x-2">
                <FiFilter className="text-white" />
                <span>Filter</span>
              </button>

              <button
                className={`p-2 rounded ${
                  darkMode ? "bg-yellow-500" : "bg-gray-700"
                } text-white`}
                onClick={() => setDarkMode(!darkMode)}
              >
                {darkMode ? "Light Mode" : "Dark Mode"}
              </button>
              <div className="mr-4">
                <Badge badgeContent={4} color="secondary">
                  <Notifications />
                </Badge>
              </div>
            </div>
          </div>
        </div>
        {/* DataGrid */}
        <div
          className={`${
            darkMode ? "bg-gray-800" : "bg-white"
          } mt-5 p-5 rounded shadow`}
          style={{ height: 400, width: "100%" }}
        >
          <DataGrid
            rows={students}
            columns={columns}
            pageSize={5}
            checkboxSelection
            disableSelectionOnClick
          />
        </div>
      </div>
    </div>
  );
};

export default StudentList;
