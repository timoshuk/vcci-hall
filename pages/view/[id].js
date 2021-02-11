import Head from "next/head";
import { useRouter } from "next/router";
import Carousel from "react-bootstrap/Carousel";
import { hall_data } from "../../data_view";

// export async function getStaticProps(context) {
//   const router = useRouter();
//   const { id } = router.query;

//   const [{ name, headerText, photoList }] = hall_data.filter((item) => {
//     return item.name === id;
//   });

//   return {
//     props: {
//       name,
//       headerText,
//       photoList,
//     }, // will be passed to the page component as props
//   };
// }

// export async function getStaticPaths() {
//   const ids = hall_data.map((item) => item.name);

//   const paths = ids.map((id) => ({ params: { id: id.toString() } }));

//   return {
//     paths,
//     falback: false,
//   };
// }

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

      <h1>{headerText}</h1>

      <Carousel>
        {photoList.map((listItem) => {
          return (
            <Carousel.Item key={listItem}>
              <img
                className="d-block w-100"
                src={listItem}
                alt="Фото конференц-залу"
              />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </>
  );
}

export default Page;
