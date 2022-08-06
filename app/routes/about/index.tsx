import { useLoaderData } from "@remix-run/react";

export async function loader() {
  return {
    coder: "Mukhtar Mahamed",
    title: "Software Engineer",
    company: "Bigil Technologies",
    email: "jano@gmail.com",
    phone: "123456789",
  };
}

export default function Index() {
  const { title, coder, company, email, phone } = useLoaderData()
  return (
    <div>
      <h1>About m3</h1>
      <p>
        My name is <strong>{coder}</strong> I am a {title} who is passionate
        about building web applications.
      </p>
      <p>
        I have a passion for learning new technologies and constantly learning
        new things.
      </p>
      <p>
        I am currently working on a project called{" "}
        <a href="https://remix.run/">{company}</a>.
      </p>
      <p>
        I am also a student at the University of Washington studying Computer
        Science.
      </p>
    </div>
  );
}
