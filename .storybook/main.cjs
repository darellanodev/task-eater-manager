module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions", "@storybook/addon-mdx-gfm"],
  "features": {
    "storyStoreV7": true
  },
  docs: {
    autodocs: true
  },
  framework: {
    name: "@storybook/react-vite",
    options: {}
  }
};
