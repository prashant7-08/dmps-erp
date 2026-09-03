// Comprehensive Seed Database for School ERP System
// 100% Real Synchronized Data from Dadheech Memorial Public School SQL Backup

export const initialSchoolData = {
  schoolInfo: {
    id: "SCH-001",
    name: "Dadheech Memorial Public School",
    tagline: "Education is the movement from darkness to brightness",
    society: "Dadheech Educational Society & Training Institute (Regd. No - 1131)",
    logo: "/logo.png",
    address: "Ramghat Road Border, Jargwan, Bulandshahr (U.P.)",
    phone: "+91 97589 75880, +91 96270 32626",
    email: "dmpsjargawan@gmail.com, dadheechsociety@gmail.com",
    website: "https://www.dmpsjargawan.com",
    affiliation: "Bhartiya Shiksha Board (BSB) • Recognized up to 12th",
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
            "General"
        ],
        "capacity": 50,
        "roomNo": "TF-01"
    },
    {
        "id": "CLS-10",
        "name": "Class 10",
        "numericLevel": 10,
        "streams": [
            "General"
        ],
        "capacity": 50,
        "roomNo": "TF-02"
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
        "name": "Prashant Kumar Rajput",
        "designation": "Super Admin & Principal",
        "department": "Administration",
        "phone": "9719476606",
        "email": "prashant@dmps-school.edu.in",
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
        "salary": 15000,
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
        "salary": 4500,
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
        "salary": 6500,
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
        "salary": 5500,
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
        "salary": 4000,
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
        "salary": 5000,
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
        "salary": 4000,
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
        "salary": 4000,
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
        "salary": 4000,
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
        "salary": 5000,
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
        "leavingDate": "2026-08-13",
        "salary": 4000,
        "branchId": "BR-01",
        "status": "Left"
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
        "salary": 9400,
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
        "salary": 3250,
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
        "salary": 7000,
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
        "salary": 10500,
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
        "salary": 5000,
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
        "leavingDate": "2026-07-13",
        "salary": 10000,
        "branchId": "BR-01",
        "status": "Left"
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
        "salary": 3000,
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
        "salary": 3000,
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
        "salary": 3500,
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
        "salary": 3500,
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
    "photo": "defualt.png",
    "dob": "2011-02-27",
    "gender": "Male",
    "class": "XI",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "Sh. Guardian",
        "motherName": "Smt. Mother",
        "fatherMobile": "6396029548",
        "motherMobile": "6396029548",
        "fatherPhone": "6396029548",
        "motherPhone": "6396029548",
        "address": "GOKULPUR, RAMGHAT",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 82,
        "percentage": 93.2
    },
    "feeSummary": {
        "tuitionDue": 24000,
        "transportDue11Months": 5500,
        "totalDue": 29500,
        "totalPaid": 25075,
        "balance": 4425
    },
    "transport": {
        "stoppage": "GOKULPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0001"
},
{
    "id": "STU-2026-002",
    "sqlId": "2",
    "admissionNo": "120",
    "rollNo": "0",
    "name": "KM. NIDHI",
    "photo": "defualt.png",
    "dob": "2010-09-26",
    "gender": "Female",
    "class": "XI",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "HITESH KUMAR",
        "motherName": "SUMAN DEVI",
        "fatherMobile": "8445195465",
        "motherMobile": "9719628771",
        "fatherPhone": "8445195465",
        "motherPhone": "9719628771",
        "address": "NAGLA VIDHI, JARGWAN (B.S.R)",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 83,
        "percentage": 94.3
    },
    "feeSummary": {
        "tuitionDue": 24000,
        "transportDue11Months": 5500,
        "totalDue": 29500,
        "totalPaid": 13275,
        "balance": 16225
    },
    "transport": {
        "stoppage": "NAGLA VIDHI",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-065"
    ],
    "familyId": "FAM-0002"
},
{
    "id": "STU-2026-003",
    "sqlId": "3",
    "admissionNo": "121",
    "rollNo": "0",
    "name": "PRIYANSHU KUMAR",
    "photo": "defualt.png",
    "dob": "2010-03-12",
    "gender": "Male",
    "class": "XI",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "MANOJ KUMAR",
        "motherName": "LAXMI",
        "fatherMobile": "9761089039",
        "motherMobile": "9761089039",
        "fatherPhone": "9761089039",
        "motherPhone": "9761089039",
        "address": "KANAKPUR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 84,
        "percentage": 95.5
    },
    "feeSummary": {
        "tuitionDue": 24000,
        "transportDue11Months": 5500,
        "totalDue": 29500,
        "totalPaid": 4425,
        "balance": 25075
    },
    "transport": {
        "stoppage": "KANAKPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0003"
},
{
    "id": "STU-2026-004",
    "sqlId": "4",
    "admissionNo": "122",
    "rollNo": "0",
    "name": "RITU YADAV",
    "photo": "defualt.png",
    "dob": "2011-01-01",
    "gender": "Female",
    "class": "XI",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "SURENDRA SINGH",
        "motherName": "KAMLESH",
        "fatherMobile": "9758882443",
        "motherMobile": "9758882443",
        "fatherPhone": "9758882443",
        "motherPhone": "9758882443",
        "address": "JARGWAN",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 85,
        "percentage": 96.6
    },
    "feeSummary": {
        "tuitionDue": 24000,
        "transportDue11Months": 5500,
        "totalDue": 29500,
        "totalPaid": 25075,
        "balance": 4425
    },
    "transport": {
        "stoppage": "JARGWAN",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0004"
},
{
    "id": "STU-2026-005",
    "sqlId": "5",
    "admissionNo": "123",
    "rollNo": "0",
    "name": "SOHIL",
    "photo": "defualt.png",
    "dob": "2011-05-09",
    "gender": "Male",
    "class": "XI",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "BHURE KHAN",
        "motherName": "NAZMA BEGAM",
        "fatherMobile": "9548255028",
        "motherMobile": "9675652016",
        "fatherPhone": "9548255028",
        "motherPhone": "9675652016",
        "address": "KALIYANPUR BHAGIRATHPUR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Muslim"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 86,
        "percentage": 97.7
    },
    "feeSummary": {
        "tuitionDue": 24000,
        "transportDue11Months": 5500,
        "totalDue": 29500,
        "totalPaid": 13275,
        "balance": 16225
    },
    "transport": {
        "stoppage": "KALIYANPUR BHAGIRATHPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0005"
},
{
    "id": "STU-2026-006",
    "sqlId": "6",
    "admissionNo": "124",
    "rollNo": "0",
    "name": "SOMVEER SINGH",
    "photo": "defualt.png",
    "dob": "2010-06-15",
    "gender": "Male",
    "class": "XI",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "DINESH KUMAR",
        "motherName": "JHHANKA DEVI",
        "fatherMobile": "9720002824",
        "motherMobile": "9720002824",
        "fatherPhone": "9720002824",
        "motherPhone": "9720002824",
        "address": "BAIJALA KOTHI",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 87,
        "percentage": 98.9
    },
    "feeSummary": {
        "tuitionDue": 24000,
        "transportDue11Months": 5500,
        "totalDue": 29500,
        "totalPaid": 4425,
        "balance": 25075
    },
    "transport": {
        "stoppage": "BAIJALA KOTHI",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0006"
},
{
    "id": "STU-2026-007",
    "sqlId": "7",
    "admissionNo": "125",
    "rollNo": "0",
    "name": "SUGANDHI",
    "photo": "defualt.png",
    "dob": "2009-08-05",
    "gender": "Female",
    "class": "XI",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "SANJAY KUMAR",
        "motherName": "VEENA",
        "fatherMobile": "6395011712",
        "motherMobile": "6395011712",
        "fatherPhone": "6395011712",
        "motherPhone": "6395011712",
        "address": "MOUNIPURA Urf RAMVAS",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 82,
        "percentage": 93.2
    },
    "feeSummary": {
        "tuitionDue": 24000,
        "transportDue11Months": 5500,
        "totalDue": 29500,
        "totalPaid": 25075,
        "balance": 4425
    },
    "transport": {
        "stoppage": "MOUNIPURA Urf RAMVAS",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-076",
        "STU-2026-156"
    ],
    "familyId": "FAM-0007"
},
{
    "id": "STU-2026-008",
    "sqlId": "8",
    "admissionNo": "126",
    "rollNo": "0",
    "name": "YAMINI",
    "photo": "defualt.png",
    "dob": "2010-04-04",
    "gender": "Female",
    "class": "XI",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "RAJESH KUMAR",
        "motherName": "MITHLESH DEVI",
        "fatherMobile": "9758143201",
        "motherMobile": "9758143201",
        "fatherPhone": "9758143201",
        "motherPhone": "9758143201",
        "address": "MUDAKHERA",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 83,
        "percentage": 94.3
    },
    "feeSummary": {
        "tuitionDue": 24000,
        "transportDue11Months": 5500,
        "totalDue": 29500,
        "totalPaid": 13275,
        "balance": 16225
    },
    "transport": {
        "stoppage": "MUDAKHERA",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0008"
},
{
    "id": "STU-2026-009",
    "sqlId": "9",
    "admissionNo": "127",
    "rollNo": "0",
    "name": "ABHISHEK RAGHAV",
    "photo": "2b6bcbebed02fc09fbfacdc8fa1b52a9.jpg",
    "dob": "2012-11-06",
    "gender": "Male",
    "class": "X",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "OMPAL SINGH",
        "motherName": "SUMITRA",
        "fatherMobile": "9719269114",
        "motherMobile": "7668249844",
        "fatherPhone": "9719269114",
        "motherPhone": "7668249844",
        "address": "MUHAMMADPUR BADHAIRA",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "Gen.",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 84,
        "percentage": 95.5
    },
    "feeSummary": {
        "tuitionDue": 21000,
        "transportDue11Months": 5500,
        "totalDue": 26500,
        "totalPaid": 3975,
        "balance": 22525
    },
    "transport": {
        "stoppage": "MUHAMMADPUR BADHAIRA",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0009"
},
{
    "id": "STU-2026-010",
    "sqlId": "10",
    "admissionNo": "128",
    "rollNo": "0",
    "name": "ANJALI VERMA",
    "photo": "8d66d86e08efd0bc4e742ddbdf26677e.jpg",
    "dob": "2011-01-25",
    "gender": "Female",
    "class": "X",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "AMAR SINGH",
        "motherName": "KAMLESH DEVI",
        "fatherMobile": "6398426834",
        "motherMobile": "9719225225",
        "fatherPhone": "6398426834",
        "motherPhone": "9719225225",
        "address": "NAGLA DHARAKPUR, DHARAKPUR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 85,
        "percentage": 96.6
    },
    "feeSummary": {
        "tuitionDue": 21000,
        "transportDue11Months": 5500,
        "totalDue": 26500,
        "totalPaid": 22525,
        "balance": 3975
    },
    "transport": {
        "stoppage": "NAGLA DHARAKPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-134",
        "STU-2026-164"
    ],
    "familyId": "FAM-0010"
},
{
    "id": "STU-2026-011",
    "sqlId": "11",
    "admissionNo": "131",
    "rollNo": "0",
    "name": "LOVEKUSH",
    "photo": "9be88ca4a7d76c60a2bbbfa2acd1d2df.jpg",
    "dob": "2011-10-15",
    "gender": "Male",
    "class": "X",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "KANHAIYALAL",
        "motherName": "VIMLESH DEVI",
        "fatherMobile": "9528285732",
        "motherMobile": "9557195022",
        "fatherPhone": "9528285732",
        "motherPhone": "9557195022",
        "address": "MUHAMMADPUR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "HINDU"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 86,
        "percentage": 97.7
    },
    "feeSummary": {
        "tuitionDue": 21000,
        "transportDue11Months": 5500,
        "totalDue": 26500,
        "totalPaid": 11925,
        "balance": 14575
    },
    "transport": {
        "stoppage": "MUHAMMADPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0011"
},
{
    "id": "STU-2026-012",
    "sqlId": "12",
    "admissionNo": "132",
    "rollNo": "0",
    "name": "MANISH KUMAR",
    "photo": "eac3f7d2536d8aba0b5adaf496d0ff72.jpg",
    "dob": "2011-06-19",
    "gender": "Male",
    "class": "X",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "DEVESH KUMAR",
        "motherName": "MEENESH DEVI",
        "fatherMobile": "8057001707",
        "motherMobile": "9012982367",
        "fatherPhone": "8057001707",
        "motherPhone": "9012982367",
        "address": "GANGA GARH",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "HINDU"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 87,
        "percentage": 98.9
    },
    "feeSummary": {
        "tuitionDue": 21000,
        "transportDue11Months": 5500,
        "totalDue": 26500,
        "totalPaid": 3975,
        "balance": 22525
    },
    "transport": {
        "stoppage": "GANGA GARH",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-105"
    ],
    "familyId": "FAM-0012"
},
{
    "id": "STU-2026-013",
    "sqlId": "13",
    "admissionNo": "133",
    "rollNo": "0",
    "name": "NANDANI TOMAR",
    "photo": "fd9c874b8235ba9fe9ae4c9ff0332940.jpg",
    "dob": "2011-09-13",
    "gender": "Female",
    "class": "X",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "ANIL TOMAR",
        "motherName": "POONAM DEVI",
        "fatherMobile": "7505158052",
        "motherMobile": "9627228630",
        "fatherPhone": "7505158052",
        "motherPhone": "9627228630",
        "address": "MUHAMMADPUR BADHERA",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "General",
        "religion": "HINDU"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 82,
        "percentage": 93.2
    },
    "feeSummary": {
        "tuitionDue": 21000,
        "transportDue11Months": 5500,
        "totalDue": 26500,
        "totalPaid": 22525,
        "balance": 3975
    },
    "transport": {
        "stoppage": "MUHAMMADPUR BADHERA",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0013"
},
{
    "id": "STU-2026-014",
    "sqlId": "14",
    "admissionNo": "134",
    "rollNo": "0",
    "name": "NEHA",
    "photo": "8877acba8e3a32add734450d162266a2.jpg",
    "dob": "2011-07-15",
    "gender": "Female",
    "class": "X",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "JAYPAL SINGH",
        "motherName": "MEENA KUMARI",
        "fatherMobile": "9258459987",
        "motherMobile": "9911665281",
        "fatherPhone": "9258459987",
        "motherPhone": "9911665281",
        "address": "JARGWAN",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "SC",
        "religion": "HINDU"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 83,
        "percentage": 94.3
    },
    "feeSummary": {
        "tuitionDue": 21000,
        "transportDue11Months": 5500,
        "totalDue": 26500,
        "totalPaid": 11925,
        "balance": 14575
    },
    "transport": {
        "stoppage": "JARGWAN",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-044"
    ],
    "familyId": "FAM-0014"
},
{
    "id": "STU-2026-015",
    "sqlId": "15",
    "admissionNo": "135",
    "rollNo": "0",
    "name": "NITISH RAGHAV",
    "photo": "a1cad0c449bb07b44b734b8a1065cfda.jpg",
    "dob": "2010-10-10",
    "gender": "Male",
    "class": "X",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "AVDHESH KUMAR",
        "motherName": "REKHA",
        "fatherMobile": "522808879",
        "motherMobile": "7906570499",
        "fatherPhone": "522808879",
        "motherPhone": "7906570499",
        "address": "HARVANSHPUR JIROULI DHOOM SINGH ALIGARH",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "General",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 84,
        "percentage": 95.5
    },
    "feeSummary": {
        "tuitionDue": 21000,
        "transportDue11Months": 5500,
        "totalDue": 26500,
        "totalPaid": 3975,
        "balance": 22525
    },
    "transport": {
        "stoppage": "HARVANSHPUR JIROULI DHOOM SINGH ALIGARH",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-368"
    ],
    "familyId": "FAM-0015"
},
{
    "id": "STU-2026-016",
    "sqlId": "16",
    "admissionNo": "136",
    "rollNo": "0",
    "name": "NITIN KUMAR KUMAR",
    "photo": "499a97aa0676dc9145715844bb3400b9.jpg",
    "dob": "2011-10-01",
    "gender": "Male",
    "class": "X",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "RAJESH KUMAR",
        "motherName": "SAROJ DEVI",
        "fatherMobile": "9719477271",
        "motherMobile": "9719492498",
        "fatherPhone": "9719477271",
        "motherPhone": "9719492498",
        "address": "MOUNIPURA RAMGHAT",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "HINDU"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 85,
        "percentage": 96.6
    },
    "feeSummary": {
        "tuitionDue": 21000,
        "transportDue11Months": 5500,
        "totalDue": 26500,
        "totalPaid": 22525,
        "balance": 3975
    },
    "transport": {
        "stoppage": "MOUNIPURA RAMGHAT",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0016"
},
{
    "id": "STU-2026-018",
    "sqlId": "18",
    "admissionNo": "140",
    "rollNo": "0",
    "name": "SACHIN KUMAR",
    "photo": "228d812673146a19819696f8554b1658.jpg",
    "dob": "2015-11-12",
    "gender": "Male",
    "class": "X",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "CHARAN SINGH",
        "motherName": "KESHVATI DEVI",
        "fatherMobile": "9536221981",
        "motherMobile": "9027660846",
        "fatherPhone": "9536221981",
        "motherPhone": "9027660846",
        "address": "KALIYANPUR BHAGIRATHPUR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "HINDU"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 86,
        "percentage": 97.7
    },
    "feeSummary": {
        "tuitionDue": 21000,
        "transportDue11Months": 5500,
        "totalDue": 26500,
        "totalPaid": 11925,
        "balance": 14575
    },
    "transport": {
        "stoppage": "KALIYANPUR BHAGIRATHPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0018"
},
{
    "id": "STU-2026-019",
    "sqlId": "19",
    "admissionNo": "141",
    "rollNo": "0",
    "name": "SANJEEV KUMAR",
    "photo": "93218c86fe08db1c337c5f5f4813bac4.jpg",
    "dob": "2012-07-01",
    "gender": "Male",
    "class": "X",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "RAMBABU",
        "motherName": "RANI DEVI",
        "fatherMobile": "9389530670",
        "motherMobile": "6395604285",
        "fatherPhone": "9389530670",
        "motherPhone": "6395604285",
        "address": "KALIYANPUR BHAGIRATHPUR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "HINDU"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 87,
        "percentage": 98.9
    },
    "feeSummary": {
        "tuitionDue": 21000,
        "transportDue11Months": 5500,
        "totalDue": 26500,
        "totalPaid": 3975,
        "balance": 22525
    },
    "transport": {
        "stoppage": "KALIYANPUR BHAGIRATHPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0019"
},
{
    "id": "STU-2026-020",
    "sqlId": "20",
    "admissionNo": "143",
    "rollNo": "0",
    "name": "SHIVANI YADAV",
    "photo": "49136df6361b6cf44404bdebf0945d61.jpg",
    "dob": "2011-02-03",
    "gender": "Female",
    "class": "X",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "RAJESHWAR SINGH",
        "motherName": "BRIJESH DEVI",
        "fatherMobile": "7037345114",
        "motherMobile": "8650200571",
        "fatherPhone": "7037345114",
        "motherPhone": "8650200571",
        "address": "CHIROURI",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "HINDU"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 82,
        "percentage": 93.2
    },
    "feeSummary": {
        "tuitionDue": 21000,
        "transportDue11Months": 5500,
        "totalDue": 26500,
        "totalPaid": 22525,
        "balance": 3975
    },
    "transport": {
        "stoppage": "CHIROURI",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 4"
    },
    "linkedSiblingIds": [
        "STU-2026-081"
    ],
    "familyId": "FAM-0020"
},
{
    "id": "STU-2026-021",
    "sqlId": "21",
    "admissionNo": "144",
    "rollNo": "0",
    "name": "SUMIT KUMAR",
    "photo": "bb3afe79626a7c7d5d7814b94b965291.jpg",
    "dob": "2011-08-08",
    "gender": "Male",
    "class": "X",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "HARPAL SINGH",
        "motherName": "KAMLESH",
        "fatherMobile": "7060800275",
        "motherMobile": "9761862338",
        "fatherPhone": "7060800275",
        "motherPhone": "9761862338",
        "address": "MUHAMMADPUR BADHERA",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "HINDU"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 83,
        "percentage": 94.3
    },
    "feeSummary": {
        "tuitionDue": 21000,
        "transportDue11Months": 5500,
        "totalDue": 26500,
        "totalPaid": 11925,
        "balance": 14575
    },
    "transport": {
        "stoppage": "MUHAMMADPUR BADHERA",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0021"
},
{
    "id": "STU-2026-022",
    "sqlId": "22",
    "admissionNo": "145",
    "rollNo": "0",
    "name": "UMESH KUMAR",
    "photo": "41984c20121b1881d398335f202f2c27.jpg",
    "dob": "2012-01-02",
    "gender": "Male",
    "class": "X",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "SHRIPAL SINGH",
        "motherName": "MEENA DEVI",
        "fatherMobile": "8869872067",
        "motherMobile": "8395078179",
        "fatherPhone": "8869872067",
        "motherPhone": "8395078179",
        "address": "KALIYANPUR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "HINDU"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 84,
        "percentage": 95.5
    },
    "feeSummary": {
        "tuitionDue": 21000,
        "transportDue11Months": 5500,
        "totalDue": 26500,
        "totalPaid": 3975,
        "balance": 22525
    },
    "transport": {
        "stoppage": "KALIYANPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0022"
},
{
    "id": "STU-2026-023",
    "sqlId": "23",
    "admissionNo": "146",
    "rollNo": "0",
    "name": "YOGENDRA KUMAR",
    "photo": "52caba333aed486df55fee1eb5bc0977.jpg",
    "dob": "2011-04-02",
    "gender": "Male",
    "class": "X",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "SHIVSHANKAR",
        "motherName": "KALAVATI",
        "fatherMobile": "7983438183",
        "motherMobile": "9536402620",
        "fatherPhone": "7983438183",
        "motherPhone": "9536402620",
        "address": "NAGLA SHUMALI BULANDSHAHR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "Lodhi",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 85,
        "percentage": 96.6
    },
    "feeSummary": {
        "tuitionDue": 21000,
        "transportDue11Months": 5500,
        "totalDue": 26500,
        "totalPaid": 22525,
        "balance": 3975
    },
    "transport": {
        "stoppage": "NAGLA SHUMALI BULANDSHAHR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0023"
},
{
    "id": "STU-2026-025",
    "sqlId": "25",
    "admissionNo": "149",
    "rollNo": "39",
    "name": "ARVIND KUMAR",
    "photo": "b79ab85bbdb6a7d27e6c4f27ffd7b8ff.jpg",
    "dob": "2012-03-02",
    "gender": "Male",
    "class": "IX",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "KALIYAN SINGH",
        "motherName": "PUSHPA DEVI",
        "fatherMobile": "9627117495",
        "motherMobile": "9627117495",
        "fatherPhone": "9627117495",
        "motherPhone": "9627117495",
        "address": "KALIYANPUR BHAGIRATHPUR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "AHEER",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 86,
        "percentage": 97.7
    },
    "feeSummary": {
        "tuitionDue": 19500,
        "transportDue11Months": 5500,
        "totalDue": 25000,
        "totalPaid": 11250,
        "balance": 13750
    },
    "transport": {
        "stoppage": "KALIYANPUR BHAGIRATHPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0025"
},
{
    "id": "STU-2026-026",
    "sqlId": "26",
    "admissionNo": "150",
    "rollNo": "41",
    "name": "DEEKSHA LODHI",
    "photo": "326725c273eaceb7a698673d7a8f3667.jpg",
    "dob": "2012-08-19",
    "gender": "Female",
    "class": "IX",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "RAKESH KUMAR",
        "motherName": "NEERU VERMA",
        "fatherMobile": "9627722404",
        "motherMobile": "9627722404",
        "fatherPhone": "9627722404",
        "motherPhone": "9627722404",
        "address": "MUHAMMADPUR BADHERA",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 87,
        "percentage": 98.9
    },
    "feeSummary": {
        "tuitionDue": 19500,
        "transportDue11Months": 5500,
        "totalDue": 25000,
        "totalPaid": 3750,
        "balance": 21250
    },
    "transport": {
        "stoppage": "MUHAMMADPUR BADHERA",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-305",
        "STU-2026-430"
    ],
    "familyId": "FAM-0026"
},
{
    "id": "STU-2026-031",
    "sqlId": "31",
    "admissionNo": "DM 333",
    "rollNo": "4",
    "name": "JANVI AGRAWAL",
    "photo": "16648109f40eafe77ef6205b05d56edb.jpg",
    "dob": "2012-12-27",
    "gender": "Female",
    "class": "IX",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "YOGENDRA KUMAR",
        "motherName": "DEEPIKA AGRAWAL",
        "fatherMobile": "9027732734",
        "motherMobile": "9027732734",
        "fatherPhone": "9027732734",
        "motherPhone": "9027732734",
        "address": "JARGAWAN",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "GEN",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 82,
        "percentage": 93.2
    },
    "feeSummary": {
        "tuitionDue": 19500,
        "transportDue11Months": 5500,
        "totalDue": 25000,
        "totalPaid": 21250,
        "balance": 3750
    },
    "transport": {
        "stoppage": "JARGAWAN",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-245"
    ],
    "familyId": "FAM-0030"
},
{
    "id": "STU-2026-032",
    "sqlId": "32",
    "admissionNo": "156",
    "rollNo": "5",
    "name": "KAVYA RAHI",
    "photo": "46be9f48395da2ddf4232578aad1ec8a.jpg",
    "dob": "2011-09-18",
    "gender": "Male",
    "class": "IX",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "RAJ KUMAR",
        "motherName": "VIJAY DEVI",
        "fatherMobile": "9720493362",
        "motherMobile": "9536833650",
        "fatherPhone": "9720493362",
        "motherPhone": "9536833650",
        "address": "MUHAMMADPUR BADHERA",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "SC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 83,
        "percentage": 94.3
    },
    "feeSummary": {
        "tuitionDue": 19500,
        "transportDue11Months": 5500,
        "totalDue": 25000,
        "totalPaid": 11250,
        "balance": 13750
    },
    "transport": {
        "stoppage": "MUHAMMADPUR BADHERA",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0031"
},
{
    "id": "STU-2026-033",
    "sqlId": "33",
    "admissionNo": "157",
    "rollNo": "0",
    "name": "KHUSHI RAJPUT",
    "photo": "8e16e53f334288b6aa88c1d20422bac6.jpg",
    "dob": "2011-12-25",
    "gender": "Female",
    "class": "X",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "HARENDRA KUMAR",
        "motherName": "CHANCHAL DEVI",
        "fatherMobile": "9785136318",
        "motherMobile": "8239322413",
        "fatherPhone": "9785136318",
        "motherPhone": "8239322413",
        "address": "NAGLA DHARAKPUR, DHARAKPUR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 84,
        "percentage": 95.5
    },
    "feeSummary": {
        "tuitionDue": 21000,
        "transportDue11Months": 5500,
        "totalDue": 26500,
        "totalPaid": 3975,
        "balance": 22525
    },
    "transport": {
        "stoppage": "NAGLA DHARAKPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0032"
},
{
    "id": "STU-2026-035",
    "sqlId": "35",
    "admissionNo": "159",
    "rollNo": "7",
    "name": "LAKSHYA AGRAWAL",
    "photo": "ab40b4a9e8ee4aa5060bf4e377f1edcc.jpg",
    "dob": "2012-05-12",
    "gender": "Male",
    "class": "IX",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "JAGDISH AGRAWAL",
        "motherName": "AKHLESH AGRAWAL",
        "fatherMobile": "8377933435",
        "motherMobile": "8377933435",
        "fatherPhone": "8377933435",
        "motherPhone": "8377933435",
        "address": "VILL+POST- JARGWAN",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "dmpsjargawan@gmail.com",
        "studentAadhaar": "",
        "caste": "GEN",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 85,
        "percentage": 96.6
    },
    "feeSummary": {
        "tuitionDue": 19500,
        "transportDue11Months": 5500,
        "totalDue": 25000,
        "totalPaid": 21250,
        "balance": 3750
    },
    "transport": {
        "stoppage": "VILL+POST- JARGWAN",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0034"
},
{
    "id": "STU-2026-036",
    "sqlId": "36",
    "admissionNo": "160",
    "rollNo": "0",
    "name": "LALIT KUMAR",
    "photo": "11cb3d08d562fbbbea3378996a61f60b.jpg",
    "dob": "2013-03-12",
    "gender": "Male",
    "class": "IX",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "HARGOVIND",
        "motherName": "RAJESH DEVI",
        "fatherMobile": "9675652080",
        "motherMobile": "9761205726",
        "fatherPhone": "9675652080",
        "motherPhone": "9761205726",
        "address": "JARGWAN",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 86,
        "percentage": 97.7
    },
    "feeSummary": {
        "tuitionDue": 19500,
        "transportDue11Months": 5500,
        "totalDue": 25000,
        "totalPaid": 11250,
        "balance": 13750
    },
    "transport": {
        "stoppage": "JARGWAN",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-037",
        "STU-2026-120"
    ],
    "familyId": "FAM-0035"
},
{
    "id": "STU-2026-037",
    "sqlId": "37",
    "admissionNo": "161",
    "rollNo": "6",
    "name": "KUMARI MADHU",
    "photo": "b81824bdb94dfa1d842c11c87d9fb5b2.jpg",
    "dob": "2013-02-23",
    "gender": "Female",
    "class": "IX",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "RATIRAM",
        "motherName": "SOUNKALI DEVI",
        "fatherMobile": "9761205726",
        "motherMobile": "9761205726",
        "fatherPhone": "9761205726",
        "motherPhone": "9761205726",
        "address": "JARGWAN",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 87,
        "percentage": 98.9
    },
    "feeSummary": {
        "tuitionDue": 19500,
        "transportDue11Months": 5500,
        "totalDue": 25000,
        "totalPaid": 3750,
        "balance": 21250
    },
    "transport": {
        "stoppage": "JARGWAN",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-036"
    ],
    "familyId": "FAM-0036"
},
{
    "id": "STU-2026-040",
    "sqlId": "40",
    "admissionNo": "164",
    "rollNo": "9",
    "name": "MOHIT KUMAR",
    "photo": "93314a388a73336a070ece9674ff11b2.jpg",
    "dob": "2012-10-25",
    "gender": "Male",
    "class": "IX",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "MANOJ KUMAR",
        "motherName": "ANITA DEVI",
        "fatherMobile": "8650741987",
        "motherMobile": "8650741987",
        "fatherPhone": "8650741987",
        "motherPhone": "8650741987",
        "address": "NAGLA KOTHI",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 82,
        "percentage": 93.2
    },
    "feeSummary": {
        "tuitionDue": 19500,
        "transportDue11Months": 5500,
        "totalDue": 25000,
        "totalPaid": 21250,
        "balance": 3750
    },
    "transport": {
        "stoppage": "NAGLA KOTHI",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0039"
},
{
    "id": "STU-2026-042",
    "sqlId": "42",
    "admissionNo": "166",
    "rollNo": "10",
    "name": "MUSKAN",
    "photo": "9a6ce9e1938dd75a0f2a617cc6bb5511.jpg",
    "dob": "2012-07-14",
    "gender": "Female",
    "class": "IX",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "KISHOR KUMAR",
        "motherName": "MANJU DEVI",
        "fatherMobile": "9520755383",
        "motherMobile": "9627340293",
        "fatherPhone": "9520755383",
        "motherPhone": "9627340293",
        "address": "NAGLA KOTHI",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 83,
        "percentage": 94.3
    },
    "feeSummary": {
        "tuitionDue": 19500,
        "transportDue11Months": 5500,
        "totalDue": 25000,
        "totalPaid": 11250,
        "balance": 13750
    },
    "transport": {
        "stoppage": "NAGLA KOTHI",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0041"
},
{
    "id": "STU-2026-044",
    "sqlId": "44",
    "admissionNo": "168",
    "rollNo": "0",
    "name": "PREM SAGAR",
    "photo": "8936604347ff0a314b017f745ef582d9.jpg",
    "dob": "2012-05-15",
    "gender": "Male",
    "class": "IX",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "JAY PAL SINGH",
        "motherName": "MEENA KUMARI",
        "fatherMobile": "7668249848",
        "motherMobile": "9411873211",
        "fatherPhone": "7668249848",
        "motherPhone": "9411873211",
        "address": "JARGWAN",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "SC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 84,
        "percentage": 95.5
    },
    "feeSummary": {
        "tuitionDue": 19500,
        "transportDue11Months": 5500,
        "totalDue": 25000,
        "totalPaid": 3750,
        "balance": 21250
    },
    "transport": {
        "stoppage": "JARGWAN",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 3"
    },
    "linkedSiblingIds": [
        "STU-2026-014"
    ],
    "familyId": "FAM-0043"
},
{
    "id": "STU-2026-046",
    "sqlId": "46",
    "admissionNo": "170",
    "rollNo": "11",
    "name": "SAIJAL VERMA",
    "photo": "40b49836ebb36ea6626d6673503bc254.jpg",
    "dob": "2012-06-12",
    "gender": "Female",
    "class": "IX",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "SANJAY KUMAR",
        "motherName": "NIRMALA DEVI",
        "fatherMobile": "9719225317",
        "motherMobile": "9719225317",
        "fatherPhone": "9719225317",
        "motherPhone": "9719225317",
        "address": "MUHAMMADPUR BADHERA",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 85,
        "percentage": 96.6
    },
    "feeSummary": {
        "tuitionDue": 19500,
        "transportDue11Months": 5500,
        "totalDue": 25000,
        "totalPaid": 21250,
        "balance": 3750
    },
    "transport": {
        "stoppage": "MUHAMMADPUR BADHERA",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-089"
    ],
    "familyId": "FAM-0045"
},
{
    "id": "STU-2026-047",
    "sqlId": "47",
    "admissionNo": "171",
    "rollNo": "35",
    "name": "SANI KUMAR",
    "photo": "5bc3018a51965b39838339e24f7a8ddc.jpg",
    "dob": "2012-08-26",
    "gender": "Male",
    "class": "IX",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "SUBODH KUMAR",
        "motherName": "KUSUM DEVI",
        "fatherMobile": "9675889195",
        "motherMobile": "8954486104",
        "fatherPhone": "9675889195",
        "motherPhone": "8954486104",
        "address": "NAGLA KOTHI",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 86,
        "percentage": 97.7
    },
    "feeSummary": {
        "tuitionDue": 19500,
        "transportDue11Months": 5500,
        "totalDue": 25000,
        "totalPaid": 11250,
        "balance": 13750
    },
    "transport": {
        "stoppage": "NAGLA KOTHI",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-096",
        "STU-2026-146",
        "STU-2026-229"
    ],
    "familyId": "FAM-0046"
},
{
    "id": "STU-2026-048",
    "sqlId": "48",
    "admissionNo": "172",
    "rollNo": "37",
    "name": "TANYA",
    "photo": "3e6f79cbf09f1335d893746ede62850f.jpg",
    "dob": "2014-09-10",
    "gender": "Female",
    "class": "IX",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "YOGENDRA KUMAR",
        "motherName": "RAJNI",
        "fatherMobile": "7037085114",
        "motherMobile": "8077004978",
        "fatherPhone": "7037085114",
        "motherPhone": "8077004978",
        "address": "KHEDIYA BAHADURGARI, ATRAULI",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 87,
        "percentage": 98.9
    },
    "feeSummary": {
        "tuitionDue": 19500,
        "transportDue11Months": 5500,
        "totalDue": 25000,
        "totalPaid": 3750,
        "balance": 21250
    },
    "transport": {
        "stoppage": "KHEDIYA BAHADURGARI",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-280"
    ],
    "familyId": "FAM-0047"
},
{
    "id": "STU-2026-050",
    "sqlId": "50",
    "admissionNo": "174",
    "rollNo": "38",
    "name": "VARSHA",
    "photo": "d5f762de4eda002fb12ae81ceecf60d7.jpg",
    "dob": "2012-10-21",
    "gender": "Female",
    "class": "IX",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "CHANDRAKESH",
        "motherName": "HEERA DEVI",
        "fatherMobile": "9758917731",
        "motherMobile": "9990879163",
        "fatherPhone": "9758917731",
        "motherPhone": "9990879163",
        "address": "NAGLA KOTHI",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "LODHI",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 82,
        "percentage": 93.2
    },
    "feeSummary": {
        "tuitionDue": 19500,
        "transportDue11Months": 5500,
        "totalDue": 25000,
        "totalPaid": 21250,
        "balance": 3750
    },
    "transport": {
        "stoppage": "NAGLA KOTHI",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0049"
},
{
    "id": "STU-2026-052",
    "sqlId": "52",
    "admissionNo": "178",
    "rollNo": "12",
    "name": "ANSH KUMAR",
    "photo": "065e941c19b7f2d26ba716e0376598f2.jpg",
    "dob": "2013-06-30",
    "gender": "Male",
    "class": "VIII",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "TEEKAM SINGH",
        "motherName": "SAPANA DEVI",
        "fatherMobile": "9149334245",
        "motherMobile": "8650515336",
        "fatherPhone": "9149334245",
        "motherPhone": "8650515336",
        "address": "DHARAKPUR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "HINDU"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 83,
        "percentage": 94.3
    },
    "feeSummary": {
        "tuitionDue": 17000,
        "transportDue11Months": 5500,
        "totalDue": 22500,
        "totalPaid": 10125,
        "balance": 12375
    },
    "transport": {
        "stoppage": "DHARAKPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 1"
    },
    "linkedSiblingIds": [
        "STU-2026-109"
    ],
    "familyId": "FAM-0051"
},
{
    "id": "STU-2026-053",
    "sqlId": "53",
    "admissionNo": "180",
    "rollNo": "13",
    "name": "ASHUTOSH YADAV",
    "photo": "62c1dd685794cb5eae3e038f99efd417.jpg",
    "dob": "2013-01-28",
    "gender": "Male",
    "class": "VIII",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "JAYPAL SINGH",
        "motherName": "SUMAN DEVI",
        "fatherMobile": "9728918721",
        "motherMobile": "7505351193",
        "fatherPhone": "9728918721",
        "motherPhone": "7505351193",
        "address": "CHIROURI",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "AHEER",
        "religion": "HINDU"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 84,
        "percentage": 95.5
    },
    "feeSummary": {
        "tuitionDue": 17000,
        "transportDue11Months": 5500,
        "totalDue": 22500,
        "totalPaid": 3375,
        "balance": 19125
    },
    "transport": {
        "stoppage": "CHIROURI",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-166"
    ],
    "familyId": "FAM-0052"
},
{
    "id": "STU-2026-055",
    "sqlId": "55",
    "admissionNo": "182",
    "rollNo": "0",
    "name": "GOURAV KUMAR",
    "photo": "ea9c82b306cd2e63ec14ceb2211d3905.jpg",
    "dob": "2013-08-23",
    "gender": "Male",
    "class": "VIII",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "PUNEET KUMAR",
        "motherName": "VIMLESH DEVI",
        "fatherMobile": "9719351594",
        "motherMobile": "6397614402",
        "fatherPhone": "9719351594",
        "motherPhone": "6397614402",
        "address": "BAIJALA, JIROULI DHOOM SINGH, ATRAULI",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "Aheer",
        "religion": "HINDU"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 85,
        "percentage": 96.6
    },
    "feeSummary": {
        "tuitionDue": 17000,
        "transportDue11Months": 5500,
        "totalDue": 22500,
        "totalPaid": 19125,
        "balance": 3375
    },
    "transport": {
        "stoppage": "BAIJALA",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0054"
},
{
    "id": "STU-2026-056",
    "sqlId": "56",
    "admissionNo": "183",
    "rollNo": "17",
    "name": "HARSH KAUSHIK",
    "photo": "3d23ac5fa7508b9855e76d04ac7d1147.jpg",
    "dob": "2014-03-22",
    "gender": "Male",
    "class": "VIII",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "GAURAV KAUSHIK",
        "motherName": "ARTI KAUSHIK",
        "fatherMobile": "8006046941",
        "motherMobile": "9783856611",
        "fatherPhone": "8006046941",
        "motherPhone": "9783856611",
        "address": "BAGI NAGLA , RAMGHAT",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "BRAHMAN",
        "religion": "HINDU"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 86,
        "percentage": 97.7
    },
    "feeSummary": {
        "tuitionDue": 17000,
        "transportDue11Months": 5500,
        "totalDue": 22500,
        "totalPaid": 10125,
        "balance": 12375
    },
    "transport": {
        "stoppage": "BAGI NAGLA",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 4"
    },
    "linkedSiblingIds": [
        "STU-2026-260"
    ],
    "familyId": "FAM-0055"
},
{
    "id": "STU-2026-057",
    "sqlId": "57",
    "admissionNo": "185",
    "rollNo": "18",
    "name": "JEETU BAGHEL",
    "photo": "6ff03946ec5cf33bafd33b226f0c86e3.jpg",
    "dob": "2013-05-05",
    "gender": "Male",
    "class": "VIII",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "ABHIJEET SINGH",
        "motherName": "NARAYANI DEVI",
        "fatherMobile": "9899289271",
        "motherMobile": "7900443809",
        "fatherPhone": "9899289271",
        "motherPhone": "7900443809",
        "address": "KALIYANPUR BHAGIRATHPUR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "BAGHEL",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 87,
        "percentage": 98.9
    },
    "feeSummary": {
        "tuitionDue": 17000,
        "transportDue11Months": 5500,
        "totalDue": 22500,
        "totalPaid": 3375,
        "balance": 19125
    },
    "transport": {
        "stoppage": "KALIYANPUR BHAGIRATHPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-165"
    ],
    "familyId": "FAM-0056"
},
{
    "id": "STU-2026-059",
    "sqlId": "59",
    "admissionNo": "188",
    "rollNo": "19",
    "name": "KRISHNA",
    "photo": "528849feb69f6fffad85ddbaf728e6ad.jpg",
    "dob": "2012-03-29",
    "gender": "Male",
    "class": "VIII",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "SHASHIKANT",
        "motherName": "NEERAJ",
        "fatherMobile": "7253015262",
        "motherMobile": "9627990924",
        "fatherPhone": "7253015262",
        "motherPhone": "9627990924",
        "address": "MAHARAJPUR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "AHEER",
        "religion": "HINDU"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 82,
        "percentage": 93.2
    },
    "feeSummary": {
        "tuitionDue": 17000,
        "transportDue11Months": 5500,
        "totalDue": 22500,
        "totalPaid": 19125,
        "balance": 3375
    },
    "transport": {
        "stoppage": "MAHARAJPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 5"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0058"
},
{
    "id": "STU-2026-062",
    "sqlId": "62",
    "admissionNo": "192",
    "rollNo": "22",
    "name": "NEHA YADAV",
    "photo": "8bab013fd432e8254bb6052aa1cb69bd.jpg",
    "dob": "2012-11-26",
    "gender": "Female",
    "class": "VIII",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "RAJVEER SINGH",
        "motherName": "GAYATRI DEVI",
        "fatherMobile": "8077133265",
        "motherMobile": "9759755011",
        "fatherPhone": "8077133265",
        "motherPhone": "9759755011",
        "address": "BAIJALA, ATRAULI",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "AHEER",
        "religion": "HINDU"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 83,
        "percentage": 94.3
    },
    "feeSummary": {
        "tuitionDue": 17000,
        "transportDue11Months": 5500,
        "totalDue": 22500,
        "totalPaid": 10125,
        "balance": 12375
    },
    "transport": {
        "stoppage": "BAIJALA",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-087",
        "STU-2026-266"
    ],
    "familyId": "FAM-0061"
},
{
    "id": "STU-2026-063",
    "sqlId": "63",
    "admissionNo": "193",
    "rollNo": "23",
    "name": "NIDHI",
    "photo": "f600483c81a447377a20a84a16527f6a.jpg",
    "dob": "2013-05-07",
    "gender": "Female",
    "class": "VIII",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "MANOJ KUMAR",
        "motherName": "LAXMI DEVI",
        "fatherMobile": "7409676908",
        "motherMobile": "9761089039",
        "fatherPhone": "7409676908",
        "motherPhone": "9761089039",
        "address": "KANAKPUR, LOHGARH",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "AHEER",
        "religion": "HINDU"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 84,
        "percentage": 95.5
    },
    "feeSummary": {
        "tuitionDue": 17000,
        "transportDue11Months": 5500,
        "totalDue": 22500,
        "totalPaid": 3375,
        "balance": 19125
    },
    "transport": {
        "stoppage": "KANAKPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0062"
},
{
    "id": "STU-2026-064",
    "sqlId": "64",
    "admissionNo": "194",
    "rollNo": "24",
    "name": "NISHANT KUMAR",
    "photo": "9e3af015c958691d73295043fad2c91d.jpg",
    "dob": "2014-02-08",
    "gender": "Male",
    "class": "VIII",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "OMPRAKASH SINGH",
        "motherName": "REKHA DEVI",
        "fatherMobile": "6398026761",
        "motherMobile": "7409676908",
        "fatherPhone": "6398026761",
        "motherPhone": "7409676908",
        "address": "NOJALPUR BANGAR, RAMGHAT",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "AHEER",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 85,
        "percentage": 96.6
    },
    "feeSummary": {
        "tuitionDue": 17000,
        "transportDue11Months": 5500,
        "totalDue": 22500,
        "totalPaid": 19125,
        "balance": 3375
    },
    "transport": {
        "stoppage": "NOJALPUR BANGAR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0063"
},
{
    "id": "STU-2026-065",
    "sqlId": "65",
    "admissionNo": "196",
    "rollNo": "25",
    "name": "NITISH KUMAR",
    "photo": "81cc96e55dc6c6a3fad3ef0c91d4efb4.jpg",
    "dob": "2013-09-05",
    "gender": "Male",
    "class": "VIII",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "HITESH KUMAR",
        "motherName": "SUMAN DEVI",
        "fatherMobile": "9719628771",
        "motherMobile": "9719628771",
        "fatherPhone": "9719628771",
        "motherPhone": "9719628771",
        "address": "NAGLA VIDHI",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "LODHI",
        "religion": "HINDU"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 86,
        "percentage": 97.7
    },
    "feeSummary": {
        "tuitionDue": 17000,
        "transportDue11Months": 5500,
        "totalDue": 22500,
        "totalPaid": 10125,
        "balance": 12375
    },
    "transport": {
        "stoppage": "NAGLA VIDHI",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-084",
        "STU-2026-002"
    ],
    "familyId": "FAM-0064"
},
{
    "id": "STU-2026-069",
    "sqlId": "69",
    "admissionNo": "201",
    "rollNo": "26",
    "name": "PRANJUL KUMAR",
    "photo": "cc10876edef6ab7b5ddd6d453a9416e3.jpg",
    "dob": "2013-05-10",
    "gender": "Male",
    "class": "VIII",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "RAMESH CHANDRA",
        "motherName": "GEETA DEVI",
        "fatherMobile": "9780410371",
        "motherMobile": "9780410371",
        "fatherPhone": "9780410371",
        "motherPhone": "9780410371",
        "address": "KALIYANPUR BHAGIRATHPUR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "NAGAR",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 87,
        "percentage": 98.9
    },
    "feeSummary": {
        "tuitionDue": 17000,
        "transportDue11Months": 5500,
        "totalDue": 22500,
        "totalPaid": 3375,
        "balance": 19125
    },
    "transport": {
        "stoppage": "KALIYANPUR BHAGIRATHPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-378"
    ],
    "familyId": "FAM-0067"
},
{
    "id": "STU-2026-071",
    "sqlId": "71",
    "admissionNo": "204",
    "rollNo": "27",
    "name": "RIMSHA GAUTAM",
    "photo": "b749b2636f8b8cb8f9e8e1bedced1c0d.jpg",
    "dob": "2014-08-07",
    "gender": "Female",
    "class": "VIII",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "ANSHUL KUMAR",
        "motherName": "POOJA DEVI",
        "fatherMobile": "9457076490",
        "motherMobile": "9457076490",
        "fatherPhone": "9457076490",
        "motherPhone": "9457076490",
        "address": "SILHARI RAMGHAT",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "Jatav",
        "religion": "HINDU"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 82,
        "percentage": 93.2
    },
    "feeSummary": {
        "tuitionDue": 17000,
        "transportDue11Months": 5500,
        "totalDue": 22500,
        "totalPaid": 19125,
        "balance": 3375
    },
    "transport": {
        "stoppage": "SILHARI RAMGHAT",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-503",
        "STU-2026-504"
    ],
    "familyId": "FAM-0069"
},
{
    "id": "STU-2026-072",
    "sqlId": "72",
    "admissionNo": "205",
    "rollNo": "28",
    "name": "ROVIN KUMAR",
    "photo": "950b4b094dcd4fc6dfc87b3a21dd008e.jpg",
    "dob": "2013-03-02",
    "gender": "Male",
    "class": "VIII",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "HARPAL SINGH",
        "motherName": "RADHA DEVI",
        "fatherMobile": "9412642002",
        "motherMobile": "9412642002",
        "fatherPhone": "9412642002",
        "motherPhone": "9412642002",
        "address": "BAIJALA KOTHI ALIGARH",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "AHEER",
        "religion": "HINDU"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 83,
        "percentage": 94.3
    },
    "feeSummary": {
        "tuitionDue": 17000,
        "transportDue11Months": 5500,
        "totalDue": 22500,
        "totalPaid": 10125,
        "balance": 12375
    },
    "transport": {
        "stoppage": "BAIJALA KOTHI ALIGARH",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0070"
},
{
    "id": "STU-2026-073",
    "sqlId": "73",
    "admissionNo": "206",
    "rollNo": "29",
    "name": "RUDRA NAYAK",
    "photo": "51ae8a0b7761292c4a46cac6305b99fc.jpg",
    "dob": "2013-03-02",
    "gender": "Male",
    "class": "VIII",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "NARENDRA KUMAR",
        "motherName": "JYOTI DEVI",
        "fatherMobile": "8395023508",
        "motherMobile": "9761737488",
        "fatherPhone": "8395023508",
        "motherPhone": "9761737488",
        "address": "MAHARAJPUR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "BANJARA",
        "religion": "HINDU"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 84,
        "percentage": 95.5
    },
    "feeSummary": {
        "tuitionDue": 17000,
        "transportDue11Months": 5500,
        "totalDue": 22500,
        "totalPaid": 3375,
        "balance": 19125
    },
    "transport": {
        "stoppage": "MAHARAJPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 5"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0071"
},
{
    "id": "STU-2026-074",
    "sqlId": "74",
    "admissionNo": "207",
    "rollNo": "30",
    "name": "SANTOSH KUMAR",
    "photo": "5cafbc78a0bcbd31aa64075a7e83fef0.jpg",
    "dob": "2012-03-12",
    "gender": "Male",
    "class": "VIII",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "BANTI KUMAR",
        "motherName": "MEERA DEVI",
        "fatherMobile": "7252826099",
        "motherMobile": "9996631761",
        "fatherPhone": "7252826099",
        "motherPhone": "9996631761",
        "address": "KALIYANPUR BHAGIRATHIPUR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "AHEER",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 85,
        "percentage": 96.6
    },
    "feeSummary": {
        "tuitionDue": 17000,
        "transportDue11Months": 5500,
        "totalDue": 22500,
        "totalPaid": 19125,
        "balance": 3375
    },
    "transport": {
        "stoppage": "KALIYANPUR BHAGIRATHIPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-413",
        "STU-2026-412"
    ],
    "familyId": "FAM-0072"
},
{
    "id": "STU-2026-076",
    "sqlId": "76",
    "admissionNo": "209",
    "rollNo": "32",
    "name": "SHIVAM KUMAR",
    "photo": "68a43a0fd3c32729e936b73f8cbbc08e.jpg",
    "dob": "2011-12-30",
    "gender": "Male",
    "class": "VIII",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "SANJAY KUMAR",
        "motherName": "VEENA",
        "fatherMobile": "6395011712",
        "motherMobile": "9258596024",
        "fatherPhone": "6395011712",
        "motherPhone": "9258596024",
        "address": "MOUNIPURA URF RAMBAS ,RAMGHAT",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "AHEER",
        "religion": "HINDU"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 86,
        "percentage": 97.7
    },
    "feeSummary": {
        "tuitionDue": 17000,
        "transportDue11Months": 5500,
        "totalDue": 22500,
        "totalPaid": 10125,
        "balance": 12375
    },
    "transport": {
        "stoppage": "MOUNIPURA URF RAMBAS",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-156",
        "STU-2026-007"
    ],
    "familyId": "FAM-0007"
},
{
    "id": "STU-2026-078",
    "sqlId": "78",
    "admissionNo": "213",
    "rollNo": "33",
    "name": "VANDANA YADAV",
    "photo": "5e54f40a8a3ee1996a7fb1e90be9cab7.jpg",
    "dob": "2013-11-02",
    "gender": "Female",
    "class": "VIII",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "MATRU SINGH",
        "motherName": "POOJA DEVI",
        "fatherMobile": "9758253973",
        "motherMobile": "8393008686",
        "fatherPhone": "9758253973",
        "motherPhone": "8393008686",
        "address": "NAGLA CHIRAURI, CHIRAURI",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "AHEER",
        "religion": "HINDU"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 87,
        "percentage": 98.9
    },
    "feeSummary": {
        "tuitionDue": 17000,
        "transportDue11Months": 5500,
        "totalDue": 22500,
        "totalPaid": 3375,
        "balance": 19125
    },
    "transport": {
        "stoppage": "NAGLA CHIRAURI",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-195"
    ],
    "familyId": "FAM-0076"
},
{
    "id": "STU-2026-079",
    "sqlId": "79",
    "admissionNo": "214",
    "rollNo": "34",
    "name": "VINEET KUMAR",
    "photo": "6e6e87e15e0a3bc51a359669bb871993.jpg",
    "dob": "2013-09-14",
    "gender": "Male",
    "class": "VIII",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "MAHENDRA SINGH",
        "motherName": "GAYATRI DEVI",
        "fatherMobile": "6396359958",
        "motherMobile": "7508181731",
        "fatherPhone": "6396359958",
        "motherPhone": "7508181731",
        "address": "KALIYANPUR BHAGIRATHPUR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "BAGHEL",
        "religion": "HINDU"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 82,
        "percentage": 93.2
    },
    "feeSummary": {
        "tuitionDue": 17000,
        "transportDue11Months": 5500,
        "totalDue": 22500,
        "totalPaid": 19125,
        "balance": 3375
    },
    "transport": {
        "stoppage": "KALIYANPUR BHAGIRATHPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-043"
    ],
    "familyId": "FAM-0077"
},
{
    "id": "STU-2026-080",
    "sqlId": "80",
    "admissionNo": "215",
    "rollNo": "43",
    "name": "AKHLESH KUMAR",
    "photo": "4efb2c2dc4a85aa23e8a1a415f582a19.jpg",
    "dob": "2013-01-01",
    "gender": "Male",
    "class": "VII",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "RADHESHYAM",
        "motherName": "KAMLESH DEVI",
        "fatherMobile": "8650965710",
        "motherMobile": "9306279780",
        "fatherPhone": "8650965710",
        "motherPhone": "9306279780",
        "address": "GOKULPUR, KHADAR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 83,
        "percentage": 94.3
    },
    "feeSummary": {
        "tuitionDue": 16500,
        "transportDue11Months": 5500,
        "totalDue": 22000,
        "totalPaid": 9900,
        "balance": 12100
    },
    "transport": {
        "stoppage": "GOKULPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-147"
    ],
    "familyId": "FAM-0078"
},
{
    "id": "STU-2026-081",
    "sqlId": "81",
    "admissionNo": "217",
    "rollNo": "0",
    "name": "ANURAG",
    "photo": "d655082bbe7481f7a56fbad70f9f73aa.jpg",
    "dob": "2013-04-20",
    "gender": "Male",
    "class": "VII",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "RAJESHWAR SINGH",
        "motherName": "BRIJESH DEVI",
        "fatherMobile": "9536057526",
        "motherMobile": "8650200571",
        "fatherPhone": "9536057526",
        "motherPhone": "8650200571",
        "address": "CHIROURI (BULANDSHAHR)",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 84,
        "percentage": 95.5
    },
    "feeSummary": {
        "tuitionDue": 16500,
        "transportDue11Months": 5500,
        "totalDue": 22000,
        "totalPaid": 3300,
        "balance": 18700
    },
    "transport": {
        "stoppage": "CHIROURI (BULANDSHAHR)",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-020"
    ],
    "familyId": "FAM-0079"
},
{
    "id": "STU-2026-082",
    "sqlId": "82",
    "admissionNo": "218",
    "rollNo": "44",
    "name": "ARJOO YADAV",
    "photo": "af09097f71315e35e373287ac81ec8fb.jpg",
    "dob": "2013-12-06",
    "gender": "Female",
    "class": "VII",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "SATENDRA KUMAR",
        "motherName": "SNEH DEVI",
        "fatherMobile": "9500077994",
        "motherMobile": "9500077994",
        "fatherPhone": "9500077994",
        "motherPhone": "9500077994",
        "address": "GOKULPUR, RAMGHAT, TEHSIL- DIBAI, DIST.- BULANDSHAHR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "AHEER",
        "religion": "HINDU"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 85,
        "percentage": 96.6
    },
    "feeSummary": {
        "tuitionDue": 16500,
        "transportDue11Months": 5500,
        "totalDue": 22000,
        "totalPaid": 18700,
        "balance": 3300
    },
    "transport": {
        "stoppage": "GOKULPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 5"
    },
    "linkedSiblingIds": [
        "STU-2026-168",
        "STU-2026-304"
    ],
    "familyId": "FAM-0080"
},
{
    "id": "STU-2026-083",
    "sqlId": "83",
    "admissionNo": "220",
    "rollNo": "45",
    "name": "BADAL KUMAR",
    "photo": "c6ad526633a7df46b3870e83b2476bbe.jpg",
    "dob": "2014-07-05",
    "gender": "Male",
    "class": "VII",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "RAJU KUMAR",
        "motherName": "KASHMIRA DEVI",
        "fatherMobile": "9759779548",
        "motherMobile": "9761823950",
        "fatherPhone": "9759779548",
        "motherPhone": "9761823950",
        "address": "MUHAMMADSPUR BADHERA, ALIGARH",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 86,
        "percentage": 97.7
    },
    "feeSummary": {
        "tuitionDue": 16500,
        "transportDue11Months": 5500,
        "totalDue": 22000,
        "totalPaid": 9900,
        "balance": 12100
    },
    "transport": {
        "stoppage": "MUHAMMADSPUR BADHERA",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-293"
    ],
    "familyId": "FAM-0081"
},
{
    "id": "STU-2026-085",
    "sqlId": "85",
    "admissionNo": "225",
    "rollNo": "57",
    "name": "HOMESH KUMAR",
    "photo": "9513c1f7e13dc925a9b45973d155d6ea.jpg",
    "dob": "2014-08-06",
    "gender": "Male",
    "class": "VII",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "ROOP KISHOR",
        "motherName": "SEEMA DEVI",
        "fatherMobile": "9990488266",
        "motherMobile": "9990488266",
        "fatherPhone": "9990488266",
        "motherPhone": "9990488266",
        "address": "NAGLA GARVI, JARGWAN (BSR)",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "lodhi",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 87,
        "percentage": 98.9
    },
    "feeSummary": {
        "tuitionDue": 16500,
        "transportDue11Months": 5500,
        "totalDue": 22000,
        "totalPaid": 3300,
        "balance": 18700
    },
    "transport": {
        "stoppage": "NAGLA GARVI",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-178"
    ],
    "familyId": "FAM-0083"
},
{
    "id": "STU-2026-087",
    "sqlId": "87",
    "admissionNo": "228",
    "rollNo": "0",
    "name": "MANSI YADAV",
    "photo": "86b6aeb1894960403e91aa2c1c9834df.jpg",
    "dob": "2014-08-09",
    "gender": "Male",
    "class": "VII",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "RAJVEER SINGH",
        "motherName": "GAYATRI DEVI",
        "fatherMobile": "9759755011",
        "motherMobile": "9759755011",
        "fatherPhone": "9759755011",
        "motherPhone": "9759755011",
        "address": "BAIJALA KOTHI, ATRAULI",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 82,
        "percentage": 93.2
    },
    "feeSummary": {
        "tuitionDue": 16500,
        "transportDue11Months": 5500,
        "totalDue": 22000,
        "totalPaid": 18700,
        "balance": 3300
    },
    "transport": {
        "stoppage": "BAIJALA KOTHI",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-062"
    ],
    "familyId": "FAM-0085"
},
{
    "id": "STU-2026-088",
    "sqlId": "88",
    "admissionNo": "230",
    "rollNo": "60",
    "name": "MAYANK KUMAR",
    "photo": "b9183469aabbdccb40534191ff690c96.jpg",
    "dob": "2014-12-07",
    "gender": "Male",
    "class": "VII",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "MAHESH CHANDRA",
        "motherName": "KAMLESH DEVI",
        "fatherMobile": "9627106153",
        "motherMobile": "9627106153",
        "fatherPhone": "9627106153",
        "motherPhone": "9627106153",
        "address": "MUDAKHERA",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "AHEER",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 83,
        "percentage": 94.3
    },
    "feeSummary": {
        "tuitionDue": 16500,
        "transportDue11Months": 5500,
        "totalDue": 22000,
        "totalPaid": 9900,
        "balance": 12100
    },
    "transport": {
        "stoppage": "MUDAKHERA",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 1"
    },
    "linkedSiblingIds": [
        "STU-2026-041"
    ],
    "familyId": "FAM-0086"
},
{
    "id": "STU-2026-089",
    "sqlId": "89",
    "admissionNo": "231",
    "rollNo": "11",
    "name": "MAYANK RAJ VERMA",
    "photo": "0f4a432fae32bcb90c3d1fe002f64e7b.jpg",
    "dob": "2015-02-16",
    "gender": "Male",
    "class": "VII",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "SANJAY KUMAR",
        "motherName": "NIRMALA DEVI",
        "fatherMobile": "9720096132",
        "motherMobile": "9719225317",
        "fatherPhone": "9720096132",
        "motherPhone": "9719225317",
        "address": "MUHAMMADPUR BADHERA, ALIGARH",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 84,
        "percentage": 95.5
    },
    "feeSummary": {
        "tuitionDue": 16500,
        "transportDue11Months": 5500,
        "totalDue": 22000,
        "totalPaid": 3300,
        "balance": 18700
    },
    "transport": {
        "stoppage": "MUHAMMADPUR BADHERA",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-046",
        "STU-2026-235"
    ],
    "familyId": "FAM-0231"
},
{
    "id": "STU-2026-090",
    "sqlId": "90",
    "admissionNo": "232",
    "rollNo": "61",
    "name": "NAVNEET YADAV",
    "photo": "195b92331083f21344551e01517c0921.jpg",
    "dob": "2014-08-27",
    "gender": "Male",
    "class": "VII",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "SURENDRA SINGH",
        "motherName": "KAMLESH DEVI",
        "fatherMobile": "7017094734",
        "motherMobile": "7017094734",
        "fatherPhone": "7017094734",
        "motherPhone": "7017094734",
        "address": "JARGWAN",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 85,
        "percentage": 96.6
    },
    "feeSummary": {
        "tuitionDue": 16500,
        "transportDue11Months": 5500,
        "totalDue": 22000,
        "totalPaid": 18700,
        "balance": 3300
    },
    "transport": {
        "stoppage": "JARGWAN",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0088"
},
{
    "id": "STU-2026-091",
    "sqlId": "91",
    "admissionNo": "233",
    "rollNo": "62",
    "name": "NITIN KUMAR",
    "photo": "bb32629da422c67bb2f2f2c62e452db1.jpg",
    "dob": "2014-06-22",
    "gender": "Male",
    "class": "VII",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "RAM KISHOR",
        "motherName": "VANDANA DEVI",
        "fatherMobile": "9759840340",
        "motherMobile": "9759840340",
        "fatherPhone": "9759840340",
        "motherPhone": "9759840340",
        "address": "NATHPUR POST-NAHAL",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "Jatav",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 86,
        "percentage": 97.7
    },
    "feeSummary": {
        "tuitionDue": 16500,
        "transportDue11Months": 5500,
        "totalDue": 22000,
        "totalPaid": 9900,
        "balance": 12100
    },
    "transport": {
        "stoppage": "NATHPUR POST-NAHAL",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 3"
    },
    "linkedSiblingIds": [
        "STU-2026-191"
    ],
    "familyId": "FAM-0089"
},
{
    "id": "STU-2026-092",
    "sqlId": "92",
    "admissionNo": "235",
    "rollNo": "64",
    "name": "PRINCE YADAV",
    "photo": "22e5e778c93347fc3f06573f2c6981c8.jpg",
    "dob": "2012-06-15",
    "gender": "Male",
    "class": "VII",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "SHIV KUMAR",
        "motherName": "REENA DEVI",
        "fatherMobile": "8700327645",
        "motherMobile": "8700327645",
        "fatherPhone": "8700327645",
        "motherPhone": "8700327645",
        "address": "CHIRAURI, JARGWAN",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 87,
        "percentage": 98.9
    },
    "feeSummary": {
        "tuitionDue": 16500,
        "transportDue11Months": 5500,
        "totalDue": 22000,
        "totalPaid": 3300,
        "balance": 18700
    },
    "transport": {
        "stoppage": "CHIRAURI",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-330",
        "STU-2026-247",
        "STU-2026-385"
    ],
    "familyId": "FAM-0090"
},
{
    "id": "STU-2026-094",
    "sqlId": "94",
    "admissionNo": "237",
    "rollNo": "65",
    "name": "PRIYANSHU KUMAR",
    "photo": "205d06217a77737c9fe40ca92805fdf6.jpg",
    "dob": "2014-02-28",
    "gender": "Male",
    "class": "VII",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "VIJAY SINGH",
        "motherName": "SUMANLATA",
        "fatherMobile": "7505506603",
        "motherMobile": "7505506603",
        "fatherPhone": "7505506603",
        "motherPhone": "7505506603",
        "address": "JARGWAN",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 82,
        "percentage": 93.2
    },
    "feeSummary": {
        "tuitionDue": 16500,
        "transportDue11Months": 5500,
        "totalDue": 22000,
        "totalPaid": 18700,
        "balance": 3300
    },
    "transport": {
        "stoppage": "JARGWAN",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-203"
    ],
    "familyId": "FAM-0092"
},
{
    "id": "STU-2026-095",
    "sqlId": "95",
    "admissionNo": "240",
    "rollNo": "66",
    "name": "RADHA",
    "photo": "eb15b9e83f6c9a26df756ec32a9c4e0c.jpg",
    "dob": "2011-09-02",
    "gender": "Male",
    "class": "VII",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "JANGVEER SINGH",
        "motherName": "ROOPVATI DEVI",
        "fatherMobile": "9675863965",
        "motherMobile": "9675863965",
        "fatherPhone": "9675863965",
        "motherPhone": "9675863965",
        "address": "KALIYANPUR BHAGIRATHPUR ATRAULI ALIGARH",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 83,
        "percentage": 94.3
    },
    "feeSummary": {
        "tuitionDue": 16500,
        "transportDue11Months": 5500,
        "totalDue": 22000,
        "totalPaid": 9900,
        "balance": 12100
    },
    "transport": {
        "stoppage": "KALIYANPUR BHAGIRATHPUR ATRAULI ALIGARH",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-107",
        "STU-2026-259"
    ],
    "familyId": "FAM-0093"
},
{
    "id": "STU-2026-096",
    "sqlId": "96",
    "admissionNo": "241",
    "rollNo": "35",
    "name": "RISHITA",
    "photo": "c69bd948a93d4f0491285eca0dc6b8ea.jpg",
    "dob": "2014-07-10",
    "gender": "Male",
    "class": "VII",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "SUBODH KUMAR",
        "motherName": "KUSUM DEVI",
        "fatherMobile": "8954486104",
        "motherMobile": "8954486104",
        "fatherPhone": "8954486104",
        "motherPhone": "8954486104",
        "address": "NAGLA KOTHI, JARGWAN",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 84,
        "percentage": 95.5
    },
    "feeSummary": {
        "tuitionDue": 16500,
        "transportDue11Months": 5500,
        "totalDue": 22000,
        "totalPaid": 3300,
        "balance": 18700
    },
    "transport": {
        "stoppage": "NAGLA KOTHI",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-047"
    ],
    "familyId": "FAM-0094"
},
{
    "id": "STU-2026-097",
    "sqlId": "97",
    "admissionNo": "242",
    "rollNo": "67",
    "name": "SACHIN",
    "photo": "2f2c2add24024c6d3e80a3d56c72345d.jpg",
    "dob": "2015-12-20",
    "gender": "Male",
    "class": "VII",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "BALKISAN",
        "motherName": "SHEETAL DEVI",
        "fatherMobile": "7668414585",
        "motherMobile": "9758785744",
        "fatherPhone": "7668414585",
        "motherPhone": "9758785744",
        "address": "NAGLA GARVI",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 85,
        "percentage": 96.6
    },
    "feeSummary": {
        "tuitionDue": 16500,
        "transportDue11Months": 5500,
        "totalDue": 22000,
        "totalPaid": 18700,
        "balance": 3300
    },
    "transport": {
        "stoppage": "NAGLA GARVI",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0095"
},
{
    "id": "STU-2026-099",
    "sqlId": "99",
    "admissionNo": "245",
    "rollNo": "68",
    "name": "SHIV KUMAR",
    "photo": "5a4659e88c219cf94d4fa3220e928146.jpg",
    "dob": "2014-11-20",
    "gender": "Male",
    "class": "VII",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "SURENDRA KUMAR",
        "motherName": "SUSHMA DEVI",
        "fatherMobile": "9758512771",
        "motherMobile": "9758512771",
        "fatherPhone": "9758512771",
        "motherPhone": "9758512771",
        "address": "KALIYANPUR BHAGIRATHIPUR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 86,
        "percentage": 97.7
    },
    "feeSummary": {
        "tuitionDue": 16500,
        "transportDue11Months": 5500,
        "totalDue": 22000,
        "totalPaid": 9900,
        "balance": 12100
    },
    "transport": {
        "stoppage": "KALIYANPUR BHAGIRATHIPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 2"
    },
    "linkedSiblingIds": [
        "STU-2026-034"
    ],
    "familyId": "FAM-0097"
},
{
    "id": "STU-2026-100",
    "sqlId": "100",
    "admissionNo": "246",
    "rollNo": "69",
    "name": "SHIVAM KUMAR",
    "photo": "d637167f61cdae75fdae6eecfac9f503.jpg",
    "dob": "2014-11-20",
    "gender": "Male",
    "class": "VII",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "AVDHESH KUMAR",
        "motherName": "KAJAL DEVI",
        "fatherMobile": "9719948606",
        "motherMobile": "9719948606",
        "fatherPhone": "9719948606",
        "motherPhone": "9719948606",
        "address": "KALIYANPUR BHAGIRATHPUR ATRAULI",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 87,
        "percentage": 98.9
    },
    "feeSummary": {
        "tuitionDue": 16500,
        "transportDue11Months": 5500,
        "totalDue": 22000,
        "totalPaid": 3300,
        "balance": 18700
    },
    "transport": {
        "stoppage": "KALIYANPUR BHAGIRATHPUR ATRAULI",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0098"
},
{
    "id": "STU-2026-102",
    "sqlId": "102",
    "admissionNo": "248",
    "rollNo": "70",
    "name": "SONAKSHI",
    "photo": "715908c744585bfc69737ce56879890b.jpg",
    "dob": "2013-02-20",
    "gender": "Male",
    "class": "VII",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "ARUN KUMAR",
        "motherName": "KOMAL",
        "fatherMobile": "9268386124",
        "motherMobile": "9268386124",
        "fatherPhone": "9268386124",
        "motherPhone": "9268386124",
        "address": "HARVANSHPUR, ATRAULI",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 82,
        "percentage": 93.2
    },
    "feeSummary": {
        "tuitionDue": 16500,
        "transportDue11Months": 5500,
        "totalDue": 22000,
        "totalPaid": 18700,
        "balance": 3300
    },
    "transport": {
        "stoppage": "HARVANSHPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-180"
    ],
    "familyId": "FAM-0100"
},
{
    "id": "STU-2026-103",
    "sqlId": "103",
    "admissionNo": "249",
    "rollNo": "71",
    "name": "TARUN KUMAR",
    "photo": "d4241a17d3090d9bbc949b850ebe623d.jpg",
    "dob": "2014-01-01",
    "gender": "Male",
    "class": "VII",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "VIMAL KUMAR",
        "motherName": "SARVESH DEVI",
        "fatherMobile": "9758364015",
        "motherMobile": "9758364015",
        "fatherPhone": "9758364015",
        "motherPhone": "9758364015",
        "address": "NAGLA GARVI,( JARGWAN)",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 83,
        "percentage": 94.3
    },
    "feeSummary": {
        "tuitionDue": 16500,
        "transportDue11Months": 5500,
        "totalDue": 22000,
        "totalPaid": 9900,
        "balance": 12100
    },
    "transport": {
        "stoppage": "NAGLA GARVI",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0101"
},
{
    "id": "STU-2026-105",
    "sqlId": "105",
    "admissionNo": "252",
    "rollNo": "0",
    "name": "UMA",
    "photo": "5b22f9cfb20e09cfb066b195b2256d48.jpg",
    "dob": "2014-05-09",
    "gender": "Male",
    "class": "VII",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "DEVESH KUMAR",
        "motherName": "MEENESH DEVI",
        "fatherMobile": "9012982367",
        "motherMobile": "9012982367",
        "fatherPhone": "9012982367",
        "motherPhone": "9012982367",
        "address": "GANGAARH, RAMGHAT",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 84,
        "percentage": 95.5
    },
    "feeSummary": {
        "tuitionDue": 16500,
        "transportDue11Months": 5500,
        "totalDue": 22000,
        "totalPaid": 3300,
        "balance": 18700
    },
    "transport": {
        "stoppage": "GANGAARH",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-012"
    ],
    "familyId": "FAM-0103"
},
{
    "id": "STU-2026-107",
    "sqlId": "107",
    "admissionNo": "254",
    "rollNo": "66",
    "name": "AMIT KUMAR",
    "photo": "aaf9275a13b510fe77bfa2982c1ba7c6.jpg",
    "dob": "2015-10-04",
    "gender": "Male",
    "class": "VI",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "JANGVEER SINGH",
        "motherName": "ROOPVATI DEVI",
        "fatherMobile": "9675863965",
        "motherMobile": "9675863965",
        "fatherPhone": "9675863965",
        "motherPhone": "9675863965",
        "address": "KALIYANPUR BHAGIRATHPUR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "AHEER",
        "religion": "HINDU"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 85,
        "percentage": 96.6
    },
    "feeSummary": {
        "tuitionDue": 16000,
        "transportDue11Months": 5500,
        "totalDue": 21500,
        "totalPaid": 18275,
        "balance": 3225
    },
    "transport": {
        "stoppage": "KALIYANPUR BHAGIRATHPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-095",
        "STU-2026-259"
    ],
    "familyId": "FAM-0093"
},
{
    "id": "STU-2026-108",
    "sqlId": "108",
    "admissionNo": "255",
    "rollNo": "74",
    "name": "BHAWANA YADAV",
    "photo": "c5cfb38ef6ea0bc21af32e2f0dbcff93.jpg",
    "dob": "2014-01-02",
    "gender": "Female",
    "class": "VI",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "JUGENDRA",
        "motherName": "SHANTI DEVI",
        "fatherMobile": "9720055152",
        "motherMobile": "9720055152",
        "fatherPhone": "9720055152",
        "motherPhone": "9720055152",
        "address": "JARGWAN",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "Aheer",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 86,
        "percentage": 97.7
    },
    "feeSummary": {
        "tuitionDue": 16000,
        "transportDue11Months": 5500,
        "totalDue": 21500,
        "totalPaid": 9675,
        "balance": 11825
    },
    "transport": {
        "stoppage": "JARGWAN",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0106"
},
{
    "id": "STU-2026-109",
    "sqlId": "109",
    "admissionNo": "256",
    "rollNo": "12",
    "name": "BHOOMIKA",
    "photo": "82c0e6e49789520f734bf40e53716f7d.jpg",
    "dob": "2015-04-21",
    "gender": "Male",
    "class": "VI",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "TEEKAM SINGH",
        "motherName": "SAPNA DEVI",
        "fatherMobile": "9711094843",
        "motherMobile": "9711094843",
        "fatherPhone": "9711094843",
        "motherPhone": "9711094843",
        "address": "DHARAKPUR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 87,
        "percentage": 98.9
    },
    "feeSummary": {
        "tuitionDue": 16000,
        "transportDue11Months": 5500,
        "totalDue": 21500,
        "totalPaid": 3225,
        "balance": 18275
    },
    "transport": {
        "stoppage": "DHARAKPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 1"
    },
    "linkedSiblingIds": [
        "STU-2026-052"
    ],
    "familyId": "FAM-0107"
},
{
    "id": "STU-2026-112",
    "sqlId": "112",
    "admissionNo": "259",
    "rollNo": "79",
    "name": "DIVYA",
    "photo": "25e920f0105a50be88b5432ee1ad7614.jpg",
    "dob": "2016-07-01",
    "gender": "Male",
    "class": "VI",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "CHANDRABHAN",
        "motherName": "SONAM DEVI",
        "fatherMobile": "9149093558",
        "motherMobile": "9675078707",
        "fatherPhone": "9149093558",
        "motherPhone": "9675078707",
        "address": "KALIYANPUR BHAGIRATHPUR, ALIGARH",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 82,
        "percentage": 93.2
    },
    "feeSummary": {
        "tuitionDue": 16000,
        "transportDue11Months": 5500,
        "totalDue": 21500,
        "totalPaid": 18275,
        "balance": 3225
    },
    "transport": {
        "stoppage": "KALIYANPUR BHAGIRATHPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 2"
    },
    "linkedSiblingIds": [
        "STU-2026-307",
        "STU-2026-669"
    ],
    "familyId": "FAM-0110"
},
{
    "id": "STU-2026-113",
    "sqlId": "113",
    "admissionNo": "260",
    "rollNo": "81",
    "name": "GAURAV KUMAR",
    "photo": "92ab22b2a0f08901487440e02a3a8b06.jpg",
    "dob": "2014-01-01",
    "gender": "Male",
    "class": "VI",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "VINOD KUMAR",
        "motherName": "KAMLESH DEVI",
        "fatherMobile": "8941891392",
        "motherMobile": "8941891392",
        "fatherPhone": "8941891392",
        "motherPhone": "8941891392",
        "address": "UNCHA GAON BANGAR, RAMGHAT",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 83,
        "percentage": 94.3
    },
    "feeSummary": {
        "tuitionDue": 16000,
        "transportDue11Months": 5500,
        "totalDue": 21500,
        "totalPaid": 9675,
        "balance": 11825
    },
    "transport": {
        "stoppage": "UNCHA GAON BANGAR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 5"
    },
    "linkedSiblingIds": [
        "STU-2026-173"
    ],
    "familyId": "FAM-0111"
},
{
    "id": "STU-2026-114",
    "sqlId": "114",
    "admissionNo": "261",
    "rollNo": "83",
    "name": "HIMANSHU KUMAR",
    "photo": "1648729397d2202578a658a01a131f36.jpg",
    "dob": "2015-03-05",
    "gender": "Male",
    "class": "VI",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "SWATANTRA KUMAR",
        "motherName": "SANGEETA DEVI",
        "fatherMobile": "9720524482",
        "motherMobile": "9720524482",
        "fatherPhone": "9720524482",
        "motherPhone": "9720524482",
        "address": "CHIROURI BULANDSHAHR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 84,
        "percentage": 95.5
    },
    "feeSummary": {
        "tuitionDue": 16000,
        "transportDue11Months": 5500,
        "totalDue": 21500,
        "totalPaid": 3225,
        "balance": 18275
    },
    "transport": {
        "stoppage": "CHIROURI BULANDSHAHR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 4"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0112"
},
{
    "id": "STU-2026-116",
    "sqlId": "116",
    "admissionNo": "264",
    "rollNo": "85",
    "name": "KHUSHI",
    "photo": "6009ea8721f779e75501c9499419d20f.jpg",
    "dob": "2015-03-09",
    "gender": "Male",
    "class": "VI",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "ROHIT KUMAR",
        "motherName": "NEMVATI DEVI",
        "fatherMobile": "9719312990",
        "motherMobile": "9719312990",
        "fatherPhone": "9719312990",
        "motherPhone": "9719312990",
        "address": "NAGLA SHUMALI, JARGWAN",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 85,
        "percentage": 96.6
    },
    "feeSummary": {
        "tuitionDue": 16000,
        "transportDue11Months": 5500,
        "totalDue": 21500,
        "totalPaid": 18275,
        "balance": 3225
    },
    "transport": {
        "stoppage": "NAGLA SHUMALI",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 5"
    },
    "linkedSiblingIds": [
        "STU-2026-314"
    ],
    "familyId": "FAM-0114"
},
{
    "id": "STU-2026-117",
    "sqlId": "117",
    "admissionNo": "265",
    "rollNo": "86",
    "name": "KITTU PATHAK",
    "photo": "fa49e85f0dc70100e7ef62025a0ec64f.jpg",
    "dob": "2012-06-01",
    "gender": "Male",
    "class": "VI",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "ATUL PATHAK",
        "motherName": "NEERAJ DEVI",
        "fatherMobile": "7906380785",
        "motherMobile": "9389943235",
        "fatherPhone": "7906380785",
        "motherPhone": "9389943235",
        "address": "JARGWAN",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "General",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 86,
        "percentage": 97.7
    },
    "feeSummary": {
        "tuitionDue": 16000,
        "transportDue11Months": 5500,
        "totalDue": 21500,
        "totalPaid": 9675,
        "balance": 11825
    },
    "transport": {
        "stoppage": "JARGWAN",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-183"
    ],
    "familyId": "FAM-0115"
},
{
    "id": "STU-2026-120",
    "sqlId": "120",
    "admissionNo": "269",
    "rollNo": "69",
    "name": "LAXMI KUMARI",
    "photo": "3a4231d42709be200c49ae7641747566.jpg",
    "dob": "2015-07-23",
    "gender": "Male",
    "class": "VI",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "HAR GOVIND",
        "motherName": "RAJESH DEVI",
        "fatherMobile": "9761205726",
        "motherMobile": "9761205726",
        "fatherPhone": "9761205726",
        "motherPhone": "9761205726",
        "address": "JARGWAN",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 87,
        "percentage": 98.9
    },
    "feeSummary": {
        "tuitionDue": 16000,
        "transportDue11Months": 5500,
        "totalDue": 21500,
        "totalPaid": 3225,
        "balance": 18275
    },
    "transport": {
        "stoppage": "JARGWAN",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-036"
    ],
    "familyId": "FAM-0118"
},
{
    "id": "STU-2026-121",
    "sqlId": "121",
    "admissionNo": "270",
    "rollNo": "87",
    "name": "MISHTI",
    "photo": "4064d4e21cb2b7d04f9a5d7dd37c4dad.jpg",
    "dob": "2016-08-05",
    "gender": "Male",
    "class": "VI",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "LOKESH KUMAR",
        "motherName": "NEHA",
        "fatherMobile": "8630711835",
        "motherMobile": "8630711835",
        "fatherPhone": "8630711835",
        "motherPhone": "8630711835",
        "address": "LOHGARH,ATRAULI",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 82,
        "percentage": 93.2
    },
    "feeSummary": {
        "tuitionDue": 16000,
        "transportDue11Months": 5500,
        "totalDue": 21500,
        "totalPaid": 18275,
        "balance": 3225
    },
    "transport": {
        "stoppage": "LOHGARH",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 2"
    },
    "linkedSiblingIds": [
        "STU-2026-284",
        "STU-2026-400"
    ],
    "familyId": "FAM-0119"
},
{
    "id": "STU-2026-122",
    "sqlId": "122",
    "admissionNo": "271",
    "rollNo": "75",
    "name": "NAMAN KUMAR",
    "photo": "2c9fb7f76e656cfe3d63a5f287618ef7.jpg",
    "dob": "2014-01-20",
    "gender": "Male",
    "class": "VI",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "DEVRAJ SINGH",
        "motherName": "ANITA DEVI",
        "fatherMobile": "9720155624",
        "motherMobile": "9720155624",
        "fatherPhone": "9720155624",
        "motherPhone": "9720155624",
        "address": "SILHARI RAMPUR DISTT BULANDSHAHR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 83,
        "percentage": 94.3
    },
    "feeSummary": {
        "tuitionDue": 16000,
        "transportDue11Months": 5500,
        "totalDue": 21500,
        "totalPaid": 9675,
        "balance": 11825
    },
    "transport": {
        "stoppage": "SILHARI RAMPUR DISTT BULANDSHAHR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-133"
    ],
    "familyId": "FAM-0120"
},
{
    "id": "STU-2026-123",
    "sqlId": "123",
    "admissionNo": "273",
    "rollNo": "90",
    "name": "PRABHA BAGHEL",
    "photo": "c255e257bf4280cf268ab2167bf4d542.jpg",
    "dob": "2015-09-05",
    "gender": "Male",
    "class": "VI",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "HARISHANKAR",
        "motherName": "KAMLESH DEVI",
        "fatherMobile": "8650724663",
        "motherMobile": "8650724663",
        "fatherPhone": "8650724663",
        "motherPhone": "8650724663",
        "address": "KALIYANPUR BHAGIRATHPUR ALIGARH",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 84,
        "percentage": 95.5
    },
    "feeSummary": {
        "tuitionDue": 16000,
        "transportDue11Months": 5500,
        "totalDue": 21500,
        "totalPaid": 3225,
        "balance": 18275
    },
    "transport": {
        "stoppage": "KALIYANPUR BHAGIRATHPUR ALIGARH",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 2"
    },
    "linkedSiblingIds": [
        "STU-2026-142"
    ],
    "familyId": "FAM-0121"
},
{
    "id": "STU-2026-125",
    "sqlId": "125",
    "admissionNo": "278",
    "rollNo": "95",
    "name": "TANUJ KUMAR",
    "photo": "defualt.png",
    "dob": "2014-12-08",
    "gender": "Male",
    "class": "VI",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "BRAJESH KUMAR",
        "motherName": "MANJU DEVI",
        "fatherMobile": "8218893277",
        "motherMobile": "8218893277",
        "fatherPhone": "8218893277",
        "motherPhone": "8218893277",
        "address": "NAGLA CHIROURI",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 85,
        "percentage": 96.6
    },
    "feeSummary": {
        "tuitionDue": 16000,
        "transportDue11Months": 5500,
        "totalDue": 21500,
        "totalPaid": 18275,
        "balance": 3225
    },
    "transport": {
        "stoppage": "NAGLA CHIROURI",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-240",
        "STU-2026-386"
    ],
    "familyId": "FAM-0123"
},
{
    "id": "STU-2026-126",
    "sqlId": "126",
    "admissionNo": "279",
    "rollNo": "96",
    "name": "VANSH",
    "photo": "95bd1f5f295e23f3d2dc36fa091dc809.jpg",
    "dob": "2016-01-12",
    "gender": "Male",
    "class": "VI",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "RAJKUMAR",
        "motherName": "NEERAJ DEVI",
        "fatherMobile": "9760066073",
        "motherMobile": "9760066073",
        "fatherPhone": "9760066073",
        "motherPhone": "9760066073",
        "address": "KUNJALPUR GAHTOLI NIRMAL ATRAULI",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 86,
        "percentage": 97.7
    },
    "feeSummary": {
        "tuitionDue": 16000,
        "transportDue11Months": 5500,
        "totalDue": 21500,
        "totalPaid": 9675,
        "balance": 11825
    },
    "transport": {
        "stoppage": "KUNJALPUR GAHTOLI NIRMAL ATRAULI",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 2"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0124"
},
{
    "id": "STU-2026-127",
    "sqlId": "127",
    "admissionNo": "280",
    "rollNo": "97",
    "name": "VANSHIKA",
    "photo": "c44258d61abe56d5480a65a2eee46c30.jpg",
    "dob": "2014-09-25",
    "gender": "Male",
    "class": "VI",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "RAJESH KUMAR",
        "motherName": "PINKY DEVI",
        "fatherMobile": "9719164418",
        "motherMobile": "9719322033",
        "fatherPhone": "9719164418",
        "motherPhone": "9719322033",
        "address": "JARGWAN",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 87,
        "percentage": 98.9
    },
    "feeSummary": {
        "tuitionDue": 16000,
        "transportDue11Months": 5500,
        "totalDue": 21500,
        "totalPaid": 3225,
        "balance": 18275
    },
    "transport": {
        "stoppage": "JARGWAN",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 3"
    },
    "linkedSiblingIds": [
        "STU-2026-254"
    ],
    "familyId": "FAM-0125"
},
{
    "id": "STU-2026-128",
    "sqlId": "128",
    "admissionNo": "281",
    "rollNo": "98",
    "name": "VIKRANT SINGH",
    "photo": "ade59b6f56a5634a76ccde4212235647.jpg",
    "dob": "2014-12-27",
    "gender": "Male",
    "class": "VI",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "VINOD KUMAR",
        "motherName": "USHA DEVI",
        "fatherMobile": "9761205728",
        "motherMobile": "9761205728",
        "fatherPhone": "9761205728",
        "motherPhone": "9761205728",
        "address": "KALIYANPUR BHAGIRATHPUR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 82,
        "percentage": 93.2
    },
    "feeSummary": {
        "tuitionDue": 16000,
        "transportDue11Months": 5500,
        "totalDue": 21500,
        "totalPaid": 18275,
        "balance": 3225
    },
    "transport": {
        "stoppage": "KALIYANPUR BHAGIRATHPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 2"
    },
    "linkedSiblingIds": [
        "STU-2026-129"
    ],
    "familyId": "FAM-0126"
},
{
    "id": "STU-2026-129",
    "sqlId": "129",
    "admissionNo": "282",
    "rollNo": "0",
    "name": "AAYUSH SINGH",
    "photo": "7e6b379e161d90481839c172e010ef00.jpg",
    "dob": "2016-01-05",
    "gender": "Male",
    "class": "V",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "VINOD KUMAR",
        "motherName": "USHA DEVI",
        "fatherMobile": "9761205728",
        "motherMobile": "9761205728",
        "fatherPhone": "9761205728",
        "motherPhone": "9761205728",
        "address": "KALIYANPUR BHAGIRATHPUR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 83,
        "percentage": 94.3
    },
    "feeSummary": {
        "tuitionDue": 15500,
        "transportDue11Months": 5500,
        "totalDue": 21000,
        "totalPaid": 9450,
        "balance": 11550
    },
    "transport": {
        "stoppage": "KALIYANPUR BHAGIRATHPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 2"
    },
    "linkedSiblingIds": [
        "STU-2026-128"
    ],
    "familyId": "FAM-0126"
},
{
    "id": "STU-2026-130",
    "sqlId": "130",
    "admissionNo": "283",
    "rollNo": "0",
    "name": "ARSH KUMAR",
    "photo": "f0282a0e6c156f0db58a7d5588e50b5a.jpg",
    "dob": "2018-06-22",
    "gender": "Male",
    "class": "V",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "PRAMOD KUMAR",
        "motherName": "DEEPIKA",
        "fatherMobile": "9719607274",
        "motherMobile": "9719607274",
        "fatherPhone": "9719607274",
        "motherPhone": "9719607274",
        "address": "MALAHPUR ATRAULI",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 84,
        "percentage": 95.5
    },
    "feeSummary": {
        "tuitionDue": 15500,
        "transportDue11Months": 5500,
        "totalDue": 21000,
        "totalPaid": 3150,
        "balance": 17850
    },
    "transport": {
        "stoppage": "MALAHPUR ATRAULI",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-486"
    ],
    "familyId": "FAM-0128"
},
{
    "id": "STU-2026-131",
    "sqlId": "131",
    "admissionNo": "285",
    "rollNo": "100",
    "name": "ADITYA PRATAP SINGH",
    "photo": "4ad15a5440b5e696f460b401acd1ca9c.jpg",
    "dob": "2015-04-27",
    "gender": "Male",
    "class": "V",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "SAMMU SINGH",
        "motherName": "RAJANI DEVI",
        "fatherMobile": "9355473315",
        "motherMobile": "9355473315",
        "fatherPhone": "9355473315",
        "motherPhone": "9355473315",
        "address": "MUHAMMADPUR BADHERA ALIGARH",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 85,
        "percentage": 96.6
    },
    "feeSummary": {
        "tuitionDue": 15500,
        "transportDue11Months": 5500,
        "totalDue": 21000,
        "totalPaid": 17850,
        "balance": 3150
    },
    "transport": {
        "stoppage": "MUHAMMADPUR BADHERA ALIGARH",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0129"
},
{
    "id": "STU-2026-132",
    "sqlId": "132",
    "admissionNo": "289",
    "rollNo": "73",
    "name": "ANUJ",
    "photo": "86dc113b86c341e4d028c9c070a3dec9.jpg",
    "dob": "2015-07-07",
    "gender": "Male",
    "class": "VI",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "MANOJ KUMAR",
        "motherName": "BEENA DEVI",
        "fatherMobile": "9368681376",
        "motherMobile": "9368681376",
        "fatherPhone": "9368681376",
        "motherPhone": "9368681376",
        "address": "SILHARI RAMGHAT",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 86,
        "percentage": 97.7
    },
    "feeSummary": {
        "tuitionDue": 16000,
        "transportDue11Months": 5500,
        "totalDue": 21500,
        "totalPaid": 9675,
        "balance": 11825
    },
    "transport": {
        "stoppage": "SILHARI RAMGHAT",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 3"
    },
    "linkedSiblingIds": [
        "STU-2026-170"
    ],
    "familyId": "FAM-0130"
},
{
    "id": "STU-2026-133",
    "sqlId": "133",
    "admissionNo": "290",
    "rollNo": "75",
    "name": "CHHAVI",
    "photo": "bcca99e2554062bb573d5b87659409a1.jpg",
    "dob": "2016-02-02",
    "gender": "Male",
    "class": "VI",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "YOGESH KUMAR",
        "motherName": "RINKY DEVI",
        "fatherMobile": "9720966040",
        "motherMobile": "9720966040",
        "fatherPhone": "9720966040",
        "motherPhone": "9720966040",
        "address": "SILHARI RAMPUR DISTT BULANDSHAHR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 87,
        "percentage": 98.9
    },
    "feeSummary": {
        "tuitionDue": 16000,
        "transportDue11Months": 5500,
        "totalDue": 21500,
        "totalPaid": 3225,
        "balance": 18275
    },
    "transport": {
        "stoppage": "SILHARI RAMPUR DISTT BULANDSHAHR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 3"
    },
    "linkedSiblingIds": [
        "STU-2026-208",
        "STU-2026-122"
    ],
    "familyId": "FAM-0131"
},
{
    "id": "STU-2026-134",
    "sqlId": "134",
    "admissionNo": "291",
    "rollNo": "0",
    "name": "CHHAYA RAJPUT",
    "photo": "3ec349e33f1c384e449dad264a9e4bcc.jpg",
    "dob": "2015-02-12",
    "gender": "Male",
    "class": "V",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "AMAR SINGH",
        "motherName": "KAMLESH DEVI",
        "fatherMobile": "6398426834",
        "motherMobile": "9719225225",
        "fatherPhone": "6398426834",
        "motherPhone": "9719225225",
        "address": "NAGLA DHARAKPUR, DHARAKPUR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 82,
        "percentage": 93.2
    },
    "feeSummary": {
        "tuitionDue": 15500,
        "transportDue11Months": 5500,
        "totalDue": 21000,
        "totalPaid": 17850,
        "balance": 3150
    },
    "transport": {
        "stoppage": "NAGLA DHARAKPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 1"
    },
    "linkedSiblingIds": [
        "STU-2026-010",
        "STU-2026-164"
    ],
    "familyId": "FAM-0010"
},
{
    "id": "STU-2026-135",
    "sqlId": "135",
    "admissionNo": "292",
    "rollNo": "103",
    "name": "CHIRAG SHARMA",
    "photo": "104cfc719219c30f1d9ad208f9709e32.jpg",
    "dob": "2016-06-02",
    "gender": "Male",
    "class": "V",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "VERENDRA KUMAR SHARMA",
        "motherName": "KAVITA DEVI",
        "fatherMobile": "6398792548",
        "motherMobile": "7830241141",
        "fatherPhone": "6398792548",
        "motherPhone": "7830241141",
        "address": "BAGI NAGLA, CHIRAURI",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 83,
        "percentage": 94.3
    },
    "feeSummary": {
        "tuitionDue": 15500,
        "transportDue11Months": 5500,
        "totalDue": 21000,
        "totalPaid": 9450,
        "balance": 11550
    },
    "transport": {
        "stoppage": "BAGI NAGLA",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 4"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0133"
},
{
    "id": "STU-2026-136",
    "sqlId": "136",
    "admissionNo": "293",
    "rollNo": "80",
    "name": "DIVYANSHI RAGHAV",
    "photo": "d463b2c7ba1c5aea2fabaeab9e9033f8.jpg",
    "dob": "2014-11-26",
    "gender": "Male",
    "class": "VI",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "SAURABH PRATAP",
        "motherName": "RAGINI",
        "fatherMobile": "9536149148",
        "motherMobile": "9536149148",
        "fatherPhone": "9536149148",
        "motherPhone": "9536149148",
        "address": "LOHGARAH ATRAULI ALG.",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "General",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 84,
        "percentage": 95.5
    },
    "feeSummary": {
        "tuitionDue": 16000,
        "transportDue11Months": 5500,
        "totalDue": 21500,
        "totalPaid": 3225,
        "balance": 18275
    },
    "transport": {
        "stoppage": "LOHGARAH ATRAULI ALG.",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-220"
    ],
    "familyId": "FAM-0134"
},
{
    "id": "STU-2026-137",
    "sqlId": "137",
    "admissionNo": "294",
    "rollNo": "106",
    "name": "DIVYANSHU YADAV",
    "photo": "e1bdfa6bdb87bcea02a5e76af6221904.jpg",
    "dob": "2016-04-05",
    "gender": "Male",
    "class": "V",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "PRADEEP KUMAR",
        "motherName": "PRITI DEVI",
        "fatherMobile": "9761965033",
        "motherMobile": "9761965033",
        "fatherPhone": "9761965033",
        "motherPhone": "9761965033",
        "address": "KALIYANPUR BHAGIRATHPUR ATRAULI",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 85,
        "percentage": 96.6
    },
    "feeSummary": {
        "tuitionDue": 15500,
        "transportDue11Months": 5500,
        "totalDue": 21000,
        "totalPaid": 17850,
        "balance": 3150
    },
    "transport": {
        "stoppage": "KALIYANPUR BHAGIRATHPUR ATRAULI",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 2"
    },
    "linkedSiblingIds": [
        "STU-2026-363"
    ],
    "familyId": "FAM-0135"
},
{
    "id": "STU-2026-138",
    "sqlId": "138",
    "admissionNo": "295",
    "rollNo": "105",
    "name": "DIVYANSHU KUMAR",
    "photo": "83ab7a3729c00cc55a03091f08038cd6.jpg",
    "dob": "2013-10-17",
    "gender": "Male",
    "class": "V",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "KRISHNA KUMAR",
        "motherName": "VUYA DEVI",
        "fatherMobile": "9927501907",
        "motherMobile": "9927501907",
        "fatherPhone": "9927501907",
        "motherPhone": "9927501907",
        "address": "NAGLA GARVI POSTJARGWAN",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 86,
        "percentage": 97.7
    },
    "feeSummary": {
        "tuitionDue": 15500,
        "transportDue11Months": 5500,
        "totalDue": 21000,
        "totalPaid": 9450,
        "balance": 11550
    },
    "transport": {
        "stoppage": "NAGLA GARVI POSTJARGWAN",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-216"
    ],
    "familyId": "FAM-0136"
},
{
    "id": "STU-2026-139",
    "sqlId": "139",
    "admissionNo": "296",
    "rollNo": "0",
    "name": "KAMESH SHARMA",
    "photo": "454c8ad3f825288798367bd5a1dbfcdc.jpg",
    "dob": "2017-01-01",
    "gender": "Male",
    "class": "V",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "VINEET KUMAR",
        "motherName": "POONAM SHARMA",
        "fatherMobile": "8859343009",
        "motherMobile": "8859343009",
        "fatherPhone": "8859343009",
        "motherPhone": "8859343009",
        "address": "RAMGHAT",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 87,
        "percentage": 98.9
    },
    "feeSummary": {
        "tuitionDue": 15500,
        "transportDue11Months": 5500,
        "totalDue": 21000,
        "totalPaid": 3150,
        "balance": 17850
    },
    "transport": {
        "stoppage": "RAMGHAT",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 3"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0137"
},
{
    "id": "STU-2026-140",
    "sqlId": "140",
    "admissionNo": "297",
    "rollNo": "109",
    "name": "KANHAIYA YADAV",
    "photo": "990d5fc50da81e0db7946738301eaba2.jpg",
    "dob": "2012-09-12",
    "gender": "Male",
    "class": "V",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "FOUJI YADAV JI",
        "motherName": "ROOPVATI DEVI",
        "fatherMobile": "8968167475",
        "motherMobile": "8968167475",
        "fatherPhone": "8968167475",
        "motherPhone": "8968167475",
        "address": "KALIYANPUR BHAGIRATHPUR ALIGARH",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 82,
        "percentage": 93.2
    },
    "feeSummary": {
        "tuitionDue": 15500,
        "transportDue11Months": 5500,
        "totalDue": 21000,
        "totalPaid": 17850,
        "balance": 3150
    },
    "transport": {
        "stoppage": "KALIYANPUR BHAGIRATHPUR ALIGARH",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-282"
    ],
    "familyId": "FAM-0138"
},
{
    "id": "STU-2026-141",
    "sqlId": "141",
    "admissionNo": "298",
    "rollNo": "110",
    "name": "KARAN KUMAR",
    "photo": "4759829418f8983a59ae4cde71ddd343.jpg",
    "dob": "2014-12-23",
    "gender": "Male",
    "class": "V",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "MULAYAM SINGH",
        "motherName": "SUMAN DEVI",
        "fatherMobile": "9720058659",
        "motherMobile": "9720058659",
        "fatherPhone": "9720058659",
        "motherPhone": "9720058659",
        "address": "DADHAR ALUPURA POST- NARUPURA ATRAULI",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "AHEER",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 83,
        "percentage": 94.3
    },
    "feeSummary": {
        "tuitionDue": 15500,
        "transportDue11Months": 5500,
        "totalDue": 21000,
        "totalPaid": 9450,
        "balance": 11550
    },
    "transport": {
        "stoppage": "DADHAR ALUPURA POST- NARUPURA ATRAULI",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 2"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0139"
},
{
    "id": "STU-2026-142",
    "sqlId": "142",
    "admissionNo": "300",
    "rollNo": "90",
    "name": "KAUSHAL KUMAR",
    "photo": "b21d5578c3110d8771e0298d2935278b.jpg",
    "dob": "2016-06-10",
    "gender": "Male",
    "class": "V",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "HARISHANKAR",
        "motherName": "KAMLESH DEVI",
        "fatherMobile": "7982771566",
        "motherMobile": "8650724663",
        "fatherPhone": "7982771566",
        "motherPhone": "8650724663",
        "address": "KALIYANPUR BHAGIRATHPUR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 84,
        "percentage": 95.5
    },
    "feeSummary": {
        "tuitionDue": 15500,
        "transportDue11Months": 5500,
        "totalDue": 21000,
        "totalPaid": 3150,
        "balance": 17850
    },
    "transport": {
        "stoppage": "KALIYANPUR BHAGIRATHPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 2"
    },
    "linkedSiblingIds": [
        "STU-2026-123"
    ],
    "familyId": "FAM-0140"
},
{
    "id": "STU-2026-143",
    "sqlId": "143",
    "admissionNo": "301",
    "rollNo": "112",
    "name": "KRASHANK YADAV",
    "photo": "03b250ecbfb0ba89c6c2cade548ec82e.jpg",
    "dob": "2014-03-10",
    "gender": "Male",
    "class": "V",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "AJAY KUMAR",
        "motherName": "NEERU DEVI",
        "fatherMobile": "9758962135",
        "motherMobile": "9759262366",
        "fatherPhone": "9758962135",
        "motherPhone": "9759262366",
        "address": "KALIYANPUR BHAGIRATHPUR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 85,
        "percentage": 96.6
    },
    "feeSummary": {
        "tuitionDue": 15500,
        "transportDue11Months": 5500,
        "totalDue": 21000,
        "totalPaid": 17850,
        "balance": 3150
    },
    "transport": {
        "stoppage": "KALIYANPUR BHAGIRATHPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 2"
    },
    "linkedSiblingIds": [
        "STU-2026-410"
    ],
    "familyId": "FAM-0141"
},
{
    "id": "STU-2026-145",
    "sqlId": "145",
    "admissionNo": "304",
    "rollNo": "88",
    "name": "NISHANT KUMAR",
    "photo": "6b3984c887fc240b1b92d7a21096b2c5.jpg",
    "dob": "2014-03-20",
    "gender": "Male",
    "class": "VI",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "VIJENDRA SINGH",
        "motherName": "SAROJ DEVI",
        "fatherMobile": "9758741530",
        "motherMobile": "9758605323",
        "fatherPhone": "9758741530",
        "motherPhone": "9758605323",
        "address": "SILHARI RAMGHAT",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 86,
        "percentage": 97.7
    },
    "feeSummary": {
        "tuitionDue": 16000,
        "transportDue11Months": 5500,
        "totalDue": 21500,
        "totalPaid": 9675,
        "balance": 11825
    },
    "transport": {
        "stoppage": "SILHARI RAMGHAT",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 3"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0143"
},
{
    "id": "STU-2026-146",
    "sqlId": "146",
    "admissionNo": "305",
    "rollNo": "35",
    "name": "PAWANI KUMARI",
    "photo": "c1c8b9290ced24cd79381d9705d1a25d.jpg",
    "dob": "2016-12-12",
    "gender": "Male",
    "class": "V",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "DHARMENDRA KUMAR",
        "motherName": "HITESH DEVI",
        "fatherMobile": "9719334408",
        "motherMobile": "9719334408",
        "fatherPhone": "9719334408",
        "motherPhone": "9719334408",
        "address": "NAGLA KOTHI JARGWAN BULAND SHAHR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 87,
        "percentage": 98.9
    },
    "feeSummary": {
        "tuitionDue": 15500,
        "transportDue11Months": 5500,
        "totalDue": 21000,
        "totalPaid": 3150,
        "balance": 17850
    },
    "transport": {
        "stoppage": "NAGLA KOTHI JARGWAN BULAND SHAHR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-047"
    ],
    "familyId": "FAM-0144"
},
{
    "id": "STU-2026-147",
    "sqlId": "147",
    "admissionNo": "307",
    "rollNo": "43",
    "name": "PRADEEP KUMAR",
    "photo": "ec8c1ec5cbb48aaa2f0470aa65555234.jpg",
    "dob": "2017-02-02",
    "gender": "Male",
    "class": "V",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "RADHEY SHYAM",
        "motherName": "KAMLESH DEVI",
        "fatherMobile": "9027092592",
        "motherMobile": "9027092592",
        "fatherPhone": "9027092592",
        "motherPhone": "9027092592",
        "address": "GOKULPUR, RAMGHAT, DIBAI,BULANDSHAHAR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 82,
        "percentage": 93.2
    },
    "feeSummary": {
        "tuitionDue": 15500,
        "transportDue11Months": 5500,
        "totalDue": 21000,
        "totalPaid": 17850,
        "balance": 3150
    },
    "transport": {
        "stoppage": "GOKULPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-080"
    ],
    "familyId": "FAM-0145"
},
{
    "id": "STU-2026-148",
    "sqlId": "148",
    "admissionNo": "308",
    "rollNo": "119",
    "name": "PRASHANT KUMAR",
    "photo": "681363f4a56a03384fb2e6d76aceb18a.jpg",
    "dob": "2016-09-08",
    "gender": "Male",
    "class": "V",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "YOGESH KUMAR",
        "motherName": "PINKY DEVI",
        "fatherMobile": "8859303073",
        "motherMobile": "8859303073",
        "fatherPhone": "8859303073",
        "motherPhone": "8859303073",
        "address": "KALIYANPUR BHAGIRATHPUR, ATRAULI",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 83,
        "percentage": 94.3
    },
    "feeSummary": {
        "tuitionDue": 15500,
        "transportDue11Months": 5500,
        "totalDue": 21000,
        "totalPaid": 9450,
        "balance": 11550
    },
    "transport": {
        "stoppage": "KALIYANPUR BHAGIRATHPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 2"
    },
    "linkedSiblingIds": [
        "STU-2026-199",
        "STU-2026-208"
    ],
    "familyId": "FAM-0146"
},
{
    "id": "STU-2026-149",
    "sqlId": "149",
    "admissionNo": "309",
    "rollNo": "120",
    "name": "PRATEEK KUMAR",
    "photo": "b544d8c4ac5a736cdbab20d3632fe307.jpg",
    "dob": "2015-10-09",
    "gender": "Male",
    "class": "V",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "BOBY KUMAR",
        "motherName": "URMILA DEVI",
        "fatherMobile": "8650739321",
        "motherMobile": "84593995796",
        "fatherPhone": "8650739321",
        "motherPhone": "84593995796",
        "address": "CHIROURI",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 84,
        "percentage": 95.5
    },
    "feeSummary": {
        "tuitionDue": 15500,
        "transportDue11Months": 5500,
        "totalDue": 21000,
        "totalPaid": 3150,
        "balance": 17850
    },
    "transport": {
        "stoppage": "CHIROURI",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-029"
    ],
    "familyId": "FAM-0147"
},
{
    "id": "STU-2026-150",
    "sqlId": "150",
    "admissionNo": "311",
    "rollNo": "121",
    "name": "PRATEEK KUMAR",
    "photo": "23857367655ce5789fef3bd8049ac8fa.jpg",
    "dob": "2018-08-28",
    "gender": "Male",
    "class": "V",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "SANDEEP KUMAR",
        "motherName": "ANJU DEVI",
        "fatherMobile": "9759334814",
        "motherMobile": "9759334814",
        "fatherPhone": "9759334814",
        "motherPhone": "9759334814",
        "address": "KUDHAINI, POST. CHIROURI",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 85,
        "percentage": 96.6
    },
    "feeSummary": {
        "tuitionDue": 15500,
        "transportDue11Months": 5500,
        "totalDue": 21000,
        "totalPaid": 17850,
        "balance": 3150
    },
    "transport": {
        "stoppage": "KUDHAINI",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 4"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0148"
},
{
    "id": "STU-2026-151",
    "sqlId": "151",
    "admissionNo": "312",
    "rollNo": "91",
    "name": "PRATIGYA YADAV",
    "photo": "c0d2d1665d6824bfced1bff3a197fa25.jpg",
    "dob": "2015-06-03",
    "gender": "Male",
    "class": "VI",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "BHURE SINGH",
        "motherName": "SUMAN DEVI",
        "fatherMobile": "9719017603",
        "motherMobile": "9719017603",
        "fatherPhone": "9719017603",
        "motherPhone": "9719017603",
        "address": "SILHARI (BULANDSHAHR)",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 86,
        "percentage": 97.7
    },
    "feeSummary": {
        "tuitionDue": 16000,
        "transportDue11Months": 5500,
        "totalDue": 21500,
        "totalPaid": 9675,
        "balance": 11825
    },
    "transport": {
        "stoppage": "SILHARI (BULANDSHAHR)",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-232"
    ],
    "familyId": "FAM-0149"
},
{
    "id": "STU-2026-152",
    "sqlId": "152",
    "admissionNo": "313",
    "rollNo": "122",
    "name": "PRATIKSHA KUMARI",
    "photo": "3d674d68a2ea86de2a148b0cd2bf2ded.jpg",
    "dob": "2017-05-02",
    "gender": "Male",
    "class": "V",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "PUSHPENDRA SINGH",
        "motherName": "PRITI DEVI",
        "fatherMobile": "6396451120",
        "motherMobile": "6396451120",
        "fatherPhone": "6396451120",
        "motherPhone": "6396451120",
        "address": "BAIJALA, ATRAULI",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 87,
        "percentage": 98.9
    },
    "feeSummary": {
        "tuitionDue": 15500,
        "transportDue11Months": 5500,
        "totalDue": 21000,
        "totalPaid": 3150,
        "balance": 17850
    },
    "transport": {
        "stoppage": "BAIJALA",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 1"
    },
    "linkedSiblingIds": [
        "STU-2026-315"
    ],
    "familyId": "FAM-0150"
},
{
    "id": "STU-2026-153",
    "sqlId": "153",
    "admissionNo": "316",
    "rollNo": "123",
    "name": "RAGINI RAJPUT",
    "photo": "0c39869f059013e3ee62cc271fe4cdcf.jpg",
    "dob": "2017-03-26",
    "gender": "Male",
    "class": "V",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "PRAMOD KUMAR",
        "motherName": "CHANCHAL DEVI",
        "fatherMobile": "9412357470",
        "motherMobile": "9412357470",
        "fatherPhone": "9412357470",
        "motherPhone": "9412357470",
        "address": "NAGLA KOTHI BULAND SHAHR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 82,
        "percentage": 93.2
    },
    "feeSummary": {
        "tuitionDue": 15500,
        "transportDue11Months": 5500,
        "totalDue": 21000,
        "totalPaid": 17850,
        "balance": 3150
    },
    "transport": {
        "stoppage": "NAGLA KOTHI BULAND SHAHR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0151"
},
{
    "id": "STU-2026-154",
    "sqlId": "154",
    "admissionNo": "317",
    "rollNo": "124",
    "name": "RAJKUMAR",
    "photo": "17e12a28f81ba03ed8023ace67d5bceb.jpg",
    "dob": "2014-04-16",
    "gender": "Male",
    "class": "V",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "RAVI KUMAR",
        "motherName": "PINKY DEVI",
        "fatherMobile": "7409726896",
        "motherMobile": "7452883387",
        "fatherPhone": "7409726896",
        "motherPhone": "7452883387",
        "address": "JARGWAN",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 83,
        "percentage": 94.3
    },
    "feeSummary": {
        "tuitionDue": 15500,
        "transportDue11Months": 5500,
        "totalDue": 21000,
        "totalPaid": 9450,
        "balance": 11550
    },
    "transport": {
        "stoppage": "JARGWAN",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-189"
    ],
    "familyId": "FAM-0152"
},
{
    "id": "STU-2026-155",
    "sqlId": "155",
    "admissionNo": "318",
    "rollNo": "125",
    "name": "ROHIT KUMAR",
    "photo": "7ceb9ae9a9c0dc32daae04e121e4ccdd.jpg",
    "dob": "2012-09-19",
    "gender": "Male",
    "class": "V",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "RAKESH KUMAR",
        "motherName": "SAROJ DEVI",
        "fatherMobile": "9627728595",
        "motherMobile": "9627728595",
        "fatherPhone": "9627728595",
        "motherPhone": "9627728595",
        "address": "CHIROURI, JARGWAN, BULANDSHAHAR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 84,
        "percentage": 95.5
    },
    "feeSummary": {
        "tuitionDue": 15500,
        "transportDue11Months": 5500,
        "totalDue": 21000,
        "totalPaid": 3150,
        "balance": 17850
    },
    "transport": {
        "stoppage": "CHIROURI",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0153"
},
{
    "id": "STU-2026-156",
    "sqlId": "156",
    "admissionNo": "319",
    "rollNo": "32",
    "name": "SAHIL KUMAR",
    "photo": "69ee6e8fbbde5e589b50e2412cda39e6.jpg",
    "dob": "2013-11-30",
    "gender": "Male",
    "class": "V",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "SANJAY KUMAR",
        "motherName": "VEENA",
        "fatherMobile": "6395011712",
        "motherMobile": "6395011712",
        "fatherPhone": "6395011712",
        "motherPhone": "6395011712",
        "address": "MOUNIPURA, RAMGHAT",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 85,
        "percentage": 96.6
    },
    "feeSummary": {
        "tuitionDue": 15500,
        "transportDue11Months": 5500,
        "totalDue": 21000,
        "totalPaid": 17850,
        "balance": 3150
    },
    "transport": {
        "stoppage": "MOUNIPURA",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-076",
        "STU-2026-007"
    ],
    "familyId": "FAM-0007"
},
{
    "id": "STU-2026-157",
    "sqlId": "157",
    "admissionNo": "320",
    "rollNo": "127",
    "name": "SANSKAR",
    "photo": "b8ddfb20aa4007971b7db6f506e95081.jpg",
    "dob": "2016-12-22",
    "gender": "Male",
    "class": "V",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "GOPAL PRASAD",
        "motherName": "RAVENDRI DEVI",
        "fatherMobile": "9528646949",
        "motherMobile": "9627887082",
        "fatherPhone": "9528646949",
        "motherPhone": "9627887082",
        "address": "RAMGHAT BULAND SHAHR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "SC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 86,
        "percentage": 97.7
    },
    "feeSummary": {
        "tuitionDue": 15500,
        "transportDue11Months": 5500,
        "totalDue": 21000,
        "totalPaid": 9450,
        "balance": 11550
    },
    "transport": {
        "stoppage": "RAMGHAT BULAND SHAHR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 3"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0155"
},
{
    "id": "STU-2026-158",
    "sqlId": "158",
    "admissionNo": "321",
    "rollNo": "128",
    "name": "SAURABH KUMAR",
    "photo": "4d66dc0184558764fae5e0d6777c5cda.jpg",
    "dob": "2015-07-07",
    "gender": "Male",
    "class": "V",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "ANITPAL SINGH",
        "motherName": "PREMLATA DEVI",
        "fatherMobile": "9149237488",
        "motherMobile": "9149237488",
        "fatherPhone": "9149237488",
        "motherPhone": "9149237488",
        "address": "CHAINDAULA, SUJANPUR, ATRAULI (ALIGARH)",
        "occupation": "SERVICE",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 87,
        "percentage": 98.9
    },
    "feeSummary": {
        "tuitionDue": 15500,
        "transportDue11Months": 5500,
        "totalDue": 21000,
        "totalPaid": 3150,
        "balance": 17850
    },
    "transport": {
        "stoppage": "CHAINDAULA",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-265"
    ],
    "familyId": "FAM-0156"
},
{
    "id": "STU-2026-159",
    "sqlId": "159",
    "admissionNo": "322",
    "rollNo": "129",
    "name": "SEJAL MITTAL",
    "photo": "f28224188b4faef819321a7b198f79b8.jpg",
    "dob": "2016-08-19",
    "gender": "Female",
    "class": "V",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "ANKUR MITTAL",
        "motherName": "PARUSHI MITTAL",
        "fatherMobile": "9917938383",
        "motherMobile": "9917938383",
        "fatherPhone": "9917938383",
        "motherPhone": "9917938383",
        "address": "RAMGHAT PO RAMGHAT BSR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "General",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 82,
        "percentage": 93.2
    },
    "feeSummary": {
        "tuitionDue": 15500,
        "transportDue11Months": 5500,
        "totalDue": 21000,
        "totalPaid": 17850,
        "balance": 3150
    },
    "transport": {
        "stoppage": "RAMGHAT PO RAMGHAT BSR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 3"
    },
    "linkedSiblingIds": [
        "STU-2026-383"
    ],
    "familyId": "FAM-0157"
},
{
    "id": "STU-2026-161",
    "sqlId": "161",
    "admissionNo": "324",
    "rollNo": "21",
    "name": "SURAJ KUMAR",
    "photo": "a751eb65d4a8a363795967bf33a7a2ea.jpg",
    "dob": "2010-08-09",
    "gender": "Male",
    "class": "V",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "RISHIPAL SINGH",
        "motherName": "PUSHPA DEVI",
        "fatherMobile": "9650519842",
        "motherMobile": "9650519842",
        "fatherPhone": "9650519842",
        "motherPhone": "9650519842",
        "address": "NAGLA GARVI, JARGWAN",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 83,
        "percentage": 94.3
    },
    "feeSummary": {
        "tuitionDue": 15500,
        "transportDue11Months": 5500,
        "totalDue": 21000,
        "totalPaid": 9450,
        "balance": 11550
    },
    "transport": {
        "stoppage": "NAGLA GARVI",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-061"
    ],
    "familyId": "FAM-0060"
},
{
    "id": "STU-2026-162",
    "sqlId": "162",
    "admissionNo": "325",
    "rollNo": "92",
    "name": "SUSHANT KUMAR",
    "photo": "80cb0bac9badeeebde31ca0e481d3365.jpg",
    "dob": "2015-05-17",
    "gender": "Male",
    "class": "VI",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "NEPAL SINGH",
        "motherName": "SANTOSH DEVI",
        "fatherMobile": "9675320274",
        "motherMobile": "9675320274",
        "fatherPhone": "9675320274",
        "motherPhone": "9675320274",
        "address": "UNCHA GAONDIBAI BUANDSHAHR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 84,
        "percentage": 95.5
    },
    "feeSummary": {
        "tuitionDue": 16000,
        "transportDue11Months": 5500,
        "totalDue": 21500,
        "totalPaid": 3225,
        "balance": 18275
    },
    "transport": {
        "stoppage": "UNCHA GAONDIBAI BUANDSHAHR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-202",
        "STU-2026-274"
    ],
    "familyId": "FAM-0159"
},
{
    "id": "STU-2026-163",
    "sqlId": "163",
    "admissionNo": "326",
    "rollNo": "131",
    "name": "TARUN KUMAR",
    "photo": "abf1db325668fc22256a8bda242e3df1.jpg",
    "dob": "2016-09-18",
    "gender": "Male",
    "class": "V",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "DINESH KUMAR",
        "motherName": "PREMVATI DEVI",
        "fatherMobile": "6398633259",
        "motherMobile": "8650036847",
        "fatherPhone": "6398633259",
        "motherPhone": "8650036847",
        "address": "DHARAKPUR BULAND SHAHR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 85,
        "percentage": 96.6
    },
    "feeSummary": {
        "tuitionDue": 15500,
        "transportDue11Months": 5500,
        "totalDue": 21000,
        "totalPaid": 17850,
        "balance": 3150
    },
    "transport": {
        "stoppage": "DHARAKPUR BULAND SHAHR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 1"
    },
    "linkedSiblingIds": [
        "STU-2026-332"
    ],
    "familyId": "FAM-0160"
},
{
    "id": "STU-2026-164",
    "sqlId": "164",
    "admissionNo": "327",
    "rollNo": "0",
    "name": "TARUN KUMAR",
    "photo": "9c15203303c75bba03e4055baababb02.jpg",
    "dob": "2016-12-29",
    "gender": "Male",
    "class": "V",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "AMAR SINGH",
        "motherName": "KAMLESH DEVI",
        "fatherMobile": "6398426834",
        "motherMobile": "9719225225",
        "fatherPhone": "6398426834",
        "motherPhone": "9719225225",
        "address": "NAGLA DHARAKPUR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 86,
        "percentage": 97.7
    },
    "feeSummary": {
        "tuitionDue": 15500,
        "transportDue11Months": 5500,
        "totalDue": 21000,
        "totalPaid": 9450,
        "balance": 11550
    },
    "transport": {
        "stoppage": "NAGLA DHARAKPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-010",
        "STU-2026-134"
    ],
    "familyId": "FAM-0010"
},
{
    "id": "STU-2026-165",
    "sqlId": "165",
    "admissionNo": "328",
    "rollNo": "18",
    "name": "VANDANA BAGHEL",
    "photo": "e9bb92afc149e69cab57acd6fb71b174.jpg",
    "dob": "2015-08-25",
    "gender": "Male",
    "class": "V",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "ABHIJEET SINGH",
        "motherName": "NARAYANI DEVI",
        "fatherMobile": "9899289271",
        "motherMobile": "9899289271",
        "fatherPhone": "9899289271",
        "motherPhone": "9899289271",
        "address": "KALIYANPUR BHAGIRATHPUR, ATRAULI (ALIGARH)",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 87,
        "percentage": 98.9
    },
    "feeSummary": {
        "tuitionDue": 15500,
        "transportDue11Months": 5500,
        "totalDue": 21000,
        "totalPaid": 3150,
        "balance": 17850
    },
    "transport": {
        "stoppage": "KALIYANPUR BHAGIRATHPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 2"
    },
    "linkedSiblingIds": [
        "STU-2026-057"
    ],
    "familyId": "FAM-0056"
},
{
    "id": "STU-2026-166",
    "sqlId": "166",
    "admissionNo": "329",
    "rollNo": "13",
    "name": "VANDANA KUMARI",
    "photo": "7336922d1ec134fa98bf116ec94f8dd6.jpg",
    "dob": "2017-09-05",
    "gender": "Male",
    "class": "V",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "JAY PAL SINGH",
        "motherName": "SUMAN DEVI",
        "fatherMobile": "7505351193",
        "motherMobile": "7505351193",
        "fatherPhone": "7505351193",
        "motherPhone": "7505351193",
        "address": "CHIROURI BSR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 82,
        "percentage": 93.2
    },
    "feeSummary": {
        "tuitionDue": 15500,
        "transportDue11Months": 5500,
        "totalDue": 21000,
        "totalPaid": 17850,
        "balance": 3150
    },
    "transport": {
        "stoppage": "CHIROURI BSR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-053"
    ],
    "familyId": "FAM-0163"
},
{
    "id": "STU-2026-167",
    "sqlId": "167",
    "admissionNo": "330",
    "rollNo": "99",
    "name": "ADITYA KUMAR",
    "photo": "af876ae0e55d574d54b661986621aca3.jpg",
    "dob": "2015-06-15",
    "gender": "Male",
    "class": "V",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "SHYAMVEER SINGH",
        "motherName": "ASHA DEVI",
        "fatherMobile": "9761081386",
        "motherMobile": "9761081386",
        "fatherPhone": "9761081386",
        "motherPhone": "9761081386",
        "address": "SILHARI DIBAI BULANDSHAHR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 83,
        "percentage": 94.3
    },
    "feeSummary": {
        "tuitionDue": 15500,
        "transportDue11Months": 5500,
        "totalDue": 21000,
        "totalPaid": 9450,
        "balance": 11550
    },
    "transport": {
        "stoppage": "SILHARI DIBAI BULANDSHAHR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 3"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0164"
},
{
    "id": "STU-2026-168",
    "sqlId": "168",
    "admissionNo": "331",
    "rollNo": "44",
    "name": "ADITYA YADAV",
    "photo": "f2bcb612122012f2d4fe058fb06bd330.jpg",
    "dob": "2015-04-25",
    "gender": "Male",
    "class": "IV",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "SATENDRA KUMAR",
        "motherName": "SNEH DEVI",
        "fatherMobile": "7500077994",
        "motherMobile": "7500077994",
        "fatherPhone": "7500077994",
        "motherPhone": "7500077994",
        "address": "VILL.- GOKULPUR, POST- RAMGHAT, DIST.- BULANDSHAHR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 84,
        "percentage": 95.5
    },
    "feeSummary": {
        "tuitionDue": 15000,
        "transportDue11Months": 5500,
        "totalDue": 20500,
        "totalPaid": 3075,
        "balance": 17425
    },
    "transport": {
        "stoppage": "VILL.- GOKULPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 5"
    },
    "linkedSiblingIds": [
        "STU-2026-082"
    ],
    "familyId": "FAM-0165"
},
{
    "id": "STU-2026-170",
    "sqlId": "170",
    "admissionNo": "333",
    "rollNo": "73",
    "name": "ANKUSH KUMAR",
    "photo": "81f937b592a7bd97b4ac133483c4ed73.jpg",
    "dob": "2016-12-22",
    "gender": "Male",
    "class": "IV",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "MANOJ KUMAR",
        "motherName": "BEENA DEVI",
        "fatherMobile": "9368681376",
        "motherMobile": "9368681376",
        "fatherPhone": "9368681376",
        "motherPhone": "9368681376",
        "address": "SILHARI DIBAI BULANDSHAHR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 85,
        "percentage": 96.6
    },
    "feeSummary": {
        "tuitionDue": 15000,
        "transportDue11Months": 5500,
        "totalDue": 20500,
        "totalPaid": 17425,
        "balance": 3075
    },
    "transport": {
        "stoppage": "SILHARI DIBAI BULANDSHAHR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 3"
    },
    "linkedSiblingIds": [
        "STU-2026-132"
    ],
    "familyId": "FAM-0130"
},
{
    "id": "STU-2026-171",
    "sqlId": "171",
    "admissionNo": "334",
    "rollNo": "134",
    "name": "ANSHU KUMAR",
    "photo": "a8eec80d46ca2b7dbbc4c98b4d1b1879.jpg",
    "dob": "2017-09-22",
    "gender": "Male",
    "class": "IV",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "VINOD KUMAR",
        "motherName": "SNEHLATA",
        "fatherMobile": "7830242091",
        "motherMobile": "7830242091",
        "fatherPhone": "7830242091",
        "motherPhone": "7830242091",
        "address": "MUDAKHERA / NAGLA ACHALA, ALMPUR FATAHPUR (ALIGARH)",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 86,
        "percentage": 97.7
    },
    "feeSummary": {
        "tuitionDue": 15000,
        "transportDue11Months": 5500,
        "totalDue": 20500,
        "totalPaid": 9225,
        "balance": 11275
    },
    "transport": {
        "stoppage": "MUDAKHERA / NAGLA ACHALA",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0168"
},
{
    "id": "STU-2026-172",
    "sqlId": "172",
    "admissionNo": "335",
    "rollNo": "345",
    "name": "ANSHU YADAV",
    "photo": "de301a90dbe10369a0926754fb6b928c.jpg",
    "dob": "2016-07-30",
    "gender": "Female",
    "class": "IV",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "SANJAY KUMAR",
        "motherName": "SEEMA DEVI",
        "fatherMobile": "9870743850",
        "motherMobile": "8650667436",
        "fatherPhone": "9870743850",
        "motherPhone": "8650667436",
        "address": "KALIYANPUR BHAGIRATHPUR, (ALIGARH)",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 87,
        "percentage": 98.9
    },
    "feeSummary": {
        "tuitionDue": 15000,
        "transportDue11Months": 5500,
        "totalDue": 20500,
        "totalPaid": 3075,
        "balance": 17425
    },
    "transport": {
        "stoppage": "KALIYANPUR BHAGIRATHPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 2"
    },
    "linkedSiblingIds": [
        "STU-2026-436"
    ],
    "familyId": "FAM-0169"
},
{
    "id": "STU-2026-173",
    "sqlId": "173",
    "admissionNo": "336",
    "rollNo": "81",
    "name": "ANSHUL KUMAR",
    "photo": "19b4407538f16ec2969d8e9c283689d1.jpg",
    "dob": "2017-09-05",
    "gender": "Male",
    "class": "IV",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "VINOD KUMAR",
        "motherName": "KAMLESH DEVI",
        "fatherMobile": "8941891392",
        "motherMobile": "8941891392",
        "fatherPhone": "8941891392",
        "motherPhone": "8941891392",
        "address": "UNCHA GAON BANGAR, RAMGHAT",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 82,
        "percentage": 93.2
    },
    "feeSummary": {
        "tuitionDue": 15000,
        "transportDue11Months": 5500,
        "totalDue": 20500,
        "totalPaid": 17425,
        "balance": 3075
    },
    "transport": {
        "stoppage": "UNCHA GAON BANGAR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 5"
    },
    "linkedSiblingIds": [
        "STU-2026-113"
    ],
    "familyId": "FAM-0111"
},
{
    "id": "STU-2026-175",
    "sqlId": "175",
    "admissionNo": "338",
    "rollNo": "145",
    "name": "DAMINI",
    "photo": "c1ca8a0866b6db9851d6a30c93515072.jpg",
    "dob": "2015-12-19",
    "gender": "Male",
    "class": "IV",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "KAUSHAL KUMAR",
        "motherName": "SARALA DEVI",
        "fatherMobile": "9468205683",
        "motherMobile": "9468205683",
        "fatherPhone": "9468205683",
        "motherPhone": "9468205683",
        "address": "GANESHPUR GOVINDPUR, ATRAULI",
        "occupation": "AGRICULTURE",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 83,
        "percentage": 94.3
    },
    "feeSummary": {
        "tuitionDue": 15000,
        "transportDue11Months": 5500,
        "totalDue": 20500,
        "totalPaid": 9225,
        "balance": 11275
    },
    "transport": {
        "stoppage": "GANESHPUR GOVINDPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-350"
    ],
    "familyId": "FAM-0171"
},
{
    "id": "STU-2026-176",
    "sqlId": "176",
    "admissionNo": "339",
    "rollNo": "104",
    "name": "DAULATRAM",
    "photo": "4eaebb7043422c72daef87d63ec39a1f.jpg",
    "dob": "2012-01-01",
    "gender": "Male",
    "class": "V",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "HARBALLABH",
        "motherName": "RUMANA DEVI",
        "fatherMobile": "7830373451",
        "motherMobile": "7217281688",
        "fatherPhone": "7830373451",
        "motherPhone": "7217281688",
        "address": "MAHRAJPUR BANJARA NAGLA",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "BANJARA",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 84,
        "percentage": 95.5
    },
    "feeSummary": {
        "tuitionDue": 15500,
        "transportDue11Months": 5500,
        "totalDue": 21000,
        "totalPaid": 3150,
        "balance": 17850
    },
    "transport": {
        "stoppage": "MAHRAJPUR BANJARA NAGLA",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 5"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0172"
},
{
    "id": "STU-2026-177",
    "sqlId": "177",
    "admissionNo": "340",
    "rollNo": "136",
    "name": "DEEPANJALI",
    "photo": "98d0b97b9a6bc363cb3e7da32b4b4dcd.jpg",
    "dob": "2014-01-01",
    "gender": "Male",
    "class": "IV",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "MUKESH KUMAR",
        "motherName": "SHEELA",
        "fatherMobile": "7037019598",
        "motherMobile": "7088019598",
        "fatherPhone": "7037019598",
        "motherPhone": "7088019598",
        "address": "KALIYANPUR BHAGIRATHPUR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 85,
        "percentage": 96.6
    },
    "feeSummary": {
        "tuitionDue": 15000,
        "transportDue11Months": 5500,
        "totalDue": 20500,
        "totalPaid": 17425,
        "balance": 3075
    },
    "transport": {
        "stoppage": "KALIYANPUR BHAGIRATHPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 2"
    },
    "linkedSiblingIds": [
        "STU-2026-374"
    ],
    "familyId": "FAM-0173"
},
{
    "id": "STU-2026-178",
    "sqlId": "178",
    "admissionNo": "341",
    "rollNo": "57",
    "name": "DEVESH KUMAR",
    "photo": "224d992cb887b20916eb13cdb6836c57.jpg",
    "dob": "2016-03-10",
    "gender": "Male",
    "class": "IV",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "ROOP KISHOR",
        "motherName": "SEEMA DEVI",
        "fatherMobile": "9990488266",
        "motherMobile": "9990488266",
        "fatherPhone": "9990488266",
        "motherPhone": "9990488266",
        "address": "NAGLA GARVI, JARGWAN",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 86,
        "percentage": 97.7
    },
    "feeSummary": {
        "tuitionDue": 15000,
        "transportDue11Months": 5500,
        "totalDue": 20500,
        "totalPaid": 9225,
        "balance": 11275
    },
    "transport": {
        "stoppage": "NAGLA GARVI",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-085"
    ],
    "familyId": "FAM-0083"
},
{
    "id": "STU-2026-179",
    "sqlId": "179",
    "admissionNo": "342",
    "rollNo": "137",
    "name": "DHURV SHARMA",
    "photo": "2156dc1c6df9a12b3375d480d5b3bd29.jpg",
    "dob": "2017-06-22",
    "gender": "Male",
    "class": "IV",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "SURESH TIWARI",
        "motherName": "SHIVANGI BHARDWAJ",
        "fatherMobile": "6396058127",
        "motherMobile": "6396058127",
        "fatherPhone": "6396058127",
        "motherPhone": "6396058127",
        "address": "RAMGHAT, DEBAI",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "Select Social Category",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 87,
        "percentage": 98.9
    },
    "feeSummary": {
        "tuitionDue": 15000,
        "transportDue11Months": 5500,
        "totalDue": 20500,
        "totalPaid": 3075,
        "balance": 17425
    },
    "transport": {
        "stoppage": "RAMGHAT",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 3"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0175"
},
{
    "id": "STU-2026-180",
    "sqlId": "180",
    "admissionNo": "343",
    "rollNo": "70",
    "name": "DIVYA",
    "photo": "da6bde59d065d9b616db258761437b32.jpg",
    "dob": "2017-08-16",
    "gender": "Male",
    "class": "IV",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "ARUN KUMAR",
        "motherName": "KOMAL",
        "fatherMobile": "9268386124",
        "motherMobile": "9268386124",
        "fatherPhone": "9268386124",
        "motherPhone": "9268386124",
        "address": "HARVANSHPUR ATRAULI",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "BAGHEL",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 82,
        "percentage": 93.2
    },
    "feeSummary": {
        "tuitionDue": 15000,
        "transportDue11Months": 5500,
        "totalDue": 20500,
        "totalPaid": 17425,
        "balance": 3075
    },
    "transport": {
        "stoppage": "HARVANSHPUR ATRAULI",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-102"
    ],
    "familyId": "FAM-0100"
},
{
    "id": "STU-2026-181",
    "sqlId": "181",
    "admissionNo": "344",
    "rollNo": "138",
    "name": "DIVYANSHU KUMAR",
    "photo": "ac351d52871bed96df8791424a9ece1c.jpg",
    "dob": "2016-05-17",
    "gender": "Male",
    "class": "IV",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "ANIL KUMAR",
        "motherName": "VINESH DEVI",
        "fatherMobile": "7983817850",
        "motherMobile": "7830214462",
        "fatherPhone": "7983817850",
        "motherPhone": "7830214462",
        "address": "JARGWAN BULAND SHAHR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "AHEER",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 83,
        "percentage": 94.3
    },
    "feeSummary": {
        "tuitionDue": 15000,
        "transportDue11Months": 5500,
        "totalDue": 20500,
        "totalPaid": 9225,
        "balance": 11275
    },
    "transport": {
        "stoppage": "JARGWAN BULAND SHAHR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-512"
    ],
    "familyId": "FAM-0177"
},
{
    "id": "STU-2026-182",
    "sqlId": "182",
    "admissionNo": "345",
    "rollNo": "139",
    "name": "DRASHTI",
    "photo": "a10d7bb84c854692ca2449e2a7708a60.jpg",
    "dob": "2016-02-12",
    "gender": "Female",
    "class": "IV",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "ROOP KISHOR",
        "motherName": "KUSUM DEVI",
        "fatherMobile": "9759711175",
        "motherMobile": "9759711175",
        "fatherPhone": "9759711175",
        "motherPhone": "9759711175",
        "address": "NAGLA DHARAKPUR, DIBAI",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 84,
        "percentage": 95.5
    },
    "feeSummary": {
        "tuitionDue": 15000,
        "transportDue11Months": 5500,
        "totalDue": 20500,
        "totalPaid": 3075,
        "balance": 17425
    },
    "transport": {
        "stoppage": "NAGLA DHARAKPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 1"
    },
    "linkedSiblingIds": [
        "STU-2026-295"
    ],
    "familyId": "FAM-0178"
},
{
    "id": "STU-2026-183",
    "sqlId": "183",
    "admissionNo": "346",
    "rollNo": "86",
    "name": "GOPAL PATHAK",
    "photo": "46becc80bd85baa5645707c87972e060.jpg",
    "dob": "2016-08-15",
    "gender": "Male",
    "class": "IV",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "ATUL PATHAK",
        "motherName": "NEERAJ DEVI",
        "fatherMobile": "7906380785",
        "motherMobile": "6397628785",
        "fatherPhone": "7906380785",
        "motherPhone": "6397628785",
        "address": "VILL-POST JARGWAN",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "Select Social Category",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 85,
        "percentage": 96.6
    },
    "feeSummary": {
        "tuitionDue": 15000,
        "transportDue11Months": 5500,
        "totalDue": 20500,
        "totalPaid": 17425,
        "balance": 3075
    },
    "transport": {
        "stoppage": "VILL-POST JARGWAN",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-117"
    ],
    "familyId": "FAM-0115"
},
{
    "id": "STU-2026-184",
    "sqlId": "184",
    "admissionNo": "347",
    "rollNo": "142",
    "name": "GUNJAN",
    "photo": "0f6319f028e3ae0e2ba05609ad512870.jpg",
    "dob": "2017-11-05",
    "gender": "Female",
    "class": "IV",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "JAYVEER SINGH",
        "motherName": "POONAM DEVI",
        "fatherMobile": "9719419975",
        "motherMobile": "9719419975",
        "fatherPhone": "9719419975",
        "motherPhone": "9719419975",
        "address": "NAGLA GARVI, JARGWAN",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "LODHI",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 86,
        "percentage": 97.7
    },
    "feeSummary": {
        "tuitionDue": 15000,
        "transportDue11Months": 5500,
        "totalDue": 20500,
        "totalPaid": 9225,
        "balance": 11275
    },
    "transport": {
        "stoppage": "NAGLA GARVI",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-358"
    ],
    "familyId": "FAM-0180"
},
{
    "id": "STU-2026-185",
    "sqlId": "185",
    "admissionNo": "348",
    "rollNo": "141",
    "name": "GAURI SHARMA",
    "photo": "abd50f58bdaab4ed0d25a2bfa4e54ae0.jpg",
    "dob": "2018-06-08",
    "gender": "Female",
    "class": "IV",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "INDRAJEET SHARMA",
        "motherName": "DULARI SHARMA",
        "fatherMobile": "8077450141",
        "motherMobile": "8077450141",
        "fatherPhone": "8077450141",
        "motherPhone": "8077450141",
        "address": "BAIJALA, ATRAULI",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "BHARMAN",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 87,
        "percentage": 98.9
    },
    "feeSummary": {
        "tuitionDue": 15000,
        "transportDue11Months": 5500,
        "totalDue": 20500,
        "totalPaid": 3075,
        "balance": 17425
    },
    "transport": {
        "stoppage": "BAIJALA",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 1"
    },
    "linkedSiblingIds": [
        "STU-2026-351"
    ],
    "familyId": "FAM-0181"
},
{
    "id": "STU-2026-186",
    "sqlId": "186",
    "admissionNo": "349",
    "rollNo": "158",
    "name": "HARSH KUMAR",
    "photo": "e083edd984e2650bc51961b7ff3652e0.jpg",
    "dob": "2015-07-14",
    "gender": "Male",
    "class": "IV",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "SANTOSH KUMAR",
        "motherName": "JYOTI DEVI",
        "fatherMobile": "9758131285",
        "motherMobile": "9758131285",
        "fatherPhone": "9758131285",
        "motherPhone": "9758131285",
        "address": "KUDHAINI, CHIRAURI",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 82,
        "percentage": 93.2
    },
    "feeSummary": {
        "tuitionDue": 15000,
        "transportDue11Months": 5500,
        "totalDue": 20500,
        "totalPaid": 17425,
        "balance": 3075
    },
    "transport": {
        "stoppage": "KUDHAINI",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 4"
    },
    "linkedSiblingIds": [
        "STU-2026-210"
    ],
    "familyId": "FAM-0182"
},
{
    "id": "STU-2026-187",
    "sqlId": "187",
    "admissionNo": "350",
    "rollNo": "107",
    "name": "HARSH KUMAR",
    "photo": "e1dcea0f1a6efc7b0adaacc91cfbf82e.jpg",
    "dob": "2018-01-13",
    "gender": "Male",
    "class": "V",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "ANIL KUMAR",
        "motherName": "PINKY",
        "fatherMobile": "9761825947",
        "motherMobile": "7448232379",
        "fatherPhone": "9761825947",
        "motherPhone": "7448232379",
        "address": "SILHARI RAMGHAT",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 83,
        "percentage": 94.3
    },
    "feeSummary": {
        "tuitionDue": 15500,
        "transportDue11Months": 5500,
        "totalDue": 21000,
        "totalPaid": 9450,
        "balance": 11550
    },
    "transport": {
        "stoppage": "SILHARI RAMGHAT",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 3"
    },
    "linkedSiblingIds": [
        "STU-2026-388"
    ],
    "familyId": "FAM-0183"
},
{
    "id": "STU-2026-189",
    "sqlId": "189",
    "admissionNo": "352",
    "rollNo": "124",
    "name": "HIMANSHU",
    "photo": "c1faad768064a0ca836077c995fb87b3.jpg",
    "dob": "2013-08-07",
    "gender": "Male",
    "class": "IV",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "RAVI KUMAR",
        "motherName": "PINKY DEVI",
        "fatherMobile": "7452883387",
        "motherMobile": "7452883387",
        "fatherPhone": "7452883387",
        "motherPhone": "7452883387",
        "address": "JARGWAN",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "Select Social Category",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 84,
        "percentage": 95.5
    },
    "feeSummary": {
        "tuitionDue": 15000,
        "transportDue11Months": 5500,
        "totalDue": 20500,
        "totalPaid": 3075,
        "balance": 17425
    },
    "transport": {
        "stoppage": "JARGWAN",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-154"
    ],
    "familyId": "FAM-0185"
},
{
    "id": "STU-2026-190",
    "sqlId": "190",
    "admissionNo": "353",
    "rollNo": "146",
    "name": "JATIN KUMAR",
    "photo": "699c2cb5ce8d017ce756375d1e81ca3f.jpg",
    "dob": "2015-12-14",
    "gender": "Male",
    "class": "IV",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "DEVDUTTA",
        "motherName": "CHANDRAPRABHA",
        "fatherMobile": "8384814903",
        "motherMobile": "8384814903",
        "fatherPhone": "8384814903",
        "motherPhone": "8384814903",
        "address": "NAGLA GARVI, JARGWAN",
        "occupation": "AGRICULTURE",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "LODHI",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 85,
        "percentage": 96.6
    },
    "feeSummary": {
        "tuitionDue": 15000,
        "transportDue11Months": 5500,
        "totalDue": 20500,
        "totalPaid": 17425,
        "balance": 3075
    },
    "transport": {
        "stoppage": "NAGLA GARVI",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 1"
    },
    "linkedSiblingIds": [
        "STU-2026-673"
    ],
    "familyId": "FAM-0644"
},
{
    "id": "STU-2026-191",
    "sqlId": "191",
    "admissionNo": "354",
    "rollNo": "62",
    "name": "KHUSHI",
    "photo": "4300efa5356643cc7b8b815606f370d9.jpg",
    "dob": "2017-01-25",
    "gender": "Male",
    "class": "IV",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "RAM KISHOR",
        "motherName": "VANDANA DEVI",
        "fatherMobile": "9759840340",
        "motherMobile": "9759840340",
        "fatherPhone": "9759840340",
        "motherPhone": "9759840340",
        "address": "NATHPUR NAHAL ATRAULI ALIGARH",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 86,
        "percentage": 97.7
    },
    "feeSummary": {
        "tuitionDue": 15000,
        "transportDue11Months": 5500,
        "totalDue": 20500,
        "totalPaid": 9225,
        "balance": 11275
    },
    "transport": {
        "stoppage": "NATHPUR NAHAL ATRAULI ALIGARH",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 3"
    },
    "linkedSiblingIds": [
        "STU-2026-091"
    ],
    "familyId": "FAM-0089"
},
{
    "id": "STU-2026-193",
    "sqlId": "193",
    "admissionNo": "356",
    "rollNo": "147",
    "name": "KRISHNA YADAV",
    "photo": "09501e218411264e0f1c46f1f25f584c.jpg",
    "dob": "2017-12-30",
    "gender": "Male",
    "class": "IV",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "SAHDEV SINGH",
        "motherName": "SADHNA DEVI",
        "fatherMobile": "8630015928",
        "motherMobile": "6396453048",
        "fatherPhone": "8630015928",
        "motherPhone": "6396453048",
        "address": "CHIRAURI, DIBAI",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 87,
        "percentage": 98.9
    },
    "feeSummary": {
        "tuitionDue": 15000,
        "transportDue11Months": 5500,
        "totalDue": 20500,
        "totalPaid": 3075,
        "balance": 17425
    },
    "transport": {
        "stoppage": "CHIRAURI",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 4"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0189"
},
{
    "id": "STU-2026-194",
    "sqlId": "194",
    "admissionNo": "359",
    "rollNo": "149",
    "name": "MAYANK KUMAR",
    "photo": "8f7cda287e806764801116698087d415.jpg",
    "dob": "2013-07-23",
    "gender": "Male",
    "class": "IV",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "HOSHIYAR SINGH",
        "motherName": "SUMAN DEVI",
        "fatherMobile": "7830242051",
        "motherMobile": "7830242051",
        "fatherPhone": "7830242051",
        "motherPhone": "7830242051",
        "address": "BAIJLA KOTHI ,JIRALI DHOOM SINGH ATRALI",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 82,
        "percentage": 93.2
    },
    "feeSummary": {
        "tuitionDue": 15000,
        "transportDue11Months": 5500,
        "totalDue": 20500,
        "totalPaid": 17425,
        "balance": 3075
    },
    "transport": {
        "stoppage": "BAIJLA KOTHI",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0190"
},
{
    "id": "STU-2026-195",
    "sqlId": "195",
    "admissionNo": "360",
    "rollNo": "33",
    "name": "MOHAN KUMAR",
    "photo": "3b4b3b327b01e0ba2dad8b90ea4404ee.jpg",
    "dob": "2016-01-01",
    "gender": "Male",
    "class": "IV",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "MATRU SINGH",
        "motherName": "POOJA DEVI",
        "fatherMobile": "9758253973",
        "motherMobile": "9758253973",
        "fatherPhone": "9758253973",
        "motherPhone": "9758253973",
        "address": "NAGLA CHIRAURI, CHIRAURI (BULANDSHAHR)",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 83,
        "percentage": 94.3
    },
    "feeSummary": {
        "tuitionDue": 15000,
        "transportDue11Months": 5500,
        "totalDue": 20500,
        "totalPaid": 9225,
        "balance": 11275
    },
    "transport": {
        "stoppage": "NAGLA CHIRAURI",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-078"
    ],
    "familyId": "FAM-0076"
},
{
    "id": "STU-2026-196",
    "sqlId": "196",
    "admissionNo": "361",
    "rollNo": "116",
    "name": "MOHIT KUMAR",
    "photo": "86565d2e15c87480dba75c64738a9174.jpg",
    "dob": "2013-01-01",
    "gender": "Male",
    "class": "V",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "BHOORE SINGH",
        "motherName": "ASHA DEVI",
        "fatherMobile": "9568476692",
        "motherMobile": "9568476692",
        "fatherPhone": "9568476692",
        "motherPhone": "9568476692",
        "address": "UNCHA GAWN BANGARBULANDSHAHR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "AHEER",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 84,
        "percentage": 95.5
    },
    "feeSummary": {
        "tuitionDue": 15500,
        "transportDue11Months": 5500,
        "totalDue": 21000,
        "totalPaid": 3150,
        "balance": 17850
    },
    "transport": {
        "stoppage": "UNCHA GAWN BANGARBULANDSHAHR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 5"
    },
    "linkedSiblingIds": [
        "STU-2026-252"
    ],
    "familyId": "FAM-0192"
},
{
    "id": "STU-2026-199",
    "sqlId": "199",
    "admissionNo": "364",
    "rollNo": "119",
    "name": "NISHANT KUMAR",
    "photo": "e1ec9c9f5693e37e93fc773c09e866cb.jpg",
    "dob": "2016-03-01",
    "gender": "Male",
    "class": "IV",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "YOGESH KUMAR",
        "motherName": "PINKY DEVI",
        "fatherMobile": "8859303073",
        "motherMobile": "8859303073",
        "fatherPhone": "8859303073",
        "motherPhone": "8859303073",
        "address": "KALIYANPUR BHAGIRATHPUR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "AHEER",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 85,
        "percentage": 96.6
    },
    "feeSummary": {
        "tuitionDue": 15000,
        "transportDue11Months": 5500,
        "totalDue": 20500,
        "totalPaid": 17425,
        "balance": 3075
    },
    "transport": {
        "stoppage": "KALIYANPUR BHAGIRATHPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 2"
    },
    "linkedSiblingIds": [
        "STU-2026-148",
        "STU-2026-208"
    ],
    "familyId": "FAM-0146"
},
{
    "id": "STU-2026-200",
    "sqlId": "200",
    "admissionNo": "365",
    "rollNo": "151",
    "name": "NISHANT KUMAR",
    "photo": "49a460045222eea201d176af85de694e.jpg",
    "dob": "2016-03-01",
    "gender": "Male",
    "class": "IV",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "DINESH KUMAR",
        "motherName": "VEENESH DEVI",
        "fatherMobile": "9536711508",
        "motherMobile": "9536711508",
        "fatherPhone": "9536711508",
        "motherPhone": "9536711508",
        "address": "DADHAR ALIPURA",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "BAGH",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 86,
        "percentage": 97.7
    },
    "feeSummary": {
        "tuitionDue": 15000,
        "transportDue11Months": 5500,
        "totalDue": 20500,
        "totalPaid": 9225,
        "balance": 11275
    },
    "transport": {
        "stoppage": "DADHAR ALIPURA",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 2"
    },
    "linkedSiblingIds": [
        "STU-2026-326"
    ],
    "familyId": "FAM-0196"
},
{
    "id": "STU-2026-201",
    "sqlId": "201",
    "admissionNo": "366",
    "rollNo": "0",
    "name": "PRAJWAL CHAUHAN",
    "photo": "5e3ba1d9348c9bebda2941e13eb6186e.jpg",
    "dob": "2013-10-24",
    "gender": "Male",
    "class": "V",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "PIYUSH CHAUHAN",
        "motherName": "MOHINI CHAUHAN",
        "fatherMobile": "9528626183",
        "motherMobile": "9528626183",
        "fatherPhone": "9528626183",
        "motherPhone": "9528626183",
        "address": "LOHGARH , ATRAULI",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "Select Social Category",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 87,
        "percentage": 98.9
    },
    "feeSummary": {
        "tuitionDue": 15500,
        "transportDue11Months": 5500,
        "totalDue": 21000,
        "totalPaid": 3150,
        "balance": 17850
    },
    "transport": {
        "stoppage": "LOHGARH",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 2"
    },
    "linkedSiblingIds": [
        "STU-2026-223"
    ],
    "familyId": "FAM-0197"
},
{
    "id": "STU-2026-202",
    "sqlId": "202",
    "admissionNo": "367",
    "rollNo": "92",
    "name": "PRAVEEN KUMAR",
    "photo": "c114260c339128aacf2227db52b65f4e.jpg",
    "dob": "2018-05-28",
    "gender": "Male",
    "class": "VI",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "UDAYVEER SINGH",
        "motherName": "NEKSI DEVI",
        "fatherMobile": "8865087299",
        "motherMobile": "9675320274",
        "fatherPhone": "8865087299",
        "motherPhone": "9675320274",
        "address": "UNCHA GAON DIBAI BULANDSHAHR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 82,
        "percentage": 93.2
    },
    "feeSummary": {
        "tuitionDue": 16000,
        "transportDue11Months": 5500,
        "totalDue": 21500,
        "totalPaid": 18275,
        "balance": 3225
    },
    "transport": {
        "stoppage": "UNCHA GAON DIBAI BULANDSHAHR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-162"
    ],
    "familyId": "FAM-0198"
},
{
    "id": "STU-2026-203",
    "sqlId": "203",
    "admissionNo": "368",
    "rollNo": "65",
    "name": "PRIYAL",
    "photo": "6bb8436664853f6aec277f1474989541.jpg",
    "dob": "2016-03-24",
    "gender": "Male",
    "class": "IV",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "VIJAY SINGH",
        "motherName": "SUMANLATA",
        "fatherMobile": "8650458433",
        "motherMobile": "8650458433",
        "fatherPhone": "8650458433",
        "motherPhone": "8650458433",
        "address": "JARGWAN (BULANDSHAHR)",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "JATAV",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 83,
        "percentage": 94.3
    },
    "feeSummary": {
        "tuitionDue": 15000,
        "transportDue11Months": 5500,
        "totalDue": 20500,
        "totalPaid": 9225,
        "balance": 11275
    },
    "transport": {
        "stoppage": "JARGWAN (BULANDSHAHR)",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 3"
    },
    "linkedSiblingIds": [
        "STU-2026-094"
    ],
    "familyId": "FAM-0199"
},
{
    "id": "STU-2026-204",
    "sqlId": "204",
    "admissionNo": "369",
    "rollNo": "154",
    "name": "PRIYANSHI",
    "photo": "4dcc8bf24177b6019fd35f823115216d.jpg",
    "dob": "2012-11-21",
    "gender": "Female",
    "class": "IV",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "SATISH KUMAR",
        "motherName": "SUMAN DEVI",
        "fatherMobile": "9627265417",
        "motherMobile": "9627265417",
        "fatherPhone": "9627265417",
        "motherPhone": "9627265417",
        "address": "BAGI NAGLA CHIRURI BULANDSHAHR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "General",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 84,
        "percentage": 95.5
    },
    "feeSummary": {
        "tuitionDue": 15000,
        "transportDue11Months": 5500,
        "totalDue": 20500,
        "totalPaid": 3075,
        "balance": 17425
    },
    "transport": {
        "stoppage": "BAGI NAGLA CHIRURI BULANDSHAHR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 4"
    },
    "linkedSiblingIds": [
        "STU-2026-262",
        "STU-2026-306"
    ],
    "familyId": "FAM-0200"
},
{
    "id": "STU-2026-205",
    "sqlId": "205",
    "admissionNo": "370",
    "rollNo": "155",
    "name": "PRIYANSHU KUMAR",
    "photo": "91f5033a41e68724a93827c2a1b3abf6.jpg",
    "dob": "2015-07-02",
    "gender": "Male",
    "class": "IV",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "HARENDRA SINGH",
        "motherName": "KAVITA DEVI",
        "fatherMobile": "9582984147",
        "motherMobile": "9582984147",
        "fatherPhone": "9582984147",
        "motherPhone": "9582984147",
        "address": "CHIROURI",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 85,
        "percentage": 96.6
    },
    "feeSummary": {
        "tuitionDue": 15000,
        "transportDue11Months": 5500,
        "totalDue": 20500,
        "totalPaid": 17425,
        "balance": 3075
    },
    "transport": {
        "stoppage": "CHIROURI",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0201"
},
{
    "id": "STU-2026-207",
    "sqlId": "207",
    "admissionNo": "372",
    "rollNo": "156",
    "name": "RAGHAV SHARMA",
    "photo": "d56a584215706050015455310393f9c2.jpg",
    "dob": "2016-06-08",
    "gender": "Male",
    "class": "IV",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "KANHAIYALAL",
        "motherName": "POOJA SHARMA",
        "fatherMobile": "8384808060",
        "motherMobile": "8384808060",
        "fatherPhone": "8384808060",
        "motherPhone": "8384808060",
        "address": "RAMGHAT BULANDSHAHR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "BHARMAN",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 86,
        "percentage": 97.7
    },
    "feeSummary": {
        "tuitionDue": 15000,
        "transportDue11Months": 5500,
        "totalDue": 20500,
        "totalPaid": 9225,
        "balance": 11275
    },
    "transport": {
        "stoppage": "RAMGHAT BULANDSHAHR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 3"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0203"
},
{
    "id": "STU-2026-208",
    "sqlId": "208",
    "admissionNo": "374",
    "rollNo": "75",
    "name": "RAMAN KUMAR",
    "photo": "7dd8215c110c209b4a3f279afae4a978.jpg",
    "dob": "2017-06-16",
    "gender": "Male",
    "class": "IV",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "YOGESH KUMAR",
        "motherName": "PINKY DEVI",
        "fatherMobile": "8859303073",
        "motherMobile": "9720966040",
        "fatherPhone": "8859303073",
        "motherPhone": "9720966040",
        "address": "SILHARI RAMPUR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 87,
        "percentage": 98.9
    },
    "feeSummary": {
        "tuitionDue": 15000,
        "transportDue11Months": 5500,
        "totalDue": 20500,
        "totalPaid": 3075,
        "balance": 17425
    },
    "transport": {
        "stoppage": "SILHARI RAMPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 3"
    },
    "linkedSiblingIds": [
        "STU-2026-133",
        "STU-2026-148",
        "STU-2026-199"
    ],
    "familyId": "FAM-0146"
},
{
    "id": "STU-2026-209",
    "sqlId": "209",
    "admissionNo": "375",
    "rollNo": "157",
    "name": "RISHABH KUMAR",
    "photo": "98582812a38948c864166503bcb63f87.jpg",
    "dob": "2014-12-02",
    "gender": "Male",
    "class": "IV",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "RINKOO KUMAR",
        "motherName": "SUNITA DEVI",
        "fatherMobile": "9719175262",
        "motherMobile": "9719175262",
        "fatherPhone": "9719175262",
        "motherPhone": "9719175262",
        "address": "MAHARAJPUR, RAMGHAT",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "AHEER",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 82,
        "percentage": 93.2
    },
    "feeSummary": {
        "tuitionDue": 15000,
        "transportDue11Months": 5500,
        "totalDue": 20500,
        "totalPaid": 17425,
        "balance": 3075
    },
    "transport": {
        "stoppage": "MAHARAJPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 5"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0205"
},
{
    "id": "STU-2026-210",
    "sqlId": "210",
    "admissionNo": "376",
    "rollNo": "158",
    "name": "RISHU KUMARI",
    "photo": "c0cb2353325893b17aaf3bc573a8255f.jpg",
    "dob": "2014-01-28",
    "gender": "Male",
    "class": "IV",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "SANTOSH KUMAR",
        "motherName": "JYOTI DEVI",
        "fatherMobile": "9759131285",
        "motherMobile": "9759131285",
        "fatherPhone": "9759131285",
        "motherPhone": "9759131285",
        "address": "KUDHAINI, CHIROURI",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 83,
        "percentage": 94.3
    },
    "feeSummary": {
        "tuitionDue": 15000,
        "transportDue11Months": 5500,
        "totalDue": 20500,
        "totalPaid": 9225,
        "balance": 11275
    },
    "transport": {
        "stoppage": "KUDHAINI",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 4"
    },
    "linkedSiblingIds": [
        "STU-2026-186",
        "STU-2026-261"
    ],
    "familyId": "FAM-0206"
},
{
    "id": "STU-2026-211",
    "sqlId": "211",
    "admissionNo": "378",
    "rollNo": "159",
    "name": "SAMARTH KUMAR",
    "photo": "389228c7451b974099f5a3e7ed70eba2.jpg",
    "dob": "2016-12-11",
    "gender": "Male",
    "class": "IV",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "VIPIN KUMAR",
        "motherName": "ANSHU KUMARI",
        "fatherMobile": "9260917139",
        "motherMobile": "9260917139",
        "fatherPhone": "9260917139",
        "motherPhone": "9260917139",
        "address": "RAMGHAT DEBAI",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "Select Social Category",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 84,
        "percentage": 95.5
    },
    "feeSummary": {
        "tuitionDue": 15000,
        "transportDue11Months": 5500,
        "totalDue": 20500,
        "totalPaid": 3075,
        "balance": 17425
    },
    "transport": {
        "stoppage": "RAMGHAT DEBAI",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 3"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0207"
},
{
    "id": "STU-2026-212",
    "sqlId": "212",
    "admissionNo": "379",
    "rollNo": "160",
    "name": "SANDHYA KUMARI",
    "photo": "4c2c99b248fe582b3f94febccb397561.jpg",
    "dob": "2015-03-14",
    "gender": "Male",
    "class": "IV",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "HARIKESH KUMAR",
        "motherName": "HEMLATA DEVI",
        "fatherMobile": "9643311163",
        "motherMobile": "9643311163",
        "fatherPhone": "9643311163",
        "motherPhone": "9643311163",
        "address": "KALIYANPUR BHAGIRATHPUR, ATRAULI",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 85,
        "percentage": 96.6
    },
    "feeSummary": {
        "tuitionDue": 15000,
        "transportDue11Months": 5500,
        "totalDue": 20500,
        "totalPaid": 17425,
        "balance": 3075
    },
    "transport": {
        "stoppage": "KALIYANPUR BHAGIRATHPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 2"
    },
    "linkedSiblingIds": [
        "STU-2026-246"
    ],
    "familyId": "FAM-0208"
},
{
    "id": "STU-2026-213",
    "sqlId": "213",
    "admissionNo": "381",
    "rollNo": "130",
    "name": "SONAM",
    "photo": "157b93727efa823d563150b7d9ae9439.jpg",
    "dob": "2013-03-01",
    "gender": "Male",
    "class": "V",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "SONU",
        "motherName": "KAVITA DEVI",
        "fatherMobile": "8630790647",
        "motherMobile": "8630790647",
        "fatherPhone": "8630790647",
        "motherPhone": "8630790647",
        "address": "JARGWAN",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 86,
        "percentage": 97.7
    },
    "feeSummary": {
        "tuitionDue": 15500,
        "transportDue11Months": 5500,
        "totalDue": 21000,
        "totalPaid": 9450,
        "balance": 11550
    },
    "transport": {
        "stoppage": "JARGWAN",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 3"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0209"
},
{
    "id": "STU-2026-214",
    "sqlId": "214",
    "admissionNo": "382",
    "rollNo": "163",
    "name": "UDIT KUMAR",
    "photo": "6d40922325b160259f93452b6f4eea47.jpg",
    "dob": "2017-07-12",
    "gender": "Male",
    "class": "IV",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "RESHAMPAL SINGH",
        "motherName": "KALPANA DEVI",
        "fatherMobile": "9870778403",
        "motherMobile": "9870778403",
        "fatherPhone": "9870778403",
        "motherPhone": "9870778403",
        "address": "GANGA GARH, RAMGHAT",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "BAGHEL",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 87,
        "percentage": 98.9
    },
    "feeSummary": {
        "tuitionDue": 15000,
        "transportDue11Months": 5500,
        "totalDue": 20500,
        "totalPaid": 3075,
        "balance": 17425
    },
    "transport": {
        "stoppage": "GANGA GARH",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 3"
    },
    "linkedSiblingIds": [
        "STU-2026-300"
    ],
    "familyId": "FAM-0210"
},
{
    "id": "STU-2026-215",
    "sqlId": "215",
    "admissionNo": "383",
    "rollNo": "164",
    "name": "UTKARSH KAROUTIA",
    "photo": "718606eabf67cf873b3ca31078ef8db7.jpg",
    "dob": "2015-08-19",
    "gender": "Male",
    "class": "IV",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "MUNISH KUMAR",
        "motherName": "SUMAN DEVI",
        "fatherMobile": "9719198738",
        "motherMobile": "9719198738",
        "fatherPhone": "9719198738",
        "motherPhone": "9719198738",
        "address": "RAMGHAT",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "VALMIKI",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 82,
        "percentage": 93.2
    },
    "feeSummary": {
        "tuitionDue": 15000,
        "transportDue11Months": 5500,
        "totalDue": 20500,
        "totalPaid": 17425,
        "balance": 3075
    },
    "transport": {
        "stoppage": "RAMGHAT",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 5"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0211"
},
{
    "id": "STU-2026-216",
    "sqlId": "216",
    "admissionNo": "384",
    "rollNo": "105",
    "name": "VIRAT KUMAR",
    "photo": "3b2df3d303049ba59798450bfeb5a5e3.jpg",
    "dob": "2016-07-09",
    "gender": "Male",
    "class": "IV",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "KRISHNA KUMAR",
        "motherName": "VUYA DEVI",
        "fatherMobile": "9927501907",
        "motherMobile": "9927501907",
        "fatherPhone": "9927501907",
        "motherPhone": "9927501907",
        "address": "NAGLA GARVI JARGWAN BULANDSHAHR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 83,
        "percentage": 94.3
    },
    "feeSummary": {
        "tuitionDue": 15000,
        "transportDue11Months": 5500,
        "totalDue": 20500,
        "totalPaid": 9225,
        "balance": 11275
    },
    "transport": {
        "stoppage": "NAGLA GARVI JARGWAN BULANDSHAHR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-138"
    ],
    "familyId": "FAM-0136"
},
{
    "id": "STU-2026-217",
    "sqlId": "217",
    "admissionNo": "386",
    "rollNo": "165",
    "name": "VIVEK KUMAR",
    "photo": "2fdc25ff8bdc37a4718615ab109d6f12.jpg",
    "dob": "2016-01-01",
    "gender": "Male",
    "class": "IV",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "HARIKISHAN",
        "motherName": "REENA DEVI",
        "fatherMobile": "7729905845",
        "motherMobile": "7729905845",
        "fatherPhone": "7729905845",
        "motherPhone": "7729905845",
        "address": "MAHARAJPUR URF RATUA NAGLA",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 84,
        "percentage": 95.5
    },
    "feeSummary": {
        "tuitionDue": 15000,
        "transportDue11Months": 5500,
        "totalDue": 20500,
        "totalPaid": 3075,
        "balance": 17425
    },
    "transport": {
        "stoppage": "MAHARAJPUR URF RATUA NAGLA",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 5"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0213"
},
{
    "id": "STU-2026-218",
    "sqlId": "218",
    "admissionNo": "387",
    "rollNo": "166",
    "name": "AASHI SHARMA",
    "photo": "9208ac0255beb433ee81b3b54487079a.jpg",
    "dob": "2015-08-22",
    "gender": "Female",
    "class": "III",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "DEVESH SHARMA",
        "motherName": "KHUSHBOO",
        "fatherMobile": "9971318665",
        "motherMobile": "9971318665",
        "fatherPhone": "9971318665",
        "motherPhone": "9971318665",
        "address": "KUDHAINI CHIRAURI",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "General",
        "religion": "HINDU"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 85,
        "percentage": 96.6
    },
    "feeSummary": {
        "tuitionDue": 14500,
        "transportDue11Months": 5500,
        "totalDue": 20000,
        "totalPaid": 17000,
        "balance": 3000
    },
    "transport": {
        "stoppage": "KUDHAINI CHIRAURI",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 4"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0214"
},
{
    "id": "STU-2026-219",
    "sqlId": "219",
    "admissionNo": "388",
    "rollNo": "168",
    "name": "ARYAN KUMAR",
    "photo": "e3b2ea9679d9a82f1e7e212b5922727f.jpg",
    "dob": "2015-02-17",
    "gender": "Male",
    "class": "III",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "BALAK DAS",
        "motherName": "NEHA DEVI",
        "fatherMobile": "6351582814",
        "motherMobile": "6351582814",
        "fatherPhone": "6351582814",
        "motherPhone": "6351582814",
        "address": "MOUNIPURA URF RAMVAS BULANDSHAHR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 86,
        "percentage": 97.7
    },
    "feeSummary": {
        "tuitionDue": 14500,
        "transportDue11Months": 5500,
        "totalDue": 20000,
        "totalPaid": 9000,
        "balance": 11000
    },
    "transport": {
        "stoppage": "MOUNIPURA URF RAMVAS BULANDSHAHR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 3"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0215"
},
{
    "id": "STU-2026-220",
    "sqlId": "220",
    "admissionNo": "389",
    "rollNo": "0",
    "name": "AYANSH",
    "photo": "b0ae824b72d17220b0dbbf7906ab22fe.jpg",
    "dob": "2017-08-03",
    "gender": "Male",
    "class": "III",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "SAURABH PRATAP",
        "motherName": "RAGINI",
        "fatherMobile": "9536149148",
        "motherMobile": "9536149148",
        "fatherPhone": "9536149148",
        "motherPhone": "9536149148",
        "address": "LOHGARH, ATRAULI",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 87,
        "percentage": 98.9
    },
    "feeSummary": {
        "tuitionDue": 14500,
        "transportDue11Months": 5500,
        "totalDue": 20000,
        "totalPaid": 3000,
        "balance": 17000
    },
    "transport": {
        "stoppage": "LOHGARH",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-136"
    ],
    "familyId": "FAM-0216"
},
{
    "id": "STU-2026-222",
    "sqlId": "222",
    "admissionNo": "391",
    "rollNo": "169",
    "name": "AYUSH KUMAR",
    "photo": "58468754d907633b467e7ad53e59a7b6.jpg",
    "dob": "2014-01-09",
    "gender": "Male",
    "class": "III",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "RAMESH CHANDRA",
        "motherName": "RAJVATI DEVI",
        "fatherMobile": "8650648007",
        "motherMobile": "8650648007",
        "fatherPhone": "8650648007",
        "motherPhone": "8650648007",
        "address": "BAJHERA, DHARAKPUR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 82,
        "percentage": 93.2
    },
    "feeSummary": {
        "tuitionDue": 14500,
        "transportDue11Months": 5500,
        "totalDue": 20000,
        "totalPaid": 17000,
        "balance": 3000
    },
    "transport": {
        "stoppage": "BAJHERA",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 1"
    },
    "linkedSiblingIds": [
        "STU-2026-289"
    ],
    "familyId": "FAM-0218"
},
{
    "id": "STU-2026-223",
    "sqlId": "223",
    "admissionNo": "392",
    "rollNo": "118",
    "name": "AYUSHI CHAUHAN",
    "photo": "b228f28a1f602f4e0b2a17eeac3e5351.jpg",
    "dob": "2016-08-22",
    "gender": "Male",
    "class": "III",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "PIYUSH CHAUHAN",
        "motherName": "MOHINI CHAUHAN",
        "fatherMobile": "8077794032",
        "motherMobile": "9528626183",
        "fatherPhone": "8077794032",
        "motherPhone": "9528626183",
        "address": "LOHGARH, ATRAULI",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "Select Social Category",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 83,
        "percentage": 94.3
    },
    "feeSummary": {
        "tuitionDue": 14500,
        "transportDue11Months": 5500,
        "totalDue": 20000,
        "totalPaid": 9000,
        "balance": 11000
    },
    "transport": {
        "stoppage": "LOHGARH",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 2"
    },
    "linkedSiblingIds": [
        "STU-2026-201"
    ],
    "familyId": "FAM-0219"
},
{
    "id": "STU-2026-224",
    "sqlId": "224",
    "admissionNo": "393",
    "rollNo": "170",
    "name": "BHESAJ KUMAR",
    "photo": "a932871d4a824a83bfaf1c86f6053e74.jpg",
    "dob": "2018-02-06",
    "gender": "Male",
    "class": "III",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "AVNESH KUMAR",
        "motherName": "ANOJ DEVI",
        "fatherMobile": "9761083561",
        "motherMobile": "9761083561",
        "fatherPhone": "9761083561",
        "motherPhone": "9761083561",
        "address": "BAIJALA, ATRAULI (ALIGARH)",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 84,
        "percentage": 95.5
    },
    "feeSummary": {
        "tuitionDue": 14500,
        "transportDue11Months": 5500,
        "totalDue": 20000,
        "totalPaid": 3000,
        "balance": 17000
    },
    "transport": {
        "stoppage": "BAIJALA",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 1"
    },
    "linkedSiblingIds": [
        "STU-2026-303"
    ],
    "familyId": "FAM-0220"
},
{
    "id": "STU-2026-225",
    "sqlId": "225",
    "admissionNo": "394",
    "rollNo": "172",
    "name": "DEEPAK KUMAR",
    "photo": "6e6b9ef1dacb8b3c496da3ebd600bb96.jpg",
    "dob": "2016-01-25",
    "gender": "Male",
    "class": "III",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "SATISH KUMAR",
        "motherName": "MAMTA DEVI",
        "fatherMobile": "9811700109",
        "motherMobile": "9811700109",
        "fatherPhone": "9811700109",
        "motherPhone": "9811700109",
        "address": "SILHARI (BULANDSHAHR)",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "AHEER",
        "religion": "HINDU"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 85,
        "percentage": 96.6
    },
    "feeSummary": {
        "tuitionDue": 14500,
        "transportDue11Months": 5500,
        "totalDue": 20000,
        "totalPaid": 17000,
        "balance": 3000
    },
    "transport": {
        "stoppage": "SILHARI (BULANDSHAHR)",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 3"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0221"
},
{
    "id": "STU-2026-226",
    "sqlId": "226",
    "admissionNo": "396",
    "rollNo": "173",
    "name": "DIPANSHU YADAV",
    "photo": "3ef206fb9aaa1e70b7794d95ad11ad85.jpg",
    "dob": "2014-12-25",
    "gender": "Male",
    "class": "III",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "OMPAL YADAV",
        "motherName": "NEELAM YADAV",
        "fatherMobile": "9193083211",
        "motherMobile": "7838984933",
        "fatherPhone": "9193083211",
        "motherPhone": "7838984933",
        "address": "UNCHA GAON BANGAR RAMGHAT",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 86,
        "percentage": 97.7
    },
    "feeSummary": {
        "tuitionDue": 14500,
        "transportDue11Months": 5500,
        "totalDue": 20000,
        "totalPaid": 9000,
        "balance": 11000
    },
    "transport": {
        "stoppage": "UNCHA GAON BANGAR RAMGHAT",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 5"
    },
    "linkedSiblingIds": [
        "STU-2026-277"
    ],
    "familyId": "FAM-0222"
},
{
    "id": "STU-2026-227",
    "sqlId": "227",
    "admissionNo": "397",
    "rollNo": "174",
    "name": "DIVYANSH RAJPUT",
    "photo": "fb528b1bd6dd008f7cca0658949ee7f7.jpg",
    "dob": "2016-10-15",
    "gender": "Male",
    "class": "III",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "UMESH BABU",
        "motherName": "SHAKUNTALA VERMA",
        "fatherMobile": "9759009379",
        "motherMobile": "9759009379",
        "fatherPhone": "9759009379",
        "motherPhone": "9759009379",
        "address": "GANESHPUR GOVINDPUR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 87,
        "percentage": 98.9
    },
    "feeSummary": {
        "tuitionDue": 14500,
        "transportDue11Months": 5500,
        "totalDue": 20000,
        "totalPaid": 3000,
        "balance": 17000
    },
    "transport": {
        "stoppage": "GANESHPUR GOVINDPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 6"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0223"
},
{
    "id": "STU-2026-228",
    "sqlId": "228",
    "admissionNo": "398",
    "rollNo": "175",
    "name": "ESHAN YADAV",
    "photo": "0b82716e92d9afa8a1fed4dd5a911782.jpg",
    "dob": "2017-04-02",
    "gender": "Male",
    "class": "III",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "RINKU YADAV",
        "motherName": "SEEMA",
        "fatherMobile": "8006520172",
        "motherMobile": "8006520172",
        "fatherPhone": "8006520172",
        "motherPhone": "8006520172",
        "address": "SILHARI (BULANDSHAHR)",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 82,
        "percentage": 93.2
    },
    "feeSummary": {
        "tuitionDue": 14500,
        "transportDue11Months": 5500,
        "totalDue": 20000,
        "totalPaid": 17000,
        "balance": 3000
    },
    "transport": {
        "stoppage": "SILHARI (BULANDSHAHR)",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 3"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0224"
},
{
    "id": "STU-2026-229",
    "sqlId": "229",
    "admissionNo": "399",
    "rollNo": "0",
    "name": "GOURAV KUMAR",
    "photo": "885d27eee354acd17d91e7036b2c1c03.jpg",
    "dob": "2017-08-09",
    "gender": "Male",
    "class": "III",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "DHARMENDRA KUMAR",
        "motherName": "HITESH",
        "fatherMobile": "8273892191",
        "motherMobile": "8273892191",
        "fatherPhone": "8273892191",
        "motherPhone": "8273892191",
        "address": "NAGLA KOTHI, JARGWAN",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 83,
        "percentage": 94.3
    },
    "feeSummary": {
        "tuitionDue": 14500,
        "transportDue11Months": 5500,
        "totalDue": 20000,
        "totalPaid": 9000,
        "balance": 11000
    },
    "transport": {
        "stoppage": "NAGLA KOTHI",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-047"
    ],
    "familyId": "FAM-0225"
},
{
    "id": "STU-2026-230",
    "sqlId": "230",
    "admissionNo": "400",
    "rollNo": "0",
    "name": "GUNJAN RAJPUT",
    "photo": "d9346ed8110a01dde5ef748d1911f211.jpg",
    "dob": "2018-04-08",
    "gender": "Male",
    "class": "III",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "JITENDRA KUMAR",
        "motherName": "SHALINI",
        "fatherMobile": "8433255571",
        "motherMobile": "8433255571",
        "fatherPhone": "8433255571",
        "motherPhone": "8433255571",
        "address": "NAGLA KOTHI, JARGWAN",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 84,
        "percentage": 95.5
    },
    "feeSummary": {
        "tuitionDue": 14500,
        "transportDue11Months": 5500,
        "totalDue": 20000,
        "totalPaid": 3000,
        "balance": 17000
    },
    "transport": {
        "stoppage": "NAGLA KOTHI",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0226"
},
{
    "id": "STU-2026-232",
    "sqlId": "232",
    "admissionNo": "402",
    "rollNo": "91",
    "name": "HARSH KUMAR",
    "photo": "938e57373f19545443d950aaffbce01e.jpg",
    "dob": "2015-12-27",
    "gender": "Male",
    "class": "III",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "BHURE SINGH",
        "motherName": "SUMAN DEVI",
        "fatherMobile": "9719017603",
        "motherMobile": "9719017603",
        "fatherPhone": "9719017603",
        "motherPhone": "9719017603",
        "address": "SILHARI (BULANDSHAHR)",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 85,
        "percentage": 96.6
    },
    "feeSummary": {
        "tuitionDue": 14500,
        "transportDue11Months": 5500,
        "totalDue": 20000,
        "totalPaid": 17000,
        "balance": 3000
    },
    "transport": {
        "stoppage": "SILHARI (BULANDSHAHR)",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 3"
    },
    "linkedSiblingIds": [
        "STU-2026-151"
    ],
    "familyId": "FAM-0149"
},
{
    "id": "STU-2026-234",
    "sqlId": "234",
    "admissionNo": "404",
    "rollNo": "176",
    "name": "HIMANSHU KUMAR",
    "photo": "06317a80eed7e3b6f6316f37cd4dedbd.jpg",
    "dob": "2013-02-01",
    "gender": "Male",
    "class": "III",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "VIJAYPAL SINGH",
        "motherName": "KAMLESH DEVI",
        "fatherMobile": "9675320274",
        "motherMobile": "9058877250",
        "fatherPhone": "9675320274",
        "motherPhone": "9058877250",
        "address": "VILLAGE BAJHERA POST DHARAKPUR DISTRCT BULANDSHAHR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 86,
        "percentage": 97.7
    },
    "feeSummary": {
        "tuitionDue": 14500,
        "transportDue11Months": 5500,
        "totalDue": 20000,
        "totalPaid": 9000,
        "balance": 11000
    },
    "transport": {
        "stoppage": "VILLAGE BAJHERA POST DHARAKPUR DISTRCT BULANDSHAHR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0230"
},
{
    "id": "STU-2026-235",
    "sqlId": "235",
    "admissionNo": "405",
    "rollNo": "178",
    "name": "JEETESH KUMAR",
    "photo": "6b09f70d84a5c63ff4c433f3df382043.jpg",
    "dob": "2016-10-10",
    "gender": "Male",
    "class": "III",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "SANJAY KUMAR",
        "motherName": "NIRMALA DEVI",
        "fatherMobile": "9720096132",
        "motherMobile": "9720096132",
        "fatherPhone": "9720096132",
        "motherPhone": "9720096132",
        "address": "NAGLA GARVI, JARGWAN",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 87,
        "percentage": 98.9
    },
    "feeSummary": {
        "tuitionDue": 14500,
        "transportDue11Months": 5500,
        "totalDue": 20000,
        "totalPaid": 3000,
        "balance": 17000
    },
    "transport": {
        "stoppage": "NAGLA GARVI",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-089"
    ],
    "familyId": "FAM-0231"
},
{
    "id": "STU-2026-236",
    "sqlId": "236",
    "admissionNo": "407",
    "rollNo": "180",
    "name": "KESHAV KUMAR",
    "photo": "718db06826dfde7099570784a8f345fe.jpg",
    "dob": "2015-09-14",
    "gender": "Male",
    "class": "III",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "DEVESH KUMAR",
        "motherName": "SANGEETA DEVI",
        "fatherMobile": "9758977960",
        "motherMobile": "9758977960",
        "fatherPhone": "9758977960",
        "motherPhone": "9758977960",
        "address": "KANAKPUR, LOHGARH, ALIGARH",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 82,
        "percentage": 93.2
    },
    "feeSummary": {
        "tuitionDue": 14500,
        "transportDue11Months": 5500,
        "totalDue": 20000,
        "totalPaid": 17000,
        "balance": 3000
    },
    "transport": {
        "stoppage": "KANAKPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-237"
    ],
    "familyId": "FAM-0232"
},
{
    "id": "STU-2026-237",
    "sqlId": "237",
    "admissionNo": "408",
    "rollNo": "180",
    "name": "KIRTI",
    "photo": "fc5e33a6c0bdd28975daa5a462ff2326.jpg",
    "dob": "2015-11-14",
    "gender": "Female",
    "class": "III",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "DEVESH KUMAR",
        "motherName": "SANGEETA DEVI",
        "fatherMobile": "7310867491",
        "motherMobile": "9758977960",
        "fatherPhone": "7310867491",
        "motherPhone": "9758977960",
        "address": "KANAKPUR, LOHGARH, ALIGARH",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 83,
        "percentage": 94.3
    },
    "feeSummary": {
        "tuitionDue": 14500,
        "transportDue11Months": 5500,
        "totalDue": 20000,
        "totalPaid": 9000,
        "balance": 11000
    },
    "transport": {
        "stoppage": "KANAKPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-236"
    ],
    "familyId": "FAM-0068"
},
{
    "id": "STU-2026-239",
    "sqlId": "239",
    "admissionNo": "410",
    "rollNo": "182",
    "name": "LOVEKUSH",
    "photo": "f845bdba123f18a7c3a20f68a3dea7f5.jpg",
    "dob": "2018-12-20",
    "gender": "Male",
    "class": "III",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "SATYAVEER SINGH",
        "motherName": "GIRJESH",
        "fatherMobile": "8006319945",
        "motherMobile": "8006319945",
        "fatherPhone": "8006319945",
        "motherPhone": "8006319945",
        "address": "UNCHA GAON BULADSHAHR)",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 84,
        "percentage": 95.5
    },
    "feeSummary": {
        "tuitionDue": 14500,
        "transportDue11Months": 5500,
        "totalDue": 20000,
        "totalPaid": 3000,
        "balance": 17000
    },
    "transport": {
        "stoppage": "UNCHA GAON BULADSHAHR)",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 5"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0235"
},
{
    "id": "STU-2026-240",
    "sqlId": "240",
    "admissionNo": "411",
    "rollNo": "95",
    "name": "MADHAV KUMAR",
    "photo": "101aa4a21b1e5084fcda7f75d8c788bc.jpg",
    "dob": "2013-12-05",
    "gender": "Male",
    "class": "III",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "BRAJESH KUMAR",
        "motherName": "MANJU DEVI",
        "fatherMobile": "9758975880",
        "motherMobile": "9758975880",
        "fatherPhone": "9758975880",
        "motherPhone": "9758975880",
        "address": "NAGLA CHIRAURI",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 85,
        "percentage": 96.6
    },
    "feeSummary": {
        "tuitionDue": 14500,
        "transportDue11Months": 5500,
        "totalDue": 20000,
        "totalPaid": 17000,
        "balance": 3000
    },
    "transport": {
        "stoppage": "NAGLA CHIRAURI",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-125"
    ],
    "familyId": "FAM-0236"
},
{
    "id": "STU-2026-241",
    "sqlId": "241",
    "admissionNo": "412",
    "rollNo": "114",
    "name": "MANJESH KUMAR",
    "photo": "dce76b2a62e62fa1f2228ea224b78ccd.jpg",
    "dob": "2014-01-01",
    "gender": "Male",
    "class": "V",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "SOORAJPAL SINGH",
        "motherName": "GYAN DEVI",
        "fatherMobile": "8860742634",
        "motherMobile": "8860742634",
        "fatherPhone": "8860742634",
        "motherPhone": "8860742634",
        "address": "UNCHAGAWN BANGAR (BULANDSHAHR)",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 86,
        "percentage": 97.7
    },
    "feeSummary": {
        "tuitionDue": 15500,
        "transportDue11Months": 5500,
        "totalDue": 21000,
        "totalPaid": 9450,
        "balance": 11550
    },
    "transport": {
        "stoppage": "UNCHAGAWN BANGAR (BULANDSHAHR)",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0237"
},
{
    "id": "STU-2026-242",
    "sqlId": "242",
    "admissionNo": "413",
    "rollNo": "183",
    "name": "MANYA TOMAR",
    "photo": "7da337d3fb8cc30a75c59a8c8e527008.jpg",
    "dob": "2019-03-20",
    "gender": "Male",
    "class": "III",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "RAJU TOMAR",
        "motherName": "PRITI TOMAR",
        "fatherMobile": "9761878883",
        "motherMobile": "9761878883",
        "fatherPhone": "9761878883",
        "motherPhone": "9761878883",
        "address": "MUHAMMADPUR BADHERA, ATROULI ALIGARH",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "Select Social Category",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 87,
        "percentage": 98.9
    },
    "feeSummary": {
        "tuitionDue": 14500,
        "transportDue11Months": 5500,
        "totalDue": 20000,
        "totalPaid": 3000,
        "balance": 17000
    },
    "transport": {
        "stoppage": "MUHAMMADPUR BADHERA",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0238"
},
{
    "id": "STU-2026-243",
    "sqlId": "243",
    "admissionNo": "414",
    "rollNo": "1",
    "name": "MAYANK KUMAR",
    "photo": "fe1d3a7ef6b834c879224de4326e088c.jpg",
    "dob": "2015-08-15",
    "gender": "Male",
    "class": "III",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "KRIPAL SINGH",
        "motherName": "SAPANA DEVI",
        "fatherMobile": "8882436584",
        "motherMobile": "8882436584",
        "fatherPhone": "8882436584",
        "motherPhone": "8882436584",
        "address": "NAGLA GARVI, JARGWAN (BULANDSHAHR)",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 82,
        "percentage": 93.2
    },
    "feeSummary": {
        "tuitionDue": 14500,
        "transportDue11Months": 5500,
        "totalDue": 20000,
        "totalPaid": 17000,
        "balance": 3000
    },
    "transport": {
        "stoppage": "NAGLA GARVI",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 1"
    },
    "linkedSiblingIds": [
        "STU-2026-423"
    ],
    "familyId": "FAM-0239"
},
{
    "id": "STU-2026-244",
    "sqlId": "244",
    "admissionNo": "415",
    "rollNo": "0",
    "name": "MOHINI",
    "photo": "3d3a653aa94652dc4a45768e7498a620.jpg",
    "dob": "2016-07-09",
    "gender": "Male",
    "class": "III",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "TEJVEER SINGH",
        "motherName": "RACHNA DEVI",
        "fatherMobile": "9719204696",
        "motherMobile": "9719204696",
        "fatherPhone": "9719204696",
        "motherPhone": "9719204696",
        "address": "GADAIPUR, KASIMPUR GADAIPUR, KAZIMABAD, ALIGARH",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 83,
        "percentage": 94.3
    },
    "feeSummary": {
        "tuitionDue": 14500,
        "transportDue11Months": 5500,
        "totalDue": 20000,
        "totalPaid": 9000,
        "balance": 11000
    },
    "transport": {
        "stoppage": "GADAIPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-308",
        "STU-2026-343"
    ],
    "familyId": "FAM-0240"
},
{
    "id": "STU-2026-245",
    "sqlId": "245",
    "admissionNo": "418",
    "rollNo": "4",
    "name": "PARIDHI AGARWAL",
    "photo": "e7565e15152e16a32927f1967641ee67.jpg",
    "dob": "2017-01-09",
    "gender": "Female",
    "class": "III",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "YOGENDRA KUMAR",
        "motherName": "DEEPIKA AGARWAL",
        "fatherMobile": "9719420281",
        "motherMobile": "9719420281",
        "fatherPhone": "9719420281",
        "motherPhone": "9719420281",
        "address": "JARGWAN ,",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "GEN",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 84,
        "percentage": 95.5
    },
    "feeSummary": {
        "tuitionDue": 14500,
        "transportDue11Months": 5500,
        "totalDue": 20000,
        "totalPaid": 3000,
        "balance": 17000
    },
    "transport": {
        "stoppage": "JARGWAN",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-031"
    ],
    "familyId": "FAM-0241"
},
{
    "id": "STU-2026-246",
    "sqlId": "246",
    "admissionNo": "419",
    "rollNo": "161",
    "name": "PEEYUSH KUMAR",
    "photo": "a57bfb2013864c1f52f567fb04709de8.jpg",
    "dob": "2019-10-07",
    "gender": "Male",
    "class": "III",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "HARIKESH KUMAR",
        "motherName": "HEMLATA DEVI",
        "fatherMobile": "9643311163",
        "motherMobile": "9643311163",
        "fatherPhone": "9643311163",
        "motherPhone": "9643311163",
        "address": "KALIYANPUR BHAGIRATHPUR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 85,
        "percentage": 96.6
    },
    "feeSummary": {
        "tuitionDue": 14500,
        "transportDue11Months": 5500,
        "totalDue": 20000,
        "totalPaid": 17000,
        "balance": 3000
    },
    "transport": {
        "stoppage": "KALIYANPUR BHAGIRATHPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 2"
    },
    "linkedSiblingIds": [
        "STU-2026-212"
    ],
    "familyId": "FAM-0208"
},
{
    "id": "STU-2026-247",
    "sqlId": "247",
    "admissionNo": "420",
    "rollNo": "64",
    "name": "PRACHI",
    "photo": "57aef17ca51521b1abed37a4453df163.jpg",
    "dob": "2014-05-13",
    "gender": "Female",
    "class": "III",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "SHIV KUMAR",
        "motherName": "REENA DEVI",
        "fatherMobile": "8700327645",
        "motherMobile": "8700327645",
        "fatherPhone": "8700327645",
        "motherPhone": "8700327645",
        "address": "CHIRAURI",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "AHEER",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 86,
        "percentage": 97.7
    },
    "feeSummary": {
        "tuitionDue": 14500,
        "transportDue11Months": 5500,
        "totalDue": 20000,
        "totalPaid": 9000,
        "balance": 11000
    },
    "transport": {
        "stoppage": "CHIRAURI",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 4"
    },
    "linkedSiblingIds": [
        "STU-2026-092"
    ],
    "familyId": "FAM-0243"
},
{
    "id": "STU-2026-248",
    "sqlId": "248",
    "admissionNo": "421",
    "rollNo": "187",
    "name": "RAJAT KUMAR",
    "photo": "2ac17d474a12db3be019930d31c09afa.jpg",
    "dob": "2017-04-05",
    "gender": "Male",
    "class": "III",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "SANJAY KUMAR",
        "motherName": "SANJU DEVI",
        "fatherMobile": "9758975880",
        "motherMobile": "9758975880",
        "fatherPhone": "9758975880",
        "motherPhone": "9758975880",
        "address": "GANGAGARH, RAMGHAT",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 87,
        "percentage": 98.9
    },
    "feeSummary": {
        "tuitionDue": 14500,
        "transportDue11Months": 5500,
        "totalDue": 20000,
        "totalPaid": 3000,
        "balance": 17000
    },
    "transport": {
        "stoppage": "GANGAGARH",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 3"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0244"
},
{
    "id": "STU-2026-251",
    "sqlId": "251",
    "admissionNo": "424",
    "rollNo": "190",
    "name": "RITIK",
    "photo": "d4d462135508b6219d559b3beadad665.jpg",
    "dob": "2016-12-09",
    "gender": "Male",
    "class": "III",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "VIRESH KUMAR",
        "motherName": "RANJANA",
        "fatherMobile": "9675884056",
        "motherMobile": "9675884056",
        "fatherPhone": "9675884056",
        "motherPhone": "9675884056",
        "address": "MOUNIPURA URF RAMVAS BULANDSHAHR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 82,
        "percentage": 93.2
    },
    "feeSummary": {
        "tuitionDue": 14500,
        "transportDue11Months": 5500,
        "totalDue": 20000,
        "totalPaid": 17000,
        "balance": 3000
    },
    "transport": {
        "stoppage": "MOUNIPURA URF RAMVAS BULANDSHAHR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 3"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0247"
},
{
    "id": "STU-2026-252",
    "sqlId": "252",
    "admissionNo": "425",
    "rollNo": "0",
    "name": "ROHIT KUMAR",
    "photo": "e9a0ca20f436b402ba14640d1f9920e9.jpg",
    "dob": "2014-01-03",
    "gender": "Male",
    "class": "IV",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "BHOORE SINGH",
        "motherName": "ASHA DEVI",
        "fatherMobile": "9568476692",
        "motherMobile": "9568476692",
        "fatherPhone": "9568476692",
        "motherPhone": "9568476692",
        "address": "UNCHA GAWN BANGAR BULANDSHAHR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "AHEER",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 83,
        "percentage": 94.3
    },
    "feeSummary": {
        "tuitionDue": 15000,
        "transportDue11Months": 5500,
        "totalDue": 20500,
        "totalPaid": 9225,
        "balance": 11275
    },
    "transport": {
        "stoppage": "UNCHA GAWN BANGAR BULANDSHAHR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 5"
    },
    "linkedSiblingIds": [
        "STU-2026-196"
    ],
    "familyId": "FAM-0192"
},
{
    "id": "STU-2026-254",
    "sqlId": "254",
    "admissionNo": "428",
    "rollNo": "97",
    "name": "SANSKAR YADAV",
    "photo": "c41450be4df6bbb369bbd32a4fc33b54.jpg",
    "dob": "2018-06-25",
    "gender": "Male",
    "class": "III",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "RAJESH KUMAR",
        "motherName": "PINKY DEVI",
        "fatherMobile": "8433499094",
        "motherMobile": "8433499094",
        "fatherPhone": "8433499094",
        "motherPhone": "8433499094",
        "address": "JARGWAN, BULANDSHAHAR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 84,
        "percentage": 95.5
    },
    "feeSummary": {
        "tuitionDue": 14500,
        "transportDue11Months": 5500,
        "totalDue": 20000,
        "totalPaid": 3000,
        "balance": 17000
    },
    "transport": {
        "stoppage": "JARGWAN",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 3"
    },
    "linkedSiblingIds": [
        "STU-2026-127"
    ],
    "familyId": "FAM-0249"
},
{
    "id": "STU-2026-255",
    "sqlId": "255",
    "admissionNo": "430",
    "rollNo": "161",
    "name": "SHIVANI KUSHWAHA",
    "photo": "b38464cd4dd490c4df5414e0a7deacf4.jpg",
    "dob": "2016-12-15",
    "gender": "Female",
    "class": "IV",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "TEJPAL SINGH",
        "motherName": "SUMAN DEVI",
        "fatherMobile": "9027352955",
        "motherMobile": "9027352955",
        "fatherPhone": "9027352955",
        "motherPhone": "9027352955",
        "address": "BAINI NAGLA UNCHAGAON DIBAI BULANDSHAHR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 85,
        "percentage": 96.6
    },
    "feeSummary": {
        "tuitionDue": 15000,
        "transportDue11Months": 5500,
        "totalDue": 20500,
        "totalPaid": 17425,
        "balance": 3075
    },
    "transport": {
        "stoppage": "BAINI NAGLA UNCHAGAON DIBAI BULANDSHAHR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 5"
    },
    "linkedSiblingIds": [
        "STU-2026-285"
    ],
    "familyId": "FAM-0250"
},
{
    "id": "STU-2026-256",
    "sqlId": "256",
    "admissionNo": "431",
    "rollNo": "132",
    "name": "SONU",
    "photo": "83d6d2efa1ddc53ee549e222ad7ebc96.jpg",
    "dob": "2011-12-30",
    "gender": "Male",
    "class": "V",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "RAM RAHEESH",
        "motherName": "SUNITA DEVI",
        "fatherMobile": "9675174620",
        "motherMobile": "9675174620",
        "fatherPhone": "9675174620",
        "motherPhone": "9675174620",
        "address": "MOUNIPURA RAMVAS(BULANDSHAHR)",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 86,
        "percentage": 97.7
    },
    "feeSummary": {
        "tuitionDue": 15500,
        "transportDue11Months": 5500,
        "totalDue": 21000,
        "totalPaid": 9450,
        "balance": 11550
    },
    "transport": {
        "stoppage": "MOUNIPURA RAMVAS(BULANDSHAHR)",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0251"
},
{
    "id": "STU-2026-257",
    "sqlId": "257",
    "admissionNo": "432",
    "rollNo": "192",
    "name": "SOURAV KUMAR",
    "photo": "59eed8999156be3bc119442778ec6b7e.jpg",
    "dob": "2017-11-03",
    "gender": "Male",
    "class": "III",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "MAHESHPAL",
        "motherName": "NEERAJ DEVI",
        "fatherMobile": "9758509524",
        "motherMobile": "9758509524",
        "fatherPhone": "9758509524",
        "motherPhone": "9758509524",
        "address": "GANGA GARH, RAMGHAT",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 87,
        "percentage": 98.9
    },
    "feeSummary": {
        "tuitionDue": 14500,
        "transportDue11Months": 5500,
        "totalDue": 20000,
        "totalPaid": 3000,
        "balance": 17000
    },
    "transport": {
        "stoppage": "GANGA GARH",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 3"
    },
    "linkedSiblingIds": [
        "STU-2026-447",
        "STU-2026-438"
    ],
    "familyId": "FAM-0252"
},
{
    "id": "STU-2026-258",
    "sqlId": "258",
    "admissionNo": "433",
    "rollNo": "191",
    "name": "SHAURYA CHAUDHARY",
    "photo": "09170bb02ee4a373555ec39a1d1d6dcd.jpg",
    "dob": "2019-01-14",
    "gender": "Male",
    "class": "III",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "MANOJ KUMAR",
        "motherName": "BHAVANA",
        "fatherMobile": "9761825084",
        "motherMobile": "9761825084",
        "fatherPhone": "9761825084",
        "motherPhone": "9761825084",
        "address": "GAHTAULI NIRMAL",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 82,
        "percentage": 93.2
    },
    "feeSummary": {
        "tuitionDue": 14500,
        "transportDue11Months": 5500,
        "totalDue": 20000,
        "totalPaid": 17000,
        "balance": 3000
    },
    "transport": {
        "stoppage": "GAHTAULI NIRMAL",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 2"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0253"
},
{
    "id": "STU-2026-259",
    "sqlId": "259",
    "admissionNo": "434",
    "rollNo": "66",
    "name": "SUMIT",
    "photo": "8aa5dd01ac2d4b7fac33a8205a10b5ed.jpg",
    "dob": "2016-05-05",
    "gender": "Male",
    "class": "III",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "JANGVEER SINGH",
        "motherName": "ROOPVATI DEVI",
        "fatherMobile": "9675863965",
        "motherMobile": "9675863965",
        "fatherPhone": "9675863965",
        "motherPhone": "9675863965",
        "address": "KALIYANPUR BHAGIRATHPUR ATRAULI ALIGARH",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 83,
        "percentage": 94.3
    },
    "feeSummary": {
        "tuitionDue": 14500,
        "transportDue11Months": 5500,
        "totalDue": 20000,
        "totalPaid": 9000,
        "balance": 11000
    },
    "transport": {
        "stoppage": "KALIYANPUR BHAGIRATHPUR ATRAULI ALIGARH",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-095",
        "STU-2026-107"
    ],
    "familyId": "FAM-0093"
},
{
    "id": "STU-2026-260",
    "sqlId": "260",
    "admissionNo": "435",
    "rollNo": "17",
    "name": "TANISHK KAUSHIK",
    "photo": "11a8b8f9f5905c5276c72021768e2208.jpg",
    "dob": "2019-03-17",
    "gender": "Male",
    "class": "III",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "GAURAV KAUSHIK",
        "motherName": "AARTI KAUSHIK",
        "fatherMobile": "9761012796",
        "motherMobile": "9761012796",
        "fatherPhone": "9761012796",
        "motherPhone": "9761012796",
        "address": "BAGI NAGLA , RAMGHAT",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "Select Social Category",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 84,
        "percentage": 95.5
    },
    "feeSummary": {
        "tuitionDue": 14500,
        "transportDue11Months": 5500,
        "totalDue": 20000,
        "totalPaid": 3000,
        "balance": 17000
    },
    "transport": {
        "stoppage": "BAGI NAGLA",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 4"
    },
    "linkedSiblingIds": [
        "STU-2026-056"
    ],
    "familyId": "FAM-0254"
},
{
    "id": "STU-2026-261",
    "sqlId": "261",
    "admissionNo": "436",
    "rollNo": "158",
    "name": "TANISHK KUMAR",
    "photo": "fda57f09838d38dc7470a93d3eb8f218.jpg",
    "dob": "2016-07-27",
    "gender": "Male",
    "class": "III",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "SANTOSH KUMAR",
        "motherName": "JYOTI DEVI",
        "fatherMobile": "9759131285",
        "motherMobile": "9759131285 , 8218794196",
        "fatherPhone": "9759131285",
        "motherPhone": "9759131285 , 8218794196",
        "address": "KUDHAINI, CHROURI",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 85,
        "percentage": 96.6
    },
    "feeSummary": {
        "tuitionDue": 14500,
        "transportDue11Months": 5500,
        "totalDue": 20000,
        "totalPaid": 17000,
        "balance": 3000
    },
    "transport": {
        "stoppage": "KUDHAINI",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 4"
    },
    "linkedSiblingIds": [
        "STU-2026-210"
    ],
    "familyId": "FAM-0206"
},
{
    "id": "STU-2026-262",
    "sqlId": "262",
    "admissionNo": "437",
    "rollNo": "154",
    "name": "VANDANA",
    "photo": "54379a8a768bcb5d3a290f06ecc6231b.jpg",
    "dob": "2016-04-21",
    "gender": "Male",
    "class": "III",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "SATISH KUMAR",
        "motherName": "SUMAN DEVI",
        "fatherMobile": "9627265417",
        "motherMobile": "9627265417",
        "fatherPhone": "9627265417",
        "motherPhone": "9627265417",
        "address": "BAGI NAGLA, CHIROURI",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "General",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 86,
        "percentage": 97.7
    },
    "feeSummary": {
        "tuitionDue": 14500,
        "transportDue11Months": 5500,
        "totalDue": 20000,
        "totalPaid": 9000,
        "balance": 11000
    },
    "transport": {
        "stoppage": "BAGI NAGLA",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 4"
    },
    "linkedSiblingIds": [
        "STU-2026-204",
        "STU-2026-306"
    ],
    "familyId": "FAM-0200"
},
{
    "id": "STU-2026-263",
    "sqlId": "263",
    "admissionNo": "438",
    "rollNo": "194",
    "name": "VANDANI",
    "photo": "2ca5d5297f6b1acf40844901a7e13982.jpg",
    "dob": "2016-08-02",
    "gender": "Female",
    "class": "III",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "YOGENDRA KUMAR",
        "motherName": "LALVATI",
        "fatherMobile": "9958880327",
        "motherMobile": "9958880327",
        "fatherPhone": "9958880327",
        "motherPhone": "9958880327",
        "address": "NAGLA GARVI, JARGWAN",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "Aheer",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 87,
        "percentage": 98.9
    },
    "feeSummary": {
        "tuitionDue": 14500,
        "transportDue11Months": 5500,
        "totalDue": 20000,
        "totalPaid": 3000,
        "balance": 17000
    },
    "transport": {
        "stoppage": "NAGLA GARVI",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 1"
    },
    "linkedSiblingIds": [
        "STU-2026-292"
    ],
    "familyId": "FAM-0256"
},
{
    "id": "STU-2026-264",
    "sqlId": "264",
    "admissionNo": "439",
    "rollNo": "195",
    "name": "VANSH SHARMA",
    "photo": "7b038bdcdc635d31564b81f5fa9d4e91.jpg",
    "dob": "2017-02-07",
    "gender": "Male",
    "class": "III",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "ATUL KUMAR",
        "motherName": "KANCHAN",
        "fatherMobile": "8375939398",
        "motherMobile": "8375939398",
        "fatherPhone": "8375939398",
        "motherPhone": "8375939398",
        "address": "MUHAMMADPUR BADHERA",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "Select Social Category",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 82,
        "percentage": 93.2
    },
    "feeSummary": {
        "tuitionDue": 14500,
        "transportDue11Months": 5500,
        "totalDue": 20000,
        "totalPaid": 17000,
        "balance": 3000
    },
    "transport": {
        "stoppage": "MUHAMMADPUR BADHERA",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-431"
    ],
    "familyId": "FAM-0257"
},
{
    "id": "STU-2026-265",
    "sqlId": "265",
    "admissionNo": "440",
    "rollNo": "128",
    "name": "VISHAL KUMAR",
    "photo": "eb8b962c01b948a04c10417bb5f76c90.jpg",
    "dob": "2017-09-17",
    "gender": "Male",
    "class": "III",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "ANITPAL SINGH",
        "motherName": "PREMLATA DEVI",
        "fatherMobile": "9149237488",
        "motherMobile": "9149237488",
        "fatherPhone": "9149237488",
        "motherPhone": "9149237488",
        "address": "CHAINDAULA, SUJANPUR, ATRAULI (ALIGARH)",
        "occupation": "SERVICE",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 83,
        "percentage": 94.3
    },
    "feeSummary": {
        "tuitionDue": 14500,
        "transportDue11Months": 5500,
        "totalDue": 20000,
        "totalPaid": 9000,
        "balance": 11000
    },
    "transport": {
        "stoppage": "CHAINDAULA",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-158"
    ],
    "familyId": "FAM-0156"
},
{
    "id": "STU-2026-266",
    "sqlId": "266",
    "admissionNo": "443",
    "rollNo": "22",
    "name": "ANMOL YADAV",
    "photo": "93e611a0d3dfb950d3d7626251652810.jpg",
    "dob": "2017-05-16",
    "gender": "Male",
    "class": "II",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "RAJVEER SINGH",
        "motherName": "GAYATRI DEVI",
        "fatherMobile": "8077133265",
        "motherMobile": "9759755011",
        "fatherPhone": "8077133265",
        "motherPhone": "9759755011",
        "address": "BAIJALA KOTHI, ATROULI, ALIGARH",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 84,
        "percentage": 95.5
    },
    "feeSummary": {
        "tuitionDue": 14000,
        "transportDue11Months": 5500,
        "totalDue": 19500,
        "totalPaid": 2925,
        "balance": 16575
    },
    "transport": {
        "stoppage": "BAIJALA KOTHI",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-062"
    ],
    "familyId": "FAM-0061"
},
{
    "id": "STU-2026-267",
    "sqlId": "267",
    "admissionNo": "444",
    "rollNo": "199",
    "name": "ANSHU",
    "photo": "bab106b1db1b2601619738d3c30dd616.jpg",
    "dob": "2017-02-09",
    "gender": "Male",
    "class": "II",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "TILAK SINGH",
        "motherName": "RAJKUMARI DEVI",
        "fatherMobile": "7055247312",
        "motherMobile": "7055247312",
        "fatherPhone": "7055247312",
        "motherPhone": "7055247312",
        "address": "GANGAGARH BANGAR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 85,
        "percentage": 96.6
    },
    "feeSummary": {
        "tuitionDue": 14000,
        "transportDue11Months": 5500,
        "totalDue": 19500,
        "totalPaid": 16575,
        "balance": 2925
    },
    "transport": {
        "stoppage": "GANGAGARH BANGAR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 3"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0259"
},
{
    "id": "STU-2026-268",
    "sqlId": "268",
    "admissionNo": "448",
    "rollNo": "202",
    "name": "AYUSH TOMAR",
    "photo": "4b3107cd1372557dd7f38e6153dd00b9.jpg",
    "dob": "2019-10-28",
    "gender": "Male",
    "class": "II",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "MAHIPAL SINGH",
        "motherName": "AARTI DEVI",
        "fatherMobile": "8076898797",
        "motherMobile": "8076898797",
        "fatherPhone": "8076898797",
        "motherPhone": "8076898797",
        "address": "MUHAMMADPUR BADHERA LOHGARH",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "Select Social Category",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 86,
        "percentage": 97.7
    },
    "feeSummary": {
        "tuitionDue": 14000,
        "transportDue11Months": 5500,
        "totalDue": 19500,
        "totalPaid": 8775,
        "balance": 10725
    },
    "transport": {
        "stoppage": "MUHAMMADPUR BADHERA LOHGARH",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0260"
},
{
    "id": "STU-2026-269",
    "sqlId": "269",
    "admissionNo": "449",
    "rollNo": "171",
    "name": "CHANDANI",
    "photo": "99cb03d0319298768be437238e78d20b.jpg",
    "dob": "2017-04-16",
    "gender": "Male",
    "class": "III",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "SATENDRA SINGH",
        "motherName": "OMA DEVI",
        "fatherMobile": "7017071485",
        "motherMobile": "7017071485",
        "fatherPhone": "7017071485",
        "motherPhone": "7017071485",
        "address": "GANGAGARH",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 87,
        "percentage": 98.9
    },
    "feeSummary": {
        "tuitionDue": 14500,
        "transportDue11Months": 5500,
        "totalDue": 20000,
        "totalPaid": 3000,
        "balance": 17000
    },
    "transport": {
        "stoppage": "GANGAGARH",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 3"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0261"
},
{
    "id": "STU-2026-270",
    "sqlId": "270",
    "admissionNo": "450",
    "rollNo": "203",
    "name": "CHANDRAVEER",
    "photo": "86d64fcffba6799123116746ef205cf9.jpg",
    "dob": "2016-01-11",
    "gender": "Male",
    "class": "II",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "KAPTAN SINGH",
        "motherName": "SHANTI DEVI",
        "fatherMobile": "9193083211",
        "motherMobile": "7464958983",
        "fatherPhone": "9193083211",
        "motherPhone": "7464958983",
        "address": "UNCHA GAON, BANGAR (BULANDSHAHR)",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 82,
        "percentage": 93.2
    },
    "feeSummary": {
        "tuitionDue": 14000,
        "transportDue11Months": 5500,
        "totalDue": 19500,
        "totalPaid": 16575,
        "balance": 2925
    },
    "transport": {
        "stoppage": "UNCHA GAON",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 5"
    },
    "linkedSiblingIds": [
        "STU-2026-421"
    ],
    "familyId": "FAM-0262"
},
{
    "id": "STU-2026-271",
    "sqlId": "271",
    "admissionNo": "451",
    "rollNo": "204",
    "name": "DHAIRYA RAJPUT",
    "photo": "c5bfb398b9a9a9bf220805781dbfb318.jpg",
    "dob": "2018-11-12",
    "gender": "Male",
    "class": "II",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "DHARMENDRA KUMAR",
        "motherName": "MANJU VERMA",
        "fatherMobile": "9719680948",
        "motherMobile": "9719680948",
        "fatherPhone": "9719680948",
        "motherPhone": "9719680948",
        "address": "BAIJALA KOTHI",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 83,
        "percentage": 94.3
    },
    "feeSummary": {
        "tuitionDue": 14000,
        "transportDue11Months": 5500,
        "totalDue": 19500,
        "totalPaid": 8775,
        "balance": 10725
    },
    "transport": {
        "stoppage": "BAIJALA KOTHI",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 2"
    },
    "linkedSiblingIds": [
        "STU-2026-316"
    ],
    "familyId": "FAM-0263"
},
{
    "id": "STU-2026-272",
    "sqlId": "272",
    "admissionNo": "452",
    "rollNo": "26",
    "name": "DEEPANSHU KUMAR",
    "photo": "8180b37885eb08d2c0c14b399020b7a9.jpg",
    "dob": "2021-12-22",
    "gender": "Male",
    "class": "III",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "RAMESH KUMAR",
        "motherName": "GEETA DEVI",
        "fatherMobile": "9780410371",
        "motherMobile": "9780410371",
        "fatherPhone": "9780410371",
        "motherPhone": "9780410371",
        "address": "KALIYANPUR BHAGIRATHPUR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 84,
        "percentage": 95.5
    },
    "feeSummary": {
        "tuitionDue": 14500,
        "transportDue11Months": 5500,
        "totalDue": 20000,
        "totalPaid": 3000,
        "balance": 17000
    },
    "transport": {
        "stoppage": "KALIYANPUR BHAGIRATHPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0264"
},
{
    "id": "STU-2026-273",
    "sqlId": "273",
    "admissionNo": "454",
    "rollNo": "207",
    "name": "GOPAL KUMAR",
    "photo": "358ab62f75084e51e61991b74092e5a4.jpg",
    "dob": "2019-12-24",
    "gender": "Male",
    "class": "II",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "PAWAN KUMAR",
        "motherName": "RAJESHWARI DEVI",
        "fatherMobile": "9012424556",
        "motherMobile": "9012424556",
        "fatherPhone": "9012424556",
        "motherPhone": "9012424556",
        "address": "NAGLA DHARAKPUR DIBAI BULANDSHAHR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 85,
        "percentage": 96.6
    },
    "feeSummary": {
        "tuitionDue": 14000,
        "transportDue11Months": 5500,
        "totalDue": 19500,
        "totalPaid": 16575,
        "balance": 2925
    },
    "transport": {
        "stoppage": "NAGLA DHARAKPUR DIBAI BULANDSHAHR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 1"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0265"
},
{
    "id": "STU-2026-274",
    "sqlId": "274",
    "admissionNo": "456",
    "rollNo": "92",
    "name": "GUNJAN KUMAR",
    "photo": "649e16fe322e4414a78be6288eca7ad2.jpg",
    "dob": "2018-07-16",
    "gender": "Male",
    "class": "II",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "UDAYVEER SINGH",
        "motherName": "NEKASI DEVI",
        "fatherMobile": "9675320274",
        "motherMobile": "9675320274",
        "fatherPhone": "9675320274",
        "motherPhone": "9675320274",
        "address": "UNCHA GOAN DIBAI BULANDSHAHR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 86,
        "percentage": 97.7
    },
    "feeSummary": {
        "tuitionDue": 14000,
        "transportDue11Months": 5500,
        "totalDue": 19500,
        "totalPaid": 8775,
        "balance": 10725
    },
    "transport": {
        "stoppage": "UNCHA GOAN DIBAI BULANDSHAHR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-162"
    ],
    "familyId": "FAM-0266"
},
{
    "id": "STU-2026-277",
    "sqlId": "277",
    "admissionNo": "461",
    "rollNo": "173",
    "name": "HIMANSHU YADAV",
    "photo": "9a33f63f8733157f8fe9b408edcf7f79.jpg",
    "dob": "2018-03-03",
    "gender": "Male",
    "class": "II",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "OMPAL YADAV",
        "motherName": "NEELAM YADAV",
        "fatherMobile": "9193083211",
        "motherMobile": "7863984933",
        "fatherPhone": "9193083211",
        "motherPhone": "7863984933",
        "address": "UNCHA GAON BANGAR, RAMGHAT",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 87,
        "percentage": 98.9
    },
    "feeSummary": {
        "tuitionDue": 14000,
        "transportDue11Months": 5500,
        "totalDue": 19500,
        "totalPaid": 2925,
        "balance": 16575
    },
    "transport": {
        "stoppage": "UNCHA GAON BANGAR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 5"
    },
    "linkedSiblingIds": [
        "STU-2026-226"
    ],
    "familyId": "FAM-0222"
},
{
    "id": "STU-2026-279",
    "sqlId": "279",
    "admissionNo": "463",
    "rollNo": "0",
    "name": "ISHA",
    "photo": "923035297613609efa27745b86385ce2.jpg",
    "dob": "2016-09-03",
    "gender": "Male",
    "class": "IV",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "RAMGOPAL",
        "motherName": "RAJMALA",
        "fatherMobile": "7830261455",
        "motherMobile": "7830261455",
        "fatherPhone": "7830261455",
        "motherPhone": "7830261455",
        "address": "JARGWAN (BULANDSHAHR)",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 82,
        "percentage": 93.2
    },
    "feeSummary": {
        "tuitionDue": 15000,
        "transportDue11Months": 5500,
        "totalDue": 20500,
        "totalPaid": 17425,
        "balance": 3075
    },
    "transport": {
        "stoppage": "JARGWAN (BULANDSHAHR)",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 5"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0271"
},
{
    "id": "STU-2026-280",
    "sqlId": "280",
    "admissionNo": "464",
    "rollNo": "37",
    "name": "JAYANT VERMA",
    "photo": "ed9b25d991c7925b1cc2c05330568a59.jpg",
    "dob": "2019-12-11",
    "gender": "Male",
    "class": "II",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "YOGENDRA KUMAR",
        "motherName": "RAJNI",
        "fatherMobile": "9536073703",
        "motherMobile": "9536073703",
        "fatherPhone": "9536073703",
        "motherPhone": "9536073703",
        "address": "KHEDIYA BAHADURGARHI, ATRAULI ALIGARH",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 83,
        "percentage": 94.3
    },
    "feeSummary": {
        "tuitionDue": 14000,
        "transportDue11Months": 5500,
        "totalDue": 19500,
        "totalPaid": 8775,
        "balance": 10725
    },
    "transport": {
        "stoppage": "KHEDIYA BAHADURGARHI",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-048"
    ],
    "familyId": "FAM-0272"
},
{
    "id": "STU-2026-281",
    "sqlId": "281",
    "admissionNo": "465",
    "rollNo": "209",
    "name": "JYOTI",
    "photo": "b76ce37d11f05fb1d6935938463555d0.jpg",
    "dob": "2016-12-31",
    "gender": "Male",
    "class": "II",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "RAUDAS",
        "motherName": "VIDHYA DEVI",
        "fatherMobile": "8650371683",
        "motherMobile": "8650371683",
        "fatherPhone": "8650371683",
        "motherPhone": "8650371683",
        "address": "MOUNIPURA BULANDSHAHR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 84,
        "percentage": 95.5
    },
    "feeSummary": {
        "tuitionDue": 14000,
        "transportDue11Months": 5500,
        "totalDue": 19500,
        "totalPaid": 2925,
        "balance": 16575
    },
    "transport": {
        "stoppage": "MOUNIPURA BULANDSHAHR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 3"
    },
    "linkedSiblingIds": [
        "STU-2026-333"
    ],
    "familyId": "FAM-0273"
},
{
    "id": "STU-2026-282",
    "sqlId": "282",
    "admissionNo": "466",
    "rollNo": "109",
    "name": "KAMINI",
    "photo": "43d34c02fdef1b171ae2c3a406ca73fd.jpg",
    "dob": "2018-08-09",
    "gender": "Male",
    "class": "II",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "FOUJI",
        "motherName": "ROOPVATI DEVI",
        "fatherMobile": "9877350492",
        "motherMobile": "9877350492",
        "fatherPhone": "9877350492",
        "motherPhone": "9877350492",
        "address": "KALIYANPUR BHAGIRATHPUR ATRAULI ALIGARH",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 85,
        "percentage": 96.6
    },
    "feeSummary": {
        "tuitionDue": 14000,
        "transportDue11Months": 5500,
        "totalDue": 19500,
        "totalPaid": 16575,
        "balance": 2925
    },
    "transport": {
        "stoppage": "KALIYANPUR BHAGIRATHPUR ATRAULI ALIGARH",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 2"
    },
    "linkedSiblingIds": [
        "STU-2026-140"
    ],
    "familyId": "FAM-0274"
},
{
    "id": "STU-2026-283",
    "sqlId": "283",
    "admissionNo": "467",
    "rollNo": "212",
    "name": "KAVYA",
    "photo": "407e8992d9a5e6f895099f3bae262273.jpg",
    "dob": "2019-02-09",
    "gender": "Male",
    "class": "II",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "DHARVENDRA KUMAR",
        "motherName": "MADHURI",
        "fatherMobile": "9719022928",
        "motherMobile": "9719022928",
        "fatherPhone": "9719022928",
        "motherPhone": "9719022928",
        "address": "NAGLA DHARAKPUR, DHARAKPUR, DIBAI (BULANDSHAHR)",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 86,
        "percentage": 97.7
    },
    "feeSummary": {
        "tuitionDue": 14000,
        "transportDue11Months": 5500,
        "totalDue": 19500,
        "totalPaid": 8775,
        "balance": 10725
    },
    "transport": {
        "stoppage": "NAGLA DHARAKPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 1"
    },
    "linkedSiblingIds": [
        "STU-2026-462"
    ],
    "familyId": "FAM-0275"
},
{
    "id": "STU-2026-284",
    "sqlId": "284",
    "admissionNo": "468",
    "rollNo": "87",
    "name": "KRISHNA KUMAR",
    "photo": "57af20b439ed883b5acc5e3e18fa29de.jpg",
    "dob": "2018-10-12",
    "gender": "Male",
    "class": "II",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "LOKESH KUMAR",
        "motherName": "NEHA",
        "fatherMobile": "8630711835",
        "motherMobile": "8630711835",
        "fatherPhone": "8630711835",
        "motherPhone": "8630711835",
        "address": "LOHGARH ATRAULI",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "Select Social Category",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 87,
        "percentage": 98.9
    },
    "feeSummary": {
        "tuitionDue": 14000,
        "transportDue11Months": 5500,
        "totalDue": 19500,
        "totalPaid": 2925,
        "balance": 16575
    },
    "transport": {
        "stoppage": "LOHGARH ATRAULI",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 2"
    },
    "linkedSiblingIds": [
        "STU-2026-121"
    ],
    "familyId": "FAM-0119"
},
{
    "id": "STU-2026-285",
    "sqlId": "285",
    "admissionNo": "470",
    "rollNo": "161",
    "name": "KULDEEP KISHOR",
    "photo": "1589ed3c7406c36db2056fc15ce61250.jpg",
    "dob": "2017-10-20",
    "gender": "Male",
    "class": "II",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "TEJPAL SINGH",
        "motherName": "SUMAN DEVI",
        "fatherMobile": "9027352955",
        "motherMobile": "9027352955",
        "fatherPhone": "9027352955",
        "motherPhone": "9027352955",
        "address": "BAINI NAGLA UNCHAGAON DIBAI BULANDSHAHR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 82,
        "percentage": 93.2
    },
    "feeSummary": {
        "tuitionDue": 14000,
        "transportDue11Months": 5500,
        "totalDue": 19500,
        "totalPaid": 16575,
        "balance": 2925
    },
    "transport": {
        "stoppage": "BAINI NAGLA UNCHAGAON DIBAI BULANDSHAHR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 5"
    },
    "linkedSiblingIds": [
        "STU-2026-255"
    ],
    "familyId": "FAM-0250"
},
{
    "id": "STU-2026-289",
    "sqlId": "289",
    "admissionNo": "474",
    "rollNo": "169",
    "name": "MANISH KUMAR",
    "photo": "d43762a9df755d1e89ab20cc7cdf7669.jpg",
    "dob": "2019-01-07",
    "gender": "Male",
    "class": "II",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "RAMESH CHANDRA",
        "motherName": "RAJVATI DEVI",
        "fatherMobile": "8650648007",
        "motherMobile": "8126165339",
        "fatherPhone": "8650648007",
        "motherPhone": "8126165339",
        "address": "BAJHERA, DHARAKPUR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 83,
        "percentage": 94.3
    },
    "feeSummary": {
        "tuitionDue": 14000,
        "transportDue11Months": 5500,
        "totalDue": 19500,
        "totalPaid": 8775,
        "balance": 10725
    },
    "transport": {
        "stoppage": "BAJHERA",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 1"
    },
    "linkedSiblingIds": [
        "STU-2026-222"
    ],
    "familyId": "FAM-0218"
},
{
    "id": "STU-2026-290",
    "sqlId": "290",
    "admissionNo": "475",
    "rollNo": "215",
    "name": "NISHA",
    "photo": "1d891a1e005bf0128f22679e01151c35.jpg",
    "dob": "2018-12-20",
    "gender": "Male",
    "class": "II",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "REVADI",
        "motherName": "SONI",
        "fatherMobile": "9761768321",
        "motherMobile": "9761768321",
        "fatherPhone": "9761768321",
        "motherPhone": "9761768321",
        "address": "SILHARI RAMGHAT, BULANDSHAHR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 84,
        "percentage": 95.5
    },
    "feeSummary": {
        "tuitionDue": 14000,
        "transportDue11Months": 5500,
        "totalDue": 19500,
        "totalPaid": 2925,
        "balance": 16575
    },
    "transport": {
        "stoppage": "SILHARI RAMGHAT",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 3"
    },
    "linkedSiblingIds": [
        "STU-2026-335"
    ],
    "familyId": "FAM-0280"
},
{
    "id": "STU-2026-291",
    "sqlId": "291",
    "admissionNo": "476",
    "rollNo": "218",
    "name": "PAWAN",
    "photo": "f664ceadc6ab9e5443903b6ef6a41d3c.jpg",
    "dob": "2015-01-01",
    "gender": "Male",
    "class": "II",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "SATISH KUMAR",
        "motherName": "VIMLESH DEVI",
        "fatherMobile": "8476978719",
        "motherMobile": "8476978719",
        "fatherPhone": "8476978719",
        "motherPhone": "8476978719",
        "address": "KALIYANPURE BHAGIRATHPUR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 85,
        "percentage": 96.6
    },
    "feeSummary": {
        "tuitionDue": 14000,
        "transportDue11Months": 5500,
        "totalDue": 19500,
        "totalPaid": 16575,
        "balance": 2925
    },
    "transport": {
        "stoppage": "KALIYANPURE BHAGIRATHPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 2"
    },
    "linkedSiblingIds": [
        "STU-2026-310"
    ],
    "familyId": "FAM-0281"
},
{
    "id": "STU-2026-292",
    "sqlId": "292",
    "admissionNo": "477",
    "rollNo": "194",
    "name": "PUNEET KUMAR",
    "photo": "175a7cb03d8524142aa41c1dded5fa3d.jpg",
    "dob": "2017-07-01",
    "gender": "Male",
    "class": "II",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "YOGENDRA KUMAR",
        "motherName": "LALVATI",
        "fatherMobile": "9958880327",
        "motherMobile": "9958880327",
        "fatherPhone": "9958880327",
        "motherPhone": "9958880327",
        "address": "NAGLA GARVI JARGWAN",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 86,
        "percentage": 97.7
    },
    "feeSummary": {
        "tuitionDue": 14000,
        "transportDue11Months": 5500,
        "totalDue": 19500,
        "totalPaid": 8775,
        "balance": 10725
    },
    "transport": {
        "stoppage": "NAGLA GARVI JARGWAN",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 1"
    },
    "linkedSiblingIds": [
        "STU-2026-263"
    ],
    "familyId": "FAM-0256"
},
{
    "id": "STU-2026-293",
    "sqlId": "293",
    "admissionNo": "478",
    "rollNo": "45",
    "name": "RAJAT KUMAR",
    "photo": "7f5bb45a2ecc720056e4ac868a05cfd5.jpg",
    "dob": "2018-12-09",
    "gender": "Male",
    "class": "II",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "RAJU",
        "motherName": "KASHMIRA DEVI",
        "fatherMobile": "6395340434",
        "motherMobile": "6395340434",
        "fatherPhone": "6395340434",
        "motherPhone": "6395340434",
        "address": "MUHAMMADPUR BADHERA",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 87,
        "percentage": 98.9
    },
    "feeSummary": {
        "tuitionDue": 14000,
        "transportDue11Months": 5500,
        "totalDue": 19500,
        "totalPaid": 2925,
        "balance": 16575
    },
    "transport": {
        "stoppage": "MUHAMMADPUR BADHERA",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-083"
    ],
    "familyId": "FAM-0283"
},
{
    "id": "STU-2026-294",
    "sqlId": "294",
    "admissionNo": "480",
    "rollNo": "223",
    "name": "RUDRA KUMAR",
    "photo": "2f1e4f6f279d05533d6f860340f21419.jpg",
    "dob": "2018-09-13",
    "gender": "Male",
    "class": "II",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "PREMPAL SINGH",
        "motherName": "JYOTI DEVI",
        "fatherMobile": "9675515007",
        "motherMobile": "9675515007",
        "fatherPhone": "9675515007",
        "motherPhone": "9675515007",
        "address": "NAGLA GURVI, JARGWAN",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 82,
        "percentage": 93.2
    },
    "feeSummary": {
        "tuitionDue": 14000,
        "transportDue11Months": 5500,
        "totalDue": 19500,
        "totalPaid": 16575,
        "balance": 2925
    },
    "transport": {
        "stoppage": "NAGLA GURVI",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0284"
},
{
    "id": "STU-2026-295",
    "sqlId": "295",
    "admissionNo": "481",
    "rollNo": "139",
    "name": "RUDRANSH",
    "photo": "f1f7ac3b3b528d5354e6e02126e810af.jpg",
    "dob": "2018-07-20",
    "gender": "Male",
    "class": "II",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "ROOP KISHOR",
        "motherName": "KUSUM DEVI",
        "fatherMobile": "8010853052",
        "motherMobile": "9759711175",
        "fatherPhone": "8010853052",
        "motherPhone": "9759711175",
        "address": "NAGLA DHARKPUR, DIBAI",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 83,
        "percentage": 94.3
    },
    "feeSummary": {
        "tuitionDue": 14000,
        "transportDue11Months": 5500,
        "totalDue": 19500,
        "totalPaid": 8775,
        "balance": 10725
    },
    "transport": {
        "stoppage": "NAGLA DHARKPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 1"
    },
    "linkedSiblingIds": [
        "STU-2026-182"
    ],
    "familyId": "FAM-0285"
},
{
    "id": "STU-2026-296",
    "sqlId": "296",
    "admissionNo": "482",
    "rollNo": "0",
    "name": "SANDEEP KUMAR",
    "photo": "0447bf9011e8d2884b536c90756f626f.jpg",
    "dob": "2018-01-01",
    "gender": "Male",
    "class": "II",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "VINAY KUMAR",
        "motherName": "SUMAN DEVI",
        "fatherMobile": "9315487824",
        "motherMobile": "9315487824",
        "fatherPhone": "9315487824",
        "motherPhone": "9315487824",
        "address": "CHIRAURI, BULANDSHAHR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 84,
        "percentage": 95.5
    },
    "feeSummary": {
        "tuitionDue": 14000,
        "transportDue11Months": 5500,
        "totalDue": 19500,
        "totalPaid": 2925,
        "balance": 16575
    },
    "transport": {
        "stoppage": "CHIRAURI",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 4"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0286"
},
{
    "id": "STU-2026-297",
    "sqlId": "297",
    "admissionNo": "483",
    "rollNo": "226",
    "name": "SARTHAK BHARDWAJ",
    "photo": "3dac222e7ee3b739cca3ea70edd03a09.jpg",
    "dob": "2019-02-01",
    "gender": "Male",
    "class": "II",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "AJAY SHARMA",
        "motherName": "LALITA",
        "fatherMobile": "7017671928",
        "motherMobile": "7017671928",
        "fatherPhone": "7017671928",
        "motherPhone": "7017671928",
        "address": "V+P RAMGHAT DIST BULANDSHAHR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "Select Social Category",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 85,
        "percentage": 96.6
    },
    "feeSummary": {
        "tuitionDue": 14000,
        "transportDue11Months": 5500,
        "totalDue": 19500,
        "totalPaid": 16575,
        "balance": 2925
    },
    "transport": {
        "stoppage": "V+P RAMGHAT DIST BULANDSHAHR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 3"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0287"
},
{
    "id": "STU-2026-298",
    "sqlId": "298",
    "admissionNo": "485",
    "rollNo": "229",
    "name": "SOURABH KUMAR",
    "photo": "8dc93aa8553e89e2cf5ff13d4addabfb.jpg",
    "dob": "2018-06-20",
    "gender": "Male",
    "class": "II",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "VINOD KUMAR",
        "motherName": "RAMVATI DEVI",
        "fatherMobile": "9319559540",
        "motherMobile": "9319559540",
        "fatherPhone": "9319559540",
        "motherPhone": "9319559540",
        "address": "NAGLA GARVI, JARGWAN",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 86,
        "percentage": 97.7
    },
    "feeSummary": {
        "tuitionDue": 14000,
        "transportDue11Months": 5500,
        "totalDue": 19500,
        "totalPaid": 8775,
        "balance": 10725
    },
    "transport": {
        "stoppage": "NAGLA GARVI",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 1"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0288"
},
{
    "id": "STU-2026-299",
    "sqlId": "299",
    "admissionNo": "486",
    "rollNo": "230",
    "name": "SUSHANT KUMAR",
    "photo": "95b197bbcea35ced0e64e124854c3c61.jpg",
    "dob": "2017-01-01",
    "gender": "Male",
    "class": "II",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "ARVIND YADAV",
        "motherName": "POOJA DEVI",
        "fatherMobile": "9368845668",
        "motherMobile": "9368845668",
        "fatherPhone": "9368845668",
        "motherPhone": "9368845668",
        "address": "KALIYANPUR BHAGIRATHPUR, ATRAULI",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 87,
        "percentage": 98.9
    },
    "feeSummary": {
        "tuitionDue": 14000,
        "transportDue11Months": 5500,
        "totalDue": 19500,
        "totalPaid": 2925,
        "balance": 16575
    },
    "transport": {
        "stoppage": "KALIYANPUR BHAGIRATHPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 2"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0289"
},
{
    "id": "STU-2026-300",
    "sqlId": "300",
    "admissionNo": "487",
    "rollNo": "163",
    "name": "TARUN KUMAR",
    "photo": "baacbf4f23b59d840be5aa1b56fb0d89.jpg",
    "dob": "2019-02-24",
    "gender": "Male",
    "class": "II",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "RESHAM PAL SINGH",
        "motherName": "KALPANA DEVI",
        "fatherMobile": "8650788432",
        "motherMobile": "8650788432",
        "fatherPhone": "8650788432",
        "motherPhone": "8650788432",
        "address": "GANGAGARH DEBAI",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 82,
        "percentage": 93.2
    },
    "feeSummary": {
        "tuitionDue": 14000,
        "transportDue11Months": 5500,
        "totalDue": 19500,
        "totalPaid": 16575,
        "balance": 2925
    },
    "transport": {
        "stoppage": "GANGAGARH DEBAI",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 3"
    },
    "linkedSiblingIds": [
        "STU-2026-214"
    ],
    "familyId": "FAM-0290"
},
{
    "id": "STU-2026-301",
    "sqlId": "301",
    "admissionNo": "489",
    "rollNo": "231",
    "name": "YOGYATA KUMARI",
    "photo": "55facfca31f823532a2d3756e3ad37d2.jpg",
    "dob": "2019-03-29",
    "gender": "Male",
    "class": "II",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "DURGESH KUMAR",
        "motherName": "KAMINI DEVI",
        "fatherMobile": "8600521500",
        "motherMobile": "8600521500",
        "fatherPhone": "8600521500",
        "motherPhone": "8600521500",
        "address": "BAIJALA KOTHI, JIRAULI",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "Select Social Category",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 83,
        "percentage": 94.3
    },
    "feeSummary": {
        "tuitionDue": 14000,
        "transportDue11Months": 5500,
        "totalDue": 19500,
        "totalPaid": 8775,
        "balance": 10725
    },
    "transport": {
        "stoppage": "BAIJALA KOTHI",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 2"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0291"
},
{
    "id": "STU-2026-302",
    "sqlId": "302",
    "admissionNo": "491",
    "rollNo": "0",
    "name": "AYANSH SHARMA",
    "photo": "98d5a0689a3b16bd3f58aa93d6c12143.jpg",
    "dob": "2019-01-15",
    "gender": "Male",
    "class": "I",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "LALIT KUMAR",
        "motherName": "ANKITA",
        "fatherMobile": "9759539814",
        "motherMobile": "9759539814",
        "fatherPhone": "9759539814",
        "motherPhone": "9759539814",
        "address": "RAMGHAT DIBAI BULANDSHAHR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "Select Social Category",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 84,
        "percentage": 95.5
    },
    "feeSummary": {
        "tuitionDue": 13500,
        "transportDue11Months": 5500,
        "totalDue": 19000,
        "totalPaid": 2850,
        "balance": 16150
    },
    "transport": {
        "stoppage": "RAMGHAT DIBAI BULANDSHAHR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 3"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0292"
},
{
    "id": "STU-2026-303",
    "sqlId": "303",
    "admissionNo": "493",
    "rollNo": "0",
    "name": "BANSHU KUMAR",
    "photo": "befc938c633cb2ecf379629aaa1f110f.jpg",
    "dob": "2020-01-01",
    "gender": "Male",
    "class": "I",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "AVNESH KUMAR",
        "motherName": "ANOJ DEVI",
        "fatherMobile": "9761083561",
        "motherMobile": "9761083561",
        "fatherPhone": "9761083561",
        "motherPhone": "9761083561",
        "address": "BAIJALA, ATRAULI (ALIGARH)",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 85,
        "percentage": 96.6
    },
    "feeSummary": {
        "tuitionDue": 13500,
        "transportDue11Months": 5500,
        "totalDue": 19000,
        "totalPaid": 16150,
        "balance": 2850
    },
    "transport": {
        "stoppage": "BAIJALA",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 1"
    },
    "linkedSiblingIds": [
        "STU-2026-224"
    ],
    "familyId": "FAM-0220"
},
{
    "id": "STU-2026-304",
    "sqlId": "304",
    "admissionNo": "494",
    "rollNo": "0",
    "name": "CHESTA",
    "photo": "a880f130c7ffad899cd5563019a19779.jpg",
    "dob": "2020-01-09",
    "gender": "Male",
    "class": "I",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "SATENDRA KUMAR",
        "motherName": "SNEH DEVI",
        "fatherMobile": "9500077994",
        "motherMobile": "7500077994",
        "fatherPhone": "9500077994",
        "motherPhone": "7500077994",
        "address": "GOKULPUR KHADAR, RAMGHAT",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 86,
        "percentage": 97.7
    },
    "feeSummary": {
        "tuitionDue": 13500,
        "transportDue11Months": 5500,
        "totalDue": 19000,
        "totalPaid": 8550,
        "balance": 10450
    },
    "transport": {
        "stoppage": "GOKULPUR KHADAR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 3"
    },
    "linkedSiblingIds": [
        "STU-2026-082"
    ],
    "familyId": "FAM-0080"
},
{
    "id": "STU-2026-305",
    "sqlId": "305",
    "admissionNo": "495",
    "rollNo": "0",
    "name": "DAMINI LODHI",
    "photo": "b0e317f3925f06f0050b298e9566770e.jpg",
    "dob": "2021-01-01",
    "gender": "Male",
    "class": "I",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "RAKESH KUMAR",
        "motherName": "NEERU VERMA",
        "fatherMobile": "9627722404",
        "motherMobile": "9627722404",
        "fatherPhone": "9627722404",
        "motherPhone": "9627722404",
        "address": "MUHAMMADPUR BADHERA, ATRAULI (ALIGARH)",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 87,
        "percentage": 98.9
    },
    "feeSummary": {
        "tuitionDue": 13500,
        "transportDue11Months": 5500,
        "totalDue": 19000,
        "totalPaid": 2850,
        "balance": 16150
    },
    "transport": {
        "stoppage": "MUHAMMADPUR BADHERA",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-026",
        "STU-2026-430"
    ],
    "familyId": "FAM-0408"
},
{
    "id": "STU-2026-306",
    "sqlId": "306",
    "admissionNo": "496",
    "rollNo": "0",
    "name": "DEEKSHA SHARMA",
    "photo": "97254eb4f0603ee47a2be64b2188fe24.jpg",
    "dob": "2020-06-25",
    "gender": "Male",
    "class": "I",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "SATISH KUMAR",
        "motherName": "SUMAN DEVI",
        "fatherMobile": "9627265417",
        "motherMobile": "9627265417",
        "fatherPhone": "9627265417",
        "motherPhone": "9627265417",
        "address": "BAGI NAGLA, CHIRAURI, DIBAI (BULANDSHAHR)",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "Select Social Category",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 82,
        "percentage": 93.2
    },
    "feeSummary": {
        "tuitionDue": 13500,
        "transportDue11Months": 5500,
        "totalDue": 19000,
        "totalPaid": 16150,
        "balance": 2850
    },
    "transport": {
        "stoppage": "BAGI NAGLA",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 4"
    },
    "linkedSiblingIds": [
        "STU-2026-204",
        "STU-2026-262"
    ],
    "familyId": "FAM-0200"
},
{
    "id": "STU-2026-307",
    "sqlId": "307",
    "admissionNo": "497",
    "rollNo": "0",
    "name": "DEEPAK",
    "photo": "5e38a8f3cec59b25b3b58614ba2d2565.jpg",
    "dob": "2020-03-20",
    "gender": "Male",
    "class": "I",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "CHANDRABHAN",
        "motherName": "SONAM DEVI",
        "fatherMobile": "9368249634",
        "motherMobile": "9412129478",
        "fatherPhone": "9368249634",
        "motherPhone": "9412129478",
        "address": "KALIYANPUR BHAGIRATHPUR, ALIGARH",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 83,
        "percentage": 94.3
    },
    "feeSummary": {
        "tuitionDue": 13500,
        "transportDue11Months": 5500,
        "totalDue": 19000,
        "totalPaid": 8550,
        "balance": 10450
    },
    "transport": {
        "stoppage": "KALIYANPUR BHAGIRATHPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 2"
    },
    "linkedSiblingIds": [
        "STU-2026-112"
    ],
    "familyId": "FAM-0296"
},
{
    "id": "STU-2026-308",
    "sqlId": "308",
    "admissionNo": "498",
    "rollNo": "0",
    "name": "DIMPAL",
    "photo": "1cca37aa0dae5a9e3e730653347901af.jpg",
    "dob": "2018-09-08",
    "gender": "Male",
    "class": "I",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "TEJVEER SINGH",
        "motherName": "RACHNA DEVI",
        "fatherMobile": "9719204696",
        "motherMobile": "9719204696",
        "fatherPhone": "9719204696",
        "motherPhone": "9719204696",
        "address": "GADAIPUR, KASIMPUR GADAIPUR, KAZIMABAD, ALIGARH",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 84,
        "percentage": 95.5
    },
    "feeSummary": {
        "tuitionDue": 13500,
        "transportDue11Months": 5500,
        "totalDue": 19000,
        "totalPaid": 2850,
        "balance": 16150
    },
    "transport": {
        "stoppage": "GADAIPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-244",
        "STU-2026-343"
    ],
    "familyId": "FAM-0240"
},
{
    "id": "STU-2026-310",
    "sqlId": "310",
    "admissionNo": "500",
    "rollNo": "0",
    "name": "GAURAV KUMAR",
    "photo": "9d321cac3c6634ce6326152fbb5bd0dc.jpg",
    "dob": "2021-12-22",
    "gender": "Male",
    "class": "I",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "SATISH KUMAR",
        "motherName": "VIMALESH DEVI",
        "fatherMobile": "9780410371",
        "motherMobile": "8476978719",
        "fatherPhone": "9780410371",
        "motherPhone": "8476978719",
        "address": "KALIYANPUR BHAGIRATHPUR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 85,
        "percentage": 96.6
    },
    "feeSummary": {
        "tuitionDue": 13500,
        "transportDue11Months": 5500,
        "totalDue": 19000,
        "totalPaid": 16150,
        "balance": 2850
    },
    "transport": {
        "stoppage": "KALIYANPUR BHAGIRATHPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 2"
    },
    "linkedSiblingIds": [
        "STU-2026-291"
    ],
    "familyId": "FAM-0299"
},
{
    "id": "STU-2026-311",
    "sqlId": "311",
    "admissionNo": "501",
    "rollNo": "0",
    "name": "GURMEET SHARMA",
    "photo": "bd9357127091cba038feaf28157ce719.jpg",
    "dob": "2019-10-09",
    "gender": "Male",
    "class": "I",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "GAURAV KUMAR",
        "motherName": "ARTI SHARMA",
        "fatherMobile": "6396944247",
        "motherMobile": "6396944247",
        "fatherPhone": "6396944247",
        "motherPhone": "6396944247",
        "address": "JARGWAN DIBAI",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "Select Social Category",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 86,
        "percentage": 97.7
    },
    "feeSummary": {
        "tuitionDue": 13500,
        "transportDue11Months": 5500,
        "totalDue": 19000,
        "totalPaid": 8550,
        "balance": 10450
    },
    "transport": {
        "stoppage": "JARGWAN DIBAI",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-595"
    ],
    "familyId": "FAM-0300"
},
{
    "id": "STU-2026-312",
    "sqlId": "312",
    "admissionNo": "502",
    "rollNo": "0",
    "name": "HANSHIKA RAJPUT",
    "photo": "2c1b81d628f073e10c6a499954c0f4de.jpg",
    "dob": "2019-07-04",
    "gender": "Male",
    "class": "I",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "GAJRAJ SINGH",
        "motherName": "PINKI RAJPUT",
        "fatherMobile": "9719945764",
        "motherMobile": "9719945764",
        "fatherPhone": "9719945764",
        "motherPhone": "9719945764",
        "address": "GANESHPUR, GOVINDPUR (ALIGARH)",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 87,
        "percentage": 98.9
    },
    "feeSummary": {
        "tuitionDue": 13500,
        "transportDue11Months": 5500,
        "totalDue": 19000,
        "totalPaid": 2850,
        "balance": 16150
    },
    "transport": {
        "stoppage": "GANESHPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 6"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0301"
},
{
    "id": "STU-2026-313",
    "sqlId": "313",
    "admissionNo": "504",
    "rollNo": "0",
    "name": "HARSHIT YADAV",
    "photo": "3ef61e9f663afcb3330cf48b991e58e7.jpg",
    "dob": "2019-05-10",
    "gender": "Male",
    "class": "I",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "SHIVDUTT YADAV",
        "motherName": "KUSUMLATA",
        "fatherMobile": "7017588853",
        "motherMobile": "7017588853",
        "fatherPhone": "7017588853",
        "motherPhone": "7017588853",
        "address": "BAIJALA ATRAULI ALIGARH",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 82,
        "percentage": 93.2
    },
    "feeSummary": {
        "tuitionDue": 13500,
        "transportDue11Months": 5500,
        "totalDue": 19000,
        "totalPaid": 16150,
        "balance": 2850
    },
    "transport": {
        "stoppage": "BAIJALA ATRAULI ALIGARH",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 2"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0302"
},
{
    "id": "STU-2026-314",
    "sqlId": "314",
    "admissionNo": "505",
    "rollNo": "0",
    "name": "ISHANT KUMAR",
    "photo": "629db992fec97207b08d7dd333a45b2a.jpg",
    "dob": "2019-10-16",
    "gender": "Male",
    "class": "I",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "ROHIT KUMAR",
        "motherName": "NEMVATI DEVI",
        "fatherMobile": "9719312990",
        "motherMobile": "9719312990",
        "fatherPhone": "9719312990",
        "motherPhone": "9719312990",
        "address": "NAGLA SHUMALI JARGWAN",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 83,
        "percentage": 94.3
    },
    "feeSummary": {
        "tuitionDue": 13500,
        "transportDue11Months": 5500,
        "totalDue": 19000,
        "totalPaid": 8550,
        "balance": 10450
    },
    "transport": {
        "stoppage": "NAGLA SHUMALI JARGWAN",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 5"
    },
    "linkedSiblingIds": [
        "STU-2026-116"
    ],
    "familyId": "FAM-0114"
},
{
    "id": "STU-2026-315",
    "sqlId": "315",
    "admissionNo": "506",
    "rollNo": "0",
    "name": "JATIN KUMAR",
    "photo": "7ada0ea0d85ec31101359e9974b9a61d.jpg",
    "dob": "2021-01-09",
    "gender": "Male",
    "class": "I",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "PUSHPENDRA SINGH",
        "motherName": "PRITI DEVI",
        "fatherMobile": "6396451120",
        "motherMobile": "6396451120",
        "fatherPhone": "6396451120",
        "motherPhone": "6396451120",
        "address": "BAIJALA KOTHI, ATRAULI (ALIGARH)",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 84,
        "percentage": 95.5
    },
    "feeSummary": {
        "tuitionDue": 13500,
        "transportDue11Months": 5500,
        "totalDue": 19000,
        "totalPaid": 2850,
        "balance": 16150
    },
    "transport": {
        "stoppage": "BAIJALA KOTHI",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 1"
    },
    "linkedSiblingIds": [
        "STU-2026-152"
    ],
    "familyId": "FAM-0150"
},
{
    "id": "STU-2026-316",
    "sqlId": "316",
    "admissionNo": "507",
    "rollNo": "0",
    "name": "JHALAK RAJPUT",
    "photo": "be060e005a4aea0e755fb68675af2abc.jpg",
    "dob": "2020-02-26",
    "gender": "Male",
    "class": "I",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "DEEPAK KUMAR",
        "motherName": "ARCHANA",
        "fatherMobile": "6395324919",
        "motherMobile": "6395324919",
        "fatherPhone": "6395324919",
        "motherPhone": "6395324919",
        "address": "BAIJALA KOTHI,",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 85,
        "percentage": 96.6
    },
    "feeSummary": {
        "tuitionDue": 13500,
        "transportDue11Months": 5500,
        "totalDue": 19000,
        "totalPaid": 16150,
        "balance": 2850
    },
    "transport": {
        "stoppage": "BAIJALA KOTHI",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 2"
    },
    "linkedSiblingIds": [
        "STU-2026-271"
    ],
    "familyId": "FAM-0305"
},
{
    "id": "STU-2026-320",
    "sqlId": "320",
    "admissionNo": "511",
    "rollNo": "0",
    "name": "KUMKUM RAJPUT",
    "photo": "73f16015e4ada81ecfe49e9b1eddbf03.jpg",
    "dob": "2019-07-02",
    "gender": "Male",
    "class": "I",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "LIKESH KUMAR",
        "motherName": "SEEMA DEVI",
        "fatherMobile": "9758783218",
        "motherMobile": "9758783218",
        "fatherPhone": "9758783218",
        "motherPhone": "9758783218",
        "address": "NAGLA DHARAKPUR, DHARAKPUR, DIBAL",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 86,
        "percentage": 97.7
    },
    "feeSummary": {
        "tuitionDue": 13500,
        "transportDue11Months": 5500,
        "totalDue": 19000,
        "totalPaid": 8550,
        "balance": 10450
    },
    "transport": {
        "stoppage": "NAGLA DHARAKPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 1"
    },
    "linkedSiblingIds": [
        "STU-2026-459"
    ],
    "familyId": "FAM-0309"
},
{
    "id": "STU-2026-321",
    "sqlId": "321",
    "admissionNo": "513",
    "rollNo": "0",
    "name": "KUNJ GAUR",
    "photo": "b91715d19647f887abf7ab421612bd7b.jpg",
    "dob": "2020-06-21",
    "gender": "Male",
    "class": "I",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "NAVNEET GAUR",
        "motherName": "KARISHMA",
        "fatherMobile": "8909832800",
        "motherMobile": "8750669992",
        "fatherPhone": "8909832800",
        "motherPhone": "8750669992",
        "address": "JARGWAN DIBAI BULANDSHAHR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "General",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 87,
        "percentage": 98.9
    },
    "feeSummary": {
        "tuitionDue": 13500,
        "transportDue11Months": 5500,
        "totalDue": 19000,
        "totalPaid": 2850,
        "balance": 16150
    },
    "transport": {
        "stoppage": "JARGWAN DIBAI BULANDSHAHR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0310"
},
{
    "id": "STU-2026-323",
    "sqlId": "323",
    "admissionNo": "515",
    "rollNo": "0",
    "name": "LOVEKUSH YADAV",
    "photo": "63c97b408cbbd00edc0920c269276a6f.jpg",
    "dob": "2020-03-02",
    "gender": "Male",
    "class": "UKG",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "LOKESH KUMAR",
        "motherName": "SHASHI",
        "fatherMobile": "9512129478",
        "motherMobile": "9512129478",
        "fatherPhone": "9512129478",
        "motherPhone": "9512129478",
        "address": "MOUNIPURA URF RAMVAS POST DIST+BULANDSHAHR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 82,
        "percentage": 93.2
    },
    "feeSummary": {
        "tuitionDue": 12500,
        "transportDue11Months": 5500,
        "totalDue": 18000,
        "totalPaid": 15300,
        "balance": 2700
    },
    "transport": {
        "stoppage": "MOUNIPURA URF RAMVAS POST DIST+BULANDSHAHR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 3"
    },
    "linkedSiblingIds": [
        "STU-2026-373"
    ],
    "familyId": "FAM-0312"
},
{
    "id": "STU-2026-324",
    "sqlId": "324",
    "admissionNo": "516",
    "rollNo": "181",
    "name": "KUMARI MAHAK",
    "photo": "916373a7dfe1caef8943abc2cce8b546.jpg",
    "dob": "2017-07-09",
    "gender": "Male",
    "class": "III",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "RAVENDRA KUMAR",
        "motherName": "soni",
        "fatherMobile": "9639422780",
        "motherMobile": "9639422780",
        "fatherPhone": "9639422780",
        "motherPhone": "9639422780",
        "address": "MOUNIPURA, RAMGHAT",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 83,
        "percentage": 94.3
    },
    "feeSummary": {
        "tuitionDue": 14500,
        "transportDue11Months": 5500,
        "totalDue": 20000,
        "totalPaid": 9000,
        "balance": 11000
    },
    "transport": {
        "stoppage": "MOUNIPURA",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 3"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0313"
},
{
    "id": "STU-2026-325",
    "sqlId": "325",
    "admissionNo": "517",
    "rollNo": "0",
    "name": "MANVI LODHI",
    "photo": "8c5e18b117fc027b668a44dc893184ee.jpg",
    "dob": "2019-04-16",
    "gender": "Male",
    "class": "I",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "SATISH KUMAR",
        "motherName": "MADHU",
        "fatherMobile": "9675939394",
        "motherMobile": "9675939394",
        "fatherPhone": "9675939394",
        "motherPhone": "9675939394",
        "address": "JIRAULI DHOOM SINGH",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 84,
        "percentage": 95.5
    },
    "feeSummary": {
        "tuitionDue": 13500,
        "transportDue11Months": 5500,
        "totalDue": 19000,
        "totalPaid": 2850,
        "balance": 16150
    },
    "transport": {
        "stoppage": "JIRAULI DHOOM SINGH",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 2"
    },
    "linkedSiblingIds": [
        "STU-2026-354",
        "STU-2026-572"
    ],
    "familyId": "FAM-0314"
},
{
    "id": "STU-2026-326",
    "sqlId": "326",
    "admissionNo": "518",
    "rollNo": "0",
    "name": "MANVI",
    "photo": "fe67eb55d2c9d41d7cfe5fa29f89564e.jpg",
    "dob": "2019-02-19",
    "gender": "Male",
    "class": "I",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "DINESH KUMAR",
        "motherName": "VEENESH DEVI",
        "fatherMobile": "9536711508",
        "motherMobile": "9536711508",
        "fatherPhone": "9536711508",
        "motherPhone": "9536711508",
        "address": "DADHAR ALUPURA ATRULI ALIGRAH",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 85,
        "percentage": 96.6
    },
    "feeSummary": {
        "tuitionDue": 13500,
        "transportDue11Months": 5500,
        "totalDue": 19000,
        "totalPaid": 16150,
        "balance": 2850
    },
    "transport": {
        "stoppage": "DADHAR ALUPURA ATRULI ALIGRAH",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 2"
    },
    "linkedSiblingIds": [
        "STU-2026-200"
    ],
    "familyId": "FAM-0196"
},
{
    "id": "STU-2026-329",
    "sqlId": "329",
    "admissionNo": "521",
    "rollNo": "0",
    "name": "NAVNEET KUMAR",
    "photo": "0e273d9567f2c5b43b22139b76e4651f.jpg",
    "dob": "2018-10-15",
    "gender": "Male",
    "class": "I",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "JITENDRA KUMAR",
        "motherName": "SARLA DEVI",
        "fatherMobile": "9718249642",
        "motherMobile": "9718249642",
        "fatherPhone": "9718249642",
        "motherPhone": "9718249642",
        "address": "CHIRAURI JARGWAN",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 86,
        "percentage": 97.7
    },
    "feeSummary": {
        "tuitionDue": 13500,
        "transportDue11Months": 5500,
        "totalDue": 19000,
        "totalPaid": 8550,
        "balance": 10450
    },
    "transport": {
        "stoppage": "CHIRAURI JARGWAN",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 4"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0317"
},
{
    "id": "STU-2026-330",
    "sqlId": "330",
    "admissionNo": "522",
    "rollNo": "0",
    "name": "PARI",
    "photo": "4eab5584f1f846ae1ed17e8c6c2e8200.jpg",
    "dob": "2019-07-26",
    "gender": "Male",
    "class": "I",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "MUNISH KUMAR",
        "motherName": "ASHA DEVI",
        "fatherMobile": "8826569004",
        "motherMobile": "9582426273",
        "fatherPhone": "8826569004",
        "motherPhone": "9582426273",
        "address": "CHIRAURI, JARGWAN",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 87,
        "percentage": 98.9
    },
    "feeSummary": {
        "tuitionDue": 13500,
        "transportDue11Months": 5500,
        "totalDue": 19000,
        "totalPaid": 2850,
        "balance": 16150
    },
    "transport": {
        "stoppage": "CHIRAURI",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 4"
    },
    "linkedSiblingIds": [
        "STU-2026-092"
    ],
    "familyId": "FAM-0318"
},
{
    "id": "STU-2026-332",
    "sqlId": "332",
    "admissionNo": "526",
    "rollNo": "0",
    "name": "RACHIT KUMAR",
    "photo": "da319c517d5431a6288c4e9c6d0a68da.jpg",
    "dob": "2020-11-23",
    "gender": "Male",
    "class": "I",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "DINESH KUMAR",
        "motherName": "PREMVATI DEVI",
        "fatherMobile": "8700231451",
        "motherMobile": "8700231451",
        "fatherPhone": "8700231451",
        "motherPhone": "8700231451",
        "address": "DHARAKPUR DIBAI BULANDSHAHR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 82,
        "percentage": 93.2
    },
    "feeSummary": {
        "tuitionDue": 13500,
        "transportDue11Months": 5500,
        "totalDue": 19000,
        "totalPaid": 16150,
        "balance": 2850
    },
    "transport": {
        "stoppage": "DHARAKPUR DIBAI BULANDSHAHR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 1"
    },
    "linkedSiblingIds": [
        "STU-2026-163"
    ],
    "familyId": "FAM-0320"
},
{
    "id": "STU-2026-333",
    "sqlId": "333",
    "admissionNo": "528",
    "rollNo": "0",
    "name": "RIYA",
    "photo": "84c092cdd40106b36111d73cb5422c7f.jpg",
    "dob": "2019-05-31",
    "gender": "Male",
    "class": "I",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "ROUDAS",
        "motherName": "VIDHYA DEVI",
        "fatherMobile": "8650371683",
        "motherMobile": "8650371683",
        "fatherPhone": "8650371683",
        "motherPhone": "8650371683",
        "address": "MOUNIPURA POST RAMGHAT",
        "occupation": "AGRICULTURE",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 83,
        "percentage": 94.3
    },
    "feeSummary": {
        "tuitionDue": 13500,
        "transportDue11Months": 5500,
        "totalDue": 19000,
        "totalPaid": 8550,
        "balance": 10450
    },
    "transport": {
        "stoppage": "MOUNIPURA POST RAMGHAT",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 3"
    },
    "linkedSiblingIds": [
        "STU-2026-281"
    ],
    "familyId": "FAM-0679"
},
{
    "id": "STU-2026-334",
    "sqlId": "334",
    "admissionNo": "529",
    "rollNo": "0",
    "name": "RUCHI KUMARI",
    "photo": "5d1dbc7f7bee358f6df174c5abc37d05.jpg",
    "dob": "2019-09-13",
    "gender": "Male",
    "class": "I",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "SUMIT KUMAR",
        "motherName": "PAYAL DEVI",
        "fatherMobile": "9368391433",
        "motherMobile": "9368391433",
        "fatherPhone": "9368391433",
        "motherPhone": "9368391433",
        "address": "GANESHPUR, GOVINDPUR, ATRAULI (ALIGARH)",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 84,
        "percentage": 95.5
    },
    "feeSummary": {
        "tuitionDue": 13500,
        "transportDue11Months": 5500,
        "totalDue": 19000,
        "totalPaid": 2850,
        "balance": 16150
    },
    "transport": {
        "stoppage": "GANESHPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 2"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0322"
},
{
    "id": "STU-2026-335",
    "sqlId": "335",
    "admissionNo": "530",
    "rollNo": "0",
    "name": "SACHIN KUMAR",
    "photo": "e91b28fd442b4be8352361b7fa1bbdbd.jpg",
    "dob": "2019-01-15",
    "gender": "Male",
    "class": "I",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "REVADI SINGH",
        "motherName": "SONI",
        "fatherMobile": "9761768321",
        "motherMobile": "9761768321",
        "fatherPhone": "9761768321",
        "motherPhone": "9761768321",
        "address": "SILHARI (BULANDSHAHR)",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 85,
        "percentage": 96.6
    },
    "feeSummary": {
        "tuitionDue": 13500,
        "transportDue11Months": 5500,
        "totalDue": 19000,
        "totalPaid": 16150,
        "balance": 2850
    },
    "transport": {
        "stoppage": "SILHARI (BULANDSHAHR)",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 3"
    },
    "linkedSiblingIds": [
        "STU-2026-290"
    ],
    "familyId": "FAM-0323"
},
{
    "id": "STU-2026-336",
    "sqlId": "336",
    "admissionNo": "532",
    "rollNo": "227",
    "name": "SHAURYA KAUSHIK",
    "photo": "5705e8a46658104389d4d4bf27eeccdb.jpg",
    "dob": "2018-02-28",
    "gender": "Male",
    "class": "II",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "RAJAT KAUSHIK",
        "motherName": "SHANKEY SHARMA",
        "fatherMobile": "8630457658",
        "motherMobile": "8630457658",
        "fatherPhone": "8630457658",
        "motherPhone": "8630457658",
        "address": "RAMGHAT",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "Select Social Category",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 86,
        "percentage": 97.7
    },
    "feeSummary": {
        "tuitionDue": 14000,
        "transportDue11Months": 5500,
        "totalDue": 19500,
        "totalPaid": 8775,
        "balance": 10725
    },
    "transport": {
        "stoppage": "RAMGHAT",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 3"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0324"
},
{
    "id": "STU-2026-337",
    "sqlId": "337",
    "admissionNo": "533",
    "rollNo": "0",
    "name": "SHUBH",
    "photo": "ebddb4e79f04b970592ab2f6439b40e0.jpg",
    "dob": "2018-02-08",
    "gender": "Male",
    "class": "II",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "BANTI SINGH",
        "motherName": "GUNJAN RANI",
        "fatherMobile": "8057054981",
        "motherMobile": "8153970787",
        "fatherPhone": "8057054981",
        "motherPhone": "8153970787",
        "address": "PESARI, RAMGHAT",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 87,
        "percentage": 98.9
    },
    "feeSummary": {
        "tuitionDue": 14000,
        "transportDue11Months": 5500,
        "totalDue": 19500,
        "totalPaid": 2925,
        "balance": 16575
    },
    "transport": {
        "stoppage": "PESARI",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 5"
    },
    "linkedSiblingIds": [
        "STU-2026-352"
    ],
    "familyId": "FAM-0325"
},
{
    "id": "STU-2026-339",
    "sqlId": "339",
    "admissionNo": "536",
    "rollNo": "0",
    "name": "VINAYAK KUMAR",
    "photo": "81262d5530b07045ec7c02f888752f2b.jpg",
    "dob": "2020-11-24",
    "gender": "Male",
    "class": "I",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "NITESH KUMAR",
        "motherName": "SANTOSH KUMARI",
        "fatherMobile": "8527000812",
        "motherMobile": "9759537165",
        "fatherPhone": "8527000812",
        "motherPhone": "9759537165",
        "address": "KUHERA, NADARAULI (GUNNAOR)",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 82,
        "percentage": 93.2
    },
    "feeSummary": {
        "tuitionDue": 13500,
        "transportDue11Months": 5500,
        "totalDue": 19000,
        "totalPaid": 16150,
        "balance": 2850
    },
    "transport": {
        "stoppage": "KUHERA",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 5"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0327"
},
{
    "id": "STU-2026-343",
    "sqlId": "343",
    "admissionNo": "541",
    "rollNo": "0",
    "name": "YATIN KUMAR",
    "photo": "13c566ef308aa054443b8b6bb466626d.jpg",
    "dob": "2020-08-27",
    "gender": "Male",
    "class": "UKG",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "TEJVEER SINGH",
        "motherName": "RACHNA DEVI",
        "fatherMobile": "9719204696",
        "motherMobile": "9719204696",
        "fatherPhone": "9719204696",
        "motherPhone": "9719204696",
        "address": "GADAIPUR, KASIMPUR GADAIPUR, KAZIMABAD, ALIGARH",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 83,
        "percentage": 94.3
    },
    "feeSummary": {
        "tuitionDue": 12500,
        "transportDue11Months": 5500,
        "totalDue": 18000,
        "totalPaid": 8100,
        "balance": 9900
    },
    "transport": {
        "stoppage": "GADAIPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-244",
        "STU-2026-308"
    ],
    "familyId": "FAM-0240"
},
{
    "id": "STU-2026-345",
    "sqlId": "345",
    "admissionNo": "543",
    "rollNo": "0",
    "name": "CHETAN CHAUDHARY",
    "photo": "dd320eaf02d12e41cba61a91021b5568.jpg",
    "dob": "2023-01-04",
    "gender": "Male",
    "class": "UKG",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "NEERAJ KUMAR RANA",
        "motherName": "REENA DEVI",
        "fatherMobile": "9258398453",
        "motherMobile": "8057171245",
        "fatherPhone": "9258398453",
        "motherPhone": "8057171245",
        "address": "BAJHERA DHARAKPUR DIBAI BSR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 84,
        "percentage": 95.5
    },
    "feeSummary": {
        "tuitionDue": 12500,
        "transportDue11Months": 5500,
        "totalDue": 18000,
        "totalPaid": 2700,
        "balance": 15300
    },
    "transport": {
        "stoppage": "BAJHERA DHARAKPUR DIBAI BSR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-346"
    ],
    "familyId": "FAM-0333"
},
{
    "id": "STU-2026-346",
    "sqlId": "346",
    "admissionNo": "544",
    "rollNo": "0",
    "name": "PUNEET CHAUDHARY",
    "photo": "2e2ff81eeb2da40d8efe95c94741eab0.jpg",
    "dob": "2021-10-08",
    "gender": "Male",
    "class": "UKG",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "NEERAJ KUMAR RANA",
        "motherName": "REENA DEVI",
        "fatherMobile": "8650079138",
        "motherMobile": "8057171245",
        "fatherPhone": "8650079138",
        "motherPhone": "8057171245",
        "address": "BAJHERA, DHARAKPUR DIBAI BULANDSHAHR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 85,
        "percentage": 96.6
    },
    "feeSummary": {
        "tuitionDue": 12500,
        "transportDue11Months": 5500,
        "totalDue": 18000,
        "totalPaid": 15300,
        "balance": 2700
    },
    "transport": {
        "stoppage": "BAJHERA",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-345"
    ],
    "familyId": "FAM-0334"
},
{
    "id": "STU-2026-347",
    "sqlId": "347",
    "admissionNo": "545",
    "rollNo": "0",
    "name": "DIVYA",
    "photo": "a1756730c597bf68213c72ba633ad922.jpg",
    "dob": "2019-08-14",
    "gender": "Male",
    "class": "UKG",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "AJAY KUMAR",
        "motherName": "LATESH DEVI",
        "fatherMobile": "9536878010",
        "motherMobile": "9536878010",
        "fatherPhone": "9536878010",
        "motherPhone": "9536878010",
        "address": "NAGLA DHARAKPUR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 86,
        "percentage": 97.7
    },
    "feeSummary": {
        "tuitionDue": 12500,
        "transportDue11Months": 5500,
        "totalDue": 18000,
        "totalPaid": 8100,
        "balance": 9900
    },
    "transport": {
        "stoppage": "NAGLA DHARAKPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 1"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0335"
},
{
    "id": "STU-2026-348",
    "sqlId": "348",
    "admissionNo": "546",
    "rollNo": "0",
    "name": "PRANIKA SHARMA",
    "photo": "cb63f7e5c6ae9f4fa2988ed4fcc6df24.jpg",
    "dob": "2020-01-17",
    "gender": "Male",
    "class": "LKG",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "GAURAV SHARMA",
        "motherName": "SANGEETA SHARMA",
        "fatherMobile": "6395389276",
        "motherMobile": "6395389276",
        "fatherPhone": "6395389276",
        "motherPhone": "6395389276",
        "address": "BAGI NAGLA",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "Select Social Category",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 87,
        "percentage": 98.9
    },
    "feeSummary": {
        "tuitionDue": 11500,
        "transportDue11Months": 5500,
        "totalDue": 17000,
        "totalPaid": 2550,
        "balance": 14450
    },
    "transport": {
        "stoppage": "BAGI NAGLA",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0336"
},
{
    "id": "STU-2026-349",
    "sqlId": "349",
    "admissionNo": "548",
    "rollNo": "0",
    "name": "OVYA LODHI",
    "photo": "c9818a87425f3667f9293370d37b420b.jpg",
    "dob": "2022-07-07",
    "gender": "Male",
    "class": "LKG",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "PANKAJ KUMAR",
        "motherName": "RANI",
        "fatherMobile": "9758951444",
        "motherMobile": "9758951444",
        "fatherPhone": "9758951444",
        "motherPhone": "9758951444",
        "address": "KHEDIYA RAFATPUR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 82,
        "percentage": 93.2
    },
    "feeSummary": {
        "tuitionDue": 11500,
        "transportDue11Months": 5500,
        "totalDue": 17000,
        "totalPaid": 14450,
        "balance": 2550
    },
    "transport": {
        "stoppage": "KHEDIYA RAFATPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0337"
},
{
    "id": "STU-2026-350",
    "sqlId": "350",
    "admissionNo": "550",
    "rollNo": "0",
    "name": "HIMANSHI RAJPUT",
    "photo": "b6530222d1f9ca451678d0c0c6f3fbc2.jpg",
    "dob": "2020-12-04",
    "gender": "Male",
    "class": "UKG",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "KAUSHAL KUMAR",
        "motherName": "SARALA DEVI",
        "fatherMobile": "9468205683",
        "motherMobile": "9468205683",
        "fatherPhone": "9468205683",
        "motherPhone": "9468205683",
        "address": "GANESHPUR GOVINDPUR",
        "occupation": "AGRICULTURE",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 83,
        "percentage": 94.3
    },
    "feeSummary": {
        "tuitionDue": 12500,
        "transportDue11Months": 5500,
        "totalDue": 18000,
        "totalPaid": 8100,
        "balance": 9900
    },
    "transport": {
        "stoppage": "GANESHPUR GOVINDPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 2"
    },
    "linkedSiblingIds": [
        "STU-2026-175"
    ],
    "familyId": "FAM-0171"
},
{
    "id": "STU-2026-351",
    "sqlId": "351",
    "admissionNo": "551",
    "rollNo": "0",
    "name": "SHAURYA SHARMA",
    "photo": "2773516159b32b1d50b7af1c024c8e05.jpg",
    "dob": "2021-11-12",
    "gender": "Male",
    "class": "UKG",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "INDRAJEET SHARMA",
        "motherName": "DULARI SHARMA",
        "fatherMobile": "8077450141",
        "motherMobile": "807745014",
        "fatherPhone": "8077450141",
        "motherPhone": "807745014",
        "address": "BAIJALA",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "Select Social Category",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 84,
        "percentage": 95.5
    },
    "feeSummary": {
        "tuitionDue": 12500,
        "transportDue11Months": 5500,
        "totalDue": 18000,
        "totalPaid": 2700,
        "balance": 15300
    },
    "transport": {
        "stoppage": "BAIJALA",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 1"
    },
    "linkedSiblingIds": [
        "STU-2026-185"
    ],
    "familyId": "FAM-0181"
},
{
    "id": "STU-2026-352",
    "sqlId": "352",
    "admissionNo": "552",
    "rollNo": "0",
    "name": "SHLOK",
    "photo": "e70761a011695dcd0b33cd60b7c03c48.jpg",
    "dob": "2020-02-02",
    "gender": "Male",
    "class": "UKG",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "BANTI SINGH",
        "motherName": "GUNJAN RANI",
        "fatherMobile": "8153970787",
        "motherMobile": "8153970787",
        "fatherPhone": "8153970787",
        "motherPhone": "8153970787",
        "address": "PESARI",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 85,
        "percentage": 96.6
    },
    "feeSummary": {
        "tuitionDue": 12500,
        "transportDue11Months": 5500,
        "totalDue": 18000,
        "totalPaid": 15300,
        "balance": 2700
    },
    "transport": {
        "stoppage": "PESARI",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 5"
    },
    "linkedSiblingIds": [
        "STU-2026-337"
    ],
    "familyId": "FAM-0340"
},
{
    "id": "STU-2026-354",
    "sqlId": "354",
    "admissionNo": "554",
    "rollNo": "0",
    "name": "ANURAG LODHI",
    "photo": "5b7d3ce4d005fdf6b6ea95ee3d16ab95.jpg",
    "dob": "2020-12-23",
    "gender": "Male",
    "class": "UKG",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "SATISH KUMAR",
        "motherName": "MADHU",
        "fatherMobile": "9675939394",
        "motherMobile": "9675939394",
        "fatherPhone": "9675939394",
        "motherPhone": "9675939394",
        "address": "JIRAULI DHOOM SINGH",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 86,
        "percentage": 97.7
    },
    "feeSummary": {
        "tuitionDue": 12500,
        "transportDue11Months": 5500,
        "totalDue": 18000,
        "totalPaid": 8100,
        "balance": 9900
    },
    "transport": {
        "stoppage": "JIRAULI DHOOM SINGH",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 2"
    },
    "linkedSiblingIds": [
        "STU-2026-325",
        "STU-2026-572"
    ],
    "familyId": "FAM-0314"
},
{
    "id": "STU-2026-355",
    "sqlId": "355",
    "admissionNo": "555",
    "rollNo": "0",
    "name": "DEVIKA TOMAR",
    "photo": "a1affff1cf875e38e77648301540d6c8.jpg",
    "dob": "2020-01-30",
    "gender": "Male",
    "class": "UKG",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "VARUN PRATAP SINGH",
        "motherName": "MONIKA DEVI",
        "fatherMobile": "9958132063",
        "motherMobile": "9958132063",
        "fatherPhone": "9958132063",
        "motherPhone": "9958132063",
        "address": "MUHAMMADPUR BADHERA",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "Select Social Category",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 87,
        "percentage": 98.9
    },
    "feeSummary": {
        "tuitionDue": 12500,
        "transportDue11Months": 5500,
        "totalDue": 18000,
        "totalPaid": 2700,
        "balance": 15300
    },
    "transport": {
        "stoppage": "MUHAMMADPUR BADHERA",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-384"
    ],
    "familyId": "FAM-0342"
},
{
    "id": "STU-2026-356",
    "sqlId": "356",
    "admissionNo": "556",
    "rollNo": "0",
    "name": "AVNI KUMARI",
    "photo": "928ae79ab3ce4c1620f4137c73259f03.jpg",
    "dob": "2018-08-20",
    "gender": "Male",
    "class": "UKG",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "VIRESH KUMAR",
        "motherName": "SHASHI DEVI",
        "fatherMobile": "7678237965",
        "motherMobile": "7678237965",
        "fatherPhone": "7678237965",
        "motherPhone": "7678237965",
        "address": "CHIRAURI",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 82,
        "percentage": 93.2
    },
    "feeSummary": {
        "tuitionDue": 12500,
        "transportDue11Months": 5500,
        "totalDue": 18000,
        "totalPaid": 15300,
        "balance": 2700
    },
    "transport": {
        "stoppage": "CHIRAURI",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-357"
    ],
    "familyId": "FAM-0343"
},
{
    "id": "STU-2026-357",
    "sqlId": "357",
    "admissionNo": "557",
    "rollNo": "0",
    "name": "AAKARITI YADAV",
    "photo": "70bde9c9793ed2a20f4888b23a378342.jpg",
    "dob": "2020-09-09",
    "gender": "Male",
    "class": "LKG",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "VIRESH KUMAR",
        "motherName": "SHASHI DEVI",
        "fatherMobile": "8954904810",
        "motherMobile": "8954904810",
        "fatherPhone": "8954904810",
        "motherPhone": "8954904810",
        "address": "CHIRAURI",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 83,
        "percentage": 94.3
    },
    "feeSummary": {
        "tuitionDue": 11500,
        "transportDue11Months": 5500,
        "totalDue": 17000,
        "totalPaid": 7650,
        "balance": 9350
    },
    "transport": {
        "stoppage": "CHIRAURI",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-356"
    ],
    "familyId": "FAM-0344"
},
{
    "id": "STU-2026-358",
    "sqlId": "358",
    "admissionNo": "560",
    "rollNo": "0",
    "name": "SANJEEV KUMAR",
    "photo": "4c43f6784c2b01c99e196e52ce3c15a2.jpg",
    "dob": "2021-12-22",
    "gender": "Male",
    "class": "UKG",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "JAYVEER SINGH",
        "motherName": "POONAM DEVI",
        "fatherMobile": "9719419975",
        "motherMobile": "9719419975",
        "fatherPhone": "9719419975",
        "motherPhone": "9719419975",
        "address": "NAGLA GARVI",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 84,
        "percentage": 95.5
    },
    "feeSummary": {
        "tuitionDue": 12500,
        "transportDue11Months": 5500,
        "totalDue": 18000,
        "totalPaid": 2700,
        "balance": 15300
    },
    "transport": {
        "stoppage": "NAGLA GARVI",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-184"
    ],
    "familyId": "FAM-0180"
},
{
    "id": "STU-2026-359",
    "sqlId": "359",
    "admissionNo": "562",
    "rollNo": "0",
    "name": "RAGHAV KUMAR",
    "photo": "0aa37649979411612062c5776da5e492.jpg",
    "dob": "2020-12-20",
    "gender": "Male",
    "class": "UKG",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "JAGDISH YADAV",
        "motherName": "NEERESH DEVI",
        "fatherMobile": "8447784346",
        "motherMobile": "844778434",
        "fatherPhone": "8447784346",
        "motherPhone": "844778434",
        "address": "MONIPURA URF RAMVAS",
        "occupation": "AGRICULTURE",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 85,
        "percentage": 96.6
    },
    "feeSummary": {
        "tuitionDue": 12500,
        "transportDue11Months": 5500,
        "totalDue": 18000,
        "totalPaid": 15300,
        "balance": 2700
    },
    "transport": {
        "stoppage": "MONIPURA URF RAMVAS",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 3"
    },
    "linkedSiblingIds": [
        "STU-2026-583"
    ],
    "familyId": "FAM-0555"
},
{
    "id": "STU-2026-360",
    "sqlId": "360",
    "admissionNo": "563",
    "rollNo": "0",
    "name": "Anaya Rao Bardhan",
    "photo": "a4dc6ea0ad8fa24270ef208e79bbeb52.jpg",
    "dob": "2020-12-26",
    "gender": "Male",
    "class": "LKG",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "Puneet Rao Bardhan",
        "motherName": "Rachana",
        "fatherMobile": "9410024562",
        "motherMobile": "9410024562",
        "fatherPhone": "9410024562",
        "motherPhone": "9410024562",
        "address": "Muhammadpur",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "Select Social Category",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 86,
        "percentage": 97.7
    },
    "feeSummary": {
        "tuitionDue": 11500,
        "transportDue11Months": 5500,
        "totalDue": 17000,
        "totalPaid": 7650,
        "balance": 9350
    },
    "transport": {
        "stoppage": "Muhammadpur",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 1"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0347"
},
{
    "id": "STU-2026-363",
    "sqlId": "363",
    "admissionNo": "567",
    "rollNo": "0",
    "name": "ADABIKA",
    "photo": "b2e7d8198d3e158c49da4d0934e77aa1.jpg",
    "dob": "-0001-11-30",
    "gender": "Male",
    "class": "UKG",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "PRADEEP KUMAR",
        "motherName": "PRITI DEVI",
        "fatherMobile": "9761965033",
        "motherMobile": "9761965033",
        "fatherPhone": "9761965033",
        "motherPhone": "9761965033",
        "address": "KALIYANPUR BHAGIRATHPUR, ALIGARH",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 87,
        "percentage": 98.9
    },
    "feeSummary": {
        "tuitionDue": 12500,
        "transportDue11Months": 5500,
        "totalDue": 18000,
        "totalPaid": 2700,
        "balance": 15300
    },
    "transport": {
        "stoppage": "KALIYANPUR BHAGIRATHPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 2"
    },
    "linkedSiblingIds": [
        "STU-2026-137"
    ],
    "familyId": "FAM-0135"
},
{
    "id": "STU-2026-364",
    "sqlId": "364",
    "admissionNo": "573",
    "rollNo": "0",
    "name": "ANAND KAUSHIK",
    "photo": "defualt.png",
    "dob": "2011-05-07",
    "gender": "Male",
    "class": "XI",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "JAY KISHOR KAUSHK",
        "motherName": "PREETI KAUSHIK",
        "fatherMobile": "7817826981",
        "motherMobile": "9759835049",
        "fatherPhone": "7817826981",
        "motherPhone": "9759835049",
        "address": "GAHTOLI NIRMAL, ATRAULI",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "General",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 82,
        "percentage": 93.2
    },
    "feeSummary": {
        "tuitionDue": 24000,
        "transportDue11Months": 5500,
        "totalDue": 29500,
        "totalPaid": 25075,
        "balance": 4425
    },
    "transport": {
        "stoppage": "GAHTOLI NIRMAL",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0351"
},
{
    "id": "STU-2026-365",
    "sqlId": "365",
    "admissionNo": "574",
    "rollNo": "0",
    "name": "NEERAJ YADAV",
    "photo": "defualt.png",
    "dob": "2010-03-02",
    "gender": "Male",
    "class": "XI",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "ATAR SINGH",
        "motherName": "SATYAVATI",
        "fatherMobile": "7819931714",
        "motherMobile": "7830070434",
        "fatherPhone": "7819931714",
        "motherPhone": "7830070434",
        "address": "GOKULPUR KHADAR, RAMGHAT",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 83,
        "percentage": 94.3
    },
    "feeSummary": {
        "tuitionDue": 24000,
        "transportDue11Months": 5500,
        "totalDue": 29500,
        "totalPaid": 13275,
        "balance": 16225
    },
    "transport": {
        "stoppage": "GOKULPUR KHADAR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0352"
},
{
    "id": "STU-2026-366",
    "sqlId": "366",
    "admissionNo": "575",
    "rollNo": "0",
    "name": "KUMARI NEHA",
    "photo": "defualt.png",
    "dob": "2010-04-08",
    "gender": "Female",
    "class": "XI",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "SAMMU SINGH",
        "motherName": "RAJANI DEVI",
        "fatherMobile": "8954140718",
        "motherMobile": "7990587602",
        "fatherPhone": "8954140718",
        "motherPhone": "7990587602",
        "address": "MUHAMMADPUR BADHERA, ATRAULI",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 84,
        "percentage": 95.5
    },
    "feeSummary": {
        "tuitionDue": 24000,
        "transportDue11Months": 5500,
        "totalDue": 29500,
        "totalPaid": 4425,
        "balance": 25075
    },
    "transport": {
        "stoppage": "MUHAMMADPUR BADHERA",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0353"
},
{
    "id": "STU-2026-367",
    "sqlId": "367",
    "admissionNo": "576",
    "rollNo": "0",
    "name": "VISHAKA SHARMA",
    "photo": "defualt.png",
    "dob": "2010-06-20",
    "gender": "Female",
    "class": "XI",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "AMIT KUMAR SHARMA",
        "motherName": "DURGESH SHARMA",
        "fatherMobile": "8395050888",
        "motherMobile": "8510822051",
        "fatherPhone": "8395050888",
        "motherPhone": "8510822051",
        "address": "JARGWAN BULANDSHAHR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "General",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 85,
        "percentage": 96.6
    },
    "feeSummary": {
        "tuitionDue": 24000,
        "transportDue11Months": 5500,
        "totalDue": 29500,
        "totalPaid": 25075,
        "balance": 4425
    },
    "transport": {
        "stoppage": "JARGWAN BULANDSHAHR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-644"
    ],
    "familyId": "FAM-0354"
},
{
    "id": "STU-2026-368",
    "sqlId": "368",
    "admissionNo": "577",
    "rollNo": "0",
    "name": "SACHIN RAGHAV",
    "photo": "defualt.png",
    "dob": "2011-12-01",
    "gender": "Male",
    "class": "IX",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "AVDHESH KUMAR",
        "motherName": "REKHA DEVI",
        "fatherMobile": "9528088979",
        "motherMobile": "9528088979",
        "fatherPhone": "9528088979",
        "motherPhone": "9528088979",
        "address": "HARVANSHPUR JIROLI",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "General",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 86,
        "percentage": 97.7
    },
    "feeSummary": {
        "tuitionDue": 19500,
        "transportDue11Months": 5500,
        "totalDue": 25000,
        "totalPaid": 11250,
        "balance": 13750
    },
    "transport": {
        "stoppage": "HARVANSHPUR JIROLI",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-015"
    ],
    "familyId": "FAM-0355"
},
{
    "id": "STU-2026-369",
    "sqlId": "369",
    "admissionNo": "578",
    "rollNo": "8",
    "name": "LUCKY KUMAR",
    "photo": "9611494c1dd1226575216bc18ec966e2.jpg",
    "dob": "2012-01-01",
    "gender": "Male",
    "class": "IX",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "GAJENDRA SINGH",
        "motherName": "BHAWANA DEVI",
        "fatherMobile": "9667164771",
        "motherMobile": "9958115857",
        "fatherPhone": "9667164771",
        "motherPhone": "9958115857",
        "address": "NAGLA KOTHI",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 87,
        "percentage": 98.9
    },
    "feeSummary": {
        "tuitionDue": 19500,
        "transportDue11Months": 5500,
        "totalDue": 25000,
        "totalPaid": 3750,
        "balance": 21250
    },
    "transport": {
        "stoppage": "NAGLA KOTHI",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0356"
},
{
    "id": "STU-2026-370",
    "sqlId": "370",
    "admissionNo": "579",
    "rollNo": "16",
    "name": "HARIKANT RAGHAV",
    "photo": "4af7fce07a3649c40c57b6b060a01a5c.jpg",
    "dob": "2012-11-26",
    "gender": "Male",
    "class": "VIII",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "CHARAN SINGH RAGHAV",
        "motherName": "MANJU DEVI",
        "fatherMobile": "7037176388",
        "motherMobile": "7037176388",
        "fatherPhone": "7037176388",
        "motherPhone": "7037176388",
        "address": "LOHGARH",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "THAKUR",
        "religion": "HINDU"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 82,
        "percentage": 93.2
    },
    "feeSummary": {
        "tuitionDue": 17000,
        "transportDue11Months": 5500,
        "totalDue": 22500,
        "totalPaid": 19125,
        "balance": 3375
    },
    "transport": {
        "stoppage": "LOHGARH",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0357"
},
{
    "id": "STU-2026-371",
    "sqlId": "371",
    "admissionNo": "580",
    "rollNo": "0",
    "name": "TOSHIV",
    "photo": "54c09bf46fe2e3f10ac16c5c9a089eaa.jpg",
    "dob": "2013-08-14",
    "gender": "Male",
    "class": "VIII",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "PURAN SINGH",
        "motherName": "KIRTI DEVI",
        "fatherMobile": "8954721951",
        "motherMobile": "8077769854",
        "fatherPhone": "8954721951",
        "motherPhone": "8077769854",
        "address": "VIJAY NAGALIYA",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "LODHI",
        "religion": "HINDU"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 83,
        "percentage": 94.3
    },
    "feeSummary": {
        "tuitionDue": 17000,
        "transportDue11Months": 5500,
        "totalDue": 22500,
        "totalPaid": 10125,
        "balance": 12375
    },
    "transport": {
        "stoppage": "VIJAY NAGALIYA",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0358"
},
{
    "id": "STU-2026-373",
    "sqlId": "373",
    "admissionNo": "582",
    "rollNo": "0",
    "name": "DEEPAK YADAV",
    "photo": "5ee791ee677c2c37cd855379d2586b89.jpg",
    "dob": "2018-09-24",
    "gender": "Male",
    "class": "I",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "LOKESH KUMAR",
        "motherName": "SHASHI",
        "fatherMobile": "9512129478",
        "motherMobile": "9512129478",
        "fatherPhone": "9512129478",
        "motherPhone": "9512129478",
        "address": "MOUNIPURA,RAMGHAT",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Select religion"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 84,
        "percentage": 95.5
    },
    "feeSummary": {
        "tuitionDue": 13500,
        "transportDue11Months": 5500,
        "totalDue": 19000,
        "totalPaid": 2850,
        "balance": 16150
    },
    "transport": {
        "stoppage": "MOUNIPURA",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 3"
    },
    "linkedSiblingIds": [
        "STU-2026-323"
    ],
    "familyId": "FAM-0312"
},
{
    "id": "STU-2026-374",
    "sqlId": "374",
    "admissionNo": "583",
    "rollNo": "136",
    "name": "ADITYA KUMAR",
    "photo": "b1da23f6731d9da726898d8b8a1d1604.jpg",
    "dob": "2016-12-01",
    "gender": "Male",
    "class": "II",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "MUKESH KUMAR",
        "motherName": "SHEELA",
        "fatherMobile": "7037019598",
        "motherMobile": "7088019598",
        "fatherPhone": "7037019598",
        "motherPhone": "7088019598",
        "address": "KALIYANPUR BHAGIRATHPUR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "Select Social Category",
        "religion": "Select religion"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 85,
        "percentage": 96.6
    },
    "feeSummary": {
        "tuitionDue": 14000,
        "transportDue11Months": 5500,
        "totalDue": 19500,
        "totalPaid": 16575,
        "balance": 2925
    },
    "transport": {
        "stoppage": "KALIYANPUR BHAGIRATHPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 2"
    },
    "linkedSiblingIds": [
        "STU-2026-177"
    ],
    "familyId": "FAM-0173"
},
{
    "id": "STU-2026-377",
    "sqlId": "377",
    "admissionNo": "586",
    "rollNo": "56",
    "name": "DESHBANDHU RAJPUT",
    "photo": "c16bb237dcc1f21068aa03bf88712acb.jpg",
    "dob": "2014-01-18",
    "gender": "Male",
    "class": "VII",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "KAPTAN SINGH",
        "motherName": "SHAKUNTALA DEVI",
        "fatherMobile": "7017663259",
        "motherMobile": "8859707753",
        "fatherPhone": "7017663259",
        "motherPhone": "8859707753",
        "address": "GANESHPUR,JIROULI",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 86,
        "percentage": 97.7
    },
    "feeSummary": {
        "tuitionDue": 16500,
        "transportDue11Months": 5500,
        "totalDue": 22000,
        "totalPaid": 9900,
        "balance": 12100
    },
    "transport": {
        "stoppage": "GANESHPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 2"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0364"
},
{
    "id": "STU-2026-378",
    "sqlId": "378",
    "admissionNo": "587",
    "rollNo": "26",
    "name": "DEEPESH KUMAR",
    "photo": "c05a1d28abf7491e75421fe26d3ca8a7.jpg",
    "dob": "2012-06-05",
    "gender": "Male",
    "class": "III",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "RAMESH CHANDRA",
        "motherName": "GEETA DEVI",
        "fatherMobile": "9780410377",
        "motherMobile": "9780410371",
        "fatherPhone": "9780410377",
        "motherPhone": "9780410371",
        "address": "KALIYANPUR BHAGIRATHPUR, ATRAULI ALIGARH",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 87,
        "percentage": 98.9
    },
    "feeSummary": {
        "tuitionDue": 14500,
        "transportDue11Months": 5500,
        "totalDue": 20000,
        "totalPaid": 3000,
        "balance": 17000
    },
    "transport": {
        "stoppage": "KALIYANPUR BHAGIRATHPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-069"
    ],
    "familyId": "FAM-0365"
},
{
    "id": "STU-2026-379",
    "sqlId": "379",
    "admissionNo": "588",
    "rollNo": "0",
    "name": "RACHANA",
    "photo": "52eb3ddd6a01c645f361418148b1eeee.jpg",
    "dob": "2018-09-12",
    "gender": "Male",
    "class": "I",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "YOGESH KUMAR",
        "motherName": "RAJKUMARI",
        "fatherMobile": "9456980663",
        "motherMobile": "8191973832",
        "fatherPhone": "9456980663",
        "motherPhone": "8191973832",
        "address": "NAGLA VIDHI, JARGWAN",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Select religion"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 82,
        "percentage": 93.2
    },
    "feeSummary": {
        "tuitionDue": 13500,
        "transportDue11Months": 5500,
        "totalDue": 19000,
        "totalPaid": 16150,
        "balance": 2850
    },
    "transport": {
        "stoppage": "NAGLA VIDHI",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0366"
},
{
    "id": "STU-2026-380",
    "sqlId": "380",
    "admissionNo": "589",
    "rollNo": "0",
    "name": "HIMANSHU",
    "photo": "23d98ca20e720c61a0a20555b23f53c5.jpg",
    "dob": "2019-05-12",
    "gender": "Male",
    "class": "I",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "SURENDRA SINGH",
        "motherName": "MANJU DEVI",
        "fatherMobile": "6395926626",
        "motherMobile": "9720577595",
        "fatherPhone": "6395926626",
        "motherPhone": "9720577595",
        "address": "PESARI",
        "occupation": "AGRICULTURAL",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 83,
        "percentage": 94.3
    },
    "feeSummary": {
        "tuitionDue": 13500,
        "transportDue11Months": 5500,
        "totalDue": 19000,
        "totalPaid": 8550,
        "balance": 10450
    },
    "transport": {
        "stoppage": "PESARI",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 5"
    },
    "linkedSiblingIds": [
        "STU-2026-559"
    ],
    "familyId": "FAM-0531"
},
{
    "id": "STU-2026-381",
    "sqlId": "381",
    "admissionNo": "592",
    "rollNo": "111",
    "name": "KHUSHI MEENA",
    "photo": "ddf5e39097af5c413e3449e666a6433d.jpg",
    "dob": "2015-12-24",
    "gender": "Female",
    "class": "V",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "RAHUL KUMAR",
        "motherName": "GEETA DEVI",
        "fatherMobile": "8006240034",
        "motherMobile": "8630030256",
        "fatherPhone": "8006240034",
        "motherPhone": "8630030256",
        "address": "JARGWAN DIBAI BULANDSHAHR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 84,
        "percentage": 95.5
    },
    "feeSummary": {
        "tuitionDue": 15500,
        "transportDue11Months": 5500,
        "totalDue": 21000,
        "totalPaid": 3150,
        "balance": 17850
    },
    "transport": {
        "stoppage": "JARGWAN DIBAI BULANDSHAHR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 3"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0368"
},
{
    "id": "STU-2026-382",
    "sqlId": "382",
    "admissionNo": "593",
    "rollNo": "208",
    "name": "HARSHIT KUMAR",
    "photo": "7faa8bd85c98e257f315aed8f1aa8a8a.jpg",
    "dob": "2015-05-20",
    "gender": "Male",
    "class": "II",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "PRADEEP KUMAR",
        "motherName": "POOJA DEVI",
        "fatherMobile": "9761722945",
        "motherMobile": "9761722945",
        "fatherPhone": "9761722945",
        "motherPhone": "9761722945",
        "address": "LOHGARH",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "SC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 85,
        "percentage": 96.6
    },
    "feeSummary": {
        "tuitionDue": 14000,
        "transportDue11Months": 5500,
        "totalDue": 19500,
        "totalPaid": 16575,
        "balance": 2925
    },
    "transport": {
        "stoppage": "LOHGARH",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 2"
    },
    "linkedSiblingIds": [
        "STU-2026-468"
    ],
    "familyId": "FAM-0369"
},
{
    "id": "STU-2026-383",
    "sqlId": "383",
    "admissionNo": "594",
    "rollNo": "0",
    "name": "AARUSH MITTAL",
    "photo": "b06e6a3af42c4cf3a859590b8469a18c.jpg",
    "dob": "2019-12-22",
    "gender": "Male",
    "class": "I",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "ANKUR MITTAL",
        "motherName": "PARUSHI MITTAL",
        "fatherMobile": "9917938383",
        "motherMobile": "9917938383",
        "fatherPhone": "9917938383",
        "motherPhone": "9917938383",
        "address": "RAMGHAT",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "Select Social Category",
        "religion": "Select religion"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 86,
        "percentage": 97.7
    },
    "feeSummary": {
        "tuitionDue": 13500,
        "transportDue11Months": 5500,
        "totalDue": 19000,
        "totalPaid": 8550,
        "balance": 10450
    },
    "transport": {
        "stoppage": "RAMGHAT",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 3"
    },
    "linkedSiblingIds": [
        "STU-2026-159"
    ],
    "familyId": "FAM-0157"
},
{
    "id": "STU-2026-384",
    "sqlId": "384",
    "admissionNo": "595",
    "rollNo": "216",
    "name": "NISHU TOMAR",
    "photo": "6d1a2d4aed022db7916ccbf9dacb0e10.jpg",
    "dob": "2018-08-28",
    "gender": "Male",
    "class": "II",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "VARUN PRATAP SINGH",
        "motherName": "MONIKA DEVI",
        "fatherMobile": "9958132063",
        "motherMobile": "8650791468",
        "fatherPhone": "9958132063",
        "motherPhone": "8650791468",
        "address": "MUHAMMADPUR BADHERA",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "Select Social Category",
        "religion": "Select religion"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 87,
        "percentage": 98.9
    },
    "feeSummary": {
        "tuitionDue": 14000,
        "transportDue11Months": 5500,
        "totalDue": 19500,
        "totalPaid": 2925,
        "balance": 16575
    },
    "transport": {
        "stoppage": "MUHAMMADPUR BADHERA",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-355"
    ],
    "familyId": "FAM-0342"
},
{
    "id": "STU-2026-385",
    "sqlId": "385",
    "admissionNo": "596",
    "rollNo": "64",
    "name": "MOHIT KUMAR",
    "photo": "c7c31a190959d77dbaabc057a4a6ce52.jpg",
    "dob": "2016-05-07",
    "gender": "Male",
    "class": "II",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "SHIV KUMAR",
        "motherName": "REENA DEVI",
        "fatherMobile": "9711124780",
        "motherMobile": "8700327645",
        "fatherPhone": "9711124780",
        "motherPhone": "8700327645",
        "address": "CHIRAURI",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Select religion"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 82,
        "percentage": 93.2
    },
    "feeSummary": {
        "tuitionDue": 14000,
        "transportDue11Months": 5500,
        "totalDue": 19500,
        "totalPaid": 16575,
        "balance": 2925
    },
    "transport": {
        "stoppage": "CHIRAURI",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 4"
    },
    "linkedSiblingIds": [
        "STU-2026-092"
    ],
    "familyId": "FAM-0372"
},
{
    "id": "STU-2026-386",
    "sqlId": "386",
    "admissionNo": "598",
    "rollNo": "95",
    "name": "YASH KUMAR",
    "photo": "24972a1612eaa6abb998d8bfc22cd736.jpg",
    "dob": "2015-11-15",
    "gender": "Male",
    "class": "II",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "BRAJESH KUMAR",
        "motherName": "MANJU DEVI",
        "fatherMobile": "8218893277",
        "motherMobile": "8218893277",
        "fatherPhone": "8218893277",
        "motherPhone": "8218893277",
        "address": "NAGLA CHIRAURI",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 83,
        "percentage": 94.3
    },
    "feeSummary": {
        "tuitionDue": 14000,
        "transportDue11Months": 5500,
        "totalDue": 19500,
        "totalPaid": 8775,
        "balance": 10725
    },
    "transport": {
        "stoppage": "NAGLA CHIRAURI",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-125"
    ],
    "familyId": "FAM-0373"
},
{
    "id": "STU-2026-388",
    "sqlId": "388",
    "admissionNo": "601",
    "rollNo": "107",
    "name": "DEESHU",
    "photo": "d429b33286f7fe266f48b1acd846d539.jpg",
    "dob": "2015-03-20",
    "gender": "Male",
    "class": "IV",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "ANIL KUMAR",
        "motherName": "PINKY",
        "fatherMobile": "9761825947",
        "motherMobile": "7248232379",
        "fatherPhone": "9761825947",
        "motherPhone": "7248232379",
        "address": "SILHARI RAMGHAT",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 84,
        "percentage": 95.5
    },
    "feeSummary": {
        "tuitionDue": 15000,
        "transportDue11Months": 5500,
        "totalDue": 20500,
        "totalPaid": 3075,
        "balance": 17425
    },
    "transport": {
        "stoppage": "SILHARI RAMGHAT",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-187"
    ],
    "familyId": "FAM-0183"
},
{
    "id": "STU-2026-391",
    "sqlId": "391",
    "admissionNo": "609",
    "rollNo": "115",
    "name": "MAYANK YADAV",
    "photo": "0b5409be12601d3c411d5cde5caa081a.jpg",
    "dob": "2015-06-17",
    "gender": "Male",
    "class": "V",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "UDAL SINGH",
        "motherName": "SEEMA DEVI",
        "fatherMobile": "9412129478",
        "motherMobile": "9458581178",
        "fatherPhone": "9412129478",
        "motherPhone": "9458581178",
        "address": "MOUNIPURA, RAMGHAT",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 85,
        "percentage": 96.6
    },
    "feeSummary": {
        "tuitionDue": 15500,
        "transportDue11Months": 5500,
        "totalDue": 21000,
        "totalPaid": 17850,
        "balance": 3150
    },
    "transport": {
        "stoppage": "MOUNIPURA",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 3"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0377"
},
{
    "id": "STU-2026-394",
    "sqlId": "394",
    "admissionNo": "615",
    "rollNo": "0",
    "name": "NISHANT KUMAR",
    "photo": "e1f2a4e7711b8783588fcd4b4fbbea55.jpg",
    "dob": "-0001-11-30",
    "gender": "Male",
    "class": "UKG",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "JAYPRAKASH",
        "motherName": "ARVESH DEVI",
        "fatherMobile": "9759358479",
        "motherMobile": "9758253316",
        "fatherPhone": "9759358479",
        "motherPhone": "9758253316",
        "address": "UNCHA GAON BANGAR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 86,
        "percentage": 97.7
    },
    "feeSummary": {
        "tuitionDue": 12500,
        "transportDue11Months": 5500,
        "totalDue": 18000,
        "totalPaid": 8100,
        "balance": 9900
    },
    "transport": {
        "stoppage": "UNCHA GAON BANGAR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 5"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0378"
},
{
    "id": "STU-2026-395",
    "sqlId": "395",
    "admissionNo": "616",
    "rollNo": "0",
    "name": "KRATIK KUMAR",
    "photo": "fdc89d0245a493b48dbf282dc9c1c12f.jpg",
    "dob": "2017-08-18",
    "gender": "Male",
    "class": "I",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "SANJEEV KUMAR",
        "motherName": "GEETA DEVI",
        "fatherMobile": "7310802948",
        "motherMobile": "9927070578",
        "fatherPhone": "7310802948",
        "motherPhone": "9927070578",
        "address": "UNCHA GAON BANGAR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "Select Social Category",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 87,
        "percentage": 98.9
    },
    "feeSummary": {
        "tuitionDue": 13500,
        "transportDue11Months": 5500,
        "totalDue": 19000,
        "totalPaid": 2850,
        "balance": 16150
    },
    "transport": {
        "stoppage": "UNCHA GAON BANGAR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 4"
    },
    "linkedSiblingIds": [
        "STU-2026-424"
    ],
    "familyId": "FAM-0379"
},
{
    "id": "STU-2026-396",
    "sqlId": "396",
    "admissionNo": "619",
    "rollNo": "20",
    "name": "MAYANK KUMAR",
    "photo": "9ba99ea3a64e7781bac61361ee653ffd.jpg",
    "dob": "2015-09-02",
    "gender": "Male",
    "class": "VIII",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "VIJENDRA SINGH",
        "motherName": "PINKI DEVI",
        "fatherMobile": "9528066204",
        "motherMobile": "9719300308",
        "fatherPhone": "9528066204",
        "motherPhone": "9719300308",
        "address": "NAGLA DHARKPUR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "HINDU"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 82,
        "percentage": 93.2
    },
    "feeSummary": {
        "tuitionDue": 17000,
        "transportDue11Months": 5500,
        "totalDue": 22500,
        "totalPaid": 19125,
        "balance": 3375
    },
    "transport": {
        "stoppage": "NAGLA DHARKPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 1"
    },
    "linkedSiblingIds": [
        "STU-2026-397"
    ],
    "familyId": "FAM-0380"
},
{
    "id": "STU-2026-397",
    "sqlId": "397",
    "admissionNo": "620",
    "rollNo": "20",
    "name": "LUCKY KUMAR",
    "photo": "68ef100f7c3a20e20de4b94b4998021a.jpg",
    "dob": "2018-09-26",
    "gender": "Male",
    "class": "III",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "VIJENDRA SINGH",
        "motherName": "PINKI DEVI",
        "fatherMobile": "9528066204",
        "motherMobile": "9719300308",
        "fatherPhone": "9528066204",
        "motherPhone": "9719300308",
        "address": "NAGLA DHARKPUR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "SC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 83,
        "percentage": 94.3
    },
    "feeSummary": {
        "tuitionDue": 14500,
        "transportDue11Months": 5500,
        "totalDue": 20000,
        "totalPaid": 9000,
        "balance": 11000
    },
    "transport": {
        "stoppage": "NAGLA DHARKPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-396"
    ],
    "familyId": "FAM-0380"
},
{
    "id": "STU-2026-398",
    "sqlId": "398",
    "admissionNo": "621",
    "rollNo": "0",
    "name": "RISHIKA CHAUHAN",
    "photo": "4812ad77199fb495692837a1f16a082b.jpg",
    "dob": "2021-01-23",
    "gender": "Male",
    "class": "UKG",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "SHISHANK CHAUHAN",
        "motherName": "RADHIKA CHAUHAN",
        "fatherMobile": "9039301307",
        "motherMobile": "8126256061",
        "fatherPhone": "9039301307",
        "motherPhone": "8126256061",
        "address": "CPS HOSPITAL, JIRAULI DHOOM SINGH",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "Select Social Category",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 84,
        "percentage": 95.5
    },
    "feeSummary": {
        "tuitionDue": 12500,
        "transportDue11Months": 5500,
        "totalDue": 18000,
        "totalPaid": 2700,
        "balance": 15300
    },
    "transport": {
        "stoppage": "CPS HOSPITAL",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0382"
},
{
    "id": "STU-2026-399",
    "sqlId": "399",
    "admissionNo": "622",
    "rollNo": "179",
    "name": "KANAK",
    "photo": "0557fc7d76ef7fddad2fb78512e25a8d.jpg",
    "dob": "2017-08-16",
    "gender": "Male",
    "class": "III",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "VIJAY KUMAR",
        "motherName": "VEENA",
        "fatherMobile": "9568011432",
        "motherMobile": "8865088876",
        "fatherPhone": "9568011432",
        "motherPhone": "8865088876",
        "address": "NAGLA KOTHI, JARGWAN",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 85,
        "percentage": 96.6
    },
    "feeSummary": {
        "tuitionDue": 14500,
        "transportDue11Months": 5500,
        "totalDue": 20000,
        "totalPaid": 17000,
        "balance": 3000
    },
    "transport": {
        "stoppage": "NAGLA KOTHI",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 3"
    },
    "linkedSiblingIds": [
        "STU-2026-404"
    ],
    "familyId": "FAM-0383"
},
{
    "id": "STU-2026-400",
    "sqlId": "400",
    "admissionNo": "625",
    "rollNo": "0",
    "name": "CHETAN",
    "photo": "294e93124f07fb6e3b0aae82790d8211.jpg",
    "dob": "2019-08-21",
    "gender": "Male",
    "class": "I",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "MANVIR",
        "motherName": "CHANDANI",
        "fatherMobile": "9720812673",
        "motherMobile": "9720812674",
        "fatherPhone": "9720812673",
        "motherPhone": "9720812674",
        "address": "MOUNIPURA, RAMGHAT",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 86,
        "percentage": 97.7
    },
    "feeSummary": {
        "tuitionDue": 13500,
        "transportDue11Months": 5500,
        "totalDue": 19000,
        "totalPaid": 8550,
        "balance": 10450
    },
    "transport": {
        "stoppage": "MOUNIPURA",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 3"
    },
    "linkedSiblingIds": [
        "STU-2026-121",
        "STU-2026-401"
    ],
    "familyId": "FAM-0384"
},
{
    "id": "STU-2026-401",
    "sqlId": "401",
    "admissionNo": "626",
    "rollNo": "0",
    "name": "MAHAK",
    "photo": "ccf40da662304e54ba311011d32d595e.jpg",
    "dob": "2021-10-03",
    "gender": "Male",
    "class": "LKG",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "MANVIR",
        "motherName": "CHANDANI",
        "fatherMobile": "9720812673",
        "motherMobile": "9720812674",
        "fatherPhone": "9720812673",
        "motherPhone": "9720812674",
        "address": "MOUNIPURA, RAMGHAT",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 87,
        "percentage": 98.9
    },
    "feeSummary": {
        "tuitionDue": 11500,
        "transportDue11Months": 5500,
        "totalDue": 17000,
        "totalPaid": 2550,
        "balance": 14450
    },
    "transport": {
        "stoppage": "MOUNIPURA",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 3"
    },
    "linkedSiblingIds": [
        "STU-2026-400"
    ],
    "familyId": "FAM-0384"
},
{
    "id": "STU-2026-404",
    "sqlId": "404",
    "admissionNo": "629",
    "rollNo": "0",
    "name": "MADHAV KUMAR",
    "photo": "e48daa248d30ddaa00f229a3d568ff5e.jpg",
    "dob": "2020-08-21",
    "gender": "Male",
    "class": "UKG",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "VIJAY KUMAR",
        "motherName": "VEENA",
        "fatherMobile": "9568011432",
        "motherMobile": "8865088876",
        "fatherPhone": "9568011432",
        "motherPhone": "8865088876",
        "address": "NAGLA KOTHI, JARGWAN",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 82,
        "percentage": 93.2
    },
    "feeSummary": {
        "tuitionDue": 12500,
        "transportDue11Months": 5500,
        "totalDue": 18000,
        "totalPaid": 15300,
        "balance": 2700
    },
    "transport": {
        "stoppage": "NAGLA KOTHI",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 3"
    },
    "linkedSiblingIds": [
        "STU-2026-399"
    ],
    "familyId": "FAM-0383"
},
{
    "id": "STU-2026-406",
    "sqlId": "406",
    "admissionNo": "631",
    "rollNo": "0",
    "name": "HIMANSHU KUMAR",
    "photo": "6d778dccb68f4ce7f207f81a83c73748.jpg",
    "dob": "2017-01-01",
    "gender": "Male",
    "class": "I",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "GUDDU YADAV",
        "motherName": "ANITA DEVI",
        "fatherMobile": "9958561197",
        "motherMobile": "8696229622",
        "fatherPhone": "9958561197",
        "motherPhone": "8696229622",
        "address": "MONIPURA, RAMGHAT",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 83,
        "percentage": 94.3
    },
    "feeSummary": {
        "tuitionDue": 13500,
        "transportDue11Months": 5500,
        "totalDue": 19000,
        "totalPaid": 8550,
        "balance": 10450
    },
    "transport": {
        "stoppage": "MONIPURA",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 3"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0387"
},
{
    "id": "STU-2026-407",
    "sqlId": "407",
    "admissionNo": "633",
    "rollNo": "0",
    "name": "MAYANK KUMAR",
    "photo": "2bd748c7fb2d1daf15e17dae27ff3ad6.jpg",
    "dob": "2019-03-20",
    "gender": "Male",
    "class": "I",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "RAVI KUMAR",
        "motherName": "REENA DEVI",
        "fatherMobile": "8192863063",
        "motherMobile": "8882567831",
        "fatherPhone": "8192863063",
        "motherPhone": "8882567831",
        "address": "UNCHA GAON BANGAR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 84,
        "percentage": 95.5
    },
    "feeSummary": {
        "tuitionDue": 13500,
        "transportDue11Months": 5500,
        "totalDue": 19000,
        "totalPaid": 2850,
        "balance": 16150
    },
    "transport": {
        "stoppage": "UNCHA GAON BANGAR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 5"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0388"
},
{
    "id": "STU-2026-408",
    "sqlId": "408",
    "admissionNo": "634",
    "rollNo": "0",
    "name": "BHAVYA MITTAL",
    "photo": "00d6b14d465e7374958625d15e360587.jpg",
    "dob": "2020-01-22",
    "gender": "Male",
    "class": "I",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "VASANT MITTAL",
        "motherName": "MANISHA RANI",
        "fatherMobile": "9105470874",
        "motherMobile": "9536708474",
        "fatherPhone": "9105470874",
        "motherPhone": "9536708474",
        "address": "RAMGHAT, DEBAI",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "Select Social Category",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 85,
        "percentage": 96.6
    },
    "feeSummary": {
        "tuitionDue": 13500,
        "transportDue11Months": 5500,
        "totalDue": 19000,
        "totalPaid": 16150,
        "balance": 2850
    },
    "transport": {
        "stoppage": "RAMGHAT",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 3"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0389"
},
{
    "id": "STU-2026-410",
    "sqlId": "410",
    "admissionNo": "637",
    "rollNo": "0",
    "name": "DIVYANSHI",
    "photo": "edff2df8993ce5aee806f9eb50b3f466.jpg",
    "dob": "2021-06-26",
    "gender": "Male",
    "class": "UKG",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "AJAY KUMAR",
        "motherName": "NEERU DEVI",
        "fatherMobile": "9758962135",
        "motherMobile": "9759262366",
        "fatherPhone": "9758962135",
        "motherPhone": "9759262366",
        "address": "KALIYANPUR BHAGIRATHPUR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 86,
        "percentage": 97.7
    },
    "feeSummary": {
        "tuitionDue": 12500,
        "transportDue11Months": 5500,
        "totalDue": 18000,
        "totalPaid": 8100,
        "balance": 9900
    },
    "transport": {
        "stoppage": "KALIYANPUR BHAGIRATHPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 2"
    },
    "linkedSiblingIds": [
        "STU-2026-143"
    ],
    "familyId": "FAM-0141"
},
{
    "id": "STU-2026-411",
    "sqlId": "411",
    "admissionNo": "638",
    "rollNo": "0",
    "name": "RITIK",
    "photo": "4db0ed95f2b7c5221b943b2aba8cf3a0.jpg",
    "dob": "2018-06-06",
    "gender": "Male",
    "class": "I",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "NARESH KUMAR",
        "motherName": "ANEETA",
        "fatherMobile": "9368888254",
        "motherMobile": "7217732095",
        "fatherPhone": "9368888254",
        "motherPhone": "7217732095",
        "address": "UNCHA GAON BANGAR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 87,
        "percentage": 98.9
    },
    "feeSummary": {
        "tuitionDue": 13500,
        "transportDue11Months": 5500,
        "totalDue": 19000,
        "totalPaid": 2850,
        "balance": 16150
    },
    "transport": {
        "stoppage": "UNCHA GAON BANGAR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 5"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0392"
},
{
    "id": "STU-2026-412",
    "sqlId": "412",
    "admissionNo": "640",
    "rollNo": "0",
    "name": "KRISHNA KUMAR",
    "photo": "bc3071a142252cdeca8995cf2891e6d4.jpg",
    "dob": "2019-02-12",
    "gender": "Male",
    "class": "I",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "BANTI KUMAR",
        "motherName": "MEERA DEVI",
        "fatherMobile": "7252826099",
        "motherMobile": "9996631761",
        "fatherPhone": "7252826099",
        "motherPhone": "9996631761",
        "address": "KALIYANPUR BHAGIRATHPUR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 82,
        "percentage": 93.2
    },
    "feeSummary": {
        "tuitionDue": 13500,
        "transportDue11Months": 5500,
        "totalDue": 19000,
        "totalPaid": 16150,
        "balance": 2850
    },
    "transport": {
        "stoppage": "KALIYANPUR BHAGIRATHPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-074",
        "STU-2026-413"
    ],
    "familyId": "FAM-0072"
},
{
    "id": "STU-2026-413",
    "sqlId": "413",
    "admissionNo": "641",
    "rollNo": "30",
    "name": "NEERAJ",
    "photo": "05e3eea3dce2a20752048dee17bf871b.jpg",
    "dob": "2013-12-31",
    "gender": "Male",
    "class": "III",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "BANTI KUMAR",
        "motherName": "MEERA DEVI",
        "fatherMobile": "7252826099",
        "motherMobile": "9996631761",
        "fatherPhone": "7252826099",
        "motherPhone": "9996631761",
        "address": "KALIYANPUR BHAGIRATHPUR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 83,
        "percentage": 94.3
    },
    "feeSummary": {
        "tuitionDue": 14500,
        "transportDue11Months": 5500,
        "totalDue": 20000,
        "totalPaid": 9000,
        "balance": 11000
    },
    "transport": {
        "stoppage": "KALIYANPUR BHAGIRATHPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 2"
    },
    "linkedSiblingIds": [
        "STU-2026-074",
        "STU-2026-412"
    ],
    "familyId": "FAM-0072"
},
{
    "id": "STU-2026-414",
    "sqlId": "414",
    "admissionNo": "643",
    "rollNo": "193",
    "name": "TINKU KUMAR",
    "photo": "4386d7c604ebfbe7c4899c8e177ba1d5.jpg",
    "dob": "2013-12-17",
    "gender": "Male",
    "class": "III",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "BHOORE SINGH",
        "motherName": "PREMVATI DEVI",
        "fatherMobile": "9720166370",
        "motherMobile": "8882516472",
        "fatherPhone": "9720166370",
        "motherPhone": "8882516472",
        "address": "UNCHA GAON BANGAR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 84,
        "percentage": 95.5
    },
    "feeSummary": {
        "tuitionDue": 14500,
        "transportDue11Months": 5500,
        "totalDue": 20000,
        "totalPaid": 3000,
        "balance": 17000
    },
    "transport": {
        "stoppage": "UNCHA GAON BANGAR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 4"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0394"
},
{
    "id": "STU-2026-415",
    "sqlId": "415",
    "admissionNo": "644",
    "rollNo": "220",
    "name": "PRASHANT BAGHEL",
    "photo": "a49fc86525ed376f440db59f4238aa15.jpg",
    "dob": "2018-03-02",
    "gender": "Male",
    "class": "II",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "PRAMOD KUMAR",
        "motherName": "MANJU DEVI",
        "fatherMobile": "9528547320",
        "motherMobile": "9536540758",
        "fatherPhone": "9528547320",
        "motherPhone": "9536540758",
        "address": "DADHAR ALUPURA, NARUPURA",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 85,
        "percentage": 96.6
    },
    "feeSummary": {
        "tuitionDue": 14000,
        "transportDue11Months": 5500,
        "totalDue": 19500,
        "totalPaid": 16575,
        "balance": 2925
    },
    "transport": {
        "stoppage": "DADHAR ALUPURA",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 2"
    },
    "linkedSiblingIds": [
        "STU-2026-174"
    ],
    "familyId": "FAM-0395"
},
{
    "id": "STU-2026-417",
    "sqlId": "417",
    "admissionNo": "647",
    "rollNo": "188",
    "name": "RASHMI",
    "photo": "0a0bc8eb8815e28014c60b2d44df5a1c.jpg",
    "dob": "2016-08-22",
    "gender": "Female",
    "class": "III",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "MUKESH KUMAR",
        "motherName": "SHEELA DEVI",
        "fatherMobile": "9354184290",
        "motherMobile": "8851938563",
        "fatherPhone": "9354184290",
        "motherPhone": "8851938563",
        "address": "GANESHPUR GOVINDPUR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 86,
        "percentage": 97.7
    },
    "feeSummary": {
        "tuitionDue": 14500,
        "transportDue11Months": 5500,
        "totalDue": 20000,
        "totalPaid": 9000,
        "balance": 11000
    },
    "transport": {
        "stoppage": "GANESHPUR GOVINDPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 2"
    },
    "linkedSiblingIds": [
        "STU-2026-418"
    ],
    "familyId": "FAM-0397"
},
{
    "id": "STU-2026-418",
    "sqlId": "418",
    "admissionNo": "648",
    "rollNo": "0",
    "name": "BHOOMI",
    "photo": "064b3c95aa23c5638b5a821d994d952a.jpg",
    "dob": "2019-01-05",
    "gender": "Male",
    "class": "UKG",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "MUKESH KUMAR",
        "motherName": "SHEELA DEVI",
        "fatherMobile": "9354184290",
        "motherMobile": "8851938563",
        "fatherPhone": "9354184290",
        "motherPhone": "8851938563",
        "address": "GANESHPUR GOVINDPUR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 87,
        "percentage": 98.9
    },
    "feeSummary": {
        "tuitionDue": 12500,
        "transportDue11Months": 5500,
        "totalDue": 18000,
        "totalPaid": 2700,
        "balance": 15300
    },
    "transport": {
        "stoppage": "GANESHPUR GOVINDPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 2"
    },
    "linkedSiblingIds": [
        "STU-2026-417"
    ],
    "familyId": "FAM-0397"
},
{
    "id": "STU-2026-419",
    "sqlId": "419",
    "admissionNo": "649",
    "rollNo": "0",
    "name": "YASH",
    "photo": "4d0ab07fe89df385f856c8496b4cb39d.jpg",
    "dob": "2020-02-14",
    "gender": "Male",
    "class": "UKG",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "MONU",
        "motherName": "PUSHPA",
        "fatherMobile": "8475858618",
        "motherMobile": "9193133623",
        "fatherPhone": "8475858618",
        "motherPhone": "9193133623",
        "address": "JARGWAN",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 82,
        "percentage": 93.2
    },
    "feeSummary": {
        "tuitionDue": 12500,
        "transportDue11Months": 5500,
        "totalDue": 18000,
        "totalPaid": 15300,
        "balance": 2700
    },
    "transport": {
        "stoppage": "JARGWAN",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 3"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0398"
},
{
    "id": "STU-2026-420",
    "sqlId": "420",
    "admissionNo": "650",
    "rollNo": "0",
    "name": "GUNGUN",
    "photo": "9637a82a7777ea7bd45132ccd75e4e5e.jpg",
    "dob": "2011-06-07",
    "gender": "Female",
    "class": "X",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "SATISH CHANDRA",
        "motherName": "ASHA",
        "fatherMobile": "6395168401",
        "motherMobile": "9627770462",
        "fatherPhone": "6395168401",
        "motherPhone": "9627770462",
        "address": "KALIYANPUR BHAGIRATHPUR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 83,
        "percentage": 94.3
    },
    "feeSummary": {
        "tuitionDue": 21000,
        "transportDue11Months": 5500,
        "totalDue": 26500,
        "totalPaid": 11925,
        "balance": 14575
    },
    "transport": {
        "stoppage": "KALIYANPUR BHAGIRATHPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0399"
},
{
    "id": "STU-2026-421",
    "sqlId": "421",
    "admissionNo": "651",
    "rollNo": "0",
    "name": "KUNAL YADAV",
    "photo": "d1fddde40c2ff2dae8d54651e09c2a9f.jpg",
    "dob": "2017-12-10",
    "gender": "Male",
    "class": "I",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "KAPTAN SINGH",
        "motherName": "SHANTI DEVI",
        "fatherMobile": "7409658983",
        "motherMobile": "7464958983",
        "fatherPhone": "7409658983",
        "motherPhone": "7464958983",
        "address": "UNCHA GAON BANGAR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 84,
        "percentage": 95.5
    },
    "feeSummary": {
        "tuitionDue": 13500,
        "transportDue11Months": 5500,
        "totalDue": 19000,
        "totalPaid": 2850,
        "balance": 16150
    },
    "transport": {
        "stoppage": "UNCHA GAON BANGAR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 5"
    },
    "linkedSiblingIds": [
        "STU-2026-270"
    ],
    "familyId": "FAM-0400"
},
{
    "id": "STU-2026-422",
    "sqlId": "422",
    "admissionNo": "652",
    "rollNo": "144",
    "name": "HIMANSHU KUMAR",
    "photo": "244ed487e513a602f7e7ffa5a496087e.jpg",
    "dob": "2013-01-01",
    "gender": "Male",
    "class": "IV",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "NATTHU SINGH",
        "motherName": "SARSWATI DEVI",
        "fatherMobile": "9761258549",
        "motherMobile": "9528501470",
        "fatherPhone": "9761258549",
        "motherPhone": "9528501470",
        "address": "GOKULPUR KHADAR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 85,
        "percentage": 96.6
    },
    "feeSummary": {
        "tuitionDue": 15000,
        "transportDue11Months": 5500,
        "totalDue": 20500,
        "totalPaid": 17425,
        "balance": 3075
    },
    "transport": {
        "stoppage": "GOKULPUR KHADAR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0401"
},
{
    "id": "STU-2026-423",
    "sqlId": "423",
    "admissionNo": "653",
    "rollNo": "1",
    "name": "DIPANSHU",
    "photo": "040d40f1f1bc382a09cfba224cfe85ba.jpg",
    "dob": "2012-06-12",
    "gender": "Male",
    "class": "IX",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "KRIPAL SINGH",
        "motherName": "SAPNA DEVI",
        "fatherMobile": "9625213808",
        "motherMobile": "8859885387",
        "fatherPhone": "9625213808",
        "motherPhone": "8859885387",
        "address": "NAGLA GARVI, JARGWAN",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "LODHI",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 86,
        "percentage": 97.7
    },
    "feeSummary": {
        "tuitionDue": 19500,
        "transportDue11Months": 5500,
        "totalDue": 25000,
        "totalPaid": 11250,
        "balance": 13750
    },
    "transport": {
        "stoppage": "NAGLA GARVI",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-243"
    ],
    "familyId": "FAM-0402"
},
{
    "id": "STU-2026-424",
    "sqlId": "424",
    "admissionNo": "654",
    "rollNo": "225",
    "name": "SANDHYA",
    "photo": "cc18e7cfca62bcb98e525f6e8e4435ee.jpg",
    "dob": "2014-12-07",
    "gender": "Male",
    "class": "II",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "SANJEEV KUMAR",
        "motherName": "GEETA DEVI",
        "fatherMobile": "7310802948",
        "motherMobile": "9927070578",
        "fatherPhone": "7310802948",
        "motherPhone": "9927070578",
        "address": "UNCHA GAON BANGAR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "Select Social Category",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 87,
        "percentage": 98.9
    },
    "feeSummary": {
        "tuitionDue": 14000,
        "transportDue11Months": 5500,
        "totalDue": 19500,
        "totalPaid": 2925,
        "balance": 16575
    },
    "transport": {
        "stoppage": "UNCHA GAON BANGAR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 4"
    },
    "linkedSiblingIds": [
        "STU-2026-395"
    ],
    "familyId": "FAM-0379"
},
{
    "id": "STU-2026-426",
    "sqlId": "426",
    "admissionNo": "657",
    "rollNo": "0",
    "name": "PARV RAGHAV",
    "photo": "bfff0cce02ea0dda040cbc0cf2fd7042.jpg",
    "dob": "2021-07-20",
    "gender": "Male",
    "class": "UKG",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "MOHIT RAGHAV",
        "motherName": "SWATI RAGHAV",
        "fatherMobile": "7417956314",
        "motherMobile": "7417956314",
        "fatherPhone": "7417956314",
        "motherPhone": "7417956314",
        "address": "LOHGARH,ATRAULI,ALIGARH",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "Select Social Category",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 82,
        "percentage": 93.2
    },
    "feeSummary": {
        "tuitionDue": 12500,
        "transportDue11Months": 5500,
        "totalDue": 18000,
        "totalPaid": 15300,
        "balance": 2700
    },
    "transport": {
        "stoppage": "LOHGARH",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-435"
    ],
    "familyId": "FAM-0404"
},
{
    "id": "STU-2026-427",
    "sqlId": "427",
    "admissionNo": "659",
    "rollNo": "0",
    "name": "DEEKSHA YADAV",
    "photo": "776befbaceb451e73a4df505427cc44f.jpg",
    "dob": "0001-01-01",
    "gender": "Male",
    "class": "I",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "VEERESH KUMAR",
        "motherName": "SARVESH DEVI",
        "fatherMobile": "9058690405",
        "motherMobile": "9058690405",
        "fatherPhone": "9058690405",
        "motherPhone": "9058690405",
        "address": "JARGWAN,DIBAI (BULANDSHAHR)",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 83,
        "percentage": 94.3
    },
    "feeSummary": {
        "tuitionDue": 13500,
        "transportDue11Months": 5500,
        "totalDue": 19000,
        "totalPaid": 8550,
        "balance": 10450
    },
    "transport": {
        "stoppage": "JARGWAN",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0405"
},
{
    "id": "STU-2026-428",
    "sqlId": "428",
    "admissionNo": "661",
    "rollNo": "249",
    "name": "MANIK BISWAS",
    "photo": "defualt.png",
    "dob": "2017-09-19",
    "gender": "Male",
    "class": "II",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "DILIP KUMAR BISWAS",
        "motherName": "SHUKLA BISWAS",
        "fatherMobile": "9719060403",
        "motherMobile": "9719060403",
        "fatherPhone": "9719060403",
        "motherPhone": "9719060403",
        "address": "RAMGHAT BANGAR DEBAI [BSR]",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "Select Social Category",
        "religion": "Select religion"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 84,
        "percentage": 95.5
    },
    "feeSummary": {
        "tuitionDue": 14000,
        "transportDue11Months": 5500,
        "totalDue": 19500,
        "totalPaid": 2925,
        "balance": 16575
    },
    "transport": {
        "stoppage": "RAMGHAT BANGAR DEBAI [BSR]",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 5"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0406"
},
{
    "id": "STU-2026-429",
    "sqlId": "429",
    "admissionNo": "663",
    "rollNo": "0",
    "name": "DOLLY RAJPUT",
    "photo": "0b224b62c4bacb4e46ac075f1078a4a9.jpg",
    "dob": "-0001-11-30",
    "gender": "Male",
    "class": "NURSERY",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "VIJENDRA KUMAR",
        "motherName": "VIMLESH DEVI",
        "fatherMobile": "8433255571",
        "motherMobile": "8433255571",
        "fatherPhone": "8433255571",
        "motherPhone": "8433255571",
        "address": "NAGLA KOTHI JARGWAN BULANDSHAHR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 85,
        "percentage": 96.6
    },
    "feeSummary": {
        "tuitionDue": 10500,
        "transportDue11Months": 5500,
        "totalDue": 16000,
        "totalPaid": 13600,
        "balance": 2400
    },
    "transport": {
        "stoppage": "NAGLA KOTHI JARGWAN BULANDSHAHR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0407"
},
{
    "id": "STU-2026-430",
    "sqlId": "430",
    "admissionNo": "664",
    "rollNo": "0",
    "name": "YUVRAJ KUMAR LODHI",
    "photo": "2600f32dbd782dd54e0425b47afe399f.jpg",
    "dob": "-0001-11-30",
    "gender": "Male",
    "class": "LKG",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "RAKESH KUMAR",
        "motherName": "NEERU VERMA",
        "fatherMobile": "9627722404",
        "motherMobile": "9627722404",
        "fatherPhone": "9627722404",
        "motherPhone": "9627722404",
        "address": "MUHAMMADPUR BADHERA",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "Select Social Category",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 86,
        "percentage": 97.7
    },
    "feeSummary": {
        "tuitionDue": 11500,
        "transportDue11Months": 5500,
        "totalDue": 17000,
        "totalPaid": 7650,
        "balance": 9350
    },
    "transport": {
        "stoppage": "MUHAMMADPUR BADHERA",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-026",
        "STU-2026-305"
    ],
    "familyId": "FAM-0408"
},
{
    "id": "STU-2026-431",
    "sqlId": "431",
    "admissionNo": "665",
    "rollNo": "0",
    "name": "KUMARI PRAGATI",
    "photo": "5061fd8ffd158ce92bbb33fe56e852f0.jpg",
    "dob": "2021-03-10",
    "gender": "Male",
    "class": "LKG",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "ATUL KUMAR",
        "motherName": "KANCHAN DEVI",
        "fatherMobile": "9675938712",
        "motherMobile": "8375939398",
        "fatherPhone": "9675938712",
        "motherPhone": "8375939398",
        "address": "MUHAMMADPUR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "Select Social Category",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 87,
        "percentage": 98.9
    },
    "feeSummary": {
        "tuitionDue": 11500,
        "transportDue11Months": 5500,
        "totalDue": 17000,
        "totalPaid": 2550,
        "balance": 14450
    },
    "transport": {
        "stoppage": "MUHAMMADPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-264"
    ],
    "familyId": "FAM-0409"
},
{
    "id": "STU-2026-432",
    "sqlId": "432",
    "admissionNo": "666",
    "rollNo": "0",
    "name": "TANISHKA",
    "photo": "dd19829185405be7862bff1913ed3acb.jpg",
    "dob": "2022-04-18",
    "gender": "Male",
    "class": "LKG",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "DEV DATT",
        "motherName": "PUSHPA",
        "fatherMobile": "7817831909",
        "motherMobile": "8006118462",
        "fatherPhone": "7817831909",
        "motherPhone": "8006118462",
        "address": "NAGLA DHARAKPUR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 82,
        "percentage": 93.2
    },
    "feeSummary": {
        "tuitionDue": 11500,
        "transportDue11Months": 5500,
        "totalDue": 17000,
        "totalPaid": 14450,
        "balance": 2550
    },
    "transport": {
        "stoppage": "NAGLA DHARAKPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 1"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0410"
},
{
    "id": "STU-2026-435",
    "sqlId": "435",
    "admissionNo": "669",
    "rollNo": "0",
    "name": "SARTHAK RAGHAV",
    "photo": "3f17f7dd1979fd0183fd29496df65d6e.jpg",
    "dob": "2022-07-28",
    "gender": "Male",
    "class": "LKG",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "ANUJ RAGHAV",
        "motherName": "SHWETA RAGHAV",
        "fatherMobile": "9037412093",
        "motherMobile": "8395019675",
        "fatherPhone": "9037412093",
        "motherPhone": "8395019675",
        "address": "LOHGARH",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "Select Social Category",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 83,
        "percentage": 94.3
    },
    "feeSummary": {
        "tuitionDue": 11500,
        "transportDue11Months": 5500,
        "totalDue": 17000,
        "totalPaid": 7650,
        "balance": 9350
    },
    "transport": {
        "stoppage": "LOHGARH",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-426"
    ],
    "familyId": "FAM-0413"
},
{
    "id": "STU-2026-436",
    "sqlId": "436",
    "admissionNo": "670",
    "rollNo": "0",
    "name": "TANU",
    "photo": "c579e631f862b19c619a6ba50236008d.jpg",
    "dob": "-0001-11-30",
    "gender": "Male",
    "class": "LKG",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "SANJAY KUMAR",
        "motherName": "SEEMA",
        "fatherMobile": "86504505705",
        "motherMobile": "9870743850",
        "fatherPhone": "86504505705",
        "motherPhone": "9870743850",
        "address": "KALIYANPUR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 84,
        "percentage": 95.5
    },
    "feeSummary": {
        "tuitionDue": 11500,
        "transportDue11Months": 5500,
        "totalDue": 17000,
        "totalPaid": 2550,
        "balance": 14450
    },
    "transport": {
        "stoppage": "KALIYANPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 2"
    },
    "linkedSiblingIds": [
        "STU-2026-172"
    ],
    "familyId": "FAM-0414"
},
{
    "id": "STU-2026-437",
    "sqlId": "437",
    "admissionNo": "671",
    "rollNo": "0",
    "name": "KANAK",
    "photo": "defualt.png",
    "dob": "2020-08-02",
    "gender": "Male",
    "class": "LKG",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "MADHAV SINGH",
        "motherName": "PREMVATI",
        "fatherMobile": "38882764231",
        "motherMobile": "9720877612",
        "fatherPhone": "38882764231",
        "motherPhone": "9720877612",
        "address": "GANGAGARH",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 85,
        "percentage": 96.6
    },
    "feeSummary": {
        "tuitionDue": 11500,
        "transportDue11Months": 5500,
        "totalDue": 17000,
        "totalPaid": 14450,
        "balance": 2550
    },
    "transport": {
        "stoppage": "GANGAGARH",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 3"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0415"
},
{
    "id": "STU-2026-438",
    "sqlId": "438",
    "admissionNo": "672",
    "rollNo": "0",
    "name": "NIDHI",
    "photo": "97cbf8a6365d679cedbb8bbd8a1b1a5d.jpg",
    "dob": "2019-05-26",
    "gender": "Male",
    "class": "LKG",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "MAHESHPAL SINGH",
        "motherName": "NEERAJ DEVI",
        "fatherMobile": "9758509524",
        "motherMobile": "9758509524",
        "fatherPhone": "9758509524",
        "motherPhone": "9758509524",
        "address": "GANGAGARH",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 86,
        "percentage": 97.7
    },
    "feeSummary": {
        "tuitionDue": 11500,
        "transportDue11Months": 5500,
        "totalDue": 17000,
        "totalPaid": 7650,
        "balance": 9350
    },
    "transport": {
        "stoppage": "GANGAGARH",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 3"
    },
    "linkedSiblingIds": [
        "STU-2026-257"
    ],
    "familyId": "FAM-0416"
},
{
    "id": "STU-2026-440",
    "sqlId": "440",
    "admissionNo": "674",
    "rollNo": "210",
    "name": "KANISHKA",
    "photo": "054ca2362164ad232c5e35bb847b3212.jpg",
    "dob": "2018-09-06",
    "gender": "Male",
    "class": "II",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "GANGAPRASAD",
        "motherName": "DURGESH DEVI",
        "fatherMobile": "7906288160",
        "motherMobile": "7906288160",
        "fatherPhone": "7906288160",
        "motherPhone": "7906288160",
        "address": "GANGAGARH",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 87,
        "percentage": 98.9
    },
    "feeSummary": {
        "tuitionDue": 14000,
        "transportDue11Months": 5500,
        "totalDue": 19500,
        "totalPaid": 2925,
        "balance": 16575
    },
    "transport": {
        "stoppage": "GANGAGARH",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 3"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0418"
},
{
    "id": "STU-2026-441",
    "sqlId": "441",
    "admissionNo": "675",
    "rollNo": "0",
    "name": "RADHIKA",
    "photo": "defualt.png",
    "dob": "2018-11-10",
    "gender": "Female",
    "class": "II",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "AJAY KUMAR",
        "motherName": "SARVESH DEVI",
        "fatherMobile": "8057924967",
        "motherMobile": "8057924967",
        "fatherPhone": "8057924967",
        "motherPhone": "8057924967",
        "address": "MOUNIPURA",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 82,
        "percentage": 93.2
    },
    "feeSummary": {
        "tuitionDue": 14000,
        "transportDue11Months": 5500,
        "totalDue": 19500,
        "totalPaid": 16575,
        "balance": 2925
    },
    "transport": {
        "stoppage": "MOUNIPURA",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 3"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0419"
},
{
    "id": "STU-2026-442",
    "sqlId": "442",
    "admissionNo": "676",
    "rollNo": "0",
    "name": "MAYANK KUMAR",
    "photo": "48c37d574abe4eba8d9f1c97b1a5f9f1.jpg",
    "dob": "2019-10-25",
    "gender": "Male",
    "class": "LKG",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "PRAVEEN KUMAR",
        "motherName": "ARTI DEVI",
        "fatherMobile": "7618543732",
        "motherMobile": "8750832158",
        "fatherPhone": "7618543732",
        "motherPhone": "8750832158",
        "address": "MOUNIPURA",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 83,
        "percentage": 94.3
    },
    "feeSummary": {
        "tuitionDue": 11500,
        "transportDue11Months": 5500,
        "totalDue": 17000,
        "totalPaid": 7650,
        "balance": 9350
    },
    "transport": {
        "stoppage": "MOUNIPURA",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 3"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0420"
},
{
    "id": "STU-2026-443",
    "sqlId": "443",
    "admissionNo": "678",
    "rollNo": "0",
    "name": "LAKSHYA RAJPUT",
    "photo": "7df1c76316ea18a29d3b2156f8820589.jpg",
    "dob": "-0001-11-30",
    "gender": "Male",
    "class": "UKG",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "JITENDRA KUMAR",
        "motherName": "SHALINI KUMARI",
        "fatherMobile": "9520103310",
        "motherMobile": "8433255571",
        "fatherPhone": "9520103310",
        "motherPhone": "8433255571",
        "address": "NAGLA KOTHI",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 84,
        "percentage": 95.5
    },
    "feeSummary": {
        "tuitionDue": 12500,
        "transportDue11Months": 5500,
        "totalDue": 18000,
        "totalPaid": 2700,
        "balance": 15300
    },
    "transport": {
        "stoppage": "NAGLA KOTHI",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0421"
},
{
    "id": "STU-2026-444",
    "sqlId": "444",
    "admissionNo": "679",
    "rollNo": "0",
    "name": "ARCHANA",
    "photo": "95fe3b5acda43490433e86736cf82d1b.jpg",
    "dob": "2020-10-10",
    "gender": "Male",
    "class": "LKG",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "KIRANPAL",
        "motherName": "MEENA DEVI",
        "fatherMobile": "9456675112",
        "motherMobile": "9719337718",
        "fatherPhone": "9456675112",
        "motherPhone": "9719337718",
        "address": "GANGAGARH",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 85,
        "percentage": 96.6
    },
    "feeSummary": {
        "tuitionDue": 11500,
        "transportDue11Months": 5500,
        "totalDue": 17000,
        "totalPaid": 14450,
        "balance": 2550
    },
    "transport": {
        "stoppage": "GANGAGARH",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 3"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0422"
},
{
    "id": "STU-2026-445",
    "sqlId": "445",
    "admissionNo": "680",
    "rollNo": "0",
    "name": "HIMANSHU",
    "photo": "787ac9f06a0dfd0680ef978f691887a5.jpg",
    "dob": "2020-07-20",
    "gender": "Male",
    "class": "LKG",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "DEVENDRA KUMAR",
        "motherName": "URMILA",
        "fatherMobile": "9675311665",
        "motherMobile": "8533908723",
        "fatherPhone": "9675311665",
        "motherPhone": "8533908723",
        "address": "JARGWAN",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 86,
        "percentage": 97.7
    },
    "feeSummary": {
        "tuitionDue": 11500,
        "transportDue11Months": 5500,
        "totalDue": 17000,
        "totalPaid": 7650,
        "balance": 9350
    },
    "transport": {
        "stoppage": "JARGWAN",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-446"
    ],
    "familyId": "FAM-0423"
},
{
    "id": "STU-2026-446",
    "sqlId": "446",
    "admissionNo": "681",
    "rollNo": "0",
    "name": "YASHU KUMAR",
    "photo": "e17abceb3196243b1a2cca4d8d12df0c.jpg",
    "dob": "2021-08-17",
    "gender": "Male",
    "class": "LKG",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "DEVENDRA KUMAR",
        "motherName": "URMILA",
        "fatherMobile": "9675311665",
        "motherMobile": "8533908723",
        "fatherPhone": "9675311665",
        "motherPhone": "8533908723",
        "address": "JARGWAN",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 87,
        "percentage": 98.9
    },
    "feeSummary": {
        "tuitionDue": 11500,
        "transportDue11Months": 5500,
        "totalDue": 17000,
        "totalPaid": 2550,
        "balance": 14450
    },
    "transport": {
        "stoppage": "JARGWAN",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-445"
    ],
    "familyId": "FAM-0423"
},
{
    "id": "STU-2026-447",
    "sqlId": "447",
    "admissionNo": "682",
    "rollNo": "192",
    "name": "YASHIKA",
    "photo": "defualt.png",
    "dob": "2018-05-07",
    "gender": "Male",
    "class": "II",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "MAHESHPAL",
        "motherName": "NEERAJ DEVI",
        "fatherMobile": "9758509524",
        "motherMobile": "9758509524",
        "fatherPhone": "9758509524",
        "motherPhone": "9758509524",
        "address": "GANGAGARH",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 82,
        "percentage": 93.2
    },
    "feeSummary": {
        "tuitionDue": 14000,
        "transportDue11Months": 5500,
        "totalDue": 19500,
        "totalPaid": 16575,
        "balance": 2925
    },
    "transport": {
        "stoppage": "GANGAGARH",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 3"
    },
    "linkedSiblingIds": [
        "STU-2026-257"
    ],
    "familyId": "FAM-0425"
},
{
    "id": "STU-2026-449",
    "sqlId": "449",
    "admissionNo": "684",
    "rollNo": "0",
    "name": "ASHISH KUMAR RAJPUT",
    "photo": "73ca840c0359479dd0b593904c03c34e.jpg",
    "dob": "2022-08-15",
    "gender": "Male",
    "class": "NURSERY",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "GOURI SHANKAR",
        "motherName": "SHASHI",
        "fatherMobile": "8006516436",
        "motherMobile": "9837524874",
        "fatherPhone": "8006516436",
        "motherPhone": "9837524874",
        "address": "NAGLA VIDHI",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 83,
        "percentage": 94.3
    },
    "feeSummary": {
        "tuitionDue": 10500,
        "transportDue11Months": 5500,
        "totalDue": 16000,
        "totalPaid": 7200,
        "balance": 8800
    },
    "transport": {
        "stoppage": "NAGLA VIDHI",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0427"
},
{
    "id": "STU-2026-450",
    "sqlId": "450",
    "admissionNo": "685",
    "rollNo": "0",
    "name": "MAHI",
    "photo": "defualt.png",
    "dob": "2018-05-30",
    "gender": "Male",
    "class": "II",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "ANAD KUMAR",
        "motherName": "REKHA DEVI",
        "fatherMobile": "8285027701",
        "motherMobile": "8285027701",
        "fatherPhone": "8285027701",
        "motherPhone": "8285027701",
        "address": "GANGAGARH",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 84,
        "percentage": 95.5
    },
    "feeSummary": {
        "tuitionDue": 14000,
        "transportDue11Months": 5500,
        "totalDue": 19500,
        "totalPaid": 2925,
        "balance": 16575
    },
    "transport": {
        "stoppage": "GANGAGARH",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-451"
    ],
    "familyId": "FAM-0428"
},
{
    "id": "STU-2026-451",
    "sqlId": "451",
    "admissionNo": "686",
    "rollNo": "0",
    "name": "SANI KUMAR",
    "photo": "1b4e226566ff48493c80a3c32e673bbc.jpg",
    "dob": "2019-07-27",
    "gender": "Male",
    "class": "LKG",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "ANAD KUMAR",
        "motherName": "REKHA DEVI",
        "fatherMobile": "8285027701",
        "motherMobile": "8285027701",
        "fatherPhone": "8285027701",
        "motherPhone": "8285027701",
        "address": "GANGAGARH",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 85,
        "percentage": 96.6
    },
    "feeSummary": {
        "tuitionDue": 11500,
        "transportDue11Months": 5500,
        "totalDue": 17000,
        "totalPaid": 14450,
        "balance": 2550
    },
    "transport": {
        "stoppage": "GANGAGARH",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-450"
    ],
    "familyId": "FAM-0428"
},
{
    "id": "STU-2026-453",
    "sqlId": "453",
    "admissionNo": "689",
    "rollNo": "0",
    "name": "TANISHKA YADAV",
    "photo": "738431f5897fb9efae7adba64acc1c39.jpg",
    "dob": "2020-10-26",
    "gender": "Male",
    "class": "NURSERY",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "SANDEEP KUMAR",
        "motherName": "NALINI YADAV",
        "fatherMobile": "9808678959",
        "motherMobile": "9412545159",
        "fatherPhone": "9808678959",
        "motherPhone": "9412545159",
        "address": "JARGWAN",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 86,
        "percentage": 97.7
    },
    "feeSummary": {
        "tuitionDue": 10500,
        "transportDue11Months": 5500,
        "totalDue": 16000,
        "totalPaid": 7200,
        "balance": 8800
    },
    "transport": {
        "stoppage": "JARGWAN",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0430"
},
{
    "id": "STU-2026-454",
    "sqlId": "454",
    "admissionNo": "690",
    "rollNo": "0",
    "name": "YUVANSH",
    "photo": "587314d2e6fe997ba5b2242b5b1f7a32.jpg",
    "dob": "2022-04-02",
    "gender": "Male",
    "class": "NURSERY",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "BRAJESH",
        "motherName": "SANDHYA KUMARI",
        "fatherMobile": "8954931950",
        "motherMobile": "9761122765",
        "fatherPhone": "8954931950",
        "motherPhone": "9761122765",
        "address": "BAIJALA",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 87,
        "percentage": 98.9
    },
    "feeSummary": {
        "tuitionDue": 10500,
        "transportDue11Months": 5500,
        "totalDue": 16000,
        "totalPaid": 2400,
        "balance": 13600
    },
    "transport": {
        "stoppage": "BAIJALA",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 1"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0431"
},
{
    "id": "STU-2026-455",
    "sqlId": "455",
    "admissionNo": "691",
    "rollNo": "0",
    "name": "KAVISH",
    "photo": "cd8c5231f21d295ae16cb40a80b8fb3a.jpg",
    "dob": "2023-03-01",
    "gender": "Male",
    "class": "NURSERY",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "SUDHEER",
        "motherName": "KHUSHBOO",
        "fatherMobile": "8859478326",
        "motherMobile": "9045278859",
        "fatherPhone": "8859478326",
        "motherPhone": "9045278859",
        "address": "NAGALA SUMALI",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 82,
        "percentage": 93.2
    },
    "feeSummary": {
        "tuitionDue": 10500,
        "transportDue11Months": 5500,
        "totalDue": 16000,
        "totalPaid": 13600,
        "balance": 2400
    },
    "transport": {
        "stoppage": "NAGALA SUMALI",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0432"
},
{
    "id": "STU-2026-456",
    "sqlId": "456",
    "admissionNo": "692",
    "rollNo": "150",
    "name": "NIDHI",
    "photo": "f9691a51a8a386fa4d9a2ac3967737cb.jpg",
    "dob": "2017-02-04",
    "gender": "Male",
    "class": "IV",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "DHAMENDRA KUMAR",
        "motherName": "SUMIT",
        "fatherMobile": "7668306277",
        "motherMobile": "9761845736",
        "fatherPhone": "7668306277",
        "motherPhone": "9761845736",
        "address": "AURANGABA KASER",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 83,
        "percentage": 94.3
    },
    "feeSummary": {
        "tuitionDue": 15000,
        "transportDue11Months": 5500,
        "totalDue": 20500,
        "totalPaid": 9225,
        "balance": 11275
    },
    "transport": {
        "stoppage": "AURANGABA KASER",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-457"
    ],
    "familyId": "FAM-0433"
},
{
    "id": "STU-2026-457",
    "sqlId": "457",
    "admissionNo": "693",
    "rollNo": "0",
    "name": "GOVIND",
    "photo": "27c73446fccf3cdcba716ad527bfd6d0.jpg",
    "dob": "2019-12-04",
    "gender": "Male",
    "class": "I",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "DHAMENDRA KUMAR",
        "motherName": "SUMIT",
        "fatherMobile": "7668306277",
        "motherMobile": "9761845736",
        "fatherPhone": "7668306277",
        "motherPhone": "9761845736",
        "address": "AURANGABAD KASER DIBAI BULANDSHAHR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 84,
        "percentage": 95.5
    },
    "feeSummary": {
        "tuitionDue": 13500,
        "transportDue11Months": 5500,
        "totalDue": 19000,
        "totalPaid": 2850,
        "balance": 16150
    },
    "transport": {
        "stoppage": "AURANGABAD KASER DIBAI BULANDSHAHR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-456"
    ],
    "familyId": "FAM-0433"
},
{
    "id": "STU-2026-459",
    "sqlId": "459",
    "admissionNo": "695",
    "rollNo": "0",
    "name": "MUNISH",
    "photo": "e226e7d22315635557bf07860e2720a0.jpg",
    "dob": "2021-07-13",
    "gender": "Male",
    "class": "NURSERY",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "LEEKESH",
        "motherName": "SEEMA",
        "fatherMobile": "7668083141",
        "motherMobile": "9758783218",
        "fatherPhone": "7668083141",
        "motherPhone": "9758783218",
        "address": "NAGLA DHARAKPUR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 85,
        "percentage": 96.6
    },
    "feeSummary": {
        "tuitionDue": 10500,
        "transportDue11Months": 5500,
        "totalDue": 16000,
        "totalPaid": 13600,
        "balance": 2400
    },
    "transport": {
        "stoppage": "NAGLA DHARAKPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 1"
    },
    "linkedSiblingIds": [
        "STU-2026-320"
    ],
    "familyId": "FAM-0435"
},
{
    "id": "STU-2026-460",
    "sqlId": "460",
    "admissionNo": "696",
    "rollNo": "0",
    "name": "UMA",
    "photo": "5697f6ed783139749eca9ed1aa2f30da.jpg",
    "dob": "2020-11-28",
    "gender": "Male",
    "class": "LKG",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "DINESH KUMAR",
        "motherName": "VEENESH KUMAR",
        "fatherMobile": "9259150523",
        "motherMobile": "9315468019",
        "fatherPhone": "9259150523",
        "motherPhone": "9315468019",
        "address": "MOUNIPURA RAMGHAT",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 86,
        "percentage": 97.7
    },
    "feeSummary": {
        "tuitionDue": 11500,
        "transportDue11Months": 5500,
        "totalDue": 17000,
        "totalPaid": 7650,
        "balance": 9350
    },
    "transport": {
        "stoppage": "MOUNIPURA RAMGHAT",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 3"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0436"
},
{
    "id": "STU-2026-461",
    "sqlId": "461",
    "admissionNo": "697",
    "rollNo": "0",
    "name": "YASH KUMAR SINGH",
    "photo": "57306e1ec353e90cc4ffd56f3401e5f8.jpg",
    "dob": "2019-08-03",
    "gender": "Male",
    "class": "III",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "VINAY KUMAR",
        "motherName": "ANITA DEVI",
        "fatherMobile": "9711269176",
        "motherMobile": "9759979199",
        "fatherPhone": "9711269176",
        "motherPhone": "9759979199",
        "address": "GANGAPUR DEBAI",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 87,
        "percentage": 98.9
    },
    "feeSummary": {
        "tuitionDue": 14500,
        "transportDue11Months": 5500,
        "totalDue": 20000,
        "totalPaid": 3000,
        "balance": 17000
    },
    "transport": {
        "stoppage": "GANGAPUR DEBAI",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 1"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0437"
},
{
    "id": "STU-2026-462",
    "sqlId": "462",
    "admissionNo": "698",
    "rollNo": "0",
    "name": "VAISHNAVI",
    "photo": "3acb525bb17cca426714c8086b227a54.jpg",
    "dob": "-0001-11-30",
    "gender": "Male",
    "class": "LKG",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "DHARVENDRA KUMAR",
        "motherName": "MADHURI DEVI",
        "fatherMobile": "9758975880",
        "motherMobile": "9758975880",
        "fatherPhone": "9758975880",
        "motherPhone": "9758975880",
        "address": "NAGLA DHARAKPUR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 82,
        "percentage": 93.2
    },
    "feeSummary": {
        "tuitionDue": 11500,
        "transportDue11Months": 5500,
        "totalDue": 17000,
        "totalPaid": 14450,
        "balance": 2550
    },
    "transport": {
        "stoppage": "NAGLA DHARAKPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 1"
    },
    "linkedSiblingIds": [
        "STU-2026-283"
    ],
    "familyId": "FAM-0438"
},
{
    "id": "STU-2026-466",
    "sqlId": "466",
    "admissionNo": "702",
    "rollNo": "78",
    "name": "DIMPAL",
    "photo": "80a50d91cd8da50d8e233a7569d4e15b.jpg",
    "dob": "2013-06-08",
    "gender": "Male",
    "class": "VI",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "SOMVEER",
        "motherName": "PRABHA DEVI",
        "fatherMobile": "9720408425",
        "motherMobile": "9758757129",
        "fatherPhone": "9720408425",
        "motherPhone": "9758757129",
        "address": "RAMGHAT",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 83,
        "percentage": 94.3
    },
    "feeSummary": {
        "tuitionDue": 16000,
        "transportDue11Months": 5500,
        "totalDue": 21500,
        "totalPaid": 9675,
        "balance": 11825
    },
    "transport": {
        "stoppage": "RAMGHAT",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 5"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0442"
},
{
    "id": "STU-2026-467",
    "sqlId": "467",
    "admissionNo": "703",
    "rollNo": "0",
    "name": "MAYANK",
    "photo": "fb23fadb96cc4c3f03398517459ff632.jpg",
    "dob": "2021-03-25",
    "gender": "Male",
    "class": "NURSERY",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "KOUSHLESH",
        "motherName": "MAMTA DEVI",
        "fatherMobile": "7452883051",
        "motherMobile": "9528215235",
        "fatherPhone": "7452883051",
        "motherPhone": "9528215235",
        "address": "MUHAMMADPUR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 84,
        "percentage": 95.5
    },
    "feeSummary": {
        "tuitionDue": 10500,
        "transportDue11Months": 5500,
        "totalDue": 16000,
        "totalPaid": 2400,
        "balance": 13600
    },
    "transport": {
        "stoppage": "MUHAMMADPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 2"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0443"
},
{
    "id": "STU-2026-468",
    "sqlId": "468",
    "admissionNo": "704",
    "rollNo": "0",
    "name": "GABI KUMAR",
    "photo": "31582b85d243d24a293091d0e0361078.jpg",
    "dob": "2019-01-08",
    "gender": "Male",
    "class": "UKG",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "PRADEEP KUMAR",
        "motherName": "POOJA DEVI",
        "fatherMobile": "9536827592",
        "motherMobile": "9761722945",
        "fatherPhone": "9536827592",
        "motherPhone": "9761722945",
        "address": "LOHGARH",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "Select Social Category",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 85,
        "percentage": 96.6
    },
    "feeSummary": {
        "tuitionDue": 12500,
        "transportDue11Months": 5500,
        "totalDue": 18000,
        "totalPaid": 15300,
        "balance": 2700
    },
    "transport": {
        "stoppage": "LOHGARH",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 2"
    },
    "linkedSiblingIds": [
        "STU-2026-382"
    ],
    "familyId": "FAM-0444"
},
{
    "id": "STU-2026-469",
    "sqlId": "469",
    "admissionNo": "705",
    "rollNo": "31",
    "name": "SARTHAK SHARMA",
    "photo": "1a8ee294fa06b52f94c9da8b6b3b5a7f.jpg",
    "dob": "2013-06-08",
    "gender": "Male",
    "class": "VIII",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "BABLU SHARMA",
        "motherName": "LATA KUMARI",
        "fatherMobile": "8630259199",
        "motherMobile": "9897878675",
        "fatherPhone": "8630259199",
        "motherPhone": "9897878675",
        "address": "JARGWAN",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "Brahman",
        "religion": "HINDU"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 86,
        "percentage": 97.7
    },
    "feeSummary": {
        "tuitionDue": 17000,
        "transportDue11Months": 5500,
        "totalDue": 22500,
        "totalPaid": 10125,
        "balance": 12375
    },
    "transport": {
        "stoppage": "JARGWAN",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0445"
},
{
    "id": "STU-2026-470",
    "sqlId": "470",
    "admissionNo": "706",
    "rollNo": "0",
    "name": "ARYAN YADAV",
    "photo": "d571931ae0d8ac76a57120be67509aef.jpg",
    "dob": "2022-08-15",
    "gender": "Male",
    "class": "NURSERY",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "BEERESH KUMAR",
        "motherName": "AARTI",
        "fatherMobile": "9536710970",
        "motherMobile": "9719434110",
        "fatherPhone": "9536710970",
        "motherPhone": "9719434110",
        "address": "SILHARI RAMGHAT",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 87,
        "percentage": 98.9
    },
    "feeSummary": {
        "tuitionDue": 10500,
        "transportDue11Months": 5500,
        "totalDue": 16000,
        "totalPaid": 2400,
        "balance": 13600
    },
    "transport": {
        "stoppage": "SILHARI RAMGHAT",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 2"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0446"
},
{
    "id": "STU-2026-472",
    "sqlId": "472",
    "admissionNo": "708",
    "rollNo": "0",
    "name": "GUNIKA VASHISHTHA",
    "photo": "a332b02be4d1368d9eb1d1bebf3fdd26.jpg",
    "dob": "2021-06-01",
    "gender": "Male",
    "class": "LKG",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "GAURAV SHARMA",
        "motherName": "PUNAM SHARMA",
        "fatherMobile": "7579393895",
        "motherMobile": "9174475812",
        "fatherPhone": "7579393895",
        "motherPhone": "9174475812",
        "address": "LOHGARH",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "Select Social Category",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 82,
        "percentage": 93.2
    },
    "feeSummary": {
        "tuitionDue": 11500,
        "transportDue11Months": 5500,
        "totalDue": 17000,
        "totalPaid": 14450,
        "balance": 2550
    },
    "transport": {
        "stoppage": "LOHGARH",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 2"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0448"
},
{
    "id": "STU-2026-473",
    "sqlId": "473",
    "admissionNo": "709",
    "rollNo": "0",
    "name": "MANYA VASHISHTH",
    "photo": "18c6067ee183b32aef01abe33c8aecc5.jpg",
    "dob": "2021-02-01",
    "gender": "Male",
    "class": "LKG",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "AKASH SHARMA",
        "motherName": "KAJAL KUMARI",
        "fatherMobile": "9368751908",
        "motherMobile": "9639080730",
        "fatherPhone": "9368751908",
        "motherPhone": "9639080730",
        "address": "LOHGARH",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "Select Social Category",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 83,
        "percentage": 94.3
    },
    "feeSummary": {
        "tuitionDue": 11500,
        "transportDue11Months": 5500,
        "totalDue": 17000,
        "totalPaid": 7650,
        "balance": 9350
    },
    "transport": {
        "stoppage": "LOHGARH",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 2"
    },
    "linkedSiblingIds": [
        "STU-2026-645"
    ],
    "familyId": "FAM-0449"
},
{
    "id": "STU-2026-474",
    "sqlId": "474",
    "admissionNo": "710",
    "rollNo": "0",
    "name": "KAVIYA",
    "photo": "69ce3e90549fc86707aa9e4dc1776f95.jpg",
    "dob": "2018-02-25",
    "gender": "Male",
    "class": "UKG",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "HARIPRAKASH",
        "motherName": "GIRJESH DEVI",
        "fatherMobile": "7505838597",
        "motherMobile": "7505838597",
        "fatherPhone": "7505838597",
        "motherPhone": "7505838597",
        "address": "DADHAR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 84,
        "percentage": 95.5
    },
    "feeSummary": {
        "tuitionDue": 12500,
        "transportDue11Months": 5500,
        "totalDue": 18000,
        "totalPaid": 2700,
        "balance": 15300
    },
    "transport": {
        "stoppage": "DADHAR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 2"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0450"
},
{
    "id": "STU-2026-475",
    "sqlId": "475",
    "admissionNo": "711",
    "rollNo": "198",
    "name": "AILISH",
    "photo": "25f067e924d311c8f2d75c264a9d16cd.jpg",
    "dob": "2017-06-01",
    "gender": "Male",
    "class": "II",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "JITENDRA KUMAR",
        "motherName": "PRITI DEVI",
        "fatherMobile": "9394135881",
        "motherMobile": "8810317983",
        "fatherPhone": "9394135881",
        "motherPhone": "8810317983",
        "address": "CHAKATHAL",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "Select Social Category",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 85,
        "percentage": 96.6
    },
    "feeSummary": {
        "tuitionDue": 14000,
        "transportDue11Months": 5500,
        "totalDue": 19500,
        "totalPaid": 16575,
        "balance": 2925
    },
    "transport": {
        "stoppage": "CHAKATHAL",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 1"
    },
    "linkedSiblingIds": [
        "STU-2026-476"
    ],
    "familyId": "FAM-0451"
},
{
    "id": "STU-2026-476",
    "sqlId": "476",
    "admissionNo": "712",
    "rollNo": "0",
    "name": "AYANSH",
    "photo": "a0a1971f6a61767caed5fc37656cdc98.jpg",
    "dob": "2019-09-10",
    "gender": "Male",
    "class": "UKG",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "JITENDRA KUMAR",
        "motherName": "PRITI DEVI",
        "fatherMobile": "9354135881",
        "motherMobile": "8810317983",
        "fatherPhone": "9354135881",
        "motherPhone": "8810317983",
        "address": "CHAKATHAL",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "SC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 86,
        "percentage": 97.7
    },
    "feeSummary": {
        "tuitionDue": 12500,
        "transportDue11Months": 5500,
        "totalDue": 18000,
        "totalPaid": 8100,
        "balance": 9900
    },
    "transport": {
        "stoppage": "CHAKATHAL",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 1"
    },
    "linkedSiblingIds": [
        "STU-2026-475"
    ],
    "familyId": "FAM-0452"
},
{
    "id": "STU-2026-477",
    "sqlId": "477",
    "admissionNo": "713",
    "rollNo": "0",
    "name": "ANSH PALI",
    "photo": "1e6e3cbd1c26db07c6d9b8172eb75c52.jpg",
    "dob": "2021-02-12",
    "gender": "Male",
    "class": "NURSERY",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "DHARAMVEER",
        "motherName": "RENU",
        "fatherMobile": "8630282310",
        "motherMobile": "7830987469",
        "fatherPhone": "8630282310",
        "motherPhone": "7830987469",
        "address": "PESARI",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 87,
        "percentage": 98.9
    },
    "feeSummary": {
        "tuitionDue": 10500,
        "transportDue11Months": 5500,
        "totalDue": 16000,
        "totalPaid": 2400,
        "balance": 13600
    },
    "transport": {
        "stoppage": "PESARI",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 5"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0453"
},
{
    "id": "STU-2026-478",
    "sqlId": "478",
    "admissionNo": "714",
    "rollNo": "0",
    "name": "MADHAV CHOUDHARY",
    "photo": "097819c64578d9233d189f626b2adaf7.jpg",
    "dob": "2021-05-19",
    "gender": "Male",
    "class": "LKG",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "AMIT KUMAR",
        "motherName": "RACHANA CHOUDHARY",
        "fatherMobile": "9720731803",
        "motherMobile": "9999488149",
        "fatherPhone": "9720731803",
        "motherPhone": "9999488149",
        "address": "JARGWAN",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "Select Social Category",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 82,
        "percentage": 93.2
    },
    "feeSummary": {
        "tuitionDue": 11500,
        "transportDue11Months": 5500,
        "totalDue": 17000,
        "totalPaid": 14450,
        "balance": 2550
    },
    "transport": {
        "stoppage": "JARGWAN",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0454"
},
{
    "id": "STU-2026-479",
    "sqlId": "479",
    "admissionNo": "716",
    "rollNo": "184",
    "name": "MAYANK KUMAR",
    "photo": "90f36f43dc4c5988b644db38b32eeba9.jpg",
    "dob": "2014-01-09",
    "gender": "Male",
    "class": "III",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "MAHENDRA SINGH",
        "motherName": "SUMAN DEVI",
        "fatherMobile": "9720553497",
        "motherMobile": "8585963530",
        "fatherPhone": "9720553497",
        "motherPhone": "8585963530",
        "address": "DHARAKPUR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 83,
        "percentage": 94.3
    },
    "feeSummary": {
        "tuitionDue": 14500,
        "transportDue11Months": 5500,
        "totalDue": 20000,
        "totalPaid": 9000,
        "balance": 11000
    },
    "transport": {
        "stoppage": "DHARAKPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0455"
},
{
    "id": "STU-2026-480",
    "sqlId": "480",
    "admissionNo": "717",
    "rollNo": "0",
    "name": "YAMINI",
    "photo": "2c59d25a2b93bbca762261a99c8cf264.jpg",
    "dob": "2010-01-01",
    "gender": "Female",
    "class": "X",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "PREMPAL SINGH",
        "motherName": "MALTI DEVI",
        "fatherMobile": "9012439136",
        "motherMobile": "9927438637",
        "fatherPhone": "9012439136",
        "motherPhone": "9927438637",
        "address": "BAJHERA",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 84,
        "percentage": 95.5
    },
    "feeSummary": {
        "tuitionDue": 21000,
        "transportDue11Months": 5500,
        "totalDue": 26500,
        "totalPaid": 3975,
        "balance": 22525
    },
    "transport": {
        "stoppage": "BAJHERA",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0456"
},
{
    "id": "STU-2026-481",
    "sqlId": "481",
    "admissionNo": "718",
    "rollNo": "200",
    "name": "ANUSHKA",
    "photo": "cd49bf545d4eb93522f0d3e5e994c4de.jpg",
    "dob": "2019-02-14",
    "gender": "Male",
    "class": "II",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "RAHUL KUMAR",
        "motherName": "MAHESHWARI",
        "fatherMobile": "6395089415",
        "motherMobile": "8650468442",
        "fatherPhone": "6395089415",
        "motherPhone": "8650468442",
        "address": "DADHAR ALUPURA ATRAULI ALIGARH",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 85,
        "percentage": 96.6
    },
    "feeSummary": {
        "tuitionDue": 14000,
        "transportDue11Months": 5500,
        "totalDue": 19500,
        "totalPaid": 16575,
        "balance": 2925
    },
    "transport": {
        "stoppage": "DADHAR ALUPURA ATRAULI ALIGARH",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 2"
    },
    "linkedSiblingIds": [
        "STU-2026-482",
        "STU-2026-483"
    ],
    "familyId": "FAM-0457"
},
{
    "id": "STU-2026-482",
    "sqlId": "482",
    "admissionNo": "719",
    "rollNo": "0",
    "name": "MOHIT KUMAR",
    "photo": "e82d09d89315d258837ffe846620d8cd.jpg",
    "dob": "-0001-11-30",
    "gender": "Male",
    "class": "UKG",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "RAHUL KUMAR",
        "motherName": "MAHESHWARI",
        "fatherMobile": "6395089415",
        "motherMobile": "8650468442",
        "fatherPhone": "6395089415",
        "motherPhone": "8650468442",
        "address": "DADHAR ALUPURA",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 86,
        "percentage": 97.7
    },
    "feeSummary": {
        "tuitionDue": 12500,
        "transportDue11Months": 5500,
        "totalDue": 18000,
        "totalPaid": 8100,
        "balance": 9900
    },
    "transport": {
        "stoppage": "DADHAR ALUPURA",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 2"
    },
    "linkedSiblingIds": [
        "STU-2026-481",
        "STU-2026-483"
    ],
    "familyId": "FAM-0457"
},
{
    "id": "STU-2026-483",
    "sqlId": "483",
    "admissionNo": "720",
    "rollNo": "0",
    "name": "INDU",
    "photo": "e9b24489cdc8383c0d6db61bb3fe9e2c.jpg",
    "dob": "-0001-11-30",
    "gender": "Male",
    "class": "LKG",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "RAHUL KUMAR",
        "motherName": "MAHESHWARI",
        "fatherMobile": "6395089415",
        "motherMobile": "5650468442",
        "fatherPhone": "6395089415",
        "motherPhone": "5650468442",
        "address": "DADHAR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 87,
        "percentage": 98.9
    },
    "feeSummary": {
        "tuitionDue": 11500,
        "transportDue11Months": 5500,
        "totalDue": 17000,
        "totalPaid": 2550,
        "balance": 14450
    },
    "transport": {
        "stoppage": "DADHAR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 2"
    },
    "linkedSiblingIds": [
        "STU-2026-481",
        "STU-2026-482"
    ],
    "familyId": "FAM-0457"
},
{
    "id": "STU-2026-484",
    "sqlId": "484",
    "admissionNo": "721",
    "rollNo": "0",
    "name": "KAUSHAL",
    "photo": "a632c111921eac24634facc304d333cc.jpg",
    "dob": "2025-04-28",
    "gender": "Male",
    "class": "NURSERY",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "YOGENDRA SHARMA",
        "motherName": "SEEMA",
        "fatherMobile": "8650468911",
        "motherMobile": "8650468911",
        "fatherPhone": "8650468911",
        "motherPhone": "8650468911",
        "address": "KALIYANPUR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "Select Social Category",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 82,
        "percentage": 93.2
    },
    "feeSummary": {
        "tuitionDue": 10500,
        "transportDue11Months": 5500,
        "totalDue": 16000,
        "totalPaid": 13600,
        "balance": 2400
    },
    "transport": {
        "stoppage": "KALIYANPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 2"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0460"
},
{
    "id": "STU-2026-485",
    "sqlId": "485",
    "admissionNo": "722",
    "rollNo": "93",
    "name": "RAKHI KUMARI",
    "photo": "dd114865c41d48a604dd64c8094f9439.jpg",
    "dob": "2014-02-01",
    "gender": "Female",
    "class": "VI",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "ADESH KUMAR",
        "motherName": "MEENA",
        "fatherMobile": "8859391978",
        "motherMobile": "9627755236",
        "fatherPhone": "8859391978",
        "motherPhone": "9627755236",
        "address": "SILHARI RAMGHAT",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "AHEER",
        "religion": "HINDU"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 83,
        "percentage": 94.3
    },
    "feeSummary": {
        "tuitionDue": 16000,
        "transportDue11Months": 5500,
        "totalDue": 21500,
        "totalPaid": 9675,
        "balance": 11825
    },
    "transport": {
        "stoppage": "SILHARI RAMGHAT",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 3"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0461"
},
{
    "id": "STU-2026-486",
    "sqlId": "486",
    "admissionNo": "723",
    "rollNo": "0",
    "name": "ARCHIT KUMAR",
    "photo": "ea9425153baa71754a7002d67efe2a6d.jpg",
    "dob": "2019-12-16",
    "gender": "Male",
    "class": "I",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "PRAMOD KUMAR",
        "motherName": "DEEPIKA",
        "fatherMobile": "9627806714",
        "motherMobile": "8650906244",
        "fatherPhone": "9627806714",
        "motherPhone": "8650906244",
        "address": "MALAHPUR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 84,
        "percentage": 95.5
    },
    "feeSummary": {
        "tuitionDue": 13500,
        "transportDue11Months": 5500,
        "totalDue": 19000,
        "totalPaid": 2850,
        "balance": 16150
    },
    "transport": {
        "stoppage": "MALAHPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-130"
    ],
    "familyId": "FAM-0462"
},
{
    "id": "STU-2026-488",
    "sqlId": "488",
    "admissionNo": "727",
    "rollNo": "0",
    "name": "BHAVYA UPADHYAY",
    "photo": "defualt.png",
    "dob": "2020-11-01",
    "gender": "Male",
    "class": "UKG",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "DIPANSHU UPADHAYA",
        "motherName": "GEETANJALI",
        "fatherMobile": "9027689245",
        "motherMobile": "9837260584",
        "fatherPhone": "9027689245",
        "motherPhone": "9837260584",
        "address": "UNCHA GAON BANGER RAMGHAT",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "Select Social Category",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 85,
        "percentage": 96.6
    },
    "feeSummary": {
        "tuitionDue": 12500,
        "transportDue11Months": 5500,
        "totalDue": 18000,
        "totalPaid": 15300,
        "balance": 2700
    },
    "transport": {
        "stoppage": "UNCHA GAON BANGER RAMGHAT",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 5"
    },
    "linkedSiblingIds": [
        "STU-2026-489"
    ],
    "familyId": "FAM-0464"
},
{
    "id": "STU-2026-489",
    "sqlId": "489",
    "admissionNo": "728",
    "rollNo": "0",
    "name": "ARAV UPADHYAY",
    "photo": "67c056ff3ac20554c586e9bcab0d9702.jpg",
    "dob": "2022-09-15",
    "gender": "Male",
    "class": "NURSERY",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "DIPANSHU UPADHAYA",
        "motherName": "GEETANJALI",
        "fatherMobile": "9027689245",
        "motherMobile": "8937260584",
        "fatherPhone": "9027689245",
        "motherPhone": "8937260584",
        "address": "UNCHA GAON BANGER RAMGHAT",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "Select Social Category",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 86,
        "percentage": 97.7
    },
    "feeSummary": {
        "tuitionDue": 10500,
        "transportDue11Months": 5500,
        "totalDue": 16000,
        "totalPaid": 7200,
        "balance": 8800
    },
    "transport": {
        "stoppage": "UNCHA GAON BANGER RAMGHAT",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 5"
    },
    "linkedSiblingIds": [
        "STU-2026-488"
    ],
    "familyId": "FAM-0464"
},
{
    "id": "STU-2026-493",
    "sqlId": "493",
    "admissionNo": "732",
    "rollNo": "76",
    "name": "DEEPAK",
    "photo": "cc2be4040685a4b6de6dd4666b52362f.jpg",
    "dob": "-0001-11-30",
    "gender": "Male",
    "class": "VI",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "HARGYAN SINGH",
        "motherName": "KAVITA DEVI",
        "fatherMobile": "9654329622",
        "motherMobile": "9654329622",
        "fatherPhone": "9654329622",
        "motherPhone": "9654329622",
        "address": "KALIYANPUR KHERA",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 87,
        "percentage": 98.9
    },
    "feeSummary": {
        "tuitionDue": 16000,
        "transportDue11Months": 5500,
        "totalDue": 21500,
        "totalPaid": 3225,
        "balance": 18275
    },
    "transport": {
        "stoppage": "KALIYANPUR KHERA",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0469"
},
{
    "id": "STU-2026-495",
    "sqlId": "495",
    "admissionNo": "734",
    "rollNo": "0",
    "name": "DEEPAK",
    "photo": "58eb192eae1144733f24526f3225a8e9.jpg",
    "dob": "2017-07-01",
    "gender": "Male",
    "class": "I",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "MANOJ KUMAR",
        "motherName": "SUMAN DEVI",
        "fatherMobile": "9720917852",
        "motherMobile": "9354146778",
        "fatherPhone": "9720917852",
        "motherPhone": "9354146778",
        "address": "KALIYANPUR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 82,
        "percentage": 93.2
    },
    "feeSummary": {
        "tuitionDue": 13500,
        "transportDue11Months": 5500,
        "totalDue": 19000,
        "totalPaid": 16150,
        "balance": 2850
    },
    "transport": {
        "stoppage": "KALIYANPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 2"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0471"
},
{
    "id": "STU-2026-496",
    "sqlId": "496",
    "admissionNo": "DM735",
    "rollNo": "0",
    "name": "DEEKSHITA GAUTAM",
    "photo": "4741be2a0899ae7a60a0815f8b075db6.jpg",
    "dob": "2022-02-05",
    "gender": "Male",
    "class": "NURSERY",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "SURESH BABU",
        "motherName": "JYOTI",
        "fatherMobile": "7302344463",
        "motherMobile": "9761099907",
        "fatherPhone": "7302344463",
        "motherPhone": "9761099907",
        "address": "JARGWAN",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "Select Social Category",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 83,
        "percentage": 94.3
    },
    "feeSummary": {
        "tuitionDue": 10500,
        "transportDue11Months": 5500,
        "totalDue": 16000,
        "totalPaid": 7200,
        "balance": 8800
    },
    "transport": {
        "stoppage": "JARGWAN",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0472"
},
{
    "id": "STU-2026-497",
    "sqlId": "497",
    "admissionNo": "736",
    "rollNo": "126",
    "name": "ROSHNI SHARMA",
    "photo": "1e89e480099487abdd17fee910541dae.jpg",
    "dob": "2015-08-02",
    "gender": "Female",
    "class": "V",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "NITIN SHARMA",
        "motherName": "RANI SHARMA",
        "fatherMobile": "7820097256",
        "motherMobile": "7011735110",
        "fatherPhone": "7820097256",
        "motherPhone": "7011735110",
        "address": "RAMGHAT",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "Select Social Category",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 84,
        "percentage": 95.5
    },
    "feeSummary": {
        "tuitionDue": 15500,
        "transportDue11Months": 5500,
        "totalDue": 21000,
        "totalPaid": 3150,
        "balance": 17850
    },
    "transport": {
        "stoppage": "RAMGHAT",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-498",
        "STU-2026-517"
    ],
    "familyId": "FAM-0473"
},
{
    "id": "STU-2026-498",
    "sqlId": "498",
    "admissionNo": "737",
    "rollNo": "126",
    "name": "MAHI SHARMA",
    "photo": "6f14026ddeada41424df30cffa6f4e97.jpg",
    "dob": "2018-06-20",
    "gender": "Male",
    "class": "III",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "NITIN SHARMA",
        "motherName": "RANI SHARMA",
        "fatherMobile": "7820097256",
        "motherMobile": "7011735110",
        "fatherPhone": "7820097256",
        "motherPhone": "7011735110",
        "address": "RAMGHAT",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "General",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 85,
        "percentage": 96.6
    },
    "feeSummary": {
        "tuitionDue": 14500,
        "transportDue11Months": 5500,
        "totalDue": 20000,
        "totalPaid": 17000,
        "balance": 3000
    },
    "transport": {
        "stoppage": "RAMGHAT",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-497"
    ],
    "familyId": "FAM-0473"
},
{
    "id": "STU-2026-499",
    "sqlId": "499",
    "admissionNo": "738",
    "rollNo": "0",
    "name": "UTKARSH",
    "photo": "4273ac7ff14c5d49fabe60addc97e43c.jpg",
    "dob": "2021-03-29",
    "gender": "Male",
    "class": "UKG",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "SHYAM SUNDAR",
        "motherName": "BAVEETA",
        "fatherMobile": "7668457469",
        "motherMobile": "9399994924",
        "fatherPhone": "7668457469",
        "motherPhone": "9399994924",
        "address": "RAMGHAT",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 86,
        "percentage": 97.7
    },
    "feeSummary": {
        "tuitionDue": 12500,
        "transportDue11Months": 5500,
        "totalDue": 18000,
        "totalPaid": 8100,
        "balance": 9900
    },
    "transport": {
        "stoppage": "RAMGHAT",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0475"
},
{
    "id": "STU-2026-503",
    "sqlId": "503",
    "admissionNo": "743",
    "rollNo": "27",
    "name": "RIYANSHI GAUTAM",
    "photo": "fed414f54e49e0277841250357d88acb.jpg",
    "dob": "2016-10-18",
    "gender": "Female",
    "class": "IV",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "ANSHUL KUMAR",
        "motherName": "POOJA DEVI",
        "fatherMobile": "9457076490",
        "motherMobile": "9457076490",
        "fatherPhone": "9457076490",
        "motherPhone": "9457076490",
        "address": "SILHARI RAMGHAT",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "Social Category",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 87,
        "percentage": 98.9
    },
    "feeSummary": {
        "tuitionDue": 15000,
        "transportDue11Months": 5500,
        "totalDue": 20500,
        "totalPaid": 3075,
        "balance": 17425
    },
    "transport": {
        "stoppage": "SILHARI RAMGHAT",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-071",
        "STU-2026-504"
    ],
    "familyId": "FAM-0069"
},
{
    "id": "STU-2026-504",
    "sqlId": "504",
    "admissionNo": "744",
    "rollNo": "0",
    "name": "THOMAS",
    "photo": "d5f8a0d2b21e3143172e3699ddab8bb8.jpg",
    "dob": "2020-05-17",
    "gender": "Male",
    "class": "UKG",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "ANSHUL KUMAR",
        "motherName": "POOJA DEVI",
        "fatherMobile": "9457076490",
        "motherMobile": "9457076490",
        "fatherPhone": "9457076490",
        "motherPhone": "9457076490",
        "address": "SILHARI RAMGHAT",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "Select Social Category",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 82,
        "percentage": 93.2
    },
    "feeSummary": {
        "tuitionDue": 12500,
        "transportDue11Months": 5500,
        "totalDue": 18000,
        "totalPaid": 15300,
        "balance": 2700
    },
    "transport": {
        "stoppage": "SILHARI RAMGHAT",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 3"
    },
    "linkedSiblingIds": [
        "STU-2026-071",
        "STU-2026-503"
    ],
    "familyId": "FAM-0069"
},
{
    "id": "STU-2026-507",
    "sqlId": "507",
    "admissionNo": "747",
    "rollNo": "0",
    "name": "DIVYANSHI",
    "photo": "e9b1014e13ac4f03fd8bb4fb10428b3a.jpg",
    "dob": "2020-11-24",
    "gender": "Male",
    "class": "LKG",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "RAM NARESH SINGH",
        "motherName": "PRITI KUMARI",
        "fatherMobile": "9891490059",
        "motherMobile": "9891490059",
        "fatherPhone": "9891490059",
        "motherPhone": "9891490059",
        "address": "BAIJALA",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 83,
        "percentage": 94.3
    },
    "feeSummary": {
        "tuitionDue": 11500,
        "transportDue11Months": 5500,
        "totalDue": 17000,
        "totalPaid": 7650,
        "balance": 9350
    },
    "transport": {
        "stoppage": "BAIJALA",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-508",
        "STU-2026-509"
    ],
    "familyId": "FAM-0483"
},
{
    "id": "STU-2026-509",
    "sqlId": "509",
    "admissionNo": "749",
    "rollNo": "0",
    "name": "MAYANK KUMAR",
    "photo": "00047f1a7a5241fa90ee001a01364b11.jpg",
    "dob": "-0001-11-30",
    "gender": "Male",
    "class": "NURSERY",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "RAM NARESH SINGH",
        "motherName": "PRITI KUMARI",
        "fatherMobile": "8991490059",
        "motherMobile": "8991490059",
        "fatherPhone": "8991490059",
        "motherPhone": "8991490059",
        "address": "BAIJALA",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 84,
        "percentage": 95.5
    },
    "feeSummary": {
        "tuitionDue": 10500,
        "transportDue11Months": 5500,
        "totalDue": 16000,
        "totalPaid": 2400,
        "balance": 13600
    },
    "transport": {
        "stoppage": "BAIJALA",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-507"
    ],
    "familyId": "FAM-0483"
},
{
    "id": "STU-2026-510",
    "sqlId": "510",
    "admissionNo": "750",
    "rollNo": "0",
    "name": "BHUMI",
    "photo": "c5f1fa2bdb6beeb4b1fec10052a66db2.jpg",
    "dob": "2019-06-10",
    "gender": "Male",
    "class": "I",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "VINOD KUMAR",
        "motherName": "VIMLESH KUMAR",
        "fatherMobile": "9759708431",
        "motherMobile": "9136064911",
        "fatherPhone": "9759708431",
        "motherPhone": "9136064911",
        "address": "MUHAMMADPUR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "Select Social Category",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 85,
        "percentage": 96.6
    },
    "feeSummary": {
        "tuitionDue": 13500,
        "transportDue11Months": 5500,
        "totalDue": 19000,
        "totalPaid": 16150,
        "balance": 2850
    },
    "transport": {
        "stoppage": "MUHAMMADPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0485"
},
{
    "id": "STU-2026-511",
    "sqlId": "511",
    "admissionNo": "751",
    "rollNo": "0",
    "name": "YOVANSH",
    "photo": "defualt.png",
    "dob": "2025-08-09",
    "gender": "Male",
    "class": "NURSERY",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "HARIOM KUMAR",
        "motherName": "KIRTI KUMARI",
        "fatherMobile": "9758975880",
        "motherMobile": "9758975880",
        "fatherPhone": "9758975880",
        "motherPhone": "9758975880",
        "address": "BAIJALA",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 86,
        "percentage": 97.7
    },
    "feeSummary": {
        "tuitionDue": 10500,
        "transportDue11Months": 5500,
        "totalDue": 16000,
        "totalPaid": 7200,
        "balance": 8800
    },
    "transport": {
        "stoppage": "BAIJALA",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0486"
},
{
    "id": "STU-2026-512",
    "sqlId": "512",
    "admissionNo": "752",
    "rollNo": "0",
    "name": "PRIYAL",
    "photo": "d939bc4b8e269cb12a134f9d593851b3.jpg",
    "dob": "2020-05-07",
    "gender": "Male",
    "class": "LKG",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "ANIL KUMAR",
        "motherName": "BEENESH",
        "fatherMobile": "7830214462",
        "motherMobile": "7830214462",
        "fatherPhone": "7830214462",
        "motherPhone": "7830214462",
        "address": "JARGWAN",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 87,
        "percentage": 98.9
    },
    "feeSummary": {
        "tuitionDue": 11500,
        "transportDue11Months": 5500,
        "totalDue": 17000,
        "totalPaid": 2550,
        "balance": 14450
    },
    "transport": {
        "stoppage": "JARGWAN",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-181"
    ],
    "familyId": "FAM-0487"
},
{
    "id": "STU-2026-513",
    "sqlId": "513",
    "admissionNo": "753",
    "rollNo": "0",
    "name": "SOURYA",
    "photo": "d3ac60104a60da93487f883fda2167c8.jpg",
    "dob": "-0001-11-30",
    "gender": "Male",
    "class": "LKG",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "RINESH",
        "motherName": "SUMAN",
        "fatherMobile": "9027913722",
        "motherMobile": "9027913722",
        "fatherPhone": "9027913722",
        "motherPhone": "9027913722",
        "address": "JARGWAN",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 82,
        "percentage": 93.2
    },
    "feeSummary": {
        "tuitionDue": 11500,
        "transportDue11Months": 5500,
        "totalDue": 17000,
        "totalPaid": 14450,
        "balance": 2550
    },
    "transport": {
        "stoppage": "JARGWAN",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0488"
},
{
    "id": "STU-2026-514",
    "sqlId": "514",
    "admissionNo": "754",
    "rollNo": "0",
    "name": "MEENAKSHI",
    "photo": "008d374b0f74fd8ce41d6bf2fe036270.jpg",
    "dob": "-0001-11-30",
    "gender": "Male",
    "class": "LKG",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "NETRAPAL SINGH",
        "motherName": "RAKHI",
        "fatherMobile": "7248033715",
        "motherMobile": "999005806",
        "fatherPhone": "7248033715",
        "motherPhone": "999005806",
        "address": "MOHAMMADPUR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "Select Social Category",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 83,
        "percentage": 94.3
    },
    "feeSummary": {
        "tuitionDue": 11500,
        "transportDue11Months": 5500,
        "totalDue": 17000,
        "totalPaid": 7650,
        "balance": 9350
    },
    "transport": {
        "stoppage": "MOHAMMADPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0489"
},
{
    "id": "STU-2026-515",
    "sqlId": "515",
    "admissionNo": "755",
    "rollNo": "0",
    "name": "MADHAV YADAV",
    "photo": "fe6f59d56a2f5be6442a09ac6a86a270.jpg",
    "dob": "2019-10-24",
    "gender": "Male",
    "class": "UKG",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "VIJENDRA SINGH",
        "motherName": "ANJALI",
        "fatherMobile": "7417417419",
        "motherMobile": "7535818181",
        "fatherPhone": "7417417419",
        "motherPhone": "7535818181",
        "address": "MAHAJPUR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 84,
        "percentage": 95.5
    },
    "feeSummary": {
        "tuitionDue": 12500,
        "transportDue11Months": 5500,
        "totalDue": 18000,
        "totalPaid": 2700,
        "balance": 15300
    },
    "transport": {
        "stoppage": "MAHAJPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0490"
},
{
    "id": "STU-2026-516",
    "sqlId": "516",
    "admissionNo": "756",
    "rollNo": "0",
    "name": "KANHAIYA",
    "photo": "defualt.png",
    "dob": "-0001-11-30",
    "gender": "Male",
    "class": "NURSERY",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "UMESH YADAV",
        "motherName": "RUVI",
        "fatherMobile": "7819961153",
        "motherMobile": "7819961153",
        "fatherPhone": "7819961153",
        "motherPhone": "7819961153",
        "address": "MUDAKHERA",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 85,
        "percentage": 96.6
    },
    "feeSummary": {
        "tuitionDue": 10500,
        "transportDue11Months": 5500,
        "totalDue": 16000,
        "totalPaid": 13600,
        "balance": 2400
    },
    "transport": {
        "stoppage": "MUDAKHERA",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0491"
},
{
    "id": "STU-2026-517",
    "sqlId": "517",
    "admissionNo": "757",
    "rollNo": "0",
    "name": "MAYANK SHARMA",
    "photo": "defualt.png",
    "dob": "2022-12-23",
    "gender": "Male",
    "class": "NURSERY",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "NITIN KUMAR",
        "motherName": "RANI DEVI",
        "fatherMobile": "9758975880",
        "motherMobile": "9758975880",
        "fatherPhone": "9758975880",
        "motherPhone": "9758975880",
        "address": "RAMGHAT",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "Select Social Category",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 86,
        "percentage": 97.7
    },
    "feeSummary": {
        "tuitionDue": 10500,
        "transportDue11Months": 5500,
        "totalDue": 16000,
        "totalPaid": 7200,
        "balance": 8800
    },
    "transport": {
        "stoppage": "RAMGHAT",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-497"
    ],
    "familyId": "FAM-0492"
},
{
    "id": "STU-2026-518",
    "sqlId": "518",
    "admissionNo": "759",
    "rollNo": "0",
    "name": "SHIVAM KUMAR",
    "photo": "017dd78701aa0bd1d0505c91228dee1e.jpg",
    "dob": "2009-01-01",
    "gender": "Male",
    "class": "X",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "VINOD KUMAR",
        "motherName": "PRAVESH DEVI",
        "fatherMobile": "790679947",
        "motherMobile": "8504995636",
        "fatherPhone": "790679947",
        "motherPhone": "8504995636",
        "address": "PESARI",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "HINDU"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 87,
        "percentage": 98.9
    },
    "feeSummary": {
        "tuitionDue": 21000,
        "transportDue11Months": 5500,
        "totalDue": 26500,
        "totalPaid": 3975,
        "balance": 22525
    },
    "transport": {
        "stoppage": "PESARI",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0493"
},
{
    "id": "STU-2026-519",
    "sqlId": "519",
    "admissionNo": "760",
    "rollNo": "0",
    "name": "RISHAV",
    "photo": "d14787013e11865ab6e174a89e3f215b.jpg",
    "dob": "2018-05-19",
    "gender": "Male",
    "class": "III",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "PRATAP SINGH",
        "motherName": "RAJESHWARI DEVI",
        "fatherMobile": "6395659402",
        "motherMobile": "9639383960",
        "fatherPhone": "6395659402",
        "motherPhone": "9639383960",
        "address": "Uncha gown",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 82,
        "percentage": 93.2
    },
    "feeSummary": {
        "tuitionDue": 14500,
        "transportDue11Months": 5500,
        "totalDue": 20000,
        "totalPaid": 17000,
        "balance": 3000
    },
    "transport": {
        "stoppage": "Uncha gown",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 5"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0494"
},
{
    "id": "STU-2026-520",
    "sqlId": "520",
    "admissionNo": "761",
    "rollNo": "0",
    "name": "JATIN KUMAR",
    "photo": "94d2f45d2f0491fcd5ffc60875b5aff5.jpg",
    "dob": "2013-08-29",
    "gender": "Male",
    "class": "III",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "YOGENDRA KUMAR",
        "motherName": "SUMITRA DEVI",
        "fatherMobile": "7300991046",
        "motherMobile": "9910464431",
        "fatherPhone": "7300991046",
        "motherPhone": "9910464431",
        "address": "KALIYANPUR BHAGIRATHPUR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 83,
        "percentage": 94.3
    },
    "feeSummary": {
        "tuitionDue": 14500,
        "transportDue11Months": 5500,
        "totalDue": 20000,
        "totalPaid": 9000,
        "balance": 11000
    },
    "transport": {
        "stoppage": "KALIYANPUR BHAGIRATHPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-521"
    ],
    "familyId": "FAM-0495"
},
{
    "id": "STU-2026-521",
    "sqlId": "521",
    "admissionNo": "762",
    "rollNo": "177",
    "name": "JAYANT",
    "photo": "4faa0d8b77ec6c2cea0c9cfcee0f048a.jpg",
    "dob": "2013-08-29",
    "gender": "Male",
    "class": "II",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "YOGENDRA",
        "motherName": "SUMITRA DEVI",
        "fatherMobile": "9910464431",
        "motherMobile": "7300991046",
        "fatherPhone": "9910464431",
        "motherPhone": "7300991046",
        "address": "KALIYANPUR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 84,
        "percentage": 95.5
    },
    "feeSummary": {
        "tuitionDue": 14000,
        "transportDue11Months": 5500,
        "totalDue": 19500,
        "totalPaid": 2925,
        "balance": 16575
    },
    "transport": {
        "stoppage": "KALIYANPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-520"
    ],
    "familyId": "FAM-0496"
},
{
    "id": "STU-2026-522",
    "sqlId": "522",
    "admissionNo": "763",
    "rollNo": "0",
    "name": "MAMTESH",
    "photo": "c487becda798fa26212e34644bd6c568.jpg",
    "dob": "-0001-11-30",
    "gender": "Male",
    "class": "LKG",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "KULDEEP",
        "motherName": "RENU DEVI",
        "fatherMobile": "9675318376",
        "motherMobile": "7830799794",
        "fatherPhone": "9675318376",
        "motherPhone": "7830799794",
        "address": "KALIYANPUR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 85,
        "percentage": 96.6
    },
    "feeSummary": {
        "tuitionDue": 11500,
        "transportDue11Months": 5500,
        "totalDue": 17000,
        "totalPaid": 14450,
        "balance": 2550
    },
    "transport": {
        "stoppage": "KALIYANPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-523"
    ],
    "familyId": "FAM-0497"
},
{
    "id": "STU-2026-523",
    "sqlId": "523",
    "admissionNo": "764",
    "rollNo": "0",
    "name": "SOMESH",
    "photo": "defualt.png",
    "dob": "-0001-11-30",
    "gender": "Male",
    "class": "NURSERY",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "KULDEEP YADAV",
        "motherName": "RENU DEVI",
        "fatherMobile": "7675318376",
        "motherMobile": "7830799794",
        "fatherPhone": "7675318376",
        "motherPhone": "7830799794",
        "address": "Jargwan (Bulandshahr)",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 86,
        "percentage": 97.7
    },
    "feeSummary": {
        "tuitionDue": 10500,
        "transportDue11Months": 5500,
        "totalDue": 16000,
        "totalPaid": 7200,
        "balance": 8800
    },
    "transport": {
        "stoppage": "Jargwan (Bulandshahr)",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-522"
    ],
    "familyId": "FAM-0498"
},
{
    "id": "STU-2026-524",
    "sqlId": "524",
    "admissionNo": "765",
    "rollNo": "0",
    "name": "GAURAV KUMAR",
    "photo": "7aa2ac362ae1caa41785f24ca6e8a42e.jpg",
    "dob": "2011-08-05",
    "gender": "Male",
    "class": "X",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "VED PRAKASH",
        "motherName": "HEMLATA ARYA",
        "fatherMobile": "7668389167",
        "motherMobile": "7618426838",
        "fatherPhone": "7668389167",
        "motherPhone": "7618426838",
        "address": "MUHAMMADPUR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "HINDU"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 87,
        "percentage": 98.9
    },
    "feeSummary": {
        "tuitionDue": 21000,
        "transportDue11Months": 5500,
        "totalDue": 26500,
        "totalPaid": 3975,
        "balance": 22525
    },
    "transport": {
        "stoppage": "MUHAMMADPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0499"
},
{
    "id": "STU-2026-526",
    "sqlId": "526",
    "admissionNo": "767",
    "rollNo": "0",
    "name": "MANYA",
    "photo": "50f45fc7abb6eca9e262702b543fcfbc.jpg",
    "dob": "2022-07-03",
    "gender": "Male",
    "class": "NURSERY",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "SHIVAM",
        "motherName": "MANSI",
        "fatherMobile": "6398983141",
        "motherMobile": "8384837949",
        "fatherPhone": "6398983141",
        "motherPhone": "8384837949",
        "address": "JARGWAN",
        "occupation": "BUSSUNESS",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "Select Social Category",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 82,
        "percentage": 93.2
    },
    "feeSummary": {
        "tuitionDue": 10500,
        "transportDue11Months": 5500,
        "totalDue": 16000,
        "totalPaid": 13600,
        "balance": 2400
    },
    "transport": {
        "stoppage": "JARGWAN",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-641"
    ],
    "familyId": "FAM-0612"
},
{
    "id": "STU-2026-529",
    "sqlId": "529",
    "admissionNo": "770",
    "rollNo": "186",
    "name": "PRASHANT",
    "photo": "c9188b09343959c0a3b17a1ad09808f8.jpg",
    "dob": "-0001-11-30",
    "gender": "Male",
    "class": "III",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "PREM SINGH",
        "motherName": "GITA DEVI",
        "fatherMobile": "7818858356",
        "motherMobile": "9917732560",
        "fatherPhone": "7818858356",
        "motherPhone": "9917732560",
        "address": "LOHGARH",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "SC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 83,
        "percentage": 94.3
    },
    "feeSummary": {
        "tuitionDue": 14500,
        "transportDue11Months": 5500,
        "totalDue": 20000,
        "totalPaid": 9000,
        "balance": 11000
    },
    "transport": {
        "stoppage": "LOHGARH",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-530"
    ],
    "familyId": "FAM-0504"
},
{
    "id": "STU-2026-530",
    "sqlId": "530",
    "admissionNo": "771",
    "rollNo": "0",
    "name": "VIVEK KUMAR",
    "photo": "d02a364297f1410f90f4fb8c7e16785e.jpg",
    "dob": "2018-07-17",
    "gender": "Male",
    "class": "I",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "PREM SINGH",
        "motherName": "GITA DEVI",
        "fatherMobile": "7818858356",
        "motherMobile": "9917732560",
        "fatherPhone": "7818858356",
        "motherPhone": "9917732560",
        "address": "LOHGARH",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "SC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 84,
        "percentage": 95.5
    },
    "feeSummary": {
        "tuitionDue": 13500,
        "transportDue11Months": 5500,
        "totalDue": 19000,
        "totalPaid": 2850,
        "balance": 16150
    },
    "transport": {
        "stoppage": "LOHGARH",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-529"
    ],
    "familyId": "FAM-0504"
},
{
    "id": "STU-2026-531",
    "sqlId": "531",
    "admissionNo": "772",
    "rollNo": "0",
    "name": "DEEPAK LODHI",
    "photo": "8bfc6bf0e4dcab4026550a63d36f2fee.jpg",
    "dob": "-0001-11-30",
    "gender": "Male",
    "class": "LKG",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "GAJRAJ SINGH",
        "motherName": "PINKI RAJPUT",
        "fatherMobile": "9719945764",
        "motherMobile": "9719945764",
        "fatherPhone": "9719945764",
        "motherPhone": "9719945764",
        "address": "GANESHPUR GOVINDPUR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "OBC",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 85,
        "percentage": 96.6
    },
    "feeSummary": {
        "tuitionDue": 11500,
        "transportDue11Months": 5500,
        "totalDue": 17000,
        "totalPaid": 14450,
        "balance": 2550
    },
    "transport": {
        "stoppage": "GANESHPUR GOVINDPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0505"
},
{
    "id": "STU-2026-532",
    "sqlId": "532",
    "admissionNo": "773",
    "rollNo": "0",
    "name": "TARUN KUMAR",
    "photo": "defualt.png",
    "dob": "2023-05-06",
    "gender": "Male",
    "class": "PG",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "AMIT KUMAR",
        "motherName": "KRISHNA",
        "fatherMobile": "2",
        "motherMobile": "7830108749",
        "fatherPhone": "2",
        "motherPhone": "7830108749",
        "address": "NAGLA DHARAKPUR",
        "occupation": "AGRICULTURE",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 86,
        "percentage": 97.7
    },
    "feeSummary": {
        "tuitionDue": 9500,
        "transportDue11Months": 5500,
        "totalDue": 15000,
        "totalPaid": 6750,
        "balance": 8250
    },
    "transport": {
        "stoppage": "NAGLA DHARAKPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 1"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0668"
},
{
    "id": "STU-2026-533",
    "sqlId": "533",
    "admissionNo": "831",
    "rollNo": "63",
    "name": "PRASHANT KUMAR",
    "photo": "7156f0637830c528c39b40d9485098ac.jpg",
    "dob": "1970-01-01",
    "gender": "Male",
    "class": "VII",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "BHOOP SINGH",
        "motherName": "NEERAJ DEVI",
        "fatherMobile": "8",
        "motherMobile": "8",
        "fatherPhone": "8",
        "motherPhone": "8",
        "address": "KALIYANPUR BHAGIRATHPUR ATROLI ALIGARH",
        "occupation": "H",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "AHEER",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 87,
        "percentage": 98.9
    },
    "feeSummary": {
        "tuitionDue": 16500,
        "transportDue11Months": 5500,
        "totalDue": 22000,
        "totalPaid": 3300,
        "balance": 18700
    },
    "transport": {
        "stoppage": "KALIYANPUR BHAGIRATHPUR ATROLI ALIGARH",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0676"
},
{
    "id": "STU-2026-536",
    "sqlId": "536",
    "admissionNo": "775",
    "rollNo": "0",
    "name": "AYANSH BAGHEL",
    "photo": "84a24c07d1ae74d67780fb1c40e7f756.jpg",
    "dob": "2020-08-20",
    "gender": "Male",
    "class": "NURSERY",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "HARIOM SINGH",
        "motherName": "SAROJ DEVI",
        "fatherMobile": "1",
        "motherMobile": "9568960828",
        "fatherPhone": "1",
        "motherPhone": "9568960828",
        "address": "KALIYANPUTR  BHAGIRATHPUR",
        "occupation": "A",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 82,
        "percentage": 93.2
    },
    "feeSummary": {
        "tuitionDue": 10500,
        "transportDue11Months": 5500,
        "totalDue": 16000,
        "totalPaid": 13600,
        "balance": 2400
    },
    "transport": {
        "stoppage": "KALIYANPUTR  BHAGIRATHPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 2"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0669"
},
{
    "id": "STU-2026-537",
    "sqlId": "537",
    "admissionNo": "776",
    "rollNo": "0",
    "name": "MONIKA",
    "photo": "9c184583f1918c94a3ddb87eb08080e4.jpg",
    "dob": "2021-07-14",
    "gender": "Female",
    "class": "NURSERY",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "RAMPRAKASH",
        "motherName": "TULSI",
        "fatherMobile": "7703956102",
        "motherMobile": "7703956102",
        "fatherPhone": "7703956102",
        "motherPhone": "7703956102",
        "address": "KALIYANPUR BHAGIRATHPUR",
        "occupation": "AGRICULTURE",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 83,
        "percentage": 94.3
    },
    "feeSummary": {
        "tuitionDue": 10500,
        "transportDue11Months": 5500,
        "totalDue": 16000,
        "totalPaid": 7200,
        "balance": 8800
    },
    "transport": {
        "stoppage": "KALIYANPUR BHAGIRATHPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 2"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0665"
},
{
    "id": "STU-2026-539",
    "sqlId": "539",
    "admissionNo": "777",
    "rollNo": "0",
    "name": "SANDEEP",
    "photo": "79c269df9e8859d5473d03af35433ac3.jpg",
    "dob": "2022-03-29",
    "gender": "Male",
    "class": "LKG",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "VIKASH",
        "motherName": "KM. USHA",
        "fatherMobile": "1",
        "motherMobile": "8533029749",
        "fatherPhone": "1",
        "motherPhone": "8533029749",
        "address": "NAGLA VIDHI, JARGWAN",
        "occupation": "A",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 84,
        "percentage": 95.5
    },
    "feeSummary": {
        "tuitionDue": 11500,
        "transportDue11Months": 5500,
        "totalDue": 17000,
        "totalPaid": 2550,
        "balance": 14450
    },
    "transport": {
        "stoppage": "NAGLA VIDHI",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 4"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0678"
},
{
    "id": "STU-2026-540",
    "sqlId": "540",
    "admissionNo": "778",
    "rollNo": "0",
    "name": "KAMINI",
    "photo": "0c6afe5dc8541bffbb1a5133a15bc308.jpg",
    "dob": "2021-11-22",
    "gender": "Female",
    "class": "LKG",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "BABLU",
        "motherName": "DURGESH",
        "fatherMobile": "7",
        "motherMobile": "8006168711",
        "fatherPhone": "7",
        "motherPhone": "8006168711",
        "address": "NAGLA DHARAKPUR",
        "occupation": "A",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 85,
        "percentage": 96.6
    },
    "feeSummary": {
        "tuitionDue": 11500,
        "transportDue11Months": 5500,
        "totalDue": 17000,
        "totalPaid": 14450,
        "balance": 2550
    },
    "transport": {
        "stoppage": "NAGLA DHARAKPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 1"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0672"
},
{
    "id": "STU-2026-541",
    "sqlId": "541",
    "admissionNo": "835",
    "rollNo": "0",
    "name": "SRISHTI RAJPUT",
    "photo": "defualt.png",
    "dob": "2022-11-15",
    "gender": "Female",
    "class": "NURSERY",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "ROKINSH KUMAR",
        "motherName": "LAKSHMI",
        "fatherMobile": "9520213582",
        "motherMobile": "9719358200",
        "fatherPhone": "9520213582",
        "motherPhone": "9719358200",
        "address": "NAGLA KOTHI JARGWAN ALIGARH",
        "occupation": "AGRICULTURE",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 86,
        "percentage": 97.7
    },
    "feeSummary": {
        "tuitionDue": 10500,
        "transportDue11Months": 5500,
        "totalDue": 16000,
        "totalPaid": 7200,
        "balance": 8800
    },
    "transport": {
        "stoppage": "NAGLA KOTHI JARGWAN ALIGARH",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0631"
},
{
    "id": "STU-2026-542",
    "sqlId": "542",
    "admissionNo": "779",
    "rollNo": "0",
    "name": "UMANG",
    "photo": "defualt.png",
    "dob": "2022-08-19",
    "gender": "Male",
    "class": "NURSERY",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "NARESH KUMAR",
        "motherName": "SEEMA",
        "fatherMobile": "8",
        "motherMobile": "9627975644",
        "fatherPhone": "8",
        "motherPhone": "9627975644",
        "address": "NAGLA VIDHI",
        "occupation": "A",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 87,
        "percentage": 98.9
    },
    "feeSummary": {
        "tuitionDue": 10500,
        "transportDue11Months": 5500,
        "totalDue": 16000,
        "totalPaid": 2400,
        "balance": 13600
    },
    "transport": {
        "stoppage": "NAGLA VIDHI",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 4"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0677"
},
{
    "id": "STU-2026-546",
    "sqlId": "546",
    "admissionNo": "782",
    "rollNo": "0",
    "name": "SHIV",
    "photo": "defualt.png",
    "dob": "2024-01-02",
    "gender": "Male",
    "class": "PG",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "KULDIP KUMAR",
        "motherName": "TANISHA SHARMA",
        "fatherMobile": "8851021560",
        "motherMobile": "8851021560",
        "fatherPhone": "8851021560",
        "motherPhone": "8851021560",
        "address": "JARGWAN",
        "occupation": "AGRICULTURE",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 82,
        "percentage": 93.2
    },
    "feeSummary": {
        "tuitionDue": 9500,
        "transportDue11Months": 5500,
        "totalDue": 15000,
        "totalPaid": 12750,
        "balance": 2250
    },
    "transport": {
        "stoppage": "JARGWAN",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0664"
},
{
    "id": "STU-2026-548",
    "sqlId": "548",
    "admissionNo": "783",
    "rollNo": "0",
    "name": "PRASHANT YADAV",
    "photo": "defualt.png",
    "dob": "2019-04-05",
    "gender": "Male",
    "class": "NURSERY",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "NARENDRA KUMAR",
        "motherName": "SAROJ",
        "fatherMobile": "8650048902",
        "motherMobile": "9582247889",
        "fatherPhone": "8650048902",
        "motherPhone": "9582247889",
        "address": "CHIRAURI TALUKA",
        "occupation": "A",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 83,
        "percentage": 94.3
    },
    "feeSummary": {
        "tuitionDue": 10500,
        "transportDue11Months": 5500,
        "totalDue": 16000,
        "totalPaid": 7200,
        "balance": 8800
    },
    "transport": {
        "stoppage": "CHIRAURI TALUKA",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-549"
    ],
    "familyId": "FAM-0326"
},
{
    "id": "STU-2026-549",
    "sqlId": "549",
    "admissionNo": "784",
    "rollNo": "0",
    "name": "PRIYANSHI",
    "photo": "defualt.png",
    "dob": "1970-01-01",
    "gender": "Female",
    "class": "NURSERY",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "NARENDRA KUMAR",
        "motherName": "SAROJ",
        "fatherMobile": "8650048902",
        "motherMobile": "9582247889",
        "fatherPhone": "8650048902",
        "motherPhone": "9582247889",
        "address": "CHIRAURI TALUKA",
        "occupation": "A",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 84,
        "percentage": 95.5
    },
    "feeSummary": {
        "tuitionDue": 10500,
        "transportDue11Months": 5500,
        "totalDue": 16000,
        "totalPaid": 2400,
        "balance": 13600
    },
    "transport": {
        "stoppage": "CHIRAURI TALUKA",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-548"
    ],
    "familyId": "FAM-0326"
},
{
    "id": "STU-2026-550",
    "sqlId": "550",
    "admissionNo": "838",
    "rollNo": "0",
    "name": "HARSHIT",
    "photo": "35844893755fe24f2d84d7a9fc83a7cb.jpg",
    "dob": "2020-11-17",
    "gender": "Male",
    "class": "UKG",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "SONU",
        "motherName": "RANJANA",
        "fatherMobile": "9",
        "motherMobile": "9627739384",
        "fatherPhone": "9",
        "motherPhone": "9627739384",
        "address": "JARGWAN DEBAI BULANDSHAHR",
        "occupation": "A",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 85,
        "percentage": 96.6
    },
    "feeSummary": {
        "tuitionDue": 12500,
        "transportDue11Months": 5500,
        "totalDue": 18000,
        "totalPaid": 15300,
        "balance": 2700
    },
    "transport": {
        "stoppage": "JARGWAN DEBAI BULANDSHAHR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0674"
},
{
    "id": "STU-2026-552",
    "sqlId": "552",
    "admissionNo": "839",
    "rollNo": "0",
    "name": "AYUSH",
    "photo": "e0564a8299bbeda6d473df955682902a.jpg",
    "dob": "2021-11-08",
    "gender": "Male",
    "class": "NURSERY",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "SOMVIR",
        "motherName": "RACHANA DEVI",
        "fatherMobile": "1",
        "motherMobile": "8858676709",
        "fatherPhone": "1",
        "motherPhone": "8858676709",
        "address": "JARGWAN",
        "occupation": "A",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 86,
        "percentage": 97.7
    },
    "feeSummary": {
        "tuitionDue": 10500,
        "transportDue11Months": 5500,
        "totalDue": 16000,
        "totalPaid": 7200,
        "balance": 8800
    },
    "transport": {
        "stoppage": "JARGWAN",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-554"
    ],
    "familyId": "FAM-0670"
},
{
    "id": "STU-2026-553",
    "sqlId": "553",
    "admissionNo": "786",
    "rollNo": "0",
    "name": "AYUSH KUMAR",
    "photo": "bb952a8c2161ed44adb329fbe0d58de2.jpg",
    "dob": "2018-02-01",
    "gender": "Male",
    "class": "UKG",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "YASHVARDHAN",
        "motherName": "PREETI",
        "fatherMobile": "1",
        "motherMobile": "8130428303",
        "fatherPhone": "1",
        "motherPhone": "8130428303",
        "address": "KANAKPUR LOHGARH",
        "occupation": "A",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 87,
        "percentage": 98.9
    },
    "feeSummary": {
        "tuitionDue": 12500,
        "transportDue11Months": 5500,
        "totalDue": 18000,
        "totalPaid": 2700,
        "balance": 15300
    },
    "transport": {
        "stoppage": "KANAKPUR LOHGARH",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 3"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0673"
},
{
    "id": "STU-2026-554",
    "sqlId": "554",
    "admissionNo": "840",
    "rollNo": "0",
    "name": "ABHISHEK",
    "photo": "0bea44830e41b6b3c8c8bebd4aed9ac1.jpg",
    "dob": "2020-12-03",
    "gender": "Male",
    "class": "I",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "SOMVIR",
        "motherName": "RACHANA DEVI",
        "fatherMobile": "1",
        "motherMobile": "9627739384",
        "fatherPhone": "1",
        "motherPhone": "9627739384",
        "address": "JARGWAN",
        "occupation": "A",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 82,
        "percentage": 93.2
    },
    "feeSummary": {
        "tuitionDue": 13500,
        "transportDue11Months": 5500,
        "totalDue": 19000,
        "totalPaid": 16150,
        "balance": 2850
    },
    "transport": {
        "stoppage": "JARGWAN",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-552"
    ],
    "familyId": "FAM-0670"
},
{
    "id": "STU-2026-555",
    "sqlId": "555",
    "admissionNo": "787",
    "rollNo": "0",
    "name": "SRISHTI KUMARI",
    "photo": "defualt.png",
    "dob": "2023-08-03",
    "gender": "Female",
    "class": "PG",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "LOVEKUSH",
        "motherName": "RAJNI KUMARI",
        "fatherMobile": "8",
        "motherMobile": "9758300938",
        "fatherPhone": "8",
        "motherPhone": "9758300938",
        "address": "MUHAMMADPUR BADHERA",
        "occupation": "AGRICULTURE",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 83,
        "percentage": 94.3
    },
    "feeSummary": {
        "tuitionDue": 9500,
        "transportDue11Months": 5500,
        "totalDue": 15000,
        "totalPaid": 6750,
        "balance": 8250
    },
    "transport": {
        "stoppage": "MUHAMMADPUR BADHERA",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0667"
},
{
    "id": "STU-2026-557",
    "sqlId": "557",
    "admissionNo": "788",
    "rollNo": "0",
    "name": "JEESHU",
    "photo": "46dd04f70228149425dce2a6ccee1ba4.jpg",
    "dob": "2021-08-16",
    "gender": "Male",
    "class": "NURSERY",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "NARENDRA KUMAR",
        "motherName": "SEEMA",
        "fatherMobile": "1",
        "motherMobile": "9675078440",
        "fatherPhone": "1",
        "motherPhone": "9675078440",
        "address": "KALIYANPUR BHAGIRATHPUR",
        "occupation": "AGRICULTURE",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 84,
        "percentage": 95.5
    },
    "feeSummary": {
        "tuitionDue": 10500,
        "transportDue11Months": 5500,
        "totalDue": 16000,
        "totalPaid": 2400,
        "balance": 13600
    },
    "transport": {
        "stoppage": "KALIYANPUR BHAGIRATHPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 2"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0671"
},
{
    "id": "STU-2026-558",
    "sqlId": "558",
    "admissionNo": "842",
    "rollNo": "0",
    "name": "DHANYA KUMARI",
    "photo": "defualt.png",
    "dob": "2021-04-05",
    "gender": "Female",
    "class": "LKG",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "LEELU",
        "motherName": "LAXMI",
        "fatherMobile": "8505963663",
        "motherMobile": "8505963663",
        "fatherPhone": "8505963663",
        "motherPhone": "8505963663",
        "address": "KALIYANPUR BHAGIRATHPUR  ATROLI ALIGARH",
        "occupation": "AGRICULTURE",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 85,
        "percentage": 96.6
    },
    "feeSummary": {
        "tuitionDue": 11500,
        "transportDue11Months": 5500,
        "totalDue": 17000,
        "totalPaid": 14450,
        "balance": 2550
    },
    "transport": {
        "stoppage": "KALIYANPUR BHAGIRATHPUR  ATROLI ALIGARH",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0530"
},
{
    "id": "STU-2026-559",
    "sqlId": "559",
    "admissionNo": "789",
    "rollNo": "0",
    "name": "PIYUSH",
    "photo": "7b6edced4baeb8eaefe9be869b857acf.jpg",
    "dob": "2022-01-25",
    "gender": "Male",
    "class": "NURSERY",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "SURENDRA SINGH",
        "motherName": "MANJU DEVI",
        "fatherMobile": "6395926626",
        "motherMobile": "9720577595",
        "fatherPhone": "6395926626",
        "motherPhone": "9720577595",
        "address": "PESARI",
        "occupation": "AGRICULTURAL",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 86,
        "percentage": 97.7
    },
    "feeSummary": {
        "tuitionDue": 10500,
        "transportDue11Months": 5500,
        "totalDue": 16000,
        "totalPaid": 7200,
        "balance": 8800
    },
    "transport": {
        "stoppage": "PESARI",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 5"
    },
    "linkedSiblingIds": [
        "STU-2026-380"
    ],
    "familyId": "FAM-0531"
},
{
    "id": "STU-2026-560",
    "sqlId": "560",
    "admissionNo": "843",
    "rollNo": "0",
    "name": "SHANAYA RAO BARDHAN",
    "photo": "24c7491633e57bc4b6785625707b8e9c.jpg",
    "dob": "2022-06-06",
    "gender": "Female",
    "class": "NURSERY",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "PUNEET RAO BARDHAN",
        "motherName": "RACHNA KUMARI",
        "fatherMobile": "9675737053",
        "motherMobile": "9410020562",
        "fatherPhone": "9675737053",
        "motherPhone": "9410020562",
        "address": "MUHAMMADPUR BADHERA ATRAULI ALIGARH",
        "occupation": "AGRICULTURE",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 87,
        "percentage": 98.9
    },
    "feeSummary": {
        "tuitionDue": 10500,
        "transportDue11Months": 5500,
        "totalDue": 16000,
        "totalPaid": 2400,
        "balance": 13600
    },
    "transport": {
        "stoppage": "MUHAMMADPUR BADHERA ATRAULI ALIGARH",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0532"
},
{
    "id": "STU-2026-561",
    "sqlId": "561",
    "admissionNo": "790",
    "rollNo": "0",
    "name": "NEHA",
    "photo": "57d511d9a1a80bb010a159b6826e31b2.jpg",
    "dob": "2023-03-18",
    "gender": "Female",
    "class": "NURSERY",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "MALKHAN SINGH",
        "motherName": "OMVATI",
        "fatherMobile": "8859904907",
        "motherMobile": "8859904907",
        "fatherPhone": "8859904907",
        "motherPhone": "8859904907",
        "address": "NAGLA VIDHI",
        "occupation": "AGRICULTURAL",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 82,
        "percentage": 93.2
    },
    "feeSummary": {
        "tuitionDue": 10500,
        "transportDue11Months": 5500,
        "totalDue": 16000,
        "totalPaid": 13600,
        "balance": 2400
    },
    "transport": {
        "stoppage": "NAGLA VIDHI",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 4"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0533"
},
{
    "id": "STU-2026-562",
    "sqlId": "562",
    "admissionNo": "844",
    "rollNo": "84",
    "name": "KAUSHIK SHARMA",
    "photo": "d9b44f1bf454dfeb16a35bae23a23b01.jpg",
    "dob": "2012-01-01",
    "gender": "Male",
    "class": "VI",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "MEGHENDRA SHARMA",
        "motherName": "POOJA  DEVI",
        "fatherMobile": "7906340619",
        "motherMobile": "7906340619",
        "fatherPhone": "7906340619",
        "motherPhone": "7906340619",
        "address": "KUDHANI CHIRAURI DIBAI",
        "occupation": "AGRICULTURE",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 83,
        "percentage": 94.3
    },
    "feeSummary": {
        "tuitionDue": 16000,
        "transportDue11Months": 5500,
        "totalDue": 21500,
        "totalPaid": 9675,
        "balance": 11825
    },
    "transport": {
        "stoppage": "KUDHANI CHIRAURI DIBAI",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-648"
    ],
    "familyId": "FAM-0534"
},
{
    "id": "STU-2026-563",
    "sqlId": "563",
    "admissionNo": "791",
    "rollNo": "0",
    "name": "KALPANA",
    "photo": "a3b65ef9546cca7d253e1c0b7c543689.jpg",
    "dob": "2018-05-07",
    "gender": "Female",
    "class": "I",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "JITENDRA KUMAR",
        "motherName": "MAMTA DEVI",
        "fatherMobile": "7893204122",
        "motherMobile": "7893204122",
        "fatherPhone": "7893204122",
        "motherPhone": "7893204122",
        "address": "MAHARAJPUR",
        "occupation": "AGRICULTURAL",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 84,
        "percentage": 95.5
    },
    "feeSummary": {
        "tuitionDue": 13500,
        "transportDue11Months": 5500,
        "totalDue": 19000,
        "totalPaid": 2850,
        "balance": 16150
    },
    "transport": {
        "stoppage": "MAHARAJPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 5"
    },
    "linkedSiblingIds": [
        "STU-2026-564"
    ],
    "familyId": "FAM-0535"
},
{
    "id": "STU-2026-564",
    "sqlId": "564",
    "admissionNo": "792",
    "rollNo": "0",
    "name": "MAYANK",
    "photo": "defualt.png",
    "dob": "2019-12-09",
    "gender": "Male",
    "class": "UKG",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "JITENDRA KUMAR",
        "motherName": "MAMTA DEVI",
        "fatherMobile": "7893204122",
        "motherMobile": "7893204122",
        "fatherPhone": "7893204122",
        "motherPhone": "7893204122",
        "address": "MAHARAJPUR",
        "occupation": "AGRICULTURAL",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 85,
        "percentage": 96.6
    },
    "feeSummary": {
        "tuitionDue": 12500,
        "transportDue11Months": 5500,
        "totalDue": 18000,
        "totalPaid": 15300,
        "balance": 2700
    },
    "transport": {
        "stoppage": "MAHARAJPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 5"
    },
    "linkedSiblingIds": [
        "STU-2026-563"
    ],
    "familyId": "FAM-0535"
},
{
    "id": "STU-2026-565",
    "sqlId": "565",
    "admissionNo": "793",
    "rollNo": "0",
    "name": "NAMRTA",
    "photo": "7c084af9a57b6047195d5c4c21257d3b.jpg",
    "dob": "2021-09-13",
    "gender": "Female",
    "class": "LKG",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "JITENDRA KUMAR",
        "motherName": "PINKI",
        "fatherMobile": "9719247840",
        "motherMobile": "9720557778",
        "fatherPhone": "9719247840",
        "motherPhone": "9720557778",
        "address": "NAGLA VIDHI",
        "occupation": "AGRICULTURAL",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 86,
        "percentage": 97.7
    },
    "feeSummary": {
        "tuitionDue": 11500,
        "transportDue11Months": 5500,
        "totalDue": 17000,
        "totalPaid": 7650,
        "balance": 9350
    },
    "transport": {
        "stoppage": "NAGLA VIDHI",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0537"
},
{
    "id": "STU-2026-566",
    "sqlId": "566",
    "admissionNo": "794",
    "rollNo": "0",
    "name": "KANAK",
    "photo": "cf2d8b2f7d27619b87c9ca92dea30b55.jpg",
    "dob": "2021-04-16",
    "gender": "Female",
    "class": "LKG",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "SHRAWAN KUMAR",
        "motherName": "SARVESH DEVI",
        "fatherMobile": "8958127235",
        "motherMobile": "8130905457",
        "fatherPhone": "8958127235",
        "motherPhone": "8130905457",
        "address": "GOKULPUR KHADAR",
        "occupation": "AGRICULTURAL",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 87,
        "percentage": 98.9
    },
    "feeSummary": {
        "tuitionDue": 11500,
        "transportDue11Months": 5500,
        "totalDue": 17000,
        "totalPaid": 2550,
        "balance": 14450
    },
    "transport": {
        "stoppage": "GOKULPUR KHADAR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-567"
    ],
    "familyId": "FAM-0539"
},
{
    "id": "STU-2026-567",
    "sqlId": "567",
    "admissionNo": "795",
    "rollNo": "0",
    "name": "SAHIL",
    "photo": "54448fe60ebad7f21fe3395582d5c9d4.jpg",
    "dob": "2020-10-29",
    "gender": "Male",
    "class": "UKG",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "SHRAWAN KUMAR",
        "motherName": "SARVESH DEVI",
        "fatherMobile": "8958127235",
        "motherMobile": "8130905457",
        "fatherPhone": "8958127235",
        "motherPhone": "8130905457",
        "address": "GOKULPUR KHADAR",
        "occupation": "AGRICULTURAL",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 82,
        "percentage": 93.2
    },
    "feeSummary": {
        "tuitionDue": 12500,
        "transportDue11Months": 5500,
        "totalDue": 18000,
        "totalPaid": 15300,
        "balance": 2700
    },
    "transport": {
        "stoppage": "GOKULPUR KHADAR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-566"
    ],
    "familyId": "FAM-0539"
},
{
    "id": "STU-2026-568",
    "sqlId": "568",
    "admissionNo": "796",
    "rollNo": "0",
    "name": "SATYAM RAJPUT",
    "photo": "defualt.png",
    "dob": "2022-07-30",
    "gender": "Male",
    "class": "NURSERY",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "SACHIN KUMAR",
        "motherName": "ROSHNI",
        "fatherMobile": "8650222936",
        "motherMobile": "8650965580",
        "fatherPhone": "8650222936",
        "motherPhone": "8650965580",
        "address": "NAGLA DHARKPUR",
        "occupation": "AGRICULTURAL",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 83,
        "percentage": 94.3
    },
    "feeSummary": {
        "tuitionDue": 10500,
        "transportDue11Months": 5500,
        "totalDue": 16000,
        "totalPaid": 7200,
        "balance": 8800
    },
    "transport": {
        "stoppage": "NAGLA DHARKPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0540"
},
{
    "id": "STU-2026-569",
    "sqlId": "569",
    "admissionNo": "797",
    "rollNo": "0",
    "name": "HEMANT RAJPUT",
    "photo": "1905b00c6c8a0b03647fdcddbb9d0d2f.jpg",
    "dob": "2022-04-10",
    "gender": "Male",
    "class": "NURSERY",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "DEEPAK KUMAR",
        "motherName": "RENU",
        "fatherMobile": "9536165087",
        "motherMobile": "9536165087",
        "fatherPhone": "9536165087",
        "motherPhone": "9536165087",
        "address": "NAGLA DHARKPUR",
        "occupation": "AGRICULTURAL",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 84,
        "percentage": 95.5
    },
    "feeSummary": {
        "tuitionDue": 10500,
        "transportDue11Months": 5500,
        "totalDue": 16000,
        "totalPaid": 2400,
        "balance": 13600
    },
    "transport": {
        "stoppage": "NAGLA DHARKPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 1"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0541"
},
{
    "id": "STU-2026-570",
    "sqlId": "570",
    "admissionNo": "798",
    "rollNo": "0",
    "name": "NAMRITA",
    "photo": "e8f4147b3ddbf95843cd415226697b14.jpg",
    "dob": "2016-02-03",
    "gender": "Female",
    "class": "V",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "AMIT KUMAR",
        "motherName": "SHIKHA",
        "fatherMobile": "9627131068",
        "motherMobile": "9627131068",
        "fatherPhone": "9627131068",
        "motherPhone": "9627131068",
        "address": "NAGLA GARVI",
        "occupation": "AGRICULTURAL",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 85,
        "percentage": 96.6
    },
    "feeSummary": {
        "tuitionDue": 15500,
        "transportDue11Months": 5500,
        "totalDue": 21000,
        "totalPaid": 17850,
        "balance": 3150
    },
    "transport": {
        "stoppage": "NAGLA GARVI",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 1"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0542"
},
{
    "id": "STU-2026-571",
    "sqlId": "571",
    "admissionNo": "799",
    "rollNo": "0",
    "name": "YASTHI",
    "photo": "c0b299f648c7293381117b3b3e396dd1.jpg",
    "dob": "2023-02-15",
    "gender": "Female",
    "class": "PG",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "MANVEER SINGH",
        "motherName": "POOJA",
        "fatherMobile": "8393905570",
        "motherMobile": "97205223578",
        "fatherPhone": "8393905570",
        "motherPhone": "97205223578",
        "address": "DADHAR ALUPURA",
        "occupation": "AGRICULTURAL",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 86,
        "percentage": 97.7
    },
    "feeSummary": {
        "tuitionDue": 9500,
        "transportDue11Months": 5500,
        "totalDue": 15000,
        "totalPaid": 6750,
        "balance": 8250
    },
    "transport": {
        "stoppage": "DADHAR ALUPURA",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 2"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0543"
},
{
    "id": "STU-2026-572",
    "sqlId": "572",
    "admissionNo": "800",
    "rollNo": "0",
    "name": "DEVANSH",
    "photo": "fff312ab75ba6c8c1d151b19f8d7437a.jpg",
    "dob": "2021-10-30",
    "gender": "Male",
    "class": "NURSERY",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "SATISH KUMAR",
        "motherName": "MADHU",
        "fatherMobile": "9675939394",
        "motherMobile": "9675939394",
        "fatherPhone": "9675939394",
        "motherPhone": "9675939394",
        "address": "JIRAULI DHOOM SINGH",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 87,
        "percentage": 98.9
    },
    "feeSummary": {
        "tuitionDue": 10500,
        "transportDue11Months": 5500,
        "totalDue": 16000,
        "totalPaid": 2400,
        "balance": 13600
    },
    "transport": {
        "stoppage": "JIRAULI DHOOM SINGH",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 2"
    },
    "linkedSiblingIds": [
        "STU-2026-325",
        "STU-2026-354"
    ],
    "familyId": "FAM-0314"
},
{
    "id": "STU-2026-573",
    "sqlId": "573",
    "admissionNo": "33",
    "rollNo": "94",
    "name": "TAKSHIT",
    "photo": "f47df60188731446ed513c4a7d92f26a.jpg",
    "dob": "2012-12-30",
    "gender": "Male",
    "class": "VI",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "VIRESH KUMAR",
        "motherName": "VEENA DEVI",
        "fatherMobile": "9536981196",
        "motherMobile": "9536981196",
        "fatherPhone": "9536981196",
        "motherPhone": "9536981196",
        "address": "MONIPURA RAMGHAT",
        "occupation": "AGRICULTURAL",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 82,
        "percentage": 93.2
    },
    "feeSummary": {
        "tuitionDue": 16000,
        "transportDue11Months": 5500,
        "totalDue": 21500,
        "totalPaid": 18275,
        "balance": 3225
    },
    "transport": {
        "stoppage": "MONIPURA RAMGHAT",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0545"
},
{
    "id": "STU-2026-574",
    "sqlId": "574",
    "admissionNo": "845",
    "rollNo": "211",
    "name": "KANISHKA BHARDWAJ",
    "photo": "0e2259dfdea5235819737eb9c99324b8.jpg",
    "dob": "2019-02-07",
    "gender": "Female",
    "class": "II",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "SUMIT KUMAR",
        "motherName": "SHIVANI SHARMA",
        "fatherMobile": "9149043576",
        "motherMobile": "8395050888",
        "fatherPhone": "9149043576",
        "motherPhone": "8395050888",
        "address": "JARGWAN DIBAI",
        "occupation": "AGRICULTURE",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 83,
        "percentage": 94.3
    },
    "feeSummary": {
        "tuitionDue": 14000,
        "transportDue11Months": 5500,
        "totalDue": 19500,
        "totalPaid": 8775,
        "balance": 10725
    },
    "transport": {
        "stoppage": "JARGWAN DIBAI",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-576"
    ],
    "familyId": "FAM-0546"
},
{
    "id": "STU-2026-575",
    "sqlId": "575",
    "admissionNo": "802",
    "rollNo": "94",
    "name": "HARSHIT YADAV",
    "photo": "dbf434467a63d3662f113972c11e5dcb.jpg",
    "dob": "2014-11-30",
    "gender": "Male",
    "class": "V",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "VIRESH KUMAR",
        "motherName": "VEENA DEVI",
        "fatherMobile": "9027319150",
        "motherMobile": "9536981196",
        "fatherPhone": "9027319150",
        "motherPhone": "9536981196",
        "address": "MONIPURA RAMGHAT",
        "occupation": "AGRICULTURAL",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 84,
        "percentage": 95.5
    },
    "feeSummary": {
        "tuitionDue": 15500,
        "transportDue11Months": 5500,
        "totalDue": 21000,
        "totalPaid": 3150,
        "balance": 17850
    },
    "transport": {
        "stoppage": "MONIPURA RAMGHAT",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0547"
},
{
    "id": "STU-2026-576",
    "sqlId": "576",
    "admissionNo": "846",
    "rollNo": "0",
    "name": "SIDDHARTH BHARDWAJ",
    "photo": "defualt.png",
    "dob": "2020-02-24",
    "gender": "Male",
    "class": "I",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "SUMIT KUMAR",
        "motherName": "SHIVANI SHARMA",
        "fatherMobile": "9149043576",
        "motherMobile": "8395050888",
        "fatherPhone": "9149043576",
        "motherPhone": "8395050888",
        "address": "JARGWAN",
        "occupation": "AGRICULTURE",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 85,
        "percentage": 96.6
    },
    "feeSummary": {
        "tuitionDue": 13500,
        "transportDue11Months": 5500,
        "totalDue": 19000,
        "totalPaid": 16150,
        "balance": 2850
    },
    "transport": {
        "stoppage": "JARGWAN",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-574"
    ],
    "familyId": "FAM-0546"
},
{
    "id": "STU-2026-577",
    "sqlId": "577",
    "admissionNo": "803",
    "rollNo": "0",
    "name": "ARAV KUMAR",
    "photo": "393ad794769f7ad9a7cb7d0187bb6bf7.jpg",
    "dob": "1970-01-01",
    "gender": "Male",
    "class": "NURSERY",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "NEERAJ KUMAR",
        "motherName": "RINKI DEVI",
        "fatherMobile": "9536981196",
        "motherMobile": "9536981196",
        "fatherPhone": "9536981196",
        "motherPhone": "9536981196",
        "address": "MONIPURA RAMGHAT",
        "occupation": "AGRICULTURAL",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 86,
        "percentage": 97.7
    },
    "feeSummary": {
        "tuitionDue": 10500,
        "transportDue11Months": 5500,
        "totalDue": 16000,
        "totalPaid": 7200,
        "balance": 8800
    },
    "transport": {
        "stoppage": "MONIPURA RAMGHAT",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 3"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0549"
},
{
    "id": "STU-2026-578",
    "sqlId": "578",
    "admissionNo": "847",
    "rollNo": "0",
    "name": "MOKSH GAUR",
    "photo": "4c1f682a09a54c702e566b7b7c3733ee.jpg",
    "dob": "2021-02-27",
    "gender": "Male",
    "class": "NURSERY",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "AVINASH GAUR",
        "motherName": "JYOTI GAUR",
        "fatherMobile": "7906980831",
        "motherMobile": "9758598789",
        "fatherPhone": "7906980831",
        "motherPhone": "9758598789",
        "address": "RAMGHAT DIBAI",
        "occupation": "LABOUR",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 87,
        "percentage": 98.9
    },
    "feeSummary": {
        "tuitionDue": 10500,
        "transportDue11Months": 5500,
        "totalDue": 16000,
        "totalPaid": 2400,
        "balance": 13600
    },
    "transport": {
        "stoppage": "RAMGHAT DIBAI",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0550"
},
{
    "id": "STU-2026-579",
    "sqlId": "579",
    "admissionNo": "804",
    "rollNo": "0",
    "name": "DIVYANSHI KUMARI",
    "photo": "427d6ff8ab5e8ac820f07969171a6d77.jpg",
    "dob": "2022-04-29",
    "gender": "Female",
    "class": "LKG",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "JITENDRA KUMAR",
        "motherName": "SHITAL",
        "fatherMobile": "7836811431",
        "motherMobile": "7836811431",
        "fatherPhone": "7836811431",
        "motherPhone": "7836811431",
        "address": "BAIJALA",
        "occupation": "AGRICULTURAL",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 82,
        "percentage": 93.2
    },
    "feeSummary": {
        "tuitionDue": 11500,
        "transportDue11Months": 5500,
        "totalDue": 17000,
        "totalPaid": 14450,
        "balance": 2550
    },
    "transport": {
        "stoppage": "BAIJALA",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 1"
    },
    "linkedSiblingIds": [
        "STU-2026-580"
    ],
    "familyId": "FAM-0551"
},
{
    "id": "STU-2026-580",
    "sqlId": "580",
    "admissionNo": "805",
    "rollNo": "0",
    "name": "MANVI KUMARI",
    "photo": "d82a3c927e220eac4ca906522f0bb047.jpg",
    "dob": "2019-10-30",
    "gender": "Female",
    "class": "I",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "JITENDRA KUMAR",
        "motherName": "SHITAL",
        "fatherMobile": "7836811431",
        "motherMobile": "7836811431",
        "fatherPhone": "7836811431",
        "motherPhone": "7836811431",
        "address": "BAIJALA",
        "occupation": "AGRICULTURAL",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 83,
        "percentage": 94.3
    },
    "feeSummary": {
        "tuitionDue": 13500,
        "transportDue11Months": 5500,
        "totalDue": 19000,
        "totalPaid": 8550,
        "balance": 10450
    },
    "transport": {
        "stoppage": "BAIJALA",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 1"
    },
    "linkedSiblingIds": [
        "STU-2026-579"
    ],
    "familyId": "FAM-0551"
},
{
    "id": "STU-2026-581",
    "sqlId": "581",
    "admissionNo": "848",
    "rollNo": "0",
    "name": "NAKSH",
    "photo": "defualt.png",
    "dob": "2022-07-11",
    "gender": "Male",
    "class": "NURSERY",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "VIKRAM",
        "motherName": "JYOTI",
        "fatherMobile": "8433106825",
        "motherMobile": "8433106825",
        "fatherPhone": "8433106825",
        "motherPhone": "8433106825",
        "address": "RAMGHAT",
        "occupation": "LABOUR",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 84,
        "percentage": 95.5
    },
    "feeSummary": {
        "tuitionDue": 10500,
        "transportDue11Months": 5500,
        "totalDue": 16000,
        "totalPaid": 2400,
        "balance": 13600
    },
    "transport": {
        "stoppage": "RAMGHAT",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0553"
},
{
    "id": "STU-2026-582",
    "sqlId": "582",
    "admissionNo": "806",
    "rollNo": "58",
    "name": "LAKSHY BHARDWAJ",
    "photo": "fee24f89e16eac74ab9dac084148f46f.jpg",
    "dob": "2013-10-19",
    "gender": "Male",
    "class": "VII",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "VISHNUDATT",
        "motherName": "PRITI",
        "fatherMobile": "8800714031",
        "motherMobile": "8755083275",
        "fatherPhone": "8800714031",
        "motherPhone": "8755083275",
        "address": "RAMGHAT",
        "occupation": "AGRICULTURAL",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 85,
        "percentage": 96.6
    },
    "feeSummary": {
        "tuitionDue": 16500,
        "transportDue11Months": 5500,
        "totalDue": 22000,
        "totalPaid": 18700,
        "balance": 3300
    },
    "transport": {
        "stoppage": "RAMGHAT",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 5"
    },
    "linkedSiblingIds": [
        "STU-2026-584"
    ],
    "familyId": "FAM-0554"
},
{
    "id": "STU-2026-583",
    "sqlId": "583",
    "admissionNo": "849",
    "rollNo": "0",
    "name": "KARUNA",
    "photo": "22e4e648ff7964a5511734bdd38bdf88.jpg",
    "dob": "2022-01-01",
    "gender": "Female",
    "class": "NURSERY",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "JAGDISH YADAV",
        "motherName": "NEERESH DEVI",
        "fatherMobile": "8447784346",
        "motherMobile": "7664869979",
        "fatherPhone": "8447784346",
        "motherPhone": "7664869979",
        "address": "RAMVAS MONIPURA",
        "occupation": "AGRICULTURE",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 86,
        "percentage": 97.7
    },
    "feeSummary": {
        "tuitionDue": 10500,
        "transportDue11Months": 5500,
        "totalDue": 16000,
        "totalPaid": 7200,
        "balance": 8800
    },
    "transport": {
        "stoppage": "RAMVAS MONIPURA",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-359"
    ],
    "familyId": "FAM-0555"
},
{
    "id": "STU-2026-584",
    "sqlId": "584",
    "admissionNo": "807",
    "rollNo": "0",
    "name": "YUVANG BHARDWAJ",
    "photo": "dc066bfdff3c35bb71138039942c2a87.jpg",
    "dob": "2020-01-24",
    "gender": "Male",
    "class": "UKG",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "VISHNUDATT",
        "motherName": "PRITI",
        "fatherMobile": "8800714031",
        "motherMobile": "8755083275",
        "fatherPhone": "8800714031",
        "motherPhone": "8755083275",
        "address": "RAMGHAT",
        "occupation": "AGRICULTURAL",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 87,
        "percentage": 98.9
    },
    "feeSummary": {
        "tuitionDue": 12500,
        "transportDue11Months": 5500,
        "totalDue": 18000,
        "totalPaid": 2700,
        "balance": 15300
    },
    "transport": {
        "stoppage": "RAMGHAT",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 5"
    },
    "linkedSiblingIds": [
        "STU-2026-582"
    ],
    "familyId": "FAM-0554"
},
{
    "id": "STU-2026-585",
    "sqlId": "585",
    "admissionNo": "850",
    "rollNo": "0",
    "name": "POORVI",
    "photo": "c103e0a34d01e9455f03bcc98e5166b3.jpg",
    "dob": "2023-03-28",
    "gender": "Female",
    "class": "NURSERY",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "RAVI KUMAR",
        "motherName": "SUMAN",
        "fatherMobile": "9675315744",
        "motherMobile": "9675315744",
        "fatherPhone": "9675315744",
        "motherPhone": "9675315744",
        "address": "NAGLA DHARAKPUR",
        "occupation": "AGRICULTURE",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 82,
        "percentage": 93.2
    },
    "feeSummary": {
        "tuitionDue": 10500,
        "transportDue11Months": 5500,
        "totalDue": 16000,
        "totalPaid": 13600,
        "balance": 2400
    },
    "transport": {
        "stoppage": "NAGLA DHARAKPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0557"
},
{
    "id": "STU-2026-586",
    "sqlId": "586",
    "admissionNo": "808",
    "rollNo": "0",
    "name": "VARSHITA",
    "photo": "23c3e419ac0fc37f0e6d4a2bd9355e7f.jpg",
    "dob": "2020-02-05",
    "gender": "Female",
    "class": "UKG",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "SHYAM KUMAR SHARMA",
        "motherName": "POOJA SHARMA",
        "fatherMobile": "9536723700",
        "motherMobile": "9536723700",
        "fatherPhone": "9536723700",
        "motherPhone": "9536723700",
        "address": "LOHGARH",
        "occupation": "AGRICULTURAL",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 83,
        "percentage": 94.3
    },
    "feeSummary": {
        "tuitionDue": 12500,
        "transportDue11Months": 5500,
        "totalDue": 18000,
        "totalPaid": 8100,
        "balance": 9900
    },
    "transport": {
        "stoppage": "LOHGARH",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 2"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0558"
},
{
    "id": "STU-2026-587",
    "sqlId": "587",
    "admissionNo": "851",
    "rollNo": "3",
    "name": "HEMANT",
    "photo": "345299b8da12d0df9a3149effff927ac.jpg",
    "dob": "2012-08-07",
    "gender": "Male",
    "class": "IX",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "NAURANG SINGH",
        "motherName": "SUNITA DEVI",
        "fatherMobile": "SAME",
        "motherMobile": "8142594231",
        "fatherPhone": "SAME",
        "motherPhone": "8142594231",
        "address": "RETUKA NAGLA / MAHARAJPUR",
        "occupation": "LABOUR",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 84,
        "percentage": 95.5
    },
    "feeSummary": {
        "tuitionDue": 19500,
        "transportDue11Months": 5500,
        "totalDue": 25000,
        "totalPaid": 3750,
        "balance": 21250
    },
    "transport": {
        "stoppage": "RETUKA NAGLA / MAHARAJPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 5"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0559"
},
{
    "id": "STU-2026-588",
    "sqlId": "588",
    "admissionNo": "852",
    "rollNo": "0",
    "name": "DEVID YADAV",
    "photo": "defualt.png",
    "dob": "2022-03-15",
    "gender": "Male",
    "class": "PG",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "PUSHPENDRA  KUMAR",
        "motherName": "KM.BHOORI",
        "fatherMobile": "6396452835",
        "motherMobile": "6396452835",
        "fatherPhone": "6396452835",
        "motherPhone": "6396452835",
        "address": "BAGINAGLA, CHIRAURI,",
        "occupation": "AGRICULTURE",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 85,
        "percentage": 96.6
    },
    "feeSummary": {
        "tuitionDue": 9500,
        "transportDue11Months": 5500,
        "totalDue": 15000,
        "totalPaid": 12750,
        "balance": 2250
    },
    "transport": {
        "stoppage": "BAGINAGLA",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 4"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0560"
},
{
    "id": "STU-2026-589",
    "sqlId": "589",
    "admissionNo": "853",
    "rollNo": "0",
    "name": "SARVJIT",
    "photo": "eed617636fee099563beb58586fcd035.jpg",
    "dob": "2021-09-20",
    "gender": "Male",
    "class": "NURSERY",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "SOMVEER  SINGH",
        "motherName": "GAYTRI",
        "fatherMobile": "SAME",
        "motherMobile": "9301173742",
        "fatherPhone": "SAME",
        "motherPhone": "9301173742",
        "address": "KALIYANPUR BHAGIRATHPUR  ATRAULI  ALIGARH",
        "occupation": "AGRICULTURE",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 86,
        "percentage": 97.7
    },
    "feeSummary": {
        "tuitionDue": 10500,
        "transportDue11Months": 5500,
        "totalDue": 16000,
        "totalPaid": 7200,
        "balance": 8800
    },
    "transport": {
        "stoppage": "KALIYANPUR BHAGIRATHPUR  ATRAULI  ALIGARH",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 2"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0561"
},
{
    "id": "STU-2026-590",
    "sqlId": "590",
    "admissionNo": "854",
    "rollNo": "153",
    "name": "PRINCE KUMAR",
    "photo": "dd27eb6158d2f162b7280948ed1dd6df.jpg",
    "dob": "2018-04-30",
    "gender": "Male",
    "class": "IV",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "VINOD KUMAR",
        "motherName": "POOJA DEVI",
        "fatherMobile": "9718402012",
        "motherMobile": "9718402012",
        "fatherPhone": "9718402012",
        "motherPhone": "9718402012",
        "address": "NAGLA DHARAKPUR",
        "occupation": "AGRICULTURE",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "LODHI",
        "religion": "HINDU"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 87,
        "percentage": 98.9
    },
    "feeSummary": {
        "tuitionDue": 15000,
        "transportDue11Months": 5500,
        "totalDue": 20500,
        "totalPaid": 3075,
        "balance": 17425
    },
    "transport": {
        "stoppage": "NAGLA DHARAKPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 1"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0562"
},
{
    "id": "STU-2026-591",
    "sqlId": "591",
    "admissionNo": "855",
    "rollNo": "0",
    "name": "MANYA SHARMA",
    "photo": "8a874ca205d9bb4b1fa8ed5c66c9c5ef.jpg",
    "dob": "2022-04-21",
    "gender": "Female",
    "class": "LKG",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "ASHEESH KUMAR",
        "motherName": "KRISHNA SHARMA",
        "fatherMobile": "9997620644",
        "motherMobile": "9997620644",
        "fatherPhone": "9997620644",
        "motherPhone": "9997620644",
        "address": "RAMGHAT BULANDSHAHR",
        "occupation": "EMPLOYMENT",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 82,
        "percentage": 93.2
    },
    "feeSummary": {
        "tuitionDue": 11500,
        "transportDue11Months": 5500,
        "totalDue": 17000,
        "totalPaid": 14450,
        "balance": 2550
    },
    "transport": {
        "stoppage": "RAMGHAT BULANDSHAHR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 5"
    },
    "linkedSiblingIds": [
        "STU-2026-592"
    ],
    "familyId": "FAM-0564"
},
{
    "id": "STU-2026-592",
    "sqlId": "592",
    "admissionNo": "856",
    "rollNo": "0",
    "name": "DEVANSH",
    "photo": "0af55ff3cbcf6191c4ecea2adb43aaa7.jpg",
    "dob": "2020-06-14",
    "gender": "Male",
    "class": "UKG",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "ASHEESH KUMAR",
        "motherName": "KRISHNA SHARMA",
        "fatherMobile": "9997620644",
        "motherMobile": "9997620644",
        "fatherPhone": "9997620644",
        "motherPhone": "9997620644",
        "address": "RAMGHAT BULANDSHAHR",
        "occupation": "EMPLOYMENT",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 83,
        "percentage": 94.3
    },
    "feeSummary": {
        "tuitionDue": 12500,
        "transportDue11Months": 5500,
        "totalDue": 18000,
        "totalPaid": 8100,
        "balance": 9900
    },
    "transport": {
        "stoppage": "RAMGHAT BULANDSHAHR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 5"
    },
    "linkedSiblingIds": [
        "STU-2026-591"
    ],
    "familyId": "FAM-0564"
},
{
    "id": "STU-2026-593",
    "sqlId": "593",
    "admissionNo": "857",
    "rollNo": "0",
    "name": "TANISHKA",
    "photo": "defualt.png",
    "dob": "2024-01-07",
    "gender": "Female",
    "class": "PG",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "RAJENDRA KUMAR",
        "motherName": "NIKKI YADAV",
        "fatherMobile": "9654980598",
        "motherMobile": "9654980558",
        "fatherPhone": "9654980598",
        "motherPhone": "9654980558",
        "address": "MONIPURA RAMGHAT",
        "occupation": "AGRICULTURE",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 84,
        "percentage": 95.5
    },
    "feeSummary": {
        "tuitionDue": 9500,
        "transportDue11Months": 5500,
        "totalDue": 15000,
        "totalPaid": 2250,
        "balance": 12750
    },
    "transport": {
        "stoppage": "MONIPURA RAMGHAT",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0565"
},
{
    "id": "STU-2026-594",
    "sqlId": "594",
    "admissionNo": "858",
    "rollNo": "217",
    "name": "NITYA KUMARI",
    "photo": "3eb76bf58871369d8a95b1da3172df08.jpg",
    "dob": "2018-11-02",
    "gender": "Female",
    "class": "II",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "GAURAV KUMAR",
        "motherName": "PRABHA CHAUDHARY",
        "fatherMobile": "7078686929",
        "motherMobile": "9897573635",
        "fatherPhone": "7078686929",
        "motherPhone": "9897573635",
        "address": "MAHAKA PANHERA",
        "occupation": "PVT. JOB",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 85,
        "percentage": 96.6
    },
    "feeSummary": {
        "tuitionDue": 14000,
        "transportDue11Months": 5500,
        "totalDue": 19500,
        "totalPaid": 16575,
        "balance": 2925
    },
    "transport": {
        "stoppage": "MAHAKA PANHERA",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 2"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0566"
},
{
    "id": "STU-2026-595",
    "sqlId": "595",
    "admissionNo": "859",
    "rollNo": "0",
    "name": "NAYRA CHAUDHARY",
    "photo": "313b31a11566fb395d694db1c7caa9a5.jpg",
    "dob": "1970-01-01",
    "gender": "Female",
    "class": "NURSERY",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "GAURAV KUMAR",
        "motherName": "ARTI SHARMA",
        "fatherMobile": "6396944247",
        "motherMobile": "6396944247",
        "fatherPhone": "6396944247",
        "motherPhone": "6396944247",
        "address": "MAHAKA PANHERA",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 86,
        "percentage": 97.7
    },
    "feeSummary": {
        "tuitionDue": 10500,
        "transportDue11Months": 5500,
        "totalDue": 16000,
        "totalPaid": 7200,
        "balance": 8800
    },
    "transport": {
        "stoppage": "MAHAKA PANHERA",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 2"
    },
    "linkedSiblingIds": [
        "STU-2026-311"
    ],
    "familyId": "FAM-0300"
},
{
    "id": "STU-2026-596",
    "sqlId": "596",
    "admissionNo": "860",
    "rollNo": "143",
    "name": "PANKAJ KUMAR",
    "photo": "2dc7c12e123c71252eb436bd5d498c91.jpg",
    "dob": "2013-09-02",
    "gender": "Male",
    "class": "II",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "LEELADHAR SINGH",
        "motherName": "SUSHILA DEVI",
        "fatherMobile": "7409641112",
        "motherMobile": "8006178283",
        "fatherPhone": "7409641112",
        "motherPhone": "8006178283",
        "address": "BAJHERA DHARAKPUR",
        "occupation": "AGRICULTURE",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "HINDU"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 87,
        "percentage": 98.9
    },
    "feeSummary": {
        "tuitionDue": 14000,
        "transportDue11Months": 5500,
        "totalDue": 19500,
        "totalPaid": 2925,
        "balance": 16575
    },
    "transport": {
        "stoppage": "BAJHERA DHARAKPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-597"
    ],
    "familyId": "FAM-0568"
},
{
    "id": "STU-2026-597",
    "sqlId": "597",
    "admissionNo": "861",
    "rollNo": "143",
    "name": "HARSH",
    "photo": "a9e3b39881109fc791eb4c518104f60e.jpg",
    "dob": "2013-03-02",
    "gender": "Male",
    "class": "IV",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "LEELADHAR SINGH",
        "motherName": "SUSHILA DEVI",
        "fatherMobile": "7409641112",
        "motherMobile": "7409641142",
        "fatherPhone": "7409641112",
        "motherPhone": "7409641142",
        "address": "BAJHERA DHARAKPUR",
        "occupation": "AGRICULTURE",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "LODHI",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 82,
        "percentage": 93.2
    },
    "feeSummary": {
        "tuitionDue": 15000,
        "transportDue11Months": 5500,
        "totalDue": 20500,
        "totalPaid": 17425,
        "balance": 3075
    },
    "transport": {
        "stoppage": "BAJHERA DHARAKPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-596"
    ],
    "familyId": "FAM-0568"
},
{
    "id": "STU-2026-598",
    "sqlId": "598",
    "admissionNo": "862",
    "rollNo": "0",
    "name": "HARSHIT",
    "photo": "c59aa6285262f0e8b2e7d46ccdb0ff37.jpg",
    "dob": "2020-09-05",
    "gender": "Male",
    "class": "LKG",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "UMESH KUMAR",
        "motherName": "RUBI  DEVI",
        "fatherMobile": "9761246448",
        "motherMobile": "8394870177",
        "fatherPhone": "9761246448",
        "motherPhone": "8394870177",
        "address": "KALIYANPUR BHAGIRATHPUR ATRAULI",
        "occupation": "AGRICULTURE",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 83,
        "percentage": 94.3
    },
    "feeSummary": {
        "tuitionDue": 11500,
        "transportDue11Months": 5500,
        "totalDue": 17000,
        "totalPaid": 7650,
        "balance": 9350
    },
    "transport": {
        "stoppage": "KALIYANPUR BHAGIRATHPUR ATRAULI",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 2"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0569"
},
{
    "id": "STU-2026-599",
    "sqlId": "599",
    "admissionNo": "863",
    "rollNo": "140",
    "name": "DUSHYANT",
    "photo": "c6f16230855dc6bc0983c0e58455d7ba.jpg",
    "dob": "2014-04-09",
    "gender": "Male",
    "class": "IV",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "PRAVESH KUMAR",
        "motherName": "PRITI DEVI",
        "fatherMobile": "9758494344",
        "motherMobile": "9758494344",
        "fatherPhone": "9758494344",
        "motherPhone": "9758494344",
        "address": "POOTHRI KHURD SHIKARPUR",
        "occupation": "AGRICULTURE",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "KHATEEK",
        "religion": "HINDU"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 84,
        "percentage": 95.5
    },
    "feeSummary": {
        "tuitionDue": 15000,
        "transportDue11Months": 5500,
        "totalDue": 20500,
        "totalPaid": 3075,
        "balance": 17425
    },
    "transport": {
        "stoppage": "POOTHRI KHURD SHIKARPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0570"
},
{
    "id": "STU-2026-600",
    "sqlId": "600",
    "admissionNo": "864",
    "rollNo": "0",
    "name": "RIYANSH PRATAP SINGH",
    "photo": "a487a2d58a3d0beb467c7f540cce3a41.jpg",
    "dob": "2022-04-01",
    "gender": "Male",
    "class": "NURSERY",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "RAJKUMAR",
        "motherName": "ROOBI",
        "fatherMobile": "9634623967",
        "motherMobile": "9634623967",
        "fatherPhone": "9634623967",
        "motherPhone": "9634623967",
        "address": "MUHAMMADPUR BADHERA ATRAULI ALIGARH",
        "occupation": "AGRICULTURE",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 85,
        "percentage": 96.6
    },
    "feeSummary": {
        "tuitionDue": 10500,
        "transportDue11Months": 5500,
        "totalDue": 16000,
        "totalPaid": 13600,
        "balance": 2400
    },
    "transport": {
        "stoppage": "MUHAMMADPUR BADHERA ATRAULI ALIGARH",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0571"
},
{
    "id": "STU-2026-601",
    "sqlId": "601",
    "admissionNo": "94",
    "rollNo": "0",
    "name": "ANANYA VERMA",
    "photo": "a55bdf5ea6d5726ae2845d3991f959ab.jpg",
    "dob": "2019-12-15",
    "gender": "Male",
    "class": "I",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "VIKAS VERMA",
        "motherName": "PRIYANKA KUMARI",
        "fatherMobile": "9760960201",
        "motherMobile": "9660960201",
        "fatherPhone": "9760960201",
        "motherPhone": "9660960201",
        "address": "RAMGHAT BANGER",
        "occupation": "AGRICULTURE",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 86,
        "percentage": 97.7
    },
    "feeSummary": {
        "tuitionDue": 13500,
        "transportDue11Months": 5500,
        "totalDue": 19000,
        "totalPaid": 8550,
        "balance": 10450
    },
    "transport": {
        "stoppage": "RAMGHAT BANGER",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0572"
},
{
    "id": "STU-2026-602",
    "sqlId": "602",
    "admissionNo": "866",
    "rollNo": "0",
    "name": "ABHAY",
    "photo": "a5612f2dd4394928e0d6b6a9e6de28e9.jpg",
    "dob": "2021-04-04",
    "gender": "Male",
    "class": "LKG",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "RINKU KUMAR",
        "motherName": "POONAM DEVI",
        "fatherMobile": "9568894183",
        "motherMobile": "9568894183",
        "fatherPhone": "9568894183",
        "motherPhone": "9568894183",
        "address": "HARVANSHPUR JIRAULI DHOOM SINGH",
        "occupation": "AGRICULTURE",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 87,
        "percentage": 98.9
    },
    "feeSummary": {
        "tuitionDue": 11500,
        "transportDue11Months": 5500,
        "totalDue": 17000,
        "totalPaid": 2550,
        "balance": 14450
    },
    "transport": {
        "stoppage": "HARVANSHPUR JIRAULI DHOOM SINGH",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0573"
},
{
    "id": "STU-2026-603",
    "sqlId": "603",
    "admissionNo": "867",
    "rollNo": "167",
    "name": "AJAY",
    "photo": "f1286025614d6fa11f9a30c9ad4da3f4.jpg",
    "dob": "2019-07-25",
    "gender": "Male",
    "class": "III",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "SANJEEV YADAV",
        "motherName": "MEERA",
        "fatherMobile": "7505792058 (UNCLE)",
        "motherMobile": "6398937867",
        "fatherPhone": "7505792058 (UNCLE)",
        "motherPhone": "6398937867",
        "address": "NAGLA AJMERI GUNNOR SAMBHAL",
        "occupation": "AGRICULTURE",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "AHEER",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 82,
        "percentage": 93.2
    },
    "feeSummary": {
        "tuitionDue": 14500,
        "transportDue11Months": 5500,
        "totalDue": 20000,
        "totalPaid": 17000,
        "balance": 3000
    },
    "transport": {
        "stoppage": "NAGLA AJMERI GUNNOR SAMBHAL",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0574"
},
{
    "id": "STU-2026-604",
    "sqlId": "604",
    "admissionNo": "868",
    "rollNo": "221",
    "name": "RAVIT",
    "photo": "f37b8f4bb8dfffe4affba474d1241582.jpg",
    "dob": "2017-02-01",
    "gender": "Male",
    "class": "II",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "MUKESH",
        "motherName": "BHOORI",
        "fatherMobile": "9528585886",
        "motherMobile": "6395434933",
        "fatherPhone": "9528585886",
        "motherPhone": "6395434933",
        "address": "NAGLA AJMERI GUNNOR SAMBHAL",
        "occupation": "AGRICULTURE",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 83,
        "percentage": 94.3
    },
    "feeSummary": {
        "tuitionDue": 14000,
        "transportDue11Months": 5500,
        "totalDue": 19500,
        "totalPaid": 8775,
        "balance": 10725
    },
    "transport": {
        "stoppage": "NAGLA AJMERI GUNNOR SAMBHAL",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0575"
},
{
    "id": "STU-2026-605",
    "sqlId": "605",
    "admissionNo": "809",
    "rollNo": "0",
    "name": "PRAGYA",
    "photo": "872bb38c5d67c625f404f1b8bbd24b73.jpg",
    "dob": "2022-03-01",
    "gender": "Male",
    "class": "LKG",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "YOGESH  KUMAR",
        "motherName": "MEENA KUMARI",
        "fatherMobile": "SAME",
        "motherMobile": "8445454712",
        "fatherPhone": "SAME",
        "motherPhone": "8445454712",
        "address": "NAGLA KOTHI JARGWAN BULANDSHAHR",
        "occupation": "AGRICULTURE",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 84,
        "percentage": 95.5
    },
    "feeSummary": {
        "tuitionDue": 11500,
        "transportDue11Months": 5500,
        "totalDue": 17000,
        "totalPaid": 2550,
        "balance": 14450
    },
    "transport": {
        "stoppage": "NAGLA KOTHI JARGWAN BULANDSHAHR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0576"
},
{
    "id": "STU-2026-606",
    "sqlId": "606",
    "admissionNo": "810",
    "rollNo": "0",
    "name": "JYOTI KUMARI",
    "photo": "fd48e56cdd082b6874f2da7eed974eb0.jpg",
    "dob": "2020-11-19",
    "gender": "Female",
    "class": "LKG",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "NARESH KUMAR",
        "motherName": "SUNITA DEVI",
        "fatherMobile": "SAME",
        "motherMobile": "7668611207",
        "fatherPhone": "SAME",
        "motherPhone": "7668611207",
        "address": "GANESHPUR GOVINDPUR",
        "occupation": "AGRICULTURE",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 85,
        "percentage": 96.6
    },
    "feeSummary": {
        "tuitionDue": 11500,
        "transportDue11Months": 5500,
        "totalDue": 17000,
        "totalPaid": 14450,
        "balance": 2550
    },
    "transport": {
        "stoppage": "GANESHPUR GOVINDPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0577"
},
{
    "id": "STU-2026-607",
    "sqlId": "607",
    "admissionNo": "811",
    "rollNo": "0",
    "name": "MOHIT KUMAR",
    "photo": "cd93485d91dcfaa45d8fa5430f53608e.jpg",
    "dob": "2019-10-20",
    "gender": "Male",
    "class": "UKG",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "UMESH KUMAR",
        "motherName": "HEMLATA DEVI",
        "fatherMobile": "7060399415",
        "motherMobile": "8800498878",
        "fatherPhone": "7060399415",
        "motherPhone": "8800498878",
        "address": "NAGLA VIDHI JARGWAN",
        "occupation": "AGRICULTURE",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 86,
        "percentage": 97.7
    },
    "feeSummary": {
        "tuitionDue": 12500,
        "transportDue11Months": 5500,
        "totalDue": 18000,
        "totalPaid": 8100,
        "balance": 9900
    },
    "transport": {
        "stoppage": "NAGLA VIDHI JARGWAN",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0578"
},
{
    "id": "STU-2026-608",
    "sqlId": "608",
    "admissionNo": "812",
    "rollNo": "0",
    "name": "RIYANSH KUMAR",
    "photo": "d918b2e85c7bc9e91353bad7f36a4616.jpg",
    "dob": "2021-10-07",
    "gender": "Male",
    "class": "LKG",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "UMESH KUMAR",
        "motherName": "HEMLATA DEVI",
        "fatherMobile": "SAME",
        "motherMobile": "8800498878",
        "fatherPhone": "SAME",
        "motherPhone": "8800498878",
        "address": "NAGLA VIDHI JARGWAN",
        "occupation": "AGRICULTURE",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 87,
        "percentage": 98.9
    },
    "feeSummary": {
        "tuitionDue": 11500,
        "transportDue11Months": 5500,
        "totalDue": 17000,
        "totalPaid": 2550,
        "balance": 14450
    },
    "transport": {
        "stoppage": "NAGLA VIDHI JARGWAN",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0579"
},
{
    "id": "STU-2026-609",
    "sqlId": "609",
    "admissionNo": "813",
    "rollNo": "0",
    "name": "DEEP",
    "photo": "e0448fb2cf924816820146edcc8f2e95.jpg",
    "dob": "2022-04-27",
    "gender": "Male",
    "class": "LKG",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "PAVAN KUMAR GUPTA",
        "motherName": "SEEMA GUPTA",
        "fatherMobile": "SAME",
        "motherMobile": "7505645260",
        "fatherPhone": "SAME",
        "motherPhone": "7505645260",
        "address": "RAMGHAT BANGER",
        "occupation": "AGRICULTURE",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 82,
        "percentage": 93.2
    },
    "feeSummary": {
        "tuitionDue": 11500,
        "transportDue11Months": 5500,
        "totalDue": 17000,
        "totalPaid": 14450,
        "balance": 2550
    },
    "transport": {
        "stoppage": "RAMGHAT BANGER",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0580"
},
{
    "id": "STU-2026-610",
    "sqlId": "610",
    "admissionNo": "814",
    "rollNo": "0",
    "name": "DAKSH KUMAR GUPTA",
    "photo": "a983ca471103ac2f1ffc3137d708643d.jpg",
    "dob": "2020-01-01",
    "gender": "Male",
    "class": "I",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "PAVAN KUMAR GUPTA",
        "motherName": "SEEMA GUPTA",
        "fatherMobile": "7505645260",
        "motherMobile": "7505645260",
        "fatherPhone": "7505645260",
        "motherPhone": "7505645260",
        "address": "RAMGHAT BULANDSHAHR",
        "occupation": "AGRICULTURE",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 83,
        "percentage": 94.3
    },
    "feeSummary": {
        "tuitionDue": 13500,
        "transportDue11Months": 5500,
        "totalDue": 19000,
        "totalPaid": 8550,
        "balance": 10450
    },
    "transport": {
        "stoppage": "RAMGHAT BULANDSHAHR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0581"
},
{
    "id": "STU-2026-611",
    "sqlId": "611",
    "admissionNo": "815",
    "rollNo": "162",
    "name": "TRAPTI KUMARI",
    "photo": "11351406928de98021eebe3847daa878.jpg",
    "dob": "2015-10-15",
    "gender": "Female",
    "class": "IV",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "HARENDRA KUMAR",
        "motherName": "ANJALI",
        "fatherMobile": "1",
        "motherMobile": "9719713665",
        "fatherPhone": "1",
        "motherPhone": "9719713665",
        "address": "BAJHERA POST DHARAKPUR",
        "occupation": "AGRICULTURE",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 84,
        "percentage": 95.5
    },
    "feeSummary": {
        "tuitionDue": 15000,
        "transportDue11Months": 5500,
        "totalDue": 20500,
        "totalPaid": 3075,
        "balance": 17425
    },
    "transport": {
        "stoppage": "BAJHERA POST DHARAKPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0582"
},
{
    "id": "STU-2026-612",
    "sqlId": "612",
    "admissionNo": "816",
    "rollNo": "0",
    "name": "KHUSHI",
    "photo": "4df8aba712aec034ce69fdc855e2ca72.jpg",
    "dob": "2021-08-21",
    "gender": "Female",
    "class": "LKG",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "RAMBABU SINGH",
        "motherName": "URMILA",
        "fatherMobile": "9719304150",
        "motherMobile": "9719304150",
        "fatherPhone": "9719304150",
        "motherPhone": "9719304150",
        "address": "NAGLA   SHUMALI",
        "occupation": "AGRICULTURE",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 85,
        "percentage": 96.6
    },
    "feeSummary": {
        "tuitionDue": 11500,
        "transportDue11Months": 5500,
        "totalDue": 17000,
        "totalPaid": 14450,
        "balance": 2550
    },
    "transport": {
        "stoppage": "NAGLA   SHUMALI",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0583"
},
{
    "id": "STU-2026-613",
    "sqlId": "613",
    "admissionNo": "817",
    "rollNo": "113",
    "name": "KRISHNASKANT",
    "photo": "ba525ba74a42c7abe33e6b06bc7c34f4.jpg",
    "dob": "2017-07-14",
    "gender": "Male",
    "class": "V",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "MUNISH KUMAR",
        "motherName": "MANOJ BHARTI",
        "fatherMobile": "9457076490",
        "motherMobile": "9368185424",
        "fatherPhone": "9457076490",
        "motherPhone": "9368185424",
        "address": "SILHARI RAMGHAT BULANDSHAR",
        "occupation": "LABOUR",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 86,
        "percentage": 97.7
    },
    "feeSummary": {
        "tuitionDue": 15500,
        "transportDue11Months": 5500,
        "totalDue": 21000,
        "totalPaid": 9450,
        "balance": 11550
    },
    "transport": {
        "stoppage": "SILHARI RAMGHAT BULANDSHAR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 3"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0584"
},
{
    "id": "STU-2026-614",
    "sqlId": "614",
    "admissionNo": "818",
    "rollNo": "36",
    "name": "SONAM",
    "photo": "4bec9a928de64c966eae38f9e6029c5c.jpg",
    "dob": "2012-09-17",
    "gender": "Male",
    "class": "IX",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "DURGESH KUMAR",
        "motherName": "SEEMA DEVI",
        "fatherMobile": "SAME",
        "motherMobile": "9720542899",
        "fatherPhone": "SAME",
        "motherPhone": "9720542899",
        "address": "KUNJALPUR  GAHTOLI",
        "occupation": "AGRICULTURE",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 87,
        "percentage": 98.9
    },
    "feeSummary": {
        "tuitionDue": 19500,
        "transportDue11Months": 5500,
        "totalDue": 25000,
        "totalPaid": 3750,
        "balance": 21250
    },
    "transport": {
        "stoppage": "KUNJALPUR  GAHTOLI",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 2"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0585"
},
{
    "id": "STU-2026-615",
    "sqlId": "615",
    "admissionNo": "819",
    "rollNo": "0",
    "name": "SAKSHI PALI",
    "photo": "b9969595e41ea3cf3f030616c02e61e5.jpg",
    "dob": "2022-07-18",
    "gender": "Female",
    "class": "PG",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "DHARMVEER",
        "motherName": "KM. RENU",
        "fatherMobile": "SAME",
        "motherMobile": "7830987469",
        "fatherPhone": "SAME",
        "motherPhone": "7830987469",
        "address": "PESARI RAMGHAT",
        "occupation": "AGRICULTURE",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 82,
        "percentage": 93.2
    },
    "feeSummary": {
        "tuitionDue": 9500,
        "transportDue11Months": 5500,
        "totalDue": 15000,
        "totalPaid": 12750,
        "balance": 2250
    },
    "transport": {
        "stoppage": "PESARI RAMGHAT",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 5"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0586"
},
{
    "id": "STU-2026-616",
    "sqlId": "616",
    "admissionNo": "820",
    "rollNo": "77",
    "name": "DEEPESH",
    "photo": "37529f1c607837ab49fdcdfc54cbaf8d.jpg",
    "dob": "2014-05-02",
    "gender": "Male",
    "class": "VI",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "JITENDRA",
        "motherName": "SUDHA",
        "fatherMobile": "SAME",
        "motherMobile": "8937053454",
        "fatherPhone": "SAME",
        "motherPhone": "8937053454",
        "address": "NAGLA VIDHI",
        "occupation": "AGRICULTURE",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 83,
        "percentage": 94.3
    },
    "feeSummary": {
        "tuitionDue": 16000,
        "transportDue11Months": 5500,
        "totalDue": 21500,
        "totalPaid": 9675,
        "balance": 11825
    },
    "transport": {
        "stoppage": "NAGLA VIDHI",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0587"
},
{
    "id": "STU-2026-617",
    "sqlId": "617",
    "admissionNo": "821",
    "rollNo": "0",
    "name": "ANSH KUMAR",
    "photo": "eddf4f7be0352c370650945103d7e06d.jpg",
    "dob": "2022-11-10",
    "gender": "Male",
    "class": "LKG",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "ASHOK KUMAR",
        "motherName": "RINKI KUMARI",
        "fatherMobile": "SAME",
        "motherMobile": "8954102860",
        "fatherPhone": "SAME",
        "motherPhone": "8954102860",
        "address": "SAME",
        "occupation": "LABOUR",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "HINDU"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 84,
        "percentage": 95.5
    },
    "feeSummary": {
        "tuitionDue": 11500,
        "transportDue11Months": 5500,
        "totalDue": 17000,
        "totalPaid": 2550,
        "balance": 14450
    },
    "transport": {
        "stoppage": "SAME",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 4"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0588"
},
{
    "id": "STU-2026-618",
    "sqlId": "618",
    "admissionNo": "822",
    "rollNo": "0",
    "name": "SAKSHI VERMA",
    "photo": "8656f28b6197b995b2994ae48c319a37.jpg",
    "dob": "2019-05-15",
    "gender": "Female",
    "class": "UKG",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "RAMKISHAN VERMA",
        "motherName": "MAMTA DEVI",
        "fatherMobile": "SAME",
        "motherMobile": "7505408627",
        "fatherPhone": "SAME",
        "motherPhone": "7505408627",
        "address": "GANESHPUR GOVINDPUR",
        "occupation": "AGRICULTURE",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 85,
        "percentage": 96.6
    },
    "feeSummary": {
        "tuitionDue": 12500,
        "transportDue11Months": 5500,
        "totalDue": 18000,
        "totalPaid": 15300,
        "balance": 2700
    },
    "transport": {
        "stoppage": "GANESHPUR GOVINDPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 6"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0589"
},
{
    "id": "STU-2026-619",
    "sqlId": "619",
    "admissionNo": "823",
    "rollNo": "0",
    "name": "UDIT VERMA",
    "photo": "607724be3cef4c67a3b1a143686de5cd.jpg",
    "dob": "2022-03-07",
    "gender": "Male",
    "class": "NURSERY",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "RAMKISHAN VERMA",
        "motherName": "MAMTA DEVI",
        "fatherMobile": "SAME",
        "motherMobile": "9536931983",
        "fatherPhone": "SAME",
        "motherPhone": "9536931983",
        "address": "GANESHPUR GOVINDPUR",
        "occupation": "AGRICULTURE",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 86,
        "percentage": 97.7
    },
    "feeSummary": {
        "tuitionDue": 10500,
        "transportDue11Months": 5500,
        "totalDue": 16000,
        "totalPaid": 7200,
        "balance": 8800
    },
    "transport": {
        "stoppage": "GANESHPUR GOVINDPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 6"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0590"
},
{
    "id": "STU-2026-620",
    "sqlId": "620",
    "admissionNo": "824",
    "rollNo": "40",
    "name": "CHANDANI CHAUDHARY",
    "photo": "e35ed981994b39880e3653bb21737f63.jpg",
    "dob": "2012-09-01",
    "gender": "Female",
    "class": "IX",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "JASVANT SINGH",
        "motherName": "BALA DEVI",
        "fatherMobile": "SAME",
        "motherMobile": "7830636123",
        "fatherPhone": "SAME",
        "motherPhone": "7830636123",
        "address": "CHAKATHAL ATRAULI",
        "occupation": "AGRICULTURE",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 87,
        "percentage": 98.9
    },
    "feeSummary": {
        "tuitionDue": 19500,
        "transportDue11Months": 5500,
        "totalDue": 25000,
        "totalPaid": 3750,
        "balance": 21250
    },
    "transport": {
        "stoppage": "CHAKATHAL ATRAULI",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0591"
},
{
    "id": "STU-2026-621",
    "sqlId": "621",
    "admissionNo": "825",
    "rollNo": "40",
    "name": "AARUSH CHAUDHARY",
    "photo": "7d65383fb6d6991bdb659fb29ec8263b.jpg",
    "dob": "2015-01-01",
    "gender": "Male",
    "class": "V",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "JASVANT SINGH",
        "motherName": "BALA DEVI",
        "fatherMobile": "7830636123",
        "motherMobile": "7830636123",
        "fatherPhone": "7830636123",
        "motherPhone": "7830636123",
        "address": "CHAKATHAL ATRAULI",
        "occupation": "AGRICULTURE",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 82,
        "percentage": 93.2
    },
    "feeSummary": {
        "tuitionDue": 15500,
        "transportDue11Months": 5500,
        "totalDue": 21000,
        "totalPaid": 17850,
        "balance": 3150
    },
    "transport": {
        "stoppage": "CHAKATHAL ATRAULI",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0592"
},
{
    "id": "STU-2026-622",
    "sqlId": "622",
    "admissionNo": "826",
    "rollNo": "0",
    "name": "MADHAV",
    "photo": "defualt.png",
    "dob": "2020-08-21",
    "gender": "Male",
    "class": "UKG",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "VIJAY KUMAR",
        "motherName": "RAJNI KUMARI",
        "fatherMobile": "SAME",
        "motherMobile": "8865088876",
        "fatherPhone": "SAME",
        "motherPhone": "8865088876",
        "address": "NAGLA KOTHI JARGWAN BULANDSHAHR",
        "occupation": "LABOUR",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 83,
        "percentage": 94.3
    },
    "feeSummary": {
        "tuitionDue": 12500,
        "transportDue11Months": 5500,
        "totalDue": 18000,
        "totalPaid": 8100,
        "balance": 9900
    },
    "transport": {
        "stoppage": "NAGLA KOTHI JARGWAN BULANDSHAHR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0593"
},
{
    "id": "STU-2026-623",
    "sqlId": "623",
    "admissionNo": "827",
    "rollNo": "0",
    "name": "PRAVESH YADAV",
    "photo": "9beb6295fdc5c1a5f007cef20a2d7278.jpg",
    "dob": "2022-01-23",
    "gender": "Male",
    "class": "LKG",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "MUNISH KUMAR",
        "motherName": "REKHA",
        "fatherMobile": "SAME",
        "motherMobile": "9412129478",
        "fatherPhone": "SAME",
        "motherPhone": "9412129478",
        "address": "RAMVVAS URF MONIPURA RAMGHAT BULANDSHSHR",
        "occupation": "AGRICULTURE",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 84,
        "percentage": 95.5
    },
    "feeSummary": {
        "tuitionDue": 11500,
        "transportDue11Months": 5500,
        "totalDue": 17000,
        "totalPaid": 2550,
        "balance": 14450
    },
    "transport": {
        "stoppage": "RAMVVAS URF MONIPURA RAMGHAT BULANDSHSHR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0594"
},
{
    "id": "STU-2026-626",
    "sqlId": "626",
    "admissionNo": "830",
    "rollNo": "42",
    "name": "BABLU",
    "photo": "defualt.png",
    "dob": "1970-01-01",
    "gender": "Male",
    "class": "IX",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "INDRAVESH",
        "motherName": "ANITA",
        "fatherMobile": "7505641639",
        "motherMobile": "7505641639",
        "fatherPhone": "7505641639",
        "motherPhone": "7505641639",
        "address": "NAGLA AJMERI DANDA SAMBHAL",
        "occupation": "12TH",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 85,
        "percentage": 96.6
    },
    "feeSummary": {
        "tuitionDue": 19500,
        "transportDue11Months": 5500,
        "totalDue": 25000,
        "totalPaid": 21250,
        "balance": 3750
    },
    "transport": {
        "stoppage": "NAGLA AJMERI DANDA SAMBHAL",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-628"
    ],
    "familyId": "FAM-0597"
},
{
    "id": "STU-2026-628",
    "sqlId": "628",
    "admissionNo": "891",
    "rollNo": "0",
    "name": "SONU",
    "photo": "defualt.png",
    "dob": "2013-07-20",
    "gender": "Male",
    "class": "V",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "INDRAVESH",
        "motherName": "ANITA",
        "fatherMobile": "7505641639",
        "motherMobile": "7505641639",
        "fatherPhone": "7505641639",
        "motherPhone": "7505641639",
        "address": "NAGLA AJMERI DANDA SAMBHAL",
        "occupation": "12TH",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 86,
        "percentage": 97.7
    },
    "feeSummary": {
        "tuitionDue": 15500,
        "transportDue11Months": 5500,
        "totalDue": 21000,
        "totalPaid": 9450,
        "balance": 11550
    },
    "transport": {
        "stoppage": "NAGLA AJMERI DANDA SAMBHAL",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-626"
    ],
    "familyId": "FAM-0597"
},
{
    "id": "STU-2026-629",
    "sqlId": "629",
    "admissionNo": "892",
    "rollNo": "0",
    "name": "DUSHYANT",
    "photo": "2ef1f533c58d347317f776bd9e05da57.jpg",
    "dob": "2016-06-01",
    "gender": "Male",
    "class": "I",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "RAJU",
        "motherName": "ASHA DEVI",
        "fatherMobile": "9761122723",
        "motherMobile": "9761122723",
        "fatherPhone": "9761122723",
        "motherPhone": "9761122723",
        "address": "NAGLA AJMERI DANDA SAMBHAL",
        "occupation": "10TH",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 87,
        "percentage": 98.9
    },
    "feeSummary": {
        "tuitionDue": 13500,
        "transportDue11Months": 5500,
        "totalDue": 19000,
        "totalPaid": 2850,
        "balance": 16150
    },
    "transport": {
        "stoppage": "NAGLA AJMERI DANDA SAMBHAL",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0600"
},
{
    "id": "STU-2026-633",
    "sqlId": "633",
    "admissionNo": "896",
    "rollNo": "0",
    "name": "SHRADHA SHARMA",
    "photo": "8c84a35f650dde5610e6471fd7bb76d4.jpg",
    "dob": "2016-07-16",
    "gender": "Female",
    "class": "V",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "HARENDRA SHARMA",
        "motherName": "POOJA SHARMA",
        "fatherMobile": "8445897089",
        "motherMobile": "8445897089",
        "fatherPhone": "8445897089",
        "motherPhone": "8445897089",
        "address": "RAMGHAT BANGER DEBAI BULANDSHAHR",
        "occupation": "AGRICULTURE",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 82,
        "percentage": 93.2
    },
    "feeSummary": {
        "tuitionDue": 15500,
        "transportDue11Months": 5500,
        "totalDue": 21000,
        "totalPaid": 17850,
        "balance": 3150
    },
    "transport": {
        "stoppage": "RAMGHAT BANGER DEBAI BULANDSHAHR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0604"
},
{
    "id": "STU-2026-634",
    "sqlId": "634",
    "admissionNo": "897",
    "rollNo": "0",
    "name": "CHANDRAGUPT",
    "photo": "837c34c883568c3e348bffaa3caa3dac.jpg",
    "dob": "2022-02-06",
    "gender": "Male",
    "class": "NURSERY",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "DEVENDRA KUMAR",
        "motherName": "SUMAN DEVI",
        "fatherMobile": "SAME",
        "motherMobile": "7417319689",
        "fatherPhone": "SAME",
        "motherPhone": "7417319689",
        "address": "NAGLA DHARAKPUR DEBAI BULANDSHAHR",
        "occupation": "AGRICULTURE",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 83,
        "percentage": 94.3
    },
    "feeSummary": {
        "tuitionDue": 10500,
        "transportDue11Months": 5500,
        "totalDue": 16000,
        "totalPaid": 7200,
        "balance": 8800
    },
    "transport": {
        "stoppage": "NAGLA DHARAKPUR DEBAI BULANDSHAHR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 1"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0605"
},
{
    "id": "STU-2026-635",
    "sqlId": "635",
    "admissionNo": "898",
    "rollNo": "0",
    "name": "SHREYA SHARMA",
    "photo": "defualt.png",
    "dob": "2023-09-29",
    "gender": "Female",
    "class": "PG",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "PRASHANT KUMAR",
        "motherName": "CHANDANI",
        "fatherMobile": "SAME",
        "motherMobile": "8384888479",
        "fatherPhone": "SAME",
        "motherPhone": "8384888479",
        "address": "JARGWAN BULANDSHAHR",
        "occupation": "BUSSUNESS",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 84,
        "percentage": 95.5
    },
    "feeSummary": {
        "tuitionDue": 9500,
        "transportDue11Months": 5500,
        "totalDue": 15000,
        "totalPaid": 2250,
        "balance": 12750
    },
    "transport": {
        "stoppage": "JARGWAN BULANDSHAHR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0606"
},
{
    "id": "STU-2026-636",
    "sqlId": "636",
    "admissionNo": "899",
    "rollNo": "0",
    "name": "ARAV",
    "photo": "eec778455b22fa635dfcb81223cf34f7.jpg",
    "dob": "2017-05-23",
    "gender": "Male",
    "class": "I",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "MANOJ KUMAR",
        "motherName": "MADHU",
        "fatherMobile": "SAME",
        "motherMobile": "9870897428",
        "fatherPhone": "SAME",
        "motherPhone": "9870897428",
        "address": "NAGLA JATNI RAMGHAT BULANDSHAHR",
        "occupation": "AGRICULTURE/PRIVATE JOB",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 85,
        "percentage": 96.6
    },
    "feeSummary": {
        "tuitionDue": 13500,
        "transportDue11Months": 5500,
        "totalDue": 19000,
        "totalPaid": 16150,
        "balance": 2850
    },
    "transport": {
        "stoppage": "NAGLA JATNI RAMGHAT BULANDSHAHR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 5"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0607"
},
{
    "id": "STU-2026-637",
    "sqlId": "637",
    "admissionNo": "900",
    "rollNo": "0",
    "name": "NITYA",
    "photo": "1925a126122afd8162e46f6b9b671a6a.jpg",
    "dob": "2021-04-12",
    "gender": "Female",
    "class": "LKG",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "LOVKESH",
        "motherName": "SEEMA DEVI",
        "fatherMobile": "9560118289",
        "motherMobile": "9560118289",
        "fatherPhone": "9560118289",
        "motherPhone": "9560118289",
        "address": "MUHAMMADPUR BADHERA ATRAULI ALIGARH",
        "occupation": "10TH",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 86,
        "percentage": 97.7
    },
    "feeSummary": {
        "tuitionDue": 11500,
        "transportDue11Months": 5500,
        "totalDue": 17000,
        "totalPaid": 7650,
        "balance": 9350
    },
    "transport": {
        "stoppage": "MUHAMMADPUR BADHERA ATRAULI ALIGARH",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0608"
},
{
    "id": "STU-2026-638",
    "sqlId": "638",
    "admissionNo": "901",
    "rollNo": "102",
    "name": "AYUSH",
    "photo": "d8185f68faaba0a6215a544570076f4f.jpg",
    "dob": "2014-08-17",
    "gender": "Male",
    "class": "V",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "HARENDRA KUMAR",
        "motherName": "Manju DEVI",
        "fatherMobile": "9761973483",
        "motherMobile": "9873569964",
        "fatherPhone": "9761973483",
        "motherPhone": "9873569964",
        "address": "JARGWAN BULANDSHAHR",
        "occupation": "AGRICULTURE",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "AHEER",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 87,
        "percentage": 98.9
    },
    "feeSummary": {
        "tuitionDue": 15500,
        "transportDue11Months": 5500,
        "totalDue": 21000,
        "totalPaid": 3150,
        "balance": 17850
    },
    "transport": {
        "stoppage": "JARGWAN BULANDSHAHR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 3"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0609"
},
{
    "id": "STU-2026-639",
    "sqlId": "639",
    "admissionNo": "902",
    "rollNo": "89",
    "name": "POOJA RAJPUT",
    "photo": "defualt.png",
    "dob": "2014-03-12",
    "gender": "Male",
    "class": "VI",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "YATENDRA",
        "motherName": "MEENA",
        "fatherMobile": "8700176774",
        "motherMobile": "8439048856",
        "fatherPhone": "8700176774",
        "motherPhone": "8439048856",
        "address": "BAJHERA",
        "occupation": "AGRICULTURE",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 82,
        "percentage": 93.2
    },
    "feeSummary": {
        "tuitionDue": 16000,
        "transportDue11Months": 5500,
        "totalDue": 21500,
        "totalPaid": 18275,
        "balance": 3225
    },
    "transport": {
        "stoppage": "BAJHERA",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0610"
},
{
    "id": "STU-2026-640",
    "sqlId": "640",
    "admissionNo": "903",
    "rollNo": "0",
    "name": "ESHIKA RAGHAV",
    "photo": "b55d49d072bd552c78e007eb81bba4a7.jpg",
    "dob": "2022-02-15",
    "gender": "Female",
    "class": "LKG",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "DHARMENDRA",
        "motherName": "SHIVA",
        "fatherMobile": "7838726958",
        "motherMobile": "6396536661",
        "fatherPhone": "7838726958",
        "motherPhone": "6396536661",
        "address": "JIRAULI DHOOM SINGH",
        "occupation": "AGRICULTURE",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 83,
        "percentage": 94.3
    },
    "feeSummary": {
        "tuitionDue": 11500,
        "transportDue11Months": 5500,
        "totalDue": 17000,
        "totalPaid": 7650,
        "balance": 9350
    },
    "transport": {
        "stoppage": "JIRAULI DHOOM SINGH",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0611"
},
{
    "id": "STU-2026-641",
    "sqlId": "641",
    "admissionNo": "904",
    "rollNo": "0",
    "name": "RIYANSHI AGRAWAL",
    "photo": "defualt.png",
    "dob": "2023-07-25",
    "gender": "Male",
    "class": "PG",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "SHIVAM",
        "motherName": "MANSI",
        "fatherMobile": "6398983141",
        "motherMobile": "8384837949",
        "fatherPhone": "6398983141",
        "motherPhone": "8384837949",
        "address": "JARGWAN BULANDSHAHR",
        "occupation": "BUSSUNESS",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 84,
        "percentage": 95.5
    },
    "feeSummary": {
        "tuitionDue": 9500,
        "transportDue11Months": 5500,
        "totalDue": 15000,
        "totalPaid": 2250,
        "balance": 12750
    },
    "transport": {
        "stoppage": "JARGWAN BULANDSHAHR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-526"
    ],
    "familyId": "FAM-0612"
},
{
    "id": "STU-2026-642",
    "sqlId": "642",
    "admissionNo": "905",
    "rollNo": "205",
    "name": "DIMPAL",
    "photo": "dd31f15f41fe2c81f198af8f39a6af02.jpg",
    "dob": "2016-12-25",
    "gender": "Male",
    "class": "II",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "RAVENDRA KUMAR",
        "motherName": "RANI DEVI",
        "fatherMobile": "SAME",
        "motherMobile": "9105439039",
        "fatherPhone": "SAME",
        "motherPhone": "9105439039",
        "address": "NAGLA VIDHI JARGWAN",
        "occupation": "LABOUR",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 85,
        "percentage": 96.6
    },
    "feeSummary": {
        "tuitionDue": 14000,
        "transportDue11Months": 5500,
        "totalDue": 19500,
        "totalPaid": 16575,
        "balance": 2925
    },
    "transport": {
        "stoppage": "NAGLA VIDHI JARGWAN",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 1"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0613"
},
{
    "id": "STU-2026-643",
    "sqlId": "643",
    "admissionNo": "906",
    "rollNo": "0",
    "name": "RIYANSH TOMAR",
    "photo": "f028f1a20967cd0e3e58f72d4952feb6.jpg",
    "dob": "2022-08-20",
    "gender": "Male",
    "class": "NURSERY",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "ARUN KUMAR",
        "motherName": "SARASWATI",
        "fatherMobile": "8439543960",
        "motherMobile": "7536023654",
        "fatherPhone": "8439543960",
        "motherPhone": "7536023654",
        "address": "MUHAMMADPUR BADHERA",
        "occupation": "AGRICULTURAL",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "THAKUR",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 86,
        "percentage": 97.7
    },
    "feeSummary": {
        "tuitionDue": 10500,
        "transportDue11Months": 5500,
        "totalDue": 16000,
        "totalPaid": 7200,
        "balance": 8800
    },
    "transport": {
        "stoppage": "MUHAMMADPUR BADHERA",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0614"
},
{
    "id": "STU-2026-644",
    "sqlId": "644",
    "admissionNo": "907",
    "rollNo": "2",
    "name": "HARSHIT KUMAR",
    "photo": "defualt.png",
    "dob": "2011-08-09",
    "gender": "Male",
    "class": "IX",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "AMIT KUMAR SHARMA",
        "motherName": "DURGESH SHARMA",
        "fatherMobile": "8395050888",
        "motherMobile": "8510822051",
        "fatherPhone": "8395050888",
        "motherPhone": "8510822051",
        "address": "JARGWAN",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 87,
        "percentage": 98.9
    },
    "feeSummary": {
        "tuitionDue": 19500,
        "transportDue11Months": 5500,
        "totalDue": 25000,
        "totalPaid": 3750,
        "balance": 21250
    },
    "transport": {
        "stoppage": "JARGWAN",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-367"
    ],
    "familyId": "FAM-0354"
},
{
    "id": "STU-2026-645",
    "sqlId": "645",
    "admissionNo": "908",
    "rollNo": "0",
    "name": "DAKSH VASHISHTHA",
    "photo": "bededc5f87fee9d5611c09a1b0a5a344.jpg",
    "dob": "2022-06-20",
    "gender": "Male",
    "class": "PG",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "AKASH SHARMA",
        "motherName": "KAJAL KUMARI",
        "fatherMobile": "9368751908",
        "motherMobile": "9368751908",
        "fatherPhone": "9368751908",
        "motherPhone": "9368751908",
        "address": "LOHGARH",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 82,
        "percentage": 93.2
    },
    "feeSummary": {
        "tuitionDue": 9500,
        "transportDue11Months": 5500,
        "totalDue": 15000,
        "totalPaid": 12750,
        "balance": 2250
    },
    "transport": {
        "stoppage": "LOHGARH",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-473"
    ],
    "familyId": "FAM-0449"
},
{
    "id": "STU-2026-648",
    "sqlId": "648",
    "admissionNo": "871",
    "rollNo": "84",
    "name": "HARSH SHARMA",
    "photo": "4480e05e2c3a6e3b6e2d0d3f573e6654.jpg",
    "dob": "2015-01-01",
    "gender": "Male",
    "class": "IV",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "MEGHENDRA SHARMA",
        "motherName": "POOJA  DEVI",
        "fatherMobile": "7906340619",
        "motherMobile": "7906340619",
        "fatherPhone": "7906340619",
        "motherPhone": "7906340619",
        "address": "KUDHAINI CHIROURI",
        "occupation": "AGRICULTURE",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 83,
        "percentage": 94.3
    },
    "feeSummary": {
        "tuitionDue": 15000,
        "transportDue11Months": 5500,
        "totalDue": 20500,
        "totalPaid": 9225,
        "balance": 11275
    },
    "transport": {
        "stoppage": "KUDHAINI CHIROURI",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-562"
    ],
    "familyId": "FAM-0534"
},
{
    "id": "STU-2026-649",
    "sqlId": "649",
    "admissionNo": "872",
    "rollNo": "133",
    "name": "ANKIT",
    "photo": "defualt.png",
    "dob": "2015-04-17",
    "gender": "Male",
    "class": "IV",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "RUKAMPAL",
        "motherName": "BAUBEE",
        "fatherMobile": "9758687733",
        "motherMobile": "9758687733",
        "fatherPhone": "9758687733",
        "motherPhone": "9758687733",
        "address": "NOJALPUR KHADAR",
        "occupation": "AGRICULTURAL",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "AHEER",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 84,
        "percentage": 95.5
    },
    "feeSummary": {
        "tuitionDue": 15000,
        "transportDue11Months": 5500,
        "totalDue": 20500,
        "totalPaid": 3075,
        "balance": 17425
    },
    "transport": {
        "stoppage": "NOJALPUR KHADAR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0620"
},
{
    "id": "STU-2026-650",
    "sqlId": "650",
    "admissionNo": "890",
    "rollNo": "148",
    "name": "LOVE KUMAR",
    "photo": "06d383a2557ffcff7190177d5fea54db.jpg",
    "dob": "2015-05-28",
    "gender": "Male",
    "class": "IV",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "PRAVESH KUMAR",
        "motherName": "PRIYANKA",
        "fatherMobile": "SAME",
        "motherMobile": "8954589440",
        "fatherPhone": "SAME",
        "motherPhone": "8954589440",
        "address": "JARGWAN",
        "occupation": "AGRICULTURE",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 85,
        "percentage": 96.6
    },
    "feeSummary": {
        "tuitionDue": 15000,
        "transportDue11Months": 5500,
        "totalDue": 20500,
        "totalPaid": 17425,
        "balance": 3075
    },
    "transport": {
        "stoppage": "JARGWAN",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0621"
},
{
    "id": "STU-2026-651",
    "sqlId": "651",
    "admissionNo": "873",
    "rollNo": "152",
    "name": "PRASHANT",
    "photo": "defualt.png",
    "dob": "2015-04-02",
    "gender": "Male",
    "class": "IV",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "BANI",
        "motherName": "VINEETA",
        "fatherMobile": "9690556281",
        "motherMobile": "9690556281",
        "fatherPhone": "9690556281",
        "motherPhone": "9690556281",
        "address": "NOJALPUR KHADAR",
        "occupation": "AGRICULTURAL",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 86,
        "percentage": 97.7
    },
    "feeSummary": {
        "tuitionDue": 15000,
        "transportDue11Months": 5500,
        "totalDue": 20500,
        "totalPaid": 9225,
        "balance": 11275
    },
    "transport": {
        "stoppage": "NOJALPUR KHADAR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0622"
},
{
    "id": "STU-2026-652",
    "sqlId": "652",
    "admissionNo": "918",
    "rollNo": "347",
    "name": "VIVEK",
    "photo": "d7d5493602777b3ee4f8c4ee5e3136a0.jpg",
    "dob": "2016-05-11",
    "gender": "Male",
    "class": "III",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "MAHIPAL",
        "motherName": "PREMLATA DEVI",
        "fatherMobile": "8923283035",
        "motherMobile": "9909583035",
        "fatherPhone": "8923283035",
        "motherPhone": "9909583035",
        "address": "VIJAY NAGLIYA",
        "occupation": "AGRICULTURE",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "LODHI",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 87,
        "percentage": 98.9
    },
    "feeSummary": {
        "tuitionDue": 14500,
        "transportDue11Months": 5500,
        "totalDue": 20000,
        "totalPaid": 3000,
        "balance": 17000
    },
    "transport": {
        "stoppage": "VIJAY NAGLIYA",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0623"
},
{
    "id": "STU-2026-653",
    "sqlId": "653",
    "admissionNo": "919",
    "rollNo": "14",
    "name": "DIVYANSHU",
    "photo": "defualt.png",
    "dob": "2013-03-11",
    "gender": "Male",
    "class": "VIII",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "RAJESH KUMAR",
        "motherName": "RAM DEVI",
        "fatherMobile": "7409788792",
        "motherMobile": "7409788792",
        "fatherPhone": "7409788792",
        "motherPhone": "7409788792",
        "address": "MUDHAKHERA, JARGWAN",
        "occupation": "AGRICULTURE",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 82,
        "percentage": 93.2
    },
    "feeSummary": {
        "tuitionDue": 17000,
        "transportDue11Months": 5500,
        "totalDue": 22500,
        "totalPaid": 19125,
        "balance": 3375
    },
    "transport": {
        "stoppage": "MUDHAKHERA",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0624"
},
{
    "id": "STU-2026-654",
    "sqlId": "654",
    "admissionNo": "881",
    "rollNo": "82",
    "name": "HARENDRA KUMAR",
    "photo": "4e590991db5b4f44670c6e1d336af4d8.jpg",
    "dob": "2014-11-20",
    "gender": "Male",
    "class": "VI",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "PRAMOD KUMAR",
        "motherName": "LADO DEVI",
        "fatherMobile": "9758850103",
        "motherMobile": "8006515632",
        "fatherPhone": "9758850103",
        "motherPhone": "8006515632",
        "address": "NAGLA JATNI RAMGHAT BULANDSHAHR",
        "occupation": "AGRICULTURE",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "AHEER",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 83,
        "percentage": 94.3
    },
    "feeSummary": {
        "tuitionDue": 16000,
        "transportDue11Months": 5500,
        "totalDue": 21500,
        "totalPaid": 9675,
        "balance": 11825
    },
    "transport": {
        "stoppage": "NAGLA JATNI RAMGHAT BULANDSHAHR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0625"
},
{
    "id": "STU-2026-655",
    "sqlId": "655",
    "admissionNo": "920",
    "rollNo": "0",
    "name": "ANSHU",
    "photo": "bb642e17247657789169dc1cdad2b01b.jpg",
    "dob": "2011-12-10",
    "gender": "Male",
    "class": "VI",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "OMKAR SINGH",
        "motherName": "MUNNI DEVI",
        "fatherMobile": "9719613145",
        "motherMobile": "90841784949719613145",
        "fatherPhone": "9719613145",
        "motherPhone": "90841784949719613145",
        "address": "NAGLA TODI",
        "occupation": "BUSINESS",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 84,
        "percentage": 95.5
    },
    "feeSummary": {
        "tuitionDue": 16000,
        "transportDue11Months": 5500,
        "totalDue": 21500,
        "totalPaid": 3225,
        "balance": 18275
    },
    "transport": {
        "stoppage": "NAGLA TODI",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0626"
},
{
    "id": "STU-2026-656",
    "sqlId": "656",
    "admissionNo": "922",
    "rollNo": "0",
    "name": "ANSHUL KUMAR",
    "photo": "399c36af24bfa8dab3dd90afb376d510.jpg",
    "dob": "2013-02-11",
    "gender": "Male",
    "class": "VI",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "SOMVEER",
        "motherName": "SEEMA",
        "fatherMobile": "2",
        "motherMobile": "9058636403",
        "fatherPhone": "2",
        "motherPhone": "9058636403",
        "address": "KUDHAINI",
        "occupation": "AGRICULTURE",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 85,
        "percentage": 96.6
    },
    "feeSummary": {
        "tuitionDue": 16000,
        "transportDue11Months": 5500,
        "totalDue": 21500,
        "totalPaid": 18275,
        "balance": 3225
    },
    "transport": {
        "stoppage": "KUDHAINI",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0627"
},
{
    "id": "STU-2026-657",
    "sqlId": "657",
    "admissionNo": "921",
    "rollNo": "0",
    "name": "NISHANT YADAV",
    "photo": "6c5a6c2bd4f4076effb9599149e4ce57.jpg",
    "dob": "2015-04-01",
    "gender": "Male",
    "class": "VI",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "MANOJ KUMAR",
        "motherName": "ANGOORI DEVI",
        "fatherMobile": "9761145042",
        "motherMobile": "9761145042",
        "fatherPhone": "9761145042",
        "motherPhone": "9761145042",
        "address": "NAGLA JATANI RAMGHAT BULANDSHAHR",
        "occupation": "AGRICULTURE",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 86,
        "percentage": 97.7
    },
    "feeSummary": {
        "tuitionDue": 16000,
        "transportDue11Months": 5500,
        "totalDue": 21500,
        "totalPaid": 9675,
        "balance": 11825
    },
    "transport": {
        "stoppage": "NAGLA JATANI RAMGHAT BULANDSHAHR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0628"
},
{
    "id": "STU-2026-658",
    "sqlId": "658",
    "admissionNo": "878",
    "rollNo": "0",
    "name": "ISHANT",
    "photo": "f23abb20bce10b99a67b812675fbc332.jpg",
    "dob": "2020-09-20",
    "gender": "Male",
    "class": "I",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "SANJAY KUMAR",
        "motherName": "NEETU KUMARI",
        "fatherMobile": "8368791082",
        "motherMobile": "8368791082",
        "fatherPhone": "8368791082",
        "motherPhone": "8368791082",
        "address": "CHIRAURI",
        "occupation": "AGRICULTURE",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 87,
        "percentage": 98.9
    },
    "feeSummary": {
        "tuitionDue": 13500,
        "transportDue11Months": 5500,
        "totalDue": 19000,
        "totalPaid": 2850,
        "balance": 16150
    },
    "transport": {
        "stoppage": "CHIRAURI",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0629"
},
{
    "id": "STU-2026-659",
    "sqlId": "659",
    "admissionNo": "923",
    "rollNo": "0",
    "name": "VAIBHAV",
    "photo": "defualt.png",
    "dob": "2020-01-01",
    "gender": "Male",
    "class": "NURSERY",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "SHILENDRA KUMAR",
        "motherName": "KUSUM",
        "fatherMobile": "9720882749",
        "motherMobile": "9720882749",
        "fatherPhone": "9720882749",
        "motherPhone": "9720882749",
        "address": "BAIJALA KOTHI ATRAULI ALIGARH",
        "occupation": "AGRICULTURE",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 82,
        "percentage": 93.2
    },
    "feeSummary": {
        "tuitionDue": 10500,
        "transportDue11Months": 5500,
        "totalDue": 16000,
        "totalPaid": 13600,
        "balance": 2400
    },
    "transport": {
        "stoppage": "BAIJALA KOTHI ATRAULI ALIGARH",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0630"
},
{
    "id": "STU-2026-661",
    "sqlId": "661",
    "admissionNo": "924",
    "rollNo": "0",
    "name": "YASH KUMAR",
    "photo": "2ebc82444fc5300a77d91774ac11b5a1.jpg",
    "dob": "2023-05-07",
    "gender": "Male",
    "class": "NURSERY",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "RAM NARESH SINGH",
        "motherName": "PRITI KUMARI",
        "fatherMobile": "8991490059",
        "motherMobile": "8991490059",
        "fatherPhone": "8991490059",
        "motherPhone": "8991490059",
        "address": "BAIJALA ATRAULI ALIGARH",
        "occupation": "AGRICULTURE",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 83,
        "percentage": 94.3
    },
    "feeSummary": {
        "tuitionDue": 10500,
        "transportDue11Months": 5500,
        "totalDue": 16000,
        "totalPaid": 7200,
        "balance": 8800
    },
    "transport": {
        "stoppage": "BAIJALA ATRAULI ALIGARH",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0632"
},
{
    "id": "STU-2026-662",
    "sqlId": "662",
    "admissionNo": "927",
    "rollNo": "0",
    "name": "GAURI",
    "photo": "e51603b23882a4e9ca1e542aa719b53d.jpg",
    "dob": "2019-02-05",
    "gender": "Female",
    "class": "I",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "PRAKASHI",
        "motherName": "URMILA DEVI",
        "fatherMobile": "8650678109",
        "motherMobile": "8650678109",
        "fatherPhone": "8650678109",
        "motherPhone": "8650678109",
        "address": "CHIRAURI",
        "occupation": "AGRICULTURE",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 84,
        "percentage": 95.5
    },
    "feeSummary": {
        "tuitionDue": 13500,
        "transportDue11Months": 5500,
        "totalDue": 19000,
        "totalPaid": 2850,
        "balance": 16150
    },
    "transport": {
        "stoppage": "CHIRAURI",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 4"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0633"
},
{
    "id": "STU-2026-663",
    "sqlId": "663",
    "admissionNo": "928",
    "rollNo": "0",
    "name": "MUKUL",
    "photo": "68c54bd34b63d436d1fe20316593fed8.jpg",
    "dob": "1970-01-01",
    "gender": "Male",
    "class": "NURSERY",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "YOGESH KUMAR",
        "motherName": "MAMTA",
        "fatherMobile": "9027961018",
        "motherMobile": "902796118",
        "fatherPhone": "9027961018",
        "motherPhone": "902796118",
        "address": "PESARI",
        "occupation": "AGRICULTURE",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 85,
        "percentage": 96.6
    },
    "feeSummary": {
        "tuitionDue": 10500,
        "transportDue11Months": 5500,
        "totalDue": 16000,
        "totalPaid": 13600,
        "balance": 2400
    },
    "transport": {
        "stoppage": "PESARI",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0634"
},
{
    "id": "STU-2026-664",
    "sqlId": "664",
    "admissionNo": "929",
    "rollNo": "0",
    "name": "JEEVA",
    "photo": "8368cc606ade9238942c1fc07858e36f.jpg",
    "dob": "2023-09-07",
    "gender": "Male",
    "class": "PG",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "DHARMVEER",
        "motherName": "ARTI",
        "fatherMobile": "8650453125",
        "motherMobile": "7983644053",
        "fatherPhone": "8650453125",
        "motherPhone": "7983644053",
        "address": "GANGAGARH RAMGHAT BULANDSHAR",
        "occupation": "AGRICULTURE",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 86,
        "percentage": 97.7
    },
    "feeSummary": {
        "tuitionDue": 9500,
        "transportDue11Months": 5500,
        "totalDue": 15000,
        "totalPaid": 6750,
        "balance": 8250
    },
    "transport": {
        "stoppage": "GANGAGARH RAMGHAT BULANDSHAR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0635"
},
{
    "id": "STU-2026-665",
    "sqlId": "665",
    "admissionNo": "930",
    "rollNo": "201",
    "name": "ARYAN",
    "photo": "0203a644d358685d6929eb83e9ba3090.jpg",
    "dob": "2016-01-01",
    "gender": "Male",
    "class": "II",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "MANOJ KUMAR",
        "motherName": "MADHU",
        "fatherMobile": "9627156530",
        "motherMobile": "9870897428",
        "fatherPhone": "9627156530",
        "motherPhone": "9870897428",
        "address": "NAGLA JATANI",
        "occupation": "AGRICULTURE      PRIVATE JOB",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 87,
        "percentage": 98.9
    },
    "feeSummary": {
        "tuitionDue": 14000,
        "transportDue11Months": 5500,
        "totalDue": 19500,
        "totalPaid": 2925,
        "balance": 16575
    },
    "transport": {
        "stoppage": "NAGLA JATANI",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0636"
},
{
    "id": "STU-2026-666",
    "sqlId": "666",
    "admissionNo": "869",
    "rollNo": "0",
    "name": "GAURAV",
    "photo": "0e2bee0e4cb9eb00a6f2a62540af08a1.jpg",
    "dob": "1970-01-01",
    "gender": "Male",
    "class": "NURSERY",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "PRAKASHI",
        "motherName": "URMILA DEVI",
        "fatherMobile": "8650678109",
        "motherMobile": "8650678109",
        "fatherPhone": "8650678109",
        "motherPhone": "8650678109",
        "address": "CHIRAURI",
        "occupation": "AGRICULTURE",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 82,
        "percentage": 93.2
    },
    "feeSummary": {
        "tuitionDue": 10500,
        "transportDue11Months": 5500,
        "totalDue": 16000,
        "totalPaid": 13600,
        "balance": 2400
    },
    "transport": {
        "stoppage": "CHIRAURI",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0637"
},
{
    "id": "STU-2026-667",
    "sqlId": "667",
    "admissionNo": "932",
    "rollNo": "59",
    "name": "LALIT",
    "photo": "defualt.png",
    "dob": "2013-12-10",
    "gender": "Male",
    "class": "VII",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "TILAK SINGH",
        "motherName": "SUMAN DEVI",
        "fatherMobile": "9627628176",
        "motherMobile": "9627628176",
        "fatherPhone": "9627628176",
        "motherPhone": "9627628176",
        "address": "RAIPUR KHAS ATRAULI ALLIGARH",
        "occupation": "AGRICULTURE",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "Aheer",
        "religion": "HINDU"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 83,
        "percentage": 94.3
    },
    "feeSummary": {
        "tuitionDue": 16500,
        "transportDue11Months": 5500,
        "totalDue": 22000,
        "totalPaid": 9900,
        "balance": 12100
    },
    "transport": {
        "stoppage": "RAIPUR KHAS ATRAULI ALLIGARH",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0638"
},
{
    "id": "STU-2026-668",
    "sqlId": "668",
    "admissionNo": "940",
    "rollNo": "0",
    "name": "SONU KUMAR",
    "photo": "89a321041ef1658560aa357299f1b62d.jpg",
    "dob": "2021-03-24",
    "gender": "Male",
    "class": "NURSERY",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "RAJESH KUMAR",
        "motherName": "RENU",
        "fatherMobile": "7252822383",
        "motherMobile": "9627567717",
        "fatherPhone": "7252822383",
        "motherPhone": "9627567717",
        "address": "KALIYANPUR",
        "occupation": "AGRICULTURE",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 84,
        "percentage": 95.5
    },
    "feeSummary": {
        "tuitionDue": 10500,
        "transportDue11Months": 5500,
        "totalDue": 16000,
        "totalPaid": 2400,
        "balance": 13600
    },
    "transport": {
        "stoppage": "KALIYANPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0639"
},
{
    "id": "STU-2026-669",
    "sqlId": "669",
    "admissionNo": "941",
    "rollNo": "0",
    "name": "CHIRAG",
    "photo": "130f8ece67cd636225bacef413aca5e3.jpg",
    "dob": "1970-01-01",
    "gender": "Male",
    "class": "NURSERY",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "CHANDRABHAN",
        "motherName": "SONAM DEVI",
        "fatherMobile": "9149093558",
        "motherMobile": "9675078707",
        "fatherPhone": "9149093558",
        "motherPhone": "9675078707",
        "address": "KALIYANPUR",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 85,
        "percentage": 96.6
    },
    "feeSummary": {
        "tuitionDue": 10500,
        "transportDue11Months": 5500,
        "totalDue": 16000,
        "totalPaid": 13600,
        "balance": 2400
    },
    "transport": {
        "stoppage": "KALIYANPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-112"
    ],
    "familyId": "FAM-0110"
},
{
    "id": "STU-2026-670",
    "sqlId": "670",
    "admissionNo": "933",
    "rollNo": "0",
    "name": "ABHIJEET RAGHAV",
    "photo": "defualt.png",
    "dob": "2021-10-23",
    "gender": "Male",
    "class": "NURSERY",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "AMIT",
        "motherName": "KANCHAN",
        "fatherMobile": "9084367749",
        "motherMobile": "9650381343",
        "fatherPhone": "9084367749",
        "motherPhone": "9650381343",
        "address": "MUHAMMADPUR BADHERAATRAULI  ALIGARH",
        "occupation": "AGRICULTURE",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 86,
        "percentage": 97.7
    },
    "feeSummary": {
        "tuitionDue": 10500,
        "transportDue11Months": 5500,
        "totalDue": 16000,
        "totalPaid": 7200,
        "balance": 8800
    },
    "transport": {
        "stoppage": "MUHAMMADPUR BADHERAATRAULI  ALIGARH",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0641"
},
{
    "id": "STU-2026-671",
    "sqlId": "671",
    "admissionNo": "935",
    "rollNo": "0",
    "name": "SHIVANSH SHARMA",
    "photo": "defualt.png",
    "dob": "2023-08-04",
    "gender": "Male",
    "class": "PG",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "SAURAV SHARMA",
        "motherName": "SEEMA SHARMA",
        "fatherMobile": "7409588071",
        "motherMobile": "7409588071",
        "fatherPhone": "7409588071",
        "motherPhone": "7409588071",
        "address": "BAGI NAGLA CHIRAURI",
        "occupation": "AGRICULTURE",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 87,
        "percentage": 98.9
    },
    "feeSummary": {
        "tuitionDue": 9500,
        "transportDue11Months": 5500,
        "totalDue": 15000,
        "totalPaid": 2250,
        "balance": 12750
    },
    "transport": {
        "stoppage": "BAGI NAGLA CHIRAURI",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0642"
},
{
    "id": "STU-2026-672",
    "sqlId": "672",
    "admissionNo": "942",
    "rollNo": "0",
    "name": "ARAV KUMAR",
    "photo": "14dec2becdfe5e6a45dba851f5608ea5.jpg",
    "dob": "2022-12-13",
    "gender": "Male",
    "class": "NURSERY",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "KAILASH KUMAR",
        "motherName": "SANGEETA DEVI",
        "fatherMobile": "7505228198",
        "motherMobile": "9027143934",
        "fatherPhone": "7505228198",
        "motherPhone": "9027143934",
        "address": "JARGWAN",
        "occupation": "AGRICULTURE",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 82,
        "percentage": 93.2
    },
    "feeSummary": {
        "tuitionDue": 10500,
        "transportDue11Months": 5500,
        "totalDue": 16000,
        "totalPaid": 13600,
        "balance": 2400
    },
    "transport": {
        "stoppage": "JARGWAN",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0643"
},
{
    "id": "STU-2026-673",
    "sqlId": "673",
    "admissionNo": "937",
    "rollNo": "0",
    "name": "BHASKAR",
    "photo": "ae9c9a88783c26e68d5db124fa91a838.jpg",
    "dob": "1970-01-01",
    "gender": "Male",
    "class": "LKG",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "DEVDUTTA",
        "motherName": "CHANDRAPRABHA",
        "fatherMobile": "8384814903",
        "motherMobile": "8384814903",
        "fatherPhone": "8384814903",
        "motherPhone": "8384814903",
        "address": "NAGLA GARVI",
        "occupation": "AGRICULTURE",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 83,
        "percentage": 94.3
    },
    "feeSummary": {
        "tuitionDue": 11500,
        "transportDue11Months": 5500,
        "totalDue": 17000,
        "totalPaid": 7650,
        "balance": 9350
    },
    "transport": {
        "stoppage": "NAGLA GARVI",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-190"
    ],
    "familyId": "FAM-0644"
},
{
    "id": "STU-2026-674",
    "sqlId": "674",
    "admissionNo": "936",
    "rollNo": "0",
    "name": "ADESH",
    "photo": "defualt.png",
    "dob": "2021-10-21",
    "gender": "Male",
    "class": "LKG",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "NEMPAL KUMAR",
        "motherName": "BABITA",
        "fatherMobile": "7018264597",
        "motherMobile": "7018264597",
        "fatherPhone": "7018264597",
        "motherPhone": "7018264597",
        "address": "UNCHAGAWN RAMGHAT",
        "occupation": "AGRICULTURE",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 84,
        "percentage": 95.5
    },
    "feeSummary": {
        "tuitionDue": 11500,
        "transportDue11Months": 5500,
        "totalDue": 17000,
        "totalPaid": 2550,
        "balance": 14450
    },
    "transport": {
        "stoppage": "UNCHAGAWN RAMGHAT",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 5"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0645"
},
{
    "id": "STU-2026-675",
    "sqlId": "675",
    "admissionNo": "931",
    "rollNo": "0",
    "name": "MAHI",
    "photo": "defualt.png",
    "dob": "2024-01-01",
    "gender": "Female",
    "class": "PG",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "HARIOM",
        "motherName": "KIRTI",
        "fatherMobile": "8279963704",
        "motherMobile": "9720002824",
        "fatherPhone": "8279963704",
        "motherPhone": "9720002824",
        "address": "BAIJALA ATRAULI ALIGARH",
        "occupation": "AGRICULTURE",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 85,
        "percentage": 96.6
    },
    "feeSummary": {
        "tuitionDue": 9500,
        "transportDue11Months": 5500,
        "totalDue": 15000,
        "totalPaid": 12750,
        "balance": 2250
    },
    "transport": {
        "stoppage": "BAIJALA ATRAULI ALIGARH",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0646"
},
{
    "id": "STU-2026-676",
    "sqlId": "676",
    "admissionNo": "943",
    "rollNo": "219",
    "name": "PRACHI",
    "photo": "defualt.png",
    "dob": "2014-05-01",
    "gender": "Female",
    "class": "II",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "PRAMOD KUMAR",
        "motherName": "NIRVESH",
        "fatherMobile": "8810389748",
        "motherMobile": "9759625226",
        "fatherPhone": "8810389748",
        "motherPhone": "9759625226",
        "address": "KALIYANPUR",
        "occupation": "AGRICULTURE",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 86,
        "percentage": 97.7
    },
    "feeSummary": {
        "tuitionDue": 14000,
        "transportDue11Months": 5500,
        "totalDue": 19500,
        "totalPaid": 8775,
        "balance": 10725
    },
    "transport": {
        "stoppage": "KALIYANPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0647"
},
{
    "id": "STU-2026-677",
    "sqlId": "677",
    "admissionNo": "944",
    "rollNo": "0",
    "name": "MAYANK",
    "photo": "dd7287df027c3e34da7915f92fa120b8.jpg",
    "dob": "2022-07-27",
    "gender": "Male",
    "class": "LKG",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "PAPPU SINGH",
        "motherName": "FOOLMALA",
        "fatherMobile": "9758566371",
        "motherMobile": "9627165176",
        "fatherPhone": "9758566371",
        "motherPhone": "9627165176",
        "address": "DADAR ALUPURA",
        "occupation": "AGRICULTURE",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 87,
        "percentage": 98.9
    },
    "feeSummary": {
        "tuitionDue": 11500,
        "transportDue11Months": 5500,
        "totalDue": 17000,
        "totalPaid": 2550,
        "balance": 14450
    },
    "transport": {
        "stoppage": "DADAR ALUPURA",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-678"
    ],
    "familyId": "FAM-0648"
},
{
    "id": "STU-2026-678",
    "sqlId": "678",
    "admissionNo": "945",
    "rollNo": "0",
    "name": "MANVI",
    "photo": "defualt.png",
    "dob": "2021-10-21",
    "gender": "Male",
    "class": "NURSERY",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "PAPPU SINGH",
        "motherName": "FOOLMALA",
        "fatherMobile": "9758566371",
        "motherMobile": "9627165176",
        "fatherPhone": "9758566371",
        "motherPhone": "9627165176",
        "address": "DADAR ALUPURA",
        "occupation": "AGRICULTURE",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 82,
        "percentage": 93.2
    },
    "feeSummary": {
        "tuitionDue": 10500,
        "transportDue11Months": 5500,
        "totalDue": 16000,
        "totalPaid": 13600,
        "balance": 2400
    },
    "transport": {
        "stoppage": "DADAR ALUPURA",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [
        "STU-2026-677"
    ],
    "familyId": "FAM-0648"
},
{
    "id": "STU-2026-679",
    "sqlId": "679",
    "admissionNo": "887",
    "rollNo": "185",
    "name": "RAJAT",
    "photo": "1b7e154d5dac9d2baae6ca0e3c248231.jpg",
    "dob": "2016-06-14",
    "gender": "Male",
    "class": "III",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "PAWAN",
        "motherName": "SHAKUNTALA",
        "fatherMobile": "1",
        "motherMobile": "9719433808",
        "fatherPhone": "1",
        "motherPhone": "9719433808",
        "address": "JARGWAN",
        "occupation": "AGRICULTURE",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 83,
        "percentage": 94.3
    },
    "feeSummary": {
        "tuitionDue": 14500,
        "transportDue11Months": 5500,
        "totalDue": 20000,
        "totalPaid": 9000,
        "balance": 11000
    },
    "transport": {
        "stoppage": "JARGWAN",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0650"
},
{
    "id": "STU-2026-680",
    "sqlId": "680",
    "admissionNo": "947",
    "rollNo": "72",
    "name": "ADITYA",
    "photo": "defualt.png",
    "dob": "2012-11-28",
    "gender": "Male",
    "class": "VI",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "SURESH CHANDRA",
        "motherName": "SANTOSH DEVI",
        "fatherMobile": "9305643279",
        "motherMobile": "9305643279",
        "fatherPhone": "9305643279",
        "motherPhone": "9305643279",
        "address": "PESARI",
        "occupation": "AGRICULTURE",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 84,
        "percentage": 95.5
    },
    "feeSummary": {
        "tuitionDue": 16000,
        "transportDue11Months": 5500,
        "totalDue": 21500,
        "totalPaid": 3225,
        "balance": 18275
    },
    "transport": {
        "stoppage": "PESARI",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0651"
},
{
    "id": "STU-2026-681",
    "sqlId": "681",
    "admissionNo": "948",
    "rollNo": "8",
    "name": "KULDEEP KUMAR",
    "photo": "ee528a56daec6feb8aaf68139a4e6dbb.jpg",
    "dob": "2016-04-12",
    "gender": "Male",
    "class": "V",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "GAJENDRA SINGH",
        "motherName": "BHAWANA DEVI",
        "fatherMobile": "9958115857",
        "motherMobile": "9958115857",
        "fatherPhone": "9958115857",
        "motherPhone": "9958115857",
        "address": "NAGLA KOTHI",
        "occupation": "AGRICULTURE",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "LODHI",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 85,
        "percentage": 96.6
    },
    "feeSummary": {
        "tuitionDue": 15500,
        "transportDue11Months": 5500,
        "totalDue": 21000,
        "totalPaid": 17850,
        "balance": 3150
    },
    "transport": {
        "stoppage": "NAGLA KOTHI",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0652"
},
{
    "id": "STU-2026-682",
    "sqlId": "682",
    "admissionNo": "946",
    "rollNo": "196",
    "name": "VIVEK KUMAR",
    "photo": "7bcdcb536fd619cb830cf79a6f9f8ef1.jpg",
    "dob": "2017-02-01",
    "gender": "Male",
    "class": "III",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "MURARILAL",
        "motherName": "ASHA DEVI",
        "fatherMobile": "7678265395",
        "motherMobile": "7678265395",
        "fatherPhone": "7678265395",
        "motherPhone": "7678265395",
        "address": "DADHAR ALUPURA NARUPURA ATRAULI ALIGARH",
        "occupation": "AGRICULTURE",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "AHEER",
        "religion": "HINDU"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 86,
        "percentage": 97.7
    },
    "feeSummary": {
        "tuitionDue": 14500,
        "transportDue11Months": 5500,
        "totalDue": 20000,
        "totalPaid": 9000,
        "balance": 11000
    },
    "transport": {
        "stoppage": "DADHAR ALUPURA NARUPURA ATRAULI ALIGARH",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0653"
},
{
    "id": "STU-2026-683",
    "sqlId": "683",
    "admissionNo": "9",
    "rollNo": "196",
    "name": "TANISHKA",
    "photo": "8efeb6afdd444a698757d9659bc1110d.jpg",
    "dob": "1970-01-01",
    "gender": "Male",
    "class": "I",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "MURARILAL",
        "motherName": "ASHA DEVI",
        "fatherMobile": "7678265395",
        "motherMobile": "7678265395",
        "fatherPhone": "7678265395",
        "motherPhone": "7678265395",
        "address": "DADHAR ALUPURA",
        "occupation": "AGRICULTURE",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 87,
        "percentage": 98.9
    },
    "feeSummary": {
        "tuitionDue": 13500,
        "transportDue11Months": 5500,
        "totalDue": 19000,
        "totalPaid": 2850,
        "balance": 16150
    },
    "transport": {
        "stoppage": "DADHAR ALUPURA",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0654"
},
{
    "id": "STU-2026-684",
    "sqlId": "684",
    "admissionNo": "949",
    "rollNo": "0",
    "name": "SURJEET",
    "photo": "4acbddf6d8e3e0118d4ac644b284ef95.jpg",
    "dob": "1970-01-01",
    "gender": "Male",
    "class": "I",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "LEELADHAR",
        "motherName": "SHUSHILA DEVI",
        "fatherMobile": "7409641142",
        "motherMobile": "80061782883",
        "fatherPhone": "7409641142",
        "motherPhone": "80061782883",
        "address": "BAJHERA  DHARAKPUR",
        "occupation": "AGRICULTURE",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 82,
        "percentage": 93.2
    },
    "feeSummary": {
        "tuitionDue": 13500,
        "transportDue11Months": 5500,
        "totalDue": 19000,
        "totalPaid": 16150,
        "balance": 2850
    },
    "transport": {
        "stoppage": "BAJHERA  DHARAKPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0655"
},
{
    "id": "STU-2026-685",
    "sqlId": "685",
    "admissionNo": "950",
    "rollNo": "0",
    "name": "HARSHVARDHAN",
    "photo": "1e37984585f350d53ccf1ae0822990a0.jpg",
    "dob": "2020-05-23",
    "gender": "Male",
    "class": "LKG",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "AVDESH KUMAR",
        "motherName": "LALITESH",
        "fatherMobile": "8954157203",
        "motherMobile": "8954157203",
        "fatherPhone": "8954157203",
        "motherPhone": "8954157203",
        "address": "NEAR CD INTER COLLEGE JARGWAN BULANDSHAHR",
        "occupation": "AGRICULTURE",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 83,
        "percentage": 94.3
    },
    "feeSummary": {
        "tuitionDue": 11500,
        "transportDue11Months": 5500,
        "totalDue": 17000,
        "totalPaid": 7650,
        "balance": 9350
    },
    "transport": {
        "stoppage": "NEAR CD INTER COLLEGE JARGWAN BULANDSHAHR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0656"
},
{
    "id": "STU-2026-687",
    "sqlId": "687",
    "admissionNo": "953",
    "rollNo": "0",
    "name": "TANISHKA",
    "photo": "873a0b2377fabd71190650546ae5989c.jpg",
    "dob": "1970-01-01",
    "gender": "Male",
    "class": "LKG",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "JITENDRA KUMAR",
        "motherName": "CHANCHAL",
        "fatherMobile": "9899395892",
        "motherMobile": "9719759053",
        "fatherPhone": "9899395892",
        "motherPhone": "9719759053",
        "address": "JARGWAN",
        "occupation": "AGRICULTURE",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 84,
        "percentage": 95.5
    },
    "feeSummary": {
        "tuitionDue": 11500,
        "transportDue11Months": 5500,
        "totalDue": 17000,
        "totalPaid": 2550,
        "balance": 14450
    },
    "transport": {
        "stoppage": "JARGWAN",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0658"
},
{
    "id": "STU-2026-688",
    "sqlId": "688",
    "admissionNo": "954",
    "rollNo": "0",
    "name": "KANISHKA",
    "photo": "62aee1521d7f35f96fdb00e7057fe0f5.jpg",
    "dob": "2020-07-18",
    "gender": "Male",
    "class": "UKG",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "SONU KUMAR",
        "motherName": "SHUSHILA DEVI",
        "fatherMobile": "9910912997",
        "motherMobile": "9910912997",
        "fatherPhone": "9910912997",
        "motherPhone": "9910912997",
        "address": "MONIPURA",
        "occupation": "AGRICULTURE",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 85,
        "percentage": 96.6
    },
    "feeSummary": {
        "tuitionDue": 12500,
        "transportDue11Months": 5500,
        "totalDue": 18000,
        "totalPaid": 15300,
        "balance": 2700
    },
    "transport": {
        "stoppage": "MONIPURA",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0659"
},
{
    "id": "STU-2026-689",
    "sqlId": "689",
    "admissionNo": "952",
    "rollNo": "0",
    "name": "LAXMI",
    "photo": "feb1452436ae0450a3ebd383e88a66ae.jpg",
    "dob": "2019-09-11",
    "gender": "Female",
    "class": "UKG",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "RAJKUMAR",
        "motherName": "BHARTI YADAV",
        "fatherMobile": "8920537215",
        "motherMobile": "8920537215",
        "fatherPhone": "8920537215",
        "motherPhone": "8920537215",
        "address": "JARGWAN",
        "occupation": "AGRICULTURE",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 86,
        "percentage": 97.7
    },
    "feeSummary": {
        "tuitionDue": 12500,
        "transportDue11Months": 5500,
        "totalDue": 18000,
        "totalPaid": 8100,
        "balance": 9900
    },
    "transport": {
        "stoppage": "JARGWAN",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0660"
},
{
    "id": "STU-2026-690",
    "sqlId": "690",
    "admissionNo": "955",
    "rollNo": "222",
    "name": "RUCHI",
    "photo": "a03b5f6d497d7b45bbcc9976666b27d8.jpg",
    "dob": "2017-05-16",
    "gender": "Female",
    "class": "II",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "ARVIND KUMAR",
        "motherName": "BABITA",
        "fatherMobile": "9720882749",
        "motherMobile": "9720882749",
        "fatherPhone": "9720882749",
        "motherPhone": "9720882749",
        "address": "ATARASI  BAMASHA",
        "occupation": "AGRICULTURE",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 87,
        "percentage": 98.9
    },
    "feeSummary": {
        "tuitionDue": 14000,
        "transportDue11Months": 5500,
        "totalDue": 19500,
        "totalPaid": 2925,
        "balance": 16575
    },
    "transport": {
        "stoppage": "ATARASI  BAMASHA",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0661"
},
{
    "id": "STU-2026-691",
    "sqlId": "691",
    "admissionNo": "934",
    "rollNo": "0",
    "name": "SANDEEP KUMAR",
    "photo": "addc4ef2cd6ec8450e22392d24f3dcd6.jpg",
    "dob": "2011-07-20",
    "gender": "Male",
    "class": "IV",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "OMKAR",
        "motherName": "SEEMA",
        "fatherMobile": "9758529951",
        "motherMobile": "9625910048",
        "fatherPhone": "9758529951",
        "motherPhone": "9625910048",
        "address": "KALIYANPUR",
        "occupation": "AGRICULTURE",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 82,
        "percentage": 93.2
    },
    "feeSummary": {
        "tuitionDue": 15000,
        "transportDue11Months": 5500,
        "totalDue": 20500,
        "totalPaid": 17425,
        "balance": 3075
    },
    "transport": {
        "stoppage": "KALIYANPUR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0662"
},
{
    "id": "STU-2026-692",
    "sqlId": "692",
    "admissionNo": "957",
    "rollNo": "185",
    "name": "NITIN",
    "photo": "8671982390f606be65a59fae325c32b3.jpg",
    "dob": "2014-08-15",
    "gender": "Male",
    "class": "III",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "PAWAN",
        "motherName": "SHAKUNTALA",
        "fatherMobile": "9068049589",
        "motherMobile": "9719433808",
        "fatherPhone": "9068049589",
        "motherPhone": "9719433808",
        "address": "JARGWAN",
        "occupation": "AGRICULTURE",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 83,
        "percentage": 94.3
    },
    "feeSummary": {
        "tuitionDue": 14500,
        "transportDue11Months": 5500,
        "totalDue": 20000,
        "totalPaid": 9000,
        "balance": 11000
    },
    "transport": {
        "stoppage": "JARGWAN",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0663"
},
{
    "id": "STU-2026-693",
    "sqlId": "693",
    "admissionNo": "925",
    "rollNo": "0",
    "name": "AAROHI SHARMA",
    "photo": "eeb4c15d0290037408f421c34748b6bf.jpg",
    "dob": "2023-04-23",
    "gender": "Female",
    "class": "NURSERY",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "GAURAV KUMAR",
        "motherName": "ARATI SHARMA",
        "fatherMobile": "6396944247",
        "motherMobile": "8447662688",
        "fatherPhone": "6396944247",
        "motherPhone": "8447662688",
        "address": "JARGWAN, DEBAI",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 84,
        "percentage": 95.5
    },
    "feeSummary": {
        "tuitionDue": 10500,
        "transportDue11Months": 5500,
        "totalDue": 16000,
        "totalPaid": 2400,
        "balance": 13600
    },
    "transport": {
        "stoppage": "JARGWAN",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0680"
},
{
    "id": "STU-2026-694",
    "sqlId": "694",
    "admissionNo": "926",
    "rollNo": "0",
    "name": "ARPIT KUMAR",
    "photo": "2d2bae4973b74da23f6e1467ebc747cc.jpg",
    "dob": "2020-12-27",
    "gender": "Male",
    "class": "NURSERY",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "MANAK CHANDRA",
        "motherName": "SOMVATI DEVI",
        "fatherMobile": "7818051188",
        "motherMobile": "7818051188",
        "fatherPhone": "7818051188",
        "motherPhone": "7818051188",
        "address": "UNCHA GAON",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 85,
        "percentage": 96.6
    },
    "feeSummary": {
        "tuitionDue": 10500,
        "transportDue11Months": 5500,
        "totalDue": 16000,
        "totalPaid": 13600,
        "balance": 2400
    },
    "transport": {
        "stoppage": "UNCHA GAON",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 5"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0681"
},
{
    "id": "STU-2026-695",
    "sqlId": "695",
    "admissionNo": "970",
    "rollNo": "0",
    "name": "KULSHEKHAR",
    "photo": "0136579cbdab94be8af0ad2a8fec7181.jpg",
    "dob": "2020-08-11",
    "gender": "Male",
    "class": "I",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "RAJKUMAR",
        "motherName": "MINESH DEVI",
        "fatherMobile": "9719334268",
        "motherMobile": "9719334268",
        "fatherPhone": "9719334268",
        "motherPhone": "9719334268",
        "address": "SILHARI, RAMGHAT (BSR)",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 86,
        "percentage": 97.7
    },
    "feeSummary": {
        "tuitionDue": 13500,
        "transportDue11Months": 5500,
        "totalDue": 19000,
        "totalPaid": 8550,
        "balance": 10450
    },
    "transport": {
        "stoppage": "SILHARI",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 3"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0682"
},
{
    "id": "STU-2026-696",
    "sqlId": "696",
    "admissionNo": "961",
    "rollNo": "0",
    "name": "TAMANNA",
    "photo": "957eb3fefde44af5ec3b3157688e2028.jpg",
    "dob": "2016-12-15",
    "gender": "Female",
    "class": "I",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "CHHOTELAL",
        "motherName": "PREMLATA",
        "fatherMobile": "8384894873",
        "motherMobile": "8384894873",
        "fatherPhone": "8384894873",
        "motherPhone": "8384894873",
        "address": "MONIPURA",
        "occupation": "Agriculture / Business",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 87,
        "percentage": 98.9
    },
    "feeSummary": {
        "tuitionDue": 13500,
        "transportDue11Months": 5500,
        "totalDue": 19000,
        "totalPaid": 2850,
        "balance": 16150
    },
    "transport": {
        "stoppage": "MONIPURA",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 3"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0683"
},
{
    "id": "STU-2026-697",
    "sqlId": "697",
    "admissionNo": "884",
    "rollNo": "346",
    "name": "KRISHNA YADAV",
    "photo": "defualt.png",
    "dob": "1970-01-01",
    "gender": "Male",
    "class": "VI",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "UMESH YADAV",
        "motherName": "VAVLI",
        "fatherMobile": "9557559627",
        "motherMobile": "9759109754",
        "fatherPhone": "9557559627",
        "motherPhone": "9759109754",
        "address": "KATAK NARUPURA",
        "occupation": "AGRICULTURE",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 82,
        "percentage": 93.2
    },
    "feeSummary": {
        "tuitionDue": 16000,
        "transportDue11Months": 5500,
        "totalDue": 21500,
        "totalPaid": 18275,
        "balance": 3225
    },
    "transport": {
        "stoppage": "KATAK NARUPURA",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 0"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0684"
},
{
    "id": "STU-2026-698",
    "sqlId": "698",
    "admissionNo": "875",
    "rollNo": "348",
    "name": "SEJAL",
    "photo": "defualt.png",
    "dob": "2018-05-18",
    "gender": "Female",
    "class": "II",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "DEEPAK KUMAR",
        "motherName": "KIRAN",
        "fatherMobile": "9758689700",
        "motherMobile": "9758689700",
        "fatherPhone": "9758689700",
        "motherPhone": "9758689700",
        "address": "NAGLA DHARAKPUR DEBAI BULANDSHAHR",
        "occupation": "AGRICULTURE",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 83,
        "percentage": 94.3
    },
    "feeSummary": {
        "tuitionDue": 14000,
        "transportDue11Months": 5500,
        "totalDue": 19500,
        "totalPaid": 8775,
        "balance": 10725
    },
    "transport": {
        "stoppage": "NAGLA DHARAKPUR DEBAI BULANDSHAHR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 1"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0685"
},
{
    "id": "STU-2026-699",
    "sqlId": "699",
    "admissionNo": "876",
    "rollNo": "348",
    "name": "VEER",
    "photo": "defualt.png",
    "dob": "2019-05-07",
    "gender": "Male",
    "class": "II",
    "section": "A",
    "branchId": "BR-01",
    "branchName": "Dadheech Memorial Public School (Main Campus)",
    "status": "Active",
    "parents": {
        "fatherName": "DEEPAK KUMAR",
        "motherName": "KIRAN",
        "fatherMobile": "9758689700",
        "motherMobile": "9758689700",
        "fatherPhone": "9758689700",
        "motherPhone": "9758689700",
        "address": "NAGLA DHARAKPUR DEBAI BULANDSHAHR",
        "occupation": "AGRICULTURAL",
        "income": "2,50,000"
    },
    "customFields": {
        "penNo": "",
        "studentAadhaar": "",
        "caste": "",
        "religion": "Hindu"
    },
    "attendanceSummary": {
        "totalDays": 88,
        "presentDays": 84,
        "percentage": 95.5
    },
    "feeSummary": {
        "tuitionDue": 14000,
        "transportDue11Months": 5500,
        "totalDue": 19500,
        "totalPaid": 2925,
        "balance": 16575
    },
    "transport": {
        "stoppage": "NAGLA DHARAKPUR DEBAI BULANDSHAHR",
        "monthlyFare": 500,
        "annualFare11M": 5500,
        "route": "Route 1"
    },
    "linkedSiblingIds": [],
    "familyId": "FAM-0686"
}
  ]
};
