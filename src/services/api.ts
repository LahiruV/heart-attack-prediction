import type { LoginDto, RegisterDto, } from './types'
import { API_URL } from './url'

// Authentication APIs

export async function login(credentials: LoginDto): Promise<{ token: string }> {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  })
  if (!response.ok) {
    throw new Error('Invalid credentials')
  }

  return response.json()
}

export async function register(data: RegisterDto): Promise<{ token: string }> {
  const response = await fetch(`${API_URL}/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    throw new Error('Registration failed')
  }
  return response.json()
}

// User Management APIs

export async function getUser(): Promise<any> {
  const response = await fetch(`${API_URL}/auth/me`, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    },
  })

  if (!response.ok) {
    throw new Error('Failed to fetch user')
  }
  return response.json()
}

// Email Service API

export async function sendEmail(to: string, subject: string, text: string): Promise<void> {
  const response = await fetch(`${API_URL}/mail`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email: to, content: text, header: subject }),
  })
  if (!response.ok) {
    throw new Error('Failed to send email')
  }
}

// Prediction APIs

export async function savePrediction(data: any): Promise<any> {
  const response = await fetch(`${API_URL}/prediction/save`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    throw new Error('Failed to save prediction')
  }
  return response.json()
}

export async function getPredictionsByUser(userID: string): Promise<any[]> {
  const response = await fetch(`${API_URL}/prediction/get?userID=${userID}`
    , {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    })

  if (!response.ok) {
    throw new Error('Failed to fetch predictions')
  }
  return response.json()
}