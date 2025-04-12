import { Page, Layout, TextContainer } from "@shopify/polaris";
import {MediaCard} from '@shopify/polaris';
import React from 'react';
import Greeting from "./components/Greeting";
import ProductCard from "./components/ProductCard";
import { authenticate } from "../shopify.server";
import { json, useLoaderData } from "@remix-run/react";


export async function loader({ request }) {
  const { session, admin } = await authenticate.admin(request);

  const response = await admin.graphql(`
    {
      products(first: 1) {
        edges {
          node {
            id
            title
            images(first: 1) {
              edges {
                node {
                  originalSrc
                }
              }
            }
            variants(first: 1) {
              edges {
                node {
                  price
                }
              }
            }
          }
        }
      }
    }
  `);

  const jsonData = await response.json();
  const productNode = jsonData.data.products.edges[0]?.node;

  const product = {
    title: productNode?.title,
    imageSrc: productNode?.images.edges[0]?.node.originalSrc,
    price: productNode?.variants.edges[0]?.node.price,
  };

  return json({ product });
}


export default function Index() {
  const { product } = useLoaderData();

  return (
    <Page title="Welcome">
      <Layout>
        <Layout.Section>
          <TextContainer>
            <p>Hello World! 👋 This is your Shopify app.</p>
          </TextContainer>
          <Greeting name="Shopify" />
          <br />
          <ProductCard product={product} />
        </Layout.Section>
      </Layout>
    </Page>
  );
}



// export default function Index() {
//   const mockProduct = {
//     title: "Demo T-Shirt",
//     imageSrc: "https://cdn.shopify.com/s/files/1/0533/2089/files/t-shirt.png", // Placeholder
//     price: "29.99"
//   };

//   return (
//     <Page title="Welcome">
//       <Layout>
//         <Layout.Section>
//           <TextContainer>
//             <p>Hello World! 👋 This is your Shopify app.</p>
//           </TextContainer>
//           <Greeting name="Shopify" />
//           <br />
//           <ProductCard product={mockProduct} />
//         </Layout.Section>
//       </Layout>
//     </Page>
    
//   );
// }
