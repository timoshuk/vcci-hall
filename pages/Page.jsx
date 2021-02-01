import Layout from "../components/layout";
import Image from "next/image";

const Page = ({ data }) => {
  return (
    <Layout head={`Вигляд ${data.name}`}>
      <h1>{data.headerText}</h1>
{
  data.photoList.foreach((item, id)=>{
    return (
      <Image
      key={data.name+id}
        src={item}
        alt={`Фото залу ${data.name}`}
        layout="fill"
      />
    )
  });
}

    </Layout>
  );
};

export default Page;
