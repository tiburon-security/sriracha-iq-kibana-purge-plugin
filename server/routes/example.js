export default function(server) {
  server.route({
    path: '/api/srirachaiq_purge/example',
    method: 'GET',
    handler() {
      return { time: new Date().toISOString() };
    },
  });
}
