import React from "react";
import { FlexibleDiv } from "../../flexibleDiv/flexibleDiv.component";
import {
  GrFacebookOption as FacebookIcon,
  GrLinkedinOption as LinkedInIcon,
  GrYoutube as YoutubeIcon,
  GrTwitter as TwitterIcon,
  GrInstagram as InstagramIcon,
} from "react-icons/gr";
import { useFetch } from "../hooks/useFetch";

export const SocialIcon = ({
  facebook,
  twitter,
  linkedin,
  instagram,
  color,
  fontSize,
}) => {
  return (
    <FlexibleDiv
      width="60%"
      paddingVertical="0.7rem"
      resFlexDirection="row"
      resWidth="10rem"
    >
      <a href={facebook}>
        <FacebookIcon
          fontSize={fontSize ? fontSize : "20px"}
          color={color ? color : "white"}
        />
      </a>
      <a href={twitter}>
        <TwitterIcon
          fontSize={fontSize ? fontSize : "20px"}
          color={color ? color : "white"}
        />
      </a>
      <a href={instagram}>
        <InstagramIcon fontSize={fontSize ? fontSize : "20px"}  color={color ? color : "white"} />
      </a>
      <a href={linkedin}>
        <LinkedInIcon fontSize={fontSize ? fontSize : "20px"}  color={color ? color : "white"} />
      </a>
    </FlexibleDiv>
  );
};
