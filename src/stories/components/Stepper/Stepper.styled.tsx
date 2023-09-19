import { styled } from "styled-components";

export const StyledStepperContainer = styled.div`
  .MuiStepper-root {
    margin-bottom: 4rem;

    .MuiStepLabel-root {
      flex-direction: column;
      gap: 7px;
      .MuiStepLabel {
        &-iconContainer {
          svg {
            height: 2.7rem;
            width: 2.7rem;

            text {
              font-size: 1.6rem;
            }
          }
        }

        &-labelContainer {
          span {
            font-size: 1.8rem;
          }
        }
      }
    }
  }
`;
