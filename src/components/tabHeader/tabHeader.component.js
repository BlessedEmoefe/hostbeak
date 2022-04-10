import React, { useState } from "react";
import {
  TabHeaderContainer,
  InnerWrapper,
  LinkTabs,
  LinkText,
  BorderBottom,
} from "./tabHeader.styles";

export const TabHeader = ({ pageName }) => {
  const [activePath, setActivePath] = useState("efficiency");

  const handleActive = (path) => {
    setActivePath(path);
    return path === activePath ? true : false;
  };
  const TabPagesData = [
    { name: "Efficiency", path: "efficiency" },
    { name: "Volume", path: "volume" },
    {
      name: "Customer Satisfaction",
      path: "customerSatisfaction",
    },
    { name: "Backlog", path: "backlog" },
    // { name: "Efficiency", path: "efficiency" },
  ];
  console.log(` Active Path: ${activePath}`);

  return (
    <TabHeaderContainer>
      <InnerWrapper resFlexDirection="row" flexWrap="no-wrap">
        {TabPagesData.map(({ name, path, isActive }) => (
          <LinkTabs
            onClick={() => {
              handleActive(path);
            }}
          >
            <LinkText active={path === activePath ? true : false}>
              {name}
            </LinkText>
            <BorderBottom active={path === activePath ? true : false} />
          </LinkTabs>
        ))}
      </InnerWrapper>
    </TabHeaderContainer>
  );
};
