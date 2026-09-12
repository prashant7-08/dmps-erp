import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

export const Breadcrumb = ({ items = [], onNavigate }) => {
  return (
    <nav className="flex items-center gap-2 text-xs text-slate-500 py-3 mb-6 border-b border-slate-200">
      <button
        onClick={() => onNavigate('home')}
        className="flex items-center gap-1 hover:text-indigo-600 transition-colors font-medium"
      >
        <Home className="w-3.5 h-3.5" />
        <span>Home</span>
      </button>

      {items.map((item, idx) => {
        const isLast = idx === items.length - 1;
        return (
          <React.Fragment key={idx}>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            {isLast || !item.page ? (
              <span className="font-bold text-slate-900">{item.label}</span>
            ) : (
              <button
                onClick={() => onNavigate(item.page)}
                className="hover:text-indigo-600 transition-colors font-medium"
              >
                {item.label}
              </button>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;
