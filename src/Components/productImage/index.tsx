import { ProductImageContainer } from "./styles";
import sofaStatic from "../../Assets/sofa.jpg";
import sofaGif from "../../Assets/sofa.gif";
import close from "../../Assets/close.svg";
import img360 from "../../Assets/360.svg";
import { useState } from "react";

export function ProductImage() {

  const [statusGif, setStatusGif] = useState(true);

  function handleSetStatusGifOpen() {
    return setStatusGif(false);
  };

  function handleSetStatusGiClose() {
    return setStatusGif(true);
  };

  return (
    <ProductImageContainer>
      {statusGif ?
        <>
          <img id="static"
            alt="sofa"
            src={sofaStatic}
          />
          <button id="btn-360"
            onClick={handleSetStatusGifOpen}
          >
            <img
              id="icon"
              src={img360}
              alt="clique nesse botao para animar o sofa"
            />
          </button>
        </>
        :
        <>
          <img id="gif"
            src={sofaGif}
            alt="sofa animado"
          />
          <button id="btn-close"
            onClick={handleSetStatusGiClose}
          >
            <img id="icon"
              src={close}
              alt="parar de animar o sofa"
            />
          </button>
        </>
      }
    </ProductImageContainer>
  );
};