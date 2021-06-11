import React from 'react';
import { useParams } from "react-router-dom";

import ProductDetailsPage from "components/pages/ProductDetails";
import Error from "components/pages/Error";
import ServiceNotFound from "draws/About";

import { useScrollToTop } from "hooks/scroll";
import { useProduct } from "hooks/products";

const ProductDetails = () => {
  useScrollToTop();

  const { slang } = useParams();
  const product = useProduct({ slang });

  if (!product){
    return <Error 
      title="Serviço não encontrado"
      description="Parece que esse serviço não existe..."
      image={<ServiceNotFound />}
    />
  }

  return <ProductDetailsPage product={product} />;
};

export default ProductDetails;
