import React, { useState, useEffect, useMemo } from 'react';
import {
  BookMarked,
  Plus,
  BookOpen,
  Search,
  CheckCircle2,
  AlertTriangle,
  RotateCcw,
  QrCode,
  Tag,
  Layers,
  UserCheck,
  Clock,
  Printer,
  Trash2,
  Edit2,
  Calendar,
  AlertCircle,
  FileText,
  DollarSign,
  Bookmark,
  Check,
  X,
  Sparkles
} from 'lucide-react';
import { Badge } from '../components/common/Badge';
import { Modal } from '../components/common/Modal';
import { useToast } from '../components/common/Toast';
import schoolService from '../services/schoolService';

export const LibraryPage = ({ initialTab = 'books' }) => {
  const { showToast } = useToast();
  const [books, setBooks] = useState(() => schoolService.getBooks() || []);
  const [bookIssues, setBookIssues] = useState(() => schoolService.getBookIssues() || []);
  const students = schoolService.getStudents() || [];
  const teachers = schoolService.getTeachers() || [];

  const resolveTab = (tab) => {
    if (!tab) return 'books';
    if (tab === 'lib-books' || tab === 'books' || tab === 'catalog' || tab === 'library') return 'books';
    if (tab === 'lib-category' || tab === 'category') return 'category';
    if (tab === 'lib-my-issued' || tab === 'my-issued') return 'my-issued';
    if (tab === 'lib-issue-return' || tab === 'issue-return' || tab === 'issues') return 'issue-return';
    return tab;
  };

  const [activeTab, setActiveTab] = useState(() => resolveTab(initialTab));

  useEffect(() => {
    if (initialTab) setActiveTab(resolveTab(initialTab));
  }, [initialTab]);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState('All');

  // Book Categories State
  const [categories, setCategories] = useState([
    { id: 'CAT-01', name: 'Science & Technology', code: 'SCI', shelfSection: 'Rack A1 - A4', totalBooks: 420, desc: 'Physics, Chemistry, Biology, Environmental Sciences' },
    { id: 'CAT-02', name: 'Mathematics & Statistics', code: 'MTH', shelfSection: 'Rack B1 - B3', totalBooks: 280, desc: 'NCERT, RD Sharma, RS Aggarwal, Olympiad Guides' },
    { id: 'CAT-03', name: 'Literature & Languages', code: 'LIT', shelfSection: 'Rack C1 - C5', totalBooks: 650, desc: 'Hindi, English Classics, Poetry, Biographies' },
    { id: 'CAT-04', name: 'Social Studies & History', code: 'SST', shelfSection: 'Rack D1 - D3', totalBooks: 310, desc: 'World History, Indian Polity, Geography Atlas' },
    { id: 'CAT-05', name: 'Computer Science & AI', code: 'CS', shelfSection: 'Rack E1 - E2', totalBooks: 190, desc: 'Python, Web Design, AI, Scratch Programming' },
    { id: 'CAT-06', name: 'Encyclopedias & Reference', code: 'REF', shelfSection: 'Rack R1 - R4', totalBooks: 150, desc: 'Britannica, World Yearbooks, Dictionaries' },
    { id: 'CAT-07', name: 'Competitive Exams & GK', code: 'COMP', shelfSection: 'Rack G1 - G3', totalBooks: 240, desc: 'JEE, NEET, NTSE, NDA, Current Affairs' }
  ]);

  // My Issued Books (Student/Faculty Personal View)
  const [myIssuedBooks, setMyIssuedBooks] = useState([
    { id: 'ISS-01', bookTitle: 'Concepts of Physics (Vol 1)', author: 'Dr. H.C. Verma', isbn: '978-8177091878', issueDate: '2026-08-20', dueDate: '2026-09-04', status: 'Issued', fine: 0, rack: 'A2' },
    { id: 'ISS-02', bookTitle: 'Secondary School Mathematics Class 10', author: 'R.S. Aggarwal', isbn: '978-9388704250', issueDate: '2026-08-15', dueDate: '2026-08-30', status: 'Overdue (3 Days)', fine: 15, rack: 'B1' },
    { id: 'ISS-03', bookTitle: 'First Flight - English Class 10', author: 'NCERT Publications', isbn: '978-8174507099', issueDate: '2026-08-01', dueDate: '2026-08-15', status: 'Returned', fine: 0, rack: 'C3' }
  ]);

  // Modals State
  const [isAddBookModalOpen, setIsAddBookModalOpen] = useState(false);
  const [isAddCategoryModalOpen, setIsAddCategoryModalOpen] = useState(false);
  const [isIssueModalOpen, setIsIssueModalOpen] = useState(false);

  // Form States
  const [bookForm, setBookForm] = useState({
    title: '',
    author: '',
    isbn: '',
    category: 'Science & Technology',
    publisher: 'NCERT / Pearson',
    rack: 'Rack A1',
    totalCopies: 5,
    price: 350
  });

  const [categoryForm, setCategoryForm] = useState({
    name: '',
    code: '',
    shelfSection: '',
    desc: ''
  });

  const [issueForm, setIssueForm] = useState({
    bookId: books[0]?.id || 'BK-01',
    studentId: students[0]?.id || '',
    borrowerType: 'Student',
    dueDate: '2026-09-15'
  });

  const refreshLibrary = () => {
    setBooks([...schoolService.getBooks()]);
    setBookIssues([...schoolService.getBookIssues()]);
  };

  const handleIssueBook = (e) => {
    e.preventDefault();
    const issue = schoolService.issueBook(issueForm.bookId, issueForm.studentId, issueForm.dueDate);
    if (issue) {
      refreshLibrary();
      setIsIssueModalOpen(false);
      showToast(`Book "${issue.bookTitle}" issued to ${issue.studentName}! 📖`, 'success');
    } else {
      showToast('Book copies currently unavailable', 'error');
    }
  };

  const handleReturnBook = (issueId) => {
    const res = schoolService.returnBook(issueId);
    if (res) {
      refreshLibrary();
      showToast(`Book return confirmed for "${res.bookTitle}"! ✅`, 'success');
    }
  };

  const handleAddBook = (e) => {
    e.preventDefault();
    if (!bookForm.title || !bookForm.isbn) return;
    const newBook = {
      id: `BK-${Date.now().toString().slice(-4)}`,
      ...bookForm,
      availableCopies: Number(bookForm.totalCopies) || 5,
      totalCopies: Number(bookForm.totalCopies) || 5
    };
    setBooks([...books, newBook]);
    setIsAddBookModalOpen(false);
    setBookForm({ title: '', author: '', isbn: '', category: 'Science & Technology', publisher: 'NCERT / Pearson', rack: 'Rack A1', totalCopies: 5, price: 350 });
    showToast(`Book "${newBook.title}" added to library catalog! 📚`, 'success');
  };

  const handleAddCategory = (e) => {
    e.preventDefault();
    if (!categoryForm.name) return;
    const newCat = {
      id: `CAT-${String(categories.length + 1).padStart(2, '0')}`,
      ...categoryForm,
      totalBooks: 0
    };
    setCategories([...categories, newCat]);
    setIsAddCategoryModalOpen(false);
    setCategoryForm({ name: '', code: '', shelfSection: '', desc: '' });
    showToast(`Category "${newCat.name}" created! 🏷️`, 'success');
  };

  const filteredBooks = books.filter(b => {
    const matchSearch = (b.title || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
      (b.author || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
      (b.isbn || '').includes(searchQuery);
    const matchCat = selectedCategoryFilter === 'All' || b.category === selectedCategoryFilter;
    return matchSearch && matchCat;
  });

  return (
    <div className="space-y-6 animate-in fade-in duration-300">

      {/* 🧭 Top Library Master Navigation Tabs */}
      <div className="bg-white dark:bg-slate-900 p-1.5 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm overflow-x-auto custom-scrollbar print:hidden">
        <div className="flex items-center gap-2 min-w-max text-xs font-bold">
          <button
            onClick={() => setActiveTab('books')}
            className={`px-4 py-2 rounded-xl transition-all flex items-center gap-1.5 ${
              activeTab === 'books' ? 'bg-indigo-600 text-white shadow-md font-black' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <BookOpen className="w-4 h-4" /> Books ({books.length})
          </button>
          <button
            onClick={() => setActiveTab('category')}
            className={`px-4 py-2 rounded-xl transition-all flex items-center gap-1.5 ${
              activeTab === 'category' ? 'bg-indigo-600 text-white shadow-md font-black' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <Tag className="w-4 h-4" /> Books Category ({categories.length})
          </button>
          <button
            onClick={() => setActiveTab('my-issued')}
            className={`px-4 py-2 rounded-xl transition-all flex items-center gap-1.5 ${
              activeTab === 'my-issued' ? 'bg-indigo-600 text-white shadow-md font-black' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <Bookmark className="w-4 h-4" /> My Issued Book ({myIssuedBooks.length})
          </button>
          <button
            onClick={() => setActiveTab('issue-return')}
            className={`px-4 py-2 rounded-xl transition-all flex items-center gap-1.5 ${
              activeTab === 'issue-return' ? 'bg-indigo-600 text-white shadow-md font-black' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <RotateCcw className="w-4 h-4" /> Book Issue/return Desk ({bookIssues.length})
          </button>
        </div>
      </div>

      {/* 📚 1. BOOKS CATALOG */}
      {activeTab === 'books' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
            <div>
              <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-indigo-600" /> Library Books Catalog Master
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">Comprehensive catalog of all reference books, textbooks, literature, and journals</p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <div className="relative w-48">
                <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search book / ISBN..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-8 pr-3 py-1.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800"
                />
              </div>

              <select
                value={selectedCategoryFilter}
                onChange={(e) => setSelectedCategoryFilter(e.target.value)}
                className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 font-bold text-xs"
              >
                <option value="All">All Categories</option>
                {categories.map(c => (
                  <option key={c.id} value={c.name}>{c.name}</option>
                ))}
              </select>

              <button
                onClick={() => setIsAddBookModalOpen(true)}
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow flex items-center gap-1.5 hover:scale-105 active:scale-95 transition-all"
              >
                <Plus className="w-4 h-4" /> Add New Book
              </button>
            </div>
          </div>

          <div className="border border-slate-200 dark:border-slate-700 rounded-2xl overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-black uppercase text-[10px]">
                <tr>
                  <th className="p-3.5">Book Title & Author</th>
                  <th className="p-3.5">ISBN Number</th>
                  <th className="p-3.5">Category</th>
                  <th className="p-3.5">Rack / Shelf</th>
                  <th className="p-3.5 text-center">Available / Total</th>
                  <th className="p-3.5">Price</th>
                  <th className="p-3.5 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {filteredBooks.map(book => (
                  <tr key={book.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="p-3.5">
                      <div className="font-bold text-slate-900 dark:text-white">{book.title}</div>
                      <div className="text-[10px] text-slate-400">by {book.author}</div>
                    </td>
                    <td className="p-3.5 font-mono text-indigo-600 font-bold">{book.isbn}</td>
                    <td className="p-3.5">
                      <Badge variant="purple" size="sm">{book.category || 'General'}</Badge>
                    </td>
                    <td className="p-3.5 font-mono text-slate-600 dark:text-slate-300">{book.rack || 'Rack A1'}</td>
                    <td className="p-3.5 text-center">
                      <span className={`font-mono font-bold px-2 py-0.5 rounded text-[11px] ${book.availableCopies > 0 ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300' : 'bg-rose-100 text-rose-800'}`}>
                        {book.availableCopies} / {book.totalCopies} Copies
                      </span>
                    </td>
                    <td className="p-3.5 font-mono font-bold text-slate-700 dark:text-slate-300">₹{book.price || 350}</td>
                    <td className="p-3.5 text-right">
                      <div className="flex items-center justify-end gap-1">
                        <button
                          onClick={() => {
                            setIssueForm(prev => ({ ...prev, bookId: book.id }));
                            setIsIssueModalOpen(true);
                          }}
                          className="px-2.5 py-1 bg-indigo-50 text-indigo-600 hover:bg-indigo-100 font-bold rounded-lg text-[10px]"
                        >
                          Issue
                        </button>
                        <button
                          onClick={() => {
                            if (window.confirm(`Delete "${book.title}" from catalog?`)) {
                              setBooks(books.filter(b => b.id !== book.id));
                              showToast(`Book "${book.title}" deleted`, 'info');
                            }
                          }}
                          className="p-1 rounded-lg text-rose-600 hover:bg-rose-50"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* 🏷️ 2. BOOKS CATEGORY */}
      {activeTab === 'category' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5">
          <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-800 pb-3">
            <div>
              <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                <Tag className="w-5 h-5 text-indigo-600" /> Library Book Categories & Shelf Sections
              </h3>
              <p className="text-xs text-slate-500">Categorize inventory into subject departments and library shelf zones</p>
            </div>
            <button
              onClick={() => setIsAddCategoryModalOpen(true)}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow flex items-center gap-1.5"
            >
              <Plus className="w-4 h-4" /> Add Category
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map(cat => (
              <div key={cat.id} className="p-5 rounded-3xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2.5 hover:border-indigo-400 transition-all">
                <div className="flex justify-between items-center">
                  <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">
                    {cat.code}
                  </span>
                  <Badge variant="primary">{cat.shelfSection}</Badge>
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white text-base">{cat.name}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{cat.desc}</p>
                <div className="pt-2 border-t border-slate-200 dark:border-slate-700 flex justify-between items-center text-xs font-bold text-slate-700 dark:text-slate-300">
                  <span>Inventory Count:</span>
                  <span className="font-mono text-emerald-600">{cat.totalBooks} Volumes</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 🔖 3. MY ISSUED BOOK */}
      {activeTab === 'my-issued' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-3 flex justify-between items-center">
            <div>
              <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                <Bookmark className="w-5 h-5 text-indigo-600" /> My Borrowed Books & Due Date Tracker
              </h3>
              <p className="text-xs text-slate-500">Track your active library loans, return due dates, and fine balance</p>
            </div>
            <Badge variant="primary">{myIssuedBooks.length} Active Loans</Badge>
          </div>

          <div className="border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-black uppercase text-[10px]">
                <tr>
                  <th className="p-3.5">Book Title</th>
                  <th className="p-3.5">Author</th>
                  <th className="p-3.5">ISBN</th>
                  <th className="p-3.5 font-mono">Issued On</th>
                  <th className="p-3.5 font-mono">Return Due Date</th>
                  <th className="p-3.5">Overdue Fine</th>
                  <th className="p-3.5 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {myIssuedBooks.map(b => (
                  <tr key={b.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="p-3.5 font-bold text-slate-900 dark:text-white">{b.bookTitle}</td>
                    <td className="p-3.5 text-slate-500">{b.author}</td>
                    <td className="p-3.5 font-mono text-indigo-600 font-bold">{b.isbn}</td>
                    <td className="p-3.5 font-mono text-slate-600 dark:text-slate-300">{b.issueDate}</td>
                    <td className="p-3.5 font-mono font-bold text-slate-900 dark:text-white">{b.dueDate}</td>
                    <td className="p-3.5 font-mono font-bold text-rose-500">₹{b.fine}</td>
                    <td className="p-3.5 text-right">
                      <Badge variant={b.status === 'Returned' ? 'success' : b.status.includes('Overdue') ? 'danger' : 'primary'}>
                        {b.status}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* 🔄 4. BOOK ISSUE/RETURN DESK */}
      {activeTab === 'issue-return' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
            <div>
              <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                <RotateCcw className="w-5 h-5 text-indigo-600" /> Book Issue & Return Circulation Counter
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">Manage borrow check-outs, return confirmations, and overdue fine collection</p>
            </div>

            <button
              onClick={() => setIsIssueModalOpen(true)}
              className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow flex items-center gap-2 hover:scale-105 active:scale-95 transition-all"
            >
              <Plus className="w-4 h-4" /> Issue Book (Check-Out)
            </button>
          </div>

          <div className="border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-black uppercase text-[10px]">
                <tr>
                  <th className="p-3.5">Book Title</th>
                  <th className="p-3.5">Borrower (Student/Staff)</th>
                  <th className="p-3.5">Class / Role</th>
                  <th className="p-3.5 font-mono">Issue Date</th>
                  <th className="p-3.5 font-mono">Due Date</th>
                  <th className="p-3.5">Status</th>
                  <th className="p-3.5 text-right">Circulation Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {bookIssues.map(issue => (
                  <tr key={issue.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="p-3.5 font-bold text-slate-900 dark:text-white">{issue.bookTitle}</td>
                    <td className="p-3.5 font-semibold text-slate-800 dark:text-slate-200">{issue.studentName}</td>
                    <td className="p-3.5 text-slate-500">{issue.class || 'Student'}</td>
                    <td className="p-3.5 font-mono text-slate-500">{issue.issueDate}</td>
                    <td className="p-3.5 font-mono font-bold text-slate-900 dark:text-white">{issue.dueDate}</td>
                    <td className="p-3.5">
                      <Badge variant={issue.status === 'Returned' ? 'success' : 'warning'}>
                        {issue.status}
                      </Badge>
                    </td>
                    <td className="p-3.5 text-right">
                      {issue.status !== 'Returned' ? (
                        <button
                          onClick={() => handleReturnBook(issue.id)}
                          className="px-3 py-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg text-[11px] shadow-sm flex items-center gap-1 ml-auto"
                        >
                          <Check className="w-3.5 h-3.5" /> Confirm Return
                        </button>
                      ) : (
                        <span className="text-slate-400 font-bold text-[10px]">Returned on {issue.returnDate || 'Today'}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 📦 MODALS */}
      {/* ========================================================================= */}

      {/* Add Book Modal */}
      {isAddBookModalOpen && (
        <Modal
          isOpen={isAddBookModalOpen}
          onClose={() => setIsAddBookModalOpen(false)}
          title="📚 Add New Book to Library Catalog"
          maxWidth="max-w-md"
        >
          <form onSubmit={handleAddBook} className="space-y-4 text-xs">
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Book Title *</label>
              <input
                type="text"
                required
                placeholder="e.g. Higher Algebra"
                value={bookForm.title}
                onChange={(e) => setBookForm({ ...bookForm, title: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-bold"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Author Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Hall & Knight"
                  value={bookForm.author}
                  onChange={(e) => setBookForm({ ...bookForm, author: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-bold"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">ISBN Number *</label>
                <input
                  type="text"
                  required
                  placeholder="978-8177091878"
                  value={bookForm.isbn}
                  onChange={(e) => setBookForm({ ...bookForm, isbn: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-mono font-bold"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Category</label>
                <select
                  value={bookForm.category}
                  onChange={(e) => setBookForm({ ...bookForm, category: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 font-bold"
                >
                  {categories.map(c => (
                    <option key={c.id} value={c.name}>{c.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Rack / Shelf</label>
                <input
                  type="text"
                  placeholder="Rack B2"
                  value={bookForm.rack}
                  onChange={(e) => setBookForm({ ...bookForm, rack: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-bold"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Total Copies</label>
                <input
                  type="number"
                  min="1"
                  value={bookForm.totalCopies}
                  onChange={(e) => setBookForm({ ...bookForm, totalCopies: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-bold"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Book Price (₹)</label>
                <input
                  type="number"
                  value={bookForm.price}
                  onChange={(e) => setBookForm({ ...bookForm, price: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-mono font-bold"
                />
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
              <button
                type="button"
                onClick={() => setIsAddBookModalOpen(false)}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-500 hover:bg-slate-100"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow"
              >
                Add Book
              </button>
            </div>
          </form>
        </Modal>
      )}

      {/* Add Category Modal */}
      {isAddCategoryModalOpen && (
        <Modal
          isOpen={isAddCategoryModalOpen}
          onClose={() => setIsAddCategoryModalOpen(false)}
          title="🏷️ Add Library Book Category"
          maxWidth="max-w-md"
        >
          <form onSubmit={handleAddCategory} className="space-y-4 text-xs">
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Category Name *</label>
              <input
                type="text"
                required
                placeholder="e.g. Sanskrit & Vedic Studies"
                value={categoryForm.name}
                onChange={(e) => setCategoryForm({ ...categoryForm, name: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-bold"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Code</label>
                <input
                  type="text"
                  placeholder="SKT"
                  value={categoryForm.code}
                  onChange={(e) => setCategoryForm({ ...categoryForm, code: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-mono uppercase"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Shelf / Section</label>
                <input
                  type="text"
                  placeholder="Rack S1 - S2"
                  value={categoryForm.shelfSection}
                  onChange={(e) => setCategoryForm({ ...categoryForm, shelfSection: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-bold"
                />
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
              <button
                type="button"
                onClick={() => setIsAddCategoryModalOpen(false)}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-500 hover:bg-slate-100"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow"
              >
                Save Category
              </button>
            </div>
          </form>
        </Modal>
      )}

      {/* Issue Book Modal */}
      {isIssueModalOpen && (
        <Modal
          isOpen={isIssueModalOpen}
          onClose={() => setIsIssueModalOpen(false)}
          title="📖 Issue Book (Check-Out Desk)"
          maxWidth="max-w-md"
        >
          <form onSubmit={handleIssueBook} className="space-y-4 text-xs">
            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Select Book *</label>
              <select
                value={issueForm.bookId}
                onChange={(e) => setIssueForm({ ...issueForm, bookId: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 font-bold"
              >
                {books.map(b => (
                  <option key={b.id} value={b.id}>
                    {b.title} ({b.availableCopies} available)
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Borrower Student / Member *</label>
              <select
                value={issueForm.studentId}
                onChange={(e) => setIssueForm({ ...issueForm, studentId: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 font-bold"
              >
                {students.map(s => (
                  <option key={s.id} value={s.id}>{s.name} ({s.class} • Roll #{s.rollNo})</option>
                ))}
              </select>
            </div>

            <div>
              <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Return Due Date *</label>
              <input
                type="date"
                required
                value={issueForm.dueDate}
                onChange={(e) => setIssueForm({ ...issueForm, dueDate: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-bold"
              />
            </div>

            <div className="flex justify-end gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
              <button
                type="button"
                onClick={() => setIsIssueModalOpen(false)}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-500 hover:bg-slate-100"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow"
              >
                Confirm Issue
              </button>
            </div>
          </form>
        </Modal>
      )}

    </div>
  );
};

export default LibraryPage;
