// Comprehensive Seed Database for School ERP System
// 100% Real Synchronized Data from Dadheech Memorial Public School SQL Backup

export const initialSchoolData = {
  schoolInfo: {
    id: "SCH-001",
    name: "Dadheech Memorial Public School",
    tagline: "Education is the movement from darkness to brightness",
    society: "Dadheech Educational Society & Training Institute (Regd. No - 1131)",
    logo: "https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?w=150&auto=format&fit=crop&q=80",
    address: "Ramghat Road Border, Jargwan, Bulandshahr (U.P.)",
    phone: "+91 97589 75880, +91 96270 32626",
    email: "dmpsjargawan@gmail.com, dadheechsociety@gmail.com",
    website: "https://www.dmpsjargawan.com",
    affiliation: "Bhartiya Shiksha Board (BSB)",
    affiliationNo: "UP0F25070073",
    schoolCode: "00065",
    medium: "English & Hindi",
    founderName: "Late Mr. Dauli Singh (President & Founder)",
    managerName: "Mr. Pramod Kumar Rajput (Managing Director & Manager)",
    principalName: "Mrs. Kavita Rani (Principal & Treasurer)",
    academicSession: "2026-2027",
    timings: {
      summer: "07:30 AM - 01:30 PM",
      winter: "08:00 AM - 02:00 PM"
    },
    workingDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  },

  academicSessions: [
    { id: "SESS-2026-27", name: "2026-2027", isCurrent: true, startDate: "2026-04-01", endDate: "2027-03-31" },
    { id: "SESS-2025-26", name: "2025-2026", isCurrent: false, startDate: "2025-04-01", endDate: "2026-03-31" }
  ],

  branches: [
    {
      id: "BR-01",
      name: "Dadheech Memorial Public School (Main Campus)",
      code: "DMPS-MAIN-01",
      shortCode: "MAIN",
      address: "Ramghat Road Border, Jargwan, Bulandshahr (U.P.)",
      phone: "+91 97589 75880",
      headName: "Shri Pramod Kumar Rajput (Manager)",
      classesOffered: "Playgroup (PG) to Class 12th",
      stats: { students: 567, teachers: 23, classrooms: 32 }
    },
    {
      id: "BR-02",
      name: "Dadheech Memorial Public School (Barheti Campus)",
      code: "DMPS-BARHETI-02",
      shortCode: "BRHT",
      address: "Barheti, Ramghat Road, Aligarh (U.P.)",
      phone: "+91 96270 32626",
      headName: "Dr. Rajesh Sharma (Director & Branch Head)",
      classesOffered: "Nursery to Class 10th",
      stats: { students: 340, teachers: 18, classrooms: 20 }
    },
    {
      id: "BR-03",
      name: "Dadheech Kids School (Vinay Nagar PAC Campus)",
      code: "DKS-PAC-03",
      shortCode: "KIDS",
      address: "Near PAC Battalion, Vinay Nagar, Aligarh (U.P.)",
      phone: "+91 97194 76606",
      headName: "Mrs. Pooja Rajput (Early Childhood Head)",
      classesOffered: "Playgroup (PG), Nursery, LKG, UKG, Class 1st & 2nd",
      stats: { students: 180, teachers: 12, classrooms: 14 }
    }
  ],

  classes: [
    {
        "id": "CLS-PG",
        "name": "Playgroup (PG)",
        "numericLevel": -2,
        "streams": [
            "General"
        ],
        "capacity": 30,
        "roomNo": "GF-01"
    },
    {
        "id": "CLS-NUR",
        "name": "Nursery",
        "numericLevel": -1,
        "streams": [
            "General"
        ],
        "capacity": 35,
        "roomNo": "GF-02"
    },
    {
        "id": "CLS-LKG",
        "name": "LKG",
        "numericLevel": 0,
        "streams": [
            "General"
        ],
        "capacity": 40,
        "roomNo": "GF-03"
    },
    {
        "id": "CLS-UKG",
        "name": "UKG",
        "numericLevel": 0,
        "streams": [
            "General"
        ],
        "capacity": 40,
        "roomNo": "GF-04"
    },
    {
        "id": "CLS-01",
        "name": "Class 1",
        "numericLevel": 1,
        "streams": [
            "General"
        ],
        "capacity": 45,
        "roomNo": "FF-01"
    },
    {
        "id": "CLS-02",
        "name": "Class 2",
        "numericLevel": 2,
        "streams": [
            "General"
        ],
        "capacity": 45,
        "roomNo": "FF-02"
    },
    {
        "id": "CLS-03",
        "name": "Class 3",
        "numericLevel": 3,
        "streams": [
            "General"
        ],
        "capacity": 50,
        "roomNo": "FF-03"
    },
    {
        "id": "CLS-04",
        "name": "Class 4",
        "numericLevel": 4,
        "streams": [
            "General"
        ],
        "capacity": 45,
        "roomNo": "FF-04"
    },
    {
        "id": "CLS-05",
        "name": "Class 5",
        "numericLevel": 5,
        "streams": [
            "General"
        ],
        "capacity": 45,
        "roomNo": "FF-05"
    },
    {
        "id": "CLS-06",
        "name": "Class 6",
        "numericLevel": 6,
        "streams": [
            "General"
        ],
        "capacity": 45,
        "roomNo": "SF-01"
    },
    {
        "id": "CLS-07",
        "name": "Class 7",
        "numericLevel": 7,
        "streams": [
            "General"
        ],
        "capacity": 45,
        "roomNo": "SF-02"
    },
    {
        "id": "CLS-08",
        "name": "Class 8",
        "numericLevel": 8,
        "streams": [
            "General"
        ],
        "capacity": 45,
        "roomNo": "SF-03"
    },
    {
        "id": "CLS-09",
        "name": "Class 9",
        "numericLevel": 9,
        "streams": [
            "General",
            "Science",
            "Commerce"
        ],
        "capacity": 50,
        "roomNo": "TF-01"
    },
    {
        "id": "CLS-10",
        "name": "Class 10",
        "numericLevel": 10,
        "streams": [
            "General",
            "Science",
            "Commerce"
        ],
        "capacity": 50,
        "roomNo": "TF-02"
    },
    {
        "id": "CLS-11",
        "name": "Class 11",
        "numericLevel": 11,
        "streams": [
            "Science",
            "Commerce",
            "Arts/Humanities"
        ],
        "capacity": 55,
        "roomNo": "TF-03"
    },
    {
        "id": "CLS-12",
        "name": "Class 12",
        "numericLevel": 12,
        "streams": [
            "Science",
            "Commerce",
            "Arts/Humanities"
        ],
        "capacity": 55,
        "roomNo": "TF-04"
    }
],

  sections: [
    {
        "id": "SEC-A",
        "name": "Section A",
        "code": "A"
    },
    {
        "id": "SEC-B",
        "name": "Section B",
        "code": "B"
    }
],

  teachers: [
    {
        "id": "TCH-1001",
        "sqlId": "1",
        "employeeId": "EMP-2026-001",
        "enrollId": "1",
        "name": "Super Admin (Prashant)",
        "designation": "Teacher",
        "department": "Academics",
        "phone": "9719476606",
        "email": "superadmin(prashant)@dmps-school.edu.in",
        "joiningDate": "2024-03-19",
        "salary": 25000,
        "branchId": "BR-01",
        "status": "Active"
    },
    {
        "id": "TCH-1002",
        "sqlId": "8",
        "employeeId": "EMP-2026-002",
        "enrollId": "8",
        "name": "PRAMOD KUMAR",
        "designation": "Managing Director",
        "department": "Administration",
        "phone": "+91 97194 76606",
        "email": "pramodkumar@dmps-school.edu.in",
        "joiningDate": "2002-04-01",
        "salary": 26500,
        "branchId": "BR-01",
        "status": "Active"
    },
    {
        "id": "TCH-1003",
        "sqlId": "9",
        "employeeId": "EMP-2026-003",
        "enrollId": "9",
        "name": "BHOOMI YADAV",
        "designation": "Teacher",
        "department": "Junior",
        "phone": "9068883488",
        "email": "bhoomiyadav@dmps-school.edu.in",
        "joiningDate": "2025-07-24",
        "salary": 28000,
        "branchId": "BR-01",
        "status": "Active"
    },
    {
        "id": "TCH-1004",
        "sqlId": "10",
        "employeeId": "EMP-2026-004",
        "enrollId": "10",
        "name": "POORAN SINGH",
        "designation": "Teacher",
        "department": "Secondary",
        "phone": "8954721951",
        "email": "pooransingh@dmps-school.edu.in",
        "joiningDate": "2016-07-01",
        "salary": 29500,
        "branchId": "BR-01",
        "status": "Active"
    },
    {
        "id": "TCH-1005",
        "sqlId": "11",
        "employeeId": "EMP-2026-005",
        "enrollId": "11",
        "name": "SHWETA RAGHAV",
        "designation": "Teacher",
        "department": "Secondary",
        "phone": "+91 97194 76606",
        "email": "shwetaraghav@dmps-school.edu.in",
        "joiningDate": "2023-10-09",
        "salary": 31000,
        "branchId": "BR-01",
        "status": "Active"
    },
    {
        "id": "TCH-1006",
        "sqlId": "12",
        "employeeId": "EMP-2026-006",
        "enrollId": "12",
        "name": "SWATI RAGHAV",
        "designation": "Teacher",
        "department": "Primary",
        "phone": "7417956314",
        "email": "swatiraghav@dmps-school.edu.in",
        "joiningDate": "2024-08-03",
        "salary": 32500,
        "branchId": "BR-01",
        "status": "Active"
    },
    {
        "id": "TCH-1007",
        "sqlId": "13",
        "employeeId": "EMP-2026-007",
        "enrollId": "13",
        "name": "AKHILESH AGRAWAL",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "phone": "8377933435",
        "email": "agrawaldolly72@gmail.com",
        "joiningDate": "2022-04-20",
        "salary": 34000,
        "branchId": "BR-01",
        "status": "Active"
    },
    {
        "id": "TCH-1008",
        "sqlId": "14",
        "employeeId": "EMP-2026-008",
        "enrollId": "14",
        "name": "PREMLATA DEVI",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "phone": "+91 97194 76606",
        "email": "premlatadevi@dmps-school.edu.in",
        "joiningDate": "2023-07-01",
        "salary": 35500,
        "branchId": "BR-01",
        "status": "Active"
    },
    {
        "id": "TCH-1009",
        "sqlId": "15",
        "employeeId": "EMP-2026-009",
        "enrollId": "15",
        "name": "SANJANA PATHAK",
        "designation": "Teacher",
        "department": "Junior",
        "phone": "7906380758",
        "email": "sanjanapathak@dmps-school.edu.in",
        "joiningDate": "2024-05-24",
        "salary": 37000,
        "branchId": "BR-01",
        "status": "Active"
    },
    {
        "id": "TCH-1010",
        "sqlId": "16",
        "employeeId": "EMP-2026-010",
        "enrollId": "16",
        "name": "RACHANA DEVI",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "phone": "9761998627",
        "email": "rachanadevi@dmps-school.edu.in",
        "joiningDate": "2023-04-01",
        "salary": 38500,
        "branchId": "BR-01",
        "status": "Active"
    },
    {
        "id": "TCH-1011",
        "sqlId": "17",
        "employeeId": "EMP-2026-011",
        "enrollId": "17",
        "name": "PRAMOD KUMAR SHARMA",
        "designation": "Teacher",
        "department": "Secondary",
        "phone": "+91 97194 76606",
        "email": "pramodkumarsharma@dmps-school.edu.in",
        "joiningDate": "2013-07-05",
        "salary": 40000,
        "branchId": "BR-01",
        "status": "Active"
    },
    {
        "id": "TCH-1012",
        "sqlId": "18",
        "employeeId": "EMP-2026-012",
        "enrollId": "18",
        "name": "MOHINI CHAUHAN",
        "designation": "Teacher",
        "department": "Primary",
        "phone": "9528626183",
        "email": "mohinichauhan@dmps-school.edu.in",
        "joiningDate": "2024-05-24",
        "salary": 41500,
        "branchId": "BR-01",
        "status": "Active"
    },
    {
        "id": "TCH-1013",
        "sqlId": "19",
        "employeeId": "EMP-2026-013",
        "enrollId": "19",
        "name": "RAJENDRA SINGH",
        "designation": "Teacher",
        "department": "Primary",
        "phone": "8650789503",
        "email": "rajendrasingh@dmps-school.edu.in",
        "joiningDate": "2013-04-01",
        "salary": 43000,
        "branchId": "BR-01",
        "status": "Active"
    },
    {
        "id": "TCH-1014",
        "sqlId": "20",
        "employeeId": "EMP-2026-014",
        "enrollId": "20",
        "name": "JAYMALA",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "phone": "6397715291",
        "email": "jaymala@dmps-school.edu.in",
        "joiningDate": "2025-11-26",
        "salary": 44500,
        "branchId": "BR-01",
        "status": "Active"
    },
    {
        "id": "TCH-1015",
        "sqlId": "21",
        "employeeId": "EMP-2026-015",
        "enrollId": "21",
        "name": "LALIT KUMAR",
        "designation": "Teacher",
        "department": "Secondary",
        "phone": "7011633699",
        "email": "lali.sharma.p09@gmail.com",
        "joiningDate": "2025-11-01",
        "salary": 46000,
        "branchId": "BR-01",
        "status": "Active"
    },
    {
        "id": "TCH-1016",
        "sqlId": "22",
        "employeeId": "EMP-2026-016",
        "enrollId": "22",
        "name": "CHOKHELAL",
        "designation": "Driver",
        "department": "Transport",
        "phone": "9719375242",
        "email": "chokhelal@dmps-school.edu.in",
        "joiningDate": "2025-07-02",
        "salary": 47500,
        "branchId": "BR-01",
        "status": "Active"
    },
    {
        "id": "TCH-1017",
        "sqlId": "23",
        "employeeId": "EMP-2026-017",
        "enrollId": "23",
        "name": "NEETU SHARMA",
        "designation": "Teacher",
        "department": "Junior",
        "phone": "9759553692",
        "email": "neetusharma19k@gmail.com",
        "joiningDate": "2019-05-02",
        "salary": 49000,
        "branchId": "BR-01",
        "status": "Active"
    },
    {
        "id": "TCH-1018",
        "sqlId": "24",
        "employeeId": "EMP-2026-018",
        "enrollId": "24",
        "name": "SONU KUMAR",
        "designation": "Driver",
        "department": "Transport",
        "phone": "9627739384",
        "email": "ks4760481@gmail.com",
        "joiningDate": "2026-03-01",
        "salary": 50500,
        "branchId": "BR-01",
        "status": "Active"
    },
    {
        "id": "TCH-1019",
        "sqlId": "25",
        "employeeId": "EMP-2026-019",
        "enrollId": "25",
        "name": "Prashant Kumar Rajput",
        "designation": "Principal",
        "department": "Senior Secondary",
        "phone": "9719476606",
        "email": "prashantkumarrajput@dmps-school.edu.in",
        "joiningDate": "2026-08-07",
        "salary": 52000,
        "branchId": "BR-01",
        "status": "Active"
    },
    {
        "id": "TCH-1020",
        "sqlId": "26",
        "employeeId": "EMP-2026-020",
        "enrollId": "26",
        "name": "KHUSHI",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "phone": "+91 97194 76606",
        "email": "khushi@dmps-school.edu.in",
        "joiningDate": "2026-07-01",
        "salary": 53500,
        "branchId": "BR-01",
        "status": "Active"
    },
    {
        "id": "TCH-1021",
        "sqlId": "27",
        "employeeId": "EMP-2026-021",
        "enrollId": "27",
        "name": "SANDHYA",
        "designation": "Teacher",
        "department": "Primary",
        "phone": "+91 97194 76606",
        "email": "sandhya@dmps-school.edu.in",
        "joiningDate": "2026-07-01",
        "salary": 55000,
        "branchId": "BR-01",
        "status": "Active"
    },
    {
        "id": "TCH-1022",
        "sqlId": "28",
        "employeeId": "EMP-2026-022",
        "enrollId": "28",
        "name": "Aarti",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "phone": "+91 97194 76606",
        "email": "aarti@dmps-school.edu.in",
        "joiningDate": "2026-07-01",
        "salary": 56500,
        "branchId": "BR-01",
        "status": "Active"
    },
    {
        "id": "TCH-1023",
        "sqlId": "29",
        "employeeId": "EMP-2026-023",
        "enrollId": "29",
        "name": "SEJAL AGRAWAL",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "phone": "8377933435",
        "email": "sejalagrawal@dmps-school.edu.in",
        "joiningDate": "2026-04-01",
        "salary": 58000,
        "branchId": "BR-01",
        "status": "Active"
    }
],

  students: [
    {
        "id": "STU-2026-001",
        "sqlId": "1",
        "admissionNo": "119",
        "rollNo": "0",
        "name": "DEEPAK KUMAR",
        "dob": "2011-02-27",
        "gender": "Male",
        "bloodGroup": "O+",
        "class": "XI",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 82,
            "percentage": 93.2
        },
        "feeSummary": {
            "totalDue": 18000,
            "totalPaid": 0,
            "balance": 18000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-002",
        "sqlId": "2",
        "admissionNo": "120",
        "rollNo": "0",
        "name": "KM. NIDHI",
        "dob": "2010-09-26",
        "gender": "Female",
        "bloodGroup": "O+",
        "class": "XI",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 83,
            "percentage": 94.3
        },
        "feeSummary": {
            "totalDue": 19500,
            "totalPaid": 0,
            "balance": 19500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-003",
        "sqlId": "3",
        "admissionNo": "121",
        "rollNo": "0",
        "name": "PRIYANSHU KUMAR",
        "dob": "2010-03-12",
        "gender": "Male",
        "bloodGroup": "O+",
        "class": "XI",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "MANOJ KUMAR",
            "motherName": "LAXMI",
            "fatherMobile": "+91 9761089039",
            "address": "KANAKPUR"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 84,
            "percentage": 95.5
        },
        "feeSummary": {
            "totalDue": 21000,
            "totalPaid": 0,
            "balance": 21000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-004",
        "sqlId": "4",
        "admissionNo": "122",
        "rollNo": "0",
        "name": "RITU YADAV",
        "dob": "2011-01-01",
        "gender": "Female",
        "bloodGroup": "O+",
        "class": "XI",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "SURENDRA SINGH",
            "motherName": "KAMLESH",
            "fatherMobile": "+91 9758882443",
            "address": "JARGWAN"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 85,
            "percentage": 96.6
        },
        "feeSummary": {
            "totalDue": 22500,
            "totalPaid": 0,
            "balance": 22500,
            "status": "Pending"
        },
        "siblings": [
            "STU-2026-098"
        ]
    },
    {
        "id": "STU-2026-005",
        "sqlId": "5",
        "admissionNo": "123",
        "rollNo": "0",
        "name": "SOHIL",
        "dob": "2011-05-09",
        "gender": "Male",
        "bloodGroup": "O+",
        "class": "XI",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "BHURE KHAN",
            "motherName": "NAZMA BEGAM",
            "fatherMobile": "+91 9548255028",
            "address": "KALIYANPUR BHAGIRATHPUR"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 86,
            "percentage": 97.7
        },
        "feeSummary": {
            "totalDue": 24000,
            "totalPaid": 0,
            "balance": 24000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-006",
        "sqlId": "6",
        "admissionNo": "124",
        "rollNo": "0",
        "name": "SOMVEER SINGH",
        "dob": "2010-06-15",
        "gender": "Male",
        "bloodGroup": "O+",
        "class": "XI",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "DINESH KUMAR",
            "motherName": "JHHANKA DEVI",
            "fatherMobile": "+91 9720002824",
            "address": "BAIJALA KOTHI"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 87,
            "percentage": 98.9
        },
        "feeSummary": {
            "totalDue": 25500,
            "totalPaid": 0,
            "balance": 25500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-007",
        "sqlId": "7",
        "admissionNo": "125",
        "rollNo": "0",
        "name": "SUGANDHI",
        "dob": "2009-08-05",
        "gender": "Female",
        "bloodGroup": "O+",
        "class": "XI",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "SANJAY KUMAR",
            "motherName": "VEENA",
            "fatherMobile": "+91 6395011712",
            "address": "MOUNIPURA Urf RAMVAS"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 88,
            "percentage": 100.0
        },
        "feeSummary": {
            "totalDue": 27000,
            "totalPaid": 0,
            "balance": 27000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-008",
        "sqlId": "8",
        "admissionNo": "126",
        "rollNo": "0",
        "name": "YAMINI",
        "dob": "2010-04-04",
        "gender": "Female",
        "bloodGroup": "O+",
        "class": "XI",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "RAJESH KUMAR",
            "motherName": "MITHLESH DEVI",
            "fatherMobile": "+91 9758143201",
            "address": "MUDAKHERA"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 82,
            "percentage": 93.2
        },
        "feeSummary": {
            "totalDue": 28500,
            "totalPaid": 0,
            "balance": 28500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-009",
        "sqlId": "9",
        "admissionNo": "127",
        "rollNo": "0",
        "name": "ABHISHEK RAGHAV",
        "dob": "2012-11-06",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "X",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "OMPAL SINGH",
            "motherName": "SUMITRA",
            "fatherMobile": "+91 9719269114",
            "address": "MUHAMMADPUR BADHAIRA"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 83,
            "percentage": 94.3
        },
        "feeSummary": {
            "totalDue": 18000,
            "totalPaid": 0,
            "balance": 18000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-010",
        "sqlId": "10",
        "admissionNo": "128",
        "rollNo": "0",
        "name": "ANJALI VERMA",
        "dob": "2011-01-25",
        "gender": "female",
        "bloodGroup": "O+",
        "class": "X",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 84,
            "percentage": 95.5
        },
        "feeSummary": {
            "totalDue": 19500,
            "totalPaid": 0,
            "balance": 19500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-011",
        "sqlId": "11",
        "admissionNo": "131",
        "rollNo": "0",
        "name": "LOVEKUSH",
        "dob": "2011-10-15",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "X",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "KANHAIYALAL",
            "motherName": "VIMLESH DEVI",
            "fatherMobile": "+91 9528285732",
            "address": "MUHAMMADPUR"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 85,
            "percentage": 96.6
        },
        "feeSummary": {
            "totalDue": 21000,
            "totalPaid": 0,
            "balance": 21000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-012",
        "sqlId": "12",
        "admissionNo": "132",
        "rollNo": "0",
        "name": "MANISH KUMAR",
        "dob": "2011-06-19",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "X",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "DEVESH KUMAR",
            "motherName": "MEENESH DEVI",
            "fatherMobile": "+91 8057001707",
            "address": "GANGA GARH"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 86,
            "percentage": 97.7
        },
        "feeSummary": {
            "totalDue": 22500,
            "totalPaid": 0,
            "balance": 22500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-013",
        "sqlId": "13",
        "admissionNo": "133",
        "rollNo": "0",
        "name": "NANDANI TOMAR",
        "dob": "2011-09-13",
        "gender": "female",
        "bloodGroup": "O+",
        "class": "X",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "ANIL TOMAR",
            "motherName": "POONAM DEVI",
            "fatherMobile": "+91 7505158052",
            "address": "MUHAMMADPUR BADHERA"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 87,
            "percentage": 98.9
        },
        "feeSummary": {
            "totalDue": 24000,
            "totalPaid": 0,
            "balance": 24000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-014",
        "sqlId": "14",
        "admissionNo": "134",
        "rollNo": "0",
        "name": "NEHA",
        "dob": "2011-07-15",
        "gender": "female",
        "bloodGroup": "O+",
        "class": "X",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "JAYPAL SINGH",
            "motherName": "MEENA KUMARI",
            "fatherMobile": "+91 9258459987",
            "address": "JARGWAN"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 88,
            "percentage": 100.0
        },
        "feeSummary": {
            "totalDue": 25500,
            "totalPaid": 0,
            "balance": 25500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-015",
        "sqlId": "15",
        "admissionNo": "135",
        "rollNo": "0",
        "name": "NITISH RAGHAV",
        "dob": "2010-10-10",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "X",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "AVDHESH KUMAR",
            "motherName": "REKHA",
            "fatherMobile": "+91 522808879",
            "address": "HARVANSHPUR JIROULI DHOOM SINGH ALIGARH"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 82,
            "percentage": 93.2
        },
        "feeSummary": {
            "totalDue": 27000,
            "totalPaid": 0,
            "balance": 27000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-016",
        "sqlId": "16",
        "admissionNo": "136",
        "rollNo": "0",
        "name": "NITIN KUMAR KUMAR",
        "dob": "2011-10-01",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "X",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "RAJESH KUMAR",
            "motherName": "SAROJ DEVI",
            "fatherMobile": "+91 9719477271",
            "address": "MOUNIPURA RAMGHAT"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 83,
            "percentage": 94.3
        },
        "feeSummary": {
            "totalDue": 28500,
            "totalPaid": 0,
            "balance": 28500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-017",
        "sqlId": "18",
        "admissionNo": "140",
        "rollNo": "0",
        "name": "SACHIN KUMAR",
        "dob": "2015-11-12",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "X",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "CHARAN SINGH",
            "motherName": "KESHVATI DEVI",
            "fatherMobile": "+91 9536221981",
            "address": "KALIYANPUR BHAGIRATH PUR ALIGARH"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 84,
            "percentage": 95.5
        },
        "feeSummary": {
            "totalDue": 18000,
            "totalPaid": 0,
            "balance": 18000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-018",
        "sqlId": "19",
        "admissionNo": "141",
        "rollNo": "0",
        "name": "SANJEEV KUMAR",
        "dob": "2012-07-01",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "X",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "RAMBABU",
            "motherName": "RANI DEVI",
            "fatherMobile": "+91 9389530670",
            "address": "KALIYANPUR BHAGIRATH PUR ALIGARH"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 85,
            "percentage": 96.6
        },
        "feeSummary": {
            "totalDue": 19500,
            "totalPaid": 0,
            "balance": 19500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-019",
        "sqlId": "20",
        "admissionNo": "143",
        "rollNo": "0",
        "name": "SHIVANI YADAV",
        "dob": "2011-02-03",
        "gender": "female",
        "bloodGroup": "O+",
        "class": "X",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "RAJESHWAR SINGH",
            "motherName": "BRIJESH DEVI",
            "fatherMobile": "+91 7037345114",
            "address": "CHIROURI"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 86,
            "percentage": 97.7
        },
        "feeSummary": {
            "totalDue": 21000,
            "totalPaid": 0,
            "balance": 21000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-020",
        "sqlId": "21",
        "admissionNo": "144",
        "rollNo": "0",
        "name": "SUMIT KUMAR",
        "dob": "2011-08-08",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "X",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "HARPAL SINGH",
            "motherName": "KAMLESH",
            "fatherMobile": "+91 7060800275",
            "address": "MUHAMMADPUR BADHERA"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 87,
            "percentage": 98.9
        },
        "feeSummary": {
            "totalDue": 22500,
            "totalPaid": 0,
            "balance": 22500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-021",
        "sqlId": "22",
        "admissionNo": "145",
        "rollNo": "0",
        "name": "UMESH KUMAR",
        "dob": "2012-01-02",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "X",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "SHRIPAL SINGH",
            "motherName": "MEENA DEVI",
            "fatherMobile": "+91 8869872067",
            "address": "KALIYANPUR"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 88,
            "percentage": 100.0
        },
        "feeSummary": {
            "totalDue": 24000,
            "totalPaid": 0,
            "balance": 24000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-022",
        "sqlId": "23",
        "admissionNo": "146",
        "rollNo": "0",
        "name": "YOGENDRA KUMAR",
        "dob": "2011-04-02",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "X",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "SHIVSHANKAR",
            "motherName": "KALAVATI",
            "fatherMobile": "+91 7983438183",
            "address": "NAGLA SHUMALI BULAND SHAHR"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 82,
            "percentage": 93.2
        },
        "feeSummary": {
            "totalDue": 25500,
            "totalPaid": 0,
            "balance": 25500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-023",
        "sqlId": "25",
        "admissionNo": "149",
        "rollNo": "39",
        "name": "ARVIND KUMAR",
        "dob": "2012-03-02",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "IX",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "KALIYAN SINGH",
            "motherName": "PUSHPA DEVI",
            "fatherMobile": "+91 97194 76606",
            "address": "KALIYANPUR BHAGIRATHPUR"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 83,
            "percentage": 94.3
        },
        "feeSummary": {
            "totalDue": 27000,
            "totalPaid": 0,
            "balance": 27000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-024",
        "sqlId": "26",
        "admissionNo": "150",
        "rollNo": "41",
        "name": "DEEKSHA LODHI",
        "dob": "2012-08-19",
        "gender": "female",
        "bloodGroup": "O+",
        "class": "IX",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "RAKESH KUMAR",
            "motherName": "NEERU VERMA",
            "fatherMobile": "+91 9627722404",
            "address": "MUHAMMADPUR BADHERA"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 84,
            "percentage": 95.5
        },
        "feeSummary": {
            "totalDue": 28500,
            "totalPaid": 0,
            "balance": 28500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-025",
        "sqlId": "31",
        "admissionNo": "DM 333",
        "rollNo": "4",
        "name": "JANVI AGRAWAL",
        "dob": "2012-12-27",
        "gender": "female",
        "bloodGroup": "O+",
        "class": "IX",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "YOGENDRA KUMAR",
            "motherName": "DEEPIKA AGRAWAL",
            "fatherMobile": "+91 9027732734",
            "address": "JARGAWAN"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 85,
            "percentage": 96.6
        },
        "feeSummary": {
            "totalDue": 18000,
            "totalPaid": 0,
            "balance": 18000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-026",
        "sqlId": "32",
        "admissionNo": "156",
        "rollNo": "5",
        "name": "KAVYA RAHI",
        "dob": "2011-09-18",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "IX",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "RAJ KUMAR",
            "motherName": "VIJAY DEVI",
            "fatherMobile": "+91 9720493362",
            "address": "MUHAMMADPUR BADHERA"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 86,
            "percentage": 97.7
        },
        "feeSummary": {
            "totalDue": 19500,
            "totalPaid": 0,
            "balance": 19500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-027",
        "sqlId": "33",
        "admissionNo": "157",
        "rollNo": "0",
        "name": "KHUSHI RAJPUT",
        "dob": "2011-12-25",
        "gender": "female",
        "bloodGroup": "O+",
        "class": "X",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 87,
            "percentage": 98.9
        },
        "feeSummary": {
            "totalDue": 21000,
            "totalPaid": 0,
            "balance": 21000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-028",
        "sqlId": "35",
        "admissionNo": "159",
        "rollNo": "7",
        "name": "LAKSHYA AGRAWAL",
        "dob": "2012-05-12",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "IX",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "JAGDISH AGRAWAL",
            "motherName": "AKHLESH AGRAWAL",
            "fatherMobile": "+91 8377933435",
            "address": "VILL+POST- JARGWAN"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 88,
            "percentage": 100.0
        },
        "feeSummary": {
            "totalDue": 22500,
            "totalPaid": 0,
            "balance": 22500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-029",
        "sqlId": "36",
        "admissionNo": "160",
        "rollNo": "0",
        "name": "LALIT KUMAR",
        "dob": "2013-03-12",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "IX",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "HARGOVIND",
            "motherName": "RAJESH DEVI",
            "fatherMobile": "+91 9675652080",
            "address": "JARGWAN"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 82,
            "percentage": 93.2
        },
        "feeSummary": {
            "totalDue": 24000,
            "totalPaid": 0,
            "balance": 24000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-030",
        "sqlId": "37",
        "admissionNo": "161",
        "rollNo": "6",
        "name": "KUMARI MADHU",
        "dob": "2013-02-23",
        "gender": "female",
        "bloodGroup": "O+",
        "class": "IX",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "RATIRAM",
            "motherName": "SOUNKALI DEVI",
            "fatherMobile": "+91 9761205726",
            "address": "JARGWAN"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 83,
            "percentage": 94.3
        },
        "feeSummary": {
            "totalDue": 25500,
            "totalPaid": 0,
            "balance": 25500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-031",
        "sqlId": "40",
        "admissionNo": "164",
        "rollNo": "9",
        "name": "MOHIT KUMAR",
        "dob": "2012-10-25",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "IX",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "MANOJ KUMAR",
            "motherName": "ANITA DEVI",
            "fatherMobile": "+91 8650741987",
            "address": "NAGLA KOTHI"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 84,
            "percentage": 95.5
        },
        "feeSummary": {
            "totalDue": 27000,
            "totalPaid": 0,
            "balance": 27000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-032",
        "sqlId": "42",
        "admissionNo": "166",
        "rollNo": "10",
        "name": "MUSKAN",
        "dob": "2012-07-14",
        "gender": "female",
        "bloodGroup": "O+",
        "class": "IX",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "KISHOR KUMAR",
            "motherName": "MANJU DEVI",
            "fatherMobile": "+91 9520755383",
            "address": "NAGLA KOTHI"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 85,
            "percentage": 96.6
        },
        "feeSummary": {
            "totalDue": 28500,
            "totalPaid": 0,
            "balance": 28500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-033",
        "sqlId": "44",
        "admissionNo": "168",
        "rollNo": "0",
        "name": "PREM SAGAR",
        "dob": "2012-05-15",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "IX",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "JAY PAL SINGH",
            "motherName": "MEENA KUMARI",
            "fatherMobile": "+91 7668249848",
            "address": "JARGWAN"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 86,
            "percentage": 97.7
        },
        "feeSummary": {
            "totalDue": 18000,
            "totalPaid": 0,
            "balance": 18000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-034",
        "sqlId": "46",
        "admissionNo": "170",
        "rollNo": "11",
        "name": "SAIJAL VERMA",
        "dob": "2012-06-12",
        "gender": "female",
        "bloodGroup": "O+",
        "class": "IX",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "SANJAY KUMAR",
            "motherName": "NIRMALA DEVI",
            "fatherMobile": "+91 9719225317",
            "address": "MUHAMMADPUR BADHERA"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 87,
            "percentage": 98.9
        },
        "feeSummary": {
            "totalDue": 19500,
            "totalPaid": 0,
            "balance": 19500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-035",
        "sqlId": "47",
        "admissionNo": "171",
        "rollNo": "35",
        "name": "SANI KUMAR",
        "dob": "2012-08-26",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "IX",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "SUBODH KUMAR",
            "motherName": "KUSUM DEVI",
            "fatherMobile": "+91 9675889195",
            "address": "NAGLA KOTHI"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 88,
            "percentage": 100.0
        },
        "feeSummary": {
            "totalDue": 21000,
            "totalPaid": 0,
            "balance": 21000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-036",
        "sqlId": "48",
        "admissionNo": "172",
        "rollNo": "37",
        "name": "TANYA",
        "dob": "2014-09-10",
        "gender": "female",
        "bloodGroup": "O+",
        "class": "IX",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 82,
            "percentage": 93.2
        },
        "feeSummary": {
            "totalDue": 22500,
            "totalPaid": 0,
            "balance": 22500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-037",
        "sqlId": "50",
        "admissionNo": "174",
        "rollNo": "38",
        "name": "VARSHA",
        "dob": "2012-10-21",
        "gender": "female",
        "bloodGroup": "O+",
        "class": "IX",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "CHANDRAKESH",
            "motherName": "HEERA DEVI",
            "fatherMobile": "+91 9758917731",
            "address": "NAGLA KOTHI"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 83,
            "percentage": 94.3
        },
        "feeSummary": {
            "totalDue": 24000,
            "totalPaid": 0,
            "balance": 24000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-038",
        "sqlId": "52",
        "admissionNo": "178",
        "rollNo": "12",
        "name": "ANSH KUMAR",
        "dob": "2013-06-30",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "VIII",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "TEEKAM SINGH",
            "motherName": "SAPANA DEVI",
            "fatherMobile": "+91 9149334245",
            "address": "DHARAKPUR"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 84,
            "percentage": 95.5
        },
        "feeSummary": {
            "totalDue": 25500,
            "totalPaid": 0,
            "balance": 25500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-039",
        "sqlId": "53",
        "admissionNo": "180",
        "rollNo": "13",
        "name": "ASHUTOSH YADAV",
        "dob": "2013-01-28",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "VIII",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "JAYPAL SINGH",
            "motherName": "SUMAN DEVI",
            "fatherMobile": "+91 9728918721",
            "address": "CHIROURI"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 85,
            "percentage": 96.6
        },
        "feeSummary": {
            "totalDue": 27000,
            "totalPaid": 0,
            "balance": 27000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-040",
        "sqlId": "55",
        "admissionNo": "182",
        "rollNo": "0",
        "name": "GOURAV KUMAR",
        "dob": "2013-08-23",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "VIII",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 86,
            "percentage": 97.7
        },
        "feeSummary": {
            "totalDue": 28500,
            "totalPaid": 0,
            "balance": 28500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-041",
        "sqlId": "56",
        "admissionNo": "183",
        "rollNo": "17",
        "name": "HARSH KAUSHIK",
        "dob": "2014-03-22",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "VIII",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 87,
            "percentage": 98.9
        },
        "feeSummary": {
            "totalDue": 18000,
            "totalPaid": 0,
            "balance": 18000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-042",
        "sqlId": "57",
        "admissionNo": "185",
        "rollNo": "18",
        "name": "JEETU BAGHEL",
        "dob": "2013-05-05",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "VIII",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "ABHIJEET SINGH",
            "motherName": "NARAYANI DEVI",
            "fatherMobile": "+91 9899289271",
            "address": "KALIYANPUR BHAGIRATHPUR"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 88,
            "percentage": 100.0
        },
        "feeSummary": {
            "totalDue": 19500,
            "totalPaid": 0,
            "balance": 19500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-043",
        "sqlId": "59",
        "admissionNo": "188",
        "rollNo": "19",
        "name": "KRISHNA",
        "dob": "2012-03-29",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "VIII",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "SHASHIKANT",
            "motherName": "NEERAJ",
            "fatherMobile": "+91 7253015262",
            "address": "MAHARAJPUR"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 82,
            "percentage": 93.2
        },
        "feeSummary": {
            "totalDue": 21000,
            "totalPaid": 0,
            "balance": 21000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-044",
        "sqlId": "62",
        "admissionNo": "192",
        "rollNo": "22",
        "name": "NEHA YADAV",
        "dob": "2012-11-26",
        "gender": "female",
        "bloodGroup": "O+",
        "class": "VIII",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 83,
            "percentage": 94.3
        },
        "feeSummary": {
            "totalDue": 22500,
            "totalPaid": 0,
            "balance": 22500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-045",
        "sqlId": "63",
        "admissionNo": "193",
        "rollNo": "23",
        "name": "NIDHI",
        "dob": "2013-05-07",
        "gender": "female",
        "bloodGroup": "O+",
        "class": "VIII",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 84,
            "percentage": 95.5
        },
        "feeSummary": {
            "totalDue": 24000,
            "totalPaid": 0,
            "balance": 24000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-046",
        "sqlId": "64",
        "admissionNo": "194",
        "rollNo": "24",
        "name": "NISHANT KUMAR",
        "dob": "2014-02-08",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "VIII",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 85,
            "percentage": 96.6
        },
        "feeSummary": {
            "totalDue": 25500,
            "totalPaid": 0,
            "balance": 25500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-047",
        "sqlId": "65",
        "admissionNo": "196",
        "rollNo": "25",
        "name": "NITISH KUMAR",
        "dob": "2013-09-05",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "VIII",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "HITESH KUMAR",
            "motherName": "SUMAN DEVI",
            "fatherMobile": "+91 9719628771",
            "address": "NAGLA VIDHI"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 86,
            "percentage": 97.7
        },
        "feeSummary": {
            "totalDue": 27000,
            "totalPaid": 0,
            "balance": 27000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-048",
        "sqlId": "69",
        "admissionNo": "201",
        "rollNo": "26",
        "name": "PRANJUL KUMAR",
        "dob": "2013-05-10",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "VIII",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "RAMESH CHANDRA",
            "motherName": "GEETA DEVI",
            "fatherMobile": "+91 9780410371",
            "address": "KALIYANPUR BHAGIRATHPUR"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 87,
            "percentage": 98.9
        },
        "feeSummary": {
            "totalDue": 28500,
            "totalPaid": 0,
            "balance": 28500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-049",
        "sqlId": "71",
        "admissionNo": "204",
        "rollNo": "27",
        "name": "RIMSHA GAUTAM",
        "dob": "2014-08-07",
        "gender": "female",
        "bloodGroup": "O+",
        "class": "VIII",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "ANSHUL KUMAR",
            "motherName": "POOJA DEVI",
            "fatherMobile": "+91 97194 76606",
            "address": "SILHARI RAMGHAT"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 88,
            "percentage": 100.0
        },
        "feeSummary": {
            "totalDue": 18000,
            "totalPaid": 0,
            "balance": 18000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-050",
        "sqlId": "72",
        "admissionNo": "205",
        "rollNo": "28",
        "name": "ROVIN KUMAR",
        "dob": "2013-03-02",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "VIII",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "HARPAL SINGH",
            "motherName": "RADHA DEVI",
            "fatherMobile": "+91 9412642002",
            "address": "BAIJALA KOTHI ALIGARH"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 82,
            "percentage": 93.2
        },
        "feeSummary": {
            "totalDue": 19500,
            "totalPaid": 0,
            "balance": 19500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-051",
        "sqlId": "73",
        "admissionNo": "206",
        "rollNo": "29",
        "name": "RUDRA NAYAK",
        "dob": "2013-03-02",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "VIII",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "NARENDRA KUMAR",
            "motherName": "JYOTI DEVI",
            "fatherMobile": "+91 8395023508",
            "address": "MAHARAJPUR"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 83,
            "percentage": 94.3
        },
        "feeSummary": {
            "totalDue": 21000,
            "totalPaid": 0,
            "balance": 21000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-052",
        "sqlId": "74",
        "admissionNo": "207",
        "rollNo": "30",
        "name": "SANTOSH KUMAR",
        "dob": "2012-03-12",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "VIII",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "BANTI KUMAR",
            "motherName": "MEERA DEVI",
            "fatherMobile": "+91 7252826099",
            "address": "KALIYANPUR BHAGIRATHIPUR"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 84,
            "percentage": 95.5
        },
        "feeSummary": {
            "totalDue": 22500,
            "totalPaid": 0,
            "balance": 22500,
            "status": "Pending"
        },
        "siblings": [
            "STU-2026-325",
            "STU-2026-326"
        ]
    },
    {
        "id": "STU-2026-053",
        "sqlId": "76",
        "admissionNo": "209",
        "rollNo": "32",
        "name": "SHIVAM KUMAR",
        "dob": "2011-12-30",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "VIII",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 85,
            "percentage": 96.6
        },
        "feeSummary": {
            "totalDue": 24000,
            "totalPaid": 0,
            "balance": 24000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-054",
        "sqlId": "78",
        "admissionNo": "213",
        "rollNo": "33",
        "name": "VANDANA YADAV",
        "dob": "2013-11-02",
        "gender": "female",
        "bloodGroup": "O+",
        "class": "VIII",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 86,
            "percentage": 97.7
        },
        "feeSummary": {
            "totalDue": 25500,
            "totalPaid": 0,
            "balance": 25500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-055",
        "sqlId": "79",
        "admissionNo": "214",
        "rollNo": "34",
        "name": "VINEET KUMAR",
        "dob": "2013-09-14",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "VIII",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "MAHENDRA SINGH",
            "motherName": "GAYATRI DEVI",
            "fatherMobile": "+91 6396359958",
            "address": "KALIYANPUR BHAGIRATHPUR"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 87,
            "percentage": 98.9
        },
        "feeSummary": {
            "totalDue": 27000,
            "totalPaid": 0,
            "balance": 27000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-056",
        "sqlId": "80",
        "admissionNo": "215",
        "rollNo": "43",
        "name": "AKHLESH KUMAR",
        "dob": "2013-01-01",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "VII",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 88,
            "percentage": 100.0
        },
        "feeSummary": {
            "totalDue": 28500,
            "totalPaid": 0,
            "balance": 28500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-057",
        "sqlId": "81",
        "admissionNo": "217",
        "rollNo": "0",
        "name": "ANURAG",
        "dob": "2013-04-20",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "VII",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "RAJESHWAR SINGH",
            "motherName": "BRIJESH DEVI",
            "fatherMobile": "+91 9536057526",
            "address": "CHIROURI (BULANDSHAHR)"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 82,
            "percentage": 93.2
        },
        "feeSummary": {
            "totalDue": 18000,
            "totalPaid": 0,
            "balance": 18000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-058",
        "sqlId": "82",
        "admissionNo": "218",
        "rollNo": "44",
        "name": "ARJOO YADAV",
        "dob": "2013-12-06",
        "gender": "female",
        "bloodGroup": "O+",
        "class": "VII",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 83,
            "percentage": 94.3
        },
        "feeSummary": {
            "totalDue": 19500,
            "totalPaid": 0,
            "balance": 19500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-059",
        "sqlId": "83",
        "admissionNo": "220",
        "rollNo": "45",
        "name": "BADAL KUMAR",
        "dob": "2014-07-05",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "VII",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 84,
            "percentage": 95.5
        },
        "feeSummary": {
            "totalDue": 21000,
            "totalPaid": 0,
            "balance": 21000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-060",
        "sqlId": "85",
        "admissionNo": "225",
        "rollNo": "57",
        "name": "HOMESH KUMAR",
        "dob": "2014-08-06",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "VII",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 85,
            "percentage": 96.6
        },
        "feeSummary": {
            "totalDue": 22500,
            "totalPaid": 0,
            "balance": 22500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-061",
        "sqlId": "87",
        "admissionNo": "228",
        "rollNo": "0",
        "name": "MANSI YADAV",
        "dob": "2014-08-09",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "VII",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 86,
            "percentage": 97.7
        },
        "feeSummary": {
            "totalDue": 24000,
            "totalPaid": 0,
            "balance": 24000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-062",
        "sqlId": "88",
        "admissionNo": "230",
        "rollNo": "60",
        "name": "MAYANK KUMAR",
        "dob": "2014-12-07",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "VII",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "MAHESH CHANDRA",
            "motherName": "KAMLESH DEVI",
            "fatherMobile": "+91 9627106153",
            "address": "MUDAKHERA"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 87,
            "percentage": 98.9
        },
        "feeSummary": {
            "totalDue": 25500,
            "totalPaid": 0,
            "balance": 25500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-063",
        "sqlId": "89",
        "admissionNo": "231",
        "rollNo": "11",
        "name": "MAYANK RAJ VERMA",
        "dob": "2015-02-16",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "VII",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 88,
            "percentage": 100.0
        },
        "feeSummary": {
            "totalDue": 27000,
            "totalPaid": 0,
            "balance": 27000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-064",
        "sqlId": "90",
        "admissionNo": "232",
        "rollNo": "61",
        "name": "NAVNEET YADAV",
        "dob": "2014-08-27",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "VII",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "SURENDRA SINGH",
            "motherName": "KAMLESH DEVI",
            "fatherMobile": "+91 7017094734",
            "address": "JARGWAN"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 82,
            "percentage": 93.2
        },
        "feeSummary": {
            "totalDue": 28500,
            "totalPaid": 0,
            "balance": 28500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-065",
        "sqlId": "91",
        "admissionNo": "233",
        "rollNo": "62",
        "name": "NITIN KUMAR",
        "dob": "2014-06-22",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "VII",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "RAM KISHOR",
            "motherName": "VANDANA DEVI",
            "fatherMobile": "+91 9759840340",
            "address": "NATHPUR POST-NAHAL"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 83,
            "percentage": 94.3
        },
        "feeSummary": {
            "totalDue": 18000,
            "totalPaid": 0,
            "balance": 18000,
            "status": "Pending"
        },
        "siblings": [
            "STU-2026-149"
        ]
    },
    {
        "id": "STU-2026-066",
        "sqlId": "92",
        "admissionNo": "235",
        "rollNo": "64",
        "name": "PRINCE YADAV",
        "dob": "2012-06-15",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "VII",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 84,
            "percentage": 95.5
        },
        "feeSummary": {
            "totalDue": 19500,
            "totalPaid": 0,
            "balance": 19500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-067",
        "sqlId": "94",
        "admissionNo": "237",
        "rollNo": "65",
        "name": "PRIYANSHU KUMAR",
        "dob": "2014-02-28",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "VII",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "VIJAY SINGH",
            "motherName": "SUMANLATA",
            "fatherMobile": "+91 7505506603",
            "address": "JARGWAN"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 85,
            "percentage": 96.6
        },
        "feeSummary": {
            "totalDue": 21000,
            "totalPaid": 0,
            "balance": 21000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-068",
        "sqlId": "95",
        "admissionNo": "240",
        "rollNo": "66",
        "name": "RADHA",
        "dob": "2011-09-02",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "VII",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "JANGVEER SINGH",
            "motherName": "ROOPVATI DEVI",
            "fatherMobile": "+91 9675863965",
            "address": "KALIYANPUR BHAGIRATHPUR ATRAULI ALIGARH"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 86,
            "percentage": 97.7
        },
        "feeSummary": {
            "totalDue": 22500,
            "totalPaid": 0,
            "balance": 22500,
            "status": "Pending"
        },
        "siblings": [
            "STU-2026-076",
            "STU-2026-206"
        ]
    },
    {
        "id": "STU-2026-069",
        "sqlId": "96",
        "admissionNo": "241",
        "rollNo": "35",
        "name": "RISHITA",
        "dob": "2014-07-10",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "VII",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 87,
            "percentage": 98.9
        },
        "feeSummary": {
            "totalDue": 24000,
            "totalPaid": 0,
            "balance": 24000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-070",
        "sqlId": "97",
        "admissionNo": "242",
        "rollNo": "67",
        "name": "SACHIN",
        "dob": "2015-12-20",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "VII",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "BALKISAN",
            "motherName": "SHEETAL DEVI",
            "fatherMobile": "+91 7668414585",
            "address": "NAGLA GARVI"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 88,
            "percentage": 100.0
        },
        "feeSummary": {
            "totalDue": 25500,
            "totalPaid": 0,
            "balance": 25500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-071",
        "sqlId": "99",
        "admissionNo": "245",
        "rollNo": "68",
        "name": "SHIV KUMAR",
        "dob": "2014-11-20",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "VII",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "SURENDRA KUMAR",
            "motherName": "SUSHMA DEVI",
            "fatherMobile": "+91 9758512771",
            "address": "KALIYANPUR BHAGIRATHIPUR"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 82,
            "percentage": 93.2
        },
        "feeSummary": {
            "totalDue": 27000,
            "totalPaid": 0,
            "balance": 27000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-072",
        "sqlId": "100",
        "admissionNo": "246",
        "rollNo": "69",
        "name": "SHIVAM KUMAR",
        "dob": "2014-11-20",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "VII",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "AVDHESH KUMAR",
            "motherName": "KAJAL DEVI",
            "fatherMobile": "+91 9719948606",
            "address": "KALIYANPUR BHAGIRATHPUR ATRAULI"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 83,
            "percentage": 94.3
        },
        "feeSummary": {
            "totalDue": 28500,
            "totalPaid": 0,
            "balance": 28500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-073",
        "sqlId": "102",
        "admissionNo": "248",
        "rollNo": "70",
        "name": "SONAKSHI",
        "dob": "2013-02-20",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "VII",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 84,
            "percentage": 95.5
        },
        "feeSummary": {
            "totalDue": 18000,
            "totalPaid": 0,
            "balance": 18000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-074",
        "sqlId": "103",
        "admissionNo": "249",
        "rollNo": "71",
        "name": "TARUN KUMAR",
        "dob": "2014-01-01",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "VII",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 85,
            "percentage": 96.6
        },
        "feeSummary": {
            "totalDue": 19500,
            "totalPaid": 0,
            "balance": 19500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-075",
        "sqlId": "105",
        "admissionNo": "252",
        "rollNo": "0",
        "name": "UMA",
        "dob": "2014-05-09",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "VII",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 86,
            "percentage": 97.7
        },
        "feeSummary": {
            "totalDue": 21000,
            "totalPaid": 0,
            "balance": 21000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-076",
        "sqlId": "107",
        "admissionNo": "254",
        "rollNo": "66",
        "name": "AMIT KUMAR",
        "dob": "2015-10-04",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "VI",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "JANGVEER SINGH",
            "motherName": "ROOPVATI DEVI",
            "fatherMobile": "+91 9675863965",
            "address": "KALIYANPUR BHAGIRATHPUR ATRAULI ALIGARH"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 87,
            "percentage": 98.9
        },
        "feeSummary": {
            "totalDue": 22500,
            "totalPaid": 0,
            "balance": 22500,
            "status": "Pending"
        },
        "siblings": [
            "STU-2026-068",
            "STU-2026-206"
        ]
    },
    {
        "id": "STU-2026-077",
        "sqlId": "108",
        "admissionNo": "255",
        "rollNo": "74",
        "name": "BHAWANA YADAV",
        "dob": "2014-01-02",
        "gender": "female",
        "bloodGroup": "O+",
        "class": "VI",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "JUGENDRA",
            "motherName": "SHANTI DEVI",
            "fatherMobile": "+91 9720055152",
            "address": "JARGWAN"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 88,
            "percentage": 100.0
        },
        "feeSummary": {
            "totalDue": 24000,
            "totalPaid": 0,
            "balance": 24000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-078",
        "sqlId": "109",
        "admissionNo": "256",
        "rollNo": "12",
        "name": "BHOOMIKA",
        "dob": "2015-04-21",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "VI",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "TEEKAM SINGH",
            "motherName": "SAPNA DEVI",
            "fatherMobile": "+91 9711094843",
            "address": "DHARAKPUR"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 82,
            "percentage": 93.2
        },
        "feeSummary": {
            "totalDue": 25500,
            "totalPaid": 0,
            "balance": 25500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-079",
        "sqlId": "112",
        "admissionNo": "259",
        "rollNo": "79",
        "name": "DIVYA",
        "dob": "2016-07-01",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "VI",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 83,
            "percentage": 94.3
        },
        "feeSummary": {
            "totalDue": 27000,
            "totalPaid": 0,
            "balance": 27000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-080",
        "sqlId": "113",
        "admissionNo": "260",
        "rollNo": "81",
        "name": "GAURAV KUMAR",
        "dob": "2014-01-01",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "VI",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 84,
            "percentage": 95.5
        },
        "feeSummary": {
            "totalDue": 28500,
            "totalPaid": 0,
            "balance": 28500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-081",
        "sqlId": "114",
        "admissionNo": "261",
        "rollNo": "83",
        "name": "HIMANSHU KUMAR",
        "dob": "2015-03-05",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "VI",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "SWATANTRA KUMAR",
            "motherName": "SANGEETA DEVI",
            "fatherMobile": "+91 9720524482",
            "address": "CHIROURI BULANDSHAHR"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 85,
            "percentage": 96.6
        },
        "feeSummary": {
            "totalDue": 18000,
            "totalPaid": 0,
            "balance": 18000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-082",
        "sqlId": "116",
        "admissionNo": "264",
        "rollNo": "85",
        "name": "KHUSHI",
        "dob": "2015-03-09",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "VI",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 86,
            "percentage": 97.7
        },
        "feeSummary": {
            "totalDue": 19500,
            "totalPaid": 0,
            "balance": 19500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-083",
        "sqlId": "117",
        "admissionNo": "265",
        "rollNo": "86",
        "name": "KITTU PATHAK",
        "dob": "2012-06-01",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "VI",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "ATUL PATHAK",
            "motherName": "NEERAJ DEVI",
            "fatherMobile": "+91 7906380785",
            "address": "JARGWAN"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 87,
            "percentage": 98.9
        },
        "feeSummary": {
            "totalDue": 21000,
            "totalPaid": 0,
            "balance": 21000,
            "status": "Pending"
        },
        "siblings": [
            "STU-2026-142"
        ]
    },
    {
        "id": "STU-2026-084",
        "sqlId": "120",
        "admissionNo": "269",
        "rollNo": "69",
        "name": "LAXMI KUMARI",
        "dob": "2015-07-23",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "VI",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "HAR GOVIND",
            "motherName": "RAJESH DEVI",
            "fatherMobile": "+91 9761205726",
            "address": "JARGWAN"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 88,
            "percentage": 100.0
        },
        "feeSummary": {
            "totalDue": 22500,
            "totalPaid": 0,
            "balance": 22500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-085",
        "sqlId": "121",
        "admissionNo": "270",
        "rollNo": "87",
        "name": "MISHTI",
        "dob": "2016-08-05",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "VI",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 82,
            "percentage": 93.2
        },
        "feeSummary": {
            "totalDue": 24000,
            "totalPaid": 0,
            "balance": 24000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-086",
        "sqlId": "122",
        "admissionNo": "271",
        "rollNo": "75",
        "name": "NAMAN KUMAR",
        "dob": "2014-01-20",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "VI",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "DEVRAJ SINGH",
            "motherName": "ANITA DEVI",
            "fatherMobile": "+91 9720155624",
            "address": "SILHARI RAMPUR"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 83,
            "percentage": 94.3
        },
        "feeSummary": {
            "totalDue": 25500,
            "totalPaid": 0,
            "balance": 25500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-087",
        "sqlId": "123",
        "admissionNo": "273",
        "rollNo": "90",
        "name": "PRABHA BAGHEL",
        "dob": "2015-09-05",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "VI",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "HARISHANKAR",
            "motherName": "KAMLESH DEVI",
            "fatherMobile": "+91 8650724663",
            "address": "KALIYANPUR BHAGIRATHPUR ALIGARHG"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 84,
            "percentage": 95.5
        },
        "feeSummary": {
            "totalDue": 27000,
            "totalPaid": 0,
            "balance": 27000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-088",
        "sqlId": "125",
        "admissionNo": "278",
        "rollNo": "95",
        "name": "TANUJ KUMAR",
        "dob": "2014-12-08",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "VI",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "BRAJESH KUMAR",
            "motherName": "MANJU DEVI",
            "fatherMobile": "+91 8218893277",
            "address": "NAGLA CHIROURI"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 85,
            "percentage": 96.6
        },
        "feeSummary": {
            "totalDue": 28500,
            "totalPaid": 0,
            "balance": 28500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-089",
        "sqlId": "126",
        "admissionNo": "279",
        "rollNo": "96",
        "name": "VANSH",
        "dob": "2016-01-12",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "VI",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "RAJKUMAR",
            "motherName": "NEERAJ DEVI",
            "fatherMobile": "+91 9760066073",
            "address": "KUNJALPUR GAHTOLI NIRMAL ATRAULI"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 86,
            "percentage": 97.7
        },
        "feeSummary": {
            "totalDue": 18000,
            "totalPaid": 0,
            "balance": 18000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-090",
        "sqlId": "127",
        "admissionNo": "280",
        "rollNo": "97",
        "name": "VANSHIKA",
        "dob": "2014-09-25",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "VI",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "RAJESH KUMAR",
            "motherName": "PINKY DEVI",
            "fatherMobile": "+91 9719164418",
            "address": "JARGWAN"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 87,
            "percentage": 98.9
        },
        "feeSummary": {
            "totalDue": 19500,
            "totalPaid": 0,
            "balance": 19500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-091",
        "sqlId": "128",
        "admissionNo": "281",
        "rollNo": "98",
        "name": "VIKRANT SINGH",
        "dob": "2014-12-27",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "VI",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "VINOD KUMAR",
            "motherName": "USHA DEVI",
            "fatherMobile": "+91 9761205728",
            "address": "KALIYANPUR BHAGIRATHPUR"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 88,
            "percentage": 100.0
        },
        "feeSummary": {
            "totalDue": 21000,
            "totalPaid": 0,
            "balance": 21000,
            "status": "Pending"
        },
        "siblings": [
            "STU-2026-092"
        ]
    },
    {
        "id": "STU-2026-092",
        "sqlId": "129",
        "admissionNo": "282",
        "rollNo": "0",
        "name": "AAYUSH SINGH",
        "dob": "2016-01-05",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "V",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "VINOD KUMAR",
            "motherName": "USHA DEVI",
            "fatherMobile": "+91 9761205728",
            "address": "KALIYANPUR BHAGIRATHPUR"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 82,
            "percentage": 93.2
        },
        "feeSummary": {
            "totalDue": 22500,
            "totalPaid": 0,
            "balance": 22500,
            "status": "Pending"
        },
        "siblings": [
            "STU-2026-091"
        ]
    },
    {
        "id": "STU-2026-093",
        "sqlId": "130",
        "admissionNo": "283",
        "rollNo": "0",
        "name": "ARSH KUMAR",
        "dob": "2018-06-22",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "V",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "PRAMOD KUMAR",
            "motherName": "DEEPIKA",
            "fatherMobile": "+91 9719607274",
            "address": "MALAHPUR ATRAULI"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 83,
            "percentage": 94.3
        },
        "feeSummary": {
            "totalDue": 24000,
            "totalPaid": 0,
            "balance": 24000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-094",
        "sqlId": "131",
        "admissionNo": "285",
        "rollNo": "100",
        "name": "ADITYA PRATAP SINGH",
        "dob": "2015-04-27",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "V",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "SAMMU SINGH",
            "motherName": "RAJANI DEVI",
            "fatherMobile": "+91 9355473315",
            "address": "MUHAMMADPUR BADHERA ALIGARH"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 84,
            "percentage": 95.5
        },
        "feeSummary": {
            "totalDue": 25500,
            "totalPaid": 0,
            "balance": 25500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-095",
        "sqlId": "132",
        "admissionNo": "289",
        "rollNo": "73",
        "name": "ANUJ",
        "dob": "2015-07-07",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "VI",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "MANOJ KUMAR",
            "motherName": "BEENA DEVI",
            "fatherMobile": "+91 9368681376",
            "address": "SILHARI RAMGHAT"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 85,
            "percentage": 96.6
        },
        "feeSummary": {
            "totalDue": 27000,
            "totalPaid": 0,
            "balance": 27000,
            "status": "Pending"
        },
        "siblings": [
            "STU-2026-130"
        ]
    },
    {
        "id": "STU-2026-096",
        "sqlId": "133",
        "admissionNo": "290",
        "rollNo": "75",
        "name": "CHHAVI",
        "dob": "2016-02-02",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "VI",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "YOGESH KUMAR",
            "motherName": "RINKY DEVI",
            "fatherMobile": "+91 9720966040",
            "address": "SILHARI RAMPUR DISTT BULANDSHAHR"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 86,
            "percentage": 97.7
        },
        "feeSummary": {
            "totalDue": 28500,
            "totalPaid": 0,
            "balance": 28500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-097",
        "sqlId": "134",
        "admissionNo": "291",
        "rollNo": "0",
        "name": "CHHAYA RAJPUT",
        "dob": "2015-02-12",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "V",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 87,
            "percentage": 98.9
        },
        "feeSummary": {
            "totalDue": 18000,
            "totalPaid": 0,
            "balance": 18000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-098",
        "sqlId": "135",
        "admissionNo": "292",
        "rollNo": "103",
        "name": "CHIRAG SHARMA",
        "dob": "2016-06-02",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "V",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "SURENDRA SINGH",
            "motherName": "KAMLESH",
            "fatherMobile": "+91 9758882443",
            "address": "JARGWAN"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 88,
            "percentage": 100.0
        },
        "feeSummary": {
            "totalDue": 19500,
            "totalPaid": 0,
            "balance": 19500,
            "status": "Pending"
        },
        "siblings": [
            "STU-2026-004"
        ]
    },
    {
        "id": "STU-2026-099",
        "sqlId": "136",
        "admissionNo": "293",
        "rollNo": "80",
        "name": "DIVYANSHI RAGHAV",
        "dob": "2014-11-26",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "VI",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "SAURABH PRATAP",
            "motherName": "RAGINI",
            "fatherMobile": "+91 97194 76606",
            "address": "LOHGARAH ATRAULI"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 82,
            "percentage": 93.2
        },
        "feeSummary": {
            "totalDue": 21000,
            "totalPaid": 0,
            "balance": 21000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-100",
        "sqlId": "137",
        "admissionNo": "294",
        "rollNo": "106",
        "name": "DIVYANSHU YADAV",
        "dob": "2016-04-05",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "V",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "PRADEEP KUMAR",
            "motherName": "PRITI DEVI",
            "fatherMobile": "+91 9761965033",
            "address": "KALIYANPUR BHAGIRATHPUR ATRAULI"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 83,
            "percentage": 94.3
        },
        "feeSummary": {
            "totalDue": 22500,
            "totalPaid": 0,
            "balance": 22500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-101",
        "sqlId": "138",
        "admissionNo": "295",
        "rollNo": "105",
        "name": "DIVYANSHU KUMAR",
        "dob": "2013-10-17",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "V",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "KRISHNA KUMAR",
            "motherName": "VUYA DEVI",
            "fatherMobile": "+91 9927501907",
            "address": "NAGLAGARVI POST JARGWAN"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 84,
            "percentage": 95.5
        },
        "feeSummary": {
            "totalDue": 24000,
            "totalPaid": 0,
            "balance": 24000,
            "status": "Pending"
        },
        "siblings": [
            "STU-2026-170"
        ]
    },
    {
        "id": "STU-2026-102",
        "sqlId": "139",
        "admissionNo": "296",
        "rollNo": "0",
        "name": "KAMESH SHARMA",
        "dob": "2017-01-01",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "V",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "VINEET KUMAR",
            "motherName": "POONAM SHARMA",
            "fatherMobile": "+91 8859343009",
            "address": "RAMGHAT"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 85,
            "percentage": 96.6
        },
        "feeSummary": {
            "totalDue": 25500,
            "totalPaid": 0,
            "balance": 25500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-103",
        "sqlId": "140",
        "admissionNo": "297",
        "rollNo": "109",
        "name": "KANHAIYA YADAV",
        "dob": "2012-09-12",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "V",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "FOUJI YADAV JI",
            "motherName": "ROOPVATI DEVI",
            "fatherMobile": "+91 8968167475",
            "address": "KALIYANPUR BHAGIRATHPUR ALIGARH"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 86,
            "percentage": 97.7
        },
        "feeSummary": {
            "totalDue": 27000,
            "totalPaid": 0,
            "balance": 27000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-104",
        "sqlId": "141",
        "admissionNo": "298",
        "rollNo": "110",
        "name": "KARAN KUMAR",
        "dob": "2014-12-23",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "V",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "MULAYAM SINGH",
            "motherName": "SUMAN DEVI",
            "fatherMobile": "+91 9720058659",
            "address": "DADHAR ALUPURA POST- NARUPURA ATRAULI"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 87,
            "percentage": 98.9
        },
        "feeSummary": {
            "totalDue": 28500,
            "totalPaid": 0,
            "balance": 28500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-105",
        "sqlId": "142",
        "admissionNo": "300",
        "rollNo": "90",
        "name": "KAUSHAL KUMAR",
        "dob": "2016-06-10",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "V",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "HARISHANKAR",
            "motherName": "KAMLESH DEVI",
            "fatherMobile": "+91 7982771566",
            "address": "KALIYANPUR BHAGIRATHPUR"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 88,
            "percentage": 100.0
        },
        "feeSummary": {
            "totalDue": 18000,
            "totalPaid": 0,
            "balance": 18000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-106",
        "sqlId": "143",
        "admissionNo": "301",
        "rollNo": "112",
        "name": "KRASHANK YADAV",
        "dob": "2014-03-10",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "V",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "AJAY KUMAR",
            "motherName": "NEERU DEVI",
            "fatherMobile": "+91 9758962135",
            "address": "KALIYANPUR BHAGIRATHPUR"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 82,
            "percentage": 93.2
        },
        "feeSummary": {
            "totalDue": 19500,
            "totalPaid": 0,
            "balance": 19500,
            "status": "Pending"
        },
        "siblings": [
            "STU-2026-323"
        ]
    },
    {
        "id": "STU-2026-107",
        "sqlId": "145",
        "admissionNo": "304",
        "rollNo": "88",
        "name": "NISHANT KUMAR",
        "dob": "2014-03-20",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "VI",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "VIJENDRA SINGH",
            "motherName": "SAROJ DEVI",
            "fatherMobile": "+91 9758741530",
            "address": "SILHARI RAMGHAT"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 83,
            "percentage": 94.3
        },
        "feeSummary": {
            "totalDue": 21000,
            "totalPaid": 0,
            "balance": 21000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-108",
        "sqlId": "146",
        "admissionNo": "305",
        "rollNo": "35",
        "name": "PAWANI KUMARI",
        "dob": "2016-12-12",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "V",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "DHARMENDRA KUMAR",
            "motherName": "HITESH DEVI",
            "fatherMobile": "+91 9719334408",
            "address": "NAGLA KOTHI JARGWAN BULAND SHAHR"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 84,
            "percentage": 95.5
        },
        "feeSummary": {
            "totalDue": 22500,
            "totalPaid": 0,
            "balance": 22500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-109",
        "sqlId": "147",
        "admissionNo": "307",
        "rollNo": "43",
        "name": "PRADEEP KUMAR",
        "dob": "2017-02-02",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "V",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 85,
            "percentage": 96.6
        },
        "feeSummary": {
            "totalDue": 24000,
            "totalPaid": 0,
            "balance": 24000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-110",
        "sqlId": "148",
        "admissionNo": "308",
        "rollNo": "119",
        "name": "PRASHANT KUMAR",
        "dob": "2016-09-08",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "V",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 86,
            "percentage": 97.7
        },
        "feeSummary": {
            "totalDue": 25500,
            "totalPaid": 0,
            "balance": 25500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-111",
        "sqlId": "149",
        "admissionNo": "309",
        "rollNo": "120",
        "name": "PRATEEK KUMAR",
        "dob": "2015-10-09",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "V",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "BOBY KUMAR",
            "motherName": "URMILA DEVI",
            "fatherMobile": "+91 8650739321",
            "address": "CHIROURI"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 87,
            "percentage": 98.9
        },
        "feeSummary": {
            "totalDue": 27000,
            "totalPaid": 0,
            "balance": 27000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-112",
        "sqlId": "150",
        "admissionNo": "311",
        "rollNo": "121",
        "name": "PRATEEK KUMAR",
        "dob": "2018-08-28",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "V",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 88,
            "percentage": 100.0
        },
        "feeSummary": {
            "totalDue": 28500,
            "totalPaid": 0,
            "balance": 28500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-113",
        "sqlId": "151",
        "admissionNo": "312",
        "rollNo": "91",
        "name": "PRATIGYA YADAV",
        "dob": "2015-06-03",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "VI",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "BHURE SINGH",
            "motherName": "SUMAN DEVI",
            "fatherMobile": "+91 9719017603",
            "address": "SILHARI POST RAMGHAT (BULANDSHAHR)"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 82,
            "percentage": 93.2
        },
        "feeSummary": {
            "totalDue": 18000,
            "totalPaid": 0,
            "balance": 18000,
            "status": "Pending"
        },
        "siblings": [
            "STU-2026-184"
        ]
    },
    {
        "id": "STU-2026-114",
        "sqlId": "152",
        "admissionNo": "313",
        "rollNo": "122",
        "name": "PRATIKSHA KUMARI",
        "dob": "2017-05-02",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "V",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 83,
            "percentage": 94.3
        },
        "feeSummary": {
            "totalDue": 19500,
            "totalPaid": 0,
            "balance": 19500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-115",
        "sqlId": "153",
        "admissionNo": "316",
        "rollNo": "123",
        "name": "RAGINI RAJPUT",
        "dob": "2017-03-26",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "V",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "PRAMOD KUMAR",
            "motherName": "CHANCHAL DEVI",
            "fatherMobile": "+91 9412357470",
            "address": "NAGLA KOTHI BULAND SHAHR"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 84,
            "percentage": 95.5
        },
        "feeSummary": {
            "totalDue": 21000,
            "totalPaid": 0,
            "balance": 21000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-116",
        "sqlId": "154",
        "admissionNo": "317",
        "rollNo": "124",
        "name": "RAJKUMAR",
        "dob": "2014-04-16",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "V",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "RAVI KUMAR",
            "motherName": "PINKY DEVI",
            "fatherMobile": "+91 7409726896",
            "address": "JARGWAN"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 85,
            "percentage": 96.6
        },
        "feeSummary": {
            "totalDue": 22500,
            "totalPaid": 0,
            "balance": 22500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-117",
        "sqlId": "155",
        "admissionNo": "318",
        "rollNo": "125",
        "name": "ROHIT KUMAR",
        "dob": "2012-09-19",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "V",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 86,
            "percentage": 97.7
        },
        "feeSummary": {
            "totalDue": 24000,
            "totalPaid": 0,
            "balance": 24000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-118",
        "sqlId": "156",
        "admissionNo": "319",
        "rollNo": "32",
        "name": "SAHIL KUMAR",
        "dob": "2013-11-30",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "V",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 87,
            "percentage": 98.9
        },
        "feeSummary": {
            "totalDue": 25500,
            "totalPaid": 0,
            "balance": 25500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-119",
        "sqlId": "157",
        "admissionNo": "320",
        "rollNo": "127",
        "name": "SANSKAR",
        "dob": "2016-12-22",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "V",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "GOPAL PRASAD",
            "motherName": "RAVENDRI DEVI",
            "fatherMobile": "+91 9528646949",
            "address": "RAMGHAT BULAND SHAHR"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 88,
            "percentage": 100.0
        },
        "feeSummary": {
            "totalDue": 27000,
            "totalPaid": 0,
            "balance": 27000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-120",
        "sqlId": "158",
        "admissionNo": "321",
        "rollNo": "128",
        "name": "SAURABH KUMAR",
        "dob": "2015-07-07",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "V",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 82,
            "percentage": 93.2
        },
        "feeSummary": {
            "totalDue": 28500,
            "totalPaid": 0,
            "balance": 28500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-121",
        "sqlId": "159",
        "admissionNo": "322",
        "rollNo": "129",
        "name": "SEJAL MITTAL",
        "dob": "2016-08-19",
        "gender": "female",
        "bloodGroup": "O+",
        "class": "V",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 83,
            "percentage": 94.3
        },
        "feeSummary": {
            "totalDue": 18000,
            "totalPaid": 0,
            "balance": 18000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-122",
        "sqlId": "161",
        "admissionNo": "324",
        "rollNo": "21",
        "name": "SURAJ KUMAR",
        "dob": "2010-08-09",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "V",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 84,
            "percentage": 95.5
        },
        "feeSummary": {
            "totalDue": 19500,
            "totalPaid": 0,
            "balance": 19500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-123",
        "sqlId": "162",
        "admissionNo": "325",
        "rollNo": "92",
        "name": "SUSHANT KUMAR",
        "dob": "2015-05-17",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "VI",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "NEPAL SINGH",
            "motherName": "SANTOSH DEVI",
            "fatherMobile": "+91 9675320274",
            "address": "UNCHA GAON POST RAMGHAT DIBAI BUANDSHAHR"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 85,
            "percentage": 96.6
        },
        "feeSummary": {
            "totalDue": 21000,
            "totalPaid": 0,
            "balance": 21000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-124",
        "sqlId": "163",
        "admissionNo": "326",
        "rollNo": "131",
        "name": "TARUN KUMAR",
        "dob": "2016-09-18",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "V",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "DINESH KUMAR",
            "motherName": "PREMVATI DEVI",
            "fatherMobile": "+91 6398633259",
            "address": "DHARAKPUR BULAND SHAHR"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 86,
            "percentage": 97.7
        },
        "feeSummary": {
            "totalDue": 22500,
            "totalPaid": 0,
            "balance": 22500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-125",
        "sqlId": "164",
        "admissionNo": "327",
        "rollNo": "0",
        "name": "TARUN KUMAR",
        "dob": "2016-12-29",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "V",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "AMAR SINGH",
            "motherName": "KAMLESH DEVI",
            "fatherMobile": "+91 6398426834",
            "address": "'NAGLA DHARAKPUR"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 87,
            "percentage": 98.9
        },
        "feeSummary": {
            "totalDue": 24000,
            "totalPaid": 0,
            "balance": 24000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-126",
        "sqlId": "165",
        "admissionNo": "328",
        "rollNo": "18",
        "name": "VANDANA BAGHEL",
        "dob": "2015-08-25",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "V",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 88,
            "percentage": 100.0
        },
        "feeSummary": {
            "totalDue": 25500,
            "totalPaid": 0,
            "balance": 25500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-127",
        "sqlId": "166",
        "admissionNo": "329",
        "rollNo": "13",
        "name": "VANDANA KUMARI",
        "dob": "2017-09-05",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "V",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "JAY PAL SINGH",
            "motherName": "SUMAN DEVI",
            "fatherMobile": "+91 97194 76606",
            "address": "CHIROURI BSR"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 82,
            "percentage": 93.2
        },
        "feeSummary": {
            "totalDue": 27000,
            "totalPaid": 0,
            "balance": 27000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-128",
        "sqlId": "167",
        "admissionNo": "330",
        "rollNo": "99",
        "name": "ADITYA KUMAR",
        "dob": "2015-06-15",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "V",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "SHYAMVEER SINGH",
            "motherName": "ASHA DEVI",
            "fatherMobile": "+91 9761081386",
            "address": "SILHARI POST RAMGHAT DIBAI BULANDSHAHR"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 83,
            "percentage": 94.3
        },
        "feeSummary": {
            "totalDue": 28500,
            "totalPaid": 0,
            "balance": 28500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-129",
        "sqlId": "168",
        "admissionNo": "331",
        "rollNo": "44",
        "name": "ADITYA YADAV",
        "dob": "2015-04-25",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "IV",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 84,
            "percentage": 95.5
        },
        "feeSummary": {
            "totalDue": 18000,
            "totalPaid": 0,
            "balance": 18000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-130",
        "sqlId": "170",
        "admissionNo": "333",
        "rollNo": "73",
        "name": "ANKUSH KUMAR",
        "dob": "2016-12-22",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "IV",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "MANOJ KUMAR",
            "motherName": "BEENA DEVI",
            "fatherMobile": "+91 9368681376",
            "address": "SILHARI RAMGHAT"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 85,
            "percentage": 96.6
        },
        "feeSummary": {
            "totalDue": 19500,
            "totalPaid": 0,
            "balance": 19500,
            "status": "Pending"
        },
        "siblings": [
            "STU-2026-095"
        ]
    },
    {
        "id": "STU-2026-131",
        "sqlId": "171",
        "admissionNo": "334",
        "rollNo": "134",
        "name": "ANSHU KUMAR",
        "dob": "2017-09-22",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "IV",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 86,
            "percentage": 97.7
        },
        "feeSummary": {
            "totalDue": 21000,
            "totalPaid": 0,
            "balance": 21000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-132",
        "sqlId": "172",
        "admissionNo": "335",
        "rollNo": "345",
        "name": "ANSHU YADAV",
        "dob": "2016-07-30",
        "gender": "female",
        "bloodGroup": "O+",
        "class": "IV",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 87,
            "percentage": 98.9
        },
        "feeSummary": {
            "totalDue": 22500,
            "totalPaid": 0,
            "balance": 22500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-133",
        "sqlId": "173",
        "admissionNo": "336",
        "rollNo": "81",
        "name": "ANSHUL KUMAR",
        "dob": "2017-09-05",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "IV",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 88,
            "percentage": 100.0
        },
        "feeSummary": {
            "totalDue": 24000,
            "totalPaid": 0,
            "balance": 24000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-134",
        "sqlId": "175",
        "admissionNo": "338",
        "rollNo": "145",
        "name": "DAMINI",
        "dob": "2015-12-19",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "IV",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 82,
            "percentage": 93.2
        },
        "feeSummary": {
            "totalDue": 25500,
            "totalPaid": 0,
            "balance": 25500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-135",
        "sqlId": "176",
        "admissionNo": "339",
        "rollNo": "104",
        "name": "DAULATRAM",
        "dob": "2012-01-01",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "V",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "HARBALLABH",
            "motherName": "RUMANA DEVI",
            "fatherMobile": "+91 7830373451",
            "address": "MAHRAJPUR BANJARA NAGLA"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 83,
            "percentage": 94.3
        },
        "feeSummary": {
            "totalDue": 27000,
            "totalPaid": 0,
            "balance": 27000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-136",
        "sqlId": "177",
        "admissionNo": "340",
        "rollNo": "136",
        "name": "DEEPANJALI",
        "dob": "2014-01-01",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "IV",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "MUKESH KUMAR",
            "motherName": "SHEELA",
            "fatherMobile": "+91 7037019598",
            "address": "KALIYANPUR BHAGIRATHPUR"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 84,
            "percentage": 95.5
        },
        "feeSummary": {
            "totalDue": 28500,
            "totalPaid": 0,
            "balance": 28500,
            "status": "Pending"
        },
        "siblings": [
            "STU-2026-298"
        ]
    },
    {
        "id": "STU-2026-137",
        "sqlId": "178",
        "admissionNo": "341",
        "rollNo": "57",
        "name": "DEVESH KUMAR",
        "dob": "2016-03-10",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "IV",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 85,
            "percentage": 96.6
        },
        "feeSummary": {
            "totalDue": 18000,
            "totalPaid": 0,
            "balance": 18000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-138",
        "sqlId": "179",
        "admissionNo": "342",
        "rollNo": "137",
        "name": "DHURV SHARMA",
        "dob": "2017-06-22",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "IV",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 86,
            "percentage": 97.7
        },
        "feeSummary": {
            "totalDue": 19500,
            "totalPaid": 0,
            "balance": 19500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-139",
        "sqlId": "180",
        "admissionNo": "343",
        "rollNo": "70",
        "name": "DIVYA",
        "dob": "2017-08-16",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "IV",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "ARUN KUMAR",
            "motherName": "KOMAL",
            "fatherMobile": "+91 9268386124",
            "address": "'HARVANSHPUR"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 87,
            "percentage": 98.9
        },
        "feeSummary": {
            "totalDue": 21000,
            "totalPaid": 0,
            "balance": 21000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-140",
        "sqlId": "181",
        "admissionNo": "344",
        "rollNo": "138",
        "name": "DIVYANSHU KUMAR",
        "dob": "2016-05-17",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "IV",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "ANIL KUMAR",
            "motherName": "VINESH DEVI",
            "fatherMobile": "+91 7983817850",
            "address": "JARGWAN BULAND SHAHR"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 88,
            "percentage": 100.0
        },
        "feeSummary": {
            "totalDue": 22500,
            "totalPaid": 0,
            "balance": 22500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-141",
        "sqlId": "182",
        "admissionNo": "345",
        "rollNo": "139",
        "name": "DRASHTI",
        "dob": "2016-02-12",
        "gender": "female",
        "bloodGroup": "O+",
        "class": "IV",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 82,
            "percentage": 93.2
        },
        "feeSummary": {
            "totalDue": 24000,
            "totalPaid": 0,
            "balance": 24000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-142",
        "sqlId": "183",
        "admissionNo": "346",
        "rollNo": "86",
        "name": "GOPAL PATHAK",
        "dob": "2016-08-15",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "IV",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "ATUL PATHAK",
            "motherName": "NEERAJ DEVI",
            "fatherMobile": "+91 7906380785",
            "address": "JARGWAN"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 83,
            "percentage": 94.3
        },
        "feeSummary": {
            "totalDue": 25500,
            "totalPaid": 0,
            "balance": 25500,
            "status": "Pending"
        },
        "siblings": [
            "STU-2026-083"
        ]
    },
    {
        "id": "STU-2026-143",
        "sqlId": "184",
        "admissionNo": "347",
        "rollNo": "142",
        "name": "GUNJAN",
        "dob": "2017-11-05",
        "gender": "female",
        "bloodGroup": "O+",
        "class": "IV",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 84,
            "percentage": 95.5
        },
        "feeSummary": {
            "totalDue": 27000,
            "totalPaid": 0,
            "balance": 27000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-144",
        "sqlId": "185",
        "admissionNo": "348",
        "rollNo": "141",
        "name": "GAURI SHARMA",
        "dob": "2018-06-08",
        "gender": "female",
        "bloodGroup": "O+",
        "class": "IV",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 85,
            "percentage": 96.6
        },
        "feeSummary": {
            "totalDue": 28500,
            "totalPaid": 0,
            "balance": 28500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-145",
        "sqlId": "186",
        "admissionNo": "349",
        "rollNo": "158",
        "name": "HARSH KUMAR",
        "dob": "2015-07-14",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "IV",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 86,
            "percentage": 97.7
        },
        "feeSummary": {
            "totalDue": 18000,
            "totalPaid": 0,
            "balance": 18000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-146",
        "sqlId": "187",
        "admissionNo": "350",
        "rollNo": "107",
        "name": "HARSH KUMAR",
        "dob": "2018-01-13",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "V",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "ANIL KUMAR",
            "motherName": "PINKY",
            "fatherMobile": "+91 9761825947",
            "address": "SILHARI RAMGHAT"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 87,
            "percentage": 98.9
        },
        "feeSummary": {
            "totalDue": 19500,
            "totalPaid": 0,
            "balance": 19500,
            "status": "Pending"
        },
        "siblings": [
            "STU-2026-309"
        ]
    },
    {
        "id": "STU-2026-147",
        "sqlId": "189",
        "admissionNo": "352",
        "rollNo": "124",
        "name": "HIMANSHU",
        "dob": "2013-08-07",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "IV",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "RAVI KUMAR",
            "motherName": "PINKY DEVI",
            "fatherMobile": "+91 7452883387",
            "address": "JARGWAN"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 88,
            "percentage": 100.0
        },
        "feeSummary": {
            "totalDue": 21000,
            "totalPaid": 0,
            "balance": 21000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-148",
        "sqlId": "190",
        "admissionNo": "353",
        "rollNo": "146",
        "name": "JATIN KUMAR",
        "dob": "2015-12-14",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "IV",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 82,
            "percentage": 93.2
        },
        "feeSummary": {
            "totalDue": 22500,
            "totalPaid": 0,
            "balance": 22500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-149",
        "sqlId": "191",
        "admissionNo": "354",
        "rollNo": "62",
        "name": "KHUSHI",
        "dob": "2017-01-25",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "IV",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "RAM KISHOR",
            "motherName": "VANDANA DEVI",
            "fatherMobile": "+91 9759840340",
            "address": "NATHPUR POST-NAHAL"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 83,
            "percentage": 94.3
        },
        "feeSummary": {
            "totalDue": 24000,
            "totalPaid": 0,
            "balance": 24000,
            "status": "Pending"
        },
        "siblings": [
            "STU-2026-065"
        ]
    },
    {
        "id": "STU-2026-150",
        "sqlId": "193",
        "admissionNo": "356",
        "rollNo": "147",
        "name": "KRISHNA YADAV",
        "dob": "2017-12-30",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "IV",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 84,
            "percentage": 95.5
        },
        "feeSummary": {
            "totalDue": 25500,
            "totalPaid": 0,
            "balance": 25500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-151",
        "sqlId": "194",
        "admissionNo": "359",
        "rollNo": "149",
        "name": "MAYANK KUMAR",
        "dob": "2013-07-23",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "IV",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 85,
            "percentage": 96.6
        },
        "feeSummary": {
            "totalDue": 27000,
            "totalPaid": 0,
            "balance": 27000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-152",
        "sqlId": "195",
        "admissionNo": "360",
        "rollNo": "33",
        "name": "MOHAN KUMAR",
        "dob": "2016-01-01",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "IV",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 86,
            "percentage": 97.7
        },
        "feeSummary": {
            "totalDue": 28500,
            "totalPaid": 0,
            "balance": 28500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-153",
        "sqlId": "196",
        "admissionNo": "361",
        "rollNo": "116",
        "name": "MOHIT KUMAR",
        "dob": "2013-01-01",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "V",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "BHOORE SINGH",
            "motherName": "ASHA DEVI",
            "fatherMobile": "+91 9568476692",
            "address": "UNCHA GAWN BANGAR RAMGHAT BULANDSHAHR"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 87,
            "percentage": 98.9
        },
        "feeSummary": {
            "totalDue": 18000,
            "totalPaid": 0,
            "balance": 18000,
            "status": "Pending"
        },
        "siblings": [
            "STU-2026-200"
        ]
    },
    {
        "id": "STU-2026-154",
        "sqlId": "199",
        "admissionNo": "364",
        "rollNo": "119",
        "name": "NISHANT KUMAR",
        "dob": "2016-03-01",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "IV",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "YOGESH KUMAR",
            "motherName": "PINKY DEVI",
            "fatherMobile": "+91 8859303073",
            "address": "'KALIYANPUR BHAGIRATHPUR"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 88,
            "percentage": 100.0
        },
        "feeSummary": {
            "totalDue": 19500,
            "totalPaid": 0,
            "balance": 19500,
            "status": "Pending"
        },
        "siblings": [
            "STU-2026-162"
        ]
    },
    {
        "id": "STU-2026-155",
        "sqlId": "200",
        "admissionNo": "365",
        "rollNo": "151",
        "name": "NISHANT KUMAR",
        "dob": "2016-03-01",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "IV",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "DINESH KUMAR",
            "motherName": "VEENESH DEVI",
            "fatherMobile": "+91 9536711508",
            "address": "DADHAR ALIPURA"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 82,
            "percentage": 93.2
        },
        "feeSummary": {
            "totalDue": 21000,
            "totalPaid": 0,
            "balance": 21000,
            "status": "Pending"
        },
        "siblings": [
            "STU-2026-262"
        ]
    },
    {
        "id": "STU-2026-156",
        "sqlId": "201",
        "admissionNo": "366",
        "rollNo": "0",
        "name": "PRAJWAL CHAUHAN",
        "dob": "2013-10-24",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "V",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 83,
            "percentage": 94.3
        },
        "feeSummary": {
            "totalDue": 22500,
            "totalPaid": 0,
            "balance": 22500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-157",
        "sqlId": "202",
        "admissionNo": "367",
        "rollNo": "92",
        "name": "PRAVEEN KUMAR",
        "dob": "2018-05-28",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "VI",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "UDAYVEER SINGH",
            "motherName": "NEKSI DEVI",
            "fatherMobile": "+91 8865087299",
            "address": "UNCHA GAON POST RAMGHAT DIBAI BULANDSHAHR"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 84,
            "percentage": 95.5
        },
        "feeSummary": {
            "totalDue": 24000,
            "totalPaid": 0,
            "balance": 24000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-158",
        "sqlId": "203",
        "admissionNo": "368",
        "rollNo": "65",
        "name": "PRIYAL",
        "dob": "2016-03-24",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "IV",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "VIJAY SINGH",
            "motherName": "SUMANLATA",
            "fatherMobile": "+91 8650458433",
            "address": "JARGWAN (BULANDSHAHR)"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 85,
            "percentage": 96.6
        },
        "feeSummary": {
            "totalDue": 25500,
            "totalPaid": 0,
            "balance": 25500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-159",
        "sqlId": "204",
        "admissionNo": "369",
        "rollNo": "154",
        "name": "PRIYANSHI",
        "dob": "2012-11-21",
        "gender": "female",
        "bloodGroup": "O+",
        "class": "IV",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "SATISH KUMAR",
            "motherName": "SUMAN DEVI",
            "fatherMobile": "+91 9627265417",
            "address": "BAGI NAGLA CHIRURI BULANDSHAHR"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 86,
            "percentage": 97.7
        },
        "feeSummary": {
            "totalDue": 27000,
            "totalPaid": 0,
            "balance": 27000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-160",
        "sqlId": "205",
        "admissionNo": "370",
        "rollNo": "155",
        "name": "PRIYANSHU KUMAR",
        "dob": "2015-07-02",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "IV",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "HARENDRA SINGH",
            "motherName": "KAVITA DEVI",
            "fatherMobile": "+91 9582984147",
            "address": "CHIROURI"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 87,
            "percentage": 98.9
        },
        "feeSummary": {
            "totalDue": 28500,
            "totalPaid": 0,
            "balance": 28500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-161",
        "sqlId": "207",
        "admissionNo": "372",
        "rollNo": "156",
        "name": "RAGHAV SHARMA",
        "dob": "2016-06-08",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "IV",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "KANHAIYALAL",
            "motherName": "POOJA SHARMA",
            "fatherMobile": "+91 8384808060",
            "address": "RAMGHAT BULANDSHAHR"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 88,
            "percentage": 100.0
        },
        "feeSummary": {
            "totalDue": 18000,
            "totalPaid": 0,
            "balance": 18000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-162",
        "sqlId": "208",
        "admissionNo": "374",
        "rollNo": "75",
        "name": "RAMAN KUMAR",
        "dob": "2017-06-16",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "IV",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "YOGESH KUMAR",
            "motherName": "PINKY DEVI",
            "fatherMobile": "+91 8859303073",
            "address": "'KALIYANPUR BHAGIRATHPUR"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 82,
            "percentage": 93.2
        },
        "feeSummary": {
            "totalDue": 19500,
            "totalPaid": 0,
            "balance": 19500,
            "status": "Pending"
        },
        "siblings": [
            "STU-2026-154"
        ]
    },
    {
        "id": "STU-2026-163",
        "sqlId": "209",
        "admissionNo": "375",
        "rollNo": "157",
        "name": "RISHABH KUMAR",
        "dob": "2014-12-02",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "IV",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 83,
            "percentage": 94.3
        },
        "feeSummary": {
            "totalDue": 21000,
            "totalPaid": 0,
            "balance": 21000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-164",
        "sqlId": "210",
        "admissionNo": "376",
        "rollNo": "158",
        "name": "RISHU KUMARI",
        "dob": "2014-01-28",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "IV",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 84,
            "percentage": 95.5
        },
        "feeSummary": {
            "totalDue": 22500,
            "totalPaid": 0,
            "balance": 22500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-165",
        "sqlId": "211",
        "admissionNo": "378",
        "rollNo": "159",
        "name": "SAMARTH KUMAR",
        "dob": "2016-12-11",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "IV",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "VIPIN KUMAR",
            "motherName": "ANSHU KUMARI",
            "fatherMobile": "+91 9260917139",
            "address": "RAMGHAT DEBAI"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 85,
            "percentage": 96.6
        },
        "feeSummary": {
            "totalDue": 24000,
            "totalPaid": 0,
            "balance": 24000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-166",
        "sqlId": "212",
        "admissionNo": "379",
        "rollNo": "160",
        "name": "SANDHYA KUMARI",
        "dob": "2015-03-14",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "IV",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 86,
            "percentage": 97.7
        },
        "feeSummary": {
            "totalDue": 25500,
            "totalPaid": 0,
            "balance": 25500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-167",
        "sqlId": "213",
        "admissionNo": "381",
        "rollNo": "130",
        "name": "SONAM",
        "dob": "2013-03-01",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "V",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "SONU",
            "motherName": "KAVITA DEVI",
            "fatherMobile": "+91 97194 76606",
            "address": "JARGWAN"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 87,
            "percentage": 98.9
        },
        "feeSummary": {
            "totalDue": 27000,
            "totalPaid": 0,
            "balance": 27000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-168",
        "sqlId": "214",
        "admissionNo": "382",
        "rollNo": "163",
        "name": "UDIT KUMAR",
        "dob": "2017-07-12",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "IV",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 88,
            "percentage": 100.0
        },
        "feeSummary": {
            "totalDue": 28500,
            "totalPaid": 0,
            "balance": 28500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-169",
        "sqlId": "215",
        "admissionNo": "383",
        "rollNo": "164",
        "name": "UTKARSH KAROUTIA",
        "dob": "2015-08-19",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "IV",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "MUNISH KUMAR",
            "motherName": "SUMAN DEVI",
            "fatherMobile": "+91 9719198738",
            "address": "RAMGHAT"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 82,
            "percentage": 93.2
        },
        "feeSummary": {
            "totalDue": 18000,
            "totalPaid": 0,
            "balance": 18000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-170",
        "sqlId": "216",
        "admissionNo": "384",
        "rollNo": "105",
        "name": "VIRAT KUMAR",
        "dob": "2016-07-09",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "IV",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "KRISHNA KUMAR",
            "motherName": "VUYA DEVI",
            "fatherMobile": "+91 9927501907",
            "address": "NAGLAGARVI POST JARGWAN"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 83,
            "percentage": 94.3
        },
        "feeSummary": {
            "totalDue": 19500,
            "totalPaid": 0,
            "balance": 19500,
            "status": "Pending"
        },
        "siblings": [
            "STU-2026-101"
        ]
    },
    {
        "id": "STU-2026-171",
        "sqlId": "217",
        "admissionNo": "386",
        "rollNo": "165",
        "name": "VIVEK KUMAR",
        "dob": "2016-01-01",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "IV",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "HARIKISHAN",
            "motherName": "REENA DEVI",
            "fatherMobile": "+91 7729905845",
            "address": "MAHARAJPUR URF RATUA NAGLA"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 84,
            "percentage": 95.5
        },
        "feeSummary": {
            "totalDue": 21000,
            "totalPaid": 0,
            "balance": 21000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-172",
        "sqlId": "218",
        "admissionNo": "387",
        "rollNo": "166",
        "name": "AASHI SHARMA",
        "dob": "2015-08-22",
        "gender": "female",
        "bloodGroup": "O+",
        "class": "III",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "DEVESH SHARMA",
            "motherName": "KHUSHBOO",
            "fatherMobile": "+91 9971318665",
            "address": "KUDHAINI CHIRAURI"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 85,
            "percentage": 96.6
        },
        "feeSummary": {
            "totalDue": 22500,
            "totalPaid": 0,
            "balance": 22500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-173",
        "sqlId": "219",
        "admissionNo": "388",
        "rollNo": "168",
        "name": "ARYAN KUMAR",
        "dob": "2015-02-17",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "III",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "BALAK DAS",
            "motherName": "NEHA DEVI",
            "fatherMobile": "+91 6351582814",
            "address": "MOUNIPURA URF RAMVAS POST RAMGHAT BULANDSHAHR"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 86,
            "percentage": 97.7
        },
        "feeSummary": {
            "totalDue": 24000,
            "totalPaid": 0,
            "balance": 24000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-174",
        "sqlId": "220",
        "admissionNo": "389",
        "rollNo": "0",
        "name": "AYANSH",
        "dob": "2017-08-03",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "III",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 87,
            "percentage": 98.9
        },
        "feeSummary": {
            "totalDue": 25500,
            "totalPaid": 0,
            "balance": 25500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-175",
        "sqlId": "222",
        "admissionNo": "391",
        "rollNo": "169",
        "name": "AYUSH KUMAR",
        "dob": "2014-01-09",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "III",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 88,
            "percentage": 100.0
        },
        "feeSummary": {
            "totalDue": 27000,
            "totalPaid": 0,
            "balance": 27000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-176",
        "sqlId": "223",
        "admissionNo": "392",
        "rollNo": "118",
        "name": "AYUSHI CHAUHAN",
        "dob": "2016-08-22",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "III",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 82,
            "percentage": 93.2
        },
        "feeSummary": {
            "totalDue": 28500,
            "totalPaid": 0,
            "balance": 28500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-177",
        "sqlId": "224",
        "admissionNo": "393",
        "rollNo": "170",
        "name": "BHESAJ KUMAR",
        "dob": "2018-02-06",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "III",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 83,
            "percentage": 94.3
        },
        "feeSummary": {
            "totalDue": 18000,
            "totalPaid": 0,
            "balance": 18000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-178",
        "sqlId": "225",
        "admissionNo": "394",
        "rollNo": "172",
        "name": "DEEPAK KUMAR",
        "dob": "2016-01-25",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "III",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "SATISH KUMAR",
            "motherName": "MAMTA DEVI",
            "fatherMobile": "+91 9811700109",
            "address": "SILHARI POST RAMGHAT (BULANDSHAHR)"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 84,
            "percentage": 95.5
        },
        "feeSummary": {
            "totalDue": 19500,
            "totalPaid": 0,
            "balance": 19500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-179",
        "sqlId": "226",
        "admissionNo": "396",
        "rollNo": "173",
        "name": "DIPANSHU YADAV",
        "dob": "2014-12-25",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "III",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "OMPAL YADAV",
            "motherName": "NEELAM YADAV",
            "fatherMobile": "+91 9193083211",
            "address": "UNCHA GAON BANGAR RAMGHAT"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 85,
            "percentage": 96.6
        },
        "feeSummary": {
            "totalDue": 21000,
            "totalPaid": 0,
            "balance": 21000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-180",
        "sqlId": "227",
        "admissionNo": "397",
        "rollNo": "174",
        "name": "DIVYANSH RAJPUT",
        "dob": "2016-10-15",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "III",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "UMESH BABU",
            "motherName": "SHAKUNTALA VERMA",
            "fatherMobile": "+91 9759009379",
            "address": "GANESHPUR GOVINDPUR"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 86,
            "percentage": 97.7
        },
        "feeSummary": {
            "totalDue": 22500,
            "totalPaid": 0,
            "balance": 22500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-181",
        "sqlId": "228",
        "admissionNo": "398",
        "rollNo": "175",
        "name": "ESHAN YADAV",
        "dob": "2017-04-02",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "III",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "RINKU YADAV",
            "motherName": "SEEMA",
            "fatherMobile": "+91 8006520172",
            "address": "SILHARI POST RAMGHAT (BULANDSHAHR)"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 87,
            "percentage": 98.9
        },
        "feeSummary": {
            "totalDue": 24000,
            "totalPaid": 0,
            "balance": 24000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-182",
        "sqlId": "229",
        "admissionNo": "399",
        "rollNo": "0",
        "name": "GOURAV KUMAR",
        "dob": "2017-08-09",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "III",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 88,
            "percentage": 100.0
        },
        "feeSummary": {
            "totalDue": 25500,
            "totalPaid": 0,
            "balance": 25500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-183",
        "sqlId": "230",
        "admissionNo": "400",
        "rollNo": "0",
        "name": "GUNJAN RAJPUT",
        "dob": "2018-04-08",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "III",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 82,
            "percentage": 93.2
        },
        "feeSummary": {
            "totalDue": 27000,
            "totalPaid": 0,
            "balance": 27000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-184",
        "sqlId": "232",
        "admissionNo": "402",
        "rollNo": "91",
        "name": "HARSH KUMAR",
        "dob": "2015-12-27",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "III",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "BHURE SINGH",
            "motherName": "SUMAN DEVI",
            "fatherMobile": "+91 9719017603",
            "address": "SILHARI POST RAMGHAT (BULANDSHAHR)"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 83,
            "percentage": 94.3
        },
        "feeSummary": {
            "totalDue": 28500,
            "totalPaid": 0,
            "balance": 28500,
            "status": "Pending"
        },
        "siblings": [
            "STU-2026-113"
        ]
    },
    {
        "id": "STU-2026-185",
        "sqlId": "234",
        "admissionNo": "404",
        "rollNo": "176",
        "name": "HIMANSHU KUMAR",
        "dob": "2013-02-01",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "III",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "VIJAYPAL SINGH",
            "motherName": "KAMLESH DEVI",
            "fatherMobile": "+91 9675320274",
            "address": "VILLAGE BAJHERA POST DHARAKPUR DISTRCT BULANDSHAHR"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 84,
            "percentage": 95.5
        },
        "feeSummary": {
            "totalDue": 18000,
            "totalPaid": 0,
            "balance": 18000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-186",
        "sqlId": "235",
        "admissionNo": "405",
        "rollNo": "178",
        "name": "JEETESH KUMAR",
        "dob": "2016-10-10",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "III",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 85,
            "percentage": 96.6
        },
        "feeSummary": {
            "totalDue": 19500,
            "totalPaid": 0,
            "balance": 19500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-187",
        "sqlId": "236",
        "admissionNo": "407",
        "rollNo": "180",
        "name": "KESHAV KUMAR",
        "dob": "2015-09-14",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "III",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 86,
            "percentage": 97.7
        },
        "feeSummary": {
            "totalDue": 21000,
            "totalPaid": 0,
            "balance": 21000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-188",
        "sqlId": "237",
        "admissionNo": "408",
        "rollNo": "180",
        "name": "KIRTI",
        "dob": "2015-11-14",
        "gender": "female",
        "bloodGroup": "O+",
        "class": "III",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 87,
            "percentage": 98.9
        },
        "feeSummary": {
            "totalDue": 22500,
            "totalPaid": 0,
            "balance": 22500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-189",
        "sqlId": "239",
        "admissionNo": "410",
        "rollNo": "182",
        "name": "LOVEKUSH",
        "dob": "2018-12-20",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "III",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 88,
            "percentage": 100.0
        },
        "feeSummary": {
            "totalDue": 24000,
            "totalPaid": 0,
            "balance": 24000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-190",
        "sqlId": "240",
        "admissionNo": "411",
        "rollNo": "95",
        "name": "MADHAV KUMAR",
        "dob": "2013-12-05",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "III",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "BRAJESH KUMAR",
            "motherName": "MANJU DEVI",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 82,
            "percentage": 93.2
        },
        "feeSummary": {
            "totalDue": 25500,
            "totalPaid": 0,
            "balance": 25500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-191",
        "sqlId": "241",
        "admissionNo": "412",
        "rollNo": "114",
        "name": "MANJESH KUMAR",
        "dob": "2014-01-01",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "V",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 83,
            "percentage": 94.3
        },
        "feeSummary": {
            "totalDue": 27000,
            "totalPaid": 0,
            "balance": 27000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-192",
        "sqlId": "242",
        "admissionNo": "413",
        "rollNo": "183",
        "name": "MANYA TOMAR",
        "dob": "2019-03-20",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "III",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 84,
            "percentage": 95.5
        },
        "feeSummary": {
            "totalDue": 28500,
            "totalPaid": 0,
            "balance": 28500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-193",
        "sqlId": "243",
        "admissionNo": "414",
        "rollNo": "1",
        "name": "MAYANK KUMAR",
        "dob": "2015-08-15",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "III",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 85,
            "percentage": 96.6
        },
        "feeSummary": {
            "totalDue": 18000,
            "totalPaid": 0,
            "balance": 18000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-194",
        "sqlId": "244",
        "admissionNo": "415",
        "rollNo": "0",
        "name": "MOHINI",
        "dob": "2016-07-09",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "III",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 86,
            "percentage": 97.7
        },
        "feeSummary": {
            "totalDue": 19500,
            "totalPaid": 0,
            "balance": 19500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-195",
        "sqlId": "245",
        "admissionNo": "418",
        "rollNo": "4",
        "name": "PARIDHI AGARWAL",
        "dob": "2017-01-09",
        "gender": "female",
        "bloodGroup": "O+",
        "class": "III",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 87,
            "percentage": 98.9
        },
        "feeSummary": {
            "totalDue": 21000,
            "totalPaid": 0,
            "balance": 21000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-196",
        "sqlId": "246",
        "admissionNo": "419",
        "rollNo": "161",
        "name": "PEEYUSH KUMAR",
        "dob": "2019-10-07",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "III",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "HARIKESH KUMAR",
            "motherName": "HEMLATA DEVI",
            "fatherMobile": "+91 9643311163",
            "address": "'KALIYANPUR BHAGIRATHPUR"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 88,
            "percentage": 100.0
        },
        "feeSummary": {
            "totalDue": 22500,
            "totalPaid": 0,
            "balance": 22500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-197",
        "sqlId": "247",
        "admissionNo": "420",
        "rollNo": "64",
        "name": "PRACHI",
        "dob": "2014-05-13",
        "gender": "female",
        "bloodGroup": "O+",
        "class": "III",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "SHIV KUMAR",
            "motherName": "REENA DEVI",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 82,
            "percentage": 93.2
        },
        "feeSummary": {
            "totalDue": 24000,
            "totalPaid": 0,
            "balance": 24000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-198",
        "sqlId": "248",
        "admissionNo": "421",
        "rollNo": "187",
        "name": "RAJAT KUMAR",
        "dob": "2017-04-05",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "III",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 83,
            "percentage": 94.3
        },
        "feeSummary": {
            "totalDue": 25500,
            "totalPaid": 0,
            "balance": 25500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-199",
        "sqlId": "251",
        "admissionNo": "424",
        "rollNo": "190",
        "name": "RITIK",
        "dob": "2016-12-09",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "III",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "VIRESH KUMAR",
            "motherName": "RANJANA",
            "fatherMobile": "+91 9675884056",
            "address": "MOUNIPURA URF RAMVAS BULANDSHAHR"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 84,
            "percentage": 95.5
        },
        "feeSummary": {
            "totalDue": 27000,
            "totalPaid": 0,
            "balance": 27000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-200",
        "sqlId": "252",
        "admissionNo": "425",
        "rollNo": "0",
        "name": "ROHIT KUMAR",
        "dob": "2014-01-03",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "IV",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "BHOORE SINGH",
            "motherName": "ASHA DEVI",
            "fatherMobile": "+91 9568476692",
            "address": "UNCHA GAWN BANGAR RAMGHAT BULANDSHAHR"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 85,
            "percentage": 96.6
        },
        "feeSummary": {
            "totalDue": 28500,
            "totalPaid": 0,
            "balance": 28500,
            "status": "Pending"
        },
        "siblings": [
            "STU-2026-153"
        ]
    },
    {
        "id": "STU-2026-201",
        "sqlId": "254",
        "admissionNo": "428",
        "rollNo": "97",
        "name": "SANSKAR YADAV",
        "dob": "2018-06-25",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "III",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 86,
            "percentage": 97.7
        },
        "feeSummary": {
            "totalDue": 18000,
            "totalPaid": 0,
            "balance": 18000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-202",
        "sqlId": "255",
        "admissionNo": "430",
        "rollNo": "161",
        "name": "SHIVANI KUSHWAHA",
        "dob": "2016-12-15",
        "gender": "female",
        "bloodGroup": "O+",
        "class": "IV",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "TEJPAL SINGH",
            "motherName": "SUMAN DEVI",
            "fatherMobile": "+91 9027352955",
            "address": "BAINI NAGLA UNCHAGAON DIBAI BULANDSHAHR"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 87,
            "percentage": 98.9
        },
        "feeSummary": {
            "totalDue": 19500,
            "totalPaid": 0,
            "balance": 19500,
            "status": "Pending"
        },
        "siblings": [
            "STU-2026-229"
        ]
    },
    {
        "id": "STU-2026-203",
        "sqlId": "256",
        "admissionNo": "431",
        "rollNo": "132",
        "name": "SONU",
        "dob": "2011-12-30",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "V",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 88,
            "percentage": 100.0
        },
        "feeSummary": {
            "totalDue": 21000,
            "totalPaid": 0,
            "balance": 21000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-204",
        "sqlId": "257",
        "admissionNo": "432",
        "rollNo": "192",
        "name": "SOURAV KUMAR",
        "dob": "2017-11-03",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "III",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 82,
            "percentage": 93.2
        },
        "feeSummary": {
            "totalDue": 22500,
            "totalPaid": 0,
            "balance": 22500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-205",
        "sqlId": "258",
        "admissionNo": "433",
        "rollNo": "191",
        "name": "SHAURYA CHAUDHARY",
        "dob": "2019-01-14",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "III",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "MANOJ KUMAR",
            "motherName": "BHAVANA",
            "fatherMobile": "+91 9761825084",
            "address": "GAHTAULI NIRMAL"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 83,
            "percentage": 94.3
        },
        "feeSummary": {
            "totalDue": 24000,
            "totalPaid": 0,
            "balance": 24000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-206",
        "sqlId": "259",
        "admissionNo": "434",
        "rollNo": "66",
        "name": "SUMIT",
        "dob": "2016-05-05",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "III",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "JANGVEER SINGH",
            "motherName": "ROOPVATI DEVI",
            "fatherMobile": "+91 9675863965",
            "address": "KALIYANPUR BHAGIRATHPUR ATRAULI ALIGARH"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 84,
            "percentage": 95.5
        },
        "feeSummary": {
            "totalDue": 25500,
            "totalPaid": 0,
            "balance": 25500,
            "status": "Pending"
        },
        "siblings": [
            "STU-2026-068",
            "STU-2026-076"
        ]
    },
    {
        "id": "STU-2026-207",
        "sqlId": "260",
        "admissionNo": "435",
        "rollNo": "17",
        "name": "TANISHK KAUSHIK",
        "dob": "2019-03-17",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "III",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 85,
            "percentage": 96.6
        },
        "feeSummary": {
            "totalDue": 27000,
            "totalPaid": 0,
            "balance": 27000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-208",
        "sqlId": "261",
        "admissionNo": "436",
        "rollNo": "158",
        "name": "TANISHK KUMAR",
        "dob": "2016-07-27",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "III",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 86,
            "percentage": 97.7
        },
        "feeSummary": {
            "totalDue": 28500,
            "totalPaid": 0,
            "balance": 28500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-209",
        "sqlId": "262",
        "admissionNo": "437",
        "rollNo": "154",
        "name": "VANDANA",
        "dob": "2016-04-21",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "III",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 87,
            "percentage": 98.9
        },
        "feeSummary": {
            "totalDue": 18000,
            "totalPaid": 0,
            "balance": 18000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-210",
        "sqlId": "263",
        "admissionNo": "438",
        "rollNo": "194",
        "name": "VANDANI",
        "dob": "2016-08-02",
        "gender": "female",
        "bloodGroup": "O+",
        "class": "III",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 88,
            "percentage": 100.0
        },
        "feeSummary": {
            "totalDue": 19500,
            "totalPaid": 0,
            "balance": 19500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-211",
        "sqlId": "264",
        "admissionNo": "439",
        "rollNo": "195",
        "name": "VANSH SHARMA",
        "dob": "2017-02-07",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "III",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "ATUL KUMAR",
            "motherName": "KANCHAN",
            "fatherMobile": "+91 8375939398",
            "address": "MUHAMMADPUR BADHERA"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 82,
            "percentage": 93.2
        },
        "feeSummary": {
            "totalDue": 21000,
            "totalPaid": 0,
            "balance": 21000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-212",
        "sqlId": "265",
        "admissionNo": "440",
        "rollNo": "128",
        "name": "VISHAL KUMAR",
        "dob": "2017-09-17",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "III",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 83,
            "percentage": 94.3
        },
        "feeSummary": {
            "totalDue": 22500,
            "totalPaid": 0,
            "balance": 22500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-213",
        "sqlId": "266",
        "admissionNo": "443",
        "rollNo": "22",
        "name": "ANMOL YADAV",
        "dob": "2017-05-16",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "II",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 84,
            "percentage": 95.5
        },
        "feeSummary": {
            "totalDue": 24000,
            "totalPaid": 0,
            "balance": 24000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-214",
        "sqlId": "267",
        "admissionNo": "444",
        "rollNo": "199",
        "name": "ANSHU",
        "dob": "2017-02-09",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "II",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "TILAK SINGH",
            "motherName": "RAJKUMARI DEVI",
            "fatherMobile": "+91 7055247312",
            "address": "GANGAGARH BANGAR"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 85,
            "percentage": 96.6
        },
        "feeSummary": {
            "totalDue": 25500,
            "totalPaid": 0,
            "balance": 25500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-215",
        "sqlId": "268",
        "admissionNo": "448",
        "rollNo": "202",
        "name": "AYUSH TOMAR",
        "dob": "2019-10-28",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "II",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "MAHIPAL SINGH",
            "motherName": "AARTI DEVI",
            "fatherMobile": "+91 8076898797",
            "address": "MUHAMMADPUR BADHERA LOHGARH"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 86,
            "percentage": 97.7
        },
        "feeSummary": {
            "totalDue": 27000,
            "totalPaid": 0,
            "balance": 27000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-216",
        "sqlId": "269",
        "admissionNo": "449",
        "rollNo": "171",
        "name": "CHANDANI",
        "dob": "2017-04-16",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "III",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "SATENDRA SINGH",
            "motherName": "OMA DEVI",
            "fatherMobile": "+91 7017071485",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 87,
            "percentage": 98.9
        },
        "feeSummary": {
            "totalDue": 28500,
            "totalPaid": 0,
            "balance": 28500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-217",
        "sqlId": "270",
        "admissionNo": "450",
        "rollNo": "203",
        "name": "CHANDRAVEER",
        "dob": "2016-01-11",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "II",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 88,
            "percentage": 100.0
        },
        "feeSummary": {
            "totalDue": 18000,
            "totalPaid": 0,
            "balance": 18000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-218",
        "sqlId": "271",
        "admissionNo": "451",
        "rollNo": "204",
        "name": "DHAIRYA RAJPUT",
        "dob": "2018-11-12",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "II",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "DHARMENDRA KUMAR",
            "motherName": "MANJU VERMA",
            "fatherMobile": "+91 9719680948",
            "address": "BAIJALA KOTHI"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 82,
            "percentage": 93.2
        },
        "feeSummary": {
            "totalDue": 19500,
            "totalPaid": 0,
            "balance": 19500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-219",
        "sqlId": "272",
        "admissionNo": "452",
        "rollNo": "26",
        "name": "DEEPANSHU KUMAR",
        "dob": "2021-12-22",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "III",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "RAMESH KUMAR",
            "motherName": "GEETA DEVI",
            "fatherMobile": "+91 97194 76606",
            "address": "KALIYANPUR BHAGIRATHPUR"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 83,
            "percentage": 94.3
        },
        "feeSummary": {
            "totalDue": 21000,
            "totalPaid": 0,
            "balance": 21000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-220",
        "sqlId": "273",
        "admissionNo": "454",
        "rollNo": "207",
        "name": "GOPAL KUMAR",
        "dob": "2019-12-24",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "II",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "PAWAN KUMAR",
            "motherName": "RAJESHWARI DEVI",
            "fatherMobile": "+91 9012424556",
            "address": "NAGLA DHARAKPUR DIBAI BULANDSHAHR"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 84,
            "percentage": 95.5
        },
        "feeSummary": {
            "totalDue": 22500,
            "totalPaid": 0,
            "balance": 22500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-221",
        "sqlId": "274",
        "admissionNo": "456",
        "rollNo": "92",
        "name": "GUNJAN KUMAR",
        "dob": "2018-07-16",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "II",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "UDAYVEER SINGH",
            "motherName": "NEKASI DEVI",
            "fatherMobile": "+91 9675320274",
            "address": "UNCHA GOAN POST RAMGHAT DIBAI BULANDSHAHR"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 85,
            "percentage": 96.6
        },
        "feeSummary": {
            "totalDue": 24000,
            "totalPaid": 0,
            "balance": 24000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-222",
        "sqlId": "277",
        "admissionNo": "461",
        "rollNo": "173",
        "name": "HIMANSHU YADAV",
        "dob": "2018-03-03",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "II",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 86,
            "percentage": 97.7
        },
        "feeSummary": {
            "totalDue": 25500,
            "totalPaid": 0,
            "balance": 25500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-223",
        "sqlId": "279",
        "admissionNo": "463",
        "rollNo": "0",
        "name": "ISHA",
        "dob": "2016-09-03",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "IV",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "RAMGOPAL",
            "motherName": "RAJMALA",
            "fatherMobile": "+91 7830261455",
            "address": "JARGWAN (BULANDSHAHR)"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 87,
            "percentage": 98.9
        },
        "feeSummary": {
            "totalDue": 27000,
            "totalPaid": 0,
            "balance": 27000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-224",
        "sqlId": "280",
        "admissionNo": "464",
        "rollNo": "37",
        "name": "JAYANT VERMA",
        "dob": "2019-12-11",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "II",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 88,
            "percentage": 100.0
        },
        "feeSummary": {
            "totalDue": 28500,
            "totalPaid": 0,
            "balance": 28500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-225",
        "sqlId": "281",
        "admissionNo": "465",
        "rollNo": "209",
        "name": "JYOTI",
        "dob": "2016-12-31",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "II",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "RAUDAS",
            "motherName": "VIDHYA DEVI",
            "fatherMobile": "+91 8650371683",
            "address": "MOUNIPURA POST RAMGHAT BULANDSHAHR"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 82,
            "percentage": 93.2
        },
        "feeSummary": {
            "totalDue": 18000,
            "totalPaid": 0,
            "balance": 18000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-226",
        "sqlId": "282",
        "admissionNo": "466",
        "rollNo": "109",
        "name": "KAMINI",
        "dob": "2018-08-09",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "II",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "FOUJI",
            "motherName": "ROOPVATI DEVI",
            "fatherMobile": "+91 9877350492",
            "address": "KALIYANPUR BHAGIRATHPUR ATRAULI ALIGARH"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 83,
            "percentage": 94.3
        },
        "feeSummary": {
            "totalDue": 19500,
            "totalPaid": 0,
            "balance": 19500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-227",
        "sqlId": "283",
        "admissionNo": "467",
        "rollNo": "212",
        "name": "KAVYA",
        "dob": "2019-02-09",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "II",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 84,
            "percentage": 95.5
        },
        "feeSummary": {
            "totalDue": 21000,
            "totalPaid": 0,
            "balance": 21000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-228",
        "sqlId": "284",
        "admissionNo": "468",
        "rollNo": "87",
        "name": "KRISHNA KUMAR",
        "dob": "2018-10-12",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "II",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "LOKESH KUMAR",
            "motherName": "NEHA",
            "fatherMobile": "+91 8630711835",
            "address": "'LOHGARH"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 85,
            "percentage": 96.6
        },
        "feeSummary": {
            "totalDue": 22500,
            "totalPaid": 0,
            "balance": 22500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-229",
        "sqlId": "285",
        "admissionNo": "470",
        "rollNo": "161",
        "name": "KULDEEP KISHOR",
        "dob": "2017-10-20",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "II",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "TEJPAL SINGH",
            "motherName": "SUMAN DEVI",
            "fatherMobile": "+91 9027352955",
            "address": "BAINI NAGLA UNCHAGAON DIBAI BULANDSHAHR"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 86,
            "percentage": 97.7
        },
        "feeSummary": {
            "totalDue": 24000,
            "totalPaid": 0,
            "balance": 24000,
            "status": "Pending"
        },
        "siblings": [
            "STU-2026-202"
        ]
    },
    {
        "id": "STU-2026-230",
        "sqlId": "289",
        "admissionNo": "474",
        "rollNo": "169",
        "name": "MANISH KUMAR",
        "dob": "2019-01-07",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "II",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 87,
            "percentage": 98.9
        },
        "feeSummary": {
            "totalDue": 25500,
            "totalPaid": 0,
            "balance": 25500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-231",
        "sqlId": "290",
        "admissionNo": "475",
        "rollNo": "215",
        "name": "NISHA",
        "dob": "2018-12-20",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "II",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 88,
            "percentage": 100.0
        },
        "feeSummary": {
            "totalDue": 27000,
            "totalPaid": 0,
            "balance": 27000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-232",
        "sqlId": "291",
        "admissionNo": "476",
        "rollNo": "218",
        "name": "PAWAN",
        "dob": "2015-01-01",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "II",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "SATISH KUMAR",
            "motherName": "VIMLESH DEVI",
            "fatherMobile": "+91 8476978719",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 82,
            "percentage": 93.2
        },
        "feeSummary": {
            "totalDue": 28500,
            "totalPaid": 0,
            "balance": 28500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-233",
        "sqlId": "292",
        "admissionNo": "477",
        "rollNo": "194",
        "name": "PUNEET KUMAR",
        "dob": "2017-07-01",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "II",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "YOGENDRA KUMAR",
            "motherName": "LALVATI",
            "fatherMobile": "+91 9958880327",
            "address": "'NAGLA GARVI"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 83,
            "percentage": 94.3
        },
        "feeSummary": {
            "totalDue": 18000,
            "totalPaid": 0,
            "balance": 18000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-234",
        "sqlId": "293",
        "admissionNo": "478",
        "rollNo": "45",
        "name": "RAJAT KUMAR",
        "dob": "2018-12-09",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "II",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "RAJU",
            "motherName": "KASHMIRA DEVI",
            "fatherMobile": "+91 6395340434",
            "address": "MUHAMMADPUR BADHERA"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 84,
            "percentage": 95.5
        },
        "feeSummary": {
            "totalDue": 19500,
            "totalPaid": 0,
            "balance": 19500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-235",
        "sqlId": "294",
        "admissionNo": "480",
        "rollNo": "223",
        "name": "RUDRA KUMAR",
        "dob": "2018-09-13",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "II",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 85,
            "percentage": 96.6
        },
        "feeSummary": {
            "totalDue": 21000,
            "totalPaid": 0,
            "balance": 21000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-236",
        "sqlId": "295",
        "admissionNo": "481",
        "rollNo": "139",
        "name": "RUDRANSH",
        "dob": "2018-07-20",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "II",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 86,
            "percentage": 97.7
        },
        "feeSummary": {
            "totalDue": 22500,
            "totalPaid": 0,
            "balance": 22500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-237",
        "sqlId": "296",
        "admissionNo": "482",
        "rollNo": "0",
        "name": "SANDEEP KUMAR",
        "dob": "2018-01-01",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "II",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 87,
            "percentage": 98.9
        },
        "feeSummary": {
            "totalDue": 24000,
            "totalPaid": 0,
            "balance": 24000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-238",
        "sqlId": "297",
        "admissionNo": "483",
        "rollNo": "226",
        "name": "SARTHAK BHARDWAJ",
        "dob": "2019-02-01",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "II",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "AJAY SHARMA",
            "motherName": "LALITA",
            "fatherMobile": "+91 7017671928",
            "address": "V+P RAMGHAT DIST BULANDSHAHR"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 88,
            "percentage": 100.0
        },
        "feeSummary": {
            "totalDue": 25500,
            "totalPaid": 0,
            "balance": 25500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-239",
        "sqlId": "298",
        "admissionNo": "485",
        "rollNo": "229",
        "name": "SOURABH KUMAR",
        "dob": "2018-06-20",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "II",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 82,
            "percentage": 93.2
        },
        "feeSummary": {
            "totalDue": 27000,
            "totalPaid": 0,
            "balance": 27000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-240",
        "sqlId": "299",
        "admissionNo": "486",
        "rollNo": "230",
        "name": "SUSHANT KUMAR",
        "dob": "2017-01-01",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "II",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 83,
            "percentage": 94.3
        },
        "feeSummary": {
            "totalDue": 28500,
            "totalPaid": 0,
            "balance": 28500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-241",
        "sqlId": "300",
        "admissionNo": "487",
        "rollNo": "163",
        "name": "TARUN KUMAR",
        "dob": "2019-02-24",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "II",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 84,
            "percentage": 95.5
        },
        "feeSummary": {
            "totalDue": 18000,
            "totalPaid": 0,
            "balance": 18000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-242",
        "sqlId": "301",
        "admissionNo": "489",
        "rollNo": "231",
        "name": "YOGYATA KUMARI",
        "dob": "2019-03-29",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "II",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 85,
            "percentage": 96.6
        },
        "feeSummary": {
            "totalDue": 19500,
            "totalPaid": 0,
            "balance": 19500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-243",
        "sqlId": "302",
        "admissionNo": "491",
        "rollNo": "0",
        "name": "AYANSH SHARMA",
        "dob": "2019-01-15",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "I",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "LALIT KUMAR",
            "motherName": "ANKITA",
            "fatherMobile": "+91 9759539814",
            "address": "RAMGHAT DIBAI BULANDSHAHR"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 86,
            "percentage": 97.7
        },
        "feeSummary": {
            "totalDue": 21000,
            "totalPaid": 0,
            "balance": 21000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-244",
        "sqlId": "303",
        "admissionNo": "493",
        "rollNo": "0",
        "name": "BANSHU KUMAR",
        "dob": "2020-01-01",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "I",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 87,
            "percentage": 98.9
        },
        "feeSummary": {
            "totalDue": 22500,
            "totalPaid": 0,
            "balance": 22500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-245",
        "sqlId": "304",
        "admissionNo": "494",
        "rollNo": "0",
        "name": "CHESTA",
        "dob": "2020-01-09",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "I",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 88,
            "percentage": 100.0
        },
        "feeSummary": {
            "totalDue": 24000,
            "totalPaid": 0,
            "balance": 24000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-246",
        "sqlId": "305",
        "admissionNo": "495",
        "rollNo": "0",
        "name": "DAMINI LODHI",
        "dob": "2021-01-01",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "I",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 82,
            "percentage": 93.2
        },
        "feeSummary": {
            "totalDue": 25500,
            "totalPaid": 0,
            "balance": 25500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-247",
        "sqlId": "306",
        "admissionNo": "496",
        "rollNo": "0",
        "name": "DEEKSHA SHARMA",
        "dob": "2020-06-25",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "I",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 83,
            "percentage": 94.3
        },
        "feeSummary": {
            "totalDue": 27000,
            "totalPaid": 0,
            "balance": 27000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-248",
        "sqlId": "307",
        "admissionNo": "497",
        "rollNo": "0",
        "name": "DEEPAK",
        "dob": "2020-03-20",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "I",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 84,
            "percentage": 95.5
        },
        "feeSummary": {
            "totalDue": 28500,
            "totalPaid": 0,
            "balance": 28500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-249",
        "sqlId": "308",
        "admissionNo": "498",
        "rollNo": "0",
        "name": "DIMPAL",
        "dob": "2018-09-08",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "I",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 85,
            "percentage": 96.6
        },
        "feeSummary": {
            "totalDue": 18000,
            "totalPaid": 0,
            "balance": 18000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-250",
        "sqlId": "310",
        "admissionNo": "500",
        "rollNo": "0",
        "name": "GAURAV KUMAR",
        "dob": "2021-12-22",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "I",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "SATISH KUMAR",
            "motherName": "VIMALESH DEVI",
            "fatherMobile": "+91 9780410371",
            "address": "KALIYANPUR BHAGIRATHPUR"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 86,
            "percentage": 97.7
        },
        "feeSummary": {
            "totalDue": 19500,
            "totalPaid": 0,
            "balance": 19500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-251",
        "sqlId": "311",
        "admissionNo": "501",
        "rollNo": "0",
        "name": "GURMEET SHARMA",
        "dob": "2019-10-09",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "I",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "GAURAV KUMAR",
            "motherName": "ARTI SHARMA",
            "fatherMobile": "+91 6396944247",
            "address": "JARGWAN DIBAI"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 87,
            "percentage": 98.9
        },
        "feeSummary": {
            "totalDue": 21000,
            "totalPaid": 0,
            "balance": 21000,
            "status": "Pending"
        },
        "siblings": [
            "STU-2026-473"
        ]
    },
    {
        "id": "STU-2026-252",
        "sqlId": "312",
        "admissionNo": "502",
        "rollNo": "0",
        "name": "HANSHIKA RAJPUT",
        "dob": "2019-07-04",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "I",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 88,
            "percentage": 100.0
        },
        "feeSummary": {
            "totalDue": 22500,
            "totalPaid": 0,
            "balance": 22500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-253",
        "sqlId": "313",
        "admissionNo": "504",
        "rollNo": "0",
        "name": "HARSHIT YADAV",
        "dob": "2019-05-10",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "I",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "SHIVDUTT YADAV",
            "motherName": "KUSUMLATA",
            "fatherMobile": "+91 7017588853",
            "address": "BAIJALA ATRAULI ALIGARH"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 82,
            "percentage": 93.2
        },
        "feeSummary": {
            "totalDue": 24000,
            "totalPaid": 0,
            "balance": 24000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-254",
        "sqlId": "314",
        "admissionNo": "505",
        "rollNo": "0",
        "name": "ISHANT KUMAR",
        "dob": "2019-10-16",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "I",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "ROHIT KUMAR",
            "motherName": "NEMVATI DEVI",
            "fatherMobile": "+91 9719312990",
            "address": "'NAGLA SHUMALI"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 83,
            "percentage": 94.3
        },
        "feeSummary": {
            "totalDue": 25500,
            "totalPaid": 0,
            "balance": 25500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-255",
        "sqlId": "315",
        "admissionNo": "506",
        "rollNo": "0",
        "name": "JATIN KUMAR",
        "dob": "2021-01-09",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "I",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 84,
            "percentage": 95.5
        },
        "feeSummary": {
            "totalDue": 27000,
            "totalPaid": 0,
            "balance": 27000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-256",
        "sqlId": "316",
        "admissionNo": "507",
        "rollNo": "0",
        "name": "JHALAK RAJPUT",
        "dob": "2020-02-26",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "I",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 85,
            "percentage": 96.6
        },
        "feeSummary": {
            "totalDue": 28500,
            "totalPaid": 0,
            "balance": 28500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-257",
        "sqlId": "320",
        "admissionNo": "511",
        "rollNo": "0",
        "name": "KUMKUM RAJPUT",
        "dob": "2019-07-02",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "I",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 86,
            "percentage": 97.7
        },
        "feeSummary": {
            "totalDue": 18000,
            "totalPaid": 0,
            "balance": 18000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-258",
        "sqlId": "321",
        "admissionNo": "513",
        "rollNo": "0",
        "name": "KUNJ GAUR",
        "dob": "2020-06-21",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "I",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "NAVNEET GAUR",
            "motherName": "KARISHMA",
            "fatherMobile": "+91 8909832800",
            "address": "JARGWAN DIBAI BULANDSHAHR"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 87,
            "percentage": 98.9
        },
        "feeSummary": {
            "totalDue": 19500,
            "totalPaid": 0,
            "balance": 19500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-259",
        "sqlId": "323",
        "admissionNo": "515",
        "rollNo": "0",
        "name": "LOVEKUSH YADAV",
        "dob": "2020-03-02",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "UKG",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "LOKESH KUMAR",
            "motherName": "SHASHI",
            "fatherMobile": "+91 9512129478",
            "address": "MOUNIPURA URF RAMVAS POST +RAMGHAT DIST+BULANDSHAHR"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 88,
            "percentage": 100.0
        },
        "feeSummary": {
            "totalDue": 21000,
            "totalPaid": 0,
            "balance": 21000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-260",
        "sqlId": "324",
        "admissionNo": "516",
        "rollNo": "181",
        "name": "KUMARI MAHAK",
        "dob": "2017-07-09",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "III",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 82,
            "percentage": 93.2
        },
        "feeSummary": {
            "totalDue": 22500,
            "totalPaid": 0,
            "balance": 22500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-261",
        "sqlId": "325",
        "admissionNo": "517",
        "rollNo": "0",
        "name": "MANVI LODHI",
        "dob": "2019-04-16",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "I",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "SATISH KUMAR",
            "motherName": "MADHU",
            "fatherMobile": "+91 9675939394",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 83,
            "percentage": 94.3
        },
        "feeSummary": {
            "totalDue": 24000,
            "totalPaid": 0,
            "balance": 24000,
            "status": "Pending"
        },
        "siblings": [
            "STU-2026-281",
            "STU-2026-450"
        ]
    },
    {
        "id": "STU-2026-262",
        "sqlId": "326",
        "admissionNo": "518",
        "rollNo": "0",
        "name": "MANVI",
        "dob": "2019-02-19",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "I",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "DINESH KUMAR",
            "motherName": "VEENESH DEVI",
            "fatherMobile": "+91 9536711508",
            "address": "DADHAR ALIPURA"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 84,
            "percentage": 95.5
        },
        "feeSummary": {
            "totalDue": 25500,
            "totalPaid": 0,
            "balance": 25500,
            "status": "Pending"
        },
        "siblings": [
            "STU-2026-155"
        ]
    },
    {
        "id": "STU-2026-263",
        "sqlId": "329",
        "admissionNo": "521",
        "rollNo": "0",
        "name": "NAVNEET KUMAR",
        "dob": "2018-10-15",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "I",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "JITENDRA KUMAR",
            "motherName": "SARLA DEVI",
            "fatherMobile": "+91 9718249642",
            "address": "CHIRAURI JARGWAN"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 85,
            "percentage": 96.6
        },
        "feeSummary": {
            "totalDue": 27000,
            "totalPaid": 0,
            "balance": 27000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-264",
        "sqlId": "330",
        "admissionNo": "522",
        "rollNo": "0",
        "name": "PARI",
        "dob": "2019-07-26",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "I",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 86,
            "percentage": 97.7
        },
        "feeSummary": {
            "totalDue": 28500,
            "totalPaid": 0,
            "balance": 28500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-265",
        "sqlId": "332",
        "admissionNo": "526",
        "rollNo": "0",
        "name": "RACHIT KUMAR",
        "dob": "2020-11-23",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "I",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "DINESH KUMAR",
            "motherName": "PREMVATI DEVI",
            "fatherMobile": "+91 8700231451",
            "address": "DHARAKPUR DIBAI BULANDSHAHR"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 87,
            "percentage": 98.9
        },
        "feeSummary": {
            "totalDue": 18000,
            "totalPaid": 0,
            "balance": 18000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-266",
        "sqlId": "333",
        "admissionNo": "528",
        "rollNo": "0",
        "name": "RIYA",
        "dob": "2019-05-31",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "I",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "ROUDAS",
            "motherName": "VIDHYA DEVI",
            "fatherMobile": "+91 8650371683",
            "address": "MOUNIPURA"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 88,
            "percentage": 100.0
        },
        "feeSummary": {
            "totalDue": 19500,
            "totalPaid": 0,
            "balance": 19500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-267",
        "sqlId": "334",
        "admissionNo": "529",
        "rollNo": "0",
        "name": "RUCHI KUMARI",
        "dob": "2019-09-13",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "I",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 82,
            "percentage": 93.2
        },
        "feeSummary": {
            "totalDue": 21000,
            "totalPaid": 0,
            "balance": 21000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-268",
        "sqlId": "335",
        "admissionNo": "530",
        "rollNo": "0",
        "name": "SACHIN KUMAR",
        "dob": "2019-01-15",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "I",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "REVADI SINGH",
            "motherName": "SONI",
            "fatherMobile": "+91 9761768321",
            "address": "SILHARI RAMGHAT (BULANDSHAHR)"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 83,
            "percentage": 94.3
        },
        "feeSummary": {
            "totalDue": 22500,
            "totalPaid": 0,
            "balance": 22500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-269",
        "sqlId": "336",
        "admissionNo": "532",
        "rollNo": "227",
        "name": "SHAURYA KAUSHIK",
        "dob": "2018-02-28",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "II",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "RAJAT KAUSHIK",
            "motherName": "SHANKEY SHARMA",
            "fatherMobile": "+91 8630457658",
            "address": "RAMGHAT"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 84,
            "percentage": 95.5
        },
        "feeSummary": {
            "totalDue": 24000,
            "totalPaid": 0,
            "balance": 24000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-270",
        "sqlId": "337",
        "admissionNo": "533",
        "rollNo": "0",
        "name": "SHUBH",
        "dob": "2018-02-08",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "II",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 85,
            "percentage": 96.6
        },
        "feeSummary": {
            "totalDue": 25500,
            "totalPaid": 0,
            "balance": 25500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-271",
        "sqlId": "339",
        "admissionNo": "536",
        "rollNo": "0",
        "name": "VINAYAK KUMAR",
        "dob": "2020-11-24",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "I",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 86,
            "percentage": 97.7
        },
        "feeSummary": {
            "totalDue": 27000,
            "totalPaid": 0,
            "balance": 27000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-272",
        "sqlId": "343",
        "admissionNo": "541",
        "rollNo": "0",
        "name": "YATIN KUMAR",
        "dob": "2020-08-27",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "UKG",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 87,
            "percentage": 98.9
        },
        "feeSummary": {
            "totalDue": 28500,
            "totalPaid": 0,
            "balance": 28500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-273",
        "sqlId": "345",
        "admissionNo": "543",
        "rollNo": "0",
        "name": "CHETAN CHAUDHARY",
        "dob": "2023-01-04",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "UKG",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "NEERAJ KUMAR RANA",
            "motherName": "REENA DEVI",
            "fatherMobile": "+91 9258398453",
            "address": "BAJHERA DHARAKPUR DIBAI BSR"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 88,
            "percentage": 100.0
        },
        "feeSummary": {
            "totalDue": 18000,
            "totalPaid": 0,
            "balance": 18000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-274",
        "sqlId": "346",
        "admissionNo": "544",
        "rollNo": "0",
        "name": "PUNEET CHAUDHARY",
        "dob": "2021-10-08",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "UKG",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 82,
            "percentage": 93.2
        },
        "feeSummary": {
            "totalDue": 19500,
            "totalPaid": 0,
            "balance": 19500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-275",
        "sqlId": "347",
        "admissionNo": "545",
        "rollNo": "0",
        "name": "DIVYA",
        "dob": "2019-08-14",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "UKG",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "AJAY KUMAR",
            "motherName": "LATESH DEVI",
            "fatherMobile": "+91 9536878010",
            "address": "Nagla Dharakpur"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 83,
            "percentage": 94.3
        },
        "feeSummary": {
            "totalDue": 21000,
            "totalPaid": 0,
            "balance": 21000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-276",
        "sqlId": "348",
        "admissionNo": "546",
        "rollNo": "0",
        "name": "PRANIKA SHARMA",
        "dob": "2020-01-17",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "LKG",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "GAURAV SHARMA",
            "motherName": "SANGEETA SHARMA",
            "fatherMobile": "+91 6395389276",
            "address": "Bagi Nagla"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 84,
            "percentage": 95.5
        },
        "feeSummary": {
            "totalDue": 22500,
            "totalPaid": 0,
            "balance": 22500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-277",
        "sqlId": "349",
        "admissionNo": "548",
        "rollNo": "0",
        "name": "OVYA LODHI",
        "dob": "2022-07-07",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "LKG",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "PANKAJ KUMAR",
            "motherName": "RANI",
            "fatherMobile": "+91 9758951444",
            "address": "Khediya Rafatpur"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 85,
            "percentage": 96.6
        },
        "feeSummary": {
            "totalDue": 24000,
            "totalPaid": 0,
            "balance": 24000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-278",
        "sqlId": "350",
        "admissionNo": "550",
        "rollNo": "0",
        "name": "HIMANSHI RAJPUT",
        "dob": "2020-12-04",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "UKG",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "KAUSHAL KUMAR",
            "motherName": "SARALA DEVI",
            "fatherMobile": "+91 9468205683",
            "address": "'GANESHPUR GOVINDPUR"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 86,
            "percentage": 97.7
        },
        "feeSummary": {
            "totalDue": 25500,
            "totalPaid": 0,
            "balance": 25500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-279",
        "sqlId": "351",
        "admissionNo": "551",
        "rollNo": "0",
        "name": "SHAURYA SHARMA",
        "dob": "2021-11-12",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "UKG",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "INDRAJEET SHARMA",
            "motherName": "DULARI SHARMA",
            "fatherMobile": "+91 8077450141",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 87,
            "percentage": 98.9
        },
        "feeSummary": {
            "totalDue": 27000,
            "totalPaid": 0,
            "balance": 27000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-280",
        "sqlId": "352",
        "admissionNo": "552",
        "rollNo": "0",
        "name": "SHLOK",
        "dob": "2020-02-02",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "UKG",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "BANTI SINGH",
            "motherName": "GUNJAN RANI",
            "fatherMobile": "+91 8153970787",
            "address": "Pesari"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 88,
            "percentage": 100.0
        },
        "feeSummary": {
            "totalDue": 28500,
            "totalPaid": 0,
            "balance": 28500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-281",
        "sqlId": "354",
        "admissionNo": "554",
        "rollNo": "0",
        "name": "ANURAG LODHI",
        "dob": "2020-12-23",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "UKG",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "SATISH KUMAR",
            "motherName": "MADHU",
            "fatherMobile": "+91 9675939394",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 82,
            "percentage": 93.2
        },
        "feeSummary": {
            "totalDue": 18000,
            "totalPaid": 0,
            "balance": 18000,
            "status": "Pending"
        },
        "siblings": [
            "STU-2026-261",
            "STU-2026-450"
        ]
    },
    {
        "id": "STU-2026-282",
        "sqlId": "355",
        "admissionNo": "555",
        "rollNo": "0",
        "name": "DEVIKA TOMAR",
        "dob": "2020-01-30",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "UKG",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "VARUN PRATAP SINGH",
            "motherName": "MONIKA DEVI",
            "fatherMobile": "+91 9958132063",
            "address": "MUHAMMADPUR BADHERA"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 83,
            "percentage": 94.3
        },
        "feeSummary": {
            "totalDue": 19500,
            "totalPaid": 0,
            "balance": 19500,
            "status": "Pending"
        },
        "siblings": [
            "STU-2026-306"
        ]
    },
    {
        "id": "STU-2026-283",
        "sqlId": "356",
        "admissionNo": "556",
        "rollNo": "0",
        "name": "AVNI KUMARI",
        "dob": "2018-08-20",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "UKG",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "VIRESH KUMAR",
            "motherName": "SHASHI DEVI",
            "fatherMobile": "+91 7678237965",
            "address": "Chirauri"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 84,
            "percentage": 95.5
        },
        "feeSummary": {
            "totalDue": 21000,
            "totalPaid": 0,
            "balance": 21000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-284",
        "sqlId": "357",
        "admissionNo": "557",
        "rollNo": "0",
        "name": "AAKARITI YADAV",
        "dob": "2020-09-09",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "LKG",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "VIRESH KUMAR",
            "motherName": "SHASHI DEVI",
            "fatherMobile": "+91 8954904810",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 85,
            "percentage": 96.6
        },
        "feeSummary": {
            "totalDue": 22500,
            "totalPaid": 0,
            "balance": 22500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-285",
        "sqlId": "358",
        "admissionNo": "560",
        "rollNo": "0",
        "name": "SANJEEV KUMAR",
        "dob": "2021-12-22",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "UKG",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "JAYVEER SINGH",
            "motherName": "POONAM DEVI",
            "fatherMobile": "+91 9719419975",
            "address": "'NAGLA GARVI"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 86,
            "percentage": 97.7
        },
        "feeSummary": {
            "totalDue": 24000,
            "totalPaid": 0,
            "balance": 24000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-286",
        "sqlId": "359",
        "admissionNo": "562",
        "rollNo": "0",
        "name": "RAGHAV KUMAR",
        "dob": "2020-12-20",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "UKG",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "JAGDISH YADAV",
            "motherName": "NEERESH DEVI",
            "fatherMobile": "+91 8447784346",
            "address": "SAME"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 87,
            "percentage": 98.9
        },
        "feeSummary": {
            "totalDue": 25500,
            "totalPaid": 0,
            "balance": 25500,
            "status": "Pending"
        },
        "siblings": [
            "STU-2026-461"
        ]
    },
    {
        "id": "STU-2026-287",
        "sqlId": "360",
        "admissionNo": "563",
        "rollNo": "0",
        "name": "Anaya Rao Bardhan",
        "dob": "2020-12-26",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "LKG",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Puneet Rao Bardhan",
            "motherName": "Rachana",
            "fatherMobile": "+91 9410024562",
            "address": "Muhammadpur"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 88,
            "percentage": 100.0
        },
        "feeSummary": {
            "totalDue": 27000,
            "totalPaid": 0,
            "balance": 27000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-288",
        "sqlId": "363",
        "admissionNo": "567",
        "rollNo": "0",
        "name": "ADABIKA",
        "dob": "-0001-11-30",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "UKG",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 82,
            "percentage": 93.2
        },
        "feeSummary": {
            "totalDue": 28500,
            "totalPaid": 0,
            "balance": 28500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-289",
        "sqlId": "364",
        "admissionNo": "573",
        "rollNo": "0",
        "name": "ANAND KAUSHIK",
        "dob": "2011-05-07",
        "gender": "Male",
        "bloodGroup": "O+",
        "class": "XI",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 83,
            "percentage": 94.3
        },
        "feeSummary": {
            "totalDue": 18000,
            "totalPaid": 0,
            "balance": 18000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-290",
        "sqlId": "365",
        "admissionNo": "574",
        "rollNo": "0",
        "name": "NEERAJ YADAV",
        "dob": "2010-03-02",
        "gender": "Male",
        "bloodGroup": "O+",
        "class": "XI",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 84,
            "percentage": 95.5
        },
        "feeSummary": {
            "totalDue": 19500,
            "totalPaid": 0,
            "balance": 19500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-291",
        "sqlId": "366",
        "admissionNo": "575",
        "rollNo": "0",
        "name": "KUMARI NEHA",
        "dob": "2010-04-08",
        "gender": "Female",
        "bloodGroup": "O+",
        "class": "XI",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 85,
            "percentage": 96.6
        },
        "feeSummary": {
            "totalDue": 21000,
            "totalPaid": 0,
            "balance": 21000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-292",
        "sqlId": "367",
        "admissionNo": "576",
        "rollNo": "0",
        "name": "VISHAKA SHARMA",
        "dob": "2010-06-20",
        "gender": "Female",
        "bloodGroup": "O+",
        "class": "XI",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "AMIT KUMAR SHARMA",
            "motherName": "DURGESH SHARMA",
            "fatherMobile": "+91 8395050888",
            "address": "JARGWAN BULANDSHAHR"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 86,
            "percentage": 97.7
        },
        "feeSummary": {
            "totalDue": 22500,
            "totalPaid": 0,
            "balance": 22500,
            "status": "Pending"
        },
        "siblings": [
            "STU-2026-516"
        ]
    },
    {
        "id": "STU-2026-293",
        "sqlId": "368",
        "admissionNo": "577",
        "rollNo": "0",
        "name": "SACHIN RAGHAV",
        "dob": "2011-12-01",
        "gender": "Male",
        "bloodGroup": "O+",
        "class": "IX",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "AVDHESH KUMAR",
            "motherName": "REKHA DEVI",
            "fatherMobile": "+91 97194 76606",
            "address": "HARVANSHPUR JIROLI"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 87,
            "percentage": 98.9
        },
        "feeSummary": {
            "totalDue": 24000,
            "totalPaid": 0,
            "balance": 24000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-294",
        "sqlId": "369",
        "admissionNo": "578",
        "rollNo": "8",
        "name": "LUCKY KUMAR",
        "dob": "2012-01-01",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "IX",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "GAJENDRA SINGH",
            "motherName": "BHAWANA DEVI",
            "fatherMobile": "+91 9667164771",
            "address": "NAGLA KOTHI"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 88,
            "percentage": 100.0
        },
        "feeSummary": {
            "totalDue": 25500,
            "totalPaid": 0,
            "balance": 25500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-295",
        "sqlId": "370",
        "admissionNo": "579",
        "rollNo": "16",
        "name": "HARIKANT RAGHAV",
        "dob": "2012-11-26",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "VIII",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "CHARAN SINGH RAGHAV",
            "motherName": "MANJU DEVI",
            "fatherMobile": "+91 97194 76606",
            "address": "LOHGARH"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 82,
            "percentage": 93.2
        },
        "feeSummary": {
            "totalDue": 27000,
            "totalPaid": 0,
            "balance": 27000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-296",
        "sqlId": "371",
        "admissionNo": "580",
        "rollNo": "0",
        "name": "TOSHIV",
        "dob": "2013-08-14",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "VIII",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "PURAN SINGH",
            "motherName": "KIRTI DEVI",
            "fatherMobile": "+91 8954721951",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 83,
            "percentage": 94.3
        },
        "feeSummary": {
            "totalDue": 28500,
            "totalPaid": 0,
            "balance": 28500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-297",
        "sqlId": "373",
        "admissionNo": "582",
        "rollNo": "0",
        "name": "DEEPAK YADAV",
        "dob": "2018-09-24",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "I",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 84,
            "percentage": 95.5
        },
        "feeSummary": {
            "totalDue": 18000,
            "totalPaid": 0,
            "balance": 18000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-298",
        "sqlId": "374",
        "admissionNo": "583",
        "rollNo": "136",
        "name": "ADITYA KUMAR",
        "dob": "2016-12-01",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "II",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "MUKESH KUMAR",
            "motherName": "SHEELA",
            "fatherMobile": "+91 7037019598",
            "address": "KALIYANPUR BHAGIRATHPUR"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 85,
            "percentage": 96.6
        },
        "feeSummary": {
            "totalDue": 19500,
            "totalPaid": 0,
            "balance": 19500,
            "status": "Pending"
        },
        "siblings": [
            "STU-2026-136"
        ]
    },
    {
        "id": "STU-2026-299",
        "sqlId": "377",
        "admissionNo": "586",
        "rollNo": "56",
        "name": "DESHBANDHU RAJPUT",
        "dob": "2014-01-18",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "VII",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 86,
            "percentage": 97.7
        },
        "feeSummary": {
            "totalDue": 21000,
            "totalPaid": 0,
            "balance": 21000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-300",
        "sqlId": "378",
        "admissionNo": "587",
        "rollNo": "26",
        "name": "DEEPESH KUMAR",
        "dob": "2012-06-05",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "III",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 87,
            "percentage": 98.9
        },
        "feeSummary": {
            "totalDue": 22500,
            "totalPaid": 0,
            "balance": 22500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-301",
        "sqlId": "379",
        "admissionNo": "588",
        "rollNo": "0",
        "name": "RACHANA",
        "dob": "2018-09-12",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "I",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 88,
            "percentage": 100.0
        },
        "feeSummary": {
            "totalDue": 24000,
            "totalPaid": 0,
            "balance": 24000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-302",
        "sqlId": "380",
        "admissionNo": "589",
        "rollNo": "0",
        "name": "HIMANSHU",
        "dob": "2019-05-12",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "I",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "SURENDRA SINGH",
            "motherName": "MANJU DEVI",
            "fatherMobile": "+91 6395926626",
            "address": "PESARI"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 82,
            "percentage": 93.2
        },
        "feeSummary": {
            "totalDue": 25500,
            "totalPaid": 0,
            "balance": 25500,
            "status": "Pending"
        },
        "siblings": [
            "STU-2026-437"
        ]
    },
    {
        "id": "STU-2026-303",
        "sqlId": "381",
        "admissionNo": "592",
        "rollNo": "111",
        "name": "KHUSHI MEENA",
        "dob": "2015-12-24",
        "gender": "female",
        "bloodGroup": "O+",
        "class": "V",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "RAHUL KUMAR",
            "motherName": "GEETA DEVI",
            "fatherMobile": "+91 8006240034",
            "address": "JARGWAN DIBAI BULANDSHAHR"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 83,
            "percentage": 94.3
        },
        "feeSummary": {
            "totalDue": 27000,
            "totalPaid": 0,
            "balance": 27000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-304",
        "sqlId": "382",
        "admissionNo": "593",
        "rollNo": "208",
        "name": "HARSHIT KUMAR",
        "dob": "2015-05-20",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "II",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "PRADEEP KUMAR",
            "motherName": "POOJA DEVI",
            "fatherMobile": "+91 9761722945",
            "address": "LOHGARH"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 84,
            "percentage": 95.5
        },
        "feeSummary": {
            "totalDue": 28500,
            "totalPaid": 0,
            "balance": 28500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-305",
        "sqlId": "383",
        "admissionNo": "594",
        "rollNo": "0",
        "name": "AARUSH MITTAL",
        "dob": "2019-12-22",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "I",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "ANKUR MITTAL",
            "motherName": "PARUSHI MITTAL",
            "fatherMobile": "+91 9917938383",
            "address": "'RAMGHAT"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 85,
            "percentage": 96.6
        },
        "feeSummary": {
            "totalDue": 18000,
            "totalPaid": 0,
            "balance": 18000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-306",
        "sqlId": "384",
        "admissionNo": "595",
        "rollNo": "216",
        "name": "NISHU TOMAR",
        "dob": "2018-08-28",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "II",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "VARUN PRATAP SINGH",
            "motherName": "MONIKA DEVI",
            "fatherMobile": "+91 9958132063",
            "address": "MUHAMMADPUR BADHERA"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 86,
            "percentage": 97.7
        },
        "feeSummary": {
            "totalDue": 19500,
            "totalPaid": 0,
            "balance": 19500,
            "status": "Pending"
        },
        "siblings": [
            "STU-2026-282"
        ]
    },
    {
        "id": "STU-2026-307",
        "sqlId": "385",
        "admissionNo": "596",
        "rollNo": "64",
        "name": "MOHIT KUMAR",
        "dob": "2016-05-07",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "II",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "SHIV KUMAR",
            "motherName": "REENA DEVI",
            "fatherMobile": "+91 9711124780",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 87,
            "percentage": 98.9
        },
        "feeSummary": {
            "totalDue": 21000,
            "totalPaid": 0,
            "balance": 21000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-308",
        "sqlId": "386",
        "admissionNo": "598",
        "rollNo": "95",
        "name": "YASH KUMAR",
        "dob": "2015-11-15",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "II",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "BRAJESH KUMAR",
            "motherName": "MANJU DEVI",
            "fatherMobile": "+91 97194 76606",
            "address": "NAGLA CHIRAURI"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 88,
            "percentage": 100.0
        },
        "feeSummary": {
            "totalDue": 22500,
            "totalPaid": 0,
            "balance": 22500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-309",
        "sqlId": "388",
        "admissionNo": "601",
        "rollNo": "107",
        "name": "DEESHU",
        "dob": "2015-03-20",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "IV",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "ANIL KUMAR",
            "motherName": "PINKY",
            "fatherMobile": "+91 9761825947",
            "address": "SILHARI RAMGHAT"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 82,
            "percentage": 93.2
        },
        "feeSummary": {
            "totalDue": 24000,
            "totalPaid": 0,
            "balance": 24000,
            "status": "Pending"
        },
        "siblings": [
            "STU-2026-146"
        ]
    },
    {
        "id": "STU-2026-310",
        "sqlId": "391",
        "admissionNo": "609",
        "rollNo": "115",
        "name": "MAYANK YADAV",
        "dob": "2015-06-17",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "V",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 83,
            "percentage": 94.3
        },
        "feeSummary": {
            "totalDue": 25500,
            "totalPaid": 0,
            "balance": 25500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-311",
        "sqlId": "394",
        "admissionNo": "615",
        "rollNo": "0",
        "name": "NISHANT KUMAR",
        "dob": "-0001-11-30",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "UKG",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "JAYPRAKASH",
            "motherName": "ARVESH DEVI",
            "fatherMobile": "+91 9759358479",
            "address": "UNCHA GAON BANGAR"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 84,
            "percentage": 95.5
        },
        "feeSummary": {
            "totalDue": 27000,
            "totalPaid": 0,
            "balance": 27000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-312",
        "sqlId": "395",
        "admissionNo": "616",
        "rollNo": "0",
        "name": "KRATIK KUMAR",
        "dob": "2017-08-18",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "I",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "SANJEEV KUMAR",
            "motherName": "GEETA DEVI",
            "fatherMobile": "+91 7310802948",
            "address": "UNCHA GAON BANGAR"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 85,
            "percentage": 96.6
        },
        "feeSummary": {
            "totalDue": 28500,
            "totalPaid": 0,
            "balance": 28500,
            "status": "Pending"
        },
        "siblings": [
            "STU-2026-336"
        ]
    },
    {
        "id": "STU-2026-313",
        "sqlId": "396",
        "admissionNo": "619",
        "rollNo": "20",
        "name": "MAYANK KUMAR",
        "dob": "2015-09-02",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "VIII",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "VIJENDRA SINGH",
            "motherName": "PINKI DEVI",
            "fatherMobile": "+91 9528066204",
            "address": "NAGLA DHARKPUR"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 86,
            "percentage": 97.7
        },
        "feeSummary": {
            "totalDue": 18000,
            "totalPaid": 0,
            "balance": 18000,
            "status": "Pending"
        },
        "siblings": [
            "STU-2026-314"
        ]
    },
    {
        "id": "STU-2026-314",
        "sqlId": "397",
        "admissionNo": "620",
        "rollNo": "20",
        "name": "LUCKY KUMAR",
        "dob": "2018-09-26",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "III",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "VIJENDRA SINGH",
            "motherName": "PINKI DEVI",
            "fatherMobile": "+91 9528066204",
            "address": "NAGLA DHARKPUR"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 87,
            "percentage": 98.9
        },
        "feeSummary": {
            "totalDue": 19500,
            "totalPaid": 0,
            "balance": 19500,
            "status": "Pending"
        },
        "siblings": [
            "STU-2026-313"
        ]
    },
    {
        "id": "STU-2026-315",
        "sqlId": "398",
        "admissionNo": "621",
        "rollNo": "0",
        "name": "RISHIKA CHAUHAN",
        "dob": "2021-01-23",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "UKG",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 88,
            "percentage": 100.0
        },
        "feeSummary": {
            "totalDue": 21000,
            "totalPaid": 0,
            "balance": 21000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-316",
        "sqlId": "399",
        "admissionNo": "622",
        "rollNo": "179",
        "name": "KANAK",
        "dob": "2017-08-16",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "III",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 82,
            "percentage": 93.2
        },
        "feeSummary": {
            "totalDue": 22500,
            "totalPaid": 0,
            "balance": 22500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-317",
        "sqlId": "400",
        "admissionNo": "625",
        "rollNo": "0",
        "name": "CHETAN",
        "dob": "2019-08-21",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "I",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 83,
            "percentage": 94.3
        },
        "feeSummary": {
            "totalDue": 24000,
            "totalPaid": 0,
            "balance": 24000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-318",
        "sqlId": "401",
        "admissionNo": "626",
        "rollNo": "0",
        "name": "MAHAK",
        "dob": "2021-10-03",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "LKG",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 84,
            "percentage": 95.5
        },
        "feeSummary": {
            "totalDue": 25500,
            "totalPaid": 0,
            "balance": 25500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-319",
        "sqlId": "404",
        "admissionNo": "629",
        "rollNo": "0",
        "name": "MADHAV KUMAR",
        "dob": "2020-08-21",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "UKG",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 85,
            "percentage": 96.6
        },
        "feeSummary": {
            "totalDue": 27000,
            "totalPaid": 0,
            "balance": 27000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-320",
        "sqlId": "406",
        "admissionNo": "631",
        "rollNo": "0",
        "name": "HIMANSHU KUMAR",
        "dob": "2017-01-01",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "I",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 86,
            "percentage": 97.7
        },
        "feeSummary": {
            "totalDue": 28500,
            "totalPaid": 0,
            "balance": 28500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-321",
        "sqlId": "407",
        "admissionNo": "633",
        "rollNo": "0",
        "name": "MAYANK KUMAR",
        "dob": "2019-03-20",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "I",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "RAVI KUMAR",
            "motherName": "REENA DEVI",
            "fatherMobile": "+91 8192863063",
            "address": "UNCHA GAON BANGAR"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 87,
            "percentage": 98.9
        },
        "feeSummary": {
            "totalDue": 18000,
            "totalPaid": 0,
            "balance": 18000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-322",
        "sqlId": "408",
        "admissionNo": "634",
        "rollNo": "0",
        "name": "BHAVYA MITTAL",
        "dob": "2020-01-22",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "I",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 88,
            "percentage": 100.0
        },
        "feeSummary": {
            "totalDue": 19500,
            "totalPaid": 0,
            "balance": 19500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-323",
        "sqlId": "410",
        "admissionNo": "637",
        "rollNo": "0",
        "name": "DIVYANSHI",
        "dob": "2021-06-26",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "UKG",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "AJAY KUMAR",
            "motherName": "NEERU DEVI",
            "fatherMobile": "+91 9758962135",
            "address": "KALIYANPUR BHAGIRATHPUR"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 82,
            "percentage": 93.2
        },
        "feeSummary": {
            "totalDue": 21000,
            "totalPaid": 0,
            "balance": 21000,
            "status": "Pending"
        },
        "siblings": [
            "STU-2026-106"
        ]
    },
    {
        "id": "STU-2026-324",
        "sqlId": "411",
        "admissionNo": "638",
        "rollNo": "0",
        "name": "RITIK",
        "dob": "2018-06-06",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "I",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "NARESH KUMAR",
            "motherName": "ANEETA",
            "fatherMobile": "+91 9368888254",
            "address": "UNCHA GAON BANGAR"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 83,
            "percentage": 94.3
        },
        "feeSummary": {
            "totalDue": 22500,
            "totalPaid": 0,
            "balance": 22500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-325",
        "sqlId": "412",
        "admissionNo": "640",
        "rollNo": "0",
        "name": "KRISHNA KUMAR",
        "dob": "2019-02-12",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "I",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "BANTI KUMAR",
            "motherName": "MEERA DEVI",
            "fatherMobile": "+91 7252826099",
            "address": "KALIYANPUR BHAGIRATHIPUR"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 84,
            "percentage": 95.5
        },
        "feeSummary": {
            "totalDue": 24000,
            "totalPaid": 0,
            "balance": 24000,
            "status": "Pending"
        },
        "siblings": [
            "STU-2026-052",
            "STU-2026-326"
        ]
    },
    {
        "id": "STU-2026-326",
        "sqlId": "413",
        "admissionNo": "641",
        "rollNo": "30",
        "name": "NEERAJ",
        "dob": "2013-12-31",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "III",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "BANTI KUMAR",
            "motherName": "MEERA DEVI",
            "fatherMobile": "+91 7252826099",
            "address": "KALIYANPUR BHAGIRATHIPUR"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 85,
            "percentage": 96.6
        },
        "feeSummary": {
            "totalDue": 25500,
            "totalPaid": 0,
            "balance": 25500,
            "status": "Pending"
        },
        "siblings": [
            "STU-2026-052",
            "STU-2026-325"
        ]
    },
    {
        "id": "STU-2026-327",
        "sqlId": "414",
        "admissionNo": "643",
        "rollNo": "193",
        "name": "TINKU KUMAR",
        "dob": "2013-12-17",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "III",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "BHOORE SINGH",
            "motherName": "PREMVATI DEVI",
            "fatherMobile": "+91 9720166370",
            "address": "UNCHA GAON BANGAR"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 86,
            "percentage": 97.7
        },
        "feeSummary": {
            "totalDue": 27000,
            "totalPaid": 0,
            "balance": 27000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-328",
        "sqlId": "415",
        "admissionNo": "644",
        "rollNo": "220",
        "name": "PRASHANT BAGHEL",
        "dob": "2018-03-02",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "II",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 87,
            "percentage": 98.9
        },
        "feeSummary": {
            "totalDue": 28500,
            "totalPaid": 0,
            "balance": 28500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-329",
        "sqlId": "417",
        "admissionNo": "647",
        "rollNo": "188",
        "name": "RASHMI",
        "dob": "2016-08-22",
        "gender": "female",
        "bloodGroup": "O+",
        "class": "III",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "MUKESH KUMAR",
            "motherName": "SHEELA DEVI",
            "fatherMobile": "+91 9354184290",
            "address": "GANESHPUR GOVINDPUR"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 88,
            "percentage": 100.0
        },
        "feeSummary": {
            "totalDue": 18000,
            "totalPaid": 0,
            "balance": 18000,
            "status": "Pending"
        },
        "siblings": [
            "STU-2026-330"
        ]
    },
    {
        "id": "STU-2026-330",
        "sqlId": "418",
        "admissionNo": "648",
        "rollNo": "0",
        "name": "BHOOMI",
        "dob": "2019-01-05",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "UKG",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "MUKESH KUMAR",
            "motherName": "SHEELA DEVI",
            "fatherMobile": "+91 9354184290",
            "address": "GANESHPUR GOVINDPUR"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 82,
            "percentage": 93.2
        },
        "feeSummary": {
            "totalDue": 19500,
            "totalPaid": 0,
            "balance": 19500,
            "status": "Pending"
        },
        "siblings": [
            "STU-2026-329"
        ]
    },
    {
        "id": "STU-2026-331",
        "sqlId": "419",
        "admissionNo": "649",
        "rollNo": "0",
        "name": "YASH",
        "dob": "2020-02-14",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "UKG",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "MONU",
            "motherName": "PUSHPA",
            "fatherMobile": "+91 8475858618",
            "address": "JARGWAN"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 83,
            "percentage": 94.3
        },
        "feeSummary": {
            "totalDue": 21000,
            "totalPaid": 0,
            "balance": 21000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-332",
        "sqlId": "420",
        "admissionNo": "650",
        "rollNo": "0",
        "name": "GUNGUN",
        "dob": "2011-06-07",
        "gender": "female",
        "bloodGroup": "O+",
        "class": "X",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "SATISH CHANDRA",
            "motherName": "ASHA",
            "fatherMobile": "+91 6395168401",
            "address": "KALIYANPUR BHAGIRATHPUR"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 84,
            "percentage": 95.5
        },
        "feeSummary": {
            "totalDue": 22500,
            "totalPaid": 0,
            "balance": 22500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-333",
        "sqlId": "421",
        "admissionNo": "651",
        "rollNo": "0",
        "name": "KUNAL YADAV",
        "dob": "2017-12-10",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "I",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "KAPTAN SINGH",
            "motherName": "SHANTI DEVI",
            "fatherMobile": "+91 7409658983",
            "address": "UNCHA GAON BANGAR"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 85,
            "percentage": 96.6
        },
        "feeSummary": {
            "totalDue": 24000,
            "totalPaid": 0,
            "balance": 24000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-334",
        "sqlId": "422",
        "admissionNo": "652",
        "rollNo": "144",
        "name": "HIMANSHU KUMAR",
        "dob": "2013-01-01",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "IV",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "NATTHU SINGH",
            "motherName": "SARSWATI DEVI",
            "fatherMobile": "+91 9761258549",
            "address": "GOKULPUR KHADAR"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 86,
            "percentage": 97.7
        },
        "feeSummary": {
            "totalDue": 25500,
            "totalPaid": 0,
            "balance": 25500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-335",
        "sqlId": "423",
        "admissionNo": "653",
        "rollNo": "1",
        "name": "DIPANSHU",
        "dob": "2012-06-12",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "IX",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 87,
            "percentage": 98.9
        },
        "feeSummary": {
            "totalDue": 27000,
            "totalPaid": 0,
            "balance": 27000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-336",
        "sqlId": "424",
        "admissionNo": "654",
        "rollNo": "225",
        "name": "SANDHYA",
        "dob": "2014-12-07",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "II",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "SANJEEV KUMAR",
            "motherName": "GEETA DEVI",
            "fatherMobile": "+91 7310802948",
            "address": "UNCHA GAON BANGAR"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 88,
            "percentage": 100.0
        },
        "feeSummary": {
            "totalDue": 28500,
            "totalPaid": 0,
            "balance": 28500,
            "status": "Pending"
        },
        "siblings": [
            "STU-2026-312"
        ]
    },
    {
        "id": "STU-2026-337",
        "sqlId": "426",
        "admissionNo": "657",
        "rollNo": "0",
        "name": "PARV RAGHAV",
        "dob": "2021-07-20",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "UKG",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 82,
            "percentage": 93.2
        },
        "feeSummary": {
            "totalDue": 18000,
            "totalPaid": 0,
            "balance": 18000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-338",
        "sqlId": "427",
        "admissionNo": "659",
        "rollNo": "0",
        "name": "DEEKSHA YADAV",
        "dob": "0001-01-01",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "I",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 83,
            "percentage": 94.3
        },
        "feeSummary": {
            "totalDue": 19500,
            "totalPaid": 0,
            "balance": 19500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-339",
        "sqlId": "428",
        "admissionNo": "661",
        "rollNo": "249",
        "name": "MANIK BISWAS",
        "dob": "2017-09-19",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "II",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "DILIP KUMAR BISWAS",
            "motherName": "SHUKLA BISWAS",
            "fatherMobile": "+91 97194 76606",
            "address": "RAMGHAT BANGAR DEBAI [BSR]"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 84,
            "percentage": 95.5
        },
        "feeSummary": {
            "totalDue": 21000,
            "totalPaid": 0,
            "balance": 21000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-340",
        "sqlId": "429",
        "admissionNo": "663",
        "rollNo": "0",
        "name": "DOLLY RAJPUT",
        "dob": "-0001-11-30",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "NURSERY",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "VIJENDRA KUMAR",
            "motherName": "VIMLESH DEVI",
            "fatherMobile": "+91 97194 76606",
            "address": "NAGLA KOTHI JARGWAN BULANDSHAHR"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 85,
            "percentage": 96.6
        },
        "feeSummary": {
            "totalDue": 22500,
            "totalPaid": 0,
            "balance": 22500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-341",
        "sqlId": "430",
        "admissionNo": "664",
        "rollNo": "0",
        "name": "YUVRAJ KUMAR LODHI",
        "dob": "-0001-11-30",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "LKG",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "RAKESH KUMAR",
            "motherName": "NEERU VERMA",
            "fatherMobile": "+91 97194 76606",
            "address": "MUHAMMADPUR BADHERA"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 86,
            "percentage": 97.7
        },
        "feeSummary": {
            "totalDue": 24000,
            "totalPaid": 0,
            "balance": 24000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-342",
        "sqlId": "431",
        "admissionNo": "665",
        "rollNo": "0",
        "name": "KUMARI PRAGATI",
        "dob": "2021-03-10",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "LKG",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "ATUL KUMAR",
            "motherName": "KANCHAN DEVI",
            "fatherMobile": "+91 9675938712",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 87,
            "percentage": 98.9
        },
        "feeSummary": {
            "totalDue": 25500,
            "totalPaid": 0,
            "balance": 25500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-343",
        "sqlId": "432",
        "admissionNo": "666",
        "rollNo": "0",
        "name": "TANISHKA",
        "dob": "2022-04-18",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "LKG",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "DEV DATT",
            "motherName": "PUSHPA",
            "fatherMobile": "+91 7817831909",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 88,
            "percentage": 100.0
        },
        "feeSummary": {
            "totalDue": 27000,
            "totalPaid": 0,
            "balance": 27000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-344",
        "sqlId": "435",
        "admissionNo": "669",
        "rollNo": "0",
        "name": "SARTHAK RAGHAV",
        "dob": "2022-07-28",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "LKG",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "ANUJ RAGHAV",
            "motherName": "SHWETA RAGHAV",
            "fatherMobile": "+91 9037412093",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 82,
            "percentage": 93.2
        },
        "feeSummary": {
            "totalDue": 28500,
            "totalPaid": 0,
            "balance": 28500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-345",
        "sqlId": "436",
        "admissionNo": "670",
        "rollNo": "0",
        "name": "TANU",
        "dob": "-0001-11-30",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "LKG",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "SANJAY KUMAR",
            "motherName": "SEEMA",
            "fatherMobile": "+91 6504505705",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 83,
            "percentage": 94.3
        },
        "feeSummary": {
            "totalDue": 18000,
            "totalPaid": 0,
            "balance": 18000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-346",
        "sqlId": "437",
        "admissionNo": "671",
        "rollNo": "0",
        "name": "KANAK",
        "dob": "2020-08-02",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "LKG",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "MADHAV SINGH",
            "motherName": "PREMVATI",
            "fatherMobile": "+91 8882764231",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 84,
            "percentage": 95.5
        },
        "feeSummary": {
            "totalDue": 19500,
            "totalPaid": 0,
            "balance": 19500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-347",
        "sqlId": "438",
        "admissionNo": "672",
        "rollNo": "0",
        "name": "NIDHI",
        "dob": "2019-05-26",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "LKG",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "MAHESHPAL SINGH",
            "motherName": "NEERAJ DEVI",
            "fatherMobile": "+91 97194 76606",
            "address": "GANGAGARH"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 85,
            "percentage": 96.6
        },
        "feeSummary": {
            "totalDue": 21000,
            "totalPaid": 0,
            "balance": 21000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-348",
        "sqlId": "440",
        "admissionNo": "674",
        "rollNo": "210",
        "name": "KANISHKA",
        "dob": "2018-09-06",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "II",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "GANGAPRASAD",
            "motherName": "DURGESH DEVI",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 86,
            "percentage": 97.7
        },
        "feeSummary": {
            "totalDue": 22500,
            "totalPaid": 0,
            "balance": 22500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-349",
        "sqlId": "441",
        "admissionNo": "675",
        "rollNo": "0",
        "name": "RADHIKA",
        "dob": "2018-11-10",
        "gender": "Female",
        "bloodGroup": "O+",
        "class": "II",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "AJAY KUMAR",
            "motherName": "SARVESH DEVI",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 87,
            "percentage": 98.9
        },
        "feeSummary": {
            "totalDue": 24000,
            "totalPaid": 0,
            "balance": 24000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-350",
        "sqlId": "442",
        "admissionNo": "676",
        "rollNo": "0",
        "name": "MAYANK KUMAR",
        "dob": "2019-10-25",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "LKG",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "PRAVEEN KUMAR",
            "motherName": "ARTI DEVI",
            "fatherMobile": "+91 7618543732",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 88,
            "percentage": 100.0
        },
        "feeSummary": {
            "totalDue": 25500,
            "totalPaid": 0,
            "balance": 25500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-351",
        "sqlId": "443",
        "admissionNo": "678",
        "rollNo": "0",
        "name": "LAKSHYA RAJPUT",
        "dob": "-0001-11-30",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "UKG",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "JITENDRA KUMAR",
            "motherName": "SHALINI KUMARI",
            "fatherMobile": "+91 9520103310",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 82,
            "percentage": 93.2
        },
        "feeSummary": {
            "totalDue": 27000,
            "totalPaid": 0,
            "balance": 27000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-352",
        "sqlId": "444",
        "admissionNo": "679",
        "rollNo": "0",
        "name": "ARCHANA",
        "dob": "2020-10-10",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "LKG",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "KIRANPAL",
            "motherName": "MEENA DEVI",
            "fatherMobile": "+91 9456675112",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 83,
            "percentage": 94.3
        },
        "feeSummary": {
            "totalDue": 28500,
            "totalPaid": 0,
            "balance": 28500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-353",
        "sqlId": "445",
        "admissionNo": "680",
        "rollNo": "0",
        "name": "HIMANSHU",
        "dob": "2020-07-20",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "LKG",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "DEVENDRA KUMAR",
            "motherName": "URMILA",
            "fatherMobile": "+91 9675311665",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 84,
            "percentage": 95.5
        },
        "feeSummary": {
            "totalDue": 18000,
            "totalPaid": 0,
            "balance": 18000,
            "status": "Pending"
        },
        "siblings": [
            "STU-2026-354"
        ]
    },
    {
        "id": "STU-2026-354",
        "sqlId": "446",
        "admissionNo": "681",
        "rollNo": "0",
        "name": "YASHU KUMAR",
        "dob": "2021-08-17",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "LKG",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "DEVENDRA KUMAR",
            "motherName": "URMILA",
            "fatherMobile": "+91 9675311665",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 85,
            "percentage": 96.6
        },
        "feeSummary": {
            "totalDue": 19500,
            "totalPaid": 0,
            "balance": 19500,
            "status": "Pending"
        },
        "siblings": [
            "STU-2026-353"
        ]
    },
    {
        "id": "STU-2026-355",
        "sqlId": "447",
        "admissionNo": "682",
        "rollNo": "192",
        "name": "YASHIKA",
        "dob": "2018-05-07",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "II",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "MAHESHPAL",
            "motherName": "NEERAJ DEVI",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 86,
            "percentage": 97.7
        },
        "feeSummary": {
            "totalDue": 21000,
            "totalPaid": 0,
            "balance": 21000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-356",
        "sqlId": "449",
        "admissionNo": "684",
        "rollNo": "0",
        "name": "ASHISH KUMAR RAJPUT",
        "dob": "2022-08-15",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "NURSERY",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "GOURI SHANKAR",
            "motherName": "SHASHI",
            "fatherMobile": "+91 8006516436",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 87,
            "percentage": 98.9
        },
        "feeSummary": {
            "totalDue": 22500,
            "totalPaid": 0,
            "balance": 22500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-357",
        "sqlId": "450",
        "admissionNo": "685",
        "rollNo": "0",
        "name": "MAHI",
        "dob": "2018-05-30",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "II",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "ANAD KUMAR",
            "motherName": "REKHA DEVI",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 88,
            "percentage": 100.0
        },
        "feeSummary": {
            "totalDue": 24000,
            "totalPaid": 0,
            "balance": 24000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-358",
        "sqlId": "451",
        "admissionNo": "686",
        "rollNo": "0",
        "name": "SANI KUMAR",
        "dob": "2019-07-27",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "LKG",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "ANAD KUMAR",
            "motherName": "REKHA DEVI",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 82,
            "percentage": 93.2
        },
        "feeSummary": {
            "totalDue": 25500,
            "totalPaid": 0,
            "balance": 25500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-359",
        "sqlId": "453",
        "admissionNo": "689",
        "rollNo": "0",
        "name": "TANISHKA YADAV",
        "dob": "2020-10-26",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "NURSERY",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "SANDEEP KUMAR",
            "motherName": "NALINI YADAV",
            "fatherMobile": "+91 9808678959",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 83,
            "percentage": 94.3
        },
        "feeSummary": {
            "totalDue": 27000,
            "totalPaid": 0,
            "balance": 27000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-360",
        "sqlId": "454",
        "admissionNo": "690",
        "rollNo": "0",
        "name": "YUVANSH",
        "dob": "2022-04-02",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "NURSERY",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "BRAJESH",
            "motherName": "SANDHYA KUMARI",
            "fatherMobile": "+91 8954931950",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 84,
            "percentage": 95.5
        },
        "feeSummary": {
            "totalDue": 28500,
            "totalPaid": 0,
            "balance": 28500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-361",
        "sqlId": "455",
        "admissionNo": "691",
        "rollNo": "0",
        "name": "KAVISH",
        "dob": "2023-03-01",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "NURSERY",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "SUDHEER",
            "motherName": "KHUSHBOO",
            "fatherMobile": "+91 8859478326",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 85,
            "percentage": 96.6
        },
        "feeSummary": {
            "totalDue": 18000,
            "totalPaid": 0,
            "balance": 18000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-362",
        "sqlId": "456",
        "admissionNo": "692",
        "rollNo": "150",
        "name": "NIDHI",
        "dob": "2017-02-04",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "IV",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "DHAMENDRA KUMAR",
            "motherName": "SUMIT",
            "fatherMobile": "+91 7668306277",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 86,
            "percentage": 97.7
        },
        "feeSummary": {
            "totalDue": 19500,
            "totalPaid": 0,
            "balance": 19500,
            "status": "Pending"
        },
        "siblings": [
            "STU-2026-363"
        ]
    },
    {
        "id": "STU-2026-363",
        "sqlId": "457",
        "admissionNo": "693",
        "rollNo": "0",
        "name": "GOVIND",
        "dob": "2019-12-04",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "I",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "DHAMENDRA KUMAR",
            "motherName": "SUMIT",
            "fatherMobile": "+91 7668306277",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 87,
            "percentage": 98.9
        },
        "feeSummary": {
            "totalDue": 21000,
            "totalPaid": 0,
            "balance": 21000,
            "status": "Pending"
        },
        "siblings": [
            "STU-2026-362"
        ]
    },
    {
        "id": "STU-2026-364",
        "sqlId": "459",
        "admissionNo": "695",
        "rollNo": "0",
        "name": "MUNISH",
        "dob": "2021-07-13",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "NURSERY",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "LEEKESH",
            "motherName": "SEEMA",
            "fatherMobile": "+91 7668083141",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 88,
            "percentage": 100.0
        },
        "feeSummary": {
            "totalDue": 22500,
            "totalPaid": 0,
            "balance": 22500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-365",
        "sqlId": "460",
        "admissionNo": "696",
        "rollNo": "0",
        "name": "UMA",
        "dob": "2020-11-28",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "LKG",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "DINESH KUMAR",
            "motherName": "VEENESH KUMAR",
            "fatherMobile": "+91 9259150523",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 82,
            "percentage": 93.2
        },
        "feeSummary": {
            "totalDue": 24000,
            "totalPaid": 0,
            "balance": 24000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-366",
        "sqlId": "461",
        "admissionNo": "697",
        "rollNo": "0",
        "name": "YASH KUMAR SINGH",
        "dob": "2019-08-03",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "III",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "VINAY KUMAR",
            "motherName": "ANITA DEVI",
            "fatherMobile": "+91 9711269176",
            "address": "MUHAMMADPUR"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 83,
            "percentage": 94.3
        },
        "feeSummary": {
            "totalDue": 25500,
            "totalPaid": 0,
            "balance": 25500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-367",
        "sqlId": "462",
        "admissionNo": "698",
        "rollNo": "0",
        "name": "VAISHNAVI",
        "dob": "-0001-11-30",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "LKG",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "DHARVENDRA KUMAR",
            "motherName": "MADHURI DEVI",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 84,
            "percentage": 95.5
        },
        "feeSummary": {
            "totalDue": 27000,
            "totalPaid": 0,
            "balance": 27000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-368",
        "sqlId": "466",
        "admissionNo": "702",
        "rollNo": "78",
        "name": "DIMPAL",
        "dob": "2013-06-08",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "VI",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "SOMVEER",
            "motherName": "PRABHA DEVI",
            "fatherMobile": "+91 9720408425",
            "address": "RAMGHAT"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 85,
            "percentage": 96.6
        },
        "feeSummary": {
            "totalDue": 28500,
            "totalPaid": 0,
            "balance": 28500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-369",
        "sqlId": "467",
        "admissionNo": "703",
        "rollNo": "0",
        "name": "MAYANK",
        "dob": "2021-03-25",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "NURSERY",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "KOUSHLESH",
            "motherName": "MAMTA DEVI",
            "fatherMobile": "+91 7452883051",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 86,
            "percentage": 97.7
        },
        "feeSummary": {
            "totalDue": 18000,
            "totalPaid": 0,
            "balance": 18000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-370",
        "sqlId": "468",
        "admissionNo": "704",
        "rollNo": "0",
        "name": "GABI KUMAR",
        "dob": "2019-01-08",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "UKG",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "PRADEEP KUMAR",
            "motherName": "POOJA DEVI",
            "fatherMobile": "+91 9536827592",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 87,
            "percentage": 98.9
        },
        "feeSummary": {
            "totalDue": 19500,
            "totalPaid": 0,
            "balance": 19500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-371",
        "sqlId": "469",
        "admissionNo": "705",
        "rollNo": "31",
        "name": "SARTHAK SHARMA",
        "dob": "2013-06-08",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "VIII",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "BABLU SHARMA",
            "motherName": "LATA KUMARI",
            "fatherMobile": "+91 8630259199",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 88,
            "percentage": 100.0
        },
        "feeSummary": {
            "totalDue": 21000,
            "totalPaid": 0,
            "balance": 21000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-372",
        "sqlId": "470",
        "admissionNo": "706",
        "rollNo": "0",
        "name": "ARYAN YADAV",
        "dob": "2022-08-15",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "NURSERY",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "BEERESH KUMAR",
            "motherName": "AARTI",
            "fatherMobile": "+91 9536710970",
            "address": "SILHARI RAMGHAT"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 82,
            "percentage": 93.2
        },
        "feeSummary": {
            "totalDue": 22500,
            "totalPaid": 0,
            "balance": 22500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-373",
        "sqlId": "472",
        "admissionNo": "708",
        "rollNo": "0",
        "name": "GUNIKA VASHISHTHA",
        "dob": "2021-06-01",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "LKG",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "GAURAV SHARMA",
            "motherName": "PUNAM SHARMA",
            "fatherMobile": "+91 7579393895",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 83,
            "percentage": 94.3
        },
        "feeSummary": {
            "totalDue": 24000,
            "totalPaid": 0,
            "balance": 24000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-374",
        "sqlId": "473",
        "admissionNo": "709",
        "rollNo": "0",
        "name": "MANYA VASHISHTH",
        "dob": "2021-02-01",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "LKG",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "AKASH SHARMA",
            "motherName": "KAJAL KUMARI",
            "fatherMobile": "+91 9368751908",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 84,
            "percentage": 95.5
        },
        "feeSummary": {
            "totalDue": 25500,
            "totalPaid": 0,
            "balance": 25500,
            "status": "Pending"
        },
        "siblings": [
            "STU-2026-517"
        ]
    },
    {
        "id": "STU-2026-375",
        "sqlId": "474",
        "admissionNo": "710",
        "rollNo": "0",
        "name": "KAVIYA",
        "dob": "2018-02-25",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "UKG",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "HARIPRAKASH",
            "motherName": "GIRJESH DEVI",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 85,
            "percentage": 96.6
        },
        "feeSummary": {
            "totalDue": 27000,
            "totalPaid": 0,
            "balance": 27000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-376",
        "sqlId": "475",
        "admissionNo": "711",
        "rollNo": "198",
        "name": "AILISH",
        "dob": "2017-06-01",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "II",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "JITENDRA KUMAR",
            "motherName": "PRITI DEVI",
            "fatherMobile": "+91 9394135881",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 86,
            "percentage": 97.7
        },
        "feeSummary": {
            "totalDue": 28500,
            "totalPaid": 0,
            "balance": 28500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-377",
        "sqlId": "476",
        "admissionNo": "712",
        "rollNo": "0",
        "name": "AYANSH",
        "dob": "2019-09-10",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "UKG",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "JITENDRA KUMAR",
            "motherName": "PRITI DEVI",
            "fatherMobile": "+91 9354135881",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 87,
            "percentage": 98.9
        },
        "feeSummary": {
            "totalDue": 18000,
            "totalPaid": 0,
            "balance": 18000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-378",
        "sqlId": "477",
        "admissionNo": "713",
        "rollNo": "0",
        "name": "ANSH PALI",
        "dob": "2021-02-12",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "NURSERY",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "DHARAMVEER",
            "motherName": "RENU",
            "fatherMobile": "+91 8630282310",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 88,
            "percentage": 100.0
        },
        "feeSummary": {
            "totalDue": 19500,
            "totalPaid": 0,
            "balance": 19500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-379",
        "sqlId": "478",
        "admissionNo": "714",
        "rollNo": "0",
        "name": "MADHAV CHOUDHARY",
        "dob": "2021-05-19",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "LKG",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "AMIT KUMAR",
            "motherName": "RACHANA CHOUDHARY",
            "fatherMobile": "+91 9720731803",
            "address": "JARGWAN"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 82,
            "percentage": 93.2
        },
        "feeSummary": {
            "totalDue": 21000,
            "totalPaid": 0,
            "balance": 21000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-380",
        "sqlId": "479",
        "admissionNo": "716",
        "rollNo": "184",
        "name": "MAYANK KUMAR",
        "dob": "2014-01-09",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "III",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "MAHENDRA SINGH",
            "motherName": "SUMAN DEVI",
            "fatherMobile": "+91 9720553497",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 83,
            "percentage": 94.3
        },
        "feeSummary": {
            "totalDue": 22500,
            "totalPaid": 0,
            "balance": 22500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-381",
        "sqlId": "480",
        "admissionNo": "717",
        "rollNo": "0",
        "name": "YAMINI",
        "dob": "2010-01-01",
        "gender": "female",
        "bloodGroup": "O+",
        "class": "X",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 84,
            "percentage": 95.5
        },
        "feeSummary": {
            "totalDue": 24000,
            "totalPaid": 0,
            "balance": 24000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-382",
        "sqlId": "481",
        "admissionNo": "718",
        "rollNo": "200",
        "name": "ANUSHKA",
        "dob": "2019-02-14",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "II",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "RAHUL KUMAR",
            "motherName": "MAHESHWARI",
            "fatherMobile": "+91 6395089415",
            "address": "DADHAR ALUPURA ATRAULI ALIGARH"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 85,
            "percentage": 96.6
        },
        "feeSummary": {
            "totalDue": 25500,
            "totalPaid": 0,
            "balance": 25500,
            "status": "Pending"
        },
        "siblings": [
            "STU-2026-383",
            "STU-2026-384"
        ]
    },
    {
        "id": "STU-2026-383",
        "sqlId": "482",
        "admissionNo": "719",
        "rollNo": "0",
        "name": "MOHIT KUMAR",
        "dob": "-0001-11-30",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "UKG",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "RAHUL KUMAR",
            "motherName": "MAHESHWARI",
            "fatherMobile": "+91 6395089415",
            "address": "DADHAR ALUPURA ATRAULI ALIGARH"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 86,
            "percentage": 97.7
        },
        "feeSummary": {
            "totalDue": 27000,
            "totalPaid": 0,
            "balance": 27000,
            "status": "Pending"
        },
        "siblings": [
            "STU-2026-382",
            "STU-2026-384"
        ]
    },
    {
        "id": "STU-2026-384",
        "sqlId": "483",
        "admissionNo": "720",
        "rollNo": "0",
        "name": "INDU",
        "dob": "-0001-11-30",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "LKG",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "RAHUL KUMAR",
            "motherName": "MAHESHWARI",
            "fatherMobile": "+91 6395089415",
            "address": "DADHAR ALUPURA ATRAULI ALIGARH"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 87,
            "percentage": 98.9
        },
        "feeSummary": {
            "totalDue": 28500,
            "totalPaid": 0,
            "balance": 28500,
            "status": "Pending"
        },
        "siblings": [
            "STU-2026-382",
            "STU-2026-383"
        ]
    },
    {
        "id": "STU-2026-385",
        "sqlId": "484",
        "admissionNo": "721",
        "rollNo": "0",
        "name": "KAUSHAL",
        "dob": "2025-04-28",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "NURSERY",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "YOGENDRA SHARMA",
            "motherName": "SEEMA",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 88,
            "percentage": 100.0
        },
        "feeSummary": {
            "totalDue": 18000,
            "totalPaid": 0,
            "balance": 18000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-386",
        "sqlId": "485",
        "admissionNo": "722",
        "rollNo": "93",
        "name": "RAKHI KUMARI",
        "dob": "2014-02-01",
        "gender": "female",
        "bloodGroup": "O+",
        "class": "VI",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "ADESH KUMAR",
            "motherName": "MEENA",
            "fatherMobile": "+91 8859391978",
            "address": "SILHARI RAMGHAT"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 82,
            "percentage": 93.2
        },
        "feeSummary": {
            "totalDue": 19500,
            "totalPaid": 0,
            "balance": 19500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-387",
        "sqlId": "486",
        "admissionNo": "723",
        "rollNo": "0",
        "name": "ARCHIT KUMAR",
        "dob": "2019-12-16",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "I",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "PRAMOD KUMAR",
            "motherName": "DEEPIKA",
            "fatherMobile": "+91 9627806714",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 83,
            "percentage": 94.3
        },
        "feeSummary": {
            "totalDue": 21000,
            "totalPaid": 0,
            "balance": 21000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-388",
        "sqlId": "488",
        "admissionNo": "727",
        "rollNo": "0",
        "name": "BHAVYA UPADHYAY",
        "dob": "2020-11-01",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "UKG",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "DIPANSHU UPADHAYA",
            "motherName": "GEETANJALI",
            "fatherMobile": "+91 9027689245",
            "address": "Uncha Gaon Bangar Ramghat"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 84,
            "percentage": 95.5
        },
        "feeSummary": {
            "totalDue": 22500,
            "totalPaid": 0,
            "balance": 22500,
            "status": "Pending"
        },
        "siblings": [
            "STU-2026-389"
        ]
    },
    {
        "id": "STU-2026-389",
        "sqlId": "489",
        "admissionNo": "728",
        "rollNo": "0",
        "name": "ARAV UPADHYAY",
        "dob": "2022-09-15",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "NURSERY",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "DIPANSHU UPADHAYA",
            "motherName": "GEETANJALI",
            "fatherMobile": "+91 9027689245",
            "address": "Uncha Gaon Bangar Ramghat"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 85,
            "percentage": 96.6
        },
        "feeSummary": {
            "totalDue": 24000,
            "totalPaid": 0,
            "balance": 24000,
            "status": "Pending"
        },
        "siblings": [
            "STU-2026-388"
        ]
    },
    {
        "id": "STU-2026-390",
        "sqlId": "493",
        "admissionNo": "732",
        "rollNo": "76",
        "name": "DEEPAK",
        "dob": "-0001-11-30",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "VI",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "HARGYAN SINGH",
            "motherName": "KAVITA DEVI",
            "fatherMobile": "+91 97194 76606",
            "address": "Kaliyanpur Khera"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 86,
            "percentage": 97.7
        },
        "feeSummary": {
            "totalDue": 25500,
            "totalPaid": 0,
            "balance": 25500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-391",
        "sqlId": "495",
        "admissionNo": "734",
        "rollNo": "0",
        "name": "DEEPAK",
        "dob": "2017-07-01",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "I",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "MANOJ KUMAR",
            "motherName": "SUMAN DEVI",
            "fatherMobile": "+91 9720917852",
            "address": "Kaliyanpur bhagirathpur atraoli aligarh"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 87,
            "percentage": 98.9
        },
        "feeSummary": {
            "totalDue": 27000,
            "totalPaid": 0,
            "balance": 27000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-392",
        "sqlId": "496",
        "admissionNo": "DM735",
        "rollNo": "0",
        "name": "DEEKSHITA GAUTAM",
        "dob": "2022-02-05",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "NURSERY",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "SURESH BABU",
            "motherName": "JYOTI",
            "fatherMobile": "+91 7302344463",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 88,
            "percentage": 100.0
        },
        "feeSummary": {
            "totalDue": 28500,
            "totalPaid": 0,
            "balance": 28500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-393",
        "sqlId": "497",
        "admissionNo": "736",
        "rollNo": "126",
        "name": "ROSHNI SHARMA",
        "dob": "2015-08-02",
        "gender": "female",
        "bloodGroup": "O+",
        "class": "V",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "NITIN SHARMA",
            "motherName": "RANI SHARMA",
            "fatherMobile": "+91 7820097256",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 82,
            "percentage": 93.2
        },
        "feeSummary": {
            "totalDue": 18000,
            "totalPaid": 0,
            "balance": 18000,
            "status": "Pending"
        },
        "siblings": [
            "STU-2026-394"
        ]
    },
    {
        "id": "STU-2026-394",
        "sqlId": "498",
        "admissionNo": "737",
        "rollNo": "126",
        "name": "MAHI SHARMA",
        "dob": "2018-06-20",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "III",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "NITIN SHARMA",
            "motherName": "RANI SHARMA",
            "fatherMobile": "+91 7820097256",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 83,
            "percentage": 94.3
        },
        "feeSummary": {
            "totalDue": 19500,
            "totalPaid": 0,
            "balance": 19500,
            "status": "Pending"
        },
        "siblings": [
            "STU-2026-393"
        ]
    },
    {
        "id": "STU-2026-395",
        "sqlId": "499",
        "admissionNo": "738",
        "rollNo": "0",
        "name": "UTKARSH",
        "dob": "2021-03-29",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "UKG",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "SHYAM SUNDAR",
            "motherName": "BAVEETA",
            "fatherMobile": "+91 7668457469",
            "address": "RAMGHAT"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 84,
            "percentage": 95.5
        },
        "feeSummary": {
            "totalDue": 21000,
            "totalPaid": 0,
            "balance": 21000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-396",
        "sqlId": "503",
        "admissionNo": "743",
        "rollNo": "27",
        "name": "RIYANSHI GAUTAM",
        "dob": "2016-10-18",
        "gender": "female",
        "bloodGroup": "O+",
        "class": "IV",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "ANSHUL KUMAR",
            "motherName": "POOJA DEVI",
            "fatherMobile": "+91 97194 76606",
            "address": "SILHARI RAMGHAT"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 85,
            "percentage": 96.6
        },
        "feeSummary": {
            "totalDue": 22500,
            "totalPaid": 0,
            "balance": 22500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-397",
        "sqlId": "504",
        "admissionNo": "744",
        "rollNo": "0",
        "name": "THOMAS",
        "dob": "2020-05-17",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "UKG",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "ANSHUL KUMAR",
            "motherName": "POOJA DEVI",
            "fatherMobile": "+91 97194 76606",
            "address": "SILHARI RAMGHAT"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 86,
            "percentage": 97.7
        },
        "feeSummary": {
            "totalDue": 24000,
            "totalPaid": 0,
            "balance": 24000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-398",
        "sqlId": "507",
        "admissionNo": "747",
        "rollNo": "0",
        "name": "DIVYANSHI",
        "dob": "2020-11-24",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "LKG",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "RAM NARESH SINGH",
            "motherName": "PRITI KUMARI",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 87,
            "percentage": 98.9
        },
        "feeSummary": {
            "totalDue": 25500,
            "totalPaid": 0,
            "balance": 25500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-399",
        "sqlId": "509",
        "admissionNo": "749",
        "rollNo": "0",
        "name": "MAYANK KUMAR",
        "dob": "-0001-11-30",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "NURSERY",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "RAM NARESH SINGH",
            "motherName": "PRITI KUMARI",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 88,
            "percentage": 100.0
        },
        "feeSummary": {
            "totalDue": 27000,
            "totalPaid": 0,
            "balance": 27000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-400",
        "sqlId": "510",
        "admissionNo": "750",
        "rollNo": "0",
        "name": "BHUMI",
        "dob": "2019-06-10",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "I",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "VINOD KUMAR",
            "motherName": "VIMLESH KUMAR",
            "fatherMobile": "+91 9759708431",
            "address": "MUHAMMADPUR"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 82,
            "percentage": 93.2
        },
        "feeSummary": {
            "totalDue": 28500,
            "totalPaid": 0,
            "balance": 28500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-401",
        "sqlId": "511",
        "admissionNo": "751",
        "rollNo": "0",
        "name": "YOVANSH",
        "dob": "2025-08-09",
        "gender": "Male",
        "bloodGroup": "O+",
        "class": "NURSERY",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "HARIOM KUMAR",
            "motherName": "KIRTI KUMARI",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 83,
            "percentage": 94.3
        },
        "feeSummary": {
            "totalDue": 18000,
            "totalPaid": 0,
            "balance": 18000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-402",
        "sqlId": "512",
        "admissionNo": "752",
        "rollNo": "0",
        "name": "PRIYAL",
        "dob": "2020-05-07",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "LKG",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "ANIL KUMAR",
            "motherName": "BEENESH",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 84,
            "percentage": 95.5
        },
        "feeSummary": {
            "totalDue": 19500,
            "totalPaid": 0,
            "balance": 19500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-403",
        "sqlId": "513",
        "admissionNo": "753",
        "rollNo": "0",
        "name": "SOURYA",
        "dob": "-0001-11-30",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "LKG",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "RINESH",
            "motherName": "SUMAN",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 85,
            "percentage": 96.6
        },
        "feeSummary": {
            "totalDue": 21000,
            "totalPaid": 0,
            "balance": 21000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-404",
        "sqlId": "514",
        "admissionNo": "754",
        "rollNo": "0",
        "name": "MEENAKSHI",
        "dob": "-0001-11-30",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "LKG",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "NETRAPAL SINGH",
            "motherName": "RAKHI",
            "fatherMobile": "+91 7248033715",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 86,
            "percentage": 97.7
        },
        "feeSummary": {
            "totalDue": 22500,
            "totalPaid": 0,
            "balance": 22500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-405",
        "sqlId": "515",
        "admissionNo": "755",
        "rollNo": "0",
        "name": "MADHAV YADAV",
        "dob": "2019-10-24",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "UKG",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "VIJENDRA SINGH",
            "motherName": "ANJALI",
            "fatherMobile": "+91 7417417419",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 87,
            "percentage": 98.9
        },
        "feeSummary": {
            "totalDue": 24000,
            "totalPaid": 0,
            "balance": 24000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-406",
        "sqlId": "516",
        "admissionNo": "756",
        "rollNo": "0",
        "name": "KANHAIYA",
        "dob": "-0001-11-30",
        "gender": "Male",
        "bloodGroup": "O+",
        "class": "NURSERY",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "UMESH YADAV",
            "motherName": "RUVI",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 88,
            "percentage": 100.0
        },
        "feeSummary": {
            "totalDue": 25500,
            "totalPaid": 0,
            "balance": 25500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-407",
        "sqlId": "517",
        "admissionNo": "757",
        "rollNo": "0",
        "name": "MAYANK SHARMA",
        "dob": "2022-12-23",
        "gender": "Male",
        "bloodGroup": "O+",
        "class": "NURSERY",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "NITIN KUMAR",
            "motherName": "RANI DEVI",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 82,
            "percentage": 93.2
        },
        "feeSummary": {
            "totalDue": 27000,
            "totalPaid": 0,
            "balance": 27000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-408",
        "sqlId": "518",
        "admissionNo": "759",
        "rollNo": "0",
        "name": "SHIVAM KUMAR",
        "dob": "2009-01-01",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "X",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "VINOD KUMAR",
            "motherName": "PRAVESH DEVI",
            "fatherMobile": "+91 790679947",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 83,
            "percentage": 94.3
        },
        "feeSummary": {
            "totalDue": 28500,
            "totalPaid": 0,
            "balance": 28500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-409",
        "sqlId": "519",
        "admissionNo": "760",
        "rollNo": "0",
        "name": "RISHAV",
        "dob": "2018-05-19",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "III",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "PRATAP SINGH",
            "motherName": "RAJESHWARI DEVI",
            "fatherMobile": "+91 6395659402",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 84,
            "percentage": 95.5
        },
        "feeSummary": {
            "totalDue": 18000,
            "totalPaid": 0,
            "balance": 18000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-410",
        "sqlId": "520",
        "admissionNo": "761",
        "rollNo": "0",
        "name": "JATIN KUMAR",
        "dob": "2013-08-29",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "III",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "YOGENDRA KUMAR",
            "motherName": "SUMITRA DEVI",
            "fatherMobile": "+91 7300991046",
            "address": "KALIYANPUR BHAGIRATHPUR"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 85,
            "percentage": 96.6
        },
        "feeSummary": {
            "totalDue": 19500,
            "totalPaid": 0,
            "balance": 19500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-411",
        "sqlId": "521",
        "admissionNo": "762",
        "rollNo": "177",
        "name": "JAYANT",
        "dob": "2013-08-29",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "II",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "YOGENDRA",
            "motherName": "SUMITRA DEVI",
            "fatherMobile": "+91 9910464431",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 86,
            "percentage": 97.7
        },
        "feeSummary": {
            "totalDue": 21000,
            "totalPaid": 0,
            "balance": 21000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-412",
        "sqlId": "522",
        "admissionNo": "763",
        "rollNo": "0",
        "name": "MAMTESH",
        "dob": "-0001-11-30",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "LKG",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "KULDEEP",
            "motherName": "RENU DEVI",
            "fatherMobile": "+91 9675318376",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 87,
            "percentage": 98.9
        },
        "feeSummary": {
            "totalDue": 22500,
            "totalPaid": 0,
            "balance": 22500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-413",
        "sqlId": "523",
        "admissionNo": "764",
        "rollNo": "0",
        "name": "SOMESH",
        "dob": "-0001-11-30",
        "gender": "Male",
        "bloodGroup": "O+",
        "class": "NURSERY",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "KULDEEP YADAV",
            "motherName": "RENU DEVI",
            "fatherMobile": "+91 7675318376",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 88,
            "percentage": 100.0
        },
        "feeSummary": {
            "totalDue": 24000,
            "totalPaid": 0,
            "balance": 24000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-414",
        "sqlId": "524",
        "admissionNo": "765",
        "rollNo": "0",
        "name": "GAURAV KUMAR",
        "dob": "2011-08-05",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "X",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "VED PRAKASH",
            "motherName": "HEMLATA ARYA",
            "fatherMobile": "+91 7668389167",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 82,
            "percentage": 93.2
        },
        "feeSummary": {
            "totalDue": 25500,
            "totalPaid": 0,
            "balance": 25500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-415",
        "sqlId": "526",
        "admissionNo": "767",
        "rollNo": "0",
        "name": "MANYA",
        "dob": "2022-07-03",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "NURSERY",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "SHIVAM",
            "motherName": "MANSI",
            "fatherMobile": "+91 6398983141",
            "address": "SAME"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 83,
            "percentage": 94.3
        },
        "feeSummary": {
            "totalDue": 27000,
            "totalPaid": 0,
            "balance": 27000,
            "status": "Pending"
        },
        "siblings": [
            "STU-2026-513"
        ]
    },
    {
        "id": "STU-2026-416",
        "sqlId": "529",
        "admissionNo": "770",
        "rollNo": "186",
        "name": "PRASHANT",
        "dob": "-0001-11-30",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "III",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "PREM SINGH",
            "motherName": "GITA DEVI",
            "fatherMobile": "+91 7818858356",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 84,
            "percentage": 95.5
        },
        "feeSummary": {
            "totalDue": 28500,
            "totalPaid": 0,
            "balance": 28500,
            "status": "Pending"
        },
        "siblings": [
            "STU-2026-417"
        ]
    },
    {
        "id": "STU-2026-417",
        "sqlId": "530",
        "admissionNo": "771",
        "rollNo": "0",
        "name": "VIVEK KUMAR",
        "dob": "2018-07-17",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "I",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "PREM SINGH",
            "motherName": "GITA DEVI",
            "fatherMobile": "+91 7818858356",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 85,
            "percentage": 96.6
        },
        "feeSummary": {
            "totalDue": 18000,
            "totalPaid": 0,
            "balance": 18000,
            "status": "Pending"
        },
        "siblings": [
            "STU-2026-416"
        ]
    },
    {
        "id": "STU-2026-418",
        "sqlId": "531",
        "admissionNo": "772",
        "rollNo": "0",
        "name": "DEEPAK LODHI",
        "dob": "-0001-11-30",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "LKG",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "GAJRAJ SINGH",
            "motherName": "PINKI RAJPUT",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 86,
            "percentage": 97.7
        },
        "feeSummary": {
            "totalDue": 19500,
            "totalPaid": 0,
            "balance": 19500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-419",
        "sqlId": "532",
        "admissionNo": "773",
        "rollNo": "0",
        "name": "TARUN KUMAR",
        "dob": "2023-05-06",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "PG",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "AMIT KUMAR",
            "motherName": "KRISHNA",
            "fatherMobile": "+91 2",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 87,
            "percentage": 98.9
        },
        "feeSummary": {
            "totalDue": 21000,
            "totalPaid": 0,
            "balance": 21000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-420",
        "sqlId": "533",
        "admissionNo": "831",
        "rollNo": "63",
        "name": "PRASHANT KUMAR",
        "dob": "1970-01-01",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "VII",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "BHOOP SINGH",
            "motherName": "NEERAJ DEVI",
            "fatherMobile": "+91 8",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 88,
            "percentage": 100.0
        },
        "feeSummary": {
            "totalDue": 22500,
            "totalPaid": 0,
            "balance": 22500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-421",
        "sqlId": "536",
        "admissionNo": "775",
        "rollNo": "0",
        "name": "AYANSH BAGHEL",
        "dob": "2020-08-20",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "NURSERY",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "HARIOM SINGH",
            "motherName": "SAROJ DEVI",
            "fatherMobile": "+91 1",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 82,
            "percentage": 93.2
        },
        "feeSummary": {
            "totalDue": 24000,
            "totalPaid": 0,
            "balance": 24000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-422",
        "sqlId": "537",
        "admissionNo": "776",
        "rollNo": "0",
        "name": "MONIKA",
        "dob": "2021-07-14",
        "gender": "female",
        "bloodGroup": "O+",
        "class": "NURSERY",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "RAMPRAKASH",
            "motherName": "TULSI",
            "fatherMobile": "+91 7703956102",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 83,
            "percentage": 94.3
        },
        "feeSummary": {
            "totalDue": 25500,
            "totalPaid": 0,
            "balance": 25500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-423",
        "sqlId": "539",
        "admissionNo": "777",
        "rollNo": "0",
        "name": "SANDEEP",
        "dob": "2022-03-29",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "LKG",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 84,
            "percentage": 95.5
        },
        "feeSummary": {
            "totalDue": 27000,
            "totalPaid": 0,
            "balance": 27000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-424",
        "sqlId": "540",
        "admissionNo": "778",
        "rollNo": "0",
        "name": "KAMINI",
        "dob": "2021-11-22",
        "gender": "female",
        "bloodGroup": "O+",
        "class": "LKG",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "BABLU",
            "motherName": "DURGESH",
            "fatherMobile": "+91 7",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 85,
            "percentage": 96.6
        },
        "feeSummary": {
            "totalDue": 28500,
            "totalPaid": 0,
            "balance": 28500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-425",
        "sqlId": "541",
        "admissionNo": "835",
        "rollNo": "0",
        "name": "SRISHTI RAJPUT",
        "dob": "2022-11-15",
        "gender": "female",
        "bloodGroup": "O+",
        "class": "NURSERY",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "ROKINSH KUMAR",
            "motherName": "LAKSHMI",
            "fatherMobile": "+91 9520213582",
            "address": "NAGLA KOTHI"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 86,
            "percentage": 97.7
        },
        "feeSummary": {
            "totalDue": 18000,
            "totalPaid": 0,
            "balance": 18000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-426",
        "sqlId": "542",
        "admissionNo": "779",
        "rollNo": "0",
        "name": "UMANG",
        "dob": "2022-08-19",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "NURSERY",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "NARESH KUMAR",
            "motherName": "SEEMA",
            "fatherMobile": "+91 8",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 87,
            "percentage": 98.9
        },
        "feeSummary": {
            "totalDue": 19500,
            "totalPaid": 0,
            "balance": 19500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-427",
        "sqlId": "546",
        "admissionNo": "782",
        "rollNo": "0",
        "name": "SHIV",
        "dob": "2024-01-02",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "PG",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "KULDIP KUMAR",
            "motherName": "TANISHA SHARMA",
            "fatherMobile": "+91 8851021560",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 88,
            "percentage": 100.0
        },
        "feeSummary": {
            "totalDue": 21000,
            "totalPaid": 0,
            "balance": 21000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-428",
        "sqlId": "548",
        "admissionNo": "783",
        "rollNo": "0",
        "name": "PRASHANT YADAV",
        "dob": "2019-04-05",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "NURSERY",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "NARENDRA KUMAR",
            "motherName": "SAROJ",
            "fatherMobile": "+91 8650048902",
            "address": "CHIRAURI"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 82,
            "percentage": 93.2
        },
        "feeSummary": {
            "totalDue": 22500,
            "totalPaid": 0,
            "balance": 22500,
            "status": "Pending"
        },
        "siblings": [
            "STU-2026-429"
        ]
    },
    {
        "id": "STU-2026-429",
        "sqlId": "549",
        "admissionNo": "784",
        "rollNo": "0",
        "name": "PRIYANSHI",
        "dob": "1970-01-01",
        "gender": "female",
        "bloodGroup": "O+",
        "class": "NURSERY",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "NARENDRA KUMAR",
            "motherName": "SAROJ",
            "fatherMobile": "+91 8650048902",
            "address": "CHIRAURI"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 83,
            "percentage": 94.3
        },
        "feeSummary": {
            "totalDue": 24000,
            "totalPaid": 0,
            "balance": 24000,
            "status": "Pending"
        },
        "siblings": [
            "STU-2026-428"
        ]
    },
    {
        "id": "STU-2026-430",
        "sqlId": "550",
        "admissionNo": "838",
        "rollNo": "0",
        "name": "HARSHIT",
        "dob": "2020-11-17",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "UKG",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "SONU",
            "motherName": "RANJANA",
            "fatherMobile": "+91 9",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 84,
            "percentage": 95.5
        },
        "feeSummary": {
            "totalDue": 25500,
            "totalPaid": 0,
            "balance": 25500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-431",
        "sqlId": "552",
        "admissionNo": "839",
        "rollNo": "0",
        "name": "AYUSH",
        "dob": "2021-11-08",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "NURSERY",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "SOMVIR",
            "motherName": "RACHANA DEVI",
            "fatherMobile": "+91 1",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 85,
            "percentage": 96.6
        },
        "feeSummary": {
            "totalDue": 27000,
            "totalPaid": 0,
            "balance": 27000,
            "status": "Pending"
        },
        "siblings": [
            "STU-2026-433"
        ]
    },
    {
        "id": "STU-2026-432",
        "sqlId": "553",
        "admissionNo": "786",
        "rollNo": "0",
        "name": "AYUSH KUMAR",
        "dob": "2018-02-01",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "UKG",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "YASHVARDHAN",
            "motherName": "PREETI",
            "fatherMobile": "+91 1",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 86,
            "percentage": 97.7
        },
        "feeSummary": {
            "totalDue": 28500,
            "totalPaid": 0,
            "balance": 28500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-433",
        "sqlId": "554",
        "admissionNo": "840",
        "rollNo": "0",
        "name": "ABHISHEK",
        "dob": "2020-12-03",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "I",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "SOMVIR",
            "motherName": "RACHANA DEVI",
            "fatherMobile": "+91 1",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 87,
            "percentage": 98.9
        },
        "feeSummary": {
            "totalDue": 18000,
            "totalPaid": 0,
            "balance": 18000,
            "status": "Pending"
        },
        "siblings": [
            "STU-2026-431"
        ]
    },
    {
        "id": "STU-2026-434",
        "sqlId": "555",
        "admissionNo": "787",
        "rollNo": "0",
        "name": "SRISHTI KUMARI",
        "dob": "2023-08-03",
        "gender": "female",
        "bloodGroup": "O+",
        "class": "PG",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "LOVEKUSH",
            "motherName": "RAJNI KUMARI",
            "fatherMobile": "+91 8",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 88,
            "percentage": 100.0
        },
        "feeSummary": {
            "totalDue": 19500,
            "totalPaid": 0,
            "balance": 19500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-435",
        "sqlId": "557",
        "admissionNo": "788",
        "rollNo": "0",
        "name": "JEESHU",
        "dob": "2021-08-16",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "NURSERY",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "NARENDRA KUMAR",
            "motherName": "SEEMA",
            "fatherMobile": "+91 1",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 82,
            "percentage": 93.2
        },
        "feeSummary": {
            "totalDue": 21000,
            "totalPaid": 0,
            "balance": 21000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-436",
        "sqlId": "558",
        "admissionNo": "842",
        "rollNo": "0",
        "name": "DHANYA KUMARI",
        "dob": "2021-04-05",
        "gender": "female",
        "bloodGroup": "O+",
        "class": "LKG",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "LEELU",
            "motherName": "LAXMI",
            "fatherMobile": "+91 8505963663",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 83,
            "percentage": 94.3
        },
        "feeSummary": {
            "totalDue": 22500,
            "totalPaid": 0,
            "balance": 22500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-437",
        "sqlId": "559",
        "admissionNo": "789",
        "rollNo": "0",
        "name": "PIYUSH",
        "dob": "2022-01-25",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "NURSERY",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "SURENDRA SINGH",
            "motherName": "MANJU DEVI",
            "fatherMobile": "+91 6395926626",
            "address": "PESARI"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 84,
            "percentage": 95.5
        },
        "feeSummary": {
            "totalDue": 24000,
            "totalPaid": 0,
            "balance": 24000,
            "status": "Pending"
        },
        "siblings": [
            "STU-2026-302"
        ]
    },
    {
        "id": "STU-2026-438",
        "sqlId": "560",
        "admissionNo": "843",
        "rollNo": "0",
        "name": "SHANAYA RAO BARDHAN",
        "dob": "2022-06-06",
        "gender": "female",
        "bloodGroup": "O+",
        "class": "NURSERY",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "PUNEET RAO BARDHAN",
            "motherName": "RACHNA KUMARI",
            "fatherMobile": "+91 9675737053",
            "address": "SAME"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 85,
            "percentage": 96.6
        },
        "feeSummary": {
            "totalDue": 25500,
            "totalPaid": 0,
            "balance": 25500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-439",
        "sqlId": "561",
        "admissionNo": "790",
        "rollNo": "0",
        "name": "NEHA",
        "dob": "2023-03-18",
        "gender": "female",
        "bloodGroup": "O+",
        "class": "NURSERY",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "MALKHAN SINGH",
            "motherName": "OMVATI",
            "fatherMobile": "+91 8859904907",
            "address": "NAGLA VIDHI"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 86,
            "percentage": 97.7
        },
        "feeSummary": {
            "totalDue": 27000,
            "totalPaid": 0,
            "balance": 27000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-440",
        "sqlId": "562",
        "admissionNo": "844",
        "rollNo": "84",
        "name": "KAUSHIK SHARMA",
        "dob": "2012-01-01",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "VI",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "MEGHENDRA SHARMA",
            "motherName": "POOJA  DEVI",
            "fatherMobile": "+91 7906340619",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 87,
            "percentage": 98.9
        },
        "feeSummary": {
            "totalDue": 28500,
            "totalPaid": 0,
            "balance": 28500,
            "status": "Pending"
        },
        "siblings": [
            "STU-2026-518"
        ]
    },
    {
        "id": "STU-2026-441",
        "sqlId": "563",
        "admissionNo": "791",
        "rollNo": "0",
        "name": "KALPANA",
        "dob": "2018-05-07",
        "gender": "female",
        "bloodGroup": "O+",
        "class": "I",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "JITENDRA KUMAR",
            "motherName": "MAMTA DEVI",
            "fatherMobile": "+91 7893204122",
            "address": "MAHARAJPUR"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 88,
            "percentage": 100.0
        },
        "feeSummary": {
            "totalDue": 18000,
            "totalPaid": 0,
            "balance": 18000,
            "status": "Pending"
        },
        "siblings": [
            "STU-2026-442"
        ]
    },
    {
        "id": "STU-2026-442",
        "sqlId": "564",
        "admissionNo": "792",
        "rollNo": "0",
        "name": "MAYANK",
        "dob": "2019-12-09",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "UKG",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "JITENDRA KUMAR",
            "motherName": "MAMTA DEVI",
            "fatherMobile": "+91 7893204122",
            "address": "MAHARAJPUR"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 82,
            "percentage": 93.2
        },
        "feeSummary": {
            "totalDue": 19500,
            "totalPaid": 0,
            "balance": 19500,
            "status": "Pending"
        },
        "siblings": [
            "STU-2026-441"
        ]
    },
    {
        "id": "STU-2026-443",
        "sqlId": "565",
        "admissionNo": "793",
        "rollNo": "0",
        "name": "NAMRTA",
        "dob": "2021-09-13",
        "gender": "female",
        "bloodGroup": "O+",
        "class": "LKG",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "JITENDRA KUMAR",
            "motherName": "PINKI",
            "fatherMobile": "+91 9719247840",
            "address": "NAGLA VIDHI"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 83,
            "percentage": 94.3
        },
        "feeSummary": {
            "totalDue": 21000,
            "totalPaid": 0,
            "balance": 21000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-444",
        "sqlId": "566",
        "admissionNo": "794",
        "rollNo": "0",
        "name": "KANAK",
        "dob": "2021-04-16",
        "gender": "female",
        "bloodGroup": "O+",
        "class": "LKG",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "SHRAWAN KUMAR",
            "motherName": "SARVESH DEVI",
            "fatherMobile": "+91 8958127235",
            "address": "GOKULPUR KHADAR"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 84,
            "percentage": 95.5
        },
        "feeSummary": {
            "totalDue": 22500,
            "totalPaid": 0,
            "balance": 22500,
            "status": "Pending"
        },
        "siblings": [
            "STU-2026-445"
        ]
    },
    {
        "id": "STU-2026-445",
        "sqlId": "567",
        "admissionNo": "795",
        "rollNo": "0",
        "name": "SAHIL",
        "dob": "2020-10-29",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "UKG",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "SHRAWAN KUMAR",
            "motherName": "SARVESH DEVI",
            "fatherMobile": "+91 8958127235",
            "address": "GOKULPUR KHADAR"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 85,
            "percentage": 96.6
        },
        "feeSummary": {
            "totalDue": 24000,
            "totalPaid": 0,
            "balance": 24000,
            "status": "Pending"
        },
        "siblings": [
            "STU-2026-444"
        ]
    },
    {
        "id": "STU-2026-446",
        "sqlId": "568",
        "admissionNo": "796",
        "rollNo": "0",
        "name": "SATYAM RAJPUT",
        "dob": "2022-07-30",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "NURSERY",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "SACHIN KUMAR",
            "motherName": "ROSHNI",
            "fatherMobile": "+91 8650222936",
            "address": "NAGLA DHARKPUR"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 86,
            "percentage": 97.7
        },
        "feeSummary": {
            "totalDue": 25500,
            "totalPaid": 0,
            "balance": 25500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-447",
        "sqlId": "569",
        "admissionNo": "797",
        "rollNo": "0",
        "name": "HEMANT RAJPUT",
        "dob": "2022-04-10",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "NURSERY",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "DEEPAK KUMAR",
            "motherName": "RENU",
            "fatherMobile": "+91 9536165087",
            "address": "NAGLA DHARKPUR"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 87,
            "percentage": 98.9
        },
        "feeSummary": {
            "totalDue": 27000,
            "totalPaid": 0,
            "balance": 27000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-448",
        "sqlId": "570",
        "admissionNo": "798",
        "rollNo": "0",
        "name": "NAMRITA",
        "dob": "2016-02-03",
        "gender": "female",
        "bloodGroup": "O+",
        "class": "V",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "AMIT KUMAR",
            "motherName": "SHIKHA",
            "fatherMobile": "+91 9627131068",
            "address": "NAGLA GARVI"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 88,
            "percentage": 100.0
        },
        "feeSummary": {
            "totalDue": 28500,
            "totalPaid": 0,
            "balance": 28500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-449",
        "sqlId": "571",
        "admissionNo": "799",
        "rollNo": "0",
        "name": "YASTHI",
        "dob": "2023-02-15",
        "gender": "female",
        "bloodGroup": "O+",
        "class": "PG",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "MANVEER SINGH",
            "motherName": "POOJA",
            "fatherMobile": "+91 8393905570",
            "address": "DADHAR ALUPURA"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 82,
            "percentage": 93.2
        },
        "feeSummary": {
            "totalDue": 18000,
            "totalPaid": 0,
            "balance": 18000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-450",
        "sqlId": "572",
        "admissionNo": "800",
        "rollNo": "0",
        "name": "DEVANSH",
        "dob": "2021-10-30",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "NURSERY",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "SATISH KUMAR",
            "motherName": "MADHU",
            "fatherMobile": "+91 9675939394",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 83,
            "percentage": 94.3
        },
        "feeSummary": {
            "totalDue": 19500,
            "totalPaid": 0,
            "balance": 19500,
            "status": "Pending"
        },
        "siblings": [
            "STU-2026-261",
            "STU-2026-281"
        ]
    },
    {
        "id": "STU-2026-451",
        "sqlId": "573",
        "admissionNo": "33",
        "rollNo": "94",
        "name": "TAKSHIT",
        "dob": "2012-12-30",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "VI",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "VIRESH KUMAR",
            "motherName": "VEENA DEVI",
            "fatherMobile": "+91 9536981196",
            "address": "MONIPURA RAMGHAT"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 84,
            "percentage": 95.5
        },
        "feeSummary": {
            "totalDue": 21000,
            "totalPaid": 0,
            "balance": 21000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-452",
        "sqlId": "574",
        "admissionNo": "845",
        "rollNo": "211",
        "name": "KANISHKA BHARDWAJ",
        "dob": "2019-02-07",
        "gender": "female",
        "bloodGroup": "O+",
        "class": "II",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "SUMIT KUMAR",
            "motherName": "SHIVANI SHARMA",
            "fatherMobile": "+91 9149043576",
            "address": "SAME"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 85,
            "percentage": 96.6
        },
        "feeSummary": {
            "totalDue": 22500,
            "totalPaid": 0,
            "balance": 22500,
            "status": "Pending"
        },
        "siblings": [
            "STU-2026-454"
        ]
    },
    {
        "id": "STU-2026-453",
        "sqlId": "575",
        "admissionNo": "802",
        "rollNo": "94",
        "name": "HARSHIT YADAV",
        "dob": "2014-11-30",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "V",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "VIRESH KUMAR",
            "motherName": "VEENA DEVI",
            "fatherMobile": "+91 9027319150",
            "address": "MONIPURA RAMGHAT"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 86,
            "percentage": 97.7
        },
        "feeSummary": {
            "totalDue": 24000,
            "totalPaid": 0,
            "balance": 24000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-454",
        "sqlId": "576",
        "admissionNo": "846",
        "rollNo": "0",
        "name": "SIDDHARTH BHARDWAJ",
        "dob": "2020-02-24",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "I",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "SUMIT KUMAR",
            "motherName": "SHIVANI SHARMA",
            "fatherMobile": "+91 9149043576",
            "address": "SAME"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 87,
            "percentage": 98.9
        },
        "feeSummary": {
            "totalDue": 25500,
            "totalPaid": 0,
            "balance": 25500,
            "status": "Pending"
        },
        "siblings": [
            "STU-2026-452"
        ]
    },
    {
        "id": "STU-2026-455",
        "sqlId": "577",
        "admissionNo": "803",
        "rollNo": "0",
        "name": "ARAV KUMAR",
        "dob": "1970-01-01",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "NURSERY",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "NEERAJ KUMAR",
            "motherName": "RINKI DEVI",
            "fatherMobile": "+91 9536981196",
            "address": "MONIPURA RAMGHAT"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 88,
            "percentage": 100.0
        },
        "feeSummary": {
            "totalDue": 27000,
            "totalPaid": 0,
            "balance": 27000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-456",
        "sqlId": "578",
        "admissionNo": "847",
        "rollNo": "0",
        "name": "MOKSH GAUR",
        "dob": "2021-02-27",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "NURSERY",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "AVINASH GAUR",
            "motherName": "JYOTI GAUR",
            "fatherMobile": "+91 7906980831",
            "address": "SAME"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 82,
            "percentage": 93.2
        },
        "feeSummary": {
            "totalDue": 28500,
            "totalPaid": 0,
            "balance": 28500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-457",
        "sqlId": "579",
        "admissionNo": "804",
        "rollNo": "0",
        "name": "DIVYANSHI KUMARI",
        "dob": "2022-04-29",
        "gender": "female",
        "bloodGroup": "O+",
        "class": "LKG",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "JITENDRA KUMAR",
            "motherName": "SHITAL",
            "fatherMobile": "+91 7836811431",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 83,
            "percentage": 94.3
        },
        "feeSummary": {
            "totalDue": 18000,
            "totalPaid": 0,
            "balance": 18000,
            "status": "Pending"
        },
        "siblings": [
            "STU-2026-458"
        ]
    },
    {
        "id": "STU-2026-458",
        "sqlId": "580",
        "admissionNo": "805",
        "rollNo": "0",
        "name": "MANVI KUMARI",
        "dob": "2019-10-30",
        "gender": "female",
        "bloodGroup": "O+",
        "class": "I",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "JITENDRA KUMAR",
            "motherName": "SHITAL",
            "fatherMobile": "+91 7836811431",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 84,
            "percentage": 95.5
        },
        "feeSummary": {
            "totalDue": 19500,
            "totalPaid": 0,
            "balance": 19500,
            "status": "Pending"
        },
        "siblings": [
            "STU-2026-457"
        ]
    },
    {
        "id": "STU-2026-459",
        "sqlId": "581",
        "admissionNo": "848",
        "rollNo": "0",
        "name": "NAKSH",
        "dob": "2022-07-11",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "NURSERY",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "VIKRAM",
            "motherName": "JYOTI",
            "fatherMobile": "+91 8433106825",
            "address": "SAME"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 85,
            "percentage": 96.6
        },
        "feeSummary": {
            "totalDue": 21000,
            "totalPaid": 0,
            "balance": 21000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-460",
        "sqlId": "582",
        "admissionNo": "806",
        "rollNo": "58",
        "name": "LAKSHY BHARDWAJ",
        "dob": "2013-10-19",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "VII",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "VISHNUDATT",
            "motherName": "PRITI",
            "fatherMobile": "+91 8800714031",
            "address": "RAMGHAT"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 86,
            "percentage": 97.7
        },
        "feeSummary": {
            "totalDue": 22500,
            "totalPaid": 0,
            "balance": 22500,
            "status": "Pending"
        },
        "siblings": [
            "STU-2026-462"
        ]
    },
    {
        "id": "STU-2026-461",
        "sqlId": "583",
        "admissionNo": "849",
        "rollNo": "0",
        "name": "KARUNA",
        "dob": "2022-01-01",
        "gender": "female",
        "bloodGroup": "O+",
        "class": "NURSERY",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "JAGDISH YADAV",
            "motherName": "NEERESH DEVI",
            "fatherMobile": "+91 8447784346",
            "address": "SAME"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 87,
            "percentage": 98.9
        },
        "feeSummary": {
            "totalDue": 24000,
            "totalPaid": 0,
            "balance": 24000,
            "status": "Pending"
        },
        "siblings": [
            "STU-2026-286"
        ]
    },
    {
        "id": "STU-2026-462",
        "sqlId": "584",
        "admissionNo": "807",
        "rollNo": "0",
        "name": "YUVANG BHARDWAJ",
        "dob": "2020-01-24",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "UKG",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "VISHNUDATT",
            "motherName": "PRITI",
            "fatherMobile": "+91 8800714031",
            "address": "RAMGHAT"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 88,
            "percentage": 100.0
        },
        "feeSummary": {
            "totalDue": 25500,
            "totalPaid": 0,
            "balance": 25500,
            "status": "Pending"
        },
        "siblings": [
            "STU-2026-460"
        ]
    },
    {
        "id": "STU-2026-463",
        "sqlId": "585",
        "admissionNo": "850",
        "rollNo": "0",
        "name": "POORVI",
        "dob": "2023-03-28",
        "gender": "female",
        "bloodGroup": "O+",
        "class": "NURSERY",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "RAVI KUMAR",
            "motherName": "SUMAN",
            "fatherMobile": "+91 9675315744",
            "address": "SAME"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 82,
            "percentage": 93.2
        },
        "feeSummary": {
            "totalDue": 27000,
            "totalPaid": 0,
            "balance": 27000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-464",
        "sqlId": "586",
        "admissionNo": "808",
        "rollNo": "0",
        "name": "VARSHITA",
        "dob": "2020-02-05",
        "gender": "female",
        "bloodGroup": "O+",
        "class": "UKG",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "SHYAM KUMAR SHARMA",
            "motherName": "POOJA SHARMA",
            "fatherMobile": "+91 9536723700",
            "address": "LOHGARH"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 83,
            "percentage": 94.3
        },
        "feeSummary": {
            "totalDue": 28500,
            "totalPaid": 0,
            "balance": 28500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-465",
        "sqlId": "587",
        "admissionNo": "851",
        "rollNo": "3",
        "name": "HEMANT",
        "dob": "2012-08-07",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "IX",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "NAURANG SINGH",
            "motherName": "SUNITA DEVI",
            "fatherMobile": "+91 97194 76606",
            "address": "SAME"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 84,
            "percentage": 95.5
        },
        "feeSummary": {
            "totalDue": 18000,
            "totalPaid": 0,
            "balance": 18000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-466",
        "sqlId": "588",
        "admissionNo": "852",
        "rollNo": "0",
        "name": "DEVID YADAV",
        "dob": "2022-03-15",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "PG",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 85,
            "percentage": 96.6
        },
        "feeSummary": {
            "totalDue": 19500,
            "totalPaid": 0,
            "balance": 19500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-467",
        "sqlId": "589",
        "admissionNo": "853",
        "rollNo": "0",
        "name": "SARVJIT",
        "dob": "2021-09-20",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "NURSERY",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "SOMVEER  SINGH",
            "motherName": "GAYTRI",
            "fatherMobile": "+91 97194 76606",
            "address": "SAME"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 86,
            "percentage": 97.7
        },
        "feeSummary": {
            "totalDue": 21000,
            "totalPaid": 0,
            "balance": 21000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-468",
        "sqlId": "590",
        "admissionNo": "854",
        "rollNo": "153",
        "name": "PRINCE KUMAR",
        "dob": "2018-04-30",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "IV",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "VINOD KUMAR",
            "motherName": "POOJA DEVI",
            "fatherMobile": "+91 9718402012",
            "address": "SHEKUPUR DANPUR DIBAI"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 87,
            "percentage": 98.9
        },
        "feeSummary": {
            "totalDue": 22500,
            "totalPaid": 0,
            "balance": 22500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-469",
        "sqlId": "591",
        "admissionNo": "855",
        "rollNo": "0",
        "name": "MANYA SHARMA",
        "dob": "2022-04-21",
        "gender": "female",
        "bloodGroup": "O+",
        "class": "LKG",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "ASHEESH KUMAR",
            "motherName": "KRISHNA SHARMA",
            "fatherMobile": "+91 9997620644",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 88,
            "percentage": 100.0
        },
        "feeSummary": {
            "totalDue": 24000,
            "totalPaid": 0,
            "balance": 24000,
            "status": "Pending"
        },
        "siblings": [
            "STU-2026-470"
        ]
    },
    {
        "id": "STU-2026-470",
        "sqlId": "592",
        "admissionNo": "856",
        "rollNo": "0",
        "name": "DEVANSH",
        "dob": "2020-06-14",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "UKG",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "ASHEESH KUMAR",
            "motherName": "KRISHNA SHARMA",
            "fatherMobile": "+91 9997620644",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 82,
            "percentage": 93.2
        },
        "feeSummary": {
            "totalDue": 25500,
            "totalPaid": 0,
            "balance": 25500,
            "status": "Pending"
        },
        "siblings": [
            "STU-2026-469"
        ]
    },
    {
        "id": "STU-2026-471",
        "sqlId": "593",
        "admissionNo": "857",
        "rollNo": "0",
        "name": "TANISHKA",
        "dob": "2024-01-07",
        "gender": "female",
        "bloodGroup": "O+",
        "class": "PG",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "RAJENDRA KUMAR",
            "motherName": "NIKKI YADAV",
            "fatherMobile": "+91 9654980598",
            "address": "SAME"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 83,
            "percentage": 94.3
        },
        "feeSummary": {
            "totalDue": 27000,
            "totalPaid": 0,
            "balance": 27000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-472",
        "sqlId": "594",
        "admissionNo": "858",
        "rollNo": "217",
        "name": "NITYA KUMARI",
        "dob": "2018-11-02",
        "gender": "female",
        "bloodGroup": "O+",
        "class": "II",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "GAURAV KUMAR",
            "motherName": "PRABHA CHAUDHARY",
            "fatherMobile": "+91 7078686929",
            "address": "SAME"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 84,
            "percentage": 95.5
        },
        "feeSummary": {
            "totalDue": 28500,
            "totalPaid": 0,
            "balance": 28500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-473",
        "sqlId": "595",
        "admissionNo": "859",
        "rollNo": "0",
        "name": "NAYRA CHAUDHARY",
        "dob": "1970-01-01",
        "gender": "female",
        "bloodGroup": "O+",
        "class": "NURSERY",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "GAURAV KUMAR",
            "motherName": "ARTI SHARMA",
            "fatherMobile": "+91 6396944247",
            "address": "JARGWAN DIBAI"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 85,
            "percentage": 96.6
        },
        "feeSummary": {
            "totalDue": 18000,
            "totalPaid": 0,
            "balance": 18000,
            "status": "Pending"
        },
        "siblings": [
            "STU-2026-251"
        ]
    },
    {
        "id": "STU-2026-474",
        "sqlId": "596",
        "admissionNo": "860",
        "rollNo": "143",
        "name": "PANKAJ KUMAR",
        "dob": "2013-09-02",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "II",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "LEELADHAR SINGH",
            "motherName": "SUSHILA DEVI",
            "fatherMobile": "+91 7409641112",
            "address": "SAME"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 86,
            "percentage": 97.7
        },
        "feeSummary": {
            "totalDue": 19500,
            "totalPaid": 0,
            "balance": 19500,
            "status": "Pending"
        },
        "siblings": [
            "STU-2026-475"
        ]
    },
    {
        "id": "STU-2026-475",
        "sqlId": "597",
        "admissionNo": "861",
        "rollNo": "143",
        "name": "HARSH",
        "dob": "2013-03-02",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "IV",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "LEELADHAR SINGH",
            "motherName": "SUSHILA DEVI",
            "fatherMobile": "+91 7409641112",
            "address": "SAME"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 87,
            "percentage": 98.9
        },
        "feeSummary": {
            "totalDue": 21000,
            "totalPaid": 0,
            "balance": 21000,
            "status": "Pending"
        },
        "siblings": [
            "STU-2026-474"
        ]
    },
    {
        "id": "STU-2026-476",
        "sqlId": "598",
        "admissionNo": "862",
        "rollNo": "0",
        "name": "HARSHIT",
        "dob": "2020-09-05",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "LKG",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "UMESH KUMAR",
            "motherName": "RUBI  DEVI",
            "fatherMobile": "+91 9761246448",
            "address": "SAME"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 88,
            "percentage": 100.0
        },
        "feeSummary": {
            "totalDue": 22500,
            "totalPaid": 0,
            "balance": 22500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-477",
        "sqlId": "599",
        "admissionNo": "863",
        "rollNo": "140",
        "name": "DUSHYANT",
        "dob": "2014-04-09",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "IV",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "PRAVESH KUMAR",
            "motherName": "PRITI DEVI",
            "fatherMobile": "+91 9758494344",
            "address": "POOTHERI KHURD SIKHARPUR BULANDSHAHR"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 82,
            "percentage": 93.2
        },
        "feeSummary": {
            "totalDue": 24000,
            "totalPaid": 0,
            "balance": 24000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-478",
        "sqlId": "600",
        "admissionNo": "864",
        "rollNo": "0",
        "name": "RIYANSH PRATAP SINGH",
        "dob": "2022-04-01",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "NURSERY",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "RAJKUMAR",
            "motherName": "ROOBI",
            "fatherMobile": "+91 9634623967",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 83,
            "percentage": 94.3
        },
        "feeSummary": {
            "totalDue": 25500,
            "totalPaid": 0,
            "balance": 25500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-479",
        "sqlId": "601",
        "admissionNo": "94",
        "rollNo": "0",
        "name": "ANANYA VERMA",
        "dob": "2019-12-15",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "I",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "VIKAS VERMA",
            "motherName": "PRIYANKA KUMARI",
            "fatherMobile": "+91 9760960201",
            "address": "SAME"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 84,
            "percentage": 95.5
        },
        "feeSummary": {
            "totalDue": 27000,
            "totalPaid": 0,
            "balance": 27000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-480",
        "sqlId": "602",
        "admissionNo": "866",
        "rollNo": "0",
        "name": "ABHAY",
        "dob": "2021-04-04",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "LKG",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "RINKU KUMAR",
            "motherName": "POONAM DEVI",
            "fatherMobile": "+91 9568894183",
            "address": "SAME"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 85,
            "percentage": 96.6
        },
        "feeSummary": {
            "totalDue": 28500,
            "totalPaid": 0,
            "balance": 28500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-481",
        "sqlId": "603",
        "admissionNo": "867",
        "rollNo": "167",
        "name": "AJAY",
        "dob": "2019-07-25",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "III",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "SANJEEV YADAV",
            "motherName": "MEERA",
            "fatherMobile": "+91 7505792058",
            "address": "SAME"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 86,
            "percentage": 97.7
        },
        "feeSummary": {
            "totalDue": 18000,
            "totalPaid": 0,
            "balance": 18000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-482",
        "sqlId": "604",
        "admissionNo": "868",
        "rollNo": "221",
        "name": "RAVIT",
        "dob": "2017-02-01",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "II",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "MUKESH",
            "motherName": "BHOORI",
            "fatherMobile": "+91 9528585886",
            "address": "SAME"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 87,
            "percentage": 98.9
        },
        "feeSummary": {
            "totalDue": 19500,
            "totalPaid": 0,
            "balance": 19500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-483",
        "sqlId": "605",
        "admissionNo": "809",
        "rollNo": "0",
        "name": "PRAGYA",
        "dob": "2022-03-01",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "LKG",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "YOGESH  KUMAR",
            "motherName": "MEENA KUMARI",
            "fatherMobile": "+91 97194 76606",
            "address": "SAME"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 88,
            "percentage": 100.0
        },
        "feeSummary": {
            "totalDue": 21000,
            "totalPaid": 0,
            "balance": 21000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-484",
        "sqlId": "606",
        "admissionNo": "810",
        "rollNo": "0",
        "name": "JYOTI KUMARI",
        "dob": "2020-11-19",
        "gender": "female",
        "bloodGroup": "O+",
        "class": "LKG",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "NARESH KUMAR",
            "motherName": "SUNITA DEVI",
            "fatherMobile": "+91 97194 76606",
            "address": "SAME"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 82,
            "percentage": 93.2
        },
        "feeSummary": {
            "totalDue": 22500,
            "totalPaid": 0,
            "balance": 22500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-485",
        "sqlId": "607",
        "admissionNo": "811",
        "rollNo": "0",
        "name": "MOHIT KUMAR",
        "dob": "2019-10-20",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "UKG",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "UMESH KUMAR",
            "motherName": "HEMLATA DEVI",
            "fatherMobile": "+91 7060399415",
            "address": "SAME"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 83,
            "percentage": 94.3
        },
        "feeSummary": {
            "totalDue": 24000,
            "totalPaid": 0,
            "balance": 24000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-486",
        "sqlId": "608",
        "admissionNo": "812",
        "rollNo": "0",
        "name": "RIYANSH KUMAR",
        "dob": "2021-10-07",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "LKG",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "UMESH KUMAR",
            "motherName": "HEMLATA DEVI",
            "fatherMobile": "+91 97194 76606",
            "address": "SAME"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 84,
            "percentage": 95.5
        },
        "feeSummary": {
            "totalDue": 25500,
            "totalPaid": 0,
            "balance": 25500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-487",
        "sqlId": "609",
        "admissionNo": "813",
        "rollNo": "0",
        "name": "DEEP",
        "dob": "2022-04-27",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "LKG",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "PAVAN KUMAR GUPTA",
            "motherName": "SEEMA GUPTA",
            "fatherMobile": "+91 97194 76606",
            "address": "SAME"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 85,
            "percentage": 96.6
        },
        "feeSummary": {
            "totalDue": 27000,
            "totalPaid": 0,
            "balance": 27000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-488",
        "sqlId": "610",
        "admissionNo": "814",
        "rollNo": "0",
        "name": "DAKSH KUMAR GUPTA",
        "dob": "2020-01-01",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "I",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "PAVAN KUMAR GUPTA",
            "motherName": "SEEMA GUPTA",
            "fatherMobile": "+91 7505645260",
            "address": "SAME"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 86,
            "percentage": 97.7
        },
        "feeSummary": {
            "totalDue": 28500,
            "totalPaid": 0,
            "balance": 28500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-489",
        "sqlId": "611",
        "admissionNo": "815",
        "rollNo": "162",
        "name": "TRAPTI KUMARI",
        "dob": "2015-10-15",
        "gender": "female",
        "bloodGroup": "O+",
        "class": "IV",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "HARENDRA KUMAR",
            "motherName": "ANJALI",
            "fatherMobile": "+91 1",
            "address": "SAME"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 87,
            "percentage": 98.9
        },
        "feeSummary": {
            "totalDue": 18000,
            "totalPaid": 0,
            "balance": 18000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-490",
        "sqlId": "612",
        "admissionNo": "816",
        "rollNo": "0",
        "name": "KHUSHI",
        "dob": "2021-08-21",
        "gender": "female",
        "bloodGroup": "O+",
        "class": "LKG",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "RAMBABU SINGH",
            "motherName": "URMILA",
            "fatherMobile": "+91 9719304150",
            "address": "SAME"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 88,
            "percentage": 100.0
        },
        "feeSummary": {
            "totalDue": 19500,
            "totalPaid": 0,
            "balance": 19500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-491",
        "sqlId": "613",
        "admissionNo": "817",
        "rollNo": "113",
        "name": "KRISHNASKANT",
        "dob": "2017-07-14",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "V",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "MUNISH KUMAR",
            "motherName": "MANOJ BHARTI",
            "fatherMobile": "+91 9457076490",
            "address": "SAME"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 82,
            "percentage": 93.2
        },
        "feeSummary": {
            "totalDue": 21000,
            "totalPaid": 0,
            "balance": 21000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-492",
        "sqlId": "614",
        "admissionNo": "818",
        "rollNo": "36",
        "name": "SONAM",
        "dob": "2012-09-17",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "IX",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "DURGESH KUMAR",
            "motherName": "SEEMA DEVI",
            "fatherMobile": "+91 97194 76606",
            "address": "SAME"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 83,
            "percentage": 94.3
        },
        "feeSummary": {
            "totalDue": 22500,
            "totalPaid": 0,
            "balance": 22500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-493",
        "sqlId": "615",
        "admissionNo": "819",
        "rollNo": "0",
        "name": "SAKSHI PALI",
        "dob": "2022-07-18",
        "gender": "female",
        "bloodGroup": "O+",
        "class": "PG",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "DHARMVEER",
            "motherName": "KM. RENU",
            "fatherMobile": "+91 97194 76606",
            "address": "SAME"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 84,
            "percentage": 95.5
        },
        "feeSummary": {
            "totalDue": 24000,
            "totalPaid": 0,
            "balance": 24000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-494",
        "sqlId": "616",
        "admissionNo": "820",
        "rollNo": "77",
        "name": "DEEPESH",
        "dob": "2014-05-02",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "VI",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "JITENDRA",
            "motherName": "SUDHA",
            "fatherMobile": "+91 97194 76606",
            "address": "SAME"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 85,
            "percentage": 96.6
        },
        "feeSummary": {
            "totalDue": 25500,
            "totalPaid": 0,
            "balance": 25500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-495",
        "sqlId": "617",
        "admissionNo": "821",
        "rollNo": "0",
        "name": "ANSH KUMAR",
        "dob": "2022-11-10",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "LKG",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "ASHOK KUMAR",
            "motherName": "RINKI KUMARI",
            "fatherMobile": "+91 97194 76606",
            "address": "SAME"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 86,
            "percentage": 97.7
        },
        "feeSummary": {
            "totalDue": 27000,
            "totalPaid": 0,
            "balance": 27000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-496",
        "sqlId": "618",
        "admissionNo": "822",
        "rollNo": "0",
        "name": "SAKSHI VERMA",
        "dob": "2019-05-15",
        "gender": "female",
        "bloodGroup": "O+",
        "class": "UKG",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "RAMKISHAN VERMA",
            "motherName": "MAMTA DEVI",
            "fatherMobile": "+91 97194 76606",
            "address": "SAME"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 87,
            "percentage": 98.9
        },
        "feeSummary": {
            "totalDue": 28500,
            "totalPaid": 0,
            "balance": 28500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-497",
        "sqlId": "619",
        "admissionNo": "823",
        "rollNo": "0",
        "name": "UDIT VERMA",
        "dob": "2022-03-07",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "NURSERY",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "RAMKISHAN VERMA",
            "motherName": "MAMTA DEVI",
            "fatherMobile": "+91 97194 76606",
            "address": "SAME"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 88,
            "percentage": 100.0
        },
        "feeSummary": {
            "totalDue": 18000,
            "totalPaid": 0,
            "balance": 18000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-498",
        "sqlId": "620",
        "admissionNo": "824",
        "rollNo": "40",
        "name": "CHANDANI CHAUDHARY",
        "dob": "2012-09-01",
        "gender": "female",
        "bloodGroup": "O+",
        "class": "IX",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "JASVANT SINGH",
            "motherName": "BALA DEVI",
            "fatherMobile": "+91 97194 76606",
            "address": "SAME"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 82,
            "percentage": 93.2
        },
        "feeSummary": {
            "totalDue": 19500,
            "totalPaid": 0,
            "balance": 19500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-499",
        "sqlId": "621",
        "admissionNo": "825",
        "rollNo": "40",
        "name": "AARUSH CHAUDHARY",
        "dob": "2015-01-01",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "V",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "JASVANT SINGH",
            "motherName": "BALA DEVI",
            "fatherMobile": "+91 7830636123",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 83,
            "percentage": 94.3
        },
        "feeSummary": {
            "totalDue": 21000,
            "totalPaid": 0,
            "balance": 21000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-500",
        "sqlId": "622",
        "admissionNo": "826",
        "rollNo": "0",
        "name": "MADHAV",
        "dob": "2020-08-21",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "UKG",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "VIJAY KUMAR",
            "motherName": "RAJNI KUMARI",
            "fatherMobile": "+91 97194 76606",
            "address": "SAME"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 84,
            "percentage": 95.5
        },
        "feeSummary": {
            "totalDue": 22500,
            "totalPaid": 0,
            "balance": 22500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-501",
        "sqlId": "623",
        "admissionNo": "827",
        "rollNo": "0",
        "name": "PRAVESH YADAV",
        "dob": "2022-01-23",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "LKG",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "MUNISH KUMAR",
            "motherName": "REKHA",
            "fatherMobile": "+91 97194 76606",
            "address": "SAME"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 85,
            "percentage": 96.6
        },
        "feeSummary": {
            "totalDue": 24000,
            "totalPaid": 0,
            "balance": 24000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-502",
        "sqlId": "626",
        "admissionNo": "830",
        "rollNo": "42",
        "name": "BABLU",
        "dob": "1970-01-01",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "IX",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "INDRAVESH",
            "motherName": "ANITA",
            "fatherMobile": "+91 7505641639",
            "address": "NAGLA AJMERI DANDA SAMBHAL"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 86,
            "percentage": 97.7
        },
        "feeSummary": {
            "totalDue": 25500,
            "totalPaid": 0,
            "balance": 25500,
            "status": "Pending"
        },
        "siblings": [
            "STU-2026-503"
        ]
    },
    {
        "id": "STU-2026-503",
        "sqlId": "628",
        "admissionNo": "891",
        "rollNo": "0",
        "name": "SONU",
        "dob": "2013-07-20",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "V",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "INDRAVESH",
            "motherName": "ANITA",
            "fatherMobile": "+91 7505641639",
            "address": "NAGLA AJMERI DANDA SAMBHAL"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 87,
            "percentage": 98.9
        },
        "feeSummary": {
            "totalDue": 27000,
            "totalPaid": 0,
            "balance": 27000,
            "status": "Pending"
        },
        "siblings": [
            "STU-2026-502"
        ]
    },
    {
        "id": "STU-2026-504",
        "sqlId": "629",
        "admissionNo": "892",
        "rollNo": "0",
        "name": "DUSHYANT",
        "dob": "2016-06-01",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "I",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "RAJU",
            "motherName": "ASHA DEVI",
            "fatherMobile": "+91 9761122723",
            "address": "NAGLA AJMERI DANDA SAMBHAL"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 88,
            "percentage": 100.0
        },
        "feeSummary": {
            "totalDue": 28500,
            "totalPaid": 0,
            "balance": 28500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-505",
        "sqlId": "633",
        "admissionNo": "896",
        "rollNo": "0",
        "name": "SHRADHA SHARMA",
        "dob": "2016-07-16",
        "gender": "female",
        "bloodGroup": "O+",
        "class": "V",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "HARENDRA SHARMA",
            "motherName": "POOJA SHARMA",
            "fatherMobile": "+91 8445897089",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 82,
            "percentage": 93.2
        },
        "feeSummary": {
            "totalDue": 18000,
            "totalPaid": 0,
            "balance": 18000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-506",
        "sqlId": "634",
        "admissionNo": "897",
        "rollNo": "0",
        "name": "CHANDRAGUPT",
        "dob": "2022-02-06",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "NURSERY",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "DEVENDRA KUMAR",
            "motherName": "SUMAN DEVI",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 83,
            "percentage": 94.3
        },
        "feeSummary": {
            "totalDue": 19500,
            "totalPaid": 0,
            "balance": 19500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-507",
        "sqlId": "635",
        "admissionNo": "898",
        "rollNo": "0",
        "name": "SHREYA SHARMA",
        "dob": "2023-09-29",
        "gender": "female",
        "bloodGroup": "O+",
        "class": "PG",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "PRASHANT KUMAR",
            "motherName": "CHANDANI",
            "fatherMobile": "+91 97194 76606",
            "address": "SAME"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 84,
            "percentage": 95.5
        },
        "feeSummary": {
            "totalDue": 21000,
            "totalPaid": 0,
            "balance": 21000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-508",
        "sqlId": "636",
        "admissionNo": "899",
        "rollNo": "0",
        "name": "ARAV",
        "dob": "2017-05-23",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "I",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "MANOJ KUMAR",
            "motherName": "MADHU",
            "fatherMobile": "+91 97194 76606",
            "address": "SAME"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 85,
            "percentage": 96.6
        },
        "feeSummary": {
            "totalDue": 22500,
            "totalPaid": 0,
            "balance": 22500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-509",
        "sqlId": "637",
        "admissionNo": "900",
        "rollNo": "0",
        "name": "NITYA",
        "dob": "2021-04-12",
        "gender": "female",
        "bloodGroup": "O+",
        "class": "LKG",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "LOVKESH",
            "motherName": "SEEMA DEVI",
            "fatherMobile": "+91 9560118289",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 86,
            "percentage": 97.7
        },
        "feeSummary": {
            "totalDue": 24000,
            "totalPaid": 0,
            "balance": 24000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-510",
        "sqlId": "638",
        "admissionNo": "901",
        "rollNo": "102",
        "name": "AYUSH",
        "dob": "2014-08-17",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "V",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "HARENDRA KUMAR",
            "motherName": "Manju DEVI",
            "fatherMobile": "+91 9761973483",
            "address": "SAME"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 87,
            "percentage": 98.9
        },
        "feeSummary": {
            "totalDue": 25500,
            "totalPaid": 0,
            "balance": 25500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-511",
        "sqlId": "639",
        "admissionNo": "902",
        "rollNo": "89",
        "name": "POOJA RAJPUT",
        "dob": "2014-03-12",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "VI",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "YATENDRA",
            "motherName": "MEENA",
            "fatherMobile": "+91 8700176774",
            "address": "SAME"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 88,
            "percentage": 100.0
        },
        "feeSummary": {
            "totalDue": 27000,
            "totalPaid": 0,
            "balance": 27000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-512",
        "sqlId": "640",
        "admissionNo": "903",
        "rollNo": "0",
        "name": "ESHIKA RAGHAV",
        "dob": "2022-02-15",
        "gender": "female",
        "bloodGroup": "O+",
        "class": "LKG",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "DHARMENDRA",
            "motherName": "SHIVA",
            "fatherMobile": "+91 7838726958",
            "address": "SAME"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 82,
            "percentage": 93.2
        },
        "feeSummary": {
            "totalDue": 28500,
            "totalPaid": 0,
            "balance": 28500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-513",
        "sqlId": "641",
        "admissionNo": "904",
        "rollNo": "0",
        "name": "RIYANSHI AGRAWAL",
        "dob": "2023-07-25",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "PG",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "SHIVAM",
            "motherName": "MANSI",
            "fatherMobile": "+91 6398983141",
            "address": "SAME"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 83,
            "percentage": 94.3
        },
        "feeSummary": {
            "totalDue": 18000,
            "totalPaid": 0,
            "balance": 18000,
            "status": "Pending"
        },
        "siblings": [
            "STU-2026-415"
        ]
    },
    {
        "id": "STU-2026-514",
        "sqlId": "642",
        "admissionNo": "905",
        "rollNo": "205",
        "name": "DIMPAL",
        "dob": "2016-12-25",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "II",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "RAVENDRA KUMAR",
            "motherName": "RANI DEVI",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 84,
            "percentage": 95.5
        },
        "feeSummary": {
            "totalDue": 19500,
            "totalPaid": 0,
            "balance": 19500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-515",
        "sqlId": "643",
        "admissionNo": "906",
        "rollNo": "0",
        "name": "RIYANSH TOMAR",
        "dob": "2022-08-20",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "NURSERY",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "ARUN KUMAR",
            "motherName": "SARASWATI",
            "fatherMobile": "+91 8439543960",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 85,
            "percentage": 96.6
        },
        "feeSummary": {
            "totalDue": 21000,
            "totalPaid": 0,
            "balance": 21000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-516",
        "sqlId": "644",
        "admissionNo": "907",
        "rollNo": "2",
        "name": "HARSHIT KUMAR",
        "dob": "2011-08-09",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "IX",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "AMIT KUMAR SHARMA",
            "motherName": "DURGESH SHARMA",
            "fatherMobile": "+91 8395050888",
            "address": "JARGWAN BULANDSHAHR"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 86,
            "percentage": 97.7
        },
        "feeSummary": {
            "totalDue": 22500,
            "totalPaid": 0,
            "balance": 22500,
            "status": "Pending"
        },
        "siblings": [
            "STU-2026-292"
        ]
    },
    {
        "id": "STU-2026-517",
        "sqlId": "645",
        "admissionNo": "908",
        "rollNo": "0",
        "name": "DAKSH VASHISHTHA",
        "dob": "2022-06-20",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "PG",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "AKASH SHARMA",
            "motherName": "KAJAL KUMARI",
            "fatherMobile": "+91 9368751908",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 87,
            "percentage": 98.9
        },
        "feeSummary": {
            "totalDue": 24000,
            "totalPaid": 0,
            "balance": 24000,
            "status": "Pending"
        },
        "siblings": [
            "STU-2026-374"
        ]
    },
    {
        "id": "STU-2026-518",
        "sqlId": "648",
        "admissionNo": "871",
        "rollNo": "84",
        "name": "HARSH SHARMA",
        "dob": "2015-01-01",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "IV",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "MEGHENDRA SHARMA",
            "motherName": "POOJA  DEVI",
            "fatherMobile": "+91 7906340619",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 88,
            "percentage": 100.0
        },
        "feeSummary": {
            "totalDue": 25500,
            "totalPaid": 0,
            "balance": 25500,
            "status": "Pending"
        },
        "siblings": [
            "STU-2026-440"
        ]
    },
    {
        "id": "STU-2026-519",
        "sqlId": "649",
        "admissionNo": "872",
        "rollNo": "133",
        "name": "ANKIT",
        "dob": "2015-04-17",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "IV",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "RUKAMPAL",
            "motherName": "BAUBEE",
            "fatherMobile": "+91 9758687733",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 82,
            "percentage": 93.2
        },
        "feeSummary": {
            "totalDue": 27000,
            "totalPaid": 0,
            "balance": 27000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-520",
        "sqlId": "650",
        "admissionNo": "890",
        "rollNo": "148",
        "name": "LOVE KUMAR",
        "dob": "2015-05-28",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "IV",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "PRAVESH KUMAR",
            "motherName": "PRIYANKA",
            "fatherMobile": "+91 97194 76606",
            "address": "JARGWAN"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 83,
            "percentage": 94.3
        },
        "feeSummary": {
            "totalDue": 28500,
            "totalPaid": 0,
            "balance": 28500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-521",
        "sqlId": "651",
        "admissionNo": "873",
        "rollNo": "152",
        "name": "PRASHANT",
        "dob": "2015-04-02",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "IV",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "BANI",
            "motherName": "VINEETA",
            "fatherMobile": "+91 9690556281",
            "address": "NOJALPUR KHADAR"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 84,
            "percentage": 95.5
        },
        "feeSummary": {
            "totalDue": 18000,
            "totalPaid": 0,
            "balance": 18000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-522",
        "sqlId": "652",
        "admissionNo": "918",
        "rollNo": "347",
        "name": "VIVEK",
        "dob": "2016-05-11",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "III",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "MAHIPAL",
            "motherName": "PREMLATA DEVI",
            "fatherMobile": "+91 8923283035",
            "address": "VIJAY NAGLIYA"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 85,
            "percentage": 96.6
        },
        "feeSummary": {
            "totalDue": 19500,
            "totalPaid": 0,
            "balance": 19500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-523",
        "sqlId": "653",
        "admissionNo": "919",
        "rollNo": "14",
        "name": "DIVYANSHU",
        "dob": "2013-03-11",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "VIII",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 86,
            "percentage": 97.7
        },
        "feeSummary": {
            "totalDue": 21000,
            "totalPaid": 0,
            "balance": 21000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-524",
        "sqlId": "654",
        "admissionNo": "881",
        "rollNo": "82",
        "name": "HARENDRA KUMAR",
        "dob": "2014-11-20",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "VI",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "PRAMOD KUMAR",
            "motherName": "LADO DEVI",
            "fatherMobile": "+91 9758850103",
            "address": "NAAGLA JATNI RAMGHAT BULANDSHAR"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 87,
            "percentage": 98.9
        },
        "feeSummary": {
            "totalDue": 22500,
            "totalPaid": 0,
            "balance": 22500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-525",
        "sqlId": "655",
        "admissionNo": "920",
        "rollNo": "0",
        "name": "ANSHU",
        "dob": "2011-12-10",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "VI",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "OMKAR SINGH",
            "motherName": "MUNNI DEVI",
            "fatherMobile": "+91 9719613145",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 88,
            "percentage": 100.0
        },
        "feeSummary": {
            "totalDue": 24000,
            "totalPaid": 0,
            "balance": 24000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-526",
        "sqlId": "656",
        "admissionNo": "922",
        "rollNo": "0",
        "name": "ANSHUL KUMAR",
        "dob": "2013-02-11",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "VI",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "SOMVEER",
            "motherName": "SEEMA",
            "fatherMobile": "+91 2",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 82,
            "percentage": 93.2
        },
        "feeSummary": {
            "totalDue": 25500,
            "totalPaid": 0,
            "balance": 25500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-527",
        "sqlId": "657",
        "admissionNo": "921",
        "rollNo": "0",
        "name": "NISHANT YADAV",
        "dob": "2015-04-01",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "VI",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "MANOJ KUMAR",
            "motherName": "ANGOORI DEVI",
            "fatherMobile": "+91 9761145042",
            "address": "NAGLA JATANI RAMGHAT BULANDSHAHR"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 83,
            "percentage": 94.3
        },
        "feeSummary": {
            "totalDue": 27000,
            "totalPaid": 0,
            "balance": 27000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-528",
        "sqlId": "658",
        "admissionNo": "878",
        "rollNo": "0",
        "name": "ISHANT",
        "dob": "2020-09-20",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "I",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "SANJAY KUMAR",
            "motherName": "NEETU KUMARI",
            "fatherMobile": "+91 8368791082",
            "address": "CHIRAURI"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 84,
            "percentage": 95.5
        },
        "feeSummary": {
            "totalDue": 28500,
            "totalPaid": 0,
            "balance": 28500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-529",
        "sqlId": "659",
        "admissionNo": "923",
        "rollNo": "0",
        "name": "VAIBHAV",
        "dob": "2020-01-01",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "NURSERY",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "SHILENDRA KUMAR",
            "motherName": "KUSUM",
            "fatherMobile": "+91 9720882749",
            "address": "SAME"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 85,
            "percentage": 96.6
        },
        "feeSummary": {
            "totalDue": 18000,
            "totalPaid": 0,
            "balance": 18000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-530",
        "sqlId": "661",
        "admissionNo": "924",
        "rollNo": "0",
        "name": "YASH KUMAR",
        "dob": "2023-05-07",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "NURSERY",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "RAM NARESH SINGH",
            "motherName": "PRITI KUMARI",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 86,
            "percentage": 97.7
        },
        "feeSummary": {
            "totalDue": 19500,
            "totalPaid": 0,
            "balance": 19500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-531",
        "sqlId": "662",
        "admissionNo": "927",
        "rollNo": "0",
        "name": "GAURI",
        "dob": "2019-02-05",
        "gender": "female",
        "bloodGroup": "O+",
        "class": "I",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "PRAKASHI",
            "motherName": "URMILA DEVI",
            "fatherMobile": "+91 8650678109",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 87,
            "percentage": 98.9
        },
        "feeSummary": {
            "totalDue": 21000,
            "totalPaid": 0,
            "balance": 21000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-532",
        "sqlId": "663",
        "admissionNo": "928",
        "rollNo": "0",
        "name": "MUKUL",
        "dob": "1970-01-01",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "NURSERY",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "YOGESH KUMAR",
            "motherName": "MAMTA",
            "fatherMobile": "+91 9027961018",
            "address": "PESARI"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 88,
            "percentage": 100.0
        },
        "feeSummary": {
            "totalDue": 22500,
            "totalPaid": 0,
            "balance": 22500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-533",
        "sqlId": "664",
        "admissionNo": "929",
        "rollNo": "0",
        "name": "JEEVA",
        "dob": "2023-09-07",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "PG",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "DHARMVEER",
            "motherName": "ARTI",
            "fatherMobile": "+91 8650453125",
            "address": "SAME"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 82,
            "percentage": 93.2
        },
        "feeSummary": {
            "totalDue": 24000,
            "totalPaid": 0,
            "balance": 24000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-534",
        "sqlId": "665",
        "admissionNo": "930",
        "rollNo": "201",
        "name": "ARYAN",
        "dob": "2016-01-01",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "II",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "MANOJ KUMAR",
            "motherName": "MADHU",
            "fatherMobile": "+91 9627156530",
            "address": "SAME"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 83,
            "percentage": 94.3
        },
        "feeSummary": {
            "totalDue": 25500,
            "totalPaid": 0,
            "balance": 25500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-535",
        "sqlId": "666",
        "admissionNo": "869",
        "rollNo": "0",
        "name": "GAURAV",
        "dob": "1970-01-01",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "NURSERY",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "PRAKASHI",
            "motherName": "URMILA DEVI",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 84,
            "percentage": 95.5
        },
        "feeSummary": {
            "totalDue": 27000,
            "totalPaid": 0,
            "balance": 27000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-536",
        "sqlId": "667",
        "admissionNo": "932",
        "rollNo": "59",
        "name": "LALIT",
        "dob": "2013-12-10",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "VII",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "TILAK SINGH",
            "motherName": "SUMAN DEVI",
            "fatherMobile": "+91 9627628176",
            "address": "SAME"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 85,
            "percentage": 96.6
        },
        "feeSummary": {
            "totalDue": 28500,
            "totalPaid": 0,
            "balance": 28500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-537",
        "sqlId": "668",
        "admissionNo": "940",
        "rollNo": "0",
        "name": "SONU KUMAR",
        "dob": "2021-03-24",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "NURSERY",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "RAJESH KUMAR",
            "motherName": "RENU",
            "fatherMobile": "+91 7252822383",
            "address": "KALIYANPUR"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 86,
            "percentage": 97.7
        },
        "feeSummary": {
            "totalDue": 18000,
            "totalPaid": 0,
            "balance": 18000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-538",
        "sqlId": "669",
        "admissionNo": "941",
        "rollNo": "0",
        "name": "CHIRAG",
        "dob": "1970-01-01",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "NURSERY",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "CHANDRABHAN",
            "motherName": "SONAM DEVI",
            "fatherMobile": "+91 9149093558",
            "address": "'KALIYANPUR BHAGIRATHPUR"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 87,
            "percentage": 98.9
        },
        "feeSummary": {
            "totalDue": 19500,
            "totalPaid": 0,
            "balance": 19500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-539",
        "sqlId": "670",
        "admissionNo": "933",
        "rollNo": "0",
        "name": "ABHIJEET RAGHAV",
        "dob": "2021-10-23",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "NURSERY",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "AMIT",
            "motherName": "KANCHAN",
            "fatherMobile": "+91 9084367749",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 88,
            "percentage": 100.0
        },
        "feeSummary": {
            "totalDue": 21000,
            "totalPaid": 0,
            "balance": 21000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-540",
        "sqlId": "671",
        "admissionNo": "935",
        "rollNo": "0",
        "name": "SHIVANSH SHARMA",
        "dob": "2023-08-04",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "PG",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "SAURAV SHARMA",
            "motherName": "SEEMA SHARMA",
            "fatherMobile": "+91 7409588071",
            "address": "BAGI NAGLA  CHIRAURI BULANDSHAHR"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 82,
            "percentage": 93.2
        },
        "feeSummary": {
            "totalDue": 22500,
            "totalPaid": 0,
            "balance": 22500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-541",
        "sqlId": "672",
        "admissionNo": "942",
        "rollNo": "0",
        "name": "ARAV KUMAR",
        "dob": "2022-12-13",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "NURSERY",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "KAILASH KUMAR",
            "motherName": "SANGEETA DEVI",
            "fatherMobile": "+91 7505228198",
            "address": "KALIYANPUR"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 83,
            "percentage": 94.3
        },
        "feeSummary": {
            "totalDue": 24000,
            "totalPaid": 0,
            "balance": 24000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-542",
        "sqlId": "673",
        "admissionNo": "937",
        "rollNo": "0",
        "name": "BHASKAR",
        "dob": "1970-01-01",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "LKG",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "DEVDUTTA",
            "motherName": "CHANDRAPRABHA",
            "fatherMobile": "+91 8384814903",
            "address": "NAGLA GARVI"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 84,
            "percentage": 95.5
        },
        "feeSummary": {
            "totalDue": 25500,
            "totalPaid": 0,
            "balance": 25500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-543",
        "sqlId": "674",
        "admissionNo": "936",
        "rollNo": "0",
        "name": "ADESH",
        "dob": "2021-10-21",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "LKG",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "NEMPAL KUMAR",
            "motherName": "BABITA",
            "fatherMobile": "+91 7018264597",
            "address": "SAME"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 85,
            "percentage": 96.6
        },
        "feeSummary": {
            "totalDue": 27000,
            "totalPaid": 0,
            "balance": 27000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-544",
        "sqlId": "675",
        "admissionNo": "931",
        "rollNo": "0",
        "name": "MAHI",
        "dob": "2024-01-01",
        "gender": "female",
        "bloodGroup": "O+",
        "class": "PG",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "HARIOM",
            "motherName": "KIRTI",
            "fatherMobile": "+91 8279963704",
            "address": "SAME"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 86,
            "percentage": 97.7
        },
        "feeSummary": {
            "totalDue": 28500,
            "totalPaid": 0,
            "balance": 28500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-545",
        "sqlId": "676",
        "admissionNo": "943",
        "rollNo": "219",
        "name": "PRACHI",
        "dob": "2014-05-01",
        "gender": "female",
        "bloodGroup": "O+",
        "class": "II",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "PRAMOD KUMAR",
            "motherName": "NIRVESH",
            "fatherMobile": "+91 8810389748",
            "address": "KALIYANPUR"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 87,
            "percentage": 98.9
        },
        "feeSummary": {
            "totalDue": 18000,
            "totalPaid": 0,
            "balance": 18000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-546",
        "sqlId": "677",
        "admissionNo": "944",
        "rollNo": "0",
        "name": "MAYANK",
        "dob": "2022-07-27",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "LKG",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "PAPPU SINGH",
            "motherName": "FOOLMALA",
            "fatherMobile": "+91 9758566371",
            "address": "DADAR ALUPURA"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 88,
            "percentage": 100.0
        },
        "feeSummary": {
            "totalDue": 19500,
            "totalPaid": 0,
            "balance": 19500,
            "status": "Pending"
        },
        "siblings": [
            "STU-2026-547"
        ]
    },
    {
        "id": "STU-2026-547",
        "sqlId": "678",
        "admissionNo": "945",
        "rollNo": "0",
        "name": "MANVI",
        "dob": "2021-10-21",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "NURSERY",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "PAPPU SINGH",
            "motherName": "FOOLMALA",
            "fatherMobile": "+91 9758566371",
            "address": "DADAR ALUPURA"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 82,
            "percentage": 93.2
        },
        "feeSummary": {
            "totalDue": 21000,
            "totalPaid": 0,
            "balance": 21000,
            "status": "Pending"
        },
        "siblings": [
            "STU-2026-546"
        ]
    },
    {
        "id": "STU-2026-548",
        "sqlId": "679",
        "admissionNo": "887",
        "rollNo": "185",
        "name": "RAJAT",
        "dob": "2016-06-14",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "III",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "PAWAN",
            "motherName": "SHAKUNTALA",
            "fatherMobile": "+91 1",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 83,
            "percentage": 94.3
        },
        "feeSummary": {
            "totalDue": 22500,
            "totalPaid": 0,
            "balance": 22500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-549",
        "sqlId": "680",
        "admissionNo": "947",
        "rollNo": "72",
        "name": "ADITYA",
        "dob": "2012-11-28",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "VI",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "SURESH CHANDRA",
            "motherName": "SANTOSH DEVI",
            "fatherMobile": "+91 9305643279",
            "address": "PESARI"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 84,
            "percentage": 95.5
        },
        "feeSummary": {
            "totalDue": 24000,
            "totalPaid": 0,
            "balance": 24000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-550",
        "sqlId": "681",
        "admissionNo": "948",
        "rollNo": "8",
        "name": "KULDEEP KUMAR",
        "dob": "2016-04-12",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "V",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "GAJENDRA SINGH",
            "motherName": "BHAWANA DEVI",
            "fatherMobile": "+91 9958115857",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 85,
            "percentage": 96.6
        },
        "feeSummary": {
            "totalDue": 25500,
            "totalPaid": 0,
            "balance": 25500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-551",
        "sqlId": "682",
        "admissionNo": "946",
        "rollNo": "196",
        "name": "VIVEK KUMAR",
        "dob": "2017-02-01",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "III",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "MURARILAL",
            "motherName": "ASHA DEVI",
            "fatherMobile": "+91 7678265395",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 86,
            "percentage": 97.7
        },
        "feeSummary": {
            "totalDue": 27000,
            "totalPaid": 0,
            "balance": 27000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-552",
        "sqlId": "683",
        "admissionNo": "9",
        "rollNo": "196",
        "name": "TANISHKA",
        "dob": "1970-01-01",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "I",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "MURARILAL",
            "motherName": "ASHA DEVI",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 87,
            "percentage": 98.9
        },
        "feeSummary": {
            "totalDue": 28500,
            "totalPaid": 0,
            "balance": 28500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-553",
        "sqlId": "684",
        "admissionNo": "949",
        "rollNo": "0",
        "name": "SURJEET",
        "dob": "1970-01-01",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "I",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "LEELADHAR",
            "motherName": "SHUSHILA DEVI",
            "fatherMobile": "+91 7409641142",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 88,
            "percentage": 100.0
        },
        "feeSummary": {
            "totalDue": 18000,
            "totalPaid": 0,
            "balance": 18000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-554",
        "sqlId": "685",
        "admissionNo": "950",
        "rollNo": "0",
        "name": "HARSHVARDHAN",
        "dob": "2020-05-23",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "LKG",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "AVDESH KUMAR",
            "motherName": "LALITESH",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 82,
            "percentage": 93.2
        },
        "feeSummary": {
            "totalDue": 19500,
            "totalPaid": 0,
            "balance": 19500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-555",
        "sqlId": "687",
        "admissionNo": "953",
        "rollNo": "0",
        "name": "TANISHKA",
        "dob": "1970-01-01",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "LKG",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "JITENDRA KUMAR",
            "motherName": "CHANCHAL",
            "fatherMobile": "+91 9899395892",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 83,
            "percentage": 94.3
        },
        "feeSummary": {
            "totalDue": 21000,
            "totalPaid": 0,
            "balance": 21000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-556",
        "sqlId": "688",
        "admissionNo": "954",
        "rollNo": "0",
        "name": "KANISHKA",
        "dob": "2020-07-18",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "UKG",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "SONU KUMAR",
            "motherName": "SHUSHILA DEVI",
            "fatherMobile": "+91 9910912997",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 84,
            "percentage": 95.5
        },
        "feeSummary": {
            "totalDue": 22500,
            "totalPaid": 0,
            "balance": 22500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-557",
        "sqlId": "689",
        "admissionNo": "952",
        "rollNo": "0",
        "name": "LAXMI",
        "dob": "2019-09-11",
        "gender": "female",
        "bloodGroup": "O+",
        "class": "UKG",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "RAJKUMAR",
            "motherName": "BHARTI YADAV",
            "fatherMobile": "+91 8920537215",
            "address": "JARGWAN DIBAI BULANDSHAR"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 85,
            "percentage": 96.6
        },
        "feeSummary": {
            "totalDue": 24000,
            "totalPaid": 0,
            "balance": 24000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-558",
        "sqlId": "690",
        "admissionNo": "955",
        "rollNo": "222",
        "name": "RUCHI",
        "dob": "2017-05-16",
        "gender": "female",
        "bloodGroup": "O+",
        "class": "II",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "ARVIND KUMAR",
            "motherName": "BABITA",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 86,
            "percentage": 97.7
        },
        "feeSummary": {
            "totalDue": 25500,
            "totalPaid": 0,
            "balance": 25500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-559",
        "sqlId": "691",
        "admissionNo": "934",
        "rollNo": "0",
        "name": "SANDEEP KUMAR",
        "dob": "2011-07-20",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "IV",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "OMKAR",
            "motherName": "SEEMA",
            "fatherMobile": "+91 9758529951",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 87,
            "percentage": 98.9
        },
        "feeSummary": {
            "totalDue": 27000,
            "totalPaid": 0,
            "balance": 27000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-560",
        "sqlId": "692",
        "admissionNo": "957",
        "rollNo": "185",
        "name": "NITIN",
        "dob": "2014-08-15",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "III",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "PAWAN",
            "motherName": "SHAKUNTALA",
            "fatherMobile": "+91 9068049589",
            "address": "JARGWAN"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 88,
            "percentage": 100.0
        },
        "feeSummary": {
            "totalDue": 28500,
            "totalPaid": 0,
            "balance": 28500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-561",
        "sqlId": "693",
        "admissionNo": "925",
        "rollNo": "0",
        "name": "AAROHI SHARMA",
        "dob": "2023-04-23",
        "gender": "female",
        "bloodGroup": "O+",
        "class": "NURSERY",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 82,
            "percentage": 93.2
        },
        "feeSummary": {
            "totalDue": 18000,
            "totalPaid": 0,
            "balance": 18000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-562",
        "sqlId": "694",
        "admissionNo": "926",
        "rollNo": "0",
        "name": "ARPIT KUMAR",
        "dob": "2020-12-27",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "NURSERY",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "MANAK CHANDRA",
            "motherName": "SOMVATI DEVI",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 83,
            "percentage": 94.3
        },
        "feeSummary": {
            "totalDue": 19500,
            "totalPaid": 0,
            "balance": 19500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-563",
        "sqlId": "695",
        "admissionNo": "970",
        "rollNo": "0",
        "name": "KULSHEKHAR",
        "dob": "2020-08-11",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "I",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "Parent",
            "motherName": "Mother",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 84,
            "percentage": 95.5
        },
        "feeSummary": {
            "totalDue": 21000,
            "totalPaid": 0,
            "balance": 21000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-564",
        "sqlId": "696",
        "admissionNo": "961",
        "rollNo": "0",
        "name": "TAMANNA",
        "dob": "2016-12-15",
        "gender": "female",
        "bloodGroup": "O+",
        "class": "I",
        "section": "A",
        "house": "Hercules (Green House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "CHHOTELAL",
            "motherName": "PREMLATA",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 85,
            "percentage": 96.6
        },
        "feeSummary": {
            "totalDue": 22500,
            "totalPaid": 0,
            "balance": 22500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-565",
        "sqlId": "697",
        "admissionNo": "884",
        "rollNo": "346",
        "name": "KRISHNA YADAV",
        "dob": "1970-01-01",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "VI",
        "section": "A",
        "house": "Phoenix (Red House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "UMESH YADAV",
            "motherName": "VAVLI",
            "fatherMobile": "+91 9557559627",
            "address": "KATAK NARUPURA"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 86,
            "percentage": 97.7
        },
        "feeSummary": {
            "totalDue": 24000,
            "totalPaid": 0,
            "balance": 24000,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-566",
        "sqlId": "698",
        "admissionNo": "875",
        "rollNo": "348",
        "name": "SEJAL",
        "dob": "2018-05-18",
        "gender": "female",
        "bloodGroup": "O+",
        "class": "II",
        "section": "A",
        "house": "Pegasus (Blue House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "DEEPAK KUMAR",
            "motherName": "KIRAN",
            "fatherMobile": "+91 9758689700",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 87,
            "percentage": 98.9
        },
        "feeSummary": {
            "totalDue": 25500,
            "totalPaid": 0,
            "balance": 25500,
            "status": "Pending"
        },
        "siblings": []
    },
    {
        "id": "STU-2026-567",
        "sqlId": "699",
        "admissionNo": "876",
        "rollNo": "348",
        "name": "VEER",
        "dob": "2019-05-07",
        "gender": "male",
        "bloodGroup": "O+",
        "class": "II",
        "section": "A",
        "house": "Orion (Yellow House)",
        "classTeacher": "PRAMOD KUMAR SHARMA",
        "status": "Active",
        "branchId": "BR-01",
        "branchName": "Dadheech Memorial Public School (Main Campus)",
        "parents": {
            "fatherName": "DEEPAK KUMAR",
            "motherName": "KIRAN",
            "fatherMobile": "+91 97194 76606",
            "address": "Aligarh / Jargwan"
        },
        "transport": {
            "isEnrolled": false,
            "route": "Walk-in",
            "stop": "Self Conveyance / Near Campus",
            "monthlyFare": 0,
            "isPaid": false
        },
        "attendanceSummary": {
            "totalDays": 88,
            "presentDays": 88,
            "percentage": 100.0
        },
        "feeSummary": {
            "totalDue": 27000,
            "totalPaid": 0,
            "balance": 27000,
            "status": "Pending"
        },
        "siblings": []
    }
],

  transportVehicles: [
    {
        "id": "VEH-01",
        "vehicleNo": "MAGIC - 5410",
        "type": "Tata Magic",
        "capacity": 25,
        "driverName": "HEMRAJ SINGH",
        "driverPhone": "+91 93895 71572",
        "status": "Active",
        "insuranceExpiry": "2027-04-15"
    },
    {
        "id": "VEH-02",
        "vehicleNo": "MAHINDRA - 1249",
        "type": "Mahindra Maxi",
        "capacity": 50,
        "driverName": "RAJENDRA SINGH",
        "driverPhone": "+91 98375 24874",
        "status": "Active",
        "insuranceExpiry": "2027-06-20"
    },
    {
        "id": "VEH-03",
        "vehicleNo": "SML - 8115",
        "type": "SML Bus",
        "capacity": 50,
        "driverName": "CHOKHELAL",
        "driverPhone": "+91 96270 66424",
        "status": "Active",
        "insuranceExpiry": "2027-05-10"
    },
    {
        "id": "VEH-04",
        "vehicleNo": "MAGIC - 2283",
        "type": "Tata Magic",
        "capacity": 25,
        "driverName": "SONU YADAV",
        "driverPhone": "+91 96277 39384",
        "status": "Active",
        "insuranceExpiry": "2027-07-25"
    }
],

  transportRoutes: [
    {
        "id": "RT-01",
        "name": "NAGLA DHARAKPUR SIDE (HEMRAJ-1)",
        "vehicleId": "VEH-01",
        "stops": [
            "BAIJALA",
            "NAGLA DHARAKPUR",
            "BAJHERA",
            "DHARAKPUR",
            "NAGLA GARVI"
        ],
        "monthlyFare": 600
    },
    {
        "id": "RT-02",
        "name": "KALIYANPUR SIDE (RAJENDRA-1)",
        "vehicleId": "VEH-02",
        "stops": [
            "KALIYANPUR PLANT",
            "KALIYANPUR CHAKKI",
            "KALIYANPUR CHAURAHA",
            "DADHAR",
            "KUNJALPUR",
            "LOHGARH",
            "JIROULI"
        ],
        "monthlyFare": 750
    },
    {
        "id": "RT-03",
        "name": "GANGAGARH SIDE (CHOKHELAL-2)",
        "vehicleId": "VEH-03",
        "stops": [
            "GANGAGARH ROAD",
            "MOUNIPURA",
            "NAGLA SHUMALI",
            "CHIROURI",
            "BAGI NAGLA",
            "KUDHAINI"
        ],
        "monthlyFare": 700
    },
    {
        "id": "RT-04",
        "name": "KUDHAINI SIDE (HEMRAJ-2)",
        "vehicleId": "VEH-01",
        "stops": [
            "KUDHAINI",
            "UNCHAGAON",
            "JARGWAN MARKET",
            "MUHAMMADPUR"
        ],
        "monthlyFare": 650
    },
    {
        "id": "RT-05",
        "name": "UNCHAGAON SIDE (CHOKELAL-1)",
        "vehicleId": "VEH-03",
        "stops": [
            "UNCHAGAON",
            "PESARI",
            "BANJARA NAGLA",
            "GANGAGARH CHAMAD",
            "SILHARI"
        ],
        "monthlyFare": 800
    },
    {
        "id": "RT-06",
        "name": "GANESHPUR SIDE (RAJENDRA-2)",
        "vehicleId": "VEH-02",
        "stops": [
            "GANESHPUR",
            "MALAHPUR",
            "RAMGHAT",
            "MAHARAJPUR",
            "CHAKATHAL",
            "MAHAKA"
        ],
        "monthlyFare": 850
    }
],

  biometricSettings: {
    deviceModel: "Secureye S-FB3K (IP Face & Fingerprint Reader)",
    serialNumber: "102025020000143",
    macAddress: "00:23:79:BB:C1:49",
    ipAddress: "192.168.31.43",
    port: 4370,
    commKey: "0",
    connectionType: "Wi-Fi (Wireless)",
    branchId: "BR-01",
    autoSyncInterval: "5",
    status: "Online",
    shifts: {
      teachers: {
        title: "Teachers & Academic Faculty",
        arrivalCutoff: "07:45 AM",
        halfDayWindow: "09:00 AM - 12:30 PM",
        departureTime: "02:15 PM (14:15)"
      },
      supportStaff: {
        title: "Drivers & Cleaning Staff",
        shiftStart: "04:30 AM",
        shiftEnd: "07:30 PM (19:30)"
      },
      management: {
        title: "Principal & Manager",
        shiftType: "24x7 Flexible (Always On Duty)"
      }
    },
    rules: {
      singlePunchMissAction: "Half-Day",
      bothPunchesMissAction: "Absent",
      absentPenaltyMultiplier: 2,
      leaveDeductionMultiplier: 1,
      sandwichRuleEnabled: true
    }
  },

  biometricLogs: [
    {
        "id": "PUNCH-2026-08-01-TCH-1001",
        "employeeId": "EMP-2026-001",
        "staffId": "TCH-1001",
        "name": "Super Admin (Prashant)",
        "designation": "Teacher",
        "department": "Academics",
        "punchDate": "2026-08-01",
        "inTime": "07:16:10 AM",
        "outTime": "02:15:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-01-TCH-1002",
        "employeeId": "EMP-2026-002",
        "staffId": "TCH-1002",
        "name": "PRAMOD KUMAR",
        "designation": "Managing Director",
        "department": "Administration",
        "punchDate": "2026-08-01",
        "inTime": "07:19:17 AM",
        "outTime": "02:17:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-01-TCH-1003",
        "employeeId": "EMP-2026-003",
        "staffId": "TCH-1003",
        "name": "BHOOMI YADAV",
        "designation": "Teacher",
        "department": "Junior",
        "punchDate": "2026-08-01",
        "inTime": "07:22:24 AM",
        "outTime": "02:19:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-01-TCH-1004",
        "employeeId": "EMP-2026-004",
        "staffId": "TCH-1004",
        "name": "POORAN SINGH",
        "designation": "Teacher",
        "department": "Secondary",
        "punchDate": "2026-08-01",
        "inTime": "07:25:31 AM",
        "outTime": "02:21:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-01-TCH-1005",
        "employeeId": "EMP-2026-005",
        "staffId": "TCH-1005",
        "name": "SHWETA RAGHAV",
        "designation": "Teacher",
        "department": "Secondary",
        "punchDate": "2026-08-01",
        "inTime": "07:28:38 AM",
        "outTime": "02:23:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-01-TCH-1006",
        "employeeId": "EMP-2026-006",
        "staffId": "TCH-1006",
        "name": "SWATI RAGHAV",
        "designation": "Teacher",
        "department": "Primary",
        "punchDate": "2026-08-01",
        "inTime": "07:31:45 AM",
        "outTime": "02:25:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-01-TCH-1007",
        "employeeId": "EMP-2026-007",
        "staffId": "TCH-1007",
        "name": "AKHILESH AGRAWAL",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-01",
        "inTime": "07:34:52 AM",
        "outTime": "02:27:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-01-TCH-1008",
        "employeeId": "EMP-2026-008",
        "staffId": "TCH-1008",
        "name": "PREMLATA DEVI",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-01",
        "inTime": "07:37:59 AM",
        "outTime": "02:29:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-01-TCH-1009",
        "employeeId": "EMP-2026-009",
        "staffId": "TCH-1009",
        "name": "SANJANA PATHAK",
        "designation": "Teacher",
        "department": "Junior",
        "punchDate": "2026-08-01",
        "inTime": "07:54:16 AM",
        "outTime": "02:31:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "Late Arrival"
    },
    {
        "id": "PUNCH-2026-08-01-TCH-1010",
        "employeeId": "EMP-2026-010",
        "staffId": "TCH-1010",
        "name": "RACHANA DEVI",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-01",
        "inTime": "07:18:23 AM",
        "outTime": "02:33:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-01-TCH-1011",
        "employeeId": "EMP-2026-011",
        "staffId": "TCH-1011",
        "name": "PRAMOD KUMAR SHARMA",
        "designation": "Teacher",
        "department": "Secondary",
        "punchDate": "2026-08-01",
        "inTime": "07:21:30 AM",
        "outTime": "02:35:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-01-TCH-1012",
        "employeeId": "EMP-2026-012",
        "staffId": "TCH-1012",
        "name": "MOHINI CHAUHAN",
        "designation": "Teacher",
        "department": "Primary",
        "punchDate": "2026-08-01",
        "inTime": "07:24:37 AM",
        "outTime": "02:37:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-01-TCH-1013",
        "employeeId": "EMP-2026-013",
        "staffId": "TCH-1013",
        "name": "RAJENDRA SINGH",
        "designation": "Teacher",
        "department": "Primary",
        "punchDate": "2026-08-01",
        "inTime": "07:27:44 AM",
        "outTime": "02:39:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-01-TCH-1014",
        "employeeId": "EMP-2026-014",
        "staffId": "TCH-1014",
        "name": "JAYMALA",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-01",
        "inTime": "07:30:51 AM",
        "outTime": "02:41:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-01-TCH-1015",
        "employeeId": "EMP-2026-015",
        "staffId": "TCH-1015",
        "name": "LALIT KUMAR",
        "designation": "Teacher",
        "department": "Secondary",
        "punchDate": "2026-08-01",
        "inTime": "07:33:58 AM",
        "outTime": "02:43:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-01-TCH-1016",
        "employeeId": "EMP-2026-016",
        "staffId": "TCH-1016",
        "name": "CHOKHELAL",
        "designation": "Driver",
        "department": "Transport",
        "punchDate": "2026-08-01",
        "inTime": "07:36:15 AM",
        "outTime": "02:15:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-01-TCH-1017",
        "employeeId": "EMP-2026-017",
        "staffId": "TCH-1017",
        "name": "NEETU SHARMA",
        "designation": "Teacher",
        "department": "Junior",
        "punchDate": "2026-08-01",
        "inTime": "07:39:22 AM",
        "outTime": "02:17:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-01-TCH-1018",
        "employeeId": "EMP-2026-018",
        "staffId": "TCH-1018",
        "name": "SONU KUMAR",
        "designation": "Driver",
        "department": "Transport",
        "punchDate": "2026-08-01",
        "inTime": "07:54:29 AM",
        "outTime": "02:19:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "Late Arrival"
    },
    {
        "id": "PUNCH-2026-08-01-TCH-1019",
        "employeeId": "EMP-2026-019",
        "staffId": "TCH-1019",
        "name": "Prashant Kumar Rajput",
        "designation": "Principal",
        "department": "Senior Secondary",
        "punchDate": "2026-08-01",
        "inTime": "07:20:36 AM",
        "outTime": "02:21:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-01-TCH-1020",
        "employeeId": "EMP-2026-020",
        "staffId": "TCH-1020",
        "name": "KHUSHI",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-01",
        "inTime": "07:23:43 AM",
        "outTime": "02:23:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-01-TCH-1021",
        "employeeId": "EMP-2026-021",
        "staffId": "TCH-1021",
        "name": "SANDHYA",
        "designation": "Teacher",
        "department": "Primary",
        "punchDate": "2026-08-01",
        "inTime": "07:26:50 AM",
        "outTime": "02:25:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-01-TCH-1022",
        "employeeId": "EMP-2026-022",
        "staffId": "TCH-1022",
        "name": "Aarti",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-01",
        "inTime": "07:29:57 AM",
        "outTime": "02:27:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-03-TCH-1001",
        "employeeId": "EMP-2026-001",
        "staffId": "TCH-1001",
        "name": "Super Admin (Prashant)",
        "designation": "Teacher",
        "department": "Academics",
        "punchDate": "2026-08-03",
        "inTime": "07:18:10 AM",
        "outTime": "02:15:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-03-TCH-1002",
        "employeeId": "EMP-2026-002",
        "staffId": "TCH-1002",
        "name": "PRAMOD KUMAR",
        "designation": "Managing Director",
        "department": "Administration",
        "punchDate": "2026-08-03",
        "inTime": "07:21:17 AM",
        "outTime": "02:17:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-03-TCH-1003",
        "employeeId": "EMP-2026-003",
        "staffId": "TCH-1003",
        "name": "BHOOMI YADAV",
        "designation": "Teacher",
        "department": "Junior",
        "punchDate": "2026-08-03",
        "inTime": "07:24:24 AM",
        "outTime": "02:19:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-03-TCH-1004",
        "employeeId": "EMP-2026-004",
        "staffId": "TCH-1004",
        "name": "POORAN SINGH",
        "designation": "Teacher",
        "department": "Secondary",
        "punchDate": "2026-08-03",
        "inTime": "07:27:31 AM",
        "outTime": "02:21:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-03-TCH-1005",
        "employeeId": "EMP-2026-005",
        "staffId": "TCH-1005",
        "name": "SHWETA RAGHAV",
        "designation": "Teacher",
        "department": "Secondary",
        "punchDate": "2026-08-03",
        "inTime": "07:30:38 AM",
        "outTime": "02:23:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-03-TCH-1006",
        "employeeId": "EMP-2026-006",
        "staffId": "TCH-1006",
        "name": "SWATI RAGHAV",
        "designation": "Teacher",
        "department": "Primary",
        "punchDate": "2026-08-03",
        "inTime": "07:33:45 AM",
        "outTime": "02:25:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-03-TCH-1007",
        "employeeId": "EMP-2026-007",
        "staffId": "TCH-1007",
        "name": "AKHILESH AGRAWAL",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-03",
        "inTime": "07:54:52 AM",
        "outTime": "02:27:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "Late Arrival"
    },
    {
        "id": "PUNCH-2026-08-03-TCH-1008",
        "employeeId": "EMP-2026-008",
        "staffId": "TCH-1008",
        "name": "PREMLATA DEVI",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-03",
        "inTime": "07:39:59 AM",
        "outTime": "02:29:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-03-TCH-1009",
        "employeeId": "EMP-2026-009",
        "staffId": "TCH-1009",
        "name": "SANJANA PATHAK",
        "designation": "Teacher",
        "department": "Junior",
        "punchDate": "2026-08-03",
        "inTime": "07:17:16 AM",
        "outTime": "02:31:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-03-TCH-1010",
        "employeeId": "EMP-2026-010",
        "staffId": "TCH-1010",
        "name": "RACHANA DEVI",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-03",
        "inTime": "07:20:23 AM",
        "outTime": "02:33:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-03-TCH-1011",
        "employeeId": "EMP-2026-011",
        "staffId": "TCH-1011",
        "name": "PRAMOD KUMAR SHARMA",
        "designation": "Teacher",
        "department": "Secondary",
        "punchDate": "2026-08-03",
        "inTime": "07:23:30 AM",
        "outTime": "02:35:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-03-TCH-1012",
        "employeeId": "EMP-2026-012",
        "staffId": "TCH-1012",
        "name": "MOHINI CHAUHAN",
        "designation": "Teacher",
        "department": "Primary",
        "punchDate": "2026-08-03",
        "inTime": "07:26:37 AM",
        "outTime": "02:37:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-03-TCH-1013",
        "employeeId": "EMP-2026-013",
        "staffId": "TCH-1013",
        "name": "RAJENDRA SINGH",
        "designation": "Teacher",
        "department": "Primary",
        "punchDate": "2026-08-03",
        "inTime": "07:29:44 AM",
        "outTime": "02:39:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-03-TCH-1014",
        "employeeId": "EMP-2026-014",
        "staffId": "TCH-1014",
        "name": "JAYMALA",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-03",
        "inTime": "07:32:51 AM",
        "outTime": "02:41:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-03-TCH-1015",
        "employeeId": "EMP-2026-015",
        "staffId": "TCH-1015",
        "name": "LALIT KUMAR",
        "designation": "Teacher",
        "department": "Secondary",
        "punchDate": "2026-08-03",
        "inTime": "07:35:58 AM",
        "outTime": "02:43:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-03-TCH-1016",
        "employeeId": "EMP-2026-016",
        "staffId": "TCH-1016",
        "name": "CHOKHELAL",
        "designation": "Driver",
        "department": "Transport",
        "punchDate": "2026-08-03",
        "inTime": "07:54:15 AM",
        "outTime": "02:15:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "Late Arrival"
    },
    {
        "id": "PUNCH-2026-08-03-TCH-1017",
        "employeeId": "EMP-2026-017",
        "staffId": "TCH-1017",
        "name": "NEETU SHARMA",
        "designation": "Teacher",
        "department": "Junior",
        "punchDate": "2026-08-03",
        "inTime": "07:16:22 AM",
        "outTime": "02:17:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-03-TCH-1018",
        "employeeId": "EMP-2026-018",
        "staffId": "TCH-1018",
        "name": "SONU KUMAR",
        "designation": "Driver",
        "department": "Transport",
        "punchDate": "2026-08-03",
        "inTime": "07:19:29 AM",
        "outTime": "02:19:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-03-TCH-1019",
        "employeeId": "EMP-2026-019",
        "staffId": "TCH-1019",
        "name": "Prashant Kumar Rajput",
        "designation": "Principal",
        "department": "Senior Secondary",
        "punchDate": "2026-08-03",
        "inTime": "07:22:36 AM",
        "outTime": "02:21:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-03-TCH-1020",
        "employeeId": "EMP-2026-020",
        "staffId": "TCH-1020",
        "name": "KHUSHI",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-03",
        "inTime": "07:25:43 AM",
        "outTime": "02:23:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-03-TCH-1022",
        "employeeId": "EMP-2026-022",
        "staffId": "TCH-1022",
        "name": "Aarti",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-03",
        "inTime": "07:31:57 AM",
        "outTime": "02:27:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-03-TCH-1023",
        "employeeId": "EMP-2026-023",
        "staffId": "TCH-1023",
        "name": "SEJAL AGRAWAL",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-03",
        "inTime": "07:34:14 AM",
        "outTime": "02:29:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-04-TCH-1001",
        "employeeId": "EMP-2026-001",
        "staffId": "TCH-1001",
        "name": "Super Admin (Prashant)",
        "designation": "Teacher",
        "department": "Academics",
        "punchDate": "2026-08-04",
        "inTime": "07:19:10 AM",
        "outTime": "02:15:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-04-TCH-1002",
        "employeeId": "EMP-2026-002",
        "staffId": "TCH-1002",
        "name": "PRAMOD KUMAR",
        "designation": "Managing Director",
        "department": "Administration",
        "punchDate": "2026-08-04",
        "inTime": "07:22:17 AM",
        "outTime": "02:17:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-04-TCH-1003",
        "employeeId": "EMP-2026-003",
        "staffId": "TCH-1003",
        "name": "BHOOMI YADAV",
        "designation": "Teacher",
        "department": "Junior",
        "punchDate": "2026-08-04",
        "inTime": "07:25:24 AM",
        "outTime": "02:19:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-04-TCH-1004",
        "employeeId": "EMP-2026-004",
        "staffId": "TCH-1004",
        "name": "POORAN SINGH",
        "designation": "Teacher",
        "department": "Secondary",
        "punchDate": "2026-08-04",
        "inTime": "07:28:31 AM",
        "outTime": "02:21:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-04-TCH-1005",
        "employeeId": "EMP-2026-005",
        "staffId": "TCH-1005",
        "name": "SHWETA RAGHAV",
        "designation": "Teacher",
        "department": "Secondary",
        "punchDate": "2026-08-04",
        "inTime": "07:31:38 AM",
        "outTime": "02:23:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-04-TCH-1006",
        "employeeId": "EMP-2026-006",
        "staffId": "TCH-1006",
        "name": "SWATI RAGHAV",
        "designation": "Teacher",
        "department": "Primary",
        "punchDate": "2026-08-04",
        "inTime": "07:54:45 AM",
        "outTime": "02:25:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "Late Arrival"
    },
    {
        "id": "PUNCH-2026-08-04-TCH-1007",
        "employeeId": "EMP-2026-007",
        "staffId": "TCH-1007",
        "name": "AKHILESH AGRAWAL",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-04",
        "inTime": "07:37:52 AM",
        "outTime": "02:27:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-04-TCH-1008",
        "employeeId": "EMP-2026-008",
        "staffId": "TCH-1008",
        "name": "PREMLATA DEVI",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-04",
        "inTime": "07:15:59 AM",
        "outTime": "02:29:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-04-TCH-1009",
        "employeeId": "EMP-2026-009",
        "staffId": "TCH-1009",
        "name": "SANJANA PATHAK",
        "designation": "Teacher",
        "department": "Junior",
        "punchDate": "2026-08-04",
        "inTime": "07:18:16 AM",
        "outTime": "02:31:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-04-TCH-1010",
        "employeeId": "EMP-2026-010",
        "staffId": "TCH-1010",
        "name": "RACHANA DEVI",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-04",
        "inTime": "07:21:23 AM",
        "outTime": "02:33:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-04-TCH-1011",
        "employeeId": "EMP-2026-011",
        "staffId": "TCH-1011",
        "name": "PRAMOD KUMAR SHARMA",
        "designation": "Teacher",
        "department": "Secondary",
        "punchDate": "2026-08-04",
        "inTime": "07:24:30 AM",
        "outTime": "02:35:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-04-TCH-1012",
        "employeeId": "EMP-2026-012",
        "staffId": "TCH-1012",
        "name": "MOHINI CHAUHAN",
        "designation": "Teacher",
        "department": "Primary",
        "punchDate": "2026-08-04",
        "inTime": "07:27:37 AM",
        "outTime": "02:37:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-04-TCH-1013",
        "employeeId": "EMP-2026-013",
        "staffId": "TCH-1013",
        "name": "RAJENDRA SINGH",
        "designation": "Teacher",
        "department": "Primary",
        "punchDate": "2026-08-04",
        "inTime": "07:30:44 AM",
        "outTime": "02:39:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-04-TCH-1014",
        "employeeId": "EMP-2026-014",
        "staffId": "TCH-1014",
        "name": "JAYMALA",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-04",
        "inTime": "07:33:51 AM",
        "outTime": "02:41:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-04-TCH-1015",
        "employeeId": "EMP-2026-015",
        "staffId": "TCH-1015",
        "name": "LALIT KUMAR",
        "designation": "Teacher",
        "department": "Secondary",
        "punchDate": "2026-08-04",
        "inTime": "07:54:58 AM",
        "outTime": "02:43:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "Late Arrival"
    },
    {
        "id": "PUNCH-2026-08-04-TCH-1016",
        "employeeId": "EMP-2026-016",
        "staffId": "TCH-1016",
        "name": "CHOKHELAL",
        "designation": "Driver",
        "department": "Transport",
        "punchDate": "2026-08-04",
        "inTime": "07:39:15 AM",
        "outTime": "02:15:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-04-TCH-1017",
        "employeeId": "EMP-2026-017",
        "staffId": "TCH-1017",
        "name": "NEETU SHARMA",
        "designation": "Teacher",
        "department": "Junior",
        "punchDate": "2026-08-04",
        "inTime": "07:17:22 AM",
        "outTime": "02:17:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-04-TCH-1018",
        "employeeId": "EMP-2026-018",
        "staffId": "TCH-1018",
        "name": "SONU KUMAR",
        "designation": "Driver",
        "department": "Transport",
        "punchDate": "2026-08-04",
        "inTime": "07:20:29 AM",
        "outTime": "02:19:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-04-TCH-1019",
        "employeeId": "EMP-2026-019",
        "staffId": "TCH-1019",
        "name": "Prashant Kumar Rajput",
        "designation": "Principal",
        "department": "Senior Secondary",
        "punchDate": "2026-08-04",
        "inTime": "07:23:36 AM",
        "outTime": "02:21:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-04-TCH-1021",
        "employeeId": "EMP-2026-021",
        "staffId": "TCH-1021",
        "name": "SANDHYA",
        "designation": "Teacher",
        "department": "Primary",
        "punchDate": "2026-08-04",
        "inTime": "07:29:50 AM",
        "outTime": "02:25:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-04-TCH-1022",
        "employeeId": "EMP-2026-022",
        "staffId": "TCH-1022",
        "name": "Aarti",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-04",
        "inTime": "07:32:57 AM",
        "outTime": "02:27:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-04-TCH-1023",
        "employeeId": "EMP-2026-023",
        "staffId": "TCH-1023",
        "name": "SEJAL AGRAWAL",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-04",
        "inTime": "07:35:14 AM",
        "outTime": "02:29:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-05-TCH-1001",
        "employeeId": "EMP-2026-001",
        "staffId": "TCH-1001",
        "name": "Super Admin (Prashant)",
        "designation": "Teacher",
        "department": "Academics",
        "punchDate": "2026-08-05",
        "inTime": "07:20:10 AM",
        "outTime": "02:15:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-05-TCH-1002",
        "employeeId": "EMP-2026-002",
        "staffId": "TCH-1002",
        "name": "PRAMOD KUMAR",
        "designation": "Managing Director",
        "department": "Administration",
        "punchDate": "2026-08-05",
        "inTime": "07:23:17 AM",
        "outTime": "02:17:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-05-TCH-1003",
        "employeeId": "EMP-2026-003",
        "staffId": "TCH-1003",
        "name": "BHOOMI YADAV",
        "designation": "Teacher",
        "department": "Junior",
        "punchDate": "2026-08-05",
        "inTime": "07:26:24 AM",
        "outTime": "02:19:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-05-TCH-1004",
        "employeeId": "EMP-2026-004",
        "staffId": "TCH-1004",
        "name": "POORAN SINGH",
        "designation": "Teacher",
        "department": "Secondary",
        "punchDate": "2026-08-05",
        "inTime": "07:29:31 AM",
        "outTime": "02:21:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-05-TCH-1005",
        "employeeId": "EMP-2026-005",
        "staffId": "TCH-1005",
        "name": "SHWETA RAGHAV",
        "designation": "Teacher",
        "department": "Secondary",
        "punchDate": "2026-08-05",
        "inTime": "07:54:38 AM",
        "outTime": "02:23:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "Late Arrival"
    },
    {
        "id": "PUNCH-2026-08-05-TCH-1006",
        "employeeId": "EMP-2026-006",
        "staffId": "TCH-1006",
        "name": "SWATI RAGHAV",
        "designation": "Teacher",
        "department": "Primary",
        "punchDate": "2026-08-05",
        "inTime": "07:35:45 AM",
        "outTime": "02:25:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-05-TCH-1007",
        "employeeId": "EMP-2026-007",
        "staffId": "TCH-1007",
        "name": "AKHILESH AGRAWAL",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-05",
        "inTime": "07:38:52 AM",
        "outTime": "02:27:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-05-TCH-1008",
        "employeeId": "EMP-2026-008",
        "staffId": "TCH-1008",
        "name": "PREMLATA DEVI",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-05",
        "inTime": "07:16:59 AM",
        "outTime": "02:29:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-05-TCH-1009",
        "employeeId": "EMP-2026-009",
        "staffId": "TCH-1009",
        "name": "SANJANA PATHAK",
        "designation": "Teacher",
        "department": "Junior",
        "punchDate": "2026-08-05",
        "inTime": "07:19:16 AM",
        "outTime": "02:31:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-05-TCH-1010",
        "employeeId": "EMP-2026-010",
        "staffId": "TCH-1010",
        "name": "RACHANA DEVI",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-05",
        "inTime": "07:22:23 AM",
        "outTime": "02:33:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-05-TCH-1011",
        "employeeId": "EMP-2026-011",
        "staffId": "TCH-1011",
        "name": "PRAMOD KUMAR SHARMA",
        "designation": "Teacher",
        "department": "Secondary",
        "punchDate": "2026-08-05",
        "inTime": "07:25:30 AM",
        "outTime": "02:35:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-05-TCH-1012",
        "employeeId": "EMP-2026-012",
        "staffId": "TCH-1012",
        "name": "MOHINI CHAUHAN",
        "designation": "Teacher",
        "department": "Primary",
        "punchDate": "2026-08-05",
        "inTime": "07:28:37 AM",
        "outTime": "02:37:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-05-TCH-1013",
        "employeeId": "EMP-2026-013",
        "staffId": "TCH-1013",
        "name": "RAJENDRA SINGH",
        "designation": "Teacher",
        "department": "Primary",
        "punchDate": "2026-08-05",
        "inTime": "07:31:44 AM",
        "outTime": "02:39:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-05-TCH-1014",
        "employeeId": "EMP-2026-014",
        "staffId": "TCH-1014",
        "name": "JAYMALA",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-05",
        "inTime": "07:54:51 AM",
        "outTime": "02:41:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "Late Arrival"
    },
    {
        "id": "PUNCH-2026-08-05-TCH-1015",
        "employeeId": "EMP-2026-015",
        "staffId": "TCH-1015",
        "name": "LALIT KUMAR",
        "designation": "Teacher",
        "department": "Secondary",
        "punchDate": "2026-08-05",
        "inTime": "07:37:58 AM",
        "outTime": "02:43:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-05-TCH-1016",
        "employeeId": "EMP-2026-016",
        "staffId": "TCH-1016",
        "name": "CHOKHELAL",
        "designation": "Driver",
        "department": "Transport",
        "punchDate": "2026-08-05",
        "inTime": "07:15:15 AM",
        "outTime": "02:15:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-05-TCH-1017",
        "employeeId": "EMP-2026-017",
        "staffId": "TCH-1017",
        "name": "NEETU SHARMA",
        "designation": "Teacher",
        "department": "Junior",
        "punchDate": "2026-08-05",
        "inTime": "07:18:22 AM",
        "outTime": "02:17:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-05-TCH-1018",
        "employeeId": "EMP-2026-018",
        "staffId": "TCH-1018",
        "name": "SONU KUMAR",
        "designation": "Driver",
        "department": "Transport",
        "punchDate": "2026-08-05",
        "inTime": "07:21:29 AM",
        "outTime": "02:19:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-05-TCH-1020",
        "employeeId": "EMP-2026-020",
        "staffId": "TCH-1020",
        "name": "KHUSHI",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-05",
        "inTime": "07:27:43 AM",
        "outTime": "02:23:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-05-TCH-1021",
        "employeeId": "EMP-2026-021",
        "staffId": "TCH-1021",
        "name": "SANDHYA",
        "designation": "Teacher",
        "department": "Primary",
        "punchDate": "2026-08-05",
        "inTime": "07:30:50 AM",
        "outTime": "02:25:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-05-TCH-1022",
        "employeeId": "EMP-2026-022",
        "staffId": "TCH-1022",
        "name": "Aarti",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-05",
        "inTime": "07:33:57 AM",
        "outTime": "02:27:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-05-TCH-1023",
        "employeeId": "EMP-2026-023",
        "staffId": "TCH-1023",
        "name": "SEJAL AGRAWAL",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-05",
        "inTime": "07:54:14 AM",
        "outTime": "02:29:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "Late Arrival"
    },
    {
        "id": "PUNCH-2026-08-06-TCH-1001",
        "employeeId": "EMP-2026-001",
        "staffId": "TCH-1001",
        "name": "Super Admin (Prashant)",
        "designation": "Teacher",
        "department": "Academics",
        "punchDate": "2026-08-06",
        "inTime": "07:21:10 AM",
        "outTime": "02:15:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-06-TCH-1002",
        "employeeId": "EMP-2026-002",
        "staffId": "TCH-1002",
        "name": "PRAMOD KUMAR",
        "designation": "Managing Director",
        "department": "Administration",
        "punchDate": "2026-08-06",
        "inTime": "07:24:17 AM",
        "outTime": "02:17:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-06-TCH-1003",
        "employeeId": "EMP-2026-003",
        "staffId": "TCH-1003",
        "name": "BHOOMI YADAV",
        "designation": "Teacher",
        "department": "Junior",
        "punchDate": "2026-08-06",
        "inTime": "07:27:24 AM",
        "outTime": "02:19:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-06-TCH-1004",
        "employeeId": "EMP-2026-004",
        "staffId": "TCH-1004",
        "name": "POORAN SINGH",
        "designation": "Teacher",
        "department": "Secondary",
        "punchDate": "2026-08-06",
        "inTime": "07:54:31 AM",
        "outTime": "02:21:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "Late Arrival"
    },
    {
        "id": "PUNCH-2026-08-06-TCH-1005",
        "employeeId": "EMP-2026-005",
        "staffId": "TCH-1005",
        "name": "SHWETA RAGHAV",
        "designation": "Teacher",
        "department": "Secondary",
        "punchDate": "2026-08-06",
        "inTime": "07:33:38 AM",
        "outTime": "02:23:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-06-TCH-1006",
        "employeeId": "EMP-2026-006",
        "staffId": "TCH-1006",
        "name": "SWATI RAGHAV",
        "designation": "Teacher",
        "department": "Primary",
        "punchDate": "2026-08-06",
        "inTime": "07:36:45 AM",
        "outTime": "02:25:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-06-TCH-1007",
        "employeeId": "EMP-2026-007",
        "staffId": "TCH-1007",
        "name": "AKHILESH AGRAWAL",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-06",
        "inTime": "07:39:52 AM",
        "outTime": "02:27:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-06-TCH-1008",
        "employeeId": "EMP-2026-008",
        "staffId": "TCH-1008",
        "name": "PREMLATA DEVI",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-06",
        "inTime": "07:17:59 AM",
        "outTime": "02:29:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-06-TCH-1009",
        "employeeId": "EMP-2026-009",
        "staffId": "TCH-1009",
        "name": "SANJANA PATHAK",
        "designation": "Teacher",
        "department": "Junior",
        "punchDate": "2026-08-06",
        "inTime": "07:20:16 AM",
        "outTime": "02:31:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-06-TCH-1010",
        "employeeId": "EMP-2026-010",
        "staffId": "TCH-1010",
        "name": "RACHANA DEVI",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-06",
        "inTime": "07:23:23 AM",
        "outTime": "02:33:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-06-TCH-1011",
        "employeeId": "EMP-2026-011",
        "staffId": "TCH-1011",
        "name": "PRAMOD KUMAR SHARMA",
        "designation": "Teacher",
        "department": "Secondary",
        "punchDate": "2026-08-06",
        "inTime": "07:26:30 AM",
        "outTime": "02:35:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-06-TCH-1012",
        "employeeId": "EMP-2026-012",
        "staffId": "TCH-1012",
        "name": "MOHINI CHAUHAN",
        "designation": "Teacher",
        "department": "Primary",
        "punchDate": "2026-08-06",
        "inTime": "07:29:37 AM",
        "outTime": "02:37:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-06-TCH-1013",
        "employeeId": "EMP-2026-013",
        "staffId": "TCH-1013",
        "name": "RAJENDRA SINGH",
        "designation": "Teacher",
        "department": "Primary",
        "punchDate": "2026-08-06",
        "inTime": "07:54:44 AM",
        "outTime": "02:39:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "Late Arrival"
    },
    {
        "id": "PUNCH-2026-08-06-TCH-1014",
        "employeeId": "EMP-2026-014",
        "staffId": "TCH-1014",
        "name": "JAYMALA",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-06",
        "inTime": "07:35:51 AM",
        "outTime": "02:41:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-06-TCH-1015",
        "employeeId": "EMP-2026-015",
        "staffId": "TCH-1015",
        "name": "LALIT KUMAR",
        "designation": "Teacher",
        "department": "Secondary",
        "punchDate": "2026-08-06",
        "inTime": "07:38:58 AM",
        "outTime": "02:43:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-06-TCH-1016",
        "employeeId": "EMP-2026-016",
        "staffId": "TCH-1016",
        "name": "CHOKHELAL",
        "designation": "Driver",
        "department": "Transport",
        "punchDate": "2026-08-06",
        "inTime": "07:16:15 AM",
        "outTime": "02:15:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-06-TCH-1017",
        "employeeId": "EMP-2026-017",
        "staffId": "TCH-1017",
        "name": "NEETU SHARMA",
        "designation": "Teacher",
        "department": "Junior",
        "punchDate": "2026-08-06",
        "inTime": "07:19:22 AM",
        "outTime": "02:17:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-06-TCH-1019",
        "employeeId": "EMP-2026-019",
        "staffId": "TCH-1019",
        "name": "Prashant Kumar Rajput",
        "designation": "Principal",
        "department": "Senior Secondary",
        "punchDate": "2026-08-06",
        "inTime": "07:25:36 AM",
        "outTime": "02:21:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-06-TCH-1020",
        "employeeId": "EMP-2026-020",
        "staffId": "TCH-1020",
        "name": "KHUSHI",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-06",
        "inTime": "07:28:43 AM",
        "outTime": "02:23:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-06-TCH-1021",
        "employeeId": "EMP-2026-021",
        "staffId": "TCH-1021",
        "name": "SANDHYA",
        "designation": "Teacher",
        "department": "Primary",
        "punchDate": "2026-08-06",
        "inTime": "07:31:50 AM",
        "outTime": "02:25:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-06-TCH-1022",
        "employeeId": "EMP-2026-022",
        "staffId": "TCH-1022",
        "name": "Aarti",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-06",
        "inTime": "07:54:57 AM",
        "outTime": "02:27:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "Late Arrival"
    },
    {
        "id": "PUNCH-2026-08-06-TCH-1023",
        "employeeId": "EMP-2026-023",
        "staffId": "TCH-1023",
        "name": "SEJAL AGRAWAL",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-06",
        "inTime": "07:37:14 AM",
        "outTime": "02:29:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-07-TCH-1001",
        "employeeId": "EMP-2026-001",
        "staffId": "TCH-1001",
        "name": "Super Admin (Prashant)",
        "designation": "Teacher",
        "department": "Academics",
        "punchDate": "2026-08-07",
        "inTime": "07:22:10 AM",
        "outTime": "02:15:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-07-TCH-1002",
        "employeeId": "EMP-2026-002",
        "staffId": "TCH-1002",
        "name": "PRAMOD KUMAR",
        "designation": "Managing Director",
        "department": "Administration",
        "punchDate": "2026-08-07",
        "inTime": "07:25:17 AM",
        "outTime": "02:17:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-07-TCH-1003",
        "employeeId": "EMP-2026-003",
        "staffId": "TCH-1003",
        "name": "BHOOMI YADAV",
        "designation": "Teacher",
        "department": "Junior",
        "punchDate": "2026-08-07",
        "inTime": "07:54:24 AM",
        "outTime": "02:19:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "Late Arrival"
    },
    {
        "id": "PUNCH-2026-08-07-TCH-1004",
        "employeeId": "EMP-2026-004",
        "staffId": "TCH-1004",
        "name": "POORAN SINGH",
        "designation": "Teacher",
        "department": "Secondary",
        "punchDate": "2026-08-07",
        "inTime": "07:31:31 AM",
        "outTime": "02:21:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-07-TCH-1005",
        "employeeId": "EMP-2026-005",
        "staffId": "TCH-1005",
        "name": "SHWETA RAGHAV",
        "designation": "Teacher",
        "department": "Secondary",
        "punchDate": "2026-08-07",
        "inTime": "07:34:38 AM",
        "outTime": "02:23:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-07-TCH-1006",
        "employeeId": "EMP-2026-006",
        "staffId": "TCH-1006",
        "name": "SWATI RAGHAV",
        "designation": "Teacher",
        "department": "Primary",
        "punchDate": "2026-08-07",
        "inTime": "07:37:45 AM",
        "outTime": "02:25:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-07-TCH-1007",
        "employeeId": "EMP-2026-007",
        "staffId": "TCH-1007",
        "name": "AKHILESH AGRAWAL",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-07",
        "inTime": "07:15:52 AM",
        "outTime": "02:27:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-07-TCH-1008",
        "employeeId": "EMP-2026-008",
        "staffId": "TCH-1008",
        "name": "PREMLATA DEVI",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-07",
        "inTime": "07:18:59 AM",
        "outTime": "02:29:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-07-TCH-1009",
        "employeeId": "EMP-2026-009",
        "staffId": "TCH-1009",
        "name": "SANJANA PATHAK",
        "designation": "Teacher",
        "department": "Junior",
        "punchDate": "2026-08-07",
        "inTime": "07:21:16 AM",
        "outTime": "02:31:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-07-TCH-1010",
        "employeeId": "EMP-2026-010",
        "staffId": "TCH-1010",
        "name": "RACHANA DEVI",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-07",
        "inTime": "07:24:23 AM",
        "outTime": "02:33:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-07-TCH-1011",
        "employeeId": "EMP-2026-011",
        "staffId": "TCH-1011",
        "name": "PRAMOD KUMAR SHARMA",
        "designation": "Teacher",
        "department": "Secondary",
        "punchDate": "2026-08-07",
        "inTime": "07:27:30 AM",
        "outTime": "02:35:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-07-TCH-1012",
        "employeeId": "EMP-2026-012",
        "staffId": "TCH-1012",
        "name": "MOHINI CHAUHAN",
        "designation": "Teacher",
        "department": "Primary",
        "punchDate": "2026-08-07",
        "inTime": "07:54:37 AM",
        "outTime": "02:37:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "Late Arrival"
    },
    {
        "id": "PUNCH-2026-08-07-TCH-1013",
        "employeeId": "EMP-2026-013",
        "staffId": "TCH-1013",
        "name": "RAJENDRA SINGH",
        "designation": "Teacher",
        "department": "Primary",
        "punchDate": "2026-08-07",
        "inTime": "07:33:44 AM",
        "outTime": "02:39:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-07-TCH-1014",
        "employeeId": "EMP-2026-014",
        "staffId": "TCH-1014",
        "name": "JAYMALA",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-07",
        "inTime": "07:36:51 AM",
        "outTime": "02:41:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-07-TCH-1015",
        "employeeId": "EMP-2026-015",
        "staffId": "TCH-1015",
        "name": "LALIT KUMAR",
        "designation": "Teacher",
        "department": "Secondary",
        "punchDate": "2026-08-07",
        "inTime": "07:39:58 AM",
        "outTime": "02:43:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-07-TCH-1016",
        "employeeId": "EMP-2026-016",
        "staffId": "TCH-1016",
        "name": "CHOKHELAL",
        "designation": "Driver",
        "department": "Transport",
        "punchDate": "2026-08-07",
        "inTime": "07:17:15 AM",
        "outTime": "02:15:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-07-TCH-1018",
        "employeeId": "EMP-2026-018",
        "staffId": "TCH-1018",
        "name": "SONU KUMAR",
        "designation": "Driver",
        "department": "Transport",
        "punchDate": "2026-08-07",
        "inTime": "07:23:29 AM",
        "outTime": "02:19:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-07-TCH-1019",
        "employeeId": "EMP-2026-019",
        "staffId": "TCH-1019",
        "name": "Prashant Kumar Rajput",
        "designation": "Principal",
        "department": "Senior Secondary",
        "punchDate": "2026-08-07",
        "inTime": "07:26:36 AM",
        "outTime": "02:21:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-07-TCH-1020",
        "employeeId": "EMP-2026-020",
        "staffId": "TCH-1020",
        "name": "KHUSHI",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-07",
        "inTime": "07:29:43 AM",
        "outTime": "02:23:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-07-TCH-1021",
        "employeeId": "EMP-2026-021",
        "staffId": "TCH-1021",
        "name": "SANDHYA",
        "designation": "Teacher",
        "department": "Primary",
        "punchDate": "2026-08-07",
        "inTime": "07:54:50 AM",
        "outTime": "02:25:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "Late Arrival"
    },
    {
        "id": "PUNCH-2026-08-07-TCH-1022",
        "employeeId": "EMP-2026-022",
        "staffId": "TCH-1022",
        "name": "Aarti",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-07",
        "inTime": "07:35:57 AM",
        "outTime": "02:27:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-07-TCH-1023",
        "employeeId": "EMP-2026-023",
        "staffId": "TCH-1023",
        "name": "SEJAL AGRAWAL",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-07",
        "inTime": "07:38:14 AM",
        "outTime": "02:29:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-08-TCH-1001",
        "employeeId": "EMP-2026-001",
        "staffId": "TCH-1001",
        "name": "Super Admin (Prashant)",
        "designation": "Teacher",
        "department": "Academics",
        "punchDate": "2026-08-08",
        "inTime": "07:23:10 AM",
        "outTime": "02:15:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-08-TCH-1002",
        "employeeId": "EMP-2026-002",
        "staffId": "TCH-1002",
        "name": "PRAMOD KUMAR",
        "designation": "Managing Director",
        "department": "Administration",
        "punchDate": "2026-08-08",
        "inTime": "07:54:17 AM",
        "outTime": "02:17:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "Late Arrival"
    },
    {
        "id": "PUNCH-2026-08-08-TCH-1003",
        "employeeId": "EMP-2026-003",
        "staffId": "TCH-1003",
        "name": "BHOOMI YADAV",
        "designation": "Teacher",
        "department": "Junior",
        "punchDate": "2026-08-08",
        "inTime": "07:29:24 AM",
        "outTime": "02:19:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-08-TCH-1004",
        "employeeId": "EMP-2026-004",
        "staffId": "TCH-1004",
        "name": "POORAN SINGH",
        "designation": "Teacher",
        "department": "Secondary",
        "punchDate": "2026-08-08",
        "inTime": "07:32:31 AM",
        "outTime": "02:21:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-08-TCH-1005",
        "employeeId": "EMP-2026-005",
        "staffId": "TCH-1005",
        "name": "SHWETA RAGHAV",
        "designation": "Teacher",
        "department": "Secondary",
        "punchDate": "2026-08-08",
        "inTime": "07:35:38 AM",
        "outTime": "02:23:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-08-TCH-1006",
        "employeeId": "EMP-2026-006",
        "staffId": "TCH-1006",
        "name": "SWATI RAGHAV",
        "designation": "Teacher",
        "department": "Primary",
        "punchDate": "2026-08-08",
        "inTime": "07:38:45 AM",
        "outTime": "02:25:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-08-TCH-1007",
        "employeeId": "EMP-2026-007",
        "staffId": "TCH-1007",
        "name": "AKHILESH AGRAWAL",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-08",
        "inTime": "07:16:52 AM",
        "outTime": "02:27:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-08-TCH-1008",
        "employeeId": "EMP-2026-008",
        "staffId": "TCH-1008",
        "name": "PREMLATA DEVI",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-08",
        "inTime": "07:19:59 AM",
        "outTime": "02:29:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-08-TCH-1009",
        "employeeId": "EMP-2026-009",
        "staffId": "TCH-1009",
        "name": "SANJANA PATHAK",
        "designation": "Teacher",
        "department": "Junior",
        "punchDate": "2026-08-08",
        "inTime": "07:22:16 AM",
        "outTime": "02:31:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-08-TCH-1010",
        "employeeId": "EMP-2026-010",
        "staffId": "TCH-1010",
        "name": "RACHANA DEVI",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-08",
        "inTime": "07:25:23 AM",
        "outTime": "02:33:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-08-TCH-1011",
        "employeeId": "EMP-2026-011",
        "staffId": "TCH-1011",
        "name": "PRAMOD KUMAR SHARMA",
        "designation": "Teacher",
        "department": "Secondary",
        "punchDate": "2026-08-08",
        "inTime": "07:54:30 AM",
        "outTime": "02:35:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "Late Arrival"
    },
    {
        "id": "PUNCH-2026-08-08-TCH-1012",
        "employeeId": "EMP-2026-012",
        "staffId": "TCH-1012",
        "name": "MOHINI CHAUHAN",
        "designation": "Teacher",
        "department": "Primary",
        "punchDate": "2026-08-08",
        "inTime": "07:31:37 AM",
        "outTime": "02:37:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-08-TCH-1013",
        "employeeId": "EMP-2026-013",
        "staffId": "TCH-1013",
        "name": "RAJENDRA SINGH",
        "designation": "Teacher",
        "department": "Primary",
        "punchDate": "2026-08-08",
        "inTime": "07:34:44 AM",
        "outTime": "02:39:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-08-TCH-1014",
        "employeeId": "EMP-2026-014",
        "staffId": "TCH-1014",
        "name": "JAYMALA",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-08",
        "inTime": "07:37:51 AM",
        "outTime": "02:41:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-08-TCH-1015",
        "employeeId": "EMP-2026-015",
        "staffId": "TCH-1015",
        "name": "LALIT KUMAR",
        "designation": "Teacher",
        "department": "Secondary",
        "punchDate": "2026-08-08",
        "inTime": "07:15:58 AM",
        "outTime": "02:43:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-08-TCH-1017",
        "employeeId": "EMP-2026-017",
        "staffId": "TCH-1017",
        "name": "NEETU SHARMA",
        "designation": "Teacher",
        "department": "Junior",
        "punchDate": "2026-08-08",
        "inTime": "07:21:22 AM",
        "outTime": "02:17:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-08-TCH-1018",
        "employeeId": "EMP-2026-018",
        "staffId": "TCH-1018",
        "name": "SONU KUMAR",
        "designation": "Driver",
        "department": "Transport",
        "punchDate": "2026-08-08",
        "inTime": "07:24:29 AM",
        "outTime": "02:19:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-08-TCH-1019",
        "employeeId": "EMP-2026-019",
        "staffId": "TCH-1019",
        "name": "Prashant Kumar Rajput",
        "designation": "Principal",
        "department": "Senior Secondary",
        "punchDate": "2026-08-08",
        "inTime": "07:27:36 AM",
        "outTime": "02:21:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-08-TCH-1020",
        "employeeId": "EMP-2026-020",
        "staffId": "TCH-1020",
        "name": "KHUSHI",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-08",
        "inTime": "07:54:43 AM",
        "outTime": "02:23:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "Late Arrival"
    },
    {
        "id": "PUNCH-2026-08-08-TCH-1021",
        "employeeId": "EMP-2026-021",
        "staffId": "TCH-1021",
        "name": "SANDHYA",
        "designation": "Teacher",
        "department": "Primary",
        "punchDate": "2026-08-08",
        "inTime": "07:33:50 AM",
        "outTime": "02:25:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-08-TCH-1022",
        "employeeId": "EMP-2026-022",
        "staffId": "TCH-1022",
        "name": "Aarti",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-08",
        "inTime": "07:36:57 AM",
        "outTime": "02:27:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-08-TCH-1023",
        "employeeId": "EMP-2026-023",
        "staffId": "TCH-1023",
        "name": "SEJAL AGRAWAL",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-08",
        "inTime": "07:39:14 AM",
        "outTime": "02:29:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-10-TCH-1001",
        "employeeId": "EMP-2026-001",
        "staffId": "TCH-1001",
        "name": "Super Admin (Prashant)",
        "designation": "Teacher",
        "department": "Academics",
        "punchDate": "2026-08-10",
        "inTime": "07:25:10 AM",
        "outTime": "02:15:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-10-TCH-1002",
        "employeeId": "EMP-2026-002",
        "staffId": "TCH-1002",
        "name": "PRAMOD KUMAR",
        "designation": "Managing Director",
        "department": "Administration",
        "punchDate": "2026-08-10",
        "inTime": "07:28:17 AM",
        "outTime": "02:17:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-10-TCH-1003",
        "employeeId": "EMP-2026-003",
        "staffId": "TCH-1003",
        "name": "BHOOMI YADAV",
        "designation": "Teacher",
        "department": "Junior",
        "punchDate": "2026-08-10",
        "inTime": "07:31:24 AM",
        "outTime": "02:19:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-10-TCH-1004",
        "employeeId": "EMP-2026-004",
        "staffId": "TCH-1004",
        "name": "POORAN SINGH",
        "designation": "Teacher",
        "department": "Secondary",
        "punchDate": "2026-08-10",
        "inTime": "07:34:31 AM",
        "outTime": "02:21:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-10-TCH-1005",
        "employeeId": "EMP-2026-005",
        "staffId": "TCH-1005",
        "name": "SHWETA RAGHAV",
        "designation": "Teacher",
        "department": "Secondary",
        "punchDate": "2026-08-10",
        "inTime": "07:37:38 AM",
        "outTime": "02:23:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-10-TCH-1006",
        "employeeId": "EMP-2026-006",
        "staffId": "TCH-1006",
        "name": "SWATI RAGHAV",
        "designation": "Teacher",
        "department": "Primary",
        "punchDate": "2026-08-10",
        "inTime": "07:15:45 AM",
        "outTime": "02:25:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-10-TCH-1007",
        "employeeId": "EMP-2026-007",
        "staffId": "TCH-1007",
        "name": "AKHILESH AGRAWAL",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-10",
        "inTime": "07:18:52 AM",
        "outTime": "02:27:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-10-TCH-1008",
        "employeeId": "EMP-2026-008",
        "staffId": "TCH-1008",
        "name": "PREMLATA DEVI",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-10",
        "inTime": "07:21:59 AM",
        "outTime": "02:29:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-10-TCH-1009",
        "employeeId": "EMP-2026-009",
        "staffId": "TCH-1009",
        "name": "SANJANA PATHAK",
        "designation": "Teacher",
        "department": "Junior",
        "punchDate": "2026-08-10",
        "inTime": "07:54:16 AM",
        "outTime": "02:31:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "Late Arrival"
    },
    {
        "id": "PUNCH-2026-08-10-TCH-1010",
        "employeeId": "EMP-2026-010",
        "staffId": "TCH-1010",
        "name": "RACHANA DEVI",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-10",
        "inTime": "07:27:23 AM",
        "outTime": "02:33:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-10-TCH-1011",
        "employeeId": "EMP-2026-011",
        "staffId": "TCH-1011",
        "name": "PRAMOD KUMAR SHARMA",
        "designation": "Teacher",
        "department": "Secondary",
        "punchDate": "2026-08-10",
        "inTime": "07:30:30 AM",
        "outTime": "02:35:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-10-TCH-1012",
        "employeeId": "EMP-2026-012",
        "staffId": "TCH-1012",
        "name": "MOHINI CHAUHAN",
        "designation": "Teacher",
        "department": "Primary",
        "punchDate": "2026-08-10",
        "inTime": "07:33:37 AM",
        "outTime": "02:37:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-10-TCH-1013",
        "employeeId": "EMP-2026-013",
        "staffId": "TCH-1013",
        "name": "RAJENDRA SINGH",
        "designation": "Teacher",
        "department": "Primary",
        "punchDate": "2026-08-10",
        "inTime": "07:36:44 AM",
        "outTime": "02:39:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-10-TCH-1015",
        "employeeId": "EMP-2026-015",
        "staffId": "TCH-1015",
        "name": "LALIT KUMAR",
        "designation": "Teacher",
        "department": "Secondary",
        "punchDate": "2026-08-10",
        "inTime": "07:17:58 AM",
        "outTime": "02:43:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-10-TCH-1016",
        "employeeId": "EMP-2026-016",
        "staffId": "TCH-1016",
        "name": "CHOKHELAL",
        "designation": "Driver",
        "department": "Transport",
        "punchDate": "2026-08-10",
        "inTime": "07:20:15 AM",
        "outTime": "02:15:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-10-TCH-1017",
        "employeeId": "EMP-2026-017",
        "staffId": "TCH-1017",
        "name": "NEETU SHARMA",
        "designation": "Teacher",
        "department": "Junior",
        "punchDate": "2026-08-10",
        "inTime": "07:23:22 AM",
        "outTime": "02:17:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-10-TCH-1018",
        "employeeId": "EMP-2026-018",
        "staffId": "TCH-1018",
        "name": "SONU KUMAR",
        "designation": "Driver",
        "department": "Transport",
        "punchDate": "2026-08-10",
        "inTime": "07:54:29 AM",
        "outTime": "02:19:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "Late Arrival"
    },
    {
        "id": "PUNCH-2026-08-10-TCH-1019",
        "employeeId": "EMP-2026-019",
        "staffId": "TCH-1019",
        "name": "Prashant Kumar Rajput",
        "designation": "Principal",
        "department": "Senior Secondary",
        "punchDate": "2026-08-10",
        "inTime": "07:29:36 AM",
        "outTime": "02:21:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-10-TCH-1020",
        "employeeId": "EMP-2026-020",
        "staffId": "TCH-1020",
        "name": "KHUSHI",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-10",
        "inTime": "07:32:43 AM",
        "outTime": "02:23:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-10-TCH-1021",
        "employeeId": "EMP-2026-021",
        "staffId": "TCH-1021",
        "name": "SANDHYA",
        "designation": "Teacher",
        "department": "Primary",
        "punchDate": "2026-08-10",
        "inTime": "07:35:50 AM",
        "outTime": "02:25:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-10-TCH-1022",
        "employeeId": "EMP-2026-022",
        "staffId": "TCH-1022",
        "name": "Aarti",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-10",
        "inTime": "07:38:57 AM",
        "outTime": "02:27:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-10-TCH-1023",
        "employeeId": "EMP-2026-023",
        "staffId": "TCH-1023",
        "name": "SEJAL AGRAWAL",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-10",
        "inTime": "07:16:14 AM",
        "outTime": "02:29:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-11-TCH-1001",
        "employeeId": "EMP-2026-001",
        "staffId": "TCH-1001",
        "name": "Super Admin (Prashant)",
        "designation": "Teacher",
        "department": "Academics",
        "punchDate": "2026-08-11",
        "inTime": "07:26:10 AM",
        "outTime": "02:15:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-11-TCH-1002",
        "employeeId": "EMP-2026-002",
        "staffId": "TCH-1002",
        "name": "PRAMOD KUMAR",
        "designation": "Managing Director",
        "department": "Administration",
        "punchDate": "2026-08-11",
        "inTime": "07:29:17 AM",
        "outTime": "02:17:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-11-TCH-1003",
        "employeeId": "EMP-2026-003",
        "staffId": "TCH-1003",
        "name": "BHOOMI YADAV",
        "designation": "Teacher",
        "department": "Junior",
        "punchDate": "2026-08-11",
        "inTime": "07:32:24 AM",
        "outTime": "02:19:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-11-TCH-1004",
        "employeeId": "EMP-2026-004",
        "staffId": "TCH-1004",
        "name": "POORAN SINGH",
        "designation": "Teacher",
        "department": "Secondary",
        "punchDate": "2026-08-11",
        "inTime": "07:35:31 AM",
        "outTime": "02:21:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-11-TCH-1005",
        "employeeId": "EMP-2026-005",
        "staffId": "TCH-1005",
        "name": "SHWETA RAGHAV",
        "designation": "Teacher",
        "department": "Secondary",
        "punchDate": "2026-08-11",
        "inTime": "07:38:38 AM",
        "outTime": "02:23:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-11-TCH-1006",
        "employeeId": "EMP-2026-006",
        "staffId": "TCH-1006",
        "name": "SWATI RAGHAV",
        "designation": "Teacher",
        "department": "Primary",
        "punchDate": "2026-08-11",
        "inTime": "07:16:45 AM",
        "outTime": "02:25:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-11-TCH-1007",
        "employeeId": "EMP-2026-007",
        "staffId": "TCH-1007",
        "name": "AKHILESH AGRAWAL",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-11",
        "inTime": "07:19:52 AM",
        "outTime": "02:27:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-11-TCH-1008",
        "employeeId": "EMP-2026-008",
        "staffId": "TCH-1008",
        "name": "PREMLATA DEVI",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-11",
        "inTime": "07:54:59 AM",
        "outTime": "02:29:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "Late Arrival"
    },
    {
        "id": "PUNCH-2026-08-11-TCH-1009",
        "employeeId": "EMP-2026-009",
        "staffId": "TCH-1009",
        "name": "SANJANA PATHAK",
        "designation": "Teacher",
        "department": "Junior",
        "punchDate": "2026-08-11",
        "inTime": "07:25:16 AM",
        "outTime": "02:31:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-11-TCH-1010",
        "employeeId": "EMP-2026-010",
        "staffId": "TCH-1010",
        "name": "RACHANA DEVI",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-11",
        "inTime": "07:28:23 AM",
        "outTime": "02:33:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-11-TCH-1011",
        "employeeId": "EMP-2026-011",
        "staffId": "TCH-1011",
        "name": "PRAMOD KUMAR SHARMA",
        "designation": "Teacher",
        "department": "Secondary",
        "punchDate": "2026-08-11",
        "inTime": "07:31:30 AM",
        "outTime": "02:35:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-11-TCH-1012",
        "employeeId": "EMP-2026-012",
        "staffId": "TCH-1012",
        "name": "MOHINI CHAUHAN",
        "designation": "Teacher",
        "department": "Primary",
        "punchDate": "2026-08-11",
        "inTime": "07:34:37 AM",
        "outTime": "02:37:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-11-TCH-1014",
        "employeeId": "EMP-2026-014",
        "staffId": "TCH-1014",
        "name": "JAYMALA",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-11",
        "inTime": "07:15:51 AM",
        "outTime": "02:41:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-11-TCH-1015",
        "employeeId": "EMP-2026-015",
        "staffId": "TCH-1015",
        "name": "LALIT KUMAR",
        "designation": "Teacher",
        "department": "Secondary",
        "punchDate": "2026-08-11",
        "inTime": "07:18:58 AM",
        "outTime": "02:43:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-11-TCH-1016",
        "employeeId": "EMP-2026-016",
        "staffId": "TCH-1016",
        "name": "CHOKHELAL",
        "designation": "Driver",
        "department": "Transport",
        "punchDate": "2026-08-11",
        "inTime": "07:21:15 AM",
        "outTime": "02:15:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-11-TCH-1017",
        "employeeId": "EMP-2026-017",
        "staffId": "TCH-1017",
        "name": "NEETU SHARMA",
        "designation": "Teacher",
        "department": "Junior",
        "punchDate": "2026-08-11",
        "inTime": "07:54:22 AM",
        "outTime": "02:17:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "Late Arrival"
    },
    {
        "id": "PUNCH-2026-08-11-TCH-1018",
        "employeeId": "EMP-2026-018",
        "staffId": "TCH-1018",
        "name": "SONU KUMAR",
        "designation": "Driver",
        "department": "Transport",
        "punchDate": "2026-08-11",
        "inTime": "07:27:29 AM",
        "outTime": "02:19:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-11-TCH-1019",
        "employeeId": "EMP-2026-019",
        "staffId": "TCH-1019",
        "name": "Prashant Kumar Rajput",
        "designation": "Principal",
        "department": "Senior Secondary",
        "punchDate": "2026-08-11",
        "inTime": "07:30:36 AM",
        "outTime": "02:21:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-11-TCH-1020",
        "employeeId": "EMP-2026-020",
        "staffId": "TCH-1020",
        "name": "KHUSHI",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-11",
        "inTime": "07:33:43 AM",
        "outTime": "02:23:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-11-TCH-1021",
        "employeeId": "EMP-2026-021",
        "staffId": "TCH-1021",
        "name": "SANDHYA",
        "designation": "Teacher",
        "department": "Primary",
        "punchDate": "2026-08-11",
        "inTime": "07:36:50 AM",
        "outTime": "02:25:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-11-TCH-1022",
        "employeeId": "EMP-2026-022",
        "staffId": "TCH-1022",
        "name": "Aarti",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-11",
        "inTime": "07:39:57 AM",
        "outTime": "02:27:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-11-TCH-1023",
        "employeeId": "EMP-2026-023",
        "staffId": "TCH-1023",
        "name": "SEJAL AGRAWAL",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-11",
        "inTime": "07:17:14 AM",
        "outTime": "02:29:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-12-TCH-1001",
        "employeeId": "EMP-2026-001",
        "staffId": "TCH-1001",
        "name": "Super Admin (Prashant)",
        "designation": "Teacher",
        "department": "Academics",
        "punchDate": "2026-08-12",
        "inTime": "07:27:10 AM",
        "outTime": "02:15:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-12-TCH-1002",
        "employeeId": "EMP-2026-002",
        "staffId": "TCH-1002",
        "name": "PRAMOD KUMAR",
        "designation": "Managing Director",
        "department": "Administration",
        "punchDate": "2026-08-12",
        "inTime": "07:30:17 AM",
        "outTime": "02:17:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-12-TCH-1003",
        "employeeId": "EMP-2026-003",
        "staffId": "TCH-1003",
        "name": "BHOOMI YADAV",
        "designation": "Teacher",
        "department": "Junior",
        "punchDate": "2026-08-12",
        "inTime": "07:33:24 AM",
        "outTime": "02:19:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-12-TCH-1004",
        "employeeId": "EMP-2026-004",
        "staffId": "TCH-1004",
        "name": "POORAN SINGH",
        "designation": "Teacher",
        "department": "Secondary",
        "punchDate": "2026-08-12",
        "inTime": "07:36:31 AM",
        "outTime": "02:21:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-12-TCH-1005",
        "employeeId": "EMP-2026-005",
        "staffId": "TCH-1005",
        "name": "SHWETA RAGHAV",
        "designation": "Teacher",
        "department": "Secondary",
        "punchDate": "2026-08-12",
        "inTime": "07:39:38 AM",
        "outTime": "02:23:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-12-TCH-1006",
        "employeeId": "EMP-2026-006",
        "staffId": "TCH-1006",
        "name": "SWATI RAGHAV",
        "designation": "Teacher",
        "department": "Primary",
        "punchDate": "2026-08-12",
        "inTime": "07:17:45 AM",
        "outTime": "02:25:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-12-TCH-1007",
        "employeeId": "EMP-2026-007",
        "staffId": "TCH-1007",
        "name": "AKHILESH AGRAWAL",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-12",
        "inTime": "07:54:52 AM",
        "outTime": "02:27:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "Late Arrival"
    },
    {
        "id": "PUNCH-2026-08-12-TCH-1008",
        "employeeId": "EMP-2026-008",
        "staffId": "TCH-1008",
        "name": "PREMLATA DEVI",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-12",
        "inTime": "07:23:59 AM",
        "outTime": "02:29:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-12-TCH-1009",
        "employeeId": "EMP-2026-009",
        "staffId": "TCH-1009",
        "name": "SANJANA PATHAK",
        "designation": "Teacher",
        "department": "Junior",
        "punchDate": "2026-08-12",
        "inTime": "07:26:16 AM",
        "outTime": "02:31:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-12-TCH-1010",
        "employeeId": "EMP-2026-010",
        "staffId": "TCH-1010",
        "name": "RACHANA DEVI",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-12",
        "inTime": "07:29:23 AM",
        "outTime": "02:33:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-12-TCH-1011",
        "employeeId": "EMP-2026-011",
        "staffId": "TCH-1011",
        "name": "PRAMOD KUMAR SHARMA",
        "designation": "Teacher",
        "department": "Secondary",
        "punchDate": "2026-08-12",
        "inTime": "07:32:30 AM",
        "outTime": "02:35:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-12-TCH-1013",
        "employeeId": "EMP-2026-013",
        "staffId": "TCH-1013",
        "name": "RAJENDRA SINGH",
        "designation": "Teacher",
        "department": "Primary",
        "punchDate": "2026-08-12",
        "inTime": "07:38:44 AM",
        "outTime": "02:39:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-12-TCH-1014",
        "employeeId": "EMP-2026-014",
        "staffId": "TCH-1014",
        "name": "JAYMALA",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-12",
        "inTime": "07:16:51 AM",
        "outTime": "02:41:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-12-TCH-1015",
        "employeeId": "EMP-2026-015",
        "staffId": "TCH-1015",
        "name": "LALIT KUMAR",
        "designation": "Teacher",
        "department": "Secondary",
        "punchDate": "2026-08-12",
        "inTime": "07:19:58 AM",
        "outTime": "02:43:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-12-TCH-1016",
        "employeeId": "EMP-2026-016",
        "staffId": "TCH-1016",
        "name": "CHOKHELAL",
        "designation": "Driver",
        "department": "Transport",
        "punchDate": "2026-08-12",
        "inTime": "07:54:15 AM",
        "outTime": "02:15:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "Late Arrival"
    },
    {
        "id": "PUNCH-2026-08-12-TCH-1017",
        "employeeId": "EMP-2026-017",
        "staffId": "TCH-1017",
        "name": "NEETU SHARMA",
        "designation": "Teacher",
        "department": "Junior",
        "punchDate": "2026-08-12",
        "inTime": "07:25:22 AM",
        "outTime": "02:17:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-12-TCH-1018",
        "employeeId": "EMP-2026-018",
        "staffId": "TCH-1018",
        "name": "SONU KUMAR",
        "designation": "Driver",
        "department": "Transport",
        "punchDate": "2026-08-12",
        "inTime": "07:28:29 AM",
        "outTime": "02:19:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-12-TCH-1019",
        "employeeId": "EMP-2026-019",
        "staffId": "TCH-1019",
        "name": "Prashant Kumar Rajput",
        "designation": "Principal",
        "department": "Senior Secondary",
        "punchDate": "2026-08-12",
        "inTime": "07:31:36 AM",
        "outTime": "02:21:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-12-TCH-1020",
        "employeeId": "EMP-2026-020",
        "staffId": "TCH-1020",
        "name": "KHUSHI",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-12",
        "inTime": "07:34:43 AM",
        "outTime": "02:23:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-12-TCH-1021",
        "employeeId": "EMP-2026-021",
        "staffId": "TCH-1021",
        "name": "SANDHYA",
        "designation": "Teacher",
        "department": "Primary",
        "punchDate": "2026-08-12",
        "inTime": "07:37:50 AM",
        "outTime": "02:25:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-12-TCH-1022",
        "employeeId": "EMP-2026-022",
        "staffId": "TCH-1022",
        "name": "Aarti",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-12",
        "inTime": "07:15:57 AM",
        "outTime": "02:27:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-12-TCH-1023",
        "employeeId": "EMP-2026-023",
        "staffId": "TCH-1023",
        "name": "SEJAL AGRAWAL",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-12",
        "inTime": "07:18:14 AM",
        "outTime": "02:29:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-13-TCH-1001",
        "employeeId": "EMP-2026-001",
        "staffId": "TCH-1001",
        "name": "Super Admin (Prashant)",
        "designation": "Teacher",
        "department": "Academics",
        "punchDate": "2026-08-13",
        "inTime": "07:28:10 AM",
        "outTime": "02:15:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-13-TCH-1002",
        "employeeId": "EMP-2026-002",
        "staffId": "TCH-1002",
        "name": "PRAMOD KUMAR",
        "designation": "Managing Director",
        "department": "Administration",
        "punchDate": "2026-08-13",
        "inTime": "07:31:17 AM",
        "outTime": "02:17:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-13-TCH-1003",
        "employeeId": "EMP-2026-003",
        "staffId": "TCH-1003",
        "name": "BHOOMI YADAV",
        "designation": "Teacher",
        "department": "Junior",
        "punchDate": "2026-08-13",
        "inTime": "07:34:24 AM",
        "outTime": "02:19:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-13-TCH-1004",
        "employeeId": "EMP-2026-004",
        "staffId": "TCH-1004",
        "name": "POORAN SINGH",
        "designation": "Teacher",
        "department": "Secondary",
        "punchDate": "2026-08-13",
        "inTime": "07:37:31 AM",
        "outTime": "02:21:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-13-TCH-1005",
        "employeeId": "EMP-2026-005",
        "staffId": "TCH-1005",
        "name": "SHWETA RAGHAV",
        "designation": "Teacher",
        "department": "Secondary",
        "punchDate": "2026-08-13",
        "inTime": "07:15:38 AM",
        "outTime": "02:23:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-13-TCH-1006",
        "employeeId": "EMP-2026-006",
        "staffId": "TCH-1006",
        "name": "SWATI RAGHAV",
        "designation": "Teacher",
        "department": "Primary",
        "punchDate": "2026-08-13",
        "inTime": "07:54:45 AM",
        "outTime": "02:25:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "Late Arrival"
    },
    {
        "id": "PUNCH-2026-08-13-TCH-1007",
        "employeeId": "EMP-2026-007",
        "staffId": "TCH-1007",
        "name": "AKHILESH AGRAWAL",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-13",
        "inTime": "07:21:52 AM",
        "outTime": "02:27:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-13-TCH-1008",
        "employeeId": "EMP-2026-008",
        "staffId": "TCH-1008",
        "name": "PREMLATA DEVI",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-13",
        "inTime": "07:24:59 AM",
        "outTime": "02:29:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-13-TCH-1009",
        "employeeId": "EMP-2026-009",
        "staffId": "TCH-1009",
        "name": "SANJANA PATHAK",
        "designation": "Teacher",
        "department": "Junior",
        "punchDate": "2026-08-13",
        "inTime": "07:27:16 AM",
        "outTime": "02:31:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-13-TCH-1010",
        "employeeId": "EMP-2026-010",
        "staffId": "TCH-1010",
        "name": "RACHANA DEVI",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-13",
        "inTime": "07:30:23 AM",
        "outTime": "02:33:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-13-TCH-1012",
        "employeeId": "EMP-2026-012",
        "staffId": "TCH-1012",
        "name": "MOHINI CHAUHAN",
        "designation": "Teacher",
        "department": "Primary",
        "punchDate": "2026-08-13",
        "inTime": "07:36:37 AM",
        "outTime": "02:37:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-13-TCH-1013",
        "employeeId": "EMP-2026-013",
        "staffId": "TCH-1013",
        "name": "RAJENDRA SINGH",
        "designation": "Teacher",
        "department": "Primary",
        "punchDate": "2026-08-13",
        "inTime": "07:39:44 AM",
        "outTime": "02:39:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-13-TCH-1014",
        "employeeId": "EMP-2026-014",
        "staffId": "TCH-1014",
        "name": "JAYMALA",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-13",
        "inTime": "07:17:51 AM",
        "outTime": "02:41:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-13-TCH-1015",
        "employeeId": "EMP-2026-015",
        "staffId": "TCH-1015",
        "name": "LALIT KUMAR",
        "designation": "Teacher",
        "department": "Secondary",
        "punchDate": "2026-08-13",
        "inTime": "07:54:58 AM",
        "outTime": "02:43:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "Late Arrival"
    },
    {
        "id": "PUNCH-2026-08-13-TCH-1016",
        "employeeId": "EMP-2026-016",
        "staffId": "TCH-1016",
        "name": "CHOKHELAL",
        "designation": "Driver",
        "department": "Transport",
        "punchDate": "2026-08-13",
        "inTime": "07:23:15 AM",
        "outTime": "02:15:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-13-TCH-1017",
        "employeeId": "EMP-2026-017",
        "staffId": "TCH-1017",
        "name": "NEETU SHARMA",
        "designation": "Teacher",
        "department": "Junior",
        "punchDate": "2026-08-13",
        "inTime": "07:26:22 AM",
        "outTime": "02:17:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-13-TCH-1018",
        "employeeId": "EMP-2026-018",
        "staffId": "TCH-1018",
        "name": "SONU KUMAR",
        "designation": "Driver",
        "department": "Transport",
        "punchDate": "2026-08-13",
        "inTime": "07:29:29 AM",
        "outTime": "02:19:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-13-TCH-1019",
        "employeeId": "EMP-2026-019",
        "staffId": "TCH-1019",
        "name": "Prashant Kumar Rajput",
        "designation": "Principal",
        "department": "Senior Secondary",
        "punchDate": "2026-08-13",
        "inTime": "07:32:36 AM",
        "outTime": "02:21:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-13-TCH-1020",
        "employeeId": "EMP-2026-020",
        "staffId": "TCH-1020",
        "name": "KHUSHI",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-13",
        "inTime": "07:35:43 AM",
        "outTime": "02:23:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-13-TCH-1021",
        "employeeId": "EMP-2026-021",
        "staffId": "TCH-1021",
        "name": "SANDHYA",
        "designation": "Teacher",
        "department": "Primary",
        "punchDate": "2026-08-13",
        "inTime": "07:38:50 AM",
        "outTime": "02:25:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-13-TCH-1022",
        "employeeId": "EMP-2026-022",
        "staffId": "TCH-1022",
        "name": "Aarti",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-13",
        "inTime": "07:16:57 AM",
        "outTime": "02:27:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-13-TCH-1023",
        "employeeId": "EMP-2026-023",
        "staffId": "TCH-1023",
        "name": "SEJAL AGRAWAL",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-13",
        "inTime": "07:19:14 AM",
        "outTime": "02:29:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-14-TCH-1001",
        "employeeId": "EMP-2026-001",
        "staffId": "TCH-1001",
        "name": "Super Admin (Prashant)",
        "designation": "Teacher",
        "department": "Academics",
        "punchDate": "2026-08-14",
        "inTime": "07:29:10 AM",
        "outTime": "02:15:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-14-TCH-1002",
        "employeeId": "EMP-2026-002",
        "staffId": "TCH-1002",
        "name": "PRAMOD KUMAR",
        "designation": "Managing Director",
        "department": "Administration",
        "punchDate": "2026-08-14",
        "inTime": "07:32:17 AM",
        "outTime": "02:17:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-14-TCH-1003",
        "employeeId": "EMP-2026-003",
        "staffId": "TCH-1003",
        "name": "BHOOMI YADAV",
        "designation": "Teacher",
        "department": "Junior",
        "punchDate": "2026-08-14",
        "inTime": "07:35:24 AM",
        "outTime": "02:19:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-14-TCH-1004",
        "employeeId": "EMP-2026-004",
        "staffId": "TCH-1004",
        "name": "POORAN SINGH",
        "designation": "Teacher",
        "department": "Secondary",
        "punchDate": "2026-08-14",
        "inTime": "07:38:31 AM",
        "outTime": "02:21:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-14-TCH-1005",
        "employeeId": "EMP-2026-005",
        "staffId": "TCH-1005",
        "name": "SHWETA RAGHAV",
        "designation": "Teacher",
        "department": "Secondary",
        "punchDate": "2026-08-14",
        "inTime": "07:54:38 AM",
        "outTime": "02:23:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "Late Arrival"
    },
    {
        "id": "PUNCH-2026-08-14-TCH-1006",
        "employeeId": "EMP-2026-006",
        "staffId": "TCH-1006",
        "name": "SWATI RAGHAV",
        "designation": "Teacher",
        "department": "Primary",
        "punchDate": "2026-08-14",
        "inTime": "07:19:45 AM",
        "outTime": "02:25:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-14-TCH-1007",
        "employeeId": "EMP-2026-007",
        "staffId": "TCH-1007",
        "name": "AKHILESH AGRAWAL",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-14",
        "inTime": "07:22:52 AM",
        "outTime": "02:27:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-14-TCH-1008",
        "employeeId": "EMP-2026-008",
        "staffId": "TCH-1008",
        "name": "PREMLATA DEVI",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-14",
        "inTime": "07:25:59 AM",
        "outTime": "02:29:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-14-TCH-1009",
        "employeeId": "EMP-2026-009",
        "staffId": "TCH-1009",
        "name": "SANJANA PATHAK",
        "designation": "Teacher",
        "department": "Junior",
        "punchDate": "2026-08-14",
        "inTime": "07:28:16 AM",
        "outTime": "02:31:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-14-TCH-1011",
        "employeeId": "EMP-2026-011",
        "staffId": "TCH-1011",
        "name": "PRAMOD KUMAR SHARMA",
        "designation": "Teacher",
        "department": "Secondary",
        "punchDate": "2026-08-14",
        "inTime": "07:34:30 AM",
        "outTime": "02:35:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-14-TCH-1012",
        "employeeId": "EMP-2026-012",
        "staffId": "TCH-1012",
        "name": "MOHINI CHAUHAN",
        "designation": "Teacher",
        "department": "Primary",
        "punchDate": "2026-08-14",
        "inTime": "07:37:37 AM",
        "outTime": "02:37:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-14-TCH-1013",
        "employeeId": "EMP-2026-013",
        "staffId": "TCH-1013",
        "name": "RAJENDRA SINGH",
        "designation": "Teacher",
        "department": "Primary",
        "punchDate": "2026-08-14",
        "inTime": "07:15:44 AM",
        "outTime": "02:39:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-14-TCH-1014",
        "employeeId": "EMP-2026-014",
        "staffId": "TCH-1014",
        "name": "JAYMALA",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-14",
        "inTime": "07:54:51 AM",
        "outTime": "02:41:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "Late Arrival"
    },
    {
        "id": "PUNCH-2026-08-14-TCH-1015",
        "employeeId": "EMP-2026-015",
        "staffId": "TCH-1015",
        "name": "LALIT KUMAR",
        "designation": "Teacher",
        "department": "Secondary",
        "punchDate": "2026-08-14",
        "inTime": "07:21:58 AM",
        "outTime": "02:43:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-14-TCH-1016",
        "employeeId": "EMP-2026-016",
        "staffId": "TCH-1016",
        "name": "CHOKHELAL",
        "designation": "Driver",
        "department": "Transport",
        "punchDate": "2026-08-14",
        "inTime": "07:24:15 AM",
        "outTime": "02:15:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-14-TCH-1017",
        "employeeId": "EMP-2026-017",
        "staffId": "TCH-1017",
        "name": "NEETU SHARMA",
        "designation": "Teacher",
        "department": "Junior",
        "punchDate": "2026-08-14",
        "inTime": "07:27:22 AM",
        "outTime": "02:17:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-14-TCH-1018",
        "employeeId": "EMP-2026-018",
        "staffId": "TCH-1018",
        "name": "SONU KUMAR",
        "designation": "Driver",
        "department": "Transport",
        "punchDate": "2026-08-14",
        "inTime": "07:30:29 AM",
        "outTime": "02:19:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-14-TCH-1019",
        "employeeId": "EMP-2026-019",
        "staffId": "TCH-1019",
        "name": "Prashant Kumar Rajput",
        "designation": "Principal",
        "department": "Senior Secondary",
        "punchDate": "2026-08-14",
        "inTime": "07:33:36 AM",
        "outTime": "02:21:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-14-TCH-1020",
        "employeeId": "EMP-2026-020",
        "staffId": "TCH-1020",
        "name": "KHUSHI",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-14",
        "inTime": "07:36:43 AM",
        "outTime": "02:23:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-14-TCH-1021",
        "employeeId": "EMP-2026-021",
        "staffId": "TCH-1021",
        "name": "SANDHYA",
        "designation": "Teacher",
        "department": "Primary",
        "punchDate": "2026-08-14",
        "inTime": "07:39:50 AM",
        "outTime": "02:25:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-14-TCH-1022",
        "employeeId": "EMP-2026-022",
        "staffId": "TCH-1022",
        "name": "Aarti",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-14",
        "inTime": "07:17:57 AM",
        "outTime": "02:27:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-14-TCH-1023",
        "employeeId": "EMP-2026-023",
        "staffId": "TCH-1023",
        "name": "SEJAL AGRAWAL",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-14",
        "inTime": "07:54:14 AM",
        "outTime": "02:29:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "Late Arrival"
    },
    {
        "id": "PUNCH-2026-08-15-TCH-1001",
        "employeeId": "EMP-2026-001",
        "staffId": "TCH-1001",
        "name": "Super Admin (Prashant)",
        "designation": "Teacher",
        "department": "Academics",
        "punchDate": "2026-08-15",
        "inTime": "07:30:10 AM",
        "outTime": "02:15:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-15-TCH-1002",
        "employeeId": "EMP-2026-002",
        "staffId": "TCH-1002",
        "name": "PRAMOD KUMAR",
        "designation": "Managing Director",
        "department": "Administration",
        "punchDate": "2026-08-15",
        "inTime": "07:33:17 AM",
        "outTime": "02:17:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-15-TCH-1003",
        "employeeId": "EMP-2026-003",
        "staffId": "TCH-1003",
        "name": "BHOOMI YADAV",
        "designation": "Teacher",
        "department": "Junior",
        "punchDate": "2026-08-15",
        "inTime": "07:36:24 AM",
        "outTime": "02:19:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-15-TCH-1004",
        "employeeId": "EMP-2026-004",
        "staffId": "TCH-1004",
        "name": "POORAN SINGH",
        "designation": "Teacher",
        "department": "Secondary",
        "punchDate": "2026-08-15",
        "inTime": "07:54:31 AM",
        "outTime": "02:21:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "Late Arrival"
    },
    {
        "id": "PUNCH-2026-08-15-TCH-1005",
        "employeeId": "EMP-2026-005",
        "staffId": "TCH-1005",
        "name": "SHWETA RAGHAV",
        "designation": "Teacher",
        "department": "Secondary",
        "punchDate": "2026-08-15",
        "inTime": "07:17:38 AM",
        "outTime": "02:23:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-15-TCH-1006",
        "employeeId": "EMP-2026-006",
        "staffId": "TCH-1006",
        "name": "SWATI RAGHAV",
        "designation": "Teacher",
        "department": "Primary",
        "punchDate": "2026-08-15",
        "inTime": "07:20:45 AM",
        "outTime": "02:25:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-15-TCH-1007",
        "employeeId": "EMP-2026-007",
        "staffId": "TCH-1007",
        "name": "AKHILESH AGRAWAL",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-15",
        "inTime": "07:23:52 AM",
        "outTime": "02:27:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-15-TCH-1008",
        "employeeId": "EMP-2026-008",
        "staffId": "TCH-1008",
        "name": "PREMLATA DEVI",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-15",
        "inTime": "07:26:59 AM",
        "outTime": "02:29:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-15-TCH-1010",
        "employeeId": "EMP-2026-010",
        "staffId": "TCH-1010",
        "name": "RACHANA DEVI",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-15",
        "inTime": "07:32:23 AM",
        "outTime": "02:33:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-15-TCH-1011",
        "employeeId": "EMP-2026-011",
        "staffId": "TCH-1011",
        "name": "PRAMOD KUMAR SHARMA",
        "designation": "Teacher",
        "department": "Secondary",
        "punchDate": "2026-08-15",
        "inTime": "07:35:30 AM",
        "outTime": "02:35:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-15-TCH-1012",
        "employeeId": "EMP-2026-012",
        "staffId": "TCH-1012",
        "name": "MOHINI CHAUHAN",
        "designation": "Teacher",
        "department": "Primary",
        "punchDate": "2026-08-15",
        "inTime": "07:38:37 AM",
        "outTime": "02:37:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-15-TCH-1013",
        "employeeId": "EMP-2026-013",
        "staffId": "TCH-1013",
        "name": "RAJENDRA SINGH",
        "designation": "Teacher",
        "department": "Primary",
        "punchDate": "2026-08-15",
        "inTime": "07:54:44 AM",
        "outTime": "02:39:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "Late Arrival"
    },
    {
        "id": "PUNCH-2026-08-15-TCH-1014",
        "employeeId": "EMP-2026-014",
        "staffId": "TCH-1014",
        "name": "JAYMALA",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-15",
        "inTime": "07:19:51 AM",
        "outTime": "02:41:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-15-TCH-1015",
        "employeeId": "EMP-2026-015",
        "staffId": "TCH-1015",
        "name": "LALIT KUMAR",
        "designation": "Teacher",
        "department": "Secondary",
        "punchDate": "2026-08-15",
        "inTime": "07:22:58 AM",
        "outTime": "02:43:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-15-TCH-1016",
        "employeeId": "EMP-2026-016",
        "staffId": "TCH-1016",
        "name": "CHOKHELAL",
        "designation": "Driver",
        "department": "Transport",
        "punchDate": "2026-08-15",
        "inTime": "07:25:15 AM",
        "outTime": "02:15:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-15-TCH-1017",
        "employeeId": "EMP-2026-017",
        "staffId": "TCH-1017",
        "name": "NEETU SHARMA",
        "designation": "Teacher",
        "department": "Junior",
        "punchDate": "2026-08-15",
        "inTime": "07:28:22 AM",
        "outTime": "02:17:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-15-TCH-1018",
        "employeeId": "EMP-2026-018",
        "staffId": "TCH-1018",
        "name": "SONU KUMAR",
        "designation": "Driver",
        "department": "Transport",
        "punchDate": "2026-08-15",
        "inTime": "07:31:29 AM",
        "outTime": "02:19:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-15-TCH-1019",
        "employeeId": "EMP-2026-019",
        "staffId": "TCH-1019",
        "name": "Prashant Kumar Rajput",
        "designation": "Principal",
        "department": "Senior Secondary",
        "punchDate": "2026-08-15",
        "inTime": "07:34:36 AM",
        "outTime": "02:21:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-15-TCH-1020",
        "employeeId": "EMP-2026-020",
        "staffId": "TCH-1020",
        "name": "KHUSHI",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-15",
        "inTime": "07:37:43 AM",
        "outTime": "02:23:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-15-TCH-1021",
        "employeeId": "EMP-2026-021",
        "staffId": "TCH-1021",
        "name": "SANDHYA",
        "designation": "Teacher",
        "department": "Primary",
        "punchDate": "2026-08-15",
        "inTime": "07:15:50 AM",
        "outTime": "02:25:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-15-TCH-1022",
        "employeeId": "EMP-2026-022",
        "staffId": "TCH-1022",
        "name": "Aarti",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-15",
        "inTime": "07:54:57 AM",
        "outTime": "02:27:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "Late Arrival"
    },
    {
        "id": "PUNCH-2026-08-15-TCH-1023",
        "employeeId": "EMP-2026-023",
        "staffId": "TCH-1023",
        "name": "SEJAL AGRAWAL",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-15",
        "inTime": "07:21:14 AM",
        "outTime": "02:29:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-17-TCH-1001",
        "employeeId": "EMP-2026-001",
        "staffId": "TCH-1001",
        "name": "Super Admin (Prashant)",
        "designation": "Teacher",
        "department": "Academics",
        "punchDate": "2026-08-17",
        "inTime": "07:32:10 AM",
        "outTime": "02:15:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-17-TCH-1002",
        "employeeId": "EMP-2026-002",
        "staffId": "TCH-1002",
        "name": "PRAMOD KUMAR",
        "designation": "Managing Director",
        "department": "Administration",
        "punchDate": "2026-08-17",
        "inTime": "07:54:17 AM",
        "outTime": "02:17:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "Late Arrival"
    },
    {
        "id": "PUNCH-2026-08-17-TCH-1003",
        "employeeId": "EMP-2026-003",
        "staffId": "TCH-1003",
        "name": "BHOOMI YADAV",
        "designation": "Teacher",
        "department": "Junior",
        "punchDate": "2026-08-17",
        "inTime": "07:38:24 AM",
        "outTime": "02:19:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-17-TCH-1004",
        "employeeId": "EMP-2026-004",
        "staffId": "TCH-1004",
        "name": "POORAN SINGH",
        "designation": "Teacher",
        "department": "Secondary",
        "punchDate": "2026-08-17",
        "inTime": "07:16:31 AM",
        "outTime": "02:21:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-17-TCH-1005",
        "employeeId": "EMP-2026-005",
        "staffId": "TCH-1005",
        "name": "SHWETA RAGHAV",
        "designation": "Teacher",
        "department": "Secondary",
        "punchDate": "2026-08-17",
        "inTime": "07:19:38 AM",
        "outTime": "02:23:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-17-TCH-1006",
        "employeeId": "EMP-2026-006",
        "staffId": "TCH-1006",
        "name": "SWATI RAGHAV",
        "designation": "Teacher",
        "department": "Primary",
        "punchDate": "2026-08-17",
        "inTime": "07:22:45 AM",
        "outTime": "02:25:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-17-TCH-1008",
        "employeeId": "EMP-2026-008",
        "staffId": "TCH-1008",
        "name": "PREMLATA DEVI",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-17",
        "inTime": "07:28:59 AM",
        "outTime": "02:29:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-17-TCH-1009",
        "employeeId": "EMP-2026-009",
        "staffId": "TCH-1009",
        "name": "SANJANA PATHAK",
        "designation": "Teacher",
        "department": "Junior",
        "punchDate": "2026-08-17",
        "inTime": "07:31:16 AM",
        "outTime": "02:31:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-17-TCH-1010",
        "employeeId": "EMP-2026-010",
        "staffId": "TCH-1010",
        "name": "RACHANA DEVI",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-17",
        "inTime": "07:34:23 AM",
        "outTime": "02:33:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-17-TCH-1011",
        "employeeId": "EMP-2026-011",
        "staffId": "TCH-1011",
        "name": "PRAMOD KUMAR SHARMA",
        "designation": "Teacher",
        "department": "Secondary",
        "punchDate": "2026-08-17",
        "inTime": "07:54:30 AM",
        "outTime": "02:35:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "Late Arrival"
    },
    {
        "id": "PUNCH-2026-08-17-TCH-1012",
        "employeeId": "EMP-2026-012",
        "staffId": "TCH-1012",
        "name": "MOHINI CHAUHAN",
        "designation": "Teacher",
        "department": "Primary",
        "punchDate": "2026-08-17",
        "inTime": "07:15:37 AM",
        "outTime": "02:37:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-17-TCH-1013",
        "employeeId": "EMP-2026-013",
        "staffId": "TCH-1013",
        "name": "RAJENDRA SINGH",
        "designation": "Teacher",
        "department": "Primary",
        "punchDate": "2026-08-17",
        "inTime": "07:18:44 AM",
        "outTime": "02:39:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-17-TCH-1014",
        "employeeId": "EMP-2026-014",
        "staffId": "TCH-1014",
        "name": "JAYMALA",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-17",
        "inTime": "07:21:51 AM",
        "outTime": "02:41:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-17-TCH-1015",
        "employeeId": "EMP-2026-015",
        "staffId": "TCH-1015",
        "name": "LALIT KUMAR",
        "designation": "Teacher",
        "department": "Secondary",
        "punchDate": "2026-08-17",
        "inTime": "07:24:58 AM",
        "outTime": "02:43:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-17-TCH-1016",
        "employeeId": "EMP-2026-016",
        "staffId": "TCH-1016",
        "name": "CHOKHELAL",
        "designation": "Driver",
        "department": "Transport",
        "punchDate": "2026-08-17",
        "inTime": "07:27:15 AM",
        "outTime": "02:15:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-17-TCH-1017",
        "employeeId": "EMP-2026-017",
        "staffId": "TCH-1017",
        "name": "NEETU SHARMA",
        "designation": "Teacher",
        "department": "Junior",
        "punchDate": "2026-08-17",
        "inTime": "07:30:22 AM",
        "outTime": "02:17:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-17-TCH-1018",
        "employeeId": "EMP-2026-018",
        "staffId": "TCH-1018",
        "name": "SONU KUMAR",
        "designation": "Driver",
        "department": "Transport",
        "punchDate": "2026-08-17",
        "inTime": "07:33:29 AM",
        "outTime": "02:19:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-17-TCH-1019",
        "employeeId": "EMP-2026-019",
        "staffId": "TCH-1019",
        "name": "Prashant Kumar Rajput",
        "designation": "Principal",
        "department": "Senior Secondary",
        "punchDate": "2026-08-17",
        "inTime": "07:36:36 AM",
        "outTime": "02:21:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-17-TCH-1020",
        "employeeId": "EMP-2026-020",
        "staffId": "TCH-1020",
        "name": "KHUSHI",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-17",
        "inTime": "07:54:43 AM",
        "outTime": "02:23:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "Late Arrival"
    },
    {
        "id": "PUNCH-2026-08-17-TCH-1021",
        "employeeId": "EMP-2026-021",
        "staffId": "TCH-1021",
        "name": "SANDHYA",
        "designation": "Teacher",
        "department": "Primary",
        "punchDate": "2026-08-17",
        "inTime": "07:17:50 AM",
        "outTime": "02:25:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-17-TCH-1022",
        "employeeId": "EMP-2026-022",
        "staffId": "TCH-1022",
        "name": "Aarti",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-17",
        "inTime": "07:20:57 AM",
        "outTime": "02:27:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-17-TCH-1023",
        "employeeId": "EMP-2026-023",
        "staffId": "TCH-1023",
        "name": "SEJAL AGRAWAL",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-17",
        "inTime": "07:23:14 AM",
        "outTime": "02:29:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-18-TCH-1001",
        "employeeId": "EMP-2026-001",
        "staffId": "TCH-1001",
        "name": "Super Admin (Prashant)",
        "designation": "Teacher",
        "department": "Academics",
        "punchDate": "2026-08-18",
        "inTime": "07:54:10 AM",
        "outTime": "02:15:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "Late Arrival"
    },
    {
        "id": "PUNCH-2026-08-18-TCH-1002",
        "employeeId": "EMP-2026-002",
        "staffId": "TCH-1002",
        "name": "PRAMOD KUMAR",
        "designation": "Managing Director",
        "department": "Administration",
        "punchDate": "2026-08-18",
        "inTime": "07:36:17 AM",
        "outTime": "02:17:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-18-TCH-1003",
        "employeeId": "EMP-2026-003",
        "staffId": "TCH-1003",
        "name": "BHOOMI YADAV",
        "designation": "Teacher",
        "department": "Junior",
        "punchDate": "2026-08-18",
        "inTime": "07:39:24 AM",
        "outTime": "02:19:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-18-TCH-1004",
        "employeeId": "EMP-2026-004",
        "staffId": "TCH-1004",
        "name": "POORAN SINGH",
        "designation": "Teacher",
        "department": "Secondary",
        "punchDate": "2026-08-18",
        "inTime": "07:17:31 AM",
        "outTime": "02:21:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-18-TCH-1005",
        "employeeId": "EMP-2026-005",
        "staffId": "TCH-1005",
        "name": "SHWETA RAGHAV",
        "designation": "Teacher",
        "department": "Secondary",
        "punchDate": "2026-08-18",
        "inTime": "07:20:38 AM",
        "outTime": "02:23:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-18-TCH-1007",
        "employeeId": "EMP-2026-007",
        "staffId": "TCH-1007",
        "name": "AKHILESH AGRAWAL",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-18",
        "inTime": "07:26:52 AM",
        "outTime": "02:27:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-18-TCH-1008",
        "employeeId": "EMP-2026-008",
        "staffId": "TCH-1008",
        "name": "PREMLATA DEVI",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-18",
        "inTime": "07:29:59 AM",
        "outTime": "02:29:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-18-TCH-1009",
        "employeeId": "EMP-2026-009",
        "staffId": "TCH-1009",
        "name": "SANJANA PATHAK",
        "designation": "Teacher",
        "department": "Junior",
        "punchDate": "2026-08-18",
        "inTime": "07:32:16 AM",
        "outTime": "02:31:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-18-TCH-1010",
        "employeeId": "EMP-2026-010",
        "staffId": "TCH-1010",
        "name": "RACHANA DEVI",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-18",
        "inTime": "07:54:23 AM",
        "outTime": "02:33:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "Late Arrival"
    },
    {
        "id": "PUNCH-2026-08-18-TCH-1011",
        "employeeId": "EMP-2026-011",
        "staffId": "TCH-1011",
        "name": "PRAMOD KUMAR SHARMA",
        "designation": "Teacher",
        "department": "Secondary",
        "punchDate": "2026-08-18",
        "inTime": "07:38:30 AM",
        "outTime": "02:35:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-18-TCH-1012",
        "employeeId": "EMP-2026-012",
        "staffId": "TCH-1012",
        "name": "MOHINI CHAUHAN",
        "designation": "Teacher",
        "department": "Primary",
        "punchDate": "2026-08-18",
        "inTime": "07:16:37 AM",
        "outTime": "02:37:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-18-TCH-1013",
        "employeeId": "EMP-2026-013",
        "staffId": "TCH-1013",
        "name": "RAJENDRA SINGH",
        "designation": "Teacher",
        "department": "Primary",
        "punchDate": "2026-08-18",
        "inTime": "07:19:44 AM",
        "outTime": "02:39:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-18-TCH-1014",
        "employeeId": "EMP-2026-014",
        "staffId": "TCH-1014",
        "name": "JAYMALA",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-18",
        "inTime": "07:22:51 AM",
        "outTime": "02:41:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-18-TCH-1015",
        "employeeId": "EMP-2026-015",
        "staffId": "TCH-1015",
        "name": "LALIT KUMAR",
        "designation": "Teacher",
        "department": "Secondary",
        "punchDate": "2026-08-18",
        "inTime": "07:25:58 AM",
        "outTime": "02:43:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-18-TCH-1016",
        "employeeId": "EMP-2026-016",
        "staffId": "TCH-1016",
        "name": "CHOKHELAL",
        "designation": "Driver",
        "department": "Transport",
        "punchDate": "2026-08-18",
        "inTime": "07:28:15 AM",
        "outTime": "02:15:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-18-TCH-1017",
        "employeeId": "EMP-2026-017",
        "staffId": "TCH-1017",
        "name": "NEETU SHARMA",
        "designation": "Teacher",
        "department": "Junior",
        "punchDate": "2026-08-18",
        "inTime": "07:31:22 AM",
        "outTime": "02:17:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-18-TCH-1018",
        "employeeId": "EMP-2026-018",
        "staffId": "TCH-1018",
        "name": "SONU KUMAR",
        "designation": "Driver",
        "department": "Transport",
        "punchDate": "2026-08-18",
        "inTime": "07:34:29 AM",
        "outTime": "02:19:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-18-TCH-1019",
        "employeeId": "EMP-2026-019",
        "staffId": "TCH-1019",
        "name": "Prashant Kumar Rajput",
        "designation": "Principal",
        "department": "Senior Secondary",
        "punchDate": "2026-08-18",
        "inTime": "07:54:36 AM",
        "outTime": "02:21:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "Late Arrival"
    },
    {
        "id": "PUNCH-2026-08-18-TCH-1020",
        "employeeId": "EMP-2026-020",
        "staffId": "TCH-1020",
        "name": "KHUSHI",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-18",
        "inTime": "07:15:43 AM",
        "outTime": "02:23:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-18-TCH-1021",
        "employeeId": "EMP-2026-021",
        "staffId": "TCH-1021",
        "name": "SANDHYA",
        "designation": "Teacher",
        "department": "Primary",
        "punchDate": "2026-08-18",
        "inTime": "07:18:50 AM",
        "outTime": "02:25:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-18-TCH-1022",
        "employeeId": "EMP-2026-022",
        "staffId": "TCH-1022",
        "name": "Aarti",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-18",
        "inTime": "07:21:57 AM",
        "outTime": "02:27:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-18-TCH-1023",
        "employeeId": "EMP-2026-023",
        "staffId": "TCH-1023",
        "name": "SEJAL AGRAWAL",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-18",
        "inTime": "07:24:14 AM",
        "outTime": "02:29:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-19-TCH-1001",
        "employeeId": "EMP-2026-001",
        "staffId": "TCH-1001",
        "name": "Super Admin (Prashant)",
        "designation": "Teacher",
        "department": "Academics",
        "punchDate": "2026-08-19",
        "inTime": "07:34:10 AM",
        "outTime": "02:15:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-19-TCH-1002",
        "employeeId": "EMP-2026-002",
        "staffId": "TCH-1002",
        "name": "PRAMOD KUMAR",
        "designation": "Managing Director",
        "department": "Administration",
        "punchDate": "2026-08-19",
        "inTime": "07:37:17 AM",
        "outTime": "02:17:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-19-TCH-1003",
        "employeeId": "EMP-2026-003",
        "staffId": "TCH-1003",
        "name": "BHOOMI YADAV",
        "designation": "Teacher",
        "department": "Junior",
        "punchDate": "2026-08-19",
        "inTime": "07:15:24 AM",
        "outTime": "02:19:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-19-TCH-1004",
        "employeeId": "EMP-2026-004",
        "staffId": "TCH-1004",
        "name": "POORAN SINGH",
        "designation": "Teacher",
        "department": "Secondary",
        "punchDate": "2026-08-19",
        "inTime": "07:18:31 AM",
        "outTime": "02:21:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-19-TCH-1006",
        "employeeId": "EMP-2026-006",
        "staffId": "TCH-1006",
        "name": "SWATI RAGHAV",
        "designation": "Teacher",
        "department": "Primary",
        "punchDate": "2026-08-19",
        "inTime": "07:24:45 AM",
        "outTime": "02:25:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-19-TCH-1007",
        "employeeId": "EMP-2026-007",
        "staffId": "TCH-1007",
        "name": "AKHILESH AGRAWAL",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-19",
        "inTime": "07:27:52 AM",
        "outTime": "02:27:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-19-TCH-1008",
        "employeeId": "EMP-2026-008",
        "staffId": "TCH-1008",
        "name": "PREMLATA DEVI",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-19",
        "inTime": "07:30:59 AM",
        "outTime": "02:29:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-19-TCH-1009",
        "employeeId": "EMP-2026-009",
        "staffId": "TCH-1009",
        "name": "SANJANA PATHAK",
        "designation": "Teacher",
        "department": "Junior",
        "punchDate": "2026-08-19",
        "inTime": "07:54:16 AM",
        "outTime": "02:31:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "Late Arrival"
    },
    {
        "id": "PUNCH-2026-08-19-TCH-1010",
        "employeeId": "EMP-2026-010",
        "staffId": "TCH-1010",
        "name": "RACHANA DEVI",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-19",
        "inTime": "07:36:23 AM",
        "outTime": "02:33:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-19-TCH-1011",
        "employeeId": "EMP-2026-011",
        "staffId": "TCH-1011",
        "name": "PRAMOD KUMAR SHARMA",
        "designation": "Teacher",
        "department": "Secondary",
        "punchDate": "2026-08-19",
        "inTime": "07:39:30 AM",
        "outTime": "02:35:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-19-TCH-1012",
        "employeeId": "EMP-2026-012",
        "staffId": "TCH-1012",
        "name": "MOHINI CHAUHAN",
        "designation": "Teacher",
        "department": "Primary",
        "punchDate": "2026-08-19",
        "inTime": "07:17:37 AM",
        "outTime": "02:37:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-19-TCH-1013",
        "employeeId": "EMP-2026-013",
        "staffId": "TCH-1013",
        "name": "RAJENDRA SINGH",
        "designation": "Teacher",
        "department": "Primary",
        "punchDate": "2026-08-19",
        "inTime": "07:20:44 AM",
        "outTime": "02:39:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-19-TCH-1014",
        "employeeId": "EMP-2026-014",
        "staffId": "TCH-1014",
        "name": "JAYMALA",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-19",
        "inTime": "07:23:51 AM",
        "outTime": "02:41:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-19-TCH-1015",
        "employeeId": "EMP-2026-015",
        "staffId": "TCH-1015",
        "name": "LALIT KUMAR",
        "designation": "Teacher",
        "department": "Secondary",
        "punchDate": "2026-08-19",
        "inTime": "07:26:58 AM",
        "outTime": "02:43:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-19-TCH-1016",
        "employeeId": "EMP-2026-016",
        "staffId": "TCH-1016",
        "name": "CHOKHELAL",
        "designation": "Driver",
        "department": "Transport",
        "punchDate": "2026-08-19",
        "inTime": "07:29:15 AM",
        "outTime": "02:15:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-19-TCH-1017",
        "employeeId": "EMP-2026-017",
        "staffId": "TCH-1017",
        "name": "NEETU SHARMA",
        "designation": "Teacher",
        "department": "Junior",
        "punchDate": "2026-08-19",
        "inTime": "07:32:22 AM",
        "outTime": "02:17:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-19-TCH-1018",
        "employeeId": "EMP-2026-018",
        "staffId": "TCH-1018",
        "name": "SONU KUMAR",
        "designation": "Driver",
        "department": "Transport",
        "punchDate": "2026-08-19",
        "inTime": "07:54:29 AM",
        "outTime": "02:19:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "Late Arrival"
    },
    {
        "id": "PUNCH-2026-08-19-TCH-1019",
        "employeeId": "EMP-2026-019",
        "staffId": "TCH-1019",
        "name": "Prashant Kumar Rajput",
        "designation": "Principal",
        "department": "Senior Secondary",
        "punchDate": "2026-08-19",
        "inTime": "07:38:36 AM",
        "outTime": "02:21:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-19-TCH-1020",
        "employeeId": "EMP-2026-020",
        "staffId": "TCH-1020",
        "name": "KHUSHI",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-19",
        "inTime": "07:16:43 AM",
        "outTime": "02:23:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-19-TCH-1021",
        "employeeId": "EMP-2026-021",
        "staffId": "TCH-1021",
        "name": "SANDHYA",
        "designation": "Teacher",
        "department": "Primary",
        "punchDate": "2026-08-19",
        "inTime": "07:19:50 AM",
        "outTime": "02:25:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-19-TCH-1022",
        "employeeId": "EMP-2026-022",
        "staffId": "TCH-1022",
        "name": "Aarti",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-19",
        "inTime": "07:22:57 AM",
        "outTime": "02:27:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-19-TCH-1023",
        "employeeId": "EMP-2026-023",
        "staffId": "TCH-1023",
        "name": "SEJAL AGRAWAL",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-19",
        "inTime": "07:25:14 AM",
        "outTime": "02:29:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-20-TCH-1001",
        "employeeId": "EMP-2026-001",
        "staffId": "TCH-1001",
        "name": "Super Admin (Prashant)",
        "designation": "Teacher",
        "department": "Academics",
        "punchDate": "2026-08-20",
        "inTime": "07:35:10 AM",
        "outTime": "02:15:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-20-TCH-1002",
        "employeeId": "EMP-2026-002",
        "staffId": "TCH-1002",
        "name": "PRAMOD KUMAR",
        "designation": "Managing Director",
        "department": "Administration",
        "punchDate": "2026-08-20",
        "inTime": "07:38:17 AM",
        "outTime": "02:17:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-20-TCH-1003",
        "employeeId": "EMP-2026-003",
        "staffId": "TCH-1003",
        "name": "BHOOMI YADAV",
        "designation": "Teacher",
        "department": "Junior",
        "punchDate": "2026-08-20",
        "inTime": "07:16:24 AM",
        "outTime": "02:19:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-20-TCH-1005",
        "employeeId": "EMP-2026-005",
        "staffId": "TCH-1005",
        "name": "SHWETA RAGHAV",
        "designation": "Teacher",
        "department": "Secondary",
        "punchDate": "2026-08-20",
        "inTime": "07:22:38 AM",
        "outTime": "02:23:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-20-TCH-1006",
        "employeeId": "EMP-2026-006",
        "staffId": "TCH-1006",
        "name": "SWATI RAGHAV",
        "designation": "Teacher",
        "department": "Primary",
        "punchDate": "2026-08-20",
        "inTime": "07:25:45 AM",
        "outTime": "02:25:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-20-TCH-1007",
        "employeeId": "EMP-2026-007",
        "staffId": "TCH-1007",
        "name": "AKHILESH AGRAWAL",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-20",
        "inTime": "07:28:52 AM",
        "outTime": "02:27:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-20-TCH-1008",
        "employeeId": "EMP-2026-008",
        "staffId": "TCH-1008",
        "name": "PREMLATA DEVI",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-20",
        "inTime": "07:54:59 AM",
        "outTime": "02:29:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "Late Arrival"
    },
    {
        "id": "PUNCH-2026-08-20-TCH-1009",
        "employeeId": "EMP-2026-009",
        "staffId": "TCH-1009",
        "name": "SANJANA PATHAK",
        "designation": "Teacher",
        "department": "Junior",
        "punchDate": "2026-08-20",
        "inTime": "07:34:16 AM",
        "outTime": "02:31:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-20-TCH-1010",
        "employeeId": "EMP-2026-010",
        "staffId": "TCH-1010",
        "name": "RACHANA DEVI",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-20",
        "inTime": "07:37:23 AM",
        "outTime": "02:33:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-20-TCH-1011",
        "employeeId": "EMP-2026-011",
        "staffId": "TCH-1011",
        "name": "PRAMOD KUMAR SHARMA",
        "designation": "Teacher",
        "department": "Secondary",
        "punchDate": "2026-08-20",
        "inTime": "07:15:30 AM",
        "outTime": "02:35:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-20-TCH-1012",
        "employeeId": "EMP-2026-012",
        "staffId": "TCH-1012",
        "name": "MOHINI CHAUHAN",
        "designation": "Teacher",
        "department": "Primary",
        "punchDate": "2026-08-20",
        "inTime": "07:18:37 AM",
        "outTime": "02:37:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-20-TCH-1013",
        "employeeId": "EMP-2026-013",
        "staffId": "TCH-1013",
        "name": "RAJENDRA SINGH",
        "designation": "Teacher",
        "department": "Primary",
        "punchDate": "2026-08-20",
        "inTime": "07:21:44 AM",
        "outTime": "02:39:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-20-TCH-1014",
        "employeeId": "EMP-2026-014",
        "staffId": "TCH-1014",
        "name": "JAYMALA",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-20",
        "inTime": "07:24:51 AM",
        "outTime": "02:41:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-20-TCH-1015",
        "employeeId": "EMP-2026-015",
        "staffId": "TCH-1015",
        "name": "LALIT KUMAR",
        "designation": "Teacher",
        "department": "Secondary",
        "punchDate": "2026-08-20",
        "inTime": "07:27:58 AM",
        "outTime": "02:43:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-20-TCH-1016",
        "employeeId": "EMP-2026-016",
        "staffId": "TCH-1016",
        "name": "CHOKHELAL",
        "designation": "Driver",
        "department": "Transport",
        "punchDate": "2026-08-20",
        "inTime": "07:30:15 AM",
        "outTime": "02:15:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-20-TCH-1017",
        "employeeId": "EMP-2026-017",
        "staffId": "TCH-1017",
        "name": "NEETU SHARMA",
        "designation": "Teacher",
        "department": "Junior",
        "punchDate": "2026-08-20",
        "inTime": "07:54:22 AM",
        "outTime": "02:17:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "Late Arrival"
    },
    {
        "id": "PUNCH-2026-08-20-TCH-1018",
        "employeeId": "EMP-2026-018",
        "staffId": "TCH-1018",
        "name": "SONU KUMAR",
        "designation": "Driver",
        "department": "Transport",
        "punchDate": "2026-08-20",
        "inTime": "07:36:29 AM",
        "outTime": "02:19:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-20-TCH-1019",
        "employeeId": "EMP-2026-019",
        "staffId": "TCH-1019",
        "name": "Prashant Kumar Rajput",
        "designation": "Principal",
        "department": "Senior Secondary",
        "punchDate": "2026-08-20",
        "inTime": "07:39:36 AM",
        "outTime": "02:21:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-20-TCH-1020",
        "employeeId": "EMP-2026-020",
        "staffId": "TCH-1020",
        "name": "KHUSHI",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-20",
        "inTime": "07:17:43 AM",
        "outTime": "02:23:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-20-TCH-1021",
        "employeeId": "EMP-2026-021",
        "staffId": "TCH-1021",
        "name": "SANDHYA",
        "designation": "Teacher",
        "department": "Primary",
        "punchDate": "2026-08-20",
        "inTime": "07:20:50 AM",
        "outTime": "02:25:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-20-TCH-1022",
        "employeeId": "EMP-2026-022",
        "staffId": "TCH-1022",
        "name": "Aarti",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-20",
        "inTime": "07:23:57 AM",
        "outTime": "02:27:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-20-TCH-1023",
        "employeeId": "EMP-2026-023",
        "staffId": "TCH-1023",
        "name": "SEJAL AGRAWAL",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-20",
        "inTime": "07:26:14 AM",
        "outTime": "02:29:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-21-TCH-1001",
        "employeeId": "EMP-2026-001",
        "staffId": "TCH-1001",
        "name": "Super Admin (Prashant)",
        "designation": "Teacher",
        "department": "Academics",
        "punchDate": "2026-08-21",
        "inTime": "07:36:10 AM",
        "outTime": "02:15:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-21-TCH-1002",
        "employeeId": "EMP-2026-002",
        "staffId": "TCH-1002",
        "name": "PRAMOD KUMAR",
        "designation": "Managing Director",
        "department": "Administration",
        "punchDate": "2026-08-21",
        "inTime": "07:39:17 AM",
        "outTime": "02:17:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-21-TCH-1004",
        "employeeId": "EMP-2026-004",
        "staffId": "TCH-1004",
        "name": "POORAN SINGH",
        "designation": "Teacher",
        "department": "Secondary",
        "punchDate": "2026-08-21",
        "inTime": "07:20:31 AM",
        "outTime": "02:21:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-21-TCH-1005",
        "employeeId": "EMP-2026-005",
        "staffId": "TCH-1005",
        "name": "SHWETA RAGHAV",
        "designation": "Teacher",
        "department": "Secondary",
        "punchDate": "2026-08-21",
        "inTime": "07:23:38 AM",
        "outTime": "02:23:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-21-TCH-1006",
        "employeeId": "EMP-2026-006",
        "staffId": "TCH-1006",
        "name": "SWATI RAGHAV",
        "designation": "Teacher",
        "department": "Primary",
        "punchDate": "2026-08-21",
        "inTime": "07:26:45 AM",
        "outTime": "02:25:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-21-TCH-1007",
        "employeeId": "EMP-2026-007",
        "staffId": "TCH-1007",
        "name": "AKHILESH AGRAWAL",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-21",
        "inTime": "07:54:52 AM",
        "outTime": "02:27:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "Late Arrival"
    },
    {
        "id": "PUNCH-2026-08-21-TCH-1008",
        "employeeId": "EMP-2026-008",
        "staffId": "TCH-1008",
        "name": "PREMLATA DEVI",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-21",
        "inTime": "07:32:59 AM",
        "outTime": "02:29:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-21-TCH-1009",
        "employeeId": "EMP-2026-009",
        "staffId": "TCH-1009",
        "name": "SANJANA PATHAK",
        "designation": "Teacher",
        "department": "Junior",
        "punchDate": "2026-08-21",
        "inTime": "07:35:16 AM",
        "outTime": "02:31:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-21-TCH-1010",
        "employeeId": "EMP-2026-010",
        "staffId": "TCH-1010",
        "name": "RACHANA DEVI",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-21",
        "inTime": "07:38:23 AM",
        "outTime": "02:33:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-21-TCH-1011",
        "employeeId": "EMP-2026-011",
        "staffId": "TCH-1011",
        "name": "PRAMOD KUMAR SHARMA",
        "designation": "Teacher",
        "department": "Secondary",
        "punchDate": "2026-08-21",
        "inTime": "07:16:30 AM",
        "outTime": "02:35:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-21-TCH-1012",
        "employeeId": "EMP-2026-012",
        "staffId": "TCH-1012",
        "name": "MOHINI CHAUHAN",
        "designation": "Teacher",
        "department": "Primary",
        "punchDate": "2026-08-21",
        "inTime": "07:19:37 AM",
        "outTime": "02:37:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-21-TCH-1013",
        "employeeId": "EMP-2026-013",
        "staffId": "TCH-1013",
        "name": "RAJENDRA SINGH",
        "designation": "Teacher",
        "department": "Primary",
        "punchDate": "2026-08-21",
        "inTime": "07:22:44 AM",
        "outTime": "02:39:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-21-TCH-1014",
        "employeeId": "EMP-2026-014",
        "staffId": "TCH-1014",
        "name": "JAYMALA",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-21",
        "inTime": "07:25:51 AM",
        "outTime": "02:41:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-21-TCH-1015",
        "employeeId": "EMP-2026-015",
        "staffId": "TCH-1015",
        "name": "LALIT KUMAR",
        "designation": "Teacher",
        "department": "Secondary",
        "punchDate": "2026-08-21",
        "inTime": "07:28:58 AM",
        "outTime": "02:43:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-21-TCH-1016",
        "employeeId": "EMP-2026-016",
        "staffId": "TCH-1016",
        "name": "CHOKHELAL",
        "designation": "Driver",
        "department": "Transport",
        "punchDate": "2026-08-21",
        "inTime": "07:54:15 AM",
        "outTime": "02:15:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "Late Arrival"
    },
    {
        "id": "PUNCH-2026-08-21-TCH-1017",
        "employeeId": "EMP-2026-017",
        "staffId": "TCH-1017",
        "name": "NEETU SHARMA",
        "designation": "Teacher",
        "department": "Junior",
        "punchDate": "2026-08-21",
        "inTime": "07:34:22 AM",
        "outTime": "02:17:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-21-TCH-1018",
        "employeeId": "EMP-2026-018",
        "staffId": "TCH-1018",
        "name": "SONU KUMAR",
        "designation": "Driver",
        "department": "Transport",
        "punchDate": "2026-08-21",
        "inTime": "07:37:29 AM",
        "outTime": "02:19:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-21-TCH-1019",
        "employeeId": "EMP-2026-019",
        "staffId": "TCH-1019",
        "name": "Prashant Kumar Rajput",
        "designation": "Principal",
        "department": "Senior Secondary",
        "punchDate": "2026-08-21",
        "inTime": "07:15:36 AM",
        "outTime": "02:21:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-21-TCH-1020",
        "employeeId": "EMP-2026-020",
        "staffId": "TCH-1020",
        "name": "KHUSHI",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-21",
        "inTime": "07:18:43 AM",
        "outTime": "02:23:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-21-TCH-1021",
        "employeeId": "EMP-2026-021",
        "staffId": "TCH-1021",
        "name": "SANDHYA",
        "designation": "Teacher",
        "department": "Primary",
        "punchDate": "2026-08-21",
        "inTime": "07:21:50 AM",
        "outTime": "02:25:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-21-TCH-1022",
        "employeeId": "EMP-2026-022",
        "staffId": "TCH-1022",
        "name": "Aarti",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-21",
        "inTime": "07:24:57 AM",
        "outTime": "02:27:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-21-TCH-1023",
        "employeeId": "EMP-2026-023",
        "staffId": "TCH-1023",
        "name": "SEJAL AGRAWAL",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-21",
        "inTime": "07:27:14 AM",
        "outTime": "02:29:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-22-TCH-1001",
        "employeeId": "EMP-2026-001",
        "staffId": "TCH-1001",
        "name": "Super Admin (Prashant)",
        "designation": "Teacher",
        "department": "Academics",
        "punchDate": "2026-08-22",
        "inTime": "07:37:10 AM",
        "outTime": "02:15:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-22-TCH-1003",
        "employeeId": "EMP-2026-003",
        "staffId": "TCH-1003",
        "name": "BHOOMI YADAV",
        "designation": "Teacher",
        "department": "Junior",
        "punchDate": "2026-08-22",
        "inTime": "07:18:24 AM",
        "outTime": "02:19:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-22-TCH-1004",
        "employeeId": "EMP-2026-004",
        "staffId": "TCH-1004",
        "name": "POORAN SINGH",
        "designation": "Teacher",
        "department": "Secondary",
        "punchDate": "2026-08-22",
        "inTime": "07:21:31 AM",
        "outTime": "02:21:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-22-TCH-1005",
        "employeeId": "EMP-2026-005",
        "staffId": "TCH-1005",
        "name": "SHWETA RAGHAV",
        "designation": "Teacher",
        "department": "Secondary",
        "punchDate": "2026-08-22",
        "inTime": "07:24:38 AM",
        "outTime": "02:23:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-22-TCH-1006",
        "employeeId": "EMP-2026-006",
        "staffId": "TCH-1006",
        "name": "SWATI RAGHAV",
        "designation": "Teacher",
        "department": "Primary",
        "punchDate": "2026-08-22",
        "inTime": "07:54:45 AM",
        "outTime": "02:25:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "Late Arrival"
    },
    {
        "id": "PUNCH-2026-08-22-TCH-1007",
        "employeeId": "EMP-2026-007",
        "staffId": "TCH-1007",
        "name": "AKHILESH AGRAWAL",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-22",
        "inTime": "07:30:52 AM",
        "outTime": "02:27:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-22-TCH-1008",
        "employeeId": "EMP-2026-008",
        "staffId": "TCH-1008",
        "name": "PREMLATA DEVI",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-22",
        "inTime": "07:33:59 AM",
        "outTime": "02:29:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-22-TCH-1009",
        "employeeId": "EMP-2026-009",
        "staffId": "TCH-1009",
        "name": "SANJANA PATHAK",
        "designation": "Teacher",
        "department": "Junior",
        "punchDate": "2026-08-22",
        "inTime": "07:36:16 AM",
        "outTime": "02:31:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-22-TCH-1010",
        "employeeId": "EMP-2026-010",
        "staffId": "TCH-1010",
        "name": "RACHANA DEVI",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-22",
        "inTime": "07:39:23 AM",
        "outTime": "02:33:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-22-TCH-1011",
        "employeeId": "EMP-2026-011",
        "staffId": "TCH-1011",
        "name": "PRAMOD KUMAR SHARMA",
        "designation": "Teacher",
        "department": "Secondary",
        "punchDate": "2026-08-22",
        "inTime": "07:17:30 AM",
        "outTime": "02:35:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-22-TCH-1012",
        "employeeId": "EMP-2026-012",
        "staffId": "TCH-1012",
        "name": "MOHINI CHAUHAN",
        "designation": "Teacher",
        "department": "Primary",
        "punchDate": "2026-08-22",
        "inTime": "07:20:37 AM",
        "outTime": "02:37:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-22-TCH-1013",
        "employeeId": "EMP-2026-013",
        "staffId": "TCH-1013",
        "name": "RAJENDRA SINGH",
        "designation": "Teacher",
        "department": "Primary",
        "punchDate": "2026-08-22",
        "inTime": "07:23:44 AM",
        "outTime": "02:39:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-22-TCH-1014",
        "employeeId": "EMP-2026-014",
        "staffId": "TCH-1014",
        "name": "JAYMALA",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-22",
        "inTime": "07:26:51 AM",
        "outTime": "02:41:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-22-TCH-1015",
        "employeeId": "EMP-2026-015",
        "staffId": "TCH-1015",
        "name": "LALIT KUMAR",
        "designation": "Teacher",
        "department": "Secondary",
        "punchDate": "2026-08-22",
        "inTime": "07:54:58 AM",
        "outTime": "02:43:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "Late Arrival"
    },
    {
        "id": "PUNCH-2026-08-22-TCH-1016",
        "employeeId": "EMP-2026-016",
        "staffId": "TCH-1016",
        "name": "CHOKHELAL",
        "designation": "Driver",
        "department": "Transport",
        "punchDate": "2026-08-22",
        "inTime": "07:32:15 AM",
        "outTime": "02:15:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-22-TCH-1017",
        "employeeId": "EMP-2026-017",
        "staffId": "TCH-1017",
        "name": "NEETU SHARMA",
        "designation": "Teacher",
        "department": "Junior",
        "punchDate": "2026-08-22",
        "inTime": "07:35:22 AM",
        "outTime": "02:17:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-22-TCH-1018",
        "employeeId": "EMP-2026-018",
        "staffId": "TCH-1018",
        "name": "SONU KUMAR",
        "designation": "Driver",
        "department": "Transport",
        "punchDate": "2026-08-22",
        "inTime": "07:38:29 AM",
        "outTime": "02:19:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-22-TCH-1019",
        "employeeId": "EMP-2026-019",
        "staffId": "TCH-1019",
        "name": "Prashant Kumar Rajput",
        "designation": "Principal",
        "department": "Senior Secondary",
        "punchDate": "2026-08-22",
        "inTime": "07:16:36 AM",
        "outTime": "02:21:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-22-TCH-1020",
        "employeeId": "EMP-2026-020",
        "staffId": "TCH-1020",
        "name": "KHUSHI",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-22",
        "inTime": "07:19:43 AM",
        "outTime": "02:23:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-22-TCH-1021",
        "employeeId": "EMP-2026-021",
        "staffId": "TCH-1021",
        "name": "SANDHYA",
        "designation": "Teacher",
        "department": "Primary",
        "punchDate": "2026-08-22",
        "inTime": "07:22:50 AM",
        "outTime": "02:25:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-22-TCH-1022",
        "employeeId": "EMP-2026-022",
        "staffId": "TCH-1022",
        "name": "Aarti",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-22",
        "inTime": "07:25:57 AM",
        "outTime": "02:27:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-22-TCH-1023",
        "employeeId": "EMP-2026-023",
        "staffId": "TCH-1023",
        "name": "SEJAL AGRAWAL",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-22",
        "inTime": "07:28:14 AM",
        "outTime": "02:29:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-24-TCH-1001",
        "employeeId": "EMP-2026-001",
        "staffId": "TCH-1001",
        "name": "Super Admin (Prashant)",
        "designation": "Teacher",
        "department": "Academics",
        "punchDate": "2026-08-24",
        "inTime": "07:39:10 AM",
        "outTime": "02:15:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-24-TCH-1002",
        "employeeId": "EMP-2026-002",
        "staffId": "TCH-1002",
        "name": "PRAMOD KUMAR",
        "designation": "Managing Director",
        "department": "Administration",
        "punchDate": "2026-08-24",
        "inTime": "07:17:17 AM",
        "outTime": "02:17:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-24-TCH-1003",
        "employeeId": "EMP-2026-003",
        "staffId": "TCH-1003",
        "name": "BHOOMI YADAV",
        "designation": "Teacher",
        "department": "Junior",
        "punchDate": "2026-08-24",
        "inTime": "07:20:24 AM",
        "outTime": "02:19:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-24-TCH-1004",
        "employeeId": "EMP-2026-004",
        "staffId": "TCH-1004",
        "name": "POORAN SINGH",
        "designation": "Teacher",
        "department": "Secondary",
        "punchDate": "2026-08-24",
        "inTime": "07:54:31 AM",
        "outTime": "02:21:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "Late Arrival"
    },
    {
        "id": "PUNCH-2026-08-24-TCH-1005",
        "employeeId": "EMP-2026-005",
        "staffId": "TCH-1005",
        "name": "SHWETA RAGHAV",
        "designation": "Teacher",
        "department": "Secondary",
        "punchDate": "2026-08-24",
        "inTime": "07:26:38 AM",
        "outTime": "02:23:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-24-TCH-1006",
        "employeeId": "EMP-2026-006",
        "staffId": "TCH-1006",
        "name": "SWATI RAGHAV",
        "designation": "Teacher",
        "department": "Primary",
        "punchDate": "2026-08-24",
        "inTime": "07:29:45 AM",
        "outTime": "02:25:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-24-TCH-1007",
        "employeeId": "EMP-2026-007",
        "staffId": "TCH-1007",
        "name": "AKHILESH AGRAWAL",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-24",
        "inTime": "07:32:52 AM",
        "outTime": "02:27:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-24-TCH-1008",
        "employeeId": "EMP-2026-008",
        "staffId": "TCH-1008",
        "name": "PREMLATA DEVI",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-24",
        "inTime": "07:35:59 AM",
        "outTime": "02:29:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-24-TCH-1009",
        "employeeId": "EMP-2026-009",
        "staffId": "TCH-1009",
        "name": "SANJANA PATHAK",
        "designation": "Teacher",
        "department": "Junior",
        "punchDate": "2026-08-24",
        "inTime": "07:38:16 AM",
        "outTime": "02:31:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-24-TCH-1010",
        "employeeId": "EMP-2026-010",
        "staffId": "TCH-1010",
        "name": "RACHANA DEVI",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-24",
        "inTime": "07:16:23 AM",
        "outTime": "02:33:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-24-TCH-1011",
        "employeeId": "EMP-2026-011",
        "staffId": "TCH-1011",
        "name": "PRAMOD KUMAR SHARMA",
        "designation": "Teacher",
        "department": "Secondary",
        "punchDate": "2026-08-24",
        "inTime": "07:19:30 AM",
        "outTime": "02:35:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-24-TCH-1012",
        "employeeId": "EMP-2026-012",
        "staffId": "TCH-1012",
        "name": "MOHINI CHAUHAN",
        "designation": "Teacher",
        "department": "Primary",
        "punchDate": "2026-08-24",
        "inTime": "07:22:37 AM",
        "outTime": "02:37:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-24-TCH-1013",
        "employeeId": "EMP-2026-013",
        "staffId": "TCH-1013",
        "name": "RAJENDRA SINGH",
        "designation": "Teacher",
        "department": "Primary",
        "punchDate": "2026-08-24",
        "inTime": "07:54:44 AM",
        "outTime": "02:39:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "Late Arrival"
    },
    {
        "id": "PUNCH-2026-08-24-TCH-1014",
        "employeeId": "EMP-2026-014",
        "staffId": "TCH-1014",
        "name": "JAYMALA",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-24",
        "inTime": "07:28:51 AM",
        "outTime": "02:41:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-24-TCH-1015",
        "employeeId": "EMP-2026-015",
        "staffId": "TCH-1015",
        "name": "LALIT KUMAR",
        "designation": "Teacher",
        "department": "Secondary",
        "punchDate": "2026-08-24",
        "inTime": "07:31:58 AM",
        "outTime": "02:43:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-24-TCH-1016",
        "employeeId": "EMP-2026-016",
        "staffId": "TCH-1016",
        "name": "CHOKHELAL",
        "designation": "Driver",
        "department": "Transport",
        "punchDate": "2026-08-24",
        "inTime": "07:34:15 AM",
        "outTime": "02:15:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-24-TCH-1017",
        "employeeId": "EMP-2026-017",
        "staffId": "TCH-1017",
        "name": "NEETU SHARMA",
        "designation": "Teacher",
        "department": "Junior",
        "punchDate": "2026-08-24",
        "inTime": "07:37:22 AM",
        "outTime": "02:17:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-24-TCH-1018",
        "employeeId": "EMP-2026-018",
        "staffId": "TCH-1018",
        "name": "SONU KUMAR",
        "designation": "Driver",
        "department": "Transport",
        "punchDate": "2026-08-24",
        "inTime": "07:15:29 AM",
        "outTime": "02:19:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-24-TCH-1019",
        "employeeId": "EMP-2026-019",
        "staffId": "TCH-1019",
        "name": "Prashant Kumar Rajput",
        "designation": "Principal",
        "department": "Senior Secondary",
        "punchDate": "2026-08-24",
        "inTime": "07:18:36 AM",
        "outTime": "02:21:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-24-TCH-1020",
        "employeeId": "EMP-2026-020",
        "staffId": "TCH-1020",
        "name": "KHUSHI",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-24",
        "inTime": "07:21:43 AM",
        "outTime": "02:23:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-24-TCH-1021",
        "employeeId": "EMP-2026-021",
        "staffId": "TCH-1021",
        "name": "SANDHYA",
        "designation": "Teacher",
        "department": "Primary",
        "punchDate": "2026-08-24",
        "inTime": "07:24:50 AM",
        "outTime": "02:25:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-24-TCH-1022",
        "employeeId": "EMP-2026-022",
        "staffId": "TCH-1022",
        "name": "Aarti",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-24",
        "inTime": "07:54:57 AM",
        "outTime": "02:27:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "Late Arrival"
    },
    {
        "id": "PUNCH-2026-08-25-TCH-1001",
        "employeeId": "EMP-2026-001",
        "staffId": "TCH-1001",
        "name": "Super Admin (Prashant)",
        "designation": "Teacher",
        "department": "Academics",
        "punchDate": "2026-08-25",
        "inTime": "07:15:10 AM",
        "outTime": "02:15:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-25-TCH-1002",
        "employeeId": "EMP-2026-002",
        "staffId": "TCH-1002",
        "name": "PRAMOD KUMAR",
        "designation": "Managing Director",
        "department": "Administration",
        "punchDate": "2026-08-25",
        "inTime": "07:18:17 AM",
        "outTime": "02:17:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-25-TCH-1003",
        "employeeId": "EMP-2026-003",
        "staffId": "TCH-1003",
        "name": "BHOOMI YADAV",
        "designation": "Teacher",
        "department": "Junior",
        "punchDate": "2026-08-25",
        "inTime": "07:54:24 AM",
        "outTime": "02:19:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "Late Arrival"
    },
    {
        "id": "PUNCH-2026-08-25-TCH-1004",
        "employeeId": "EMP-2026-004",
        "staffId": "TCH-1004",
        "name": "POORAN SINGH",
        "designation": "Teacher",
        "department": "Secondary",
        "punchDate": "2026-08-25",
        "inTime": "07:24:31 AM",
        "outTime": "02:21:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-25-TCH-1005",
        "employeeId": "EMP-2026-005",
        "staffId": "TCH-1005",
        "name": "SHWETA RAGHAV",
        "designation": "Teacher",
        "department": "Secondary",
        "punchDate": "2026-08-25",
        "inTime": "07:27:38 AM",
        "outTime": "02:23:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-25-TCH-1006",
        "employeeId": "EMP-2026-006",
        "staffId": "TCH-1006",
        "name": "SWATI RAGHAV",
        "designation": "Teacher",
        "department": "Primary",
        "punchDate": "2026-08-25",
        "inTime": "07:30:45 AM",
        "outTime": "02:25:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-25-TCH-1007",
        "employeeId": "EMP-2026-007",
        "staffId": "TCH-1007",
        "name": "AKHILESH AGRAWAL",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-25",
        "inTime": "07:33:52 AM",
        "outTime": "02:27:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-25-TCH-1008",
        "employeeId": "EMP-2026-008",
        "staffId": "TCH-1008",
        "name": "PREMLATA DEVI",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-25",
        "inTime": "07:36:59 AM",
        "outTime": "02:29:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-25-TCH-1009",
        "employeeId": "EMP-2026-009",
        "staffId": "TCH-1009",
        "name": "SANJANA PATHAK",
        "designation": "Teacher",
        "department": "Junior",
        "punchDate": "2026-08-25",
        "inTime": "07:39:16 AM",
        "outTime": "02:31:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-25-TCH-1010",
        "employeeId": "EMP-2026-010",
        "staffId": "TCH-1010",
        "name": "RACHANA DEVI",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-25",
        "inTime": "07:17:23 AM",
        "outTime": "02:33:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-25-TCH-1011",
        "employeeId": "EMP-2026-011",
        "staffId": "TCH-1011",
        "name": "PRAMOD KUMAR SHARMA",
        "designation": "Teacher",
        "department": "Secondary",
        "punchDate": "2026-08-25",
        "inTime": "07:20:30 AM",
        "outTime": "02:35:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-25-TCH-1012",
        "employeeId": "EMP-2026-012",
        "staffId": "TCH-1012",
        "name": "MOHINI CHAUHAN",
        "designation": "Teacher",
        "department": "Primary",
        "punchDate": "2026-08-25",
        "inTime": "07:54:37 AM",
        "outTime": "02:37:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "Late Arrival"
    },
    {
        "id": "PUNCH-2026-08-25-TCH-1013",
        "employeeId": "EMP-2026-013",
        "staffId": "TCH-1013",
        "name": "RAJENDRA SINGH",
        "designation": "Teacher",
        "department": "Primary",
        "punchDate": "2026-08-25",
        "inTime": "07:26:44 AM",
        "outTime": "02:39:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-25-TCH-1014",
        "employeeId": "EMP-2026-014",
        "staffId": "TCH-1014",
        "name": "JAYMALA",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-25",
        "inTime": "07:29:51 AM",
        "outTime": "02:41:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-25-TCH-1015",
        "employeeId": "EMP-2026-015",
        "staffId": "TCH-1015",
        "name": "LALIT KUMAR",
        "designation": "Teacher",
        "department": "Secondary",
        "punchDate": "2026-08-25",
        "inTime": "07:32:58 AM",
        "outTime": "02:43:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-25-TCH-1016",
        "employeeId": "EMP-2026-016",
        "staffId": "TCH-1016",
        "name": "CHOKHELAL",
        "designation": "Driver",
        "department": "Transport",
        "punchDate": "2026-08-25",
        "inTime": "07:35:15 AM",
        "outTime": "02:15:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-25-TCH-1017",
        "employeeId": "EMP-2026-017",
        "staffId": "TCH-1017",
        "name": "NEETU SHARMA",
        "designation": "Teacher",
        "department": "Junior",
        "punchDate": "2026-08-25",
        "inTime": "07:38:22 AM",
        "outTime": "02:17:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-25-TCH-1018",
        "employeeId": "EMP-2026-018",
        "staffId": "TCH-1018",
        "name": "SONU KUMAR",
        "designation": "Driver",
        "department": "Transport",
        "punchDate": "2026-08-25",
        "inTime": "07:16:29 AM",
        "outTime": "02:19:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-25-TCH-1019",
        "employeeId": "EMP-2026-019",
        "staffId": "TCH-1019",
        "name": "Prashant Kumar Rajput",
        "designation": "Principal",
        "department": "Senior Secondary",
        "punchDate": "2026-08-25",
        "inTime": "07:19:36 AM",
        "outTime": "02:21:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-25-TCH-1020",
        "employeeId": "EMP-2026-020",
        "staffId": "TCH-1020",
        "name": "KHUSHI",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-25",
        "inTime": "07:22:43 AM",
        "outTime": "02:23:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-25-TCH-1021",
        "employeeId": "EMP-2026-021",
        "staffId": "TCH-1021",
        "name": "SANDHYA",
        "designation": "Teacher",
        "department": "Primary",
        "punchDate": "2026-08-25",
        "inTime": "07:54:50 AM",
        "outTime": "02:25:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "Late Arrival"
    },
    {
        "id": "PUNCH-2026-08-25-TCH-1023",
        "employeeId": "EMP-2026-023",
        "staffId": "TCH-1023",
        "name": "SEJAL AGRAWAL",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-25",
        "inTime": "07:31:14 AM",
        "outTime": "02:29:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-26-TCH-1001",
        "employeeId": "EMP-2026-001",
        "staffId": "TCH-1001",
        "name": "Super Admin (Prashant)",
        "designation": "Teacher",
        "department": "Academics",
        "punchDate": "2026-08-26",
        "inTime": "07:16:10 AM",
        "outTime": "02:15:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-26-TCH-1002",
        "employeeId": "EMP-2026-002",
        "staffId": "TCH-1002",
        "name": "PRAMOD KUMAR",
        "designation": "Managing Director",
        "department": "Administration",
        "punchDate": "2026-08-26",
        "inTime": "07:54:17 AM",
        "outTime": "02:17:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "Late Arrival"
    },
    {
        "id": "PUNCH-2026-08-26-TCH-1003",
        "employeeId": "EMP-2026-003",
        "staffId": "TCH-1003",
        "name": "BHOOMI YADAV",
        "designation": "Teacher",
        "department": "Junior",
        "punchDate": "2026-08-26",
        "inTime": "07:22:24 AM",
        "outTime": "02:19:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-26-TCH-1004",
        "employeeId": "EMP-2026-004",
        "staffId": "TCH-1004",
        "name": "POORAN SINGH",
        "designation": "Teacher",
        "department": "Secondary",
        "punchDate": "2026-08-26",
        "inTime": "07:25:31 AM",
        "outTime": "02:21:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-26-TCH-1005",
        "employeeId": "EMP-2026-005",
        "staffId": "TCH-1005",
        "name": "SHWETA RAGHAV",
        "designation": "Teacher",
        "department": "Secondary",
        "punchDate": "2026-08-26",
        "inTime": "07:28:38 AM",
        "outTime": "02:23:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-26-TCH-1006",
        "employeeId": "EMP-2026-006",
        "staffId": "TCH-1006",
        "name": "SWATI RAGHAV",
        "designation": "Teacher",
        "department": "Primary",
        "punchDate": "2026-08-26",
        "inTime": "07:31:45 AM",
        "outTime": "02:25:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-26-TCH-1007",
        "employeeId": "EMP-2026-007",
        "staffId": "TCH-1007",
        "name": "AKHILESH AGRAWAL",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-26",
        "inTime": "07:34:52 AM",
        "outTime": "02:27:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-26-TCH-1008",
        "employeeId": "EMP-2026-008",
        "staffId": "TCH-1008",
        "name": "PREMLATA DEVI",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-26",
        "inTime": "07:37:59 AM",
        "outTime": "02:29:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-26-TCH-1009",
        "employeeId": "EMP-2026-009",
        "staffId": "TCH-1009",
        "name": "SANJANA PATHAK",
        "designation": "Teacher",
        "department": "Junior",
        "punchDate": "2026-08-26",
        "inTime": "07:15:16 AM",
        "outTime": "02:31:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-26-TCH-1010",
        "employeeId": "EMP-2026-010",
        "staffId": "TCH-1010",
        "name": "RACHANA DEVI",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-26",
        "inTime": "07:18:23 AM",
        "outTime": "02:33:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-26-TCH-1011",
        "employeeId": "EMP-2026-011",
        "staffId": "TCH-1011",
        "name": "PRAMOD KUMAR SHARMA",
        "designation": "Teacher",
        "department": "Secondary",
        "punchDate": "2026-08-26",
        "inTime": "07:54:30 AM",
        "outTime": "02:35:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "Late Arrival"
    },
    {
        "id": "PUNCH-2026-08-26-TCH-1012",
        "employeeId": "EMP-2026-012",
        "staffId": "TCH-1012",
        "name": "MOHINI CHAUHAN",
        "designation": "Teacher",
        "department": "Primary",
        "punchDate": "2026-08-26",
        "inTime": "07:24:37 AM",
        "outTime": "02:37:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-26-TCH-1013",
        "employeeId": "EMP-2026-013",
        "staffId": "TCH-1013",
        "name": "RAJENDRA SINGH",
        "designation": "Teacher",
        "department": "Primary",
        "punchDate": "2026-08-26",
        "inTime": "07:27:44 AM",
        "outTime": "02:39:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-26-TCH-1014",
        "employeeId": "EMP-2026-014",
        "staffId": "TCH-1014",
        "name": "JAYMALA",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-26",
        "inTime": "07:30:51 AM",
        "outTime": "02:41:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-26-TCH-1015",
        "employeeId": "EMP-2026-015",
        "staffId": "TCH-1015",
        "name": "LALIT KUMAR",
        "designation": "Teacher",
        "department": "Secondary",
        "punchDate": "2026-08-26",
        "inTime": "07:33:58 AM",
        "outTime": "02:43:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-26-TCH-1016",
        "employeeId": "EMP-2026-016",
        "staffId": "TCH-1016",
        "name": "CHOKHELAL",
        "designation": "Driver",
        "department": "Transport",
        "punchDate": "2026-08-26",
        "inTime": "07:36:15 AM",
        "outTime": "02:15:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-26-TCH-1017",
        "employeeId": "EMP-2026-017",
        "staffId": "TCH-1017",
        "name": "NEETU SHARMA",
        "designation": "Teacher",
        "department": "Junior",
        "punchDate": "2026-08-26",
        "inTime": "07:39:22 AM",
        "outTime": "02:17:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-26-TCH-1018",
        "employeeId": "EMP-2026-018",
        "staffId": "TCH-1018",
        "name": "SONU KUMAR",
        "designation": "Driver",
        "department": "Transport",
        "punchDate": "2026-08-26",
        "inTime": "07:17:29 AM",
        "outTime": "02:19:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-26-TCH-1019",
        "employeeId": "EMP-2026-019",
        "staffId": "TCH-1019",
        "name": "Prashant Kumar Rajput",
        "designation": "Principal",
        "department": "Senior Secondary",
        "punchDate": "2026-08-26",
        "inTime": "07:20:36 AM",
        "outTime": "02:21:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-26-TCH-1020",
        "employeeId": "EMP-2026-020",
        "staffId": "TCH-1020",
        "name": "KHUSHI",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-26",
        "inTime": "07:54:43 AM",
        "outTime": "02:23:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "Late Arrival"
    },
    {
        "id": "PUNCH-2026-08-26-TCH-1022",
        "employeeId": "EMP-2026-022",
        "staffId": "TCH-1022",
        "name": "Aarti",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-26",
        "inTime": "07:29:57 AM",
        "outTime": "02:27:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-26-TCH-1023",
        "employeeId": "EMP-2026-023",
        "staffId": "TCH-1023",
        "name": "SEJAL AGRAWAL",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-26",
        "inTime": "07:32:14 AM",
        "outTime": "02:29:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-27-TCH-1001",
        "employeeId": "EMP-2026-001",
        "staffId": "TCH-1001",
        "name": "Super Admin (Prashant)",
        "designation": "Teacher",
        "department": "Academics",
        "punchDate": "2026-08-27",
        "inTime": "07:54:10 AM",
        "outTime": "02:15:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "Late Arrival"
    },
    {
        "id": "PUNCH-2026-08-27-TCH-1002",
        "employeeId": "EMP-2026-002",
        "staffId": "TCH-1002",
        "name": "PRAMOD KUMAR",
        "designation": "Managing Director",
        "department": "Administration",
        "punchDate": "2026-08-27",
        "inTime": "07:20:17 AM",
        "outTime": "02:17:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-27-TCH-1003",
        "employeeId": "EMP-2026-003",
        "staffId": "TCH-1003",
        "name": "BHOOMI YADAV",
        "designation": "Teacher",
        "department": "Junior",
        "punchDate": "2026-08-27",
        "inTime": "07:23:24 AM",
        "outTime": "02:19:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-27-TCH-1004",
        "employeeId": "EMP-2026-004",
        "staffId": "TCH-1004",
        "name": "POORAN SINGH",
        "designation": "Teacher",
        "department": "Secondary",
        "punchDate": "2026-08-27",
        "inTime": "07:26:31 AM",
        "outTime": "02:21:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-27-TCH-1005",
        "employeeId": "EMP-2026-005",
        "staffId": "TCH-1005",
        "name": "SHWETA RAGHAV",
        "designation": "Teacher",
        "department": "Secondary",
        "punchDate": "2026-08-27",
        "inTime": "07:29:38 AM",
        "outTime": "02:23:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-27-TCH-1006",
        "employeeId": "EMP-2026-006",
        "staffId": "TCH-1006",
        "name": "SWATI RAGHAV",
        "designation": "Teacher",
        "department": "Primary",
        "punchDate": "2026-08-27",
        "inTime": "07:32:45 AM",
        "outTime": "02:25:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-27-TCH-1007",
        "employeeId": "EMP-2026-007",
        "staffId": "TCH-1007",
        "name": "AKHILESH AGRAWAL",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-27",
        "inTime": "07:35:52 AM",
        "outTime": "02:27:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-27-TCH-1008",
        "employeeId": "EMP-2026-008",
        "staffId": "TCH-1008",
        "name": "PREMLATA DEVI",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-27",
        "inTime": "07:38:59 AM",
        "outTime": "02:29:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-27-TCH-1009",
        "employeeId": "EMP-2026-009",
        "staffId": "TCH-1009",
        "name": "SANJANA PATHAK",
        "designation": "Teacher",
        "department": "Junior",
        "punchDate": "2026-08-27",
        "inTime": "07:16:16 AM",
        "outTime": "02:31:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-27-TCH-1010",
        "employeeId": "EMP-2026-010",
        "staffId": "TCH-1010",
        "name": "RACHANA DEVI",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-27",
        "inTime": "07:54:23 AM",
        "outTime": "02:33:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "Late Arrival"
    },
    {
        "id": "PUNCH-2026-08-27-TCH-1011",
        "employeeId": "EMP-2026-011",
        "staffId": "TCH-1011",
        "name": "PRAMOD KUMAR SHARMA",
        "designation": "Teacher",
        "department": "Secondary",
        "punchDate": "2026-08-27",
        "inTime": "07:22:30 AM",
        "outTime": "02:35:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-27-TCH-1012",
        "employeeId": "EMP-2026-012",
        "staffId": "TCH-1012",
        "name": "MOHINI CHAUHAN",
        "designation": "Teacher",
        "department": "Primary",
        "punchDate": "2026-08-27",
        "inTime": "07:25:37 AM",
        "outTime": "02:37:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-27-TCH-1013",
        "employeeId": "EMP-2026-013",
        "staffId": "TCH-1013",
        "name": "RAJENDRA SINGH",
        "designation": "Teacher",
        "department": "Primary",
        "punchDate": "2026-08-27",
        "inTime": "07:28:44 AM",
        "outTime": "02:39:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-27-TCH-1014",
        "employeeId": "EMP-2026-014",
        "staffId": "TCH-1014",
        "name": "JAYMALA",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-27",
        "inTime": "07:31:51 AM",
        "outTime": "02:41:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-27-TCH-1015",
        "employeeId": "EMP-2026-015",
        "staffId": "TCH-1015",
        "name": "LALIT KUMAR",
        "designation": "Teacher",
        "department": "Secondary",
        "punchDate": "2026-08-27",
        "inTime": "07:34:58 AM",
        "outTime": "02:43:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-27-TCH-1016",
        "employeeId": "EMP-2026-016",
        "staffId": "TCH-1016",
        "name": "CHOKHELAL",
        "designation": "Driver",
        "department": "Transport",
        "punchDate": "2026-08-27",
        "inTime": "07:37:15 AM",
        "outTime": "02:15:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-27-TCH-1017",
        "employeeId": "EMP-2026-017",
        "staffId": "TCH-1017",
        "name": "NEETU SHARMA",
        "designation": "Teacher",
        "department": "Junior",
        "punchDate": "2026-08-27",
        "inTime": "07:15:22 AM",
        "outTime": "02:17:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-27-TCH-1018",
        "employeeId": "EMP-2026-018",
        "staffId": "TCH-1018",
        "name": "SONU KUMAR",
        "designation": "Driver",
        "department": "Transport",
        "punchDate": "2026-08-27",
        "inTime": "07:18:29 AM",
        "outTime": "02:19:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-27-TCH-1019",
        "employeeId": "EMP-2026-019",
        "staffId": "TCH-1019",
        "name": "Prashant Kumar Rajput",
        "designation": "Principal",
        "department": "Senior Secondary",
        "punchDate": "2026-08-27",
        "inTime": "07:54:36 AM",
        "outTime": "02:21:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "Late Arrival"
    },
    {
        "id": "PUNCH-2026-08-27-TCH-1021",
        "employeeId": "EMP-2026-021",
        "staffId": "TCH-1021",
        "name": "SANDHYA",
        "designation": "Teacher",
        "department": "Primary",
        "punchDate": "2026-08-27",
        "inTime": "07:27:50 AM",
        "outTime": "02:25:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-27-TCH-1022",
        "employeeId": "EMP-2026-022",
        "staffId": "TCH-1022",
        "name": "Aarti",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-27",
        "inTime": "07:30:57 AM",
        "outTime": "02:27:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-27-TCH-1023",
        "employeeId": "EMP-2026-023",
        "staffId": "TCH-1023",
        "name": "SEJAL AGRAWAL",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-27",
        "inTime": "07:33:14 AM",
        "outTime": "02:29:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-28-TCH-1001",
        "employeeId": "EMP-2026-001",
        "staffId": "TCH-1001",
        "name": "Super Admin (Prashant)",
        "designation": "Teacher",
        "department": "Academics",
        "punchDate": "2026-08-28",
        "inTime": "07:18:10 AM",
        "outTime": "02:15:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-28-TCH-1002",
        "employeeId": "EMP-2026-002",
        "staffId": "TCH-1002",
        "name": "PRAMOD KUMAR",
        "designation": "Managing Director",
        "department": "Administration",
        "punchDate": "2026-08-28",
        "inTime": "07:21:17 AM",
        "outTime": "02:17:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-28-TCH-1003",
        "employeeId": "EMP-2026-003",
        "staffId": "TCH-1003",
        "name": "BHOOMI YADAV",
        "designation": "Teacher",
        "department": "Junior",
        "punchDate": "2026-08-28",
        "inTime": "07:24:24 AM",
        "outTime": "02:19:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-28-TCH-1004",
        "employeeId": "EMP-2026-004",
        "staffId": "TCH-1004",
        "name": "POORAN SINGH",
        "designation": "Teacher",
        "department": "Secondary",
        "punchDate": "2026-08-28",
        "inTime": "07:27:31 AM",
        "outTime": "02:21:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-28-TCH-1005",
        "employeeId": "EMP-2026-005",
        "staffId": "TCH-1005",
        "name": "SHWETA RAGHAV",
        "designation": "Teacher",
        "department": "Secondary",
        "punchDate": "2026-08-28",
        "inTime": "07:30:38 AM",
        "outTime": "02:23:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-28-TCH-1006",
        "employeeId": "EMP-2026-006",
        "staffId": "TCH-1006",
        "name": "SWATI RAGHAV",
        "designation": "Teacher",
        "department": "Primary",
        "punchDate": "2026-08-28",
        "inTime": "07:33:45 AM",
        "outTime": "02:25:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-28-TCH-1007",
        "employeeId": "EMP-2026-007",
        "staffId": "TCH-1007",
        "name": "AKHILESH AGRAWAL",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-28",
        "inTime": "07:36:52 AM",
        "outTime": "02:27:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-28-TCH-1008",
        "employeeId": "EMP-2026-008",
        "staffId": "TCH-1008",
        "name": "PREMLATA DEVI",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-28",
        "inTime": "07:39:59 AM",
        "outTime": "02:29:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-28-TCH-1009",
        "employeeId": "EMP-2026-009",
        "staffId": "TCH-1009",
        "name": "SANJANA PATHAK",
        "designation": "Teacher",
        "department": "Junior",
        "punchDate": "2026-08-28",
        "inTime": "07:54:16 AM",
        "outTime": "02:31:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "Late Arrival"
    },
    {
        "id": "PUNCH-2026-08-28-TCH-1010",
        "employeeId": "EMP-2026-010",
        "staffId": "TCH-1010",
        "name": "RACHANA DEVI",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-28",
        "inTime": "07:20:23 AM",
        "outTime": "02:33:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-28-TCH-1011",
        "employeeId": "EMP-2026-011",
        "staffId": "TCH-1011",
        "name": "PRAMOD KUMAR SHARMA",
        "designation": "Teacher",
        "department": "Secondary",
        "punchDate": "2026-08-28",
        "inTime": "07:23:30 AM",
        "outTime": "02:35:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-28-TCH-1012",
        "employeeId": "EMP-2026-012",
        "staffId": "TCH-1012",
        "name": "MOHINI CHAUHAN",
        "designation": "Teacher",
        "department": "Primary",
        "punchDate": "2026-08-28",
        "inTime": "07:26:37 AM",
        "outTime": "02:37:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-28-TCH-1013",
        "employeeId": "EMP-2026-013",
        "staffId": "TCH-1013",
        "name": "RAJENDRA SINGH",
        "designation": "Teacher",
        "department": "Primary",
        "punchDate": "2026-08-28",
        "inTime": "07:29:44 AM",
        "outTime": "02:39:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-28-TCH-1014",
        "employeeId": "EMP-2026-014",
        "staffId": "TCH-1014",
        "name": "JAYMALA",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-28",
        "inTime": "07:32:51 AM",
        "outTime": "02:41:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-28-TCH-1015",
        "employeeId": "EMP-2026-015",
        "staffId": "TCH-1015",
        "name": "LALIT KUMAR",
        "designation": "Teacher",
        "department": "Secondary",
        "punchDate": "2026-08-28",
        "inTime": "07:35:58 AM",
        "outTime": "02:43:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-28-TCH-1016",
        "employeeId": "EMP-2026-016",
        "staffId": "TCH-1016",
        "name": "CHOKHELAL",
        "designation": "Driver",
        "department": "Transport",
        "punchDate": "2026-08-28",
        "inTime": "07:38:15 AM",
        "outTime": "02:15:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-28-TCH-1017",
        "employeeId": "EMP-2026-017",
        "staffId": "TCH-1017",
        "name": "NEETU SHARMA",
        "designation": "Teacher",
        "department": "Junior",
        "punchDate": "2026-08-28",
        "inTime": "07:16:22 AM",
        "outTime": "02:17:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-28-TCH-1018",
        "employeeId": "EMP-2026-018",
        "staffId": "TCH-1018",
        "name": "SONU KUMAR",
        "designation": "Driver",
        "department": "Transport",
        "punchDate": "2026-08-28",
        "inTime": "07:54:29 AM",
        "outTime": "02:19:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "Late Arrival"
    },
    {
        "id": "PUNCH-2026-08-28-TCH-1020",
        "employeeId": "EMP-2026-020",
        "staffId": "TCH-1020",
        "name": "KHUSHI",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-28",
        "inTime": "07:25:43 AM",
        "outTime": "02:23:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-28-TCH-1021",
        "employeeId": "EMP-2026-021",
        "staffId": "TCH-1021",
        "name": "SANDHYA",
        "designation": "Teacher",
        "department": "Primary",
        "punchDate": "2026-08-28",
        "inTime": "07:28:50 AM",
        "outTime": "02:25:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-28-TCH-1022",
        "employeeId": "EMP-2026-022",
        "staffId": "TCH-1022",
        "name": "Aarti",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-28",
        "inTime": "07:31:57 AM",
        "outTime": "02:27:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-28-TCH-1023",
        "employeeId": "EMP-2026-023",
        "staffId": "TCH-1023",
        "name": "SEJAL AGRAWAL",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-28",
        "inTime": "07:34:14 AM",
        "outTime": "02:29:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-29-TCH-1001",
        "employeeId": "EMP-2026-001",
        "staffId": "TCH-1001",
        "name": "Super Admin (Prashant)",
        "designation": "Teacher",
        "department": "Academics",
        "punchDate": "2026-08-29",
        "inTime": "07:19:10 AM",
        "outTime": "02:15:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-29-TCH-1002",
        "employeeId": "EMP-2026-002",
        "staffId": "TCH-1002",
        "name": "PRAMOD KUMAR",
        "designation": "Managing Director",
        "department": "Administration",
        "punchDate": "2026-08-29",
        "inTime": "07:22:17 AM",
        "outTime": "02:17:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-29-TCH-1003",
        "employeeId": "EMP-2026-003",
        "staffId": "TCH-1003",
        "name": "BHOOMI YADAV",
        "designation": "Teacher",
        "department": "Junior",
        "punchDate": "2026-08-29",
        "inTime": "07:25:24 AM",
        "outTime": "02:19:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-29-TCH-1004",
        "employeeId": "EMP-2026-004",
        "staffId": "TCH-1004",
        "name": "POORAN SINGH",
        "designation": "Teacher",
        "department": "Secondary",
        "punchDate": "2026-08-29",
        "inTime": "07:28:31 AM",
        "outTime": "02:21:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-29-TCH-1005",
        "employeeId": "EMP-2026-005",
        "staffId": "TCH-1005",
        "name": "SHWETA RAGHAV",
        "designation": "Teacher",
        "department": "Secondary",
        "punchDate": "2026-08-29",
        "inTime": "07:31:38 AM",
        "outTime": "02:23:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-29-TCH-1006",
        "employeeId": "EMP-2026-006",
        "staffId": "TCH-1006",
        "name": "SWATI RAGHAV",
        "designation": "Teacher",
        "department": "Primary",
        "punchDate": "2026-08-29",
        "inTime": "07:34:45 AM",
        "outTime": "02:25:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-29-TCH-1007",
        "employeeId": "EMP-2026-007",
        "staffId": "TCH-1007",
        "name": "AKHILESH AGRAWAL",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-29",
        "inTime": "07:37:52 AM",
        "outTime": "02:27:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-29-TCH-1008",
        "employeeId": "EMP-2026-008",
        "staffId": "TCH-1008",
        "name": "PREMLATA DEVI",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-29",
        "inTime": "07:54:59 AM",
        "outTime": "02:29:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "Late Arrival"
    },
    {
        "id": "PUNCH-2026-08-29-TCH-1009",
        "employeeId": "EMP-2026-009",
        "staffId": "TCH-1009",
        "name": "SANJANA PATHAK",
        "designation": "Teacher",
        "department": "Junior",
        "punchDate": "2026-08-29",
        "inTime": "07:18:16 AM",
        "outTime": "02:31:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-29-TCH-1010",
        "employeeId": "EMP-2026-010",
        "staffId": "TCH-1010",
        "name": "RACHANA DEVI",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-29",
        "inTime": "07:21:23 AM",
        "outTime": "02:33:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-29-TCH-1011",
        "employeeId": "EMP-2026-011",
        "staffId": "TCH-1011",
        "name": "PRAMOD KUMAR SHARMA",
        "designation": "Teacher",
        "department": "Secondary",
        "punchDate": "2026-08-29",
        "inTime": "07:24:30 AM",
        "outTime": "02:35:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-29-TCH-1012",
        "employeeId": "EMP-2026-012",
        "staffId": "TCH-1012",
        "name": "MOHINI CHAUHAN",
        "designation": "Teacher",
        "department": "Primary",
        "punchDate": "2026-08-29",
        "inTime": "07:27:37 AM",
        "outTime": "02:37:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-29-TCH-1013",
        "employeeId": "EMP-2026-013",
        "staffId": "TCH-1013",
        "name": "RAJENDRA SINGH",
        "designation": "Teacher",
        "department": "Primary",
        "punchDate": "2026-08-29",
        "inTime": "07:30:44 AM",
        "outTime": "02:39:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-29-TCH-1014",
        "employeeId": "EMP-2026-014",
        "staffId": "TCH-1014",
        "name": "JAYMALA",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-29",
        "inTime": "07:33:51 AM",
        "outTime": "02:41:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-29-TCH-1015",
        "employeeId": "EMP-2026-015",
        "staffId": "TCH-1015",
        "name": "LALIT KUMAR",
        "designation": "Teacher",
        "department": "Secondary",
        "punchDate": "2026-08-29",
        "inTime": "07:36:58 AM",
        "outTime": "02:43:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-29-TCH-1016",
        "employeeId": "EMP-2026-016",
        "staffId": "TCH-1016",
        "name": "CHOKHELAL",
        "designation": "Driver",
        "department": "Transport",
        "punchDate": "2026-08-29",
        "inTime": "07:39:15 AM",
        "outTime": "02:15:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-29-TCH-1017",
        "employeeId": "EMP-2026-017",
        "staffId": "TCH-1017",
        "name": "NEETU SHARMA",
        "designation": "Teacher",
        "department": "Junior",
        "punchDate": "2026-08-29",
        "inTime": "07:54:22 AM",
        "outTime": "02:17:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "Late Arrival"
    },
    {
        "id": "PUNCH-2026-08-29-TCH-1019",
        "employeeId": "EMP-2026-019",
        "staffId": "TCH-1019",
        "name": "Prashant Kumar Rajput",
        "designation": "Principal",
        "department": "Senior Secondary",
        "punchDate": "2026-08-29",
        "inTime": "07:23:36 AM",
        "outTime": "02:21:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-29-TCH-1020",
        "employeeId": "EMP-2026-020",
        "staffId": "TCH-1020",
        "name": "KHUSHI",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-29",
        "inTime": "07:26:43 AM",
        "outTime": "02:23:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-29-TCH-1021",
        "employeeId": "EMP-2026-021",
        "staffId": "TCH-1021",
        "name": "SANDHYA",
        "designation": "Teacher",
        "department": "Primary",
        "punchDate": "2026-08-29",
        "inTime": "07:29:50 AM",
        "outTime": "02:25:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-29-TCH-1022",
        "employeeId": "EMP-2026-022",
        "staffId": "TCH-1022",
        "name": "Aarti",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-29",
        "inTime": "07:32:57 AM",
        "outTime": "02:27:15 PM",
        "verifyType": "Fingerprint",
        "deviceSn": "102025020000143",
        "status": "On Time"
    },
    {
        "id": "PUNCH-2026-08-29-TCH-1023",
        "employeeId": "EMP-2026-023",
        "staffId": "TCH-1023",
        "name": "SEJAL AGRAWAL",
        "designation": "Teacher",
        "department": "Pre-Primary",
        "punchDate": "2026-08-29",
        "inTime": "07:35:14 AM",
        "outTime": "02:29:15 PM",
        "verifyType": "Face Recognition",
        "deviceSn": "102025020000143",
        "status": "On Time"
    }
],

  staffAttendance: {},
  attendance: {},
  feeStructures: [],
  feeTransactions: []
};

export default initialSchoolData;
