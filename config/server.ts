export default ({ env }) => ({
  host: '0.0.0.0',
  port: env.int('PORT', 53938),
  url: 'http://127.0.4.38:53938',
  app: {
    keys: env.array('APP_KEYS'),
  },
});
