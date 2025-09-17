import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  User, 
  CheckCircle, 
  AlertCircle,
  Phone,
  Video,
  MapPin
} from 'lucide-react';
import { supabase } from '../lib/supabase';
import { useAuth } from '../contexts/AuthContext';

const Booking: React.FC = () => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    counselor: '',
    date: '',
    time: '',
    type: 'individual' as 'individual' | 'group' | 'crisis',
    sessionType: 'in-person' as 'in-person' | 'video' | 'phone',
    reason: '',
    urgency: 'routine' as 'routine' | 'urgent' | 'crisis',
    previousSession: false,
    consent: false
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const counselors = [
    { id: 'dr-smith', name: 'Dr. Sarah Smith', specialty: 'Anxiety & Depression', availability: 'Mon-Fri' },
    { id: 'dr-johnson', name: 'Dr. Michael Johnson', specialty: 'Academic Stress', availability: 'Tue-Thu' },
    { id: 'dr-williams', name: 'Dr. Emily Williams', specialty: 'Relationship Issues', availability: 'Mon-Wed-Fri' },
    { id: 'dr-brown', name: 'Dr. David Brown', specialty: 'Crisis Intervention', availability: 'Daily' },
    { id: 'dr-davis', name: 'Dr. Lisa Davis', specialty: 'CBT & Mindfulness', availability: 'Mon-Fri' }
  ];

  const timeSlots = [
    '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent || !user) {
      alert('Please agree to the terms and conditions');
      return;
    }

    setIsSubmitting(true);
    try {
      const { error } = await supabase
        .from('appointments')
        .insert([
          {
            user_id: user.id,
            counselor_name: counselors.find(c => c.id === formData.counselor)?.name || '',
            appointment_date: formData.date,
            appointment_time: formData.time,
            session_type: formData.type,
            meeting_format: formData.sessionType,
            reason: formData.reason,
            status: formData.urgency === 'crisis' ? 'urgent' : 'scheduled',
          },
        ]);

      if (error) throw error;
      setSubmitted(true);
    } catch (error) {
      console.error('Error booking appointment:', error);
      alert('Error booking appointment. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16 flex items-center justify-center">
        <div className="max-w-md mx-auto px-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 text-center">
            <CheckCircle className="mx-auto h-16 w-16 text-green-500 mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Appointment Booked!
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Your appointment has been successfully scheduled. You'll receive a confirmation email shortly with all the details.
            </p>
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-6">
              <div className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <p><strong>Counselor:</strong> {counselors.find(c => c.id === formData.counselor)?.name}</p>
                <p><strong>Date:</strong> {formData.date}</p>
                <p><strong>Time:</strong> {formData.time}</p>
                <p><strong>Type:</strong> {formData.sessionType}</p>
              </div>
            </div>
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  counselor: '',
                  date: '',
                  time: '',
                  type: 'individual',
                  sessionType: 'in-person',
                  reason: '',
                  urgency: 'routine',
                  previousSession: false,
                  consent: false
                });
              }}
              className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Book Another Appointment
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Book a Counseling Session
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Schedule a confidential appointment with one of our licensed mental health professionals. 
            All sessions are private and secure.
          </p>
        </div>

        {/* Crisis Notice */}
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-8">
          <div className="flex items-start space-x-3">
            <AlertCircle className="text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" size={20} />
            <div>
              <h3 className="text-sm font-medium text-red-800 dark:text-red-200">
                Need immediate help?
              </h3>
              <p className="text-sm text-red-700 dark:text-red-300 mt-1">
                If you're experiencing a mental health crisis, please call 988 (Suicide & Crisis Lifeline) 
                or go to your nearest emergency room. For urgent but non-crisis situations, select "Crisis" 
                appointment type below.
              </p>
            </div>
          </div>
        </div>

        {/* Booking Form */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Counselor Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Select Counselor
              </label>
              <select
                name="counselor"
                value={formData.counselor}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                <option value="">Choose a counselor...</option>
                {counselors.map((counselor) => (
                  <option key={counselor.id} value={counselor.id}>
                    {counselor.name} - {counselor.specialty} ({counselor.availability})
                  </option>
                ))}
              </select>
            </div>

            {/* Date and Time */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  <Calendar className="inline mr-1" size={16} />
                  Preferred Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  min={new Date().toISOString().split('T')[0]}
                  required
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  <Clock className="inline mr-1" size={16} />
                  Preferred Time
                </label>
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                >
                  <option value="">Select time...</option>
                  {timeSlots.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Session Type */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Session Type
                </label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                >
                  <option value="individual">Individual Counseling</option>
                  <option value="group">Group Therapy</option>
                  <option value="crisis">Crisis Intervention</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Meeting Format
                </label>
                <select
                  name="sessionType"
                  value={formData.sessionType}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                >
                  <option value="in-person">
                    <MapPin className="inline mr-1" size={16} />
                    In-Person
                  </option>
                  <option value="video">
                    <Video className="inline mr-1" size={16} />
                    Video Call
                  </option>
                  <option value="phone">
                    <Phone className="inline mr-1" size={16} />
                    Phone Call
                  </option>
                </select>
              </div>
            </div>

            {/* Urgency */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Urgency Level
              </label>
              <select
                name="urgency"
                value={formData.urgency}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                <option value="routine">Routine (within 1-2 weeks)</option>
                <option value="urgent">Urgent (within 2-3 days)</option>
                <option value="crisis">Crisis (same day)</option>
              </select>
            </div>

            {/* Reason */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Reason for Visit (Optional)
              </label>
              <textarea
                name="reason"
                value={formData.reason}
                onChange={handleInputChange}
                rows={3}
                placeholder="Briefly describe what you'd like to discuss (this helps us prepare for your session)"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>

            {/* Previous Session */}
            <div className="flex items-center">
              <input
                type="checkbox"
                name="previousSession"
                checked={formData.previousSession}
                onChange={handleInputChange}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                I have had previous counseling sessions at this institution
              </label>
            </div>

            {/* Consent */}
            <div className="flex items-start">
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleInputChange}
                required
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-0.5"
              />
              <label className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                I agree to the terms and conditions and understand that this appointment is confidential. 
                I consent to receiving appointment reminders via email and/or SMS.
              </label>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
              >
                {isSubmitting ? 'Booking Appointment...' : 'Book Appointment'}
              </button>
            </div>
          </form>
        </div>

        {/* Additional Information */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              What to Expect
            </h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Sessions are typically 50 minutes long</li>
              <li>• All conversations are confidential</li>
              <li>• You'll receive a confirmation email within 24 hours</li>
              <li>• Cancellations must be made 24 hours in advance</li>
            </ul>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Preparation Tips
            </h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Think about what you'd like to discuss</li>
              <li>• Arrive 10 minutes early for in-person sessions</li>
              <li>• Test your technology for video calls</li>
              <li>• Find a private, quiet space</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;