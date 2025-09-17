# MindSpark - Digital Mental Health & Psychological Support System

A comprehensive React web application designed to provide mental health support for students in higher education. MindSpark offers a range of digital tools and resources to support student wellbeing through an accessible, confidential platform.

## 🌟 Features

### Core Functionality
- **Landing Page** - Clean, modern interface showcasing the platform's mission
- **AI Mental Health Chatbot** - 24/7 psychological support with intelligent responses
- **Self-Help Hub** - Curated resources including meditation, CBT exercises, journaling, and relaxation tools
- **Peer & Mentor Support** - Anonymous community forum for student interaction
- **Confidential Booking** - Appointment scheduling system for campus counselors
- **Crisis Intervention** - Emergency support with hotline numbers and immediate help resources
- **Admin Dashboard** - Analytics and engagement tracking with interactive charts

### Technical Features
- **Dark/Light Mode Toggle** - User preference-based theming
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **React Router Navigation** - Seamless single-page application experience
- **Mock API Integration** - Functional demo mode with realistic data
- **Accessibility Compliant** - WCAG guidelines implementation
- **Modular Architecture** - Scalable codebase ready for backend integration

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd mindspark
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Build for Production
```bash
npm run build
```

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.tsx      # Navigation bar with theme toggle
│   ├── Footer.tsx      # Site footer with contact info
│   └── ThemeToggle.tsx # Dark/light mode switcher
├── pages/              # Main application pages
│   ├── Home.tsx        # Landing page
│   ├── Chat.tsx        # AI chatbot interface
│   ├── SelfHelp.tsx    # Self-help resources
│   ├── Community.tsx   # Peer support forum
│   ├── Booking.tsx     # Appointment booking
│   ├── Crisis.tsx      # Emergency support
│   └── Dashboard.tsx   # Admin analytics
├── contexts/           # React context providers
│   └── ThemeContext.tsx # Theme management
├── mock/               # Mock data and API functions
│   └── api.ts          # Demo data and functions
├── App.tsx             # Main application component
└── main.tsx           # Application entry point
```

## 🎨 Design System

### Color Palette
- **Primary**: Blue (#3B82F6) - Trust, stability, professionalism
- **Secondary**: Purple (#8B5CF6) - Creativity, mindfulness
- **Success**: Green (#10B981) - Growth, positive outcomes
- **Warning**: Yellow (#F59E0B) - Caution, attention
- **Danger**: Red (#EF4444) - Crisis, urgent attention
- **Neutral**: Gray shades - Balance, accessibility

### Typography
- **Headings**: Bold, clear hierarchy
- **Body Text**: Readable, accessible contrast ratios
- **Interactive Elements**: Clear focus states and hover effects

### Accessibility Features
- WCAG 2.1 AA compliance
- Keyboard navigation support
- Screen reader compatibility
- High contrast color ratios
- Semantic HTML structure

## 🔧 Technology Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type safety and better developer experience
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Lucide React** - Beautiful, customizable icons
- **Recharts** - Interactive charts and data visualization

### Development Tools
- **Vite** - Fast build tool and development server
- **ESLint** - Code linting and quality assurance
- **PostCSS** - CSS processing and optimization

## 📊 Mock Data & APIs

The application includes comprehensive mock data to demonstrate functionality:

- **Chat Messages** - Realistic AI responses for mental health support
- **Forum Posts** - Sample community discussions and peer support
- **Dashboard Analytics** - Student engagement metrics and mood trends
- **Appointment System** - Booking functionality with counselor availability
- **Crisis Resources** - Emergency contacts and support information

## 🔒 Privacy & Security

### Data Protection
- All user interactions are designed with privacy in mind
- Anonymous posting capabilities in community features
- Secure form handling for sensitive information
- Clear privacy notices and consent mechanisms

### Crisis Support
- Immediate access to emergency resources
- Clear escalation pathways for crisis situations
- Integration with national and local support services
- 24/7 availability messaging

## 🚀 Future Enhancements

### Backend Integration Ready
The application is architected to easily integrate with:
- **Python/Django** - Robust backend framework
- **Node.js/Express** - JavaScript-based API server
- **Database Systems** - PostgreSQL, MongoDB, or similar
- **Authentication** - JWT, OAuth, or institutional SSO
- **Real-time Features** - WebSocket support for live chat

### Planned Features
- Real AI integration with mental health APIs
- Video counseling capabilities
- Mobile app development
- Integration with campus systems
- Advanced analytics and reporting
- Multi-language support

## 🤝 Contributing

This project is designed for educational and demonstration purposes. For production deployment:

1. Implement proper backend authentication
2. Integrate with licensed mental health APIs
3. Ensure HIPAA compliance for health data
4. Add comprehensive testing suite
5. Implement proper error handling and logging

## 📞 Support & Resources

### Emergency Contacts
- **National Suicide Prevention Lifeline**: 988
- **Crisis Text Line**: Text HOME to 741741
- **Emergency Services**: 911

### Development Support
For technical questions or contributions, please refer to the project documentation or contact the development team.

## 📄 License

This project is created for educational purposes. Please ensure proper licensing and compliance when adapting for production use in mental health contexts.

---

**Important Notice**: This is a demonstration application. For actual mental health support, please contact qualified professionals or use established crisis intervention services.