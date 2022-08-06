import { Outlet, useParams } from "@remix-run/react";

export default function $blogId() {
  const params = useParams();
  return (
    <>
      <div>Blog Wrapper</div>
      <Outlet />
    </>
  );
}
