const config = {
  app: {
    name: process.env.APP_NAME ?? "page-editor",
    port: process.env.PORT ?? 3000,
    environment: process.env.NODE_ENV ?? "dev",
  },
  db: {
    uri: process.env.MONGO_URI ?? "mongodb://mongo:27017/page-editor",
  },
};

export { config };
