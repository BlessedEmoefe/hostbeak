import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../../infrastructure/theme/colors";
import { GrEdit } from "react-icons/gr";
import { FlexibleDiv } from "../flexibleDiv/flexibleDiv.component";
const ProfilePicture = styled.img`
  width: 230px;
  height: 230px;
  border-radius: 50%;
  border: 0.4px solid ${colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  object-fit: center;

  @media only screen and (max-width: 680px) {
    width: 180px;
    height: 180px;
  }
  @media only screen and (max-width: 380px) {
    width: 130px;
    height: 130px;
  }
`;

const EditButton = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 0.4px solid ${colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  top: -85px;
  left: 98px;
  z-index: 999;
  font-size: 0.9rem;
  object-fit: center;
  outline: none;
  cursor:pointer;
  &:hover{
    background:${colors.primary}
  }

  @media only screen and (max-width: 680px) {
    width: 40px;
    height: 40px;
    top: -75px;
    left: 82px;
  }
`;

const EditableProfile = () => {
  const [profileImage, setProfileImage] = useState();

  const ProfileImageHandler = (e) => {
    const [file] = e.target.files;
    setProfileImage(URL.createObjectURL(file));
  };
  return (
    <>
      <FlexibleDiv width={"100%"} flexDirection={"column"}>
        <ProfilePicture src={profileImage}  />
        <input
          id="input"
          onChange={ProfileImageHandler}
          type={"file"}
          style={{ display: "none" }}
        />
        <EditButton>
          <label style={{ cursor: "pointer" }} for="input">
            <GrEdit color={'white'} />
          </label>
        </EditButton>
      </FlexibleDiv>
    </>
  );
};

export default EditableProfile;

