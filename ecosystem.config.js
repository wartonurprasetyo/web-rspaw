module.exports = {
  apps: [
    {
      name: "web-rspaw",
      // script: "npm",
      // args: "run-script start",
      script: "serve",
      args: "build --spa",
      watch: true,
      autorestart: true,
      env: {
        PORT: 3030,
        NODE_ENV: "development",
      },
      env_production: {
        PORT: 3030,
        NODE_ENV: "production",
      },
    },
  ],
};
