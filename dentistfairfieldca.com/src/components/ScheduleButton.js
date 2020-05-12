import React from "react";
import styled from "styled-components";
import { THEME_COLOR } from "../vars";
import { darken } from "polished";

function ScheduleButton({
  label = "Request Appointment",
  href = "https://reviews.solutionreach.com/vs/mark_j_warner_dds/appt",
}) {
  return (
    <SubscribeButtonContainer href={href}>{label}</SubscribeButtonContainer>
  );
}

const SubscribeButtonContainer = styled.a`
  background: ${THEME_COLOR};
  color: white !important;
  height: 50px;
  padding: 0 20px;
  display: inline-flex;
  width: auto;
  margin-bottom: 10px;
  margin-left: 0px;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border-radius: 7px;
  font-size: 14px;
  clear: both;
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  &:active {
    background: ${darken(0.1, THEME_COLOR)};
  }
`;

export default ScheduleButton;
