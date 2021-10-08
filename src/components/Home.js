import React from "react";
import Header from "./Header";
import Cocktails from "./Cocktails";
import Loading from "./Loading";

import { useGlobalContext } from "../context";
import Search from "./Search";

function Home() {
  const { loading } = useGlobalContext();
  if (loading) {
    return (
      <>
        <Loading></Loading>
      </>
    );
  } else {
    return (
      <div>
        <Header />
        <Cocktails />
      </div>
    );
  }
}

export default Home;
