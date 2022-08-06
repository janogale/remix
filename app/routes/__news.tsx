import { Outlet } from "@remix-run/react";
import React from "react";

export default function $blogId() {
  return (
    <div>
      <div>news</div>
      <Outlet />
    </div>
  );
}
