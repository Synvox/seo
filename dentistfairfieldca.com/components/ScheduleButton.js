import React from "react";
import styled from "styled-components";
import { THEME_COLOR } from "../vars";
import { darken } from "polished";

function ScheduleButton() {
  return (
    <SubscribeButtonContainer href="https://reviews.solutionreach.com/vs/mark_j_warner_dds/appt">
      Request Appointment
    </SubscribeButtonContainer>
  );
}

const SubscribeButtonContainer = styled.a`
  background: ${THEME_COLOR};
  color: white;
  height: 42px;
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
  &:active {
    background: ${darken(0.1, THEME_COLOR)};
  }
`;

export default ScheduleButton;
