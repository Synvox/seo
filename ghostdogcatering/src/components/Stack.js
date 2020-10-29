import React from "react";
import styled, { css } from "styled-components";

const MARGIN = 4;

/**
 * Adds spacers between children
 * @param {object} props
 * @param {any} props.children
 * @param {number} [props.space]
 * @param {boolean} [props.horizontal]
 * @param {boolean} [props.grow]
 */
function Stack({
  children,
  space = 5,
  horizontal = false,
  center = false,
  grow = true
}) {
  children = React.Children.toArray(children);
  const Container = horizontal ? Horizontal : React.Fragment;
  return (
    <Container {...(horizontal ? { center, grow } : {})}>
      {children.map((child, index) => {
        return (
          <React.Fragment key={index}>
            {child}
            {index + 1 !== children.length && (
              <div
                style={{
                  [horizontal ? "width" : "height"]: MARGIN * space,
                  flexGrow: 0
                }}
              />
            )}
          </React.Fragment>
        );
      })}
    </Container>
  );
}

export default Stack;

const Horizontal = styled.div`
  display: flex;
  flex-direction: row;
  ${p =>
    p.grow &&
    css`
      & > * {
        flex-grow: 1;
        flex-shrink: 1;
      }
    `}
  ${p =>
    p.center &&
    css`
      align-items: center;
    `}
`;
