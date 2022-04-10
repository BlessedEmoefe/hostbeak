import React from "react";
import GeneralLayout from "../../components/Layout/GeneralLayout";
import {} from "./CustomerReached.styles";
import { SubHeader } from "../../components/subHeader/subHeader.component";
import { Spacer } from "../../components/spacer/spacer.component";
import { colors } from "../../infrastructure/theme/colors";

const CustomerReached = () => {
  return (
    <GeneralLayout>
      <SubHeader subDirectory={"Customer Reached"} searchBar />
      <Spacer />
    </GeneralLayout>
  );
};

export default CustomerReached;
