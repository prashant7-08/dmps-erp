/**
 * Universal School Class Normalization & Matching Engine
 * Handles Roman Numerals (I-XII), English ordinals (1st-12th), standard numbers (1-12),
 * and Kindergarten wing codes (PG, Nursery, LKG, UKG).
 */

export const normalizeClassLevel = (cls) => {
  if (cls === null || cls === undefined) return '';
  const raw = String(cls).trim().toUpperCase()
    .replace(/^CLASS\s*/i, '')
    .replace(/^CLS-?/i, '')
    .replace(/\s+/g, '');

  const map = {
    // Playgroup
    'PG': 'PG',
    'PLAYGROUP': 'PG',
    'PLAYGROUP(PG)': 'PG',
    'PLAY-GROUP': 'PG',

    // Nursery
    'NUR': 'NURSERY',
    'NURSERY': 'NURSERY',

    // Kindergarten
    'LKG': 'LKG',
    'KG1': 'LKG',
    'KG-1': 'LKG',
    'UKG': 'UKG',
    'KG2': 'UKG',
    'KG-2': 'UKG',

    // Primary & Upper
    '1': '1', '1ST': '1', 'I': '1', '1ST(I)': '1',
    '2': '2', '2ND': '2', 'II': '2', '2ND(II)': '2',
    '3': '3', '3RD': '3', 'III': '3', '3RD(III)': '3',
    '4': '4', '4TH': '4', 'IV': '4', '4TH(IV)': '4',
    '5': '5', '5TH': '5', 'V': '5', '5TH(V)': '5',
    '6': '6', '6TH': '6', 'VI': '6', '6TH(VI)': '6',
    '7': '7', '7TH': '7', 'VII': '7', '7TH(VII)': '7',
    '8': '8', '8TH': '8', 'VIII': '8', '8TH(VIII)': '8',
    '9': '9', '9TH': '9', 'IX': '9', '9TH(IX)': '9',
    '10': '10', '10TH': '10', 'X': '10', '10TH(X)': '10',
    '11': '11', '11TH': '11', 'XI': '11', '11TH(XI)': '11',
    '12': '12', '12TH': '12', 'XII': '12', '12TH(XII)': '12'
  };

  return map[raw] || raw;
};

export const isClassMatch = (studentClass, filterClass) => {
  if (!filterClass || filterClass === 'All' || filterClass === 'ALL' || filterClass === 'all') {
    return true;
  }
  if (!studentClass) return false;
  return normalizeClassLevel(studentClass) === normalizeClassLevel(filterClass);
};

export const STANDARD_CLASS_OPTIONS = [
  { value: 'All', label: 'All Classes (सभी कक्षाएं)' },
  { value: 'PG', label: 'Playgroup (PG)' },
  { value: 'NURSERY', label: 'Nursery' },
  { value: 'LKG', label: 'LKG' },
  { value: 'UKG', label: 'UKG' },
  { value: '1st', label: 'Class 1st (I)' },
  { value: '2nd', label: 'Class 2nd (II)' },
  { value: '3rd', label: 'Class 3rd (III)' },
  { value: '4th', label: 'Class 4th (IV)' },
  { value: '5th', label: 'Class 5th (V)' },
  { value: '6th', label: 'Class 6th (VI)' },
  { value: '7th', label: 'Class 7th (VII)' },
  { value: '8th', label: 'Class 8th (VIII)' },
  { value: '9th', label: 'Class 9th (IX)' },
  { value: '10th', label: 'Class 10th (X)' },
  { value: '11th', label: 'Class 11th (XI)' },
  { value: '12th', label: 'Class 12th (XII)' }
];
