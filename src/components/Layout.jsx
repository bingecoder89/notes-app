import React from "react";
import Header from "./Header";
import { Outlet } from "react-router";

function Layout({ searchText, handleSearch }) {
  return (
    <>
      <Header searchText={searchText} handleSearch={handleSearch} />
      <Outlet />
    </>
  );
}

export default Layout;
