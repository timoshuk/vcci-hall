import Head from "next/head";
import Image from "next/image";
import Carousel from "react-bootstrap/Carousel";
import { hall_data } from "../../data/data_view";

export async function getStaticProps({ params }) {
  const data = hall_data.filter((item) => item.name.toString() === params.id);
  return {
    props: {
      pageData: data[0],
    },
  };
}

export async function getStaticPaths() {
  const ids = hall_data.map((data) => data.name);

  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
}

function Page({ pageData }) {
  // const router = useRouter();
  // const { id } = router.query;

  const { name, headerText, photoList } = pageData;

  return (
    <>
      <Head>
        <title className="slider-title">{name}</title>
      </Head>

      <h1 className="slider-title">{headerText}</h1>

      <Carousel>
        {photoList.map((listItem) => {
          return (
            <Carousel.Item className="item-carousel-slide" key={listItem}>
              <Image
                className="d-block w-100 h-100"
                src={listItem}
                alt="Фото конференц-залу"
                layout="fill"
              />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </>
  );
}

export default Page;
