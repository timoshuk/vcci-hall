import Layout from "../components/layout";
import Image from "next/image";

const Page = (props) => {
  console.log(props);

  return (
    <Layout head={`Вигляд`}>
      <h1>Page</h1>
    </Layout>
  );
};

export default Page;
