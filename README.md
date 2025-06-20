# BürgerFit - German Civics Quiz App

A comprehensive web application designed to help individuals prepare for the German naturalization test (Einbürgerungstest). The app provides an interactive quiz experience with questions covering German civics, history, and regional knowledge.

## 🌟 Features

### Core Functionality

- **Dual Language Support**: Questions available in both German (DE) and English (EN)
- **Two-Part Structure**:
  - **Teil 1**: General German civics and constitutional knowledge
  - **Teil 2**: Regional-specific questions for different German states
- **Interactive Quiz Interface**: Multiple choice questions with immediate feedback
- **Progress Tracking**: Persistent storage of attempted questions and results
- **Dark/Light Theme**: Toggle between themes for comfortable studying

### User Experience

- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Mobile-Optimized**: Dedicated mobile drawer for navigation
- **Real-time Feedback**: Toast notifications for user actions
- **Answer Highlighting**: Visual feedback for correct/incorrect answers
- **Navigation Tools**: Easy navigation between questions and sections

### Study Tools

- **Question Navigation**: Browse through questions with progress indicators
- **Attempt History**: Track how many times each question was attempted
- **Performance Analytics**: Monitor success rates and time taken
- **Regional Focus**: Practice state-specific questions for Teil 2

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd german_civics_for_naturalisation
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

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🏗️ Architecture

### Tech Stack

- **Frontend Framework**: React 19 with TypeScript
- **Build Tool**: Vite
- **State Management**: Zustand with persistence
- **Styling**: Tailwind CSS with shadcn/ui components
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **Notifications**: Sonner

### Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   ├── Question.tsx    # Question display component
│   ├── Options.tsx     # Answer options component
│   ├── Tabs.tsx        # Navigation tabs
│   ├── Tools.tsx       # Study tools
│   └── ...
├── lib/
│   ├── store.tsx       # Zustand state management
│   └── utils.ts        # Utility functions
├── assets/
│   ├── questions.ts    # Teil 1 questions
│   └── questions_teil_2.ts # Teil 2 regional questions
├── types.ts            # TypeScript type definitions
└── App.tsx             # Main application component
```

### State Management

The app uses Zustand for state management with the following key stores:

- **Quiz Store**: Manages current question, attempts, language, and theme
- **Persistence**: Automatically saves progress to localStorage
- **Regional Data**: Handles state-specific questions for Teil 2

## 📚 Question Structure

### Question Types

Each question follows this structure:

```typescript
interface QuestionType {
  id: string;
  question: {
    de: string; // German question text
    en: string; // English question text
    image?: string; // Optional image URL
  };
  options: OptionType[];
  answer: string; // Correct answer in German
}
```

### Content Coverage

- **Teil 1**: Constitutional rights, democratic principles, German history
- **Teil 2**: Regional geography, culture, and state-specific information

## 🎨 Customization

### Adding New Questions

1. Add questions to `src/assets/questions.ts` for Teil 1
2. Add regional questions to `src/assets/questions_teil_2.ts`
3. Follow the established question format

### Styling

- Uses Tailwind CSS for styling
- Custom theme configuration in `tailwind.config.js`
- shadcn/ui components for consistent design

## 🔧 Development

### TypeScript Configuration

- Strict type checking enabled
- Path aliases configured (`@/*` points to `src/*`)
- ESLint configuration for code quality

### Component Development

- Functional components with hooks
- TypeScript interfaces for type safety
- Responsive design patterns

## 📱 Browser Support

- Modern browsers with ES2017+ support
- Mobile-responsive design
- Progressive Web App ready

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- German Federal Office for Migration and Refugees (BAMF) for official test content
- shadcn/ui for the component library
- Radix UI for accessible primitives
- Vite team for the fast build tool

---

**Version**: v0.1  
**Last Updated**: 2025
