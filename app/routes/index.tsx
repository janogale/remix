import { Link } from "@remix-run/react";

export const meta = function () {
  return {
    charset: "utf-8",
    title: "testing",
    viewport: "width=device-width,initial-scale=1",
  };
};

export default function Index() {
  return (
    <div>
      <h1>Welcome to Remix</h1>
      <nav>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
