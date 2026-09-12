// =============================================================================
//   DADHEECH MEMORIAL PUBLIC SCHOOL - FRESH PRODUCTION DATABASE (ZERO RECORDS)
//   Clean Master Dataset Ready for Live Admissions & Transactions
// =============================================================================

export const initialSchoolData = {
  "schoolInfo": {
    "id": "SCH-001",
    "name": "Dadheech Memorial Public School",
    "tagline": "Excellence in Education, Character Building & Modern Innovation",
    "society": "Dadheech Educational Society & Training Institute (Regd. No - 1131)",
    "logo": "/logo.png",
    "address": "Ramghat Road Border, Jargwan, Bulandshahr / Aligarh Border (U.P.)",
    "phone": "+91 97589 75880, +91 96270 32626",
    "email": "info@dmps-school.edu.in, dmpsjargawan@gmail.com",
    "website": "https://www.dmpsjargawan.com",
    "affiliation": "CBSE & Bhartiya Shiksha Board (BSB) • Recognized up to 12th Senior Secondary",
    "affiliationNo": "UP0F25070073",
    "schoolCode": "00065",
    "medium": "English & Hindi (Bilingual)",
    "founderName": "Late Shri Dauli Singh (Founder & Visionary)",
    "managerName": "Shri Pramod Kumar Rajput (Managing Director)",
    "principalName": "Mrs. Kavita Rani (Principal & Academic Head)",
    "academicSession": "2026-2027",
    "timings": {
      "summer": "07:30 AM - 01:30 PM",
      "winter": "08:00 AM - 02:00 PM"
    },
    "workingDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ]
  },
  "academicSessions": [
    {
      "id": "SESS-2026-27",
      "name": "2026-2027",
      "isCurrent": true,
      "startDate": "2026-04-01",
      "endDate": "2027-03-31"
    },
    {
      "id": "SESS-2027-28",
      "name": "2027-2028 (Upcoming)",
      "isCurrent": false,
      "startDate": "2027-04-01",
      "endDate": "2028-03-31"
    },
    {
      "id": "SESS-2025-26",
      "name": "2025-2026",
      "isCurrent": false,
      "startDate": "2025-04-01",
      "endDate": "2026-03-31"
    }
  ],
  "branches": [
    {
      "id": "BR-01",
      "name": "Dadheech Memorial Public School (Main Campus)",
      "code": "DMPS-MAIN-01",
      "shortCode": "MAIN",
      "address": "Ramghat Road Border, Jargwan, Bulandshahr (U.P.)",
      "phone": "+91 97589 75880",
      "headName": "Shri Pramod Kumar Rajput (Manager)",
      "classesOffered": "Playgroup (PG) to Class 12th",
      "isMain": true,
      "status": "Active",
      "stats": {
        "students": 480,
        "teachers": 26,
        "classrooms": 32
      }
    },
    {
      "id": "BR-02",
      "name": "Dadheech Memorial Public School (Barheti Campus)",
      "code": "DMPS-BARHETI-02",
      "shortCode": "BRHT",
      "address": "Barheti, Ramghat Road, Aligarh (U.P.)",
      "phone": "+91 96270 32626",
      "headName": "Dr. Rajesh Sharma (Director & Branch Head)",
      "classesOffered": "Nursery to Class 10th",
      "isMain": false,
      "status": "Active",
      "stats": {
        "students": 240,
        "teachers": 16,
        "classrooms": 18
      }
    },
    {
      "id": "BR-03",
      "name": "Dadheech Kids School (Vinay Nagar PAC Campus)",
      "code": "DKS-PAC-03",
      "shortCode": "KIDS",
      "address": "Near PAC Battalion, Vinay Nagar, Aligarh (U.P.)",
      "phone": "+91 97194 76606",
      "headName": "Mrs. Pooja Rajput (Early Childhood Head)",
      "classesOffered": "Playgroup (PG), Nursery, LKG, UKG, Class 1st & 2nd",
      "isMain": false,
      "status": "Active",
      "stats": {
        "students": 120,
        "teachers": 10,
        "classrooms": 12
      }
    }
  ],
  "classes": [
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
      "capacity": 45,
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
      "capacity": 45,
      "roomNo": "SF-04"
    },
    {
      "id": "CLS-10",
      "name": "Class 10",
      "numericLevel": 10,
      "streams": [
        "General"
      ],
      "capacity": 45,
      "roomNo": "SF-05"
    },
    {
      "id": "CLS-11",
      "name": "Class 11",
      "numericLevel": 11,
      "streams": [
        "Science (PCM)",
        "Science (PCB)",
        "Commerce",
        "Humanities/Arts"
      ],
      "capacity": 50,
      "roomNo": "TF-01"
    },
    {
      "id": "CLS-12",
      "name": "Class 12",
      "numericLevel": 12,
      "streams": [
        "Science (PCM)",
        "Science (PCB)",
        "Commerce",
        "Humanities/Arts"
      ],
      "capacity": 50,
      "roomNo": "TF-02"
    }
  ],
  "sections": [
    {
      "id": "SEC-A",
      "name": "A",
      "capacity": 40
    },
    {
      "id": "SEC-B",
      "name": "B",
      "capacity": 40
    }
  ],
  "departments": [
    {
      "id": "DEP-01",
      "name": "Administration & Management",
      "head": "Shri Pramod Kumar Rajput",
      "totalStaff": 4
    },
    {
      "id": "DEP-02",
      "name": "Science & Technology",
      "head": "Dr. Rajesh Sharma",
      "totalStaff": 7
    },
    {
      "id": "DEP-03",
      "name": "Mathematics",
      "head": "Mrs. Sunita Verma",
      "totalStaff": 4
    },
    {
      "id": "DEP-04",
      "name": "Languages & Humanities (English, Hindi, Sanskrit)",
      "head": "Mrs. Ritu Jain",
      "totalStaff": 6
    },
    {
      "id": "DEP-05",
      "name": "Primary & Pre-Primary Wing",
      "head": "Mrs. Shalini Mehra",
      "totalStaff": 5
    },
    {
      "id": "DEP-06",
      "name": "Sports, Arts & Physical Education",
      "head": "Coach Devender Singh",
      "totalStaff": 3
    },
    {
      "id": "DEP-07",
      "name": "Accounts, IT & Support Operations",
      "head": "Mr. Suresh Chand",
      "totalStaff": 5
    }
  ],
  "designations": [
    {
      "id": "DES-01",
      "name": "Managing Director & Manager",
      "department": "Administration & Management"
    },
    {
      "id": "DES-02",
      "name": "Principal & Academic Head",
      "department": "Administration & Management"
    },
    {
      "id": "DES-03",
      "name": "Vice Principal & HOD Science",
      "department": "Science & Technology"
    },
    {
      "id": "DES-04",
      "name": "Post Graduate Teacher (PGT)",
      "department": "Science & Technology"
    },
    {
      "id": "DES-05",
      "name": "Trained Graduate Teacher (TGT)",
      "department": "Languages & Humanities (English, Hindi, Sanskrit)"
    },
    {
      "id": "DES-06",
      "name": "Primary Teacher (PRT)",
      "department": "Primary & Pre-Primary Wing"
    },
    {
      "id": "DES-07",
      "name": "Nursery & Kindergarten Educator",
      "department": "Primary & Pre-Primary Wing"
    },
    {
      "id": "DES-08",
      "name": "Head of Physical Education & Sports",
      "department": "Sports, Arts & Physical Education"
    },
    {
      "id": "DES-09",
      "name": "Music, Dance & Cultural Instructor",
      "department": "Sports, Arts & Physical Education"
    },
    {
      "id": "DES-10",
      "name": "Fine Arts & Craft Instructor",
      "department": "Sports, Arts & Physical Education"
    },
    {
      "id": "DES-11",
      "name": "Chief Accountant & Cashier",
      "department": "Accounts, IT & Support Operations"
    },
    {
      "id": "DES-12",
      "name": "Front Desk & Admissions Officer",
      "department": "Accounts, IT & Support Operations"
    },
    {
      "id": "DES-13",
      "name": "Senior Librarian",
      "department": "Accounts, IT & Support Operations"
    },
    {
      "id": "DES-14",
      "name": "IT Systems & Biometric Administrator",
      "department": "Accounts, IT & Support Operations"
    },
    {
      "id": "DES-15",
      "name": "Transport & Fleet Supervisor",
      "department": "Accounts, IT & Support Operations"
    },
    {
      "id": "DES-16",
      "name": "Infirmary Officer / Head Nurse",
      "department": "Accounts, IT & Support Operations"
    },
    {
      "id": "DES-17",
      "name": "Science Lab Demonstrator",
      "department": "Science & Technology"
    }
  ],
  "teachers": [
    {
      "id": "TCH-1001",
      "employeeId": "EMP-2020-001",
      "name": "Mr. Pramod Kumar Rajput",
      "gender": "Male",
      "dob": "1975-04-12",
      "bloodGroup": "B+",
      "department": "Administration & Management",
      "designation": "Managing Director & Manager",
      "qualification": "M.Sc, B.Ed, M.Phil (Education Leadership)",
      "experience": "24 Years",
      "mobile": "+91 97589 75880",
      "email": "manager@dmpsjargawan.com",
      "address": "Dadheech Estate, Ramghat Road, Jargwan, Bulandshahr",
      "joiningDate": "2010-04-01",
      "status": "Active",
      "basicSalary": 0,
      "salary": {
        "basic": 0,
        "hra": 0,
        "da": 0,
        "allowance": 0,
        "pf": 0,
        "netSalary": 0
      },
      "classTeacherOf": null,
      "biometricId": "1001",
      "attendanceStatus": "Present"
    },
    {
      "id": "TCH-1002",
      "employeeId": "EMP-2020-002",
      "name": "Mrs. Kavita Rani",
      "gender": "Female",
      "dob": "1980-08-25",
      "bloodGroup": "O+",
      "department": "Administration & Management",
      "designation": "Principal & Academic Head",
      "qualification": "M.A. (English), M.Ed (Gold Medalist)",
      "experience": "19 Years",
      "mobile": "+91 96270 32626",
      "email": "principal@dmpsjargawan.com",
      "address": "Aligarh Road, Jargwan, Bulandshahr",
      "joiningDate": "2012-07-01",
      "status": "Active",
      "basicSalary": 45000,
      "salary": {
        "basic": 45000,
        "hra": 9000,
        "da": 4500,
        "allowance": 3500,
        "pf": 1800,
        "netSalary": 60200
      },
      "classTeacherOf": null,
      "biometricId": "1002",
      "attendanceStatus": "Present"
    },
    {
      "id": "TCH-1003",
      "employeeId": "EMP-2021-015",
      "name": "Dr. Rajesh Sharma",
      "gender": "Male",
      "dob": "1982-11-14",
      "bloodGroup": "A+",
      "department": "Science & Technology",
      "designation": "Vice Principal & HOD Science",
      "qualification": "Ph.D (Physics), M.Sc, B.Ed",
      "experience": "16 Years",
      "mobile": "+91 98110 44221",
      "email": "rajesh.sharma@dmps-school.edu.in",
      "address": "Barheti Campus Staff Quarters, Aligarh",
      "joiningDate": "2015-06-15",
      "status": "Active",
      "basicSalary": 38000,
      "salary": {
        "basic": 38000,
        "hra": 7600,
        "da": 3800,
        "allowance": 2600,
        "pf": 1800,
        "netSalary": 50200
      },
      "classTeacherOf": "Class 10 - A",
      "biometricId": "1003",
      "attendanceStatus": "Present"
    },
    {
      "id": "TCH-1004",
      "employeeId": "EMP-2021-022",
      "name": "Mrs. Sunita Verma",
      "gender": "Female",
      "dob": "1985-05-19",
      "bloodGroup": "B+",
      "department": "Mathematics",
      "designation": "Post Graduate Teacher (PGT)",
      "qualification": "M.Sc (Mathematics), B.Ed",
      "experience": "12 Years",
      "mobile": "+91 98220 55332",
      "email": "sunita.verma@dmps-school.edu.in",
      "address": "Civil Lines, Aligarh (U.P.)",
      "joiningDate": "2016-04-01",
      "status": "Active",
      "basicSalary": 32000,
      "salary": {
        "basic": 32000,
        "hra": 6400,
        "da": 3200,
        "allowance": 2000,
        "pf": 1800,
        "netSalary": 41800
      },
      "classTeacherOf": "Class 10 - B",
      "biometricId": "1004",
      "attendanceStatus": "Present"
    },
    {
      "id": "TCH-1005",
      "employeeId": "EMP-2022-031",
      "name": "Mr. Amitabh Sen",
      "gender": "Male",
      "dob": "1987-03-10",
      "bloodGroup": "AB+",
      "department": "Science & Technology",
      "designation": "Post Graduate Teacher (PGT)",
      "qualification": "M.Sc (Chemistry), B.Ed",
      "experience": "10 Years",
      "mobile": "+91 98330 66443",
      "email": "amitabh.sen@dmps-school.edu.in",
      "address": "Near Medical College, Aligarh",
      "joiningDate": "2018-07-15",
      "status": "Active",
      "basicSalary": 30000,
      "salary": {
        "basic": 30000,
        "hra": 6000,
        "da": 3000,
        "allowance": 2000,
        "pf": 1800,
        "netSalary": 39200
      },
      "classTeacherOf": "Class 9 - A",
      "biometricId": "1005",
      "attendanceStatus": "Present"
    },
    {
      "id": "TCH-1006",
      "employeeId": "EMP-2022-040",
      "name": "Dr. Meenakshi Sundaram",
      "gender": "Female",
      "dob": "1988-09-08",
      "bloodGroup": "O+",
      "department": "Science & Technology",
      "designation": "Post Graduate Teacher (PGT)",
      "qualification": "Ph.D (Botany), M.Sc, B.Ed",
      "experience": "9 Years",
      "mobile": "+91 98440 77554",
      "email": "meenakshi.s@dmps-school.edu.in",
      "address": "Swarna Jayanti Nagar, Aligarh",
      "joiningDate": "2019-04-01",
      "status": "Active",
      "basicSalary": 30000,
      "salary": {
        "basic": 30000,
        "hra": 6000,
        "da": 3000,
        "allowance": 2000,
        "pf": 1800,
        "netSalary": 39200
      },
      "classTeacherOf": "Class 9 - B",
      "biometricId": "1006",
      "attendanceStatus": "Present"
    },
    {
      "id": "TCH-1007",
      "employeeId": "EMP-2023-051",
      "name": "Mr. Vikramaditya Rathore",
      "gender": "Male",
      "dob": "1986-12-04",
      "bloodGroup": "O-",
      "department": "Administration & Management",
      "designation": "Post Graduate Teacher (PGT)",
      "qualification": "M.Com, Chartered Financial Analyst (Inter), B.Ed",
      "experience": "11 Years",
      "mobile": "+91 98550 88665",
      "email": "vikram.rathore@dmps-school.edu.in",
      "address": "GT Road, Bulandshahr",
      "joiningDate": "2020-08-01",
      "status": "Active",
      "basicSalary": 28000,
      "salary": {
        "basic": 28000,
        "hra": 5600,
        "da": 2800,
        "allowance": 1800,
        "pf": 1800,
        "netSalary": 36400
      },
      "classTeacherOf": "Class 11 - Commerce",
      "biometricId": "1007",
      "attendanceStatus": "Present"
    },
    {
      "id": "TCH-1008",
      "employeeId": "EMP-2023-062",
      "name": "Mrs. Ritu Jain",
      "gender": "Female",
      "dob": "1989-02-17",
      "bloodGroup": "A+",
      "department": "Languages & Humanities (English, Hindi, Sanskrit)",
      "designation": "Trained Graduate Teacher (TGT)",
      "qualification": "M.A. (English Literature), B.Ed",
      "experience": "8 Years",
      "mobile": "+91 98660 99776",
      "email": "ritu.jain@dmps-school.edu.in",
      "address": "Ramghat Road, Bulandshahr",
      "joiningDate": "2021-03-01",
      "status": "Active",
      "basicSalary": 24000,
      "salary": {
        "basic": 24000,
        "hra": 4800,
        "da": 2400,
        "allowance": 1500,
        "pf": 1800,
        "netSalary": 30900
      },
      "classTeacherOf": "Class 8 - A",
      "biometricId": "1008",
      "attendanceStatus": "Present"
    },
    {
      "id": "TCH-1009",
      "employeeId": "EMP-2023-073",
      "name": "Pt. Ramakant Shastri",
      "gender": "Male",
      "dob": "1983-07-29",
      "bloodGroup": "B+",
      "department": "Languages & Humanities (English, Hindi, Sanskrit)",
      "designation": "Trained Graduate Teacher (TGT)",
      "qualification": "Acharya (Sanskrit), M.A. (Hindi), B.Ed",
      "experience": "14 Years",
      "mobile": "+91 98770 11887",
      "email": "ramakant.shastri@dmps-school.edu.in",
      "address": "Mandir Marg, Jargwan, Bulandshahr",
      "joiningDate": "2017-07-01",
      "status": "Active",
      "basicSalary": 24000,
      "salary": {
        "basic": 24000,
        "hra": 4800,
        "da": 2400,
        "allowance": 1500,
        "pf": 1800,
        "netSalary": 30900
      },
      "classTeacherOf": "Class 7 - A",
      "biometricId": "1009",
      "attendanceStatus": "Present"
    },
    {
      "id": "TCH-1010",
      "employeeId": "EMP-2024-084",
      "name": "Mr. Amit Kumar",
      "gender": "Male",
      "dob": "1991-06-21",
      "bloodGroup": "O+",
      "department": "Science & Technology",
      "designation": "Trained Graduate Teacher (TGT)",
      "qualification": "MCA, B.Tech (CSE), B.Ed",
      "experience": "7 Years",
      "mobile": "+91 98880 22998",
      "email": "amit.it@dmps-school.edu.in",
      "address": "Vinay Nagar, Aligarh",
      "joiningDate": "2022-04-01",
      "status": "Active",
      "basicSalary": 26000,
      "salary": {
        "basic": 26000,
        "hra": 5200,
        "da": 2600,
        "allowance": 1500,
        "pf": 1800,
        "netSalary": 33500
      },
      "classTeacherOf": "Class 8 - B",
      "biometricId": "1010",
      "attendanceStatus": "Present"
    },
    {
      "id": "TCH-1011",
      "employeeId": "EMP-2024-095",
      "name": "Mrs. Shalini Mehra",
      "gender": "Female",
      "dob": "1990-10-11",
      "bloodGroup": "AB+",
      "department": "Primary & Pre-Primary Wing",
      "designation": "Primary Teacher (PRT)",
      "qualification": "M.Sc, B.Ed, NTT Diploma",
      "experience": "8 Years",
      "mobile": "+91 98990 33009",
      "email": "shalini.mehra@dmps-school.edu.in",
      "address": "Center Point, Aligarh",
      "joiningDate": "2021-08-01",
      "status": "Active",
      "basicSalary": 20000,
      "salary": {
        "basic": 20000,
        "hra": 4000,
        "da": 2000,
        "allowance": 1200,
        "pf": 1800,
        "netSalary": 25400
      },
      "classTeacherOf": "Class 5 - A",
      "biometricId": "1011",
      "attendanceStatus": "Present"
    },
    {
      "id": "TCH-1012",
      "employeeId": "EMP-2024-106",
      "name": "Mrs. Deepa Tyagi",
      "gender": "Female",
      "dob": "1993-01-15",
      "bloodGroup": "A+",
      "department": "Primary & Pre-Primary Wing",
      "designation": "Primary Teacher (PRT)",
      "qualification": "B.Sc (Maths), B.Ed, CTET Qualified",
      "experience": "6 Years",
      "mobile": "+91 98111 22334",
      "email": "deepa.tyagi@dmps-school.edu.in",
      "address": "Jargwan Town, Bulandshahr",
      "joiningDate": "2023-04-01",
      "status": "Active",
      "basicSalary": 18000,
      "salary": {
        "basic": 18000,
        "hra": 3600,
        "da": 1800,
        "allowance": 1000,
        "pf": 1800,
        "netSalary": 22600
      },
      "classTeacherOf": "Class 3 - A",
      "biometricId": "1012",
      "attendanceStatus": "Present"
    },
    {
      "id": "TCH-1013",
      "employeeId": "EMP-2024-117",
      "name": "Mrs. Anjali Saxena",
      "gender": "Female",
      "dob": "1994-08-20",
      "bloodGroup": "B+",
      "department": "Primary & Pre-Primary Wing",
      "designation": "Nursery & Kindergarten Educator",
      "qualification": "B.A., ECCE Certified, Montessori Trained",
      "experience": "5 Years",
      "mobile": "+91 98222 33445",
      "email": "anjali.saxena@dmps-school.edu.in",
      "address": "PAC Colony, Vinay Nagar, Aligarh",
      "joiningDate": "2023-06-15",
      "status": "Active",
      "basicSalary": 16000,
      "salary": {
        "basic": 16000,
        "hra": 3200,
        "da": 1600,
        "allowance": 1000,
        "pf": 1800,
        "netSalary": 20000
      },
      "classTeacherOf": "LKG - A",
      "biometricId": "1013",
      "attendanceStatus": "Present"
    },
    {
      "id": "TCH-1014",
      "employeeId": "EMP-2024-128",
      "name": "Coach Devender Singh",
      "gender": "Male",
      "dob": "1986-04-05",
      "bloodGroup": "O+",
      "department": "Sports, Arts & Physical Education",
      "designation": "Head of Physical Education & Sports",
      "qualification": "M.P.Ed, NIS Coach (Athletics & Volleyball)",
      "experience": "13 Years",
      "mobile": "+91 98333 44556",
      "email": "sports@dmps-school.edu.in",
      "address": "Sports Complex Quarters, Jargwan",
      "joiningDate": "2019-07-01",
      "status": "Active",
      "basicSalary": 22000,
      "salary": {
        "basic": 22000,
        "hra": 4400,
        "da": 2200,
        "allowance": 1500,
        "pf": 1800,
        "netSalary": 28300
      },
      "classTeacherOf": null,
      "biometricId": "1014",
      "attendanceStatus": "Present"
    },
    {
      "id": "TCH-1015",
      "employeeId": "EMP-2025-139",
      "name": "Mr. Suresh Chand",
      "gender": "Male",
      "dob": "1981-12-18",
      "bloodGroup": "AB+",
      "department": "Accounts, IT & Support Operations",
      "designation": "Chief Accountant & Cashier",
      "qualification": "M.Com, Tally ERP 9 Prime Certified",
      "experience": "15 Years",
      "mobile": "+91 98444 55667",
      "email": "accounts@dmps-school.edu.in",
      "address": "Main Market, Jargwan, Bulandshahr",
      "joiningDate": "2016-01-10",
      "status": "Active",
      "basicSalary": 25000,
      "salary": {
        "basic": 25000,
        "hra": 5000,
        "da": 2500,
        "allowance": 1500,
        "pf": 1800,
        "netSalary": 32200
      },
      "classTeacherOf": null,
      "biometricId": "1015",
      "attendanceStatus": "Present"
    },
    {
      "id": "TCH-1016",
      "employeeId": "EMP-2025-140",
      "name": "Mrs. Monika Rawat",
      "gender": "Female",
      "dob": "1992-05-30",
      "bloodGroup": "O+",
      "department": "Accounts, IT & Support Operations",
      "designation": "Front Desk & Admissions Officer",
      "qualification": "MBA (HR & Operations), B.Com",
      "experience": "6 Years",
      "mobile": "+91 98555 66778",
      "email": "reception@dmps-school.edu.in",
      "address": "Ramghat Road, Aligarh",
      "joiningDate": "2022-10-01",
      "status": "Active",
      "basicSalary": 18000,
      "salary": {
        "basic": 18000,
        "hra": 3600,
        "da": 1800,
        "allowance": 1000,
        "pf": 1800,
        "netSalary": 22600
      },
      "classTeacherOf": null,
      "biometricId": "1016",
      "attendanceStatus": "Present"
    },
    {
      "id": "TCH-1017",
      "employeeId": "EMP-2025-151",
      "name": "Mr. Mahendra Pal",
      "gender": "Male",
      "dob": "1978-03-22",
      "bloodGroup": "B+",
      "department": "Accounts, IT & Support Operations",
      "designation": "Transport & Fleet Supervisor",
      "qualification": "Senior Secondary, Heavy Vehicle Master",
      "experience": "18 Years",
      "mobile": "+91 98666 77889",
      "email": "transport@dmps-school.edu.in",
      "address": "Bus Depot Road, Jargwan",
      "joiningDate": "2015-04-01",
      "status": "Active",
      "basicSalary": 19000,
      "salary": {
        "basic": 19000,
        "hra": 3800,
        "da": 1900,
        "allowance": 1200,
        "pf": 1800,
        "netSalary": 24100
      },
      "classTeacherOf": null,
      "biometricId": "1017",
      "attendanceStatus": "Present"
    },
    {
      "id": "TCH-1018",
      "employeeId": "EMP-2025-162",
      "name": "Mrs. Geeta Devi",
      "gender": "Female",
      "dob": "1984-07-14",
      "bloodGroup": "A+",
      "department": "Accounts, IT & Support Operations",
      "designation": "Senior Librarian",
      "qualification": "M.Lib.Sc (Master of Library Science), B.Ed",
      "experience": "10 Years",
      "mobile": "+91 98777 88990",
      "email": "library@dmps-school.edu.in",
      "address": "Kishanpur, Aligarh",
      "joiningDate": "2020-02-01",
      "status": "Active",
      "basicSalary": 20000,
      "salary": {
        "basic": 20000,
        "hra": 4000,
        "da": 2000,
        "allowance": 1000,
        "pf": 1800,
        "netSalary": 25200
      },
      "classTeacherOf": null,
      "biometricId": "1018",
      "attendanceStatus": "Present"
    }
  ],
  "students": [],
  "feeInvoices": [],
  "frontOffice": {
    "visitors": [],
    "phoneCalls": [],
    "postalRecords": [],
    "complaints": []
  },
  "transport": {
    "vehicles": [
      {
        "id": "VEH-01",
        "vehicleNo": "UP-14-BT-1024",
        "type": "School Bus (52-Seater)",
        "makeModel": "Tata Starbus Ultra 2024",
        "driverName": "Mr. Sukhdev Singh",
        "driverPhone": "+91 94120 11223",
        "conductorName": "Mr. Rameshwar Dayal",
        "insuranceExpiry": "2027-03-31",
        "fitnessExpiry": "2027-05-15",
        "gpsStatus": "Live Online",
        "currentRoute": "Route 1 - City Express (Bulandshahr to School)"
      },
      {
        "id": "VEH-02",
        "vehicleNo": "UP-14-BT-3042",
        "type": "School Bus (40-Seater)",
        "makeModel": "Eicher Skyline Pro 2023",
        "driverName": "Mr. Mahendra Pal",
        "driverPhone": "+91 98666 77889",
        "conductorName": "Mr. Bablu Kumar",
        "insuranceExpiry": "2027-02-28",
        "fitnessExpiry": "2027-04-10",
        "gpsStatus": "Live Online",
        "currentRoute": "Route 2 - Ramghat Corridor (Aligarh to Jargwan)"
      },
      {
        "id": "VEH-03",
        "vehicleNo": "UP-14-AT-5561",
        "type": "School Winger Van (16-Seater)",
        "makeModel": "Force Traveller 2024",
        "driverName": "Mr. Ram Kumar",
        "driverPhone": "+91 94125 33445",
        "conductorName": "Self",
        "insuranceExpiry": "2027-06-30",
        "fitnessExpiry": "2027-08-20",
        "gpsStatus": "Live Online",
        "currentRoute": "Route 3 - PAC Shuttle & Vinay Nagar"
      }
    ],
    "routes": [
      {
        "id": "RT-01",
        "routeName": "Route 1 - City Express (Bulandshahr)",
        "vehicleNo": "UP-14-BT-1024",
        "totalStops": 8,
        "stops": [
          "Sector 62 Main Gate",
          "Purani Tehsil",
          "Railway Station Chowk",
          "Cloth Market",
          "NTPC Gate 2",
          "Hero Showroom Point",
          "Dairy Crossing",
          "DMPS Main Gate"
        ],
        "monthlyFare": 1200
      },
      {
        "id": "RT-02",
        "routeName": "Route 2 - Ramghat Corridor (Aligarh)",
        "vehicleNo": "UP-14-BT-3042",
        "totalStops": 9,
        "stops": [
          "Civil Lines Chauraha",
          "Medical College Crossing",
          "Collectorate Circle",
          "Swarna Jayanti Park",
          "Industrial Area Gate 1",
          "Barheti Dispensary",
          "Chauhan Farm Turn",
          "BSNL Tower",
          "DMPS Main Gate"
        ],
        "monthlyFare": 1500
      },
      {
        "id": "RT-03",
        "routeName": "Route 3 - PAC Shuttle (Vinay Nagar)",
        "vehicleNo": "UP-14-AT-5561",
        "totalStops": 5,
        "stops": [
          "PAC Main Gate",
          "Vinay Nagar Market",
          "Barheti Campus",
          "Kishanpur Mode",
          "DMPS Main Gate"
        ],
        "monthlyFare": 1000
      }
    ]
  },
  "inventory": {
    "items": [],
    "issues": []
  },
  "library": {
    "books": [],
    "issues": []
  },
  "hostel": {
    "rooms": [],
    "allocations": []
  },
  "homework": [],
  "notices": [],
  "leaves": []
};
