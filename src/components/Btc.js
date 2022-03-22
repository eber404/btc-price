import { createApp } from 'https://unpkg.com/petite-vue?module'

import { getBtcPrice } from '../services/coindesk.js'

function Btc() {
  return {
    // state
    price: 0,

    // lifecycle hooks
    mounted() {
      this.refreshPrice()

      setInterval(async () => await this.refreshPrice(), 5000)
    },

    // methods
    async refreshPrice() {
      const price = await getBtcPrice()

      const toBRL = Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      })

      this.price = toBRL.format(price)
    },
  }
}

createApp({
  Btc,
}).mount()
