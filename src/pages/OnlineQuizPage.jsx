import React, { useState } from 'react';
import { 
  BookOpen, Plus, CheckCircle2, Clock, Award, AlertCircle, 
  HelpCircle, Trash2, Play, ArrowRight, RotateCcw, FileText, Check, X 
} from 'lucide-react';
import { useLanguage } from '../utils/languageContext';

export const OnlineQuizPage = () => {
  const { t, isHindi } = useLanguage();
  const [activeTab, setActiveTab] = useState('tests'); // 'tests' | 'take' | 'create'
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [scoreResult, setScoreResult] = useState(null);

  // Initial Real Sample Quizzes
  const [quizzes, setQuizzes] = useState([
    {
      id: 'QUIZ-101',
      title: 'Class 10th Mathematics - Term 1 Revision Quiz',
      subject: 'Mathematics',
      targetClass: 'Class 10',
      durationMinutes: 15,
      totalMarks: 20,
      questions: [
        {
          id: 'q1',
          question: 'If a quadratic equation is ax² + bx + c = 0, what is the discriminant formula?',
          options: ['b² - 4ac', 'b² + 4ac', '2b - 4ac', '4ac - b²'],
          correctIndex: 0,
          marks: 5
        },
        {
          id: 'q2',
          question: 'What is the HCF of 96 and 404?',
          options: ['2', '4', '8', '16'],
          correctIndex: 1,
          marks: 5
        },
        {
          id: 'q3',
          question: 'The value of sin 30° is:',
          options: ['1', '√3/2', '1/2', '1/√2'],
          correctIndex: 2,
          marks: 5
        },
        {
          id: 'q4',
          question: 'The sum of the first 10 natural numbers is:',
          options: ['45', '50', '55', '60'],
          correctIndex: 2,
          marks: 5
        }
      ]
    },
    {
      id: 'QUIZ-102',
      title: 'Class 8th Science - Cell Structure & Functions',
      subject: 'Science',
      targetClass: 'Class 8',
      durationMinutes: 10,
      totalMarks: 15,
      questions: [
        {
          id: 'q1',
          question: 'Which organelle is known as the powerhouse of the cell?',
          options: ['Ribosome', 'Mitochondria', 'Nucleus', 'Chloroplast'],
          correctIndex: 1,
          marks: 5
        },
        {
          id: 'q2',
          question: 'Plant cells have a rigid outer layer called:',
          options: ['Cell wall', 'Cell membrane', 'Cytoplasm', 'Vacuole'],
          correctIndex: 0,
          marks: 5
        },
        {
          id: 'q3',
          question: 'The control centre of all cellular activities is:',
          options: ['Cytoplasm', 'Mitochondria', 'Nucleus', 'Endoplasmic Reticulum'],
          correctIndex: 2,
          marks: 5
        }
      ]
    },
    {
      id: 'QUIZ-103',
      title: 'Class 5th Environmental Studies & General Knowledge',
      subject: 'EVS / GK',
      targetClass: 'Class 5',
      durationMinutes: 10,
      totalMarks: 10,
      questions: [
        {
          id: 'q1',
          question: 'Which is the largest organ of the human body?',
          options: ['Heart', 'Skin', 'Liver', 'Lungs'],
          correctIndex: 1,
          marks: 5
        },
        {
          id: 'q2',
          question: 'Plants make their food by which process?',
          options: ['Respiration', 'Photosynthesis', 'Transpiration', 'Digestion'],
          correctIndex: 1,
          marks: 5
        }
      ]
    }
  ]);

  // Handle starting a test
  const handleStartQuiz = (quiz) => {
    setSelectedQuiz(quiz);
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setQuizSubmitted(false);
    setScoreResult(null);
    setActiveTab('take');
  };

  const handleSelectAnswer = (qIndex, optIndex) => {
    setUserAnswers(prev => ({
      ...prev,
      [qIndex]: optIndex
    }));
  };

  const handleSubmitQuiz = () => {
    if (!selectedQuiz) return;
    let earned = 0;
    let correctCount = 0;

    selectedQuiz.questions.forEach((q, idx) => {
      if (userAnswers[idx] === q.correctIndex) {
        earned += q.marks;
        correctCount++;
      }
    });

    const percentage = ((earned / selectedQuiz.totalMarks) * 100).toFixed(1);
    setScoreResult({
      earnedMarks: earned,
      totalMarks: selectedQuiz.totalMarks,
      correctCount,
      totalQuestions: selectedQuiz.questions.length,
      percentage
    });
    setQuizSubmitted(true);
  };

  return (
    <div className="space-y-6 animate-fadeIn pb-12">
      {/* Header Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 text-xs font-bold mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            {isHindi ? 'ऑनलाइन टेस्ट व MCQ परीक्षा पोर्टल' : 'Online MCQ Examination Portal'}
          </div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight mb-2">
            {isHindi ? 'छात्र ऑनलाइन परीक्षा व क्विज' : 'Student Online Exam & Assessment'}
          </h1>
          <p className="text-xs sm:text-sm text-blue-200 font-medium">
            {isHindi 
              ? 'कक्षावार वस्तुनिष्ठ (MCQ) ऑनलाइन टेस्ट, स्वतः मूल्यांकन (Auto-Grading) और तुरंत परिणाम।'
              : 'Class-wise interactive MCQ exams with auto-grading and instant digital scorecards.'}
          </p>

          <div className="mt-5 flex gap-3">
            <button
              onClick={() => setActiveTab('tests')}
              className={`px-5 py-2.5 rounded-2xl text-xs font-black transition-all ${
                activeTab === 'tests' ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30' : 'bg-white/10 text-blue-200 hover:bg-white/20'
              }`}
            >
              {isHindi ? 'उपलब्ध परीक्षाएं (Available Tests)' : 'Available Tests'}
            </button>
          </div>
        </div>
      </div>

      {/* Mode 1: Available Tests List */}
      {activeTab === 'tests' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {quizzes.map(quiz => (
            <div
              key={quiz.id}
              className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-black text-[10px] uppercase">
                    {quiz.subject}
                  </span>
                  <span className="font-mono text-xs font-bold text-slate-400">
                    {quiz.targetClass}
                  </span>
                </div>

                <h3 className="font-black text-sm text-slate-900 dark:text-white leading-snug">
                  {quiz.title}
                </h3>

                <div className="flex items-center gap-4 text-xs text-slate-500 font-medium pt-2 border-t border-slate-100 dark:border-slate-800">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-blue-600" />
                    {quiz.durationMinutes} Mins
                  </span>
                  <span className="flex items-center gap-1.5">
                    <HelpCircle className="w-3.5 h-3.5 text-purple-600" />
                    {quiz.questions.length} Questions
                  </span>
                  <span className="flex items-center gap-1.5 font-bold text-emerald-600">
                    <Award className="w-3.5 h-3.5" />
                    {quiz.totalMarks} Marks
                  </span>
                </div>
              </div>

              <button
                onClick={() => handleStartQuiz(quiz)}
                className="mt-5 w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xs flex items-center justify-center gap-2 shadow-md shadow-blue-600/20 active:scale-95 transition-all"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                {isHindi ? 'परीक्षा शुरू करें (Start Test)' : 'Start Online Test'}
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Mode 2: Live Quiz Taking Screen */}
      {activeTab === 'take' && selectedQuiz && (
        <div className="max-w-3xl mx-auto space-y-6">
          {!quizSubmitted ? (
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
              {/* Quiz Header */}
              <div className="flex flex-col sm:flex-row justify-between sm:items-center pb-4 border-b border-slate-100 dark:border-slate-800 gap-2">
                <div>
                  <h2 className="text-base font-black text-slate-900 dark:text-white">
                    {selectedQuiz.title}
                  </h2>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">
                    Question {currentQuestionIndex + 1} of {selectedQuiz.questions.length}
                  </div>
                </div>

                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-mono font-black text-xs">
                  <Clock className="w-4 h-4 text-blue-600 animate-pulse" />
                  {selectedQuiz.durationMinutes}:00 Remaining
                </div>
              </div>

              {/* Current Question */}
              {selectedQuiz.questions[currentQuestionIndex] && (
                <div className="space-y-4">
                  <div className="text-sm font-bold text-slate-900 dark:text-white leading-relaxed">
                    Q{currentQuestionIndex + 1}. {selectedQuiz.questions[currentQuestionIndex].question}
                  </div>

                  {/* Options */}
                  <div className="space-y-2.5 pt-2">
                    {selectedQuiz.questions[currentQuestionIndex].options.map((opt, optIdx) => {
                      const isSelected = userAnswers[currentQuestionIndex] === optIdx;
                      return (
                        <button
                          key={optIdx}
                          onClick={() => handleSelectAnswer(currentQuestionIndex, optIdx)}
                          className={`w-full p-3.5 rounded-2xl text-xs font-semibold text-left border transition-all flex items-center gap-3 ${
                            isSelected
                              ? 'bg-blue-50 dark:bg-blue-950/60 border-blue-500 text-blue-900 dark:text-blue-200 shadow-sm'
                              : 'border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
                          }`}
                        >
                          <div className={`w-6 h-6 rounded-lg flex items-center justify-center font-bold text-xs ${
                            isSelected ? 'bg-blue-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600'
                          }`}>
                            {String.fromCharCode(65 + optIdx)}
                          </div>
                          <span>{opt}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Navigation Controls */}
              <div className="flex justify-between items-center pt-4 border-t border-slate-100 dark:border-slate-800">
                <button
                  disabled={currentQuestionIndex === 0}
                  onClick={() => setCurrentQuestionIndex(prev => Math.max(0, prev - 1))}
                  className="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold disabled:opacity-40"
                >
                  {isHindi ? '← पिछला प्रश्न' : '← Previous'}
                </button>

                {currentQuestionIndex < selectedQuiz.questions.length - 1 ? (
                  <button
                    onClick={() => setCurrentQuestionIndex(prev => prev + 1)}
                    className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center gap-1.5"
                  >
                    {isHindi ? 'अगला प्रश्न →' : 'Next Question →'}
                  </button>
                ) : (
                  <button
                    onClick={handleSubmitQuiz}
                    className="px-6 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs flex items-center gap-1.5 shadow-lg shadow-emerald-600/20"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    {isHindi ? 'परीक्षा सबमिट करें (Submit Test)' : 'Submit & Get Scorecard'}
                  </button>
                )}
              </div>
            </div>
          ) : (
            /* Result Scorecard Screen */
            <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl text-center space-y-6 animate-fadeIn">
              <div className="w-16 h-16 rounded-3xl bg-gradient-to-tr from-emerald-500 to-teal-400 text-white flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/30">
                <Award className="w-8 h-8" />
              </div>

              <div>
                <h2 className="text-xl font-black text-slate-900 dark:text-white">
                  {isHindi ? 'परीक्षा परिणाम पत्र (Test Scorecard)' : 'Online Test Scorecard'}
                </h2>
                <p className="text-xs text-slate-500 mt-1 font-medium">
                  {selectedQuiz.title}
                </p>
              </div>

              {/* Score Metric Badges */}
              <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                  <div className="text-[10px] uppercase font-bold text-slate-400">Score</div>
                  <div className="font-mono font-black text-emerald-600 text-lg sm:text-2xl mt-1">
                    {scoreResult?.earnedMarks} / {scoreResult?.totalMarks}
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                  <div className="text-[10px] uppercase font-bold text-slate-400">Correct</div>
                  <div className="font-mono font-black text-blue-600 text-lg sm:text-2xl mt-1">
                    {scoreResult?.correctCount} / {scoreResult?.totalQuestions}
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                  <div className="text-[10px] uppercase font-bold text-slate-400">Percentage</div>
                  <div className="font-mono font-black text-purple-600 text-lg sm:text-2xl mt-1">
                    {scoreResult?.percentage}%
                  </div>
                </div>
              </div>

              {/* Detailed Breakdown */}
              <div className="space-y-3 text-left max-w-lg mx-auto pt-4 border-t border-slate-100 dark:border-slate-800">
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-500">
                  {isHindi ? 'प्रश्नोत्तरी समीक्षा (Answer Review):' : 'Question Answer Review:'}
                </h4>
                {selectedQuiz.questions.map((q, idx) => {
                  const isCorrect = userAnswers[idx] === q.correctIndex;
                  return (
                    <div
                      key={idx}
                      className={`p-3 rounded-xl border text-xs flex items-start gap-2.5 ${
                        isCorrect
                          ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200'
                          : 'bg-rose-50 dark:bg-rose-950/40 border-rose-200 dark:border-rose-800 text-rose-900 dark:text-rose-200'
                      }`}
                    >
                      {isCorrect ? (
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      ) : (
                        <X className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                      )}
                      <div>
                        <div className="font-bold">Q{idx + 1}. {q.question}</div>
                        <div className="text-[11px] mt-0.5">
                          Your Ans: <strong>{q.options[userAnswers[idx]] || 'Not Answered'}</strong> | Correct: <strong>{q.options[q.correctIndex]}</strong>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Back button */}
              <div className="pt-4">
                <button
                  onClick={() => setActiveTab('tests')}
                  className="px-6 py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-black text-xs hover:opacity-90 transition-all"
                >
                  {isHindi ? 'अन्य परीक्षाएं देखें' : 'Back to Available Tests'}
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default OnlineQuizPage;
