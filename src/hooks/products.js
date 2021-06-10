import ProductImage1 from "assets/dino-vet.png";
import ProductImage2 from "assets/dino-vet2.png";
import ProductImage3 from "assets/dino-vet3.png";
import ProductImage4 from "assets/dino-vet4.png";
import ProductImage5 from "assets/dino-vet5.png";
import ProductImage6 from "assets/dino-vet6.png";


const products = [
  {id:0, title:"Ipsum non Velit", slang:"ipsum-non-velit", summary:"Excepteur ullamco mollit eu culpa ipsum non velit adipisicing aliquip.", image: ProductImage1},
  {id:1, title:"Excepteur ullamco mollit", slang:"excepteur-ullamco-mollit", summary:"Excepteur ullamco mollit eu culpa ipsum non velit adipisicing aliquip.", image: ProductImage2},
  {id:2, title:"Adipisicing aliquip", slang:"adipisicing-aliquip", summary:"Excepteur ullamco mollit eu culpa ipsum non velit adipisicing aliquip.", image: ProductImage3},
  {id:3, title:"Culpa ipsum non", slang:"culpa-ipsum-non", summary:"Excepteur ullamco mollit eu culpa ipsum non velit adipisicing aliquip.", image: ProductImage4},
  {id:4, title:"Ullamco mollit eu culpa", slang:"mollit-eu-culpa", summary:"Excepteur ullamco mollit eu culpa ipsum non velit adipisicing aliquip.", image: ProductImage5},
  {id:5, title:"Non velit adipisicing", slang:"non-velit-adipisicing", summary:"Excepteur ullamco mollit eu culpa ipsum non velit adipisicing aliquip.", image: ProductImage6}, 
];

export const useProducts = () => {
  return products;
};

export const useProduct = ({ slang }) => {
  return products.find(product => product.slang === slang);
};
