// https://github.com/jaredLunde/masonic
import { Masonry } from "masonic";
import Layout from "../components/layout";
import Image from "next/image";
import { hall_data } from "../data_view";

const EasyMasonryComponent = (props) => (
  <Masonry items={hall_data} render={MasonryCard} />
);

const MasonryCard = ({ index, data: { imageLink, name }, width }) => (
  <div key={index}>
    {console.log(index)}
    <img src={imageLink} alt="" />
  </div>
);

const Version = () => {
  return (
    <Layout head="Варіанти компоновки залу">
      <EasyMasonryComponent />
    </Layout>
  );
};

export default Version;
