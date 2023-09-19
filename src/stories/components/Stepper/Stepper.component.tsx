import { Step, StepLabel, Stepper } from "@mui/material";
import { StyledStepperContainer } from "./Stepper.styled";

interface StepperProps {
  steps: string[];
  activeStep: number;
  completed: { [k: number]: boolean };
  setActiveStep: Function;
  setCompleted: Function;
}

const StepperComponent = ({ activeStep, steps, completed }: StepperProps) => {
  return (
    <StyledStepperContainer>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </StyledStepperContainer>
  );
};

StepperComponent.defaultProps = {
  steps: [],
};

export default StepperComponent;
