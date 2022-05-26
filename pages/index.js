import Head from "next/head";
import { Fragment } from "react";
import Sidebar from "../components/sidebar";
import MainContent from "../components/MainContent";
import { getSession } from "next-auth/react";
import Player from "../components/Player";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Spotify 2.0</title>
      </Head>

      <div className="bg-black h-screen overflow-hidden">
        <main className="flex">
          <Sidebar />
          <MainContent />
        </main>

        <div className="sticky bottom-0">
          <Player />
        </div>
      </div>
    </Fragment>
  );
}

// pre-rendering the user on the server which gives token before it hits the client
export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}
