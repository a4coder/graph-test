import React from "react";
import FieldImpressions from "../components/home/second/FieldImpressions";
import FormBuilder from "../components/home/second/FormBuilder";
import MobileApplication from "../components/home/second/MobileApplication";
import TitleBanner from "../components/home/second/TitleBanner";

const Home = () => {
  return (
    <div>
      <TitleBanner />
      <FormBuilder />
      <FieldImpressions />
      <MobileApplication />
    </div>
  );
};

export default Home;
