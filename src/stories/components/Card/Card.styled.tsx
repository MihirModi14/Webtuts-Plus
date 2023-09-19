import { styled } from "styled-components";

export const StyledCard = styled.div`
  position: relative;
  border: 1px solid ${({ theme }) => theme.colors.grayColor4};
  text-align: center;
  width: 35rem;
  border-radius: 5px;
  padding: 0 5px;

  img {
    max-width: 100%;
    height: 250px;
    margin-bottom: 1rem;
  }

  .edit-btn {
    position: absolute;
    padding: 1rem;
    right: 2rem;
    bottom: 1rem;
    font-size: 1.6rem;
  }
`;

export const StyledCardDetails = styled.div`
  padding: 1.5rem;
  text-align: left;
  h2 {
    margin-bottom: 1.8rem;
    font-size: 2rem;
    font-weight: 500;

    &:hover {
      font-weight: 600;
    }
  }

  p {
    margin-bottom: 2rem;
    font-size: 1.6rem;
  }

  span {
    font-style: italic;
    display: block;
    font-size: 1.4rem;
    margin-bottom: 3rem;
  }
`;
