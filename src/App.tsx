import { Container } from "./Components/Container/styles";
import { ProductDetails } from "./Components/ProducDetails";
import { ProductImage } from "./Components/productImage";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <Container>
      <GlobalStyle/>
      <ProductImage/>
      <ProductDetails/>
    </Container>
  );
};
