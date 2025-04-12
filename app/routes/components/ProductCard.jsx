import React from 'react';
import { Card, ResourceItem, ResourceList, Text, Thumbnail } from '@shopify/polaris';

export default function ProductCard({ product }) {
  if (!product) return null;

  const { title, imageSrc, price } = product;

  return (
    <Card title="Product Info" sectioned>
      <ResourceList
        resourceName={{ singular: 'product', plural: 'products' }}
        items={[product]}
        renderItem={() => {
          return (
            <ResourceItem
              id={title}
              media={<Thumbnail source={imageSrc} alt={title} />}
            >
              <Text variant="bodyMd" fontWeight="bold" as="h3">
                {title}
              </Text>
              <div>${price}</div>
            </ResourceItem>
          );
        }}
      />
    </Card>
  );
}
