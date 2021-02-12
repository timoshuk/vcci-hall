import Head from "next/head";
import PhotoLinks from "../components/PhotoLinks";
import { hall_data } from "../data/data_view";

export async function getStaticProps() {
  return {
    props: {
      data: hall_data,
    },
  };
}

const Version = ({ data }) => {
  return (
    <>
      <Head>
        <title>Варіанти компоновки залу</title>
      </Head>

      <PhotoLinks data={data} />
    </>
  );
};

export default Version;
