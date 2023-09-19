import { styled } from "styled-components";

interface StyledLoaderProps {
  $color?: string;
}

export const StyledLoaderContainer = styled.div<StyledLoaderProps>`
  text-align: center;

  // Linear Progress Design
  .MuiLinearProgress-root {
    position: fixed !important;
    width: 100%;
    top: 0;
    left: 0;

    .MuiLinearProgress-bar {
      background-color: ${({ $color }) => $color};
    }
  }

  // Circular Progress Design
  .MuiCircularProgress-root {
    color: ${({ $color }) => $color};
  }
`;
