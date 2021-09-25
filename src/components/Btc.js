import { createApp } from 'https://unpkg.com/petite-vue?module'

import { getBtcPrice } from '../services/coindesk.js'

function Btc() {
  const state = {
    price: 0,
  }

  const lifecycles = {
    async mounted() {
      await this.refreshPrice()
      setInterval(async () => await this.refreshPrice(), 5000)
    },
  }

  const methods = {
    async refreshPrice() {
      this.price = await getBtcPrice()
    },
  }

  return {
    ...state,
    ...lifecycles,
    ...methods,
  }
}

createApp({
  Btc,
}).mount()
