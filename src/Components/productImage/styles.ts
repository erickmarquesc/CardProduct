import styled from "styled-components";

export const ProductImageContainer = styled.div`
  position: relative;

  img{
    width: 449px;
    height: 222px;
    object-fit: cover;
  };

  #icon{
    width: 33px;
    height: 23px;
  };
  
  button{
    right: 0;
    position: absolute;

    border: 0;
    background-color: transparent;

    cursor: pointer;
  };
`;