export const config = {
  domainSource: "https://5a01a34e-e669-4654-9a30-49e0ca703474.weweb-preview.io/", // Your WeWeb app preview link
  patterns: [
      {
          pattern: "/blog/[^/]+",
          metaDataEndpoint: "https://api.madeeasy.ai/api:3DvLmlut/blogs/%7Bid%7D/metadata?blog_id={id}"
      }
      // Add more patterns and their metadata endpoints as needed
  ]
};
