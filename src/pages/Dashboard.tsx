import React, { useState, useEffect } from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { 
  Users, 
  MessageCircle, 
  Calendar, 
  AlertTriangle,
  TrendingUp,
  Activity,
  Clock,
  Heart
} from 'lucide-react';
import { mockDashboardStats } from '../mock/api';

const Dashboard: React.FC = () => {
  const [stats, setStats] = useState(mockDashboardStats);
  const [timeRange, setTimeRange] = useState('7d');

  useEffect(() => {
    // In a real app, this would fetch data based on timeRange
    setStats(mockDashboardStats);
  }, [timeRange]);

  const COLORS = ['#3B82F6', '#10B981', '#8B5CF6', '#F59E0B', '#EF4444'];

  const StatCard: React.FC<{
    title: string;
    value: string | number;
    icon: React.ReactNode;
    change?: string;
    changeType?: 'positive' | 'negative' | 'neutral';
  }> = ({ title, value, icon, change, changeType = 'neutral' }) => (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{title}</p>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">{value}</p>
          {change && (
            <p className={`text-sm ${
              changeType === 'positive' ? 'text-green-600' :
              changeType === 'negative' ? 'text-red-600' : 'text-gray-600'
            }`}>
              {change}
            </p>
          )}
        </div>
        <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-full">
          {icon}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Admin Dashboard
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Monitor student mental health engagement and platform analytics
            </p>
          </div>
          <div className="mt-4 lg:mt-0">
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            >
              <option value="24h">Last 24 Hours</option>
              <option value="7d">Last 7 Days</option>
              <option value="30d">Last 30 Days</option>
              <option value="90d">Last 90 Days</option>
            </select>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Total Active Users"
            value={stats.totalUsers.toLocaleString()}
            icon={<Users className="text-blue-600 dark:text-blue-400" size={24} />}
            change="+12% from last week"
            changeType="positive"
          />
          <StatCard
            title="Active Chat Sessions"
            value={stats.activeChats}
            icon={<MessageCircle className="text-green-600 dark:text-green-400" size={24} />}
            change="+5% from yesterday"
            changeType="positive"
          />
          <StatCard
            title="Appointments Today"
            value={stats.appointmentsToday}
            icon={<Calendar className="text-purple-600 dark:text-purple-400" size={24} />}
            change="2 more than yesterday"
            changeType="positive"
          />
          <StatCard
            title="Crisis Interventions"
            value={stats.crisisInterventions}
            icon={<AlertTriangle className="text-red-600 dark:text-red-400" size={24} />}
            change="Within normal range"
            changeType="neutral"
          />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Mood Trends */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Student Mood Trends
              </h2>
              <TrendingUp className="text-blue-600 dark:text-blue-400" size={20} />
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={stats.moodTrends}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis 
                  dataKey="date" 
                  tick={{ fontSize: 12 }}
                  className="text-gray-600 dark:text-gray-400"
                />
                <YAxis 
                  tick={{ fontSize: 12 }}
                  className="text-gray-600 dark:text-gray-400"
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="anxiety" 
                  stroke="#EF4444" 
                  strokeWidth={2}
                  name="Anxiety"
                />
                <Line 
                  type="monotone" 
                  dataKey="depression" 
                  stroke="#3B82F6" 
                  strokeWidth={2}
                  name="Depression"
                />
                <Line 
                  type="monotone" 
                  dataKey="stress" 
                  stroke="#F59E0B" 
                  strokeWidth={2}
                  name="Stress"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Feature Engagement */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Feature Engagement
              </h2>
              <Activity className="text-green-600 dark:text-green-400" size={20} />
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={stats.engagementStats}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis 
                  dataKey="feature" 
                  tick={{ fontSize: 12 }}
                  className="text-gray-600 dark:text-gray-400"
                />
                <YAxis 
                  tick={{ fontSize: 12 }}
                  className="text-gray-600 dark:text-gray-400"
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px'
                  }}
                />
                <Bar 
                  dataKey="usage" 
                  fill="#3B82F6"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Activity & Alerts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Activity */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Recent Activity
              </h2>
              <Clock className="text-gray-600 dark:text-gray-400" size={20} />
            </div>
            <div className="space-y-4">
              {[
                { time: '2 min ago', event: 'New user registered', type: 'user' },
                { time: '5 min ago', event: 'Crisis intervention completed', type: 'crisis' },
                { time: '12 min ago', event: 'Group therapy session started', type: 'session' },
                { time: '18 min ago', event: 'AI chat session initiated', type: 'chat' },
                { time: '25 min ago', event: 'Appointment booked', type: 'appointment' }
              ].map((activity, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className={`w-2 h-2 rounded-full ${
                    activity.type === 'crisis' ? 'bg-red-500' :
                    activity.type === 'user' ? 'bg-green-500' :
                    activity.type === 'session' ? 'bg-purple-500' :
                    activity.type === 'chat' ? 'bg-blue-500' : 'bg-orange-500'
                  }`}></div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-900 dark:text-white">{activity.event}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* System Alerts */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                System Alerts
              </h2>
              <Heart className="text-red-600 dark:text-red-400" size={20} />
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-green-800 dark:text-green-200">
                    All Systems Operational
                  </span>
                </div>
                <p className="text-xs text-green-600 dark:text-green-300 mt-1">
                  All services running normally
                </p>
              </div>
              
              <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span className="text-sm font-medium text-yellow-800 dark:text-yellow-200">
                    High Chat Volume
                  </span>
                </div>
                <p className="text-xs text-yellow-600 dark:text-yellow-300 mt-1">
                  Response times may be slightly delayed
                </p>
              </div>

              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm font-medium text-blue-800 dark:text-blue-200">
                    Scheduled Maintenance
                  </span>
                </div>
                <p className="text-xs text-blue-600 dark:text-blue-300 mt-1">
                  System update planned for Sunday 2AM-4AM
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            Quick Actions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors">
              <MessageCircle className="text-blue-600 dark:text-blue-400 mb-2" size={24} />
              <p className="text-sm font-medium text-blue-800 dark:text-blue-200">
                Review Chat Logs
              </p>
            </button>
            <button className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors">
              <Users className="text-green-600 dark:text-green-400 mb-2" size={24} />
              <p className="text-sm font-medium text-green-800 dark:text-green-200">
                Manage Users
              </p>
            </button>
            <button className="p-4 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors">
              <Calendar className="text-purple-600 dark:text-purple-400 mb-2" size={24} />
              <p className="text-sm font-medium text-purple-800 dark:text-purple-200">
                Schedule Reports
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;