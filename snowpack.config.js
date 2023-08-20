// snowpack.config.js
module.exports = {
    plugins: [
      [
        '@snowpack/plugin-dotenv',
        {
          path: './.env', // Path to your .env file
        },
      ],
    ],
  };
  