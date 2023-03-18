import { useAppContext } from "@/hooks/AppContext";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  const { darkMode } = useAppContext();
  return (
    <>
      <Head>
        <title>Online Bookmarker</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex justify-between pt-[70px]">
        <div>
          <h1 className="font-serif font-[700] text-[4rem] leading-[120%]">
            Minimalist bookmarking
          </h1>
          <p className="text-[1.5rem] text-emerald-600 font-normal mt-[10px] mb-[50px]">
            Declutter your browser by saving links in one elegant and safe
            place.
          </p>
          <Link
            href="/bookmarker"
            className="border-emerald-600 text-emerald-600 border-2 px-3 py-2 hover:bg-emerald-600 hover:text-[white] duration-100"
          >
            GET STARTED
          </Link>
        </div>

        <div
          className={`${
            darkMode ? "border-white" : "border-black"
          } hero-right h-fit border-2 p-[30px] ml-[100px]`}
        >
          <p className="text-[1.3rem] font-bold">why choose Bookmarker?</p>

          <div>
            <h1>Private by default</h1>
            <p>
              Your links are your links. Choose to save whatever you like
              without broadcasting them to the world.
            </p>
          </div>

          <div>
            <h1>Powerful search</h1>
            <p>Powerful search to find what you saved.</p>
          </div>

          <div>
            <h1>Shorten URLs for easy sharing</h1>
            <p>Quckly make links to shortened URLs to be easily shared.</p>
          </div>
        </div>
      </main>
    </>
  );
}
