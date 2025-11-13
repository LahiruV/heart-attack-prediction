import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import * as api from './api'
import type { LoginDto, RegisterDto } from './types'

// Auth queries
export const useLogin = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (credentials: LoginDto) => api.login(credentials),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user-login'] })
    },
  })
}

export const useRegister = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (data: RegisterDto) => api.register(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user-register'] })
    },
  })
}

// User queries

export const useUser = () => {
  return useQuery({
    queryKey: ['user'],
    queryFn: api.getUser,
    retry: false,
  })
}

// Mail queries

export const useSendMail = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (data: { to: string; subject: string; text: string; html?: string }) => api.sendEmail(data.to, data.subject, data.text),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['send-mail'] })
    },
  })
}

// Prediction queries

export const useSavePrediction = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (data: {
      userID: string,
      age: string,
      gender: string,
      heartRate: string,
      symbolicBloodPressure: string,
      diastolicBloodPressure: string,
      bloodSugar: string,
      ckMb: string,
      troponin: string,
      predictionResult: string
    }) => api.savePrediction(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['save-prediction'] })
    },
  })
}

export const useGetPredictionsByUser = (userID: string) => {
  return useQuery({
    queryKey: ['predictions-by-user', userID],
    queryFn: () => api.getPredictionsByUser(userID),
    retry: false,
  })
}
