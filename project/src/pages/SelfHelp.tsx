import React, { useState, useEffect } from 'react';
import { 
  Brain, 
  Heart, 
  BookOpen, 
  Headphones, 
  Play, 
  Clock,
  Star,
  ChevronRight,
  Pause,
  RotateCcw,
  Volume2,
  VolumeX,
  CheckCircle,
  Calendar,
  TrendingUp,
  Smile,
  Meh,
  Frown
} from 'lucide-react';

const SelfHelp: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('meditation');
  const [activeExercise, setActiveExercise] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [journalEntry, setJournalEntry] = useState('');
  const [moodRating, setMoodRating] = useState<number | null>(null);
  const [completedExercises, setCompletedExercises] = useState<string[]>([]);
  const [breathingCount, setBreathingCount] = useState(0);
  const [breathingPhase, setBreathingPhase] = useState<'inhale' | 'hold' | 'exhale' | 'pause'>('inhale');
  const [isBreathingActive, setIsBreathingActive] = useState(false);
  const auth = useAuth();
  const user = auth?.user;

  // Save journal entry to database
  const saveJournalEntry = async (title: string, content: string, mood?: number) => {
    if (!user) return;

    try {
      const { error } = await supabase
        .from('journal_entries')
        .insert([
          {
            user_id: user.id,
            title,
            content,
            mood_rating: mood,
          },
        ]);

      if (error) throw error;
    } catch (error) {
      console.error('Error saving journal entry:', error);
    }
  };

  // Save mood entry to database
  const saveMoodEntry = async (rating: number, emotions: string[], notes?: string) => {
    if (!user) return;

    try {
      const { error } = await supabase
        .from('mood_entries')
        .insert([
          {
            user_id: user.id,
            mood_rating: rating,
            emotions,
            notes,
          },
        ]);

      if (error) throw error;
    } catch (error) {
      console.error('Error saving mood entry:', error);
    }
  };
  const categories = [
    { id: 'meditation', label: 'Meditation', icon: Brain },
    { id: 'cbt', label: 'CBT Exercises', icon: BookOpen },
    { id: 'journaling', label: 'Journaling', icon: Heart },
    { id: 'relaxation', label: 'Relaxation', icon: Headphones }
  ];

  const resources = {
    meditation: [
      {
        id: 'mindful-breathing',
        title: 'Mindful Breathing',
        description: 'A guided 5-minute breathing exercise to center yourself and reduce anxiety',
        duration: '5 min',
        difficulty: 'Beginner',
        rating: 4.8,
        type: 'breathing',
        instructions: [
          'Find a comfortable seated position',
          'Close your eyes or soften your gaze',
          'Take a deep breath in through your nose for 4 counts',
          'Hold your breath for 4 counts',
          'Exhale slowly through your mouth for 6 counts',
          'Repeat this cycle'
        ]
      },
      {
        id: 'body-scan',
        title: 'Body Scan Meditation',
        description: 'Progressive relaxation technique for stress relief and body awareness',
        duration: '15 min',
        difficulty: 'Intermediate',
        rating: 4.9,
        type: 'guided',
        instructions: [
          'Lie down comfortably on your back',
          'Start by focusing on your toes',
          'Notice any sensations without judgment',
          'Slowly move your attention up through your body',
          'Spend 30 seconds on each body part',
          'End with your head and full body awareness'
        ]
      },
      {
        id: 'loving-kindness',
        title: 'Loving-Kindness Meditation',
        description: 'Cultivate compassion for yourself and others',
        duration: '10 min',
        difficulty: 'Beginner',
        rating: 4.7,
        type: 'guided',
        instructions: [
          'Sit comfortably and close your eyes',
          'Start by sending love to yourself: "May I be happy, may I be healthy"',
          'Extend these wishes to a loved one',
          'Include a neutral person in your life',
          'Send compassion to someone difficult',
          'Finally, extend love to all beings everywhere'
        ]
      }
    ],
    cbt: [
      {
        id: 'thought-record',
        title: 'Thought Record',
        description: 'Identify and challenge negative thought patterns using CBT techniques',
        duration: '10 min',
        difficulty: 'Beginner',
        rating: 4.6,
        type: 'worksheet',
        questions: [
          'What situation triggered this thought?',
          'What automatic thought came to mind?',
          'How did this thought make you feel (0-10)?',
          'What evidence supports this thought?',
          'What evidence contradicts this thought?',
          'What would you tell a friend in this situation?',
          'What\'s a more balanced way to think about this?'
        ]
      },
      {
        id: 'behavioral-activation',
        title: 'Behavioral Activation',
        description: 'Plan activities to improve mood and motivation',
        duration: '20 min',
        difficulty: 'Intermediate',
        rating: 4.8,
        type: 'planning',
        categories: [
          { name: 'Physical Activity', examples: ['Walk', 'Yoga', 'Dance', 'Sports'] },
          { name: 'Social Connection', examples: ['Call friend', 'Join group', 'Help others'] },
          { name: 'Achievement', examples: ['Complete task', 'Learn skill', 'Organize space'] },
          { name: 'Pleasure', examples: ['Listen to music', 'Read', 'Art', 'Nature'] }
        ]
      },
      {
        id: 'problem-solving',
        title: 'Problem-Solving Worksheet',
        description: 'Structured approach to tackling challenges',
        duration: '15 min',
        difficulty: 'Intermediate',
        rating: 4.5,
        type: 'worksheet',
        steps: [
          'Define the problem clearly',
          'Brainstorm possible solutions',
          'Evaluate pros and cons of each solution',
          'Choose the best solution',
          'Create an action plan',
          'Implement and monitor progress'
        ]
      }
    ],
    journaling: [
      {
        id: 'gratitude-journal',
        title: 'Gratitude Journal',
        description: 'Daily practice to focus on positive aspects of life',
        duration: '5 min',
        difficulty: 'Beginner',
        rating: 4.9,
        type: 'writing',
        prompts: [
          'What are 3 things you\'re grateful for today?',
          'Who made a positive impact on your day?',
          'What small moment brought you joy?',
          'What challenge helped you grow?',
          'What are you looking forward to?'
        ]
      },
      {
        id: 'emotion-tracking',
        title: 'Emotion Tracking',
        description: 'Monitor and understand your emotional patterns',
        duration: '10 min',
        difficulty: 'Beginner',
        rating: 4.7,
        type: 'tracking',
        emotions: ['Happy', 'Sad', 'Anxious', 'Angry', 'Excited', 'Calm', 'Frustrated', 'Content']
      },
      {
        id: 'stream-consciousness',
        title: 'Stream of Consciousness',
        description: 'Free-writing exercise to process thoughts and feelings',
        duration: '15 min',
        difficulty: 'Intermediate',
        rating: 4.6,
        type: 'writing',
        instructions: [
          'Set a timer for 15 minutes',
          'Write continuously without stopping',
          'Don\'t worry about grammar or spelling',
          'Let your thoughts flow freely',
          'Don\'t censor yourself',
          'If stuck, write "I don\'t know what to write" until new thoughts come'
        ]
      }
    ],
    relaxation: [
      {
        id: 'progressive-muscle',
        title: 'Progressive Muscle Relaxation',
        description: 'Systematic tension and release of muscle groups',
        duration: '20 min',
        difficulty: 'Beginner',
        rating: 4.8,
        type: 'guided',
        muscleGroups: [
          'Feet and calves',
          'Thighs and glutes',
          'Hands and forearms',
          'Arms and shoulders',
          'Face and scalp',
          'Neck and throat',
          'Chest and back',
          'Abdomen'
        ]
      },
      {
        id: 'nature-sounds',
        title: 'Nature Sounds',
        description: 'Calming audio for focus and relaxation',
        duration: '30 min',
        difficulty: 'Beginner',
        rating: 4.7,
        type: 'audio',
        sounds: ['Rain', 'Ocean waves', 'Forest birds', 'Thunderstorm', 'River flowing', 'Wind in trees']
      },
      {
        id: 'guided-imagery',
        title: 'Guided Imagery',
        description: 'Visualization exercises for stress reduction',
        duration: '12 min',
        difficulty: 'Beginner',
        rating: 4.9,
        type: 'guided',
        scenarios: [
          'Peaceful beach at sunset',
          'Mountain meadow in spring',
          'Cozy cabin by a fireplace',
          'Floating on calm water',
          'Walking through a garden'
        ]
      }
    ]
  };

  // Breathing exercise timer
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isBreathingActive) {
      interval = setInterval(() => {
        setCurrentTime(prev => {
          const newTime = prev + 1;
          const cycle = newTime % 16; // 4+4+6+2 = 16 seconds per cycle
          
          if (cycle < 4) setBreathingPhase('inhale');
          else if (cycle < 8) setBreathingPhase('hold');
          else if (cycle < 14) setBreathingPhase('exhale');
          else setBreathingPhase('pause');
          
          if (cycle === 0 && newTime > 0) {
            setBreathingCount(prev => prev + 1);
          }
          
          return newTime;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isBreathingActive]);

  const startExercise = (exerciseId: string) => {
    setActiveExercise(exerciseId);
    if (exerciseId === 'mindful-breathing') {
      setIsBreathingActive(true);
      setCurrentTime(0);
      setBreathingCount(0);
    }
  };

  const completeExercise = (exerciseId: string) => {
    setCompletedExercises(prev => [...prev, exerciseId]);
    setActiveExercise(null);
    setIsBreathingActive(false);
    setCurrentTime(0);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-600 bg-green-100 dark:bg-green-900/20 dark:text-green-400';
      case 'Intermediate': return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900/20 dark:text-yellow-400';
      case 'Advanced': return 'text-red-600 bg-red-100 dark:bg-red-900/20 dark:text-red-400';
      default: return 'text-gray-600 bg-gray-100 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  const renderExerciseContent = (resource: any) => {
    if (activeExercise !== resource.id) return null;

    switch (resource.type) {
      case 'breathing':
        return (
          <div className="mt-6 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
            <div className="text-center mb-6">
              <div className={`w-32 h-32 mx-auto rounded-full border-4 flex items-center justify-center transition-all duration-1000 ${
                breathingPhase === 'inhale' ? 'border-blue-500 scale-110' :
                breathingPhase === 'hold' ? 'border-purple-500 scale-110' :
                breathingPhase === 'exhale' ? 'border-green-500 scale-90' :
                'border-gray-400 scale-100'
              }`}>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    {breathingPhase === 'inhale' ? 'Breathe In' :
                     breathingPhase === 'hold' ? 'Hold' :
                     breathingPhase === 'exhale' ? 'Breathe Out' :
                     'Pause'}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Cycle {breathingCount + 1}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mb-4">
              <div className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Time: {formatTime(currentTime)}
              </div>
              <div className="flex justify-center space-x-4">
                <button
                  onClick={() => setIsBreathingActive(!isBreathingActive)}
                  className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  {isBreathingActive ? <Pause size={16} /> : <Play size={16} />}
                  <span>{isBreathingActive ? 'Pause' : 'Resume'}</span>
                </button>
                <button
                  onClick={() => completeExercise(resource.id)}
                  className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  <CheckCircle size={16} />
                  <span>Complete</span>
                </button>
              </div>
            </div>
          </div>
        );

      case 'worksheet':
        return (
          <div className="mt-6 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              {resource.title} Worksheet
            </h4>
            <div className="space-y-4">
              {(resource.questions || resource.steps).map((item: string, index: number) => (
                <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {index + 1}. {item}
                  </label>
                  <textarea
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    rows={3}
                    placeholder="Write your response here..."
                  />
                </div>
              ))}
              <button
                onClick={() => completeExercise(resource.id)}
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Save & Complete
              </button>
            </div>
          </div>
        );

      case 'writing':
        return (
          <div className="mt-6 p-6 bg-green-50 dark:bg-green-900/20 rounded-xl">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              {resource.title}
            </h4>
            {resource.prompts && (
              <div className="mb-4">
                <h5 className="font-medium text-gray-900 dark:text-white mb-2">Today's Prompts:</h5>
                <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                  {resource.prompts.map((prompt: string, index: number) => (
                    <li key={index}>• {prompt}</li>
                  ))}
                </ul>
              </div>
            )}
            <textarea
              value={journalEntry}
              onChange={(e) => setJournalEntry(e.target.value)}
              className="w-full h-40 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="Start writing your thoughts here..."
            />
            <div className="flex justify-between items-center mt-4">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {journalEntry.length} characters
              </span>
              <button
                onClick={() => {
                  if (journalEntry.trim()) {
                    saveJournalEntry(resource.title, journalEntry, moodRating || undefined);
                  }
                  completeExercise(resource.id);
                  setJournalEntry('');
                }}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                Save Entry
              </button>
            </div>
          </div>
        );

      case 'tracking':
        return (
          <div className="mt-6 p-6 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              How are you feeling today?
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
              {resource.emotions.map((emotion: string, index: number) => (
                <button
                  key={index}
                  className="p-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors text-center"
                >
                  <div className="text-2xl mb-1">
                    {emotion === 'Happy' ? '😊' :
                     emotion === 'Sad' ? '😢' :
                     emotion === 'Anxious' ? '😰' :
                     emotion === 'Angry' ? '😠' :
                     emotion === 'Excited' ? '🤩' :
                     emotion === 'Calm' ? '😌' :
                     emotion === 'Frustrated' ? '😤' : '😊'}
                  </div>
                  <div className="text-sm text-gray-700 dark:text-gray-300">{emotion}</div>
                </button>
              ))}
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Rate your overall mood (1-10):
              </label>
              <div className="flex space-x-2">
                {[1,2,3,4,5,6,7,8,9,10].map(num => (
                  <button
                    key={num}
                    onClick={() => setMoodRating(num)}
                    className={`w-10 h-10 rounded-full border-2 transition-colors ${
                      moodRating === num 
                        ? 'bg-purple-600 border-purple-600 text-white' 
                        : 'border-gray-300 dark:border-gray-600 hover:border-purple-400'
                    }`}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>
            
            <button
              onClick={() => {
                if (moodRating) {
                  const selectedEmotions = resource.emotions.filter((_, index) =>
                    document
                    .querySelector(`[data-emotion="${index}"]`)
                    ?.classList.contains('selected')
                                                                   );
                  saveMoodEntry(moodRating, selectedEmotions);
                }
                completeExercise(resource.id);
              }}
              className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
              Save Mood Entry
            </button>

          </div>
        );

      default:
        return (
          <div className="mt-6 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <div className="text-center">
              <Play className="mx-auto h-16 w-16 text-blue-600 dark:text-blue-400 mb-4" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {resource.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {resource.description}
              </p>
              <button
                onClick={() => completeExercise(resource.id)}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Complete Exercise
              </button>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Interactive Self-Help Hub
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore evidence-based tools and techniques to support your mental health journey. 
            Practice mindfulness, track your progress, and build healthy coping strategies.
          </p>
        </div>

        {/* Progress Overview */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Your Progress</h2>
            <TrendingUp className="text-green-500" size={24} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                {completedExercises.length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Exercises Completed</div>
            </div>
            <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                {Math.floor(currentTime / 60)}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Minutes Practiced</div>
            </div>
            <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                {breathingCount}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Breathing Cycles</div>
            </div>
          </div>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-md'
              }`}
            >
              <category.icon size={20} />
              <span>{category.label}</span>
            </button>
          ))}
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {resources[activeCategory as keyof typeof resources].map((resource, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(resource.difficulty)}`}>
                    {resource.difficulty}
                  </span>
                  <div className="flex items-center space-x-2">
                    {completedExercises.includes(resource.id) && (
                      <CheckCircle className="text-green-500" size={20} />
                    )}
                    <div className="flex items-center space-x-1">
                      <Star className="text-yellow-400 fill-current" size={16} />
                      <span className="text-sm text-gray-600 dark:text-gray-300">{resource.rating}</span>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {resource.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {resource.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1 text-gray-500 dark:text-gray-400">
                    <Clock size={16} />
                    <span className="text-sm">{resource.duration}</span>
                  </div>
                  <button
                    onClick={() => startExercise(resource.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                      activeExercise === resource.id
                        ? 'bg-green-600 text-white'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
                  >
                    {activeExercise === resource.id ? (
                      <>
                        <Pause size={16} />
                        <span>Active</span>
                      </>
                    ) : (
                      <>
                        <Play size={16} />
                        <span>Start</span>
                      </>
                    )}
                  </button>
                </div>

                {renderExerciseContent(resource)}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Tips */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Daily Wellness Tips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Brain className="text-blue-600 dark:text-blue-400" size={24} />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Practice Daily</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Consistency is key - even 5 minutes daily makes a difference</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 dark:bg-green-900/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Heart className="text-green-600 dark:text-green-400" size={24} />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Be Patient</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Mental health progress takes time - be kind to yourself</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 dark:bg-purple-900/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <BookOpen className="text-purple-600 dark:text-purple-400" size={24} />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Track Progress</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Keep a record of your exercises and mood changes</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 dark:bg-orange-900/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Headphones className="text-orange-600 dark:text-orange-400" size={24} />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Find Quiet Space</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Create a peaceful environment for your practice</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelfHelp;