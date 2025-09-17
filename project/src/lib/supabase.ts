import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface Profile {
  id: string
  email: string
  full_name: string
  avatar_url?: string
  created_at: string
  updated_at: string
}

export interface ChatMessage {
  id: string
  user_id: string
  message: string
  response: string
  created_at: string
}

export interface ForumPost {
  id: string
  user_id: string
  title: string
  content: string
  category: string
  anonymous: boolean
  created_at: string
  updated_at: string
}

export interface Appointment {
  id: string
  user_id: string
  counselor_name: string
  appointment_date: string
  appointment_time: string
  session_type: string
  meeting_format: string
  reason?: string
  status: 'scheduled' | 'completed' | 'cancelled'
  created_at: string
}

export interface JournalEntry {
  id: string
  user_id: string
  title: string
  content: string
  mood_rating?: number
  created_at: string
}

export interface MoodEntry {
  id: string
  user_id: string
  mood_rating: number
  emotions: string[]
  notes?: string
  created_at: string
}