// Comprehensive Seed Database for School ERP System
export const initialSchoolData = {
  schoolInfo: {
    id: "SCH-001",
    name: "Dadheech Memorial Public School",
    tagline: "Excellence in Education, Discipline & Character Building",
    logo: "https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?w=150&auto=format&fit=crop&q=80",
    address: "Institutional Area, Main Road, New Delhi / UP",
    phone: "+91 98765 43210, +91 11 2789 4500",
    email: "info@dmps-school.edu.in",
    website: "https://www.dmps-school.edu.in",
    affiliation: "CBSE (Central Board of Secondary Education)",
    affiliationNo: "CBSE/AFF/2026/213098",
    schoolCode: "DMPS-2026",
    medium: "English",
    principalName: "Dr. Arvind Shrivastava, Ph.D.",
    academicSession: "2026-2027",
    timings: {
      summer: "07:30 AM - 01:30 PM",
      winter: "08:00 AM - 02:00 PM"
    },
    workingDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    gradingSystem: [
      { grade: "A1", minMarks: 91, maxMarks: 100, gradePoint: 10, remark: "Outstanding" },
      { grade: "A2", minMarks: 81, maxMarks: 90, gradePoint: 9, remark: "Excellent" },
      { grade: "B1", minMarks: 71, maxMarks: 80, gradePoint: 8, remark: "Very Good" },
      { grade: "B2", minMarks: 61, maxMarks: 70, gradePoint: 7, remark: "Good" },
      { grade: "C1", minMarks: 51, maxMarks: 60, gradePoint: 6, remark: "Above Average" },
      { grade: "C2", minMarks: 41, maxMarks: 50, gradePoint: 5, remark: "Average" },
      { grade: "D", minMarks: 33, maxMarks: 40, gradePoint: 4, remark: "Pass" },
      { grade: "E", minMarks: 0, maxMarks: 32, gradePoint: 0, remark: "Needs Improvement" }
    ],
    holidays: [
      { date: "2026-08-15", name: "Independence Day", type: "National" },
      { date: "2026-10-02", name: "Gandhi Jayanti", type: "National" },
      { date: "2026-10-20", name: "Dussehra", type: "Gazetted" },
      { date: "2026-11-09", name: "Diwali Break", type: "Festival" },
      { date: "2026-12-25", name: "Christmas Day", type: "Gazetted" },
      { date: "2027-01-26", name: "Republic Day", type: "National" }
    ]
  },

  academicSessions: [
    { id: "SESS-2026-27", name: "2026-2027", isCurrent: true, startDate: "2026-04-01", endDate: "2027-03-31" },
    { id: "SESS-2025-26", name: "2025-2026", isCurrent: false, startDate: "2025-04-01", endDate: "2026-03-31" }
  ],

  branches: [
    {
      id: "BR-01",
      name: "DMPS Main Campus (Senior Wing)",
      code: "BR-01",
      shortCode: "MAIN",
      address: "Main Institutional Area, Knowledge Park",
      phone: "+91 98765 43210",
      headName: "Dr. Arvind Shrivastava (Principal)",
      classesOffered: "Class 6 to Class 12",
      totalStudents: 680,
      totalStaff: 42,
      status: "Active",
      isMain: true
    },
    {
      id: "BR-02",
      name: "DMPS City Campus (Primary Wing)",
      code: "BR-02",
      shortCode: "CITY",
      address: "City Center Road, Civil Lines",
      phone: "+91 98110 55443",
      headName: "Mrs. Shalini Mehra (Headmistress)",
      classesOffered: "Nursery to Class 5",
      totalStudents: 420,
      totalStaff: 24,
      status: "Active",
      isMain: false
    },
    {
      id: "BR-03",
      name: "DMPS Public Branch (Sector 62 Campus)",
      code: "BR-03",
      shortCode: "SEC62",
      address: "Plot 12, Sector 62 Institutional Zone",
      phone: "+91 98220 66778",
      headName: "Mr. Alok Mukherjee (In-Charge)",
      classesOffered: "Class 1 to Class 10",
      totalStudents: 350,
      totalStaff: 18,
      status: "Active",
      isMain: false
    },
    {
      id: "BR-04",
      name: "Branch 4 (Unassigned / Blank)",
      code: "BR-04",
      shortCode: "BR-04",
      address: "",
      phone: "",
      headName: "",
      classesOffered: "",
      totalStudents: 0,
      totalStaff: 0,
      status: "Upcoming / Blank",
      isMain: false
    }
  ],

  departments: [
    { id: "DEP-01", name: "Science", hod: "Dr. Rajesh Sharma", staffCount: 14 },
    { id: "DEP-02", name: "Mathematics", hod: "Mrs. Sunita Verma", staffCount: 10 },
    { id: "DEP-03", name: "Humanities & Social Sciences", hod: "Mr. Alok Mukherjee", staffCount: 12 },
    { id: "DEP-04", name: "Commerce & Economics", hod: "Mrs. Meenakshi Gupta", staffCount: 8 },
    { id: "DEP-05", name: "Computer Science & IT", hod: "Mr. Vikrant Rao", staffCount: 6 },
    { id: "DEP-06", name: "Physical Education & Sports", hod: "Coach Jaswinder Singh", staffCount: 5 },
    { id: "DEP-07", name: "Fine Arts & Music", hod: "Mrs. Ananya Sen", staffCount: 4 }
  ],

  classes: [
    { id: "CLS-01", name: "Class 1", sections: ["A", "B"], wing: "Primary", maxStrength: 40 },
    { id: "CLS-02", name: "Class 2", sections: ["A", "B"], wing: "Primary", maxStrength: 40 },
    { id: "CLS-03", name: "Class 3", sections: ["A", "B"], wing: "Primary", maxStrength: 40 },
    { id: "CLS-04", name: "Class 4", sections: ["A", "B"], wing: "Primary", maxStrength: 40 },
    { id: "CLS-05", name: "Class 5", sections: ["A", "B"], wing: "Primary", maxStrength: 40 },
    { id: "CLS-06", name: "Class 6", sections: ["A", "B", "C"], wing: "Middle", maxStrength: 40 },
    { id: "CLS-07", name: "Class 7", sections: ["A", "B", "C"], wing: "Middle", maxStrength: 40 },
    { id: "CLS-08", name: "Class 8", sections: ["A", "B", "C"], wing: "Middle", maxStrength: 40 },
    { id: "CLS-09", name: "Class 9", sections: ["A", "B", "C"], wing: "Secondary", maxStrength: 45 },
    { id: "CLS-10", name: "Class 10", sections: ["A", "B", "C"], wing: "Secondary", maxStrength: 45 },
    { id: "CLS-11", name: "Class 11", sections: ["Science", "Commerce", "Humanities"], wing: "Senior Secondary", maxStrength: 50 },
    { id: "CLS-12", name: "Class 12", sections: ["Science", "Commerce", "Humanities"], wing: "Senior Secondary", maxStrength: 50 }
  ],

  houses: [
    { id: "HSE-1", name: "Phoenix (Red House)", color: "#EF4444", motto: "Rising with Courage", master: "Mr. Alok Mukherjee" },
    { id: "HSE-2", name: "Dragons (Blue House)", color: "#3B82F6", motto: "Strength in Wisdom", master: "Mrs. Sunita Verma" },
    { id: "HSE-3", name: "Titans (Green House)", color: "#10B981", motto: "Perseverance & Growth", master: "Dr. Rajesh Sharma" },
    { id: "HSE-4", name: "Warriors (Yellow House)", color: "#F59E0B", motto: "Victory through Discipline", master: "Mrs. Meenakshi Gupta" }
  ],

  subjects: [
    { id: "SUB-01", code: "ENG-101", name: "English Language & Literature", class: "Class 10", type: "Theory", maxMarks: 100, passMarks: 33, teacher: "Mrs. Kavita Iyer", credits: 4 },
    { id: "SUB-02", code: "MAT-102", name: "Mathematics Standard", class: "Class 10", type: "Theory + Internal", maxMarks: 100, passMarks: 33, teacher: "Mrs. Sunita Verma", credits: 5 },
    { id: "SUB-03", code: "SCI-103", name: "Science (Phy/Chem/Bio)", class: "Class 10", type: "Theory + Practical", maxMarks: 100, passMarks: 33, teacher: "Dr. Rajesh Sharma", credits: 5 },
    { id: "SUB-04", code: "SST-104", name: "Social Science", class: "Class 10", type: "Theory", maxMarks: 100, passMarks: 33, teacher: "Mr. Alok Mukherjee", credits: 4 },
    { id: "SUB-05", code: "HIN-105", name: "Hindi Course-A", class: "Class 10", type: "Theory", maxMarks: 100, passMarks: 33, teacher: "Dr. Ramesh Chandra", credits: 4 },
    { id: "SUB-06", code: "CS-106", name: "Computer Applications / IT", class: "Class 10", type: "Theory + Practical", maxMarks: 100, passMarks: 33, teacher: "Mr. Vikrant Rao", credits: 3 },
    { id: "SUB-07", code: "PHY-111", name: "Physics", class: "Class 12", type: "Theory + Practical", maxMarks: 100, passMarks: 33, teacher: "Dr. Rajesh Sharma", credits: 5 },
    { id: "SUB-08", code: "CHE-112", name: "Chemistry", class: "Class 12", type: "Theory + Practical", maxMarks: 100, passMarks: 33, teacher: "Mrs. Priyanka Joshi", credits: 5 },
    { id: "SUB-09", code: "BIO-113", name: "Biology", class: "Class 12", type: "Theory + Practical", maxMarks: 100, passMarks: 33, teacher: "Dr. Meenal Roy", credits: 5 },
    { id: "SUB-10", code: "ECO-114", name: "Economics", class: "Class 12", type: "Theory + Project", maxMarks: 100, passMarks: 33, teacher: "Mrs. Meenakshi Gupta", credits: 4 }
  ],

  teachers: [
    {
      id: "TCH-1001",
      employeeId: "EMP-2021-042",
      name: "Dr. Rajesh Sharma",
      photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
      gender: "Male",
      dob: "1982-05-14",
      mobile: "+91 98112 34567",
      email: "rajesh.sharma@dpga-delhi.edu.in",
      address: "B-402, Green Valley Apts, Dwarka, New Delhi",
      qualification: "M.Sc. Physics, Ph.D., B.Ed.",
      specialization: "Quantum Mechanics & Optics",
      experience: "14 Years",
      joiningDate: "2018-07-01",
      department: "Science",
      designation: "Senior PGT Physics & HOD",
      employmentType: "Permanent",
      salary: {
        basic: 68000,
        hra: 18000,
        da: 12500,
        specialAllowance: 5000,
        pfDeduction: 8160,
        taxDeduction: 6200,
        netSalary: 89140
      },
      bankDetails: {
        accountNo: "91802003847291",
        bankName: "State Bank of India",
        ifsc: "SBIN0004521"
      },
      classTeacherOf: "Class 10 - A",
      assignedSubjects: ["Physics (Class 12)", "Science (Class 10-A)"]
    },
    {
      id: "TCH-1002",
      employeeId: "EMP-2020-019",
      name: "Mrs. Sunita Verma",
      photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
      gender: "Female",
      dob: "1985-09-22",
      mobile: "+91 98223 45678",
      email: "sunita.verma@dpga-delhi.edu.in",
      address: "C-12, Palm Grove, Rohini, New Delhi",
      qualification: "M.Sc. Mathematics, B.Ed.",
      specialization: "Calculus & Algebra",
      experience: "11 Years",
      joiningDate: "2020-04-15",
      department: "Mathematics",
      designation: "PGT Mathematics & HOD",
      employmentType: "Permanent",
      salary: {
        basic: 62000,
        hra: 16000,
        da: 11000,
        specialAllowance: 4500,
        pfDeduction: 7440,
        taxDeduction: 5100,
        netSalary: 80960
      },
      bankDetails: {
        accountNo: "40928172635412",
        bankName: "HDFC Bank",
        ifsc: "HDFC0001092"
      },
      classTeacherOf: "Class 10 - B",
      assignedSubjects: ["Mathematics (Class 10-A)", "Mathematics (Class 10-B)"]
    },
    {
      id: "TCH-1003",
      employeeId: "EMP-2022-088",
      name: "Mr. Vikrant Rao",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
      gender: "Male",
      dob: "1990-11-03",
      mobile: "+91 98334 56789",
      email: "vikrant.rao@dpga-delhi.edu.in",
      address: "Flat 104, Royal Palms, Noida Sec 62",
      qualification: "M.Tech Computer Science",
      specialization: "Artificial Intelligence & Web Tech",
      experience: "8 Years",
      joiningDate: "2022-06-10",
      department: "Computer Science & IT",
      designation: "TGT Computer Science",
      employmentType: "Permanent",
      salary: {
        basic: 52000,
        hra: 14000,
        da: 9500,
        specialAllowance: 4000,
        pfDeduction: 6240,
        taxDeduction: 3800,
        netSalary: 69460
      },
      bankDetails: {
        accountNo: "50100239485721",
        bankName: "ICICI Bank",
        ifsc: "ICIC0000843"
      },
      classTeacherOf: "Class 9 - A",
      assignedSubjects: ["Computer Applications (Class 10)", "Computer Science (Class 11/12)"]
    },
    {
      id: "TCH-1004",
      employeeId: "EMP-2019-012",
      name: "Mrs. Meenakshi Gupta",
      photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
      gender: "Female",
      dob: "1983-02-18",
      mobile: "+91 98445 67890",
      email: "meenakshi.gupta@dpga-delhi.edu.in",
      address: "A-504, Windsor Park, Indirapuram, Ghaziabad",
      qualification: "M.Com, M.Phil, B.Ed.",
      specialization: "Accountancy & Macroeconomics",
      experience: "13 Years",
      joiningDate: "2019-01-08",
      department: "Commerce & Economics",
      designation: "PGT Commerce",
      employmentType: "Permanent",
      salary: {
        basic: 64000,
        hra: 17000,
        da: 11500,
        specialAllowance: 4500,
        pfDeduction: 7680,
        taxDeduction: 5500,
        netSalary: 83820
      },
      bankDetails: {
        accountNo: "6293847162534",
        bankName: "Axis Bank",
        ifsc: "UTIB0000542"
      },
      classTeacherOf: "Class 12 - Commerce",
      assignedSubjects: ["Economics (Class 12)", "Accountancy (Class 11)"]
    }
  ],

  students: [
    {
      id: "STU-2026-001",
      admissionNo: "ADM-2023-8901",
      rollNo: "101",
      name: "Aarav Sharma",
      firstName: "Aarav",
      lastName: "Sharma",
      photo: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80",
      dob: "2010-08-14",
      gender: "Male",
      bloodGroup: "O+",
      aadhaarNo: "4829-1029-4821",
      nationality: "Indian",
      category: "General",
      religion: "Hinduism",
      motherTongue: "Hindi",
      class: "Class 10",
      section: "A",
      house: "Phoenix (Red House)",
      classTeacher: "Dr. Rajesh Sharma",
      admissionDate: "2023-04-10",
      admissionClass: "Class 7",
      status: "Active",
      academicSession: "2026-2027",
      familyId: "FAM-1001",
      familyName: "Sharma Family (Mukesh & Ramesh Sharma Joint Family)",
      guardianName: "Mr. Mukesh Sharma",
      relationType: "Elder Brother (Primary)",
      linkedSiblingIds: ["STU-2026-006", "STU-2026-007"],
      parents: {
        fatherName: "Mr. Mukesh Sharma",
        fatherOccupation: "Software Architect",
        fatherMobile: "+91 98110 01122",
        motherName: "Mrs. Priya Sharma",
        motherOccupation: "Banking Executive",
        motherMobile: "+91 98110 01133",
        email: "mukesh.sharma@example.com",
        address: "Flat 302, Palm Greens, Sector 62, Noida, UP",
        emergencyContact: "+91 98110 01122"
      },
      transport: {
        opted: true,
        route: "Route 02 - Noida Expressway",
        stop: "Sector 62 Crossing",
        busNo: "DL-1PB-4502"
      },
      hostel: {
        opted: false
      },
      medical: {
        allergies: "Peanuts (Mild)",
        chronicIssues: "None",
        doctorCheckupDate: "2026-05-10",
        fitnessStatus: "Fit"
      },
      attendanceSummary: {
        totalDays: 88,
        presentDays: 82,
        percentage: 93.18
      },
      feeSummary: {
        totalDue: 45000,
        totalPaid: 20000,
        balance: 25000,
        status: "Partial"
      }
    },
    {
      id: "STU-2026-002",
      admissionNo: "ADM-2022-7612",
      rollNo: "102",
      name: "Ananya Deshmukh",
      firstName: "Ananya",
      lastName: "Deshmukh",
      photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
      dob: "2010-12-05",
      gender: "Female",
      bloodGroup: "B+",
      aadhaarNo: "7721-9043-1823",
      nationality: "Indian",
      category: "General",
      religion: "Hinduism",
      motherTongue: "Marathi",
      class: "Class 10",
      section: "A",
      house: "Dragons (Blue House)",
      classTeacher: "Dr. Rajesh Sharma",
      admissionDate: "2022-04-05",
      admissionClass: "Class 6",
      status: "Active",
      academicSession: "2026-2027",
      parents: {
        fatherName: "Dr. Sanjay Deshmukh",
        fatherOccupation: "Cardiologist",
        fatherMobile: "+91 98220 02233",
        motherName: "Dr. Radhika Deshmukh",
        motherOccupation: "Pediatrician",
        motherMobile: "+91 98220 02244",
        email: "sanjay.deshmukh@example.com",
        address: "Villa 18, Gulmohar Enclave, Saket, New Delhi",
        emergencyContact: "+91 98220 02233"
      },
      transport: {
        opted: false
      },
      hostel: {
        opted: false
      },
      medical: {
        allergies: "Dust / Pollen",
        chronicIssues: "None",
        doctorCheckupDate: "2026-05-12",
        fitnessStatus: "Fit"
      },
      attendanceSummary: {
        totalDays: 88,
        presentDays: 85,
        percentage: 96.59
      },
      feeSummary: {
        totalDue: 45000,
        totalPaid: 30000,
        balance: 15000,
        status: "Partial"
      }
    },
    {
      id: "STU-2026-003",
      admissionNo: "ADM-2024-9120",
      rollNo: "103",
      name: "Kabir Khan",
      firstName: "Kabir",
      lastName: "Khan",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
      dob: "2010-03-20",
      gender: "Male",
      bloodGroup: "A+",
      aadhaarNo: "3920-1849-5021",
      nationality: "Indian",
      category: "OBC",
      religion: "Islam",
      motherTongue: "Urdu",
      class: "Class 10",
      section: "A",
      house: "Titans (Green House)",
      classTeacher: "Dr. Rajesh Sharma",
      admissionDate: "2024-04-12",
      admissionClass: "Class 8",
      status: "Active",
      academicSession: "2026-2027",
      parents: {
        fatherName: "Mr. Tariq Khan",
        fatherOccupation: "Businessman",
        fatherMobile: "+91 98330 03344",
        motherName: "Mrs. Farida Khan",
        motherOccupation: "Homemaker",
        motherMobile: "+91 98330 03355",
        email: "tariq.khan@example.com",
        address: "H-82, Jamia Nagar, Okhla, New Delhi",
        emergencyContact: "+91 98330 03344"
      },
      transport: {
        opted: true,
        route: "Route 04 - South Delhi",
        stop: "Jamia Metro Station",
        busNo: "DL-1PB-4504"
      },
      hostel: {
        opted: false
      },
      medical: {
        allergies: "None",
        chronicIssues: "None",
        doctorCheckupDate: "2026-05-14",
        fitnessStatus: "Fit"
      },
      attendanceSummary: {
        totalDays: 88,
        presentDays: 60,
        percentage: 68.18
      },
      feeSummary: {
        totalDue: 45000,
        totalPaid: 0,
        balance: 45000,
        status: "Overdue"
      }
    },
    {
      id: "STU-2026-004",
      admissionNo: "ADM-2021-6502",
      rollNo: "104",
      name: "Diya Chatterjee",
      firstName: "Diya",
      lastName: "Chatterjee",
      photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
      dob: "2010-07-19",
      gender: "Female",
      bloodGroup: "AB+",
      aadhaarNo: "9012-3847-1920",
      nationality: "Indian",
      category: "General",
      religion: "Hinduism",
      motherTongue: "Bengali",
      class: "Class 10",
      section: "B",
      house: "Warriors (Yellow House)",
      classTeacher: "Mrs. Sunita Verma",
      admissionDate: "2021-04-01",
      admissionClass: "Class 5",
      status: "Active",
      academicSession: "2026-2027",
      parents: {
        fatherName: "Mr. Debashish Chatterjee",
        fatherOccupation: "Civil Engineer",
        fatherMobile: "+91 98440 04455",
        motherName: "Mrs. Shoma Chatterjee",
        motherOccupation: "School Teacher",
        motherMobile: "+91 98440 04466",
        email: "debashish.c@example.com",
        address: "Flat 5B, Chittaranjan Park, New Delhi",
        emergencyContact: "+91 98440 04455"
      },
      transport: {
        opted: true,
        route: "Route 04 - South Delhi",
        stop: "CR Park Market 1",
        busNo: "DL-1PB-4504"
      },
      hostel: {
        opted: false
      },
      medical: {
        allergies: "None",
        chronicIssues: "None",
        doctorCheckupDate: "2026-05-18",
        fitnessStatus: "Fit"
      },
      attendanceSummary: {
        totalDays: 88,
        presentDays: 84,
        percentage: 95.45
      },
      feeSummary: {
        totalDue: 45000,
        totalPaid: 45000,
        balance: 0,
        status: "Paid"
      }
    },
    {
      id: "STU-2026-005",
      admissionNo: "ADM-2020-5411",
      rollNo: "105",
      name: "Rohan Varma",
      firstName: "Rohan",
      lastName: "Varma",
      photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80",
      dob: "2009-01-25",
      gender: "Male",
      bloodGroup: "O-",
      aadhaarNo: "6512-8934-2201",
      nationality: "Indian",
      category: "General",
      religion: "Hinduism",
      motherTongue: "Telugu",
      class: "Class 12",
      section: "Science",
      house: "Phoenix (Red House)",
      classTeacher: "Dr. Rajesh Sharma",
      admissionDate: "2020-04-01",
      admissionClass: "Class 6",
      status: "Active",
      academicSession: "2026-2027",
      parents: {
        fatherName: "Mr. K. R. Varma",
        fatherOccupation: "IAS Officer",
        fatherMobile: "+91 98550 05566",
        motherName: "Mrs. Lakshmi Varma",
        motherOccupation: "Architect",
        motherMobile: "+91 98550 05577",
        email: "kr.varma@example.com",
        address: "Type VI, New Moti Bagh, Chanakyapuri, New Delhi",
        emergencyContact: "+91 98550 05566"
      },
      transport: {
        opted: false
      },
      hostel: {
        opted: true,
        hostelName: "Tagore Boys Hostel",
        roomNo: "204",
        bedNo: "B-1"
      },
      medical: {
        allergies: "Asthma (Mild in winter)",
        chronicIssues: "Inhaler as needed",
        doctorCheckupDate: "2026-05-20",
        fitnessStatus: "Fit with precaution"
      },
      attendanceSummary: {
        totalDays: 88,
        presentDays: 80,
        percentage: 90.91
      },
      feeSummary: {
        totalDue: 85000,
        totalPaid: 85000,
        balance: 0,
        status: "Paid"
      }
    },
    {
      id: "STU-2026-006",
      admissionNo: "ADM-2024-3310",
      rollNo: "601",
      name: "Aarush Sharma",
      firstName: "Aarush",
      lastName: "Sharma",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
      dob: "2014-11-10",
      gender: "Male",
      bloodGroup: "O+",
      aadhaarNo: "4829-1029-4822",
      nationality: "Indian",
      category: "General",
      religion: "Hinduism",
      motherTongue: "Hindi",
      class: "Class 6",
      section: "A",
      house: "Phoenix (Red House)",
      classTeacher: "Mr. Alok Mukherjee",
      admissionDate: "2024-04-10",
      status: "Active",
      academicSession: "2026-2027",
      familyId: "FAM-1001",
      familyName: "Sharma Family (Mukesh & Ramesh Sharma Joint Family)",
      guardianName: "Mr. Mukesh Sharma",
      relationType: "Younger Brother",
      linkedSiblingIds: ["STU-2026-001", "STU-2026-007"],
      parents: {
        fatherName: "Mr. Mukesh Sharma",
        fatherOccupation: "Software Architect",
        fatherMobile: "+91 98110 01122",
        motherName: "Mrs. Priya Sharma",
        motherMobile: "+91 98110 01133",
        address: "Flat 302, Palm Greens, Sector 62, Noida, UP"
      },
      feeSummary: {
        totalDue: 42000,
        totalPaid: 12000,
        balance: 30000,
        status: "Partial"
      }
    },
    {
      id: "STU-2026-007",
      admissionNo: "ADM-2025-1102",
      rollNo: "201",
      name: "Pari Sharma",
      firstName: "Pari",
      lastName: "Sharma",
      photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
      dob: "2018-04-22",
      gender: "Female",
      bloodGroup: "A+",
      aadhaarNo: "4829-1029-4823",
      nationality: "Indian",
      category: "General",
      religion: "Hinduism",
      motherTongue: "Hindi",
      class: "Class 2",
      section: "A",
      house: "Dragons (Blue House)",
      classTeacher: "Mrs. Sunita Verma",
      admissionDate: "2025-04-10",
      status: "Active",
      academicSession: "2026-2027",
      familyId: "FAM-1001",
      familyName: "Sharma Family (Mukesh & Ramesh Sharma Joint Family)",
      guardianName: "Mr. Mukesh Sharma",
      relationType: "Cousin Sister (Chacha Ramesh Sharma's Daughter)",
      linkedSiblingIds: ["STU-2026-001", "STU-2026-006"],
      parents: {
        fatherName: "Mr. Ramesh Sharma (Chacha)",
        fatherOccupation: "Chartered Accountant",
        fatherMobile: "+91 98110 09988",
        motherName: "Mrs. Sneha Sharma",
        motherMobile: "+91 98110 09977",
        address: "Flat 301, Palm Greens, Sector 62, Noida, UP"
      },
      feeSummary: {
        totalDue: 36000,
        totalPaid: 16000,
        balance: 20000,
        status: "Partial"
      }
    }
  ],

  feeStructures: [
    { id: "FEE-01", name: "Annual Tuition Fee (Class 1-5)", amount: 36000, frequency: "Quarterly (9,000)", category: "Tuition" },
    { id: "FEE-02", name: "Annual Tuition Fee (Class 6-8)", amount: 42000, frequency: "Quarterly (10,500)", category: "Tuition" },
    { id: "FEE-03", name: "Annual Tuition Fee (Class 9-10)", amount: 48000, frequency: "Quarterly (12,000)", category: "Tuition" },
    { id: "FEE-04", name: "Annual Tuition Fee (Class 11-12)", amount: 56000, frequency: "Quarterly (14,000)", category: "Tuition" },
    { id: "FEE-05", name: "Annual Development & Smart Class Fee", amount: 6000, frequency: "Annual", category: "Development" },
    { id: "FEE-06", name: "Examination & Lab Maintenance Fee", amount: 4000, frequency: "Half Yearly", category: "Exam" },
    { id: "FEE-07", name: "Transport Fee (Tier 1: 0-5 km)", amount: 18000, frequency: "Quarterly (4,500)", category: "Transport" },
    { id: "FEE-08", name: "Transport Fee (Tier 2: 5-15 km)", amount: 24000, frequency: "Quarterly (6,000)", category: "Transport" },
    { id: "FEE-09", name: "Hostel & Mess Boarding Fee", amount: 90000, frequency: "Semester (45,000)", category: "Hostel" }
  ],

  feeInvoices: [
    {
      id: "INV-2026-801",
      invoiceNo: "REC-2026/0891",
      studentId: "STU-2026-001",
      studentName: "Aarav Sharma",
      class: "Class 10-A",
      rollNo: "101",
      feeType: "Q1 & Q2 Tuition + Development + Transport",
      amount: 45000,
      discount: 0,
      fine: 0,
      paidAmount: 45000,
      dueAmount: 0,
      dueDate: "2026-07-15",
      paymentDate: "2026-07-10",
      status: "Paid",
      paymentMode: "UPI / NetBanking",
      transactionId: "UPI/260710/918237190",
      receiptNo: "RCPT-9821"
    },
    {
      id: "INV-2026-802",
      invoiceNo: "REC-2026/0892",
      studentId: "STU-2026-002",
      studentName: "Ananya Deshmukh",
      class: "Class 10-A",
      rollNo: "102",
      feeType: "Q1 & Q2 Tuition + Lab Fee",
      amount: 45000,
      discount: 0,
      fine: 0,
      paidAmount: 30000,
      dueAmount: 15000,
      dueDate: "2026-07-15",
      paymentDate: "2026-07-12",
      status: "Partial",
      paymentMode: "Credit Card",
      transactionId: "CARD/TXN/84729103",
      receiptNo: "RCPT-9822"
    },
    {
      id: "INV-2026-803",
      invoiceNo: "REC-2026/0893",
      studentId: "STU-2026-003",
      studentName: "Kabir Khan",
      class: "Class 10-A",
      rollNo: "103",
      feeType: "Q1 & Q2 Tuition + Transport Fee",
      amount: 45000,
      discount: 0,
      fine: 500,
      paidAmount: 0,
      dueAmount: 45500,
      dueDate: "2026-07-15",
      paymentDate: null,
      status: "Overdue",
      paymentMode: null,
      transactionId: null,
      receiptNo: null
    }
  ],

  timetables: [
    {
      class: "Class 10",
      section: "A",
      schedule: {
        Monday: [
          { period: 1, time: "08:00 - 08:45", subject: "Mathematics", teacher: "Mrs. Sunita Verma", room: "Room 101" },
          { period: 2, time: "08:45 - 09:30", subject: "Science (Physics)", teacher: "Dr. Rajesh Sharma", room: "Physics Lab" },
          { period: 3, time: "09:30 - 10:15", subject: "English Literature", teacher: "Mrs. Kavita Iyer", room: "Room 101" },
          { period: 4, time: "10:15 - 11:00", subject: "Social Science", teacher: "Mr. Alok Mukherjee", room: "Room 101" },
          { period: "Recess", time: "11:00 - 11:30", subject: "Break / Lunch", teacher: "-", room: "Cafeteria / Ground" },
          { period: 5, time: "11:30 - 12:15", subject: "Hindi", teacher: "Dr. Ramesh Chandra", room: "Room 101" },
          { period: 6, time: "12:15 - 01:00", subject: "Computer Applications", teacher: "Mr. Vikrant Rao", room: "Computer Lab 1" },
          { period: 7, time: "01:00 - 01:45", subject: "Physical Education", teacher: "Coach Jaswinder", room: "Sports Ground" }
        ],
        Tuesday: [
          { period: 1, time: "08:00 - 08:45", subject: "Science (Chemistry)", teacher: "Mrs. Priyanka Joshi", room: "Chemistry Lab" },
          { period: 2, time: "08:45 - 09:30", subject: "Mathematics", teacher: "Mrs. Sunita Verma", room: "Room 101" },
          { period: 3, time: "09:30 - 10:15", subject: "Social Science", teacher: "Mr. Alok Mukherjee", room: "Room 101" },
          { period: 4, time: "10:15 - 11:00", subject: "English Grammar", teacher: "Mrs. Kavita Iyer", room: "Room 101" },
          { period: "Recess", time: "11:00 - 11:30", subject: "Break / Lunch", teacher: "-", room: "Cafeteria" },
          { period: 5, time: "11:30 - 12:15", subject: "Science (Biology)", teacher: "Dr. Meenal Roy", room: "Biology Lab" },
          { period: 6, time: "12:15 - 01:00", subject: "Art & Craft", teacher: "Mrs. Ananya Sen", room: "Art Studio" },
          { period: 7, time: "01:00 - 01:45", subject: "Library / Self Study", teacher: "Mrs. Shashi Bala", room: "Central Library" }
        ]
      }
    }
  ],

  exams: [
    {
      id: "EXM-01",
      name: "Unit Test 1 (Term 1)",
      session: "2026-2027",
      startDate: "2026-07-20",
      endDate: "2026-07-27",
      status: "Completed",
      maxMarks: 40,
      passMarks: 14
    },
    {
      id: "EXM-02",
      name: "Half Yearly / Mid-Term Examination",
      session: "2026-2027",
      startDate: "2026-09-18",
      endDate: "2026-09-30",
      status: "Upcoming",
      maxMarks: 80,
      passMarks: 27
    },
    {
      id: "EXM-03",
      name: "Annual Board / Final Examination",
      session: "2026-2027",
      startDate: "2027-02-15",
      endDate: "2027-03-05",
      status: "Scheduled",
      maxMarks: 80,
      passMarks: 27
    }
  ],

  marks: [
    {
      studentId: "STU-2026-001",
      studentName: "Aarav Sharma",
      class: "Class 10",
      section: "A",
      rollNo: "101",
      examId: "EXM-01",
      examName: "Unit Test 1 (Term 1)",
      subjects: [
        { name: "English", maxMarks: 40, obtainedTheory: 36, obtainedPractical: 0, total: 36, grade: "A1" },
        { name: "Mathematics", maxMarks: 40, obtainedTheory: 38, obtainedPractical: 0, total: 38, grade: "A1" },
        { name: "Science", maxMarks: 40, obtainedTheory: 37, obtainedPractical: 0, total: 37, grade: "A1" },
        { name: "Social Science", maxMarks: 40, obtainedTheory: 35, obtainedPractical: 0, total: 35, grade: "A2" },
        { name: "Hindi", maxMarks: 40, obtainedTheory: 34, obtainedPractical: 0, total: 34, grade: "A2" },
        { name: "Computer Applications", maxMarks: 40, obtainedTheory: 39, obtainedPractical: 0, total: 39, grade: "A1" }
      ],
      totalMarks: 240,
      obtainedMarks: 219,
      percentage: 91.25,
      grade: "A1",
      rank: 1,
      result: "Pass",
      remarks: "Brilliant performance. Shows strong conceptual clarity."
    },
    {
      studentId: "STU-2026-002",
      studentName: "Ananya Deshmukh",
      class: "Class 10",
      section: "A",
      rollNo: "102",
      examId: "EXM-01",
      examName: "Unit Test 1 (Term 1)",
      subjects: [
        { name: "English", maxMarks: 40, obtainedTheory: 38, obtainedPractical: 0, total: 38, grade: "A1" },
        { name: "Mathematics", maxMarks: 40, obtainedTheory: 34, obtainedPractical: 0, total: 34, grade: "A2" },
        { name: "Science", maxMarks: 40, obtainedTheory: 36, obtainedPractical: 0, total: 36, grade: "A1" },
        { name: "Social Science", maxMarks: 40, obtainedTheory: 37, obtainedPractical: 0, total: 37, grade: "A1" },
        { name: "Hindi", maxMarks: 40, obtainedTheory: 36, obtainedPractical: 0, total: 36, grade: "A1" },
        { name: "Computer Applications", maxMarks: 40, obtainedTheory: 37, obtainedPractical: 0, total: 37, grade: "A1" }
      ],
      totalMarks: 240,
      obtainedMarks: 218,
      percentage: 90.83,
      grade: "A1",
      rank: 2,
      result: "Pass",
      remarks: "Exceptional analytical and language skills."
    }
  ],

  homework: [
    {
      id: "HW-01",
      title: "Quadratic Equations - Real World Applications",
      subject: "Mathematics",
      class: "Class 10",
      section: "A",
      teacher: "Mrs. Sunita Verma",
      issueDate: "2026-08-27",
      dueDate: "2026-08-30",
      description: "Solve Exercise 4.3 from NCERT textbook and prepare graph plots for problems 5 to 10.",
      attachments: ["NCERT_Maths_Ch4_Ref.pdf"],
      submissionsCount: 38,
      totalStudents: 42,
      status: "Active"
    },
    {
      id: "HW-02",
      title: "Ray Optics & Prism Spectrum Lab Notes",
      subject: "Science",
      class: "Class 10",
      section: "A",
      teacher: "Dr. Rajesh Sharma",
      issueDate: "2026-08-26",
      dueDate: "2026-08-29",
      description: "Write down the experimental observation table and ray diagram for refraction through glass slab.",
      attachments: ["Optics_Lab_Guide.pdf"],
      submissionsCount: 40,
      totalStudents: 42,
      status: "Active"
    }
  ],

  libraryBooks: [
    { id: "BK-101", isbn: "978-0143428138", title: "Wings of Fire", author: "Dr. A.P.J. Abdul Kalam", category: "Autobiography", shelf: "Rack A-04", quantity: 8, available: 5, price: 350 },
    { id: "BK-102", isbn: "978-0199478123", title: "Concepts of Physics (Vol 1 & 2)", author: "Dr. H.C. Verma", category: "Science / Physics", shelf: "Rack S-12", quantity: 15, available: 9, price: 890 },
    { id: "BK-103", isbn: "978-8174508126", title: "Mathematics for Class 10 Exemplar", author: "NCERT Board", category: "Mathematics", shelf: "Rack M-02", quantity: 20, available: 14, price: 210 },
    { id: "BK-104", isbn: "978-0061122415", title: "The Alchemist", author: "Paulo Coelho", category: "Literature / Fiction", shelf: "Rack L-08", quantity: 10, available: 7, price: 420 },
    { id: "BK-105", isbn: "978-9352837304", title: "Oxford Student Atlas for India", author: "Oxford University Press", category: "Geography / Atlas", shelf: "Rack G-01", quantity: 12, available: 11, price: 495 }
  ],

  bookIssues: [
    {
      id: "ISS-901",
      bookId: "BK-102",
      bookTitle: "Concepts of Physics (Vol 1)",
      studentId: "STU-2026-001",
      studentName: "Aarav Sharma",
      class: "Class 10-A",
      issueDate: "2026-08-15",
      dueDate: "2026-08-29",
      returnDate: null,
      fine: 0,
      status: "Issued"
    },
    {
      id: "ISS-902",
      bookId: "BK-101",
      bookTitle: "Wings of Fire",
      studentId: "STU-2026-003",
      studentName: "Kabir Khan",
      class: "Class 10-A",
      issueDate: "2026-08-01",
      dueDate: "2026-08-15",
      returnDate: null,
      fine: 130,
      status: "Overdue"
    }
  ],

  transport: [
    {
      id: "TRP-01",
      routeNo: "Route 01",
      name: "Rohini & Pitampura Express",
      vehicleNo: "DL-1PB-4501",
      vehicleType: "Tata Starbus (42 Seater)",
      driverName: "Ram Prakash Singh",
      driverPhone: "+91 98711 22334",
      capacity: 42,
      allocatedStudents: 38,
      stops: [
        { stopName: "Rohini Sector 9", pickupTime: "06:40 AM", dropTime: "02:20 PM" },
        { stopName: "Pitampura Metro", pickupTime: "06:55 AM", dropTime: "02:05 PM" },
        { stopName: "Punjabi Bagh Club", pickupTime: "07:10 AM", dropTime: "01:50 PM" }
      ]
    },
    {
      id: "TRP-02",
      routeNo: "Route 02",
      name: "Noida Expressway & Indirapuram",
      vehicleNo: "DL-1PB-4502",
      vehicleType: "Ashok Leyland Sunshine (48 Seater)",
      driverName: "Satish Pal",
      driverPhone: "+91 98722 33445",
      capacity: 48,
      allocatedStudents: 44,
      stops: [
        { stopName: "Sector 62 Crossing", pickupTime: "06:30 AM", dropTime: "02:30 PM" },
        { stopName: "Sector 18 Atta Market", pickupTime: "06:50 AM", dropTime: "02:10 PM" },
        { stopName: "Mayur Vihar Phase 1", pickupTime: "07:05 AM", dropTime: "01:55 PM" }
      ]
    }
  ],

  hostels: [
    {
      id: "HST-01",
      name: "Tagore Boys Senior Hostel",
      type: "Boys",
      warden: "Mr. Surendra Mohan",
      wardenContact: "+91 98118 76543",
      totalRooms: 40,
      capacity: 80,
      occupied: 68,
      rooms: [
        { roomNo: "101", floor: "Ground", capacity: 2, occupied: 2, students: ["STU-2026-005"] },
        { roomNo: "102", floor: "Ground", capacity: 2, occupied: 1, students: [] },
        { roomNo: "201", floor: "1st Floor", capacity: 2, occupied: 2, students: [] }
      ]
    },
    {
      id: "HST-02",
      name: "Sarojini Girls Hostel",
      type: "Girls",
      warden: "Mrs. Shanti Swaroop",
      wardenContact: "+91 98119 87654",
      totalRooms: 35,
      capacity: 70,
      occupied: 58,
      rooms: [
        { roomNo: "G-101", floor: "Ground", capacity: 2, occupied: 2, students: [] },
        { roomNo: "G-102", floor: "Ground", capacity: 2, occupied: 1, students: [] }
      ]
    }
  ],

  medicalRecords: [
    {
      id: "MED-01",
      studentId: "STU-2026-001",
      studentName: "Aarav Sharma",
      class: "Class 10-A",
      bloodGroup: "O+",
      heightCm: 168,
      weightKg: 58,
      vision: "6/6 (Normal)",
      allergies: "Peanuts (Mild)",
      doctor: "Dr. A. K. Bansal, MD",
      checkupDate: "2026-05-10",
      vaccinations: ["COVID-19 (Double)", "MMR Booster", "Tetanus (2025)"],
      notes: "Healthy physical index. Regular sports participation recommended."
    },
    {
      id: "MED-02",
      studentId: "STU-2026-002",
      studentName: "Ananya Deshmukh",
      class: "Class 10-A",
      bloodGroup: "B+",
      heightCm: 162,
      weightKg: 51,
      vision: "6/9 (Glasses prescribed: -0.75 D)",
      allergies: "Dust & Pollen",
      doctor: "Dr. A. K. Bansal, MD",
      checkupDate: "2026-05-12",
      vaccinations: ["COVID-19 (Double)", "HPV", "Tetanus (2026)"],
      notes: "Advised to wear anti-glare lenses during computer lab."
    }
  ],

  sports: [
    { id: "SPT-01", name: "Football / Soccer", coach: "Coach Jaswinder Singh", teamCaptain: "Aarav Sharma", playersCount: 22, venue: "Main Athletic Ground", achievements: "Inter-School Gold Medalist 2025" },
    { id: "SPT-02", name: "Cricket Academy", coach: "Mr. Devendra Rana", teamCaptain: "Rohan Varma", playersCount: 25, venue: "Cricket Pavilion", achievements: "Zonal Runners-up 2026" },
    { id: "SPT-03", name: "Basketball (Boys & Girls)", coach: "Ms. Preeti Rawat", teamCaptain: "Ananya Deshmukh", playersCount: 18, venue: "Synthetic Court", achievements: "State Championship 3rd Place" }
  ],

  events: [
    {
      id: "EVT-01",
      name: "Annual Inter-School Science & Robotics Fest (Technovate 2026)",
      type: "Exhibition",
      date: "2026-10-15",
      time: "09:00 AM - 04:00 PM",
      venue: "School Auditorium & CS Labs",
      description: "Over 25 leading schools participating with AI, IoT, and Clean Energy innovations.",
      coordinator: "Dr. Rajesh Sharma & Mr. Vikrant Rao",
      status: "Upcoming"
    },
    {
      id: "EVT-02",
      name: "Parent-Teacher Meeting (Term 1 Review)",
      type: "PTM",
      date: "2026-09-05",
      time: "08:30 AM - 01:30 PM",
      venue: "Respective Classrooms",
      description: "Discussion on Unit Test 1 results, attendance defaulters, and upcoming Mid-Term prep.",
      coordinator: "Academic Coordinators",
      status: "Upcoming"
    },
    {
      id: "EVT-03",
      name: "Grand Annual Sports & Cultural Gala",
      type: "Sports / Cultural",
      date: "2026-12-18",
      time: "03:00 PM - 08:30 PM",
      venue: "Main Athletic Complex",
      description: "Track events, march past, orchestral performances, and prize distribution by Hon. Chief Guest.",
      coordinator: "Coach Jaswinder & Mrs. Ananya Sen",
      status: "Scheduled"
    }
  ],

  notices: [
    {
      id: "NOT-01",
      title: "Notice regarding Half Yearly Examination Schedule 2026-27",
      target: "All Students & Parents",
      category: "Examination",
      publishDate: "2026-08-25",
      author: "Office of the Principal",
      isEmergency: false,
      content: "The date sheet for Half Yearly Examinations starting from 18th September 2026 has been published. All students are advised to clear outstanding fee dues before 10th September to receive admit cards."
    },
    {
      id: "NOT-02",
      title: "Inter-House Debate & Quiz Competition Auditions",
      target: "Class 9 to 12",
      category: "Co-Curricular",
      publishDate: "2026-08-27",
      author: "Literary Club",
      isEmergency: false,
      content: "Auditions for English and Hindi Inter-House Debates will be held in the auditorium during 6th and 7th period on Friday. Interested participants should register with their house masters."
    },
    {
      id: "NOT-03",
      title: "Bus Route 02 Modification Notice",
      target: "Parents (Route 02)",
      category: "Transport",
      publishDate: "2026-08-28",
      author: "Transport Directorate",
      isEmergency: true,
      content: "Due to ongoing municipal road development at Sector 62 Underpass, Bus Route 02 will temporarily arrive 10 minutes earlier at Sector 18 stop starting Monday."
    }
  ],

  leaveRequests: [
    {
      id: "LVE-01",
      applicantType: "Student",
      applicantId: "STU-2026-002",
      applicantName: "Ananya Deshmukh",
      class: "Class 10-A",
      leaveType: "Medical Leave",
      startDate: "2026-09-02",
      endDate: "2026-09-04",
      days: 3,
      reason: "Viral flu and doctor recommended bed rest.",
      status: "Approved",
      approvedBy: "Dr. Rajesh Sharma"
    },
    {
      id: "LVE-02",
      applicantType: "Staff",
      applicantId: "TCH-1002",
      applicantName: "Mrs. Sunita Verma",
      class: "PGT Mathematics",
      leaveType: "Casual Leave",
      startDate: "2026-09-10",
      endDate: "2026-09-11",
      days: 2,
      reason: "Attending National Mathematics Teachers Conclave at IIT Delhi.",
      status: "Pending",
      approvedBy: null
    }
  ],

  certificates: [
    {
      id: "CERT-2026-101",
      certNumber: "DPGA/BON/2026/0412",
      type: "Bonafide Certificate",
      studentId: "STU-2026-001",
      studentName: "Aarav Sharma",
      fatherName: "Mr. Mukesh Sharma",
      class: "Class 10",
      section: "A",
      admissionNo: "ADM-2023-8901",
      purpose: "Passport Application & Visa Requirement",
      issueDate: "2026-08-20",
      status: "Issued"
    },
    {
      id: "CERT-2026-102",
      certNumber: "DPGA/CHAR/2026/0198",
      type: "Character Certificate",
      studentId: "STU-2026-005",
      studentName: "Rohan Varma",
      fatherName: "Mr. K. R. Varma",
      class: "Class 12",
      section: "Science",
      admissionNo: "ADM-2020-5411",
      purpose: "Higher University Admissions Abroad",
      issueDate: "2026-08-22",
      status: "Issued"
    }
  ],

  inventory: [
    { id: "INV-ITEM-01", name: "A4 White Ream Papers (75 GSM)", category: "Stationery", sku: "STN-PAP-01", quantity: 240, unit: "Reams", minStock: 50, price: 280, supplier: "National Paper Mart" },
    { id: "INV-ITEM-02", name: "Nivia Shining Star Footballs (Size 5)", category: "Sports", sku: "SPT-FB-05", quantity: 35, unit: "Pcs", minStock: 10, price: 850, supplier: "Olympus Sports Delhi" },
    { id: "INV-ITEM-03", name: "Borosil Beakers (250ml Heatproof)", category: "Science Lab", sku: "LAB-BEA-250", quantity: 120, unit: "Pcs", minStock: 30, price: 140, supplier: "Scientific Glassware Corp" },
    { id: "INV-ITEM-04", name: "Smart Classroom Projector Bulbs", category: "IT Hardware", sku: "IT-PRJ-BLB", quantity: 8, unit: "Units", minStock: 4, price: 3200, supplier: "Apex Infotech" }
  ],

  complaints: [
    {
      id: "CMP-01",
      category: "Transport",
      submittedBy: "Mukesh Sharma (Parent of Aarav)",
      userRole: "Parent",
      title: "AC cooling issue in Bus Route 02 during afternoon drop",
      description: "Students reported high cabin temperature yesterday between 1:45 PM and 2:15 PM.",
      priority: "High",
      status: "In Progress",
      assignedTo: "Transport Manager",
      submissionDate: "2026-08-27",
      resolution: "Vehicle scheduled for AC gas recharge and filter replacement on Saturday."
    },
    {
      id: "CMP-02",
      category: "Library",
      submittedBy: "Diya Chatterjee",
      userRole: "Student",
      title: "Request for more copies of HC Verma Physics Part 2",
      description: "Currently all 15 copies are issued. Please order 10 additional copies for term prep.",
      priority: "Medium",
      status: "Resolved",
      assignedTo: "Librarian",
      submissionDate: "2026-08-22",
      resolution: "PO issued for 15 new copies; expected to arrive by Monday."
    }
  ],

  visitors: [
    {
      id: "VIS-901",
      passNo: "PASS-2026-891",
      name: "Mr. Rajeev Malviya",
      mobile: "+91 98101 23456",
      purpose: "New Admission Inquiry (Class 6)",
      personToMeet: "Admission Counsellor",
      entryTime: "10:15 AM",
      exitTime: "11:20 AM",
      idProof: "Aadhaar Card (Verified)",
      date: "2026-08-28",
      status: "Checked Out"
    },
    {
      id: "VIS-902",
      passNo: "PASS-2026-892",
      name: "Dr. S. K. Narang",
      mobile: "+91 98202 34567",
      purpose: "Inspection & CBSE Academic Audit",
      personToMeet: "Principal",
      entryTime: "11:30 AM",
      exitTime: null,
      idProof: "Government ID",
      date: "2026-08-28",
      status: "Inside Campus"
    }
  ],

  accounting: {
    incomeToday: 135000,
    expensesToday: 24500,
    totalMonthlyRevenue: 4850000,
    totalMonthlyExpenses: 3120000,
    recentTransactions: [
      { id: "TXN-01", type: "Income", category: "Tuition Fee Collection", amount: 45000, date: "2026-08-28", ref: "RCPT-9821", mode: "UPI" },
      { id: "TXN-02", type: "Expense", category: "Diesel & Fuel for School Buses", amount: 18500, date: "2026-08-28", ref: "PETROL-0828", mode: "Bank Card" },
      { id: "TXN-03", type: "Income", category: "Prospectus & Registration Fee", amount: 12000, date: "2026-08-28", ref: "REG-ADM-04", mode: "Cash" },
      { id: "TXN-04", type: "Expense", category: "Library Book Purchases", amount: 6000, date: "2026-08-28", ref: "PO-LIB-44", mode: "NetBanking" }
    ]
  }
};
