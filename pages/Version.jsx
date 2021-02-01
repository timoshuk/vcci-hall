import Layout from "../components/layout";
import PhotoLinks from "../components/photo-links"
import { hall_data } from "../data_view";



const Version = () => {
  return (
    <Layout head="Варіанти компоновки залу">
      <PhotoLinks data={hall_data}/>
    </Layout>
  );
};

export default Version;
