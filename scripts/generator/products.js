//import faker from "faker";
const faker = require("faker");

//import DinoDefault from "stories/assets/dino-vet2.jpg";

const buildProductList = (size) => {
  const result = [];

  for (let i = 0; i < size; i += 1) {
    result.push({
      id: i + 1,
      image: "", //DinoDefault,
      title: faker.commerce.productName(),
      summary: faker.commerce.productDescription(),
      slang: faker.lorem.slug(),
    });
  }

  return result;
};

console.log(JSON.stringify(buildProductList(100),null,"  "));
