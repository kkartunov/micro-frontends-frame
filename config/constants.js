module.exports = Object.freeze({
  APP_CONFIG: [
    {
      appEnv: "dev",
      mfeConfigPath:
        "https://tc-platform-dev.s3.amazonaws.com/micro-frontends/micro-frontends-config-development.json",
      mfeIndexPath: "/index.html",
      mfeRoutesPath:
        "https://tc-platform-dev.s3.amazonaws.com/micro-frontends/micro-frontends-routes-development.txt",
    },
    {
      appEnv: "prod",
      mfeConfigPath:
        "https://tc-platform-prod.s3.amazonaws.com/micro-frontends/micro-frontends-config-production.json",
      mfeIndexPath: "/index.html",
      mfeRoutesPath:
        "https://tc-platform-prod.s3.amazonaws.com/micro-frontends/micro-frontends-routes-production.txt",
    },
    {
      appEnv: "local-multi",
      mfeConfigPath: "/micro-frontends-config-local.json",
      mfeIndexPath: "http://localhost:8081/index.html",
      mfeRoutesPath: "/micro-frontends-routes-local.txt",
    },
    {
      appEnv: "local",
      mfeConfigPath: "/micro-frontends-config-local.json",
      mfeIndexPath: "/index.html",
      mfeRoutesPath: "/micro-frontends-routes-local.txt",
    },
  ],
  APP_ENV_DEV: "dev",
  APP_ENV_PROD: "prod",
  APP_ENV_LOCAL_MULTI: "local-multi",
  APP_ENV_LOCAL: "local",
});
