const fetch = globalThis.fetch || (await import('node-fetch')).default
const base = process.env.SMOKE_BASE_URL || 'http://localhost:3000'

async function ok(res) {
  console.log(`${res.status} ${res.url}`)
  try { const body = await res.text(); console.log(body.slice(0, 1000)) } catch (e) {}
}

async function run() {
  console.log('Smoke tests: hitting /api/health')
  try {
    const h = await fetch(`${base}/api/health`)
    await ok(h)
  } catch (e) { console.error('Health failed', e) }

  console.log('Smoke tests: POST /api/v1/payments')
  try {
    const res = await fetch(`${base}/api/v1/payments`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ order_id: `smoke_${Date.now()}`, amount_cents: 1000 })
    })
    await ok(res)
  } catch (e) { console.error('Create payment failed', e) }

  console.log('Smoke tests: POST /webhooks/mercadopago')
  try {
    const res = await fetch(`${base}/webhooks/mercadopago`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: `evt_${Date.now()}`, type: 'payment.created', data: {} })
    })
    await ok(res)
  } catch (e) { console.error('Webhook failed', e) }
}

run()
