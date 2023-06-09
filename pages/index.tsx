import Head from "next/head";
import styles from "../styles/Home.module.css";
import vercelImg from "../public/vercel.svg";
import { NextPageWithLayout } from "../interface/NextPageWithLayout";
import { ReactElement, ReactNode } from "react";
import DefaultLayout from "../components/layout/defalutLayout";

export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:3000/api/hello");
  const data = await res.json();
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: data,
  };
};

const Home: NextPageWithLayout<{ name: string }> = ({ name }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>안녕하세요</div>
    </div>
  );
};

export default Home;

Home.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};
