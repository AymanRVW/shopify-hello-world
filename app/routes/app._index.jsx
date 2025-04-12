import { Page, Layout, TextContainer } from "@shopify/polaris";
import {MediaCard} from '@shopify/polaris';
import React from 'react';
import Greeting from "./components/Greeting";
import ProductCard from "./components/ProductCard";

export default function Index() {
  const mockProduct = {
    title: "Demo T-Shirt",
    imageSrc: "https://cdn.shopify.com/s/files/1/0533/2089/files/t-shirt.png", // Placeholder
    price: "29.99"
  };

  return (
    <Page title="Welcome">
      <Layout>
        <Layout.Section>
          <TextContainer>
            <p>Hello World! 👋 This is your Shopify app.</p>
          </TextContainer>
          <Greeting name="Shopify" />
          <br />
          <ProductCard product={mockProduct} />
        </Layout.Section>
      </Layout>
    </Page>
    
  );
}


// import { json } from "@remix-run/node";
// import { useLoaderData } from "@remix-run/react";
// import { Page, Layout, TextContainer } from "@shopify/polaris";
// // import { authenticate } from "~/shopify.server";
// import { authenticate } from "../shopify.server";
// import ProductCard from "./components/ProductCard";