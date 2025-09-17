// Mock API data and functions for demo purposes

export interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export interface ForumPost {
  id: string;
  title: string;
  content: string;
  author: string;
  timestamp: Date;
  replies: number;
  category: 'anxiety' | 'depression' | 'stress' | 'relationships' | 'academic';
}

export interface Appointment {
  id: string;
  counselor: string;
  date: string;
  time: string;
  type: 'individual' | 'group' | 'crisis';
  status: 'scheduled' | 'completed' | 'cancelled';
}

export interface DashboardStats {
  totalUsers: number;
  activeChats: number;
  appointmentsToday: number;
  crisisInterventions: number;
  moodTrends: Array<{ date: string; anxiety: number; depression: number; stress: number; }>;
  engagementStats: Array<{ feature: string; usage: number; }>;
}

// Mock data
export const mockForumPosts: ForumPost[] = [
  {
    id: '1',
    title: 'Dealing with exam anxiety - tips that worked for me',
    content: 'I wanted to share some strategies that helped me manage my anxiety during finals...',
    author: 'Anonymous Student',
    timestamp: new Date('2024-01-15T10:30:00'),
    replies: 12,
    category: 'anxiety'
  },
  {
    id: '2',
    title: 'Finding balance between studies and social life',
    content: 'Has anyone else struggled with maintaining friendships while keeping up with coursework?',
    author: 'Anonymous User',
    timestamp: new Date('2024-01-14T15:45:00'),
    replies: 8,
    category: 'stress'
  },
  {
    id: '3',
    title: 'Meditation helped me through depression',
    content: 'I was skeptical at first, but daily meditation has really improved my mental state...',
    author: 'Anonymous Helper',
    timestamp: new Date('2024-01-13T09:20:00'),
    replies: 15,
    category: 'depression'
  }
];

export const mockDashboardStats: DashboardStats = {
  totalUsers: 1247,
  activeChats: 23,
  appointmentsToday: 8,
  crisisInterventions: 2,
  moodTrends: [
    { date: '2024-01-01', anxiety: 65, depression: 45, stress: 70 },
    { date: '2024-01-02', anxiety: 62, depression: 43, stress: 68 },
    { date: '2024-01-03', anxiety: 58, depression: 40, stress: 65 },
    { date: '2024-01-04', anxiety: 60, depression: 42, stress: 67 },
    { date: '2024-01-05', anxiety: 55, depression: 38, stress: 62 },
    { date: '2024-01-06', anxiety: 53, depression: 36, stress: 60 },
    { date: '2024-01-07', anxiety: 50, depression: 35, stress: 58 }
  ],
  engagementStats: [
    { feature: 'AI Chatbot', usage: 85 },
    { feature: 'Self-Help Hub', usage: 72 },
    { feature: 'Peer Support', usage: 68 },
    { feature: 'Booking System', usage: 45 },
    { feature: 'Crisis Support', usage: 12 }
  ]
};

// Mock API functions
export const sendChatMessage = async (message: string): Promise<ChatMessage> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  const responses = [
    "I understand you're going through a difficult time. Can you tell me more about what's been bothering you?",
    "It sounds like you're dealing with a lot of stress. Have you tried any relaxation techniques?",
    "Thank you for sharing that with me. It takes courage to reach out for help.",
    "I hear that you're feeling overwhelmed. Let's work together to find some coping strategies.",
    "Your feelings are valid. Would you like to explore some mindfulness exercises?",
    "It's important to remember that you're not alone in this. Many students face similar challenges."
  ];
  
  return {
    id: Date.now().toString(),
    text: responses[Math.floor(Math.random() * responses.length)],
    sender: 'bot',
    timestamp: new Date()
  };
};

export const bookAppointment = async (appointmentData: any): Promise<Appointment> => {
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return {
    id: Date.now().toString(),
    counselor: appointmentData.counselor,
    date: appointmentData.date,
    time: appointmentData.time,
    type: appointmentData.type,
    status: 'scheduled'
  };
};

export const createForumPost = async (postData: any): Promise<ForumPost> => {
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return {
    id: Date.now().toString(),
    title: postData.title,
    content: postData.content,
    author: 'Anonymous User',
    timestamp: new Date(),
    replies: 0,
    category: postData.category
  };
};