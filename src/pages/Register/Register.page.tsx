import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { register } from "../../APIs/auth.api";
import {
  BasicDetailsModel,
  PersonalDetailsModel,
  UserInfoModel,
} from "../../models";
import { Stepper } from "../../stories";
import { ROUTE } from "../../utli/constants/route.constant";
import { ENDPOINT } from "../../utli/endpoints";

import { BasicDetails } from "./Steps/BasicDetails";
import { PersonalData } from "./Steps/PersonalData";
import { TermsConditions } from "./Steps/TermsConditions";
import RegisterStyle from "./Register.module.scss";

export const Register = () => {
  // Constant Variables
  const steps = [
    "Basic Information",
    "Personal Details",
    "Terms and Conditions",
  ];

  // React Router Hooks
  const navigate = useNavigate();

  // State Variables
  const [userInfo, setUserInfo] = useState<UserInfoModel | undefined>(
    undefined
  );
  const [activeStep, setActiveStep] = useState<number>(0);
  const [completed, setCompleted] = useState<{
    [k: number]: boolean;
  }>({});

  // Page Events
  const onSubmitBasicDetails = (values: BasicDetailsModel): void => {
    setUserInfo((userInfo: any) => {
      return {
        ...userInfo,
        ...values,
      };
    });

    handleNext();
  };

  const onSubmitPersonalDetails = (values: PersonalDetailsModel): void => {
    setUserInfo((userInfo: any) => {
      return {
        ...userInfo,
        ...values,
      };
    });

    handleNext();
  };

  // Helper Methods
  const handleNext = (): void => {
    if (!isLastStep()) {
      handleComplete(activeStep);
      setActiveStep((activeStep) => activeStep + 1);
    } else {
      if (userInfo) {
        const params = {
          email: userInfo.email,
          firstName: userInfo.firstName,
          lastName: userInfo.lastName,
          password: userInfo.password,
        };
        register(ENDPOINT.REGISTER, params, true)
          .then(() => {
            navigate(ROUTE.LOGIN);
          })
          .catch(() => {
            handleComplete(2);

            setActiveStep(1);
            const newCompleted = completed;
            delete newCompleted[1];
            setCompleted(newCompleted);
          });
      }
    }
  };

  const handleComplete = (step: number) => {
    const newCompleted = completed;
    newCompleted[step] = true;
    setCompleted(newCompleted);
  };

  const totalSteps = (): number => {
    return steps.length;
  };

  const completedSteps = (): number => {
    return Object.keys(completed).length + 1;
  };

  const isLastStep = (): boolean => {
    return completedSteps() === totalSteps();
  };

  return (
    <div className={RegisterStyle.register}>
      <div className="container">
        <Stepper
          steps={steps}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
          completed={completed}
          setCompleted={setCompleted}
        ></Stepper>
        {(activeStep === 0 && (
          <BasicDetails onSubmit={onSubmitBasicDetails} />
        )) ||
          (activeStep === 1 && (
            <PersonalData
              userInfo={userInfo}
              onSubmit={onSubmitPersonalDetails}
            />
          )) ||
          (activeStep === 2 && <TermsConditions onSubmit={handleNext} />)}
        <div className={RegisterStyle.toggleLink}>
          I already have an account, <Link to={ROUTE.LOGIN}>Login</Link>
        </div>
      </div>
    </div>
  );
};
