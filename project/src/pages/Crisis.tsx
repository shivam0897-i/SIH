import React, { useState } from 'react';
import { 
  AlertTriangle, 
  Phone, 
  MessageCircle, 
  Globe, 
  Clock,
  Heart,
  Shield,
  Users,
  ExternalLink
} from 'lucide-react';

const Crisis: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState('immediate');

  const emergencyContacts = [
    {
      name: 'National Suicide Prevention Lifeline',
      number: '988',
      description: '24/7 free and confidential support',
      type: 'call'
    },
    {
      name: 'Crisis Text Line',
      number: 'Text HOME to 741741',
      description: '24/7 crisis support via text message',
      type: 'text'
    },
    {
      name: 'National Sexual Assault Hotline',
      number: '1-800-656-4673',
      description: '24/7 confidential support',
      type: 'call'
    },
    {
      name: 'National Domestic Violence Hotline',
      number: '1-800-799-7233',
      description: '24/7 confidential support',
      type: 'call'
    },
    {
      name: 'LGBTQ National Hotline',
      number: '1-888-843-4564',
      description: 'Support for LGBTQ+ individuals',
      type: 'call'
    },
    {
      name: 'SAMHSA National Helpline',
      number: '1-800-662-4357',
      description: 'Mental health and substance abuse',
      type: 'call'
    }
  ];

  const campusResources = [
    {
      name: 'Campus Counseling Center',
      contact: '(555) 123-4567',
      hours: 'Mon-Fri 8AM-5PM',
      location: 'Student Health Building, 2nd Floor'
    },
    {
      name: 'Campus Safety',
      contact: '(555) 123-SAFE',
      hours: '24/7',
      location: 'Emergency response available campus-wide'
    },
    {
      name: 'Student Health Services',
      contact: '(555) 123-4568',
      hours: 'Mon-Fri 8AM-6PM',
      location: 'Student Health Building, 1st Floor'
    },
    {
      name: 'Dean of Students Office',
      contact: '(555) 123-4569',
      hours: 'Mon-Fri 9AM-5PM',
      location: 'Administration Building, Room 200'
    }
  ];

  const warningSignsData = {
    immediate: [
      'Thoughts of suicide or self-harm',
      'Detailed suicide plan',
      'Giving away possessions',
      'Saying goodbye to people',
      'Sudden mood improvement after depression',
      'Substance abuse escalation',
      'Reckless or dangerous behavior',
      'Feeling trapped or hopeless'
    ],
    concerning: [
      'Persistent sadness or depression',
      'Withdrawal from friends and activities',
      'Significant changes in sleep or appetite',
      'Difficulty concentrating',
      'Increased anxiety or panic attacks',
      'Mood swings or irritability',
      'Loss of interest in things once enjoyed',
      'Academic performance decline'
    ],
    support: [
      'Listen without judgment',
      'Take their concerns seriously',
      'Encourage professional help',
      'Stay with them if in immediate danger',
      'Remove means of self-harm if possible',
      'Call emergency services if needed',
      'Follow up regularly',
      'Take care of yourself too'
    ]
  };

  const handleEmergencyCall = (number: string) => {
    if (number.includes('988') || number.includes('911')) {
      window.location.href = `tel:${number}`;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Emergency Banner */}
        <div className="bg-red-600 text-white rounded-lg p-6 mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <AlertTriangle size={32} />
            <h1 className="text-3xl font-bold">Crisis Support</h1>
          </div>
          <div className="text-center">
            <p className="text-xl mb-4">
              If you're having thoughts of suicide or are in immediate danger, please reach out now.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => handleEmergencyCall('911')}
                className="flex items-center justify-center space-x-2 px-6 py-3 bg-white text-red-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                <Phone size={20} />
                <span>Call 911</span>
              </button>
              <button
                onClick={() => handleEmergencyCall('988')}
                className="flex items-center justify-center space-x-2 px-6 py-3 bg-red-800 text-white rounded-lg font-semibold hover:bg-red-900 transition-colors"
              >
                <Phone size={20} />
                <span>Call 988 (Suicide Prevention)</span>
              </button>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
            <div className="bg-blue-100 dark:bg-blue-900/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="text-blue-600 dark:text-blue-400" size={32} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Talk to AI Assistant
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Get immediate support from our AI counselor
            </p>
            <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Start Chat
            </button>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
            <div className="bg-green-100 dark:bg-green-900/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="text-green-600 dark:text-green-400" size={32} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Peer Support
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Connect with others who understand
            </p>
            <button className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
              Join Community
            </button>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
            <div className="bg-purple-100 dark:bg-purple-900/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="text-purple-600 dark:text-purple-400" size={32} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Self-Care Tools
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Immediate coping strategies and exercises
            </p>
            <button className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
              Access Tools
            </button>
          </div>
        </div>

        {/* Emergency Contacts */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <Phone className="mr-3 text-red-600" size={24} />
            Emergency Hotlines
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {emergencyContacts.map((contact, index) => (
              <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {contact.name}
                  </h3>
                  <div className={`p-1 rounded ${contact.type === 'call' ? 'bg-green-100 dark:bg-green-900/20' : 'bg-blue-100 dark:bg-blue-900/20'}`}>
                    {contact.type === 'call' ? (
                      <Phone className="text-green-600 dark:text-green-400" size={16} />
                    ) : (
                      <MessageCircle className="text-blue-600 dark:text-blue-400" size={16} />
                    )}
                  </div>
                </div>
                <p className="text-lg font-mono text-blue-600 dark:text-blue-400 mb-2">
                  {contact.number}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {contact.description}
                </p>
                <button
                  onClick={() => handleEmergencyCall(contact.number)}
                  className="mt-3 w-full px-3 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors text-sm font-medium"
                >
                  {contact.type === 'call' ? 'Call Now' : 'Text Now'}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Campus Resources */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <Shield className="mr-3 text-blue-600" size={24} />
            Campus Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {campusResources.map((resource, index) => (
              <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {resource.name}
                </h3>
                <div className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                  <p className="flex items-center">
                    <Phone size={14} className="mr-2" />
                    {resource.contact}
                  </p>
                  <p className="flex items-center">
                    <Clock size={14} className="mr-2" />
                    {resource.hours}
                  </p>
                  <p className="flex items-center">
                    <Globe size={14} className="mr-2" />
                    {resource.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Warning Signs & Support */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Warning Signs & How to Help
          </h2>
          
          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-2 mb-6">
            {[
              { id: 'immediate', label: 'Immediate Danger', color: 'red' },
              { id: 'concerning', label: 'Concerning Signs', color: 'yellow' },
              { id: 'support', label: 'How to Help', color: 'green' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedTab === tab.id
                    ? `bg-${tab.color}-600 text-white`
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {warningSignsData[selectedTab as keyof typeof warningSignsData].map((item, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                  selectedTab === 'immediate' ? 'bg-red-500' :
                  selectedTab === 'concerning' ? 'bg-yellow-500' : 'bg-green-500'
                }`}></div>
                <span className="text-gray-700 dark:text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Resources */}
        <div className="mt-8 bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Additional Resources
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">Online Resources</h4>
              <ul className="space-y-1 text-gray-600 dark:text-gray-300">
                <li>• <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">National Alliance on Mental Illness</a></li>
                <li>• <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Mental Health America</a></li>
                <li>• <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Crisis Text Line Resources</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">Mobile Apps</h4>
              <ul className="space-y-1 text-gray-600 dark:text-gray-300">
                <li>• Calm - Meditation and sleep</li>
                <li>• Headspace - Mindfulness</li>
                <li>• PTSD Coach - Trauma support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crisis;