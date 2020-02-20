import React from "react";
import styled from "styled-components";
import { Link } from "react-navi";
import RoutesUrls from "../utils/routesUrls";
import "./navigation.css";
import { ColorSet } from "../ColorSet";

const NAVIGATION_BAR_WIDTH = "70%";
const NavigationWrapper = styled.nav`
  display: flex;
  width: ${NAVIGATION_BAR_WIDTH};
  margin: 24px auto 16px;
  justify-content: space-around;
`;

const Separator = styled.hr`
  height: 1px;
  border: none;
  width: 80%;
  border-radius: 14px;
  margin: 0 auto;
  background: ${ColorSet.DARK_GREY};
`;

export const NavigationBar = () => (
  <>
    <NavigationWrapper>
      <Link
        exact
        activeClassName="active-link"
        className="link"
        href={RoutesUrls.HOME}
      >
        Your Ideas
      </Link>
      <Link
        activeClassName="active-link"
        className="link"
        href={RoutesUrls.ADD_IDEAS}
      >
        Add Ideas
      </Link>
      <Link
        activeClassName="active-link"
        className="link"
        href={RoutesUrls.MY_ACCOUNT}
      >
        My Account
      </Link>
    </NavigationWrapper>
    <Separator />
  </>
);
