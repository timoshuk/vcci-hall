import Head from "next/head";
import Image from "next/image";
import Carousel from "react-bootstrap/Carousel";
import { server } from "../../config";

export async function getStaticProps(context) {
  const res = await fetch(
    `http://localhost:3000/api/pages/${context.params.id}`
  );
  const pageData = await res.json();

  return {
    props: {
      pageData,
    }, // will be passed to the page component as props
  };
}

export async function getStaticPaths() {
  const res = await fetch(`http://localhost:3000/api/pages`);
  const data = await res.json();

  const ids = data.map((data) => data.name);

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
