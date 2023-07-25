module.exports = {
  apps: [
    {
      name: "web-rspaw",
      script: "npm",
      args: "run-script start",
      watch: true,
      autorestart: true,
      env: {
        PORT: 8088,
        NODE_ENV: "development",
      },
      env_production: {
        PORT: 8080,
        NODE_ENV: "production",
      },
    },
  ],
};
