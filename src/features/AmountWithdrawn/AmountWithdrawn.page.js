import React from "react";
import GeneralLayout from "../../components/Layout/GeneralLayout";
import {} from "./AmountWithdrawn.styles";
import { SubHeader } from "../../components/subHeader/subHeader.component";
import { Spacer } from "../../components/spacer/spacer.component";
import { colors } from "../../infrastructure/theme/colors";
import { useLocation } from "react-router-dom";

const AmountWithdrawn = () => {
  const location = useLocation();
  console.log(location);
  return (
    <GeneralLayout>
      <SubHeader subDirectory={"Amount Withdrawn"}  searchBar />
      <Spacer />
    </GeneralLayout>
  );
};

export default AmountWithdrawn;
