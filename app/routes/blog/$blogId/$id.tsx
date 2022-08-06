import { useParams } from "@remix-run/react";

export default function $blogId() {
  const params = useParams();
  return (
    <div>
      <div>id.tsx</div>
      <div>Deep level {JSON.stringify(params)}</div>
    </div>
  );
}
