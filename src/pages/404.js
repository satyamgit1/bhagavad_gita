// pages/404.js
import ErrorPage from "next/error";
import Image from "next/image";
import Link from "next/link";

const Custom404 = () => {
  return (
    <div className="hero min-h-screen bg-base-100">
      <div className="hero-content text-center">
        <div className="">
          <h1 className="text-5xl font-bold py-8">
            Error 404 - Page Not Found
          </h1>
          <Image
            src="/404.svg"
            width={750}
            height={500}
            alt="Error 404 - Page Not Found"
          />{" "}
          <Link href="/">
            <button className="btn btn-primary">Home Page</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Custom404;
