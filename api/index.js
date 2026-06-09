export default async function handler(req, res) {
  const targetUrl = 'https://api.binance.com' + req.url.replace('/api', '');
  const headers = new Headers(req.headers);
  headers.delete('host');

  const response = await fetch(targetUrl, {
    method: req.method,
    headers: headers,
    body: (req.method !== 'GET' && req.method !== 'HEAD') ? req.body : undefined
  });
  const data = await response.text();
  res.status(response.status).send(data);
}
