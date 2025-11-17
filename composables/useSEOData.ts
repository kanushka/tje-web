// Structured data for SEO - Organization Schema and Local Business
export const useOrganizationSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "TJ Engineering",
    "url": "https://tjengineering.lk",
    "logo": "https://tjengineering.lk/img/tje-logo.jpeg",
    "description": "Premium steel fabricating and construction company providing innovative engineering solutions",
    "sameAs": [
      "https://www.facebook.com/tjengineering",
      "https://www.linkedin.com/company/tjengineering"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Bandaragama",
      "addressRegion": "Western Province",
      "postalCode": "",
      "addressCountry": "LK"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+94-77-335-4353",
      "contactType": "Customer Service",
      "email": "info@tjengineering.lk"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "6.691806",
      "longitude": "79.981333"
    }
  };

  return schema;
};

export const useLocalBusinessSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "TJ Engineering",
    "image": "https://tjengineering.lk/img/tje-logo.jpeg",
    "description": "Steel fabricating and construction company",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Bandaragama",
      "addressRegion": "Western Province",
      "postalCode": "",
      "addressCountry": "LK"
    },
    "telephone": "+94-77-335-4353",
    "email": "info@tjengineering.lk",
    "url": "https://tjengineering.lk",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "6.691806",
      "longitude": "79.981333"
    },
    "priceRange": "$$",
    "areaServed": "LK",
    "serviceType": [
      "Steel Fabrication",
      "Welding",
      "Construction",
      "Pipeline Construction",
      "Steel Roofing",
      "Building Construction"
    ]
  };

  return schema;
};

export const useBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return schema;
};
