import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'

export function usePayments(opts?: any) {
  return useQuery(['payments', opts], async () => {
    const res = await axios.get('/api/v1/payments')
    return res.data
  })
}

export function useCreatePayment() {
  const qc = useQueryClient()
  return useMutation(async (payload: any) => {
    const res = await axios.post('/api/v1/payments', payload)
    return res.data
  }, {
    onSuccess: () => qc.invalidateQueries(['payments'])
  })
}
