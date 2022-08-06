import { Outlet, useParams } from "@remix-run/react";

export default function $blogId() {
  const params = useParams();
  return (
    <div>
      <div>Latest News</div>
      <div>Deep level {JSON.stringify(params)}</div>
      <Outlet />
    </div>
  );
}
