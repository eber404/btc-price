export async function getBtcPrice() {
  const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
  const data = await res.json()

  return data.bpi.USD.rate_float
}
