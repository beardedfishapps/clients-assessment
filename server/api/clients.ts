import clients from '../clients.json'

export default defineEventHandler(() => {
    return clients[0]
  })