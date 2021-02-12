import Head from "next/head";
import PhotoLinks from "../components/PhotoLinks";
import { hall_data } from "../data/data_view";

const Version = () => {
  return (
    <>
      <Head>
        <title>Варіанти компоновки залу</title>
      </Head>
      <PhotoLinks data={hall_data} />
    </>
  );
};

export default Version;
