import { StyledLoaderContainer } from "./Loader.styled";
import { CircularProgress, LinearProgress } from "@mui/material";

interface LoaderProps {
  type: "linear" | "circular";
  color?: string;
  size?: string;
}

const Loader = ({ type, color, size }: LoaderProps) => {
  return (
    <StyledLoaderContainer $color={color}>
      {type === "linear" && <LinearProgress />}
      {type === "circular" && <CircularProgress size={size} />}
    </StyledLoaderContainer>
  );
};

Loader.defaultProps = {
  color: "primary",
  size: "3rem",
};

export default Loader;
