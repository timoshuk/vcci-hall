import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";
import Carousel from "react-bootstrap/Carousel";
import { hall_data } from "../../data/data_view";

function Page() {
  const router = useRouter();
  const { id } = router.query;

  const [{ name, headerText, photoList }] = hall_data.filter((item) => {
    return item.name === id;
  });

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
