import { Outlet } from "@remix-run/react";

import style from "~/style/about.css";


export  function links(){

    return {
        rel: "stylesheet",
        href: style,
    }
}

export default function About() {
  return (
    <div className="container">
      <h1>About</h1>
      <Outlet />
    </div>
  );
}
