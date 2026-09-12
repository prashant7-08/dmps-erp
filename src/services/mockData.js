// =============================================================================
//   DADHEECH MEMORIAL PUBLIC SCHOOL - ENTERPRISE SCHOOL ERP DEMO DATABASE
//   Clean, Realistic, 100% Bug-Free Master Dataset for Next Academic Year
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
  "students": [
    {
      "id": "STU-2026-001",
      "admissionNo": "ADM-2026-1001",
      "rollNo": "101",
      "name": "Aarav Sharma",
      "dob": "2011-04-12",
      "gender": "Male",
      "bloodGroup": "O+",
      "class": "Class 10",
      "section": "A",
      "house": "Phoenix (Red House)",
      "caste": "General",
      "aadhaarNo": "XXXX-XXXX-8870",
      "branchId": "BR-01",
      "branchName": "Dadheech Memorial Public School (Main Campus)",
      "status": "Active",
      "isRteStudent": false,
      "academicSession": "2026-2027",
      "admissionDate": "2026-04-05",
      "parents": {
        "fatherName": "Mr. Mukesh Sharma",
        "fatherMobile": "+91 98110 01122",
        "fatherOccupation": "Senior Software Engineer",
        "motherName": "Mrs. Neelam Sharma",
        "motherMobile": "+91 98110 01122",
        "email": "aarav.sharma@dmps-parent.edu.in",
        "address": "House 42, Sector 62, Noida / Jargwan",
        "emergencyContact": "+91 98110 01122"
      },
      "transport": {
        "isEnrolled": true,
        "routeName": "Route 1 - City Express",
        "pickupPoint": "Sector 62 Main Gate",
        "monthlyFare": 1200,
        "months": 11
      },
      "attendanceSummary": {
        "totalDays": 110,
        "presentDays": 104,
        "absentDays": 0,
        "leaveDays": 0,
        "percentage": 94.5
      },
      "feeSummary": {
        "tuitionDue": 45000,
        "otherChargesDue": 0,
        "otherChargesBreakdown": null,
        "transportDue11Months": 13200,
        "parentVisibleDue": 58200,
        "totalDue": 58200,
        "totalPaid": 45000,
        "balance": 13200,
        "status": "Partial",
        "isElderSibling": false,
        "consolidatedFamilyDue": 0,
        "consolidatedFamilyPaid": 0,
        "consolidatedFamilyBalance": 0,
        "familySiblings": []
      },
      "siblings": [
        {
          "studentId": "STU-2026-015",
          "name": "Aniket Sharma",
          "class": "Class 5",
          "section": "A",
          "admissionNo": "ADM-2026-1015",
          "rollNo": "101",
          "relation": "Sibling (Real Brother/Sister)"
        }
      ]
    },
    {
      "id": "STU-2026-002",
      "admissionNo": "ADM-2026-1002",
      "rollNo": "102",
      "name": "Ananya Deshmukh",
      "dob": "2011-09-25",
      "gender": "Female",
      "bloodGroup": "B+",
      "class": "Class 10",
      "section": "A",
      "house": "Dragons (Blue House)",
      "caste": "General",
      "aadhaarNo": "XXXX-XXXX-3251",
      "branchId": "BR-02",
      "branchName": "Dadheech Memorial Public School (Barheti Campus)",
      "status": "Active",
      "isRteStudent": false,
      "academicSession": "2026-2027",
      "admissionDate": "2026-04-05",
      "parents": {
        "fatherName": "Dr. Sanjay Deshmukh",
        "fatherMobile": "+91 98220 02233",
        "fatherOccupation": "Medical Practitioner",
        "motherName": "Dr. Preeti Deshmukh",
        "motherMobile": "+91 98220 02233",
        "email": "ananya.deshmukh@dmps-parent.edu.in",
        "address": "14/B, Doctors Colony, Aligarh",
        "emergencyContact": "+91 98220 02233"
      },
      "transport": {
        "isEnrolled": true,
        "routeName": "Route 2 - Ramghat Corridor",
        "pickupPoint": "Medical College Crossing",
        "monthlyFare": 1500,
        "months": 11
      },
      "attendanceSummary": {
        "totalDays": 110,
        "presentDays": 103,
        "absentDays": 1,
        "leaveDays": 1,
        "percentage": 93.6
      },
      "feeSummary": {
        "tuitionDue": 45000,
        "otherChargesDue": 0,
        "otherChargesBreakdown": null,
        "transportDue11Months": 16500,
        "parentVisibleDue": 61500,
        "totalDue": 61500,
        "totalPaid": 30000,
        "balance": 31500,
        "status": "Partial",
        "isElderSibling": false,
        "consolidatedFamilyDue": 0,
        "consolidatedFamilyPaid": 0,
        "consolidatedFamilyBalance": 0,
        "familySiblings": []
      }
    },
    {
      "id": "STU-2026-003",
      "admissionNo": "ADM-2026-1003",
      "rollNo": "103",
      "name": "Kabir Khan",
      "dob": "2011-02-18",
      "gender": "Male",
      "bloodGroup": "A+",
      "class": "Class 10",
      "section": "A",
      "house": "Titans (Green House)",
      "caste": "General",
      "aadhaarNo": "XXXX-XXXX-8220",
      "branchId": "BR-01",
      "branchName": "Dadheech Memorial Public School (Main Campus)",
      "status": "Active",
      "isRteStudent": false,
      "academicSession": "2026-2027",
      "admissionDate": "2026-04-05",
      "parents": {
        "fatherName": "Mr. Tariq Khan",
        "fatherMobile": "+91 98330 03344",
        "fatherOccupation": "Civil Contractor",
        "motherName": "Mrs. Shabana Khan",
        "motherMobile": "+91 98330 03344",
        "email": "kabir.khan@dmps-parent.edu.in",
        "address": "Aligarh Road, Jargwan Town",
        "emergencyContact": "+91 98330 03344"
      },
      "transport": {
        "isEnrolled": false,
        "routeName": "None",
        "pickupPoint": "Self Walking",
        "monthlyFare": 0,
        "months": 11
      },
      "attendanceSummary": {
        "totalDays": 110,
        "presentDays": 102,
        "absentDays": 2,
        "leaveDays": 2,
        "percentage": 92.7
      },
      "feeSummary": {
        "tuitionDue": 45000,
        "otherChargesDue": 0,
        "otherChargesBreakdown": null,
        "transportDue11Months": 0,
        "parentVisibleDue": 45000,
        "totalDue": 45000,
        "totalPaid": 0,
        "balance": 45000,
        "status": "Pending",
        "isElderSibling": false,
        "consolidatedFamilyDue": 0,
        "consolidatedFamilyPaid": 0,
        "consolidatedFamilyBalance": 0,
        "familySiblings": []
      }
    },
    {
      "id": "STU-2026-004",
      "admissionNo": "ADM-2026-1004",
      "rollNo": "104",
      "name": "Diya Chatterjee",
      "dob": "2011-07-14",
      "gender": "Female",
      "bloodGroup": "AB+",
      "class": "Class 10",
      "section": "B",
      "house": "Warriors (Yellow House)",
      "caste": "General",
      "aadhaarNo": "XXXX-XXXX-5292",
      "branchId": "BR-01",
      "branchName": "Dadheech Memorial Public School (Main Campus)",
      "status": "Active",
      "isRteStudent": false,
      "academicSession": "2026-2027",
      "admissionDate": "2026-04-05",
      "parents": {
        "fatherName": "Mr. Debashish Chatterjee",
        "fatherMobile": "+91 98440 04455",
        "fatherOccupation": "Bank Branch Manager",
        "motherName": "Mrs. Shoma Chatterjee",
        "motherMobile": "+91 98440 04455",
        "email": "diya.chatterjee@dmps-parent.edu.in",
        "address": "Near Railway Overbridge, Bulandshahr",
        "emergencyContact": "+91 98440 04455"
      },
      "transport": {
        "isEnrolled": true,
        "routeName": "Route 1 - City Express",
        "pickupPoint": "Railway Station Chowk",
        "monthlyFare": 1200,
        "months": 11
      },
      "attendanceSummary": {
        "totalDays": 110,
        "presentDays": 101,
        "absentDays": 3,
        "leaveDays": 0,
        "percentage": 91.8
      },
      "feeSummary": {
        "tuitionDue": 45000,
        "otherChargesDue": 0,
        "otherChargesBreakdown": null,
        "transportDue11Months": 13200,
        "parentVisibleDue": 58200,
        "totalDue": 58200,
        "totalPaid": 45000,
        "balance": 13200,
        "status": "Partial",
        "isElderSibling": false,
        "consolidatedFamilyDue": 0,
        "consolidatedFamilyPaid": 0,
        "consolidatedFamilyBalance": 0,
        "familySiblings": []
      }
    },
    {
      "id": "STU-2026-005",
      "admissionNo": "ADM-2026-1005",
      "rollNo": "101",
      "name": "Rohan Varma",
      "dob": "2012-06-11",
      "gender": "Male",
      "bloodGroup": "O-",
      "class": "Class 9",
      "section": "A",
      "house": "Phoenix (Red House)",
      "caste": "General",
      "aadhaarNo": "XXXX-XXXX-3764",
      "branchId": "BR-03",
      "branchName": "Dadheech Kids School (Vinay Nagar PAC Campus)",
      "status": "Active",
      "isRteStudent": false,
      "academicSession": "2026-2027",
      "admissionDate": "2026-04-05",
      "parents": {
        "fatherName": "Mr. Alok Varma",
        "fatherMobile": "+91 98550 05566",
        "fatherOccupation": "Chartered Accountant",
        "motherName": "Mrs. Sunita Varma",
        "motherMobile": "+91 98550 05566",
        "email": "rohan.varma@dmps-parent.edu.in",
        "address": "Civil Lines, Aligarh",
        "emergencyContact": "+91 98550 05566"
      },
      "transport": {
        "isEnrolled": true,
        "routeName": "Route 2 - Ramghat Corridor",
        "pickupPoint": "Civil Lines Chauraha",
        "monthlyFare": 1500,
        "months": 11
      },
      "attendanceSummary": {
        "totalDays": 110,
        "presentDays": 100,
        "absentDays": 4,
        "leaveDays": 1,
        "percentage": 90.9
      },
      "feeSummary": {
        "tuitionDue": 42000,
        "otherChargesDue": 0,
        "otherChargesBreakdown": null,
        "transportDue11Months": 16500,
        "parentVisibleDue": 58500,
        "totalDue": 58500,
        "totalPaid": 28000,
        "balance": 30500,
        "status": "Partial",
        "isElderSibling": false,
        "consolidatedFamilyDue": 0,
        "consolidatedFamilyPaid": 0,
        "consolidatedFamilyBalance": 0,
        "familySiblings": []
      }
    },
    {
      "id": "STU-2026-006",
      "admissionNo": "ADM-2026-1006",
      "rollNo": "102",
      "name": "Priya Patel",
      "dob": "2012-11-03",
      "gender": "Female",
      "bloodGroup": "B+",
      "class": "Class 9",
      "section": "A",
      "house": "Dragons (Blue House)",
      "caste": "General",
      "aadhaarNo": "XXXX-XXXX-8203",
      "branchId": "BR-02",
      "branchName": "Dadheech Memorial Public School (Barheti Campus)",
      "status": "Active",
      "isRteStudent": false,
      "academicSession": "2026-2027",
      "admissionDate": "2026-04-05",
      "parents": {
        "fatherName": "Mr. Bhavesh Patel",
        "fatherMobile": "+91 98660 06677",
        "fatherOccupation": "Business Entrepreneur",
        "motherName": "Mrs. Meena Patel",
        "motherMobile": "+91 98660 06677",
        "email": "priya.patel@dmps-parent.edu.in",
        "address": "Mandir Marg, Jargwan",
        "emergencyContact": "+91 98660 06677"
      },
      "transport": {
        "isEnrolled": false,
        "routeName": "None",
        "pickupPoint": "Self Bicycle",
        "monthlyFare": 0,
        "months": 11
      },
      "attendanceSummary": {
        "totalDays": 110,
        "presentDays": 99,
        "absentDays": 0,
        "leaveDays": 2,
        "percentage": 90
      },
      "feeSummary": {
        "tuitionDue": 42000,
        "otherChargesDue": 0,
        "otherChargesBreakdown": null,
        "transportDue11Months": 0,
        "parentVisibleDue": 42000,
        "totalDue": 42000,
        "totalPaid": 42000,
        "balance": 0,
        "status": "Paid",
        "isElderSibling": false,
        "consolidatedFamilyDue": 0,
        "consolidatedFamilyPaid": 0,
        "consolidatedFamilyBalance": 0,
        "familySiblings": []
      }
    },
    {
      "id": "STU-2026-007",
      "admissionNo": "ADM-2026-1007",
      "rollNo": "103",
      "name": "Aryan Singh",
      "dob": "2012-01-20",
      "gender": "Male",
      "bloodGroup": "A+",
      "class": "Class 9",
      "section": "B",
      "house": "Titans (Green House)",
      "caste": "General",
      "aadhaarNo": "XXXX-XXXX-3555",
      "branchId": "BR-01",
      "branchName": "Dadheech Memorial Public School (Main Campus)",
      "status": "Active",
      "isRteStudent": false,
      "academicSession": "2026-2027",
      "admissionDate": "2026-04-05",
      "parents": {
        "fatherName": "Subedar Major R. P. Singh",
        "fatherMobile": "+91 98770 07788",
        "fatherOccupation": "Indian Army Veteran",
        "motherName": "Mrs. Kamlesh Devi",
        "motherMobile": "+91 98770 07788",
        "email": "aryan.singh@dmps-parent.edu.in",
        "address": "PAC Battalion Road, Vinay Nagar",
        "emergencyContact": "+91 98770 07788"
      },
      "transport": {
        "isEnrolled": true,
        "routeName": "Route 3 - PAC Shuttle",
        "pickupPoint": "PAC Main Gate",
        "monthlyFare": 1000,
        "months": 11
      },
      "attendanceSummary": {
        "totalDays": 110,
        "presentDays": 98,
        "absentDays": 1,
        "leaveDays": 0,
        "percentage": 89.1
      },
      "feeSummary": {
        "tuitionDue": 42000,
        "otherChargesDue": 0,
        "otherChargesBreakdown": null,
        "transportDue11Months": 11000,
        "parentVisibleDue": 53000,
        "totalDue": 53000,
        "totalPaid": 42000,
        "balance": 11000,
        "status": "Partial",
        "isElderSibling": false,
        "consolidatedFamilyDue": 0,
        "consolidatedFamilyPaid": 0,
        "consolidatedFamilyBalance": 0,
        "familySiblings": []
      }
    },
    {
      "id": "STU-2026-008",
      "admissionNo": "ADM-2026-1008",
      "rollNo": "101",
      "name": "Ishaan Gupta",
      "dob": "2013-05-15",
      "gender": "Male",
      "bloodGroup": "O+",
      "class": "Class 8",
      "section": "A",
      "house": "Warriors (Yellow House)",
      "caste": "General",
      "aadhaarNo": "XXXX-XXXX-9068",
      "branchId": "BR-01",
      "branchName": "Dadheech Memorial Public School (Main Campus)",
      "status": "Active",
      "isRteStudent": false,
      "academicSession": "2026-2027",
      "admissionDate": "2026-04-05",
      "parents": {
        "fatherName": "Mr. Manoj Gupta",
        "fatherMobile": "+91 98880 08899",
        "fatherOccupation": "Textile Merchant",
        "motherName": "Mrs. Renu Gupta",
        "motherMobile": "+91 98880 08899",
        "email": "ishaan.gupta@dmps-parent.edu.in",
        "address": "Cloth Market, Bulandshahr",
        "emergencyContact": "+91 98880 08899"
      },
      "transport": {
        "isEnrolled": true,
        "routeName": "Route 1 - City Express",
        "pickupPoint": "Purani Tehsil",
        "monthlyFare": 1200,
        "months": 11
      },
      "attendanceSummary": {
        "totalDays": 110,
        "presentDays": 97,
        "absentDays": 2,
        "leaveDays": 1,
        "percentage": 88.2
      },
      "feeSummary": {
        "tuitionDue": 38000,
        "otherChargesDue": 0,
        "otherChargesBreakdown": null,
        "transportDue11Months": 13200,
        "parentVisibleDue": 51200,
        "totalDue": 51200,
        "totalPaid": 20000,
        "balance": 31200,
        "status": "Partial",
        "isElderSibling": false,
        "consolidatedFamilyDue": 0,
        "consolidatedFamilyPaid": 0,
        "consolidatedFamilyBalance": 0,
        "familySiblings": []
      }
    },
    {
      "id": "STU-2026-009",
      "admissionNo": "ADM-2026-1009",
      "rollNo": "102",
      "name": "Meera Verma",
      "dob": "2013-08-22",
      "gender": "Female",
      "bloodGroup": "AB+",
      "class": "Class 8",
      "section": "A",
      "house": "Phoenix (Red House)",
      "caste": "General",
      "aadhaarNo": "XXXX-XXXX-1243",
      "branchId": "BR-01",
      "branchName": "Dadheech Memorial Public School (Main Campus)",
      "status": "Active",
      "isRteStudent": false,
      "academicSession": "2026-2027",
      "admissionDate": "2026-04-05",
      "parents": {
        "fatherName": "Mr. Dharmendra Verma",
        "fatherMobile": "+91 98990 09900",
        "fatherOccupation": "Government Officer",
        "motherName": "Mrs. Pooja Verma",
        "motherMobile": "+91 98990 09900",
        "email": "meera.verma@dmps-parent.edu.in",
        "address": "Officers Colony, Aligarh",
        "emergencyContact": "+91 98990 09900"
      },
      "transport": {
        "isEnrolled": true,
        "routeName": "Route 2 - Ramghat Corridor",
        "pickupPoint": "Collectorate Circle",
        "monthlyFare": 1500,
        "months": 11
      },
      "attendanceSummary": {
        "totalDays": 110,
        "presentDays": 104,
        "absentDays": 3,
        "leaveDays": 2,
        "percentage": 94.5
      },
      "feeSummary": {
        "tuitionDue": 38000,
        "otherChargesDue": 0,
        "otherChargesBreakdown": null,
        "transportDue11Months": 16500,
        "parentVisibleDue": 54500,
        "totalDue": 54500,
        "totalPaid": 38000,
        "balance": 16500,
        "status": "Partial",
        "isElderSibling": false,
        "consolidatedFamilyDue": 0,
        "consolidatedFamilyPaid": 0,
        "consolidatedFamilyBalance": 0,
        "familySiblings": []
      }
    },
    {
      "id": "STU-2026-010",
      "admissionNo": "ADM-2026-1010",
      "rollNo": "103",
      "name": "Advait Joshi",
      "dob": "2013-12-30",
      "gender": "Male",
      "bloodGroup": "B+",
      "class": "Class 8",
      "section": "B",
      "house": "Dragons (Blue House)",
      "caste": "General",
      "aadhaarNo": "XXXX-XXXX-9407",
      "branchId": "BR-02",
      "branchName": "Dadheech Memorial Public School (Barheti Campus)",
      "status": "Active",
      "isRteStudent": false,
      "academicSession": "2026-2027",
      "admissionDate": "2026-04-05",
      "parents": {
        "fatherName": "Pt. Jagdish Joshi",
        "fatherMobile": "+91 98110 02233",
        "fatherOccupation": "Academician & Scholar",
        "motherName": "Mrs. Gayatri Joshi",
        "motherMobile": "+91 98110 02233",
        "email": "advait.joshi@dmps-parent.edu.in",
        "address": "Near Sanskrit Vidyapeeth, Jargwan",
        "emergencyContact": "+91 98110 02233"
      },
      "transport": {
        "isEnrolled": false,
        "routeName": "None",
        "pickupPoint": "Self Walking",
        "monthlyFare": 0,
        "months": 11
      },
      "attendanceSummary": {
        "totalDays": 110,
        "presentDays": 103,
        "absentDays": 4,
        "leaveDays": 0,
        "percentage": 93.6
      },
      "feeSummary": {
        "tuitionDue": 38000,
        "otherChargesDue": 0,
        "otherChargesBreakdown": null,
        "transportDue11Months": 0,
        "parentVisibleDue": 38000,
        "totalDue": 38000,
        "totalPaid": 15000,
        "balance": 23000,
        "status": "Partial",
        "isElderSibling": false,
        "consolidatedFamilyDue": 0,
        "consolidatedFamilyPaid": 0,
        "consolidatedFamilyBalance": 0,
        "familySiblings": []
      }
    },
    {
      "id": "STU-2026-011",
      "admissionNo": "ADM-2026-1011",
      "rollNo": "101",
      "name": "Saanvi Reddy",
      "dob": "2014-03-09",
      "gender": "Female",
      "bloodGroup": "O+",
      "class": "Class 7",
      "section": "A",
      "house": "Titans (Green House)",
      "caste": "General",
      "aadhaarNo": "XXXX-XXXX-9207",
      "branchId": "BR-01",
      "branchName": "Dadheech Memorial Public School (Main Campus)",
      "status": "Active",
      "isRteStudent": false,
      "academicSession": "2026-2027",
      "admissionDate": "2026-04-05",
      "parents": {
        "fatherName": "Mr. K. V. Reddy",
        "fatherMobile": "+91 98220 03344",
        "fatherOccupation": "Power Grid Executive",
        "motherName": "Mrs. Lakshmi Reddy",
        "motherMobile": "+91 98220 03344",
        "email": "saanvi.reddy@dmps-parent.edu.in",
        "address": "NTPC Township Road, Bulandshahr",
        "emergencyContact": "+91 98220 03344"
      },
      "transport": {
        "isEnrolled": true,
        "routeName": "Route 1 - City Express",
        "pickupPoint": "NTPC Gate 2",
        "monthlyFare": 1400,
        "months": 11
      },
      "attendanceSummary": {
        "totalDays": 110,
        "presentDays": 102,
        "absentDays": 0,
        "leaveDays": 1,
        "percentage": 92.7
      },
      "feeSummary": {
        "tuitionDue": 36000,
        "otherChargesDue": 0,
        "otherChargesBreakdown": null,
        "transportDue11Months": 15400,
        "parentVisibleDue": 51400,
        "totalDue": 51400,
        "totalPaid": 36000,
        "balance": 15400,
        "status": "Partial",
        "isElderSibling": false,
        "consolidatedFamilyDue": 0,
        "consolidatedFamilyPaid": 0,
        "consolidatedFamilyBalance": 0,
        "familySiblings": []
      }
    },
    {
      "id": "STU-2026-012",
      "admissionNo": "ADM-2026-1012",
      "rollNo": "102",
      "name": "Yashvardhan Chauhan",
      "dob": "2014-10-18",
      "gender": "Male",
      "bloodGroup": "A+",
      "class": "Class 7",
      "section": "A",
      "house": "Warriors (Yellow House)",
      "caste": "General",
      "aadhaarNo": "XXXX-XXXX-2152",
      "branchId": "BR-01",
      "branchName": "Dadheech Memorial Public School (Main Campus)",
      "status": "Active",
      "isRteStudent": false,
      "academicSession": "2026-2027",
      "admissionDate": "2026-04-05",
      "parents": {
        "fatherName": "Mr. Virendra Chauhan",
        "fatherMobile": "+91 98330 04455",
        "fatherOccupation": "Organic Agro Producer",
        "motherName": "Mrs. Sudha Chauhan",
        "motherMobile": "+91 98330 04455",
        "email": "yashvardhan.chauhan@dmps-parent.edu.in",
        "address": "Chauhan Farms, Jargwan Outskirts",
        "emergencyContact": "+91 98330 04455"
      },
      "transport": {
        "isEnrolled": true,
        "routeName": "Route 2 - Ramghat Corridor",
        "pickupPoint": "Chauhan Farm Turn",
        "monthlyFare": 1300,
        "months": 11
      },
      "attendanceSummary": {
        "totalDays": 110,
        "presentDays": 101,
        "absentDays": 1,
        "leaveDays": 2,
        "percentage": 91.8
      },
      "feeSummary": {
        "tuitionDue": 36000,
        "otherChargesDue": 0,
        "otherChargesBreakdown": null,
        "transportDue11Months": 14300,
        "parentVisibleDue": 50300,
        "totalDue": 50300,
        "totalPaid": 18000,
        "balance": 32300,
        "status": "Partial",
        "isElderSibling": false,
        "consolidatedFamilyDue": 0,
        "consolidatedFamilyPaid": 0,
        "consolidatedFamilyBalance": 0,
        "familySiblings": []
      },
      "siblings": [
        {
          "studentId": "STU-2026-023",
          "name": "Rudra Pratap Singh",
          "class": "Class 1",
          "section": "A",
          "admissionNo": "ADM-2026-1023",
          "rollNo": "101",
          "relation": "Sibling (Real Brother/Sister)"
        }
      ]
    },
    {
      "id": "STU-2026-013",
      "admissionNo": "ADM-2026-1013",
      "rollNo": "101",
      "name": "Riya Malhotra",
      "dob": "2015-02-14",
      "gender": "Female",
      "bloodGroup": "B+",
      "class": "Class 6",
      "section": "A",
      "house": "Phoenix (Red House)",
      "caste": "General",
      "aadhaarNo": "XXXX-XXXX-9423",
      "branchId": "BR-01",
      "branchName": "Dadheech Memorial Public School (Main Campus)",
      "status": "Active",
      "isRteStudent": false,
      "academicSession": "2026-2027",
      "admissionDate": "2026-04-05",
      "parents": {
        "fatherName": "Mr. Gaurav Malhotra",
        "fatherMobile": "+91 98440 05566",
        "fatherOccupation": "Automobile Dealership Head",
        "motherName": "Mrs. Divya Malhotra",
        "motherMobile": "+91 98440 05566",
        "email": "riya.malhotra@dmps-parent.edu.in",
        "address": "GT Road Crossing, Bulandshahr",
        "emergencyContact": "+91 98440 05566"
      },
      "transport": {
        "isEnrolled": true,
        "routeName": "Route 1 - City Express",
        "pickupPoint": "Hero Showroom Point",
        "monthlyFare": 1200,
        "months": 11
      },
      "attendanceSummary": {
        "totalDays": 110,
        "presentDays": 100,
        "absentDays": 2,
        "leaveDays": 0,
        "percentage": 90.9
      },
      "feeSummary": {
        "tuitionDue": 34000,
        "otherChargesDue": 0,
        "otherChargesBreakdown": null,
        "transportDue11Months": 13200,
        "parentVisibleDue": 47200,
        "totalDue": 47200,
        "totalPaid": 34000,
        "balance": 13200,
        "status": "Partial",
        "isElderSibling": false,
        "consolidatedFamilyDue": 0,
        "consolidatedFamilyPaid": 0,
        "consolidatedFamilyBalance": 0,
        "familySiblings": []
      }
    },
    {
      "id": "STU-2026-014",
      "admissionNo": "ADM-2026-1014",
      "rollNo": "102",
      "name": "Vihaan Saxena",
      "dob": "2015-07-27",
      "gender": "Male",
      "bloodGroup": "O+",
      "class": "Class 6",
      "section": "A",
      "house": "Dragons (Blue House)",
      "caste": "General",
      "aadhaarNo": "XXXX-XXXX-4960",
      "branchId": "BR-02",
      "branchName": "Dadheech Memorial Public School (Barheti Campus)",
      "status": "Active",
      "isRteStudent": false,
      "academicSession": "2026-2027",
      "admissionDate": "2026-04-05",
      "parents": {
        "fatherName": "Mr. Nitin Saxena",
        "fatherMobile": "+91 98550 06677",
        "fatherOccupation": "Architect & Interior Designer",
        "motherName": "Mrs. Rachna Saxena",
        "motherMobile": "+91 98550 06677",
        "email": "vihaan.saxena@dmps-parent.edu.in",
        "address": "Swarna Jayanti Nagar, Aligarh",
        "emergencyContact": "+91 98550 06677"
      },
      "transport": {
        "isEnrolled": true,
        "routeName": "Route 2 - Ramghat Corridor",
        "pickupPoint": "Swarna Jayanti Park",
        "monthlyFare": 1500,
        "months": 11
      },
      "attendanceSummary": {
        "totalDays": 110,
        "presentDays": 99,
        "absentDays": 3,
        "leaveDays": 1,
        "percentage": 90
      },
      "feeSummary": {
        "tuitionDue": 34000,
        "otherChargesDue": 0,
        "otherChargesBreakdown": null,
        "transportDue11Months": 16500,
        "parentVisibleDue": 50500,
        "totalDue": 50500,
        "totalPaid": 20000,
        "balance": 30500,
        "status": "Partial",
        "isElderSibling": false,
        "consolidatedFamilyDue": 0,
        "consolidatedFamilyPaid": 0,
        "consolidatedFamilyBalance": 0,
        "familySiblings": []
      }
    },
    {
      "id": "STU-2026-015",
      "admissionNo": "ADM-2026-1015",
      "rollNo": "101",
      "name": "Aniket Sharma",
      "dob": "2016-04-18",
      "gender": "Male",
      "bloodGroup": "O+",
      "class": "Class 5",
      "section": "A",
      "house": "Phoenix (Red House)",
      "caste": "General",
      "aadhaarNo": "XXXX-XXXX-4310",
      "branchId": "BR-03",
      "branchName": "Dadheech Kids School (Vinay Nagar PAC Campus)",
      "status": "Active",
      "isRteStudent": false,
      "academicSession": "2026-2027",
      "admissionDate": "2026-04-05",
      "parents": {
        "fatherName": "Mr. Mukesh Sharma",
        "fatherMobile": "+91 98110 01122",
        "fatherOccupation": "Senior Software Engineer",
        "motherName": "Mrs. Neelam Sharma",
        "motherMobile": "+91 98110 01122",
        "email": "aniket.sharma@dmps-parent.edu.in",
        "address": "House 42, Sector 62, Noida / Jargwan",
        "emergencyContact": "+91 98110 01122"
      },
      "transport": {
        "isEnrolled": true,
        "routeName": "Route 1 - City Express",
        "pickupPoint": "Sector 62 Main Gate",
        "monthlyFare": 1200,
        "months": 11
      },
      "attendanceSummary": {
        "totalDays": 110,
        "presentDays": 98,
        "absentDays": 4,
        "leaveDays": 2,
        "percentage": 89.1
      },
      "feeSummary": {
        "tuitionDue": 32000,
        "otherChargesDue": 0,
        "otherChargesBreakdown": null,
        "transportDue11Months": 13200,
        "parentVisibleDue": 45200,
        "totalDue": 45200,
        "totalPaid": 20000,
        "balance": 25200,
        "status": "Partial",
        "isElderSibling": false,
        "consolidatedFamilyDue": 0,
        "consolidatedFamilyPaid": 0,
        "consolidatedFamilyBalance": 0,
        "familySiblings": []
      },
      "siblings": [
        {
          "studentId": "STU-2026-001",
          "name": "Aarav Sharma",
          "class": "Class 10",
          "section": "A",
          "admissionNo": "ADM-2026-1001",
          "rollNo": "101",
          "relation": "Sibling (Real Brother/Sister)"
        }
      ]
    },
    {
      "id": "STU-2026-016",
      "admissionNo": "ADM-2026-1016",
      "rollNo": "102",
      "name": "Tanvi Agarwal",
      "dob": "2016-09-05",
      "gender": "Female",
      "bloodGroup": "A+",
      "class": "Class 5",
      "section": "A",
      "house": "Titans (Green House)",
      "caste": "General",
      "aadhaarNo": "XXXX-XXXX-5510",
      "branchId": "BR-01",
      "branchName": "Dadheech Memorial Public School (Main Campus)",
      "status": "Active",
      "isRteStudent": false,
      "academicSession": "2026-2027",
      "admissionDate": "2026-04-05",
      "parents": {
        "fatherName": "Mr. Pankaj Agarwal",
        "fatherMobile": "+91 98660 07788",
        "fatherOccupation": "Wholesale Grain Merchant",
        "motherName": "Mrs. Sarita Agarwal",
        "motherMobile": "+91 98660 07788",
        "email": "tanvi.agarwal@dmps-parent.edu.in",
        "address": "Anaj Mandi, Jargwan",
        "emergencyContact": "+91 98660 07788"
      },
      "transport": {
        "isEnrolled": false,
        "routeName": "None",
        "pickupPoint": "Self Escorted",
        "monthlyFare": 0,
        "months": 11
      },
      "attendanceSummary": {
        "totalDays": 110,
        "presentDays": 97,
        "absentDays": 0,
        "leaveDays": 0,
        "percentage": 88.2
      },
      "feeSummary": {
        "tuitionDue": 32000,
        "otherChargesDue": 0,
        "otherChargesBreakdown": null,
        "transportDue11Months": 0,
        "parentVisibleDue": 32000,
        "totalDue": 32000,
        "totalPaid": 32000,
        "balance": 0,
        "status": "Paid",
        "isElderSibling": false,
        "consolidatedFamilyDue": 0,
        "consolidatedFamilyPaid": 0,
        "consolidatedFamilyBalance": 0,
        "familySiblings": []
      }
    },
    {
      "id": "STU-2026-017",
      "admissionNo": "ADM-2026-1017",
      "rollNo": "101",
      "name": "Devansh Tiwari",
      "dob": "2017-01-22",
      "gender": "Male",
      "bloodGroup": "B+",
      "class": "Class 4",
      "section": "A",
      "house": "Warriors (Yellow House)",
      "caste": "General",
      "aadhaarNo": "XXXX-XXXX-6953",
      "branchId": "BR-01",
      "branchName": "Dadheech Memorial Public School (Main Campus)",
      "status": "Active",
      "isRteStudent": false,
      "academicSession": "2026-2027",
      "admissionDate": "2026-04-05",
      "parents": {
        "fatherName": "Mr. Satish Tiwari",
        "fatherMobile": "+91 98770 08899",
        "fatherOccupation": "Postmaster General Staff",
        "motherName": "Mrs. Pushpa Tiwari",
        "motherMobile": "+91 98770 08899",
        "email": "devansh.tiwari@dmps-parent.edu.in",
        "address": "Post Office Lane, Jargwan",
        "emergencyContact": "+91 98770 08899"
      },
      "transport": {
        "isEnrolled": false,
        "routeName": "None",
        "pickupPoint": "Walking",
        "monthlyFare": 0,
        "months": 11
      },
      "attendanceSummary": {
        "totalDays": 110,
        "presentDays": 104,
        "absentDays": 1,
        "leaveDays": 1,
        "percentage": 94.5
      },
      "feeSummary": {
        "tuitionDue": 30000,
        "otherChargesDue": 0,
        "otherChargesBreakdown": null,
        "transportDue11Months": 0,
        "parentVisibleDue": 30000,
        "totalDue": 30000,
        "totalPaid": 30000,
        "balance": 0,
        "status": "Paid",
        "isElderSibling": false,
        "consolidatedFamilyDue": 0,
        "consolidatedFamilyPaid": 0,
        "consolidatedFamilyBalance": 0,
        "familySiblings": []
      }
    },
    {
      "id": "STU-2026-018",
      "admissionNo": "ADM-2026-1018",
      "rollNo": "102",
      "name": "Navya Kapoor",
      "dob": "2017-06-30",
      "gender": "Female",
      "bloodGroup": "AB+",
      "class": "Class 4",
      "section": "A",
      "house": "Phoenix (Red House)",
      "caste": "General",
      "aadhaarNo": "XXXX-XXXX-4661",
      "branchId": "BR-02",
      "branchName": "Dadheech Memorial Public School (Barheti Campus)",
      "status": "Active",
      "isRteStudent": false,
      "academicSession": "2026-2027",
      "admissionDate": "2026-04-05",
      "parents": {
        "fatherName": "Mr. Sandeep Kapoor",
        "fatherMobile": "+91 98880 09900",
        "fatherOccupation": "Footwear Factory Owner",
        "motherName": "Mrs. Anju Kapoor",
        "motherMobile": "+91 98880 09900",
        "email": "navya.kapoor@dmps-parent.edu.in",
        "address": "Industrial Area, Aligarh",
        "emergencyContact": "+91 98880 09900"
      },
      "transport": {
        "isEnrolled": true,
        "routeName": "Route 2 - Ramghat Corridor",
        "pickupPoint": "Industrial Gate 1",
        "monthlyFare": 1500,
        "months": 11
      },
      "attendanceSummary": {
        "totalDays": 110,
        "presentDays": 103,
        "absentDays": 2,
        "leaveDays": 2,
        "percentage": 93.6
      },
      "feeSummary": {
        "tuitionDue": 30000,
        "otherChargesDue": 0,
        "otherChargesBreakdown": null,
        "transportDue11Months": 16500,
        "parentVisibleDue": 46500,
        "totalDue": 46500,
        "totalPaid": 15000,
        "balance": 31500,
        "status": "Partial",
        "isElderSibling": false,
        "consolidatedFamilyDue": 0,
        "consolidatedFamilyPaid": 0,
        "consolidatedFamilyBalance": 0,
        "familySiblings": []
      },
      "siblings": [
        {
          "studentId": "STU-2026-030",
          "name": "Myra Kapoor",
          "class": "Nursery",
          "section": "A",
          "admissionNo": "ADM-2026-1030",
          "rollNo": "102",
          "relation": "Sibling (Real Brother/Sister)"
        }
      ]
    },
    {
      "id": "STU-2026-019",
      "admissionNo": "ADM-2026-1019",
      "rollNo": "101",
      "name": "Atharv Mishra",
      "dob": "2018-03-14",
      "gender": "Male",
      "bloodGroup": "O+",
      "class": "Class 3",
      "section": "A",
      "house": "Dragons (Blue House)",
      "caste": "General",
      "aadhaarNo": "XXXX-XXXX-6736",
      "branchId": "BR-01",
      "branchName": "Dadheech Memorial Public School (Main Campus)",
      "status": "Active",
      "isRteStudent": false,
      "academicSession": "2026-2027",
      "admissionDate": "2026-04-05",
      "parents": {
        "fatherName": "Dr. Brijesh Mishra",
        "fatherMobile": "+91 98990 01122",
        "fatherOccupation": "Homeopathy Specialist",
        "motherName": "Mrs. Mamta Mishra",
        "motherMobile": "+91 98990 01122",
        "email": "atharv.mishra@dmps-parent.edu.in",
        "address": "Ramghat Road, Barheti",
        "emergencyContact": "+91 98990 01122"
      },
      "transport": {
        "isEnrolled": true,
        "routeName": "Route 2 - Ramghat Corridor",
        "pickupPoint": "Barheti Dispensary",
        "monthlyFare": 1100,
        "months": 11
      },
      "attendanceSummary": {
        "totalDays": 110,
        "presentDays": 102,
        "absentDays": 3,
        "leaveDays": 0,
        "percentage": 92.7
      },
      "feeSummary": {
        "tuitionDue": 28000,
        "otherChargesDue": 0,
        "otherChargesBreakdown": null,
        "transportDue11Months": 12100,
        "parentVisibleDue": 40100,
        "totalDue": 40100,
        "totalPaid": 28000,
        "balance": 12100,
        "status": "Partial",
        "isElderSibling": false,
        "consolidatedFamilyDue": 0,
        "consolidatedFamilyPaid": 0,
        "consolidatedFamilyBalance": 0,
        "familySiblings": []
      }
    },
    {
      "id": "STU-2026-020",
      "admissionNo": "ADM-2026-1020",
      "rollNo": "102",
      "name": "Samaira Bhatia",
      "dob": "2018-08-19",
      "gender": "Female",
      "bloodGroup": "A-",
      "class": "Class 3",
      "section": "A",
      "house": "Titans (Green House)",
      "caste": "General",
      "aadhaarNo": "XXXX-XXXX-6826",
      "branchId": "BR-03",
      "branchName": "Dadheech Kids School (Vinay Nagar PAC Campus)",
      "status": "Active",
      "isRteStudent": false,
      "academicSession": "2026-2027",
      "admissionDate": "2026-04-05",
      "parents": {
        "fatherName": "Mr. Kunal Bhatia",
        "fatherMobile": "+91 98110 03344",
        "fatherOccupation": "Dairy Plant General Manager",
        "motherName": "Mrs. Reet Bhatia",
        "motherMobile": "+91 98110 03344",
        "email": "samaira.bhatia@dmps-parent.edu.in",
        "address": "Dairy Farm Enclave, Bulandshahr",
        "emergencyContact": "+91 98110 03344"
      },
      "transport": {
        "isEnrolled": true,
        "routeName": "Route 1 - City Express",
        "pickupPoint": "Dairy Crossing",
        "monthlyFare": 1200,
        "months": 11
      },
      "attendanceSummary": {
        "totalDays": 110,
        "presentDays": 101,
        "absentDays": 4,
        "leaveDays": 1,
        "percentage": 91.8
      },
      "feeSummary": {
        "tuitionDue": 28000,
        "otherChargesDue": 0,
        "otherChargesBreakdown": null,
        "transportDue11Months": 13200,
        "parentVisibleDue": 41200,
        "totalDue": 41200,
        "totalPaid": 14000,
        "balance": 27200,
        "status": "Partial",
        "isElderSibling": false,
        "consolidatedFamilyDue": 0,
        "consolidatedFamilyPaid": 0,
        "consolidatedFamilyBalance": 0,
        "familySiblings": []
      }
    },
    {
      "id": "STU-2026-021",
      "admissionNo": "ADM-2026-1021",
      "rollNo": "101",
      "name": "Reyansh Rathore",
      "dob": "2019-02-11",
      "gender": "Male",
      "bloodGroup": "B+",
      "class": "Class 2",
      "section": "A",
      "house": "Warriors (Yellow House)",
      "caste": "General",
      "aadhaarNo": "XXXX-XXXX-5431",
      "branchId": "BR-01",
      "branchName": "Dadheech Memorial Public School (Main Campus)",
      "status": "Active",
      "isRteStudent": false,
      "academicSession": "2026-2027",
      "admissionDate": "2026-04-05",
      "parents": {
        "fatherName": "Mr. Kuldeep Rathore",
        "fatherMobile": "+91 98220 04455",
        "fatherOccupation": "Govt Polytechnic Lecturer",
        "motherName": "Mrs. Shashi Rathore",
        "motherMobile": "+91 98220 04455",
        "email": "reyansh.rathore@dmps-parent.edu.in",
        "address": "Polytechnic Campus, Aligarh",
        "emergencyContact": "+91 98220 04455"
      },
      "transport": {
        "isEnrolled": true,
        "routeName": "Route 2 - Ramghat Corridor",
        "pickupPoint": "Polytechnic Gate",
        "monthlyFare": 1300,
        "months": 11
      },
      "attendanceSummary": {
        "totalDays": 110,
        "presentDays": 100,
        "absentDays": 0,
        "leaveDays": 2,
        "percentage": 90.9
      },
      "feeSummary": {
        "tuitionDue": 26000,
        "otherChargesDue": 0,
        "otherChargesBreakdown": null,
        "transportDue11Months": 14300,
        "parentVisibleDue": 40300,
        "totalDue": 40300,
        "totalPaid": 26000,
        "balance": 14300,
        "status": "Partial",
        "isElderSibling": false,
        "consolidatedFamilyDue": 0,
        "consolidatedFamilyPaid": 0,
        "consolidatedFamilyBalance": 0,
        "familySiblings": []
      }
    },
    {
      "id": "STU-2026-022",
      "admissionNo": "ADM-2026-1022",
      "rollNo": "102",
      "name": "Avani Choudhary",
      "dob": "2019-07-08",
      "gender": "Female",
      "bloodGroup": "O+",
      "class": "Class 2",
      "section": "A",
      "house": "Phoenix (Red House)",
      "caste": "General",
      "aadhaarNo": "XXXX-XXXX-5933",
      "branchId": "BR-02",
      "branchName": "Dadheech Memorial Public School (Barheti Campus)",
      "status": "Active",
      "isRteStudent": false,
      "academicSession": "2026-2027",
      "admissionDate": "2026-04-05",
      "parents": {
        "fatherName": "Mr. Jagroop Choudhary",
        "fatherMobile": "+91 98330 05566",
        "fatherOccupation": "Dairy Farmer & Transporter",
        "motherName": "Mrs. Mithlesh Devi",
        "motherMobile": "+91 98330 05566",
        "email": "avani.choudhary@dmps-parent.edu.in",
        "address": "Village Jargwan Rural",
        "emergencyContact": "+91 98330 05566"
      },
      "transport": {
        "isEnrolled": false,
        "routeName": "None",
        "pickupPoint": "Walking",
        "monthlyFare": 0,
        "months": 11
      },
      "attendanceSummary": {
        "totalDays": 110,
        "presentDays": 99,
        "absentDays": 1,
        "leaveDays": 0,
        "percentage": 90
      },
      "feeSummary": {
        "tuitionDue": 26000,
        "otherChargesDue": 0,
        "otherChargesBreakdown": null,
        "transportDue11Months": 0,
        "parentVisibleDue": 26000,
        "totalDue": 26000,
        "totalPaid": 0,
        "balance": 26000,
        "status": "Pending",
        "isElderSibling": false,
        "consolidatedFamilyDue": 0,
        "consolidatedFamilyPaid": 0,
        "consolidatedFamilyBalance": 0,
        "familySiblings": []
      }
    },
    {
      "id": "STU-2026-023",
      "admissionNo": "ADM-2026-1023",
      "rollNo": "101",
      "name": "Rudra Pratap Singh",
      "dob": "2020-04-15",
      "gender": "Male",
      "bloodGroup": "O+",
      "class": "Class 1",
      "section": "A",
      "house": "Warriors (Yellow House)",
      "caste": "General",
      "aadhaarNo": "XXXX-XXXX-8232",
      "branchId": "BR-01",
      "branchName": "Dadheech Memorial Public School (Main Campus)",
      "status": "Active",
      "isRteStudent": false,
      "academicSession": "2026-2027",
      "admissionDate": "2026-04-05",
      "parents": {
        "fatherName": "Mr. Virendra Chauhan",
        "fatherMobile": "+91 98330 04455",
        "fatherOccupation": "Organic Agro Producer",
        "motherName": "Mrs. Sudha Chauhan",
        "motherMobile": "+91 98330 04455",
        "email": "rudra.pratap.singh@dmps-parent.edu.in",
        "address": "Chauhan Farms, Jargwan Outskirts",
        "emergencyContact": "+91 98330 04455"
      },
      "transport": {
        "isEnrolled": true,
        "routeName": "Route 2 - Ramghat Corridor",
        "pickupPoint": "Chauhan Farm Turn",
        "monthlyFare": 1300,
        "months": 11
      },
      "attendanceSummary": {
        "totalDays": 110,
        "presentDays": 98,
        "absentDays": 2,
        "leaveDays": 1,
        "percentage": 89.1
      },
      "feeSummary": {
        "tuitionDue": 24000,
        "otherChargesDue": 0,
        "otherChargesBreakdown": null,
        "transportDue11Months": 14300,
        "parentVisibleDue": 38300,
        "totalDue": 38300,
        "totalPaid": 24000,
        "balance": 14300,
        "status": "Partial",
        "isElderSibling": false,
        "consolidatedFamilyDue": 0,
        "consolidatedFamilyPaid": 0,
        "consolidatedFamilyBalance": 0,
        "familySiblings": []
      },
      "siblings": [
        {
          "studentId": "STU-2026-012",
          "name": "Yashvardhan Chauhan",
          "class": "Class 7",
          "section": "A",
          "admissionNo": "ADM-2026-1012",
          "rollNo": "102",
          "relation": "Sibling (Real Brother/Sister)"
        }
      ]
    },
    {
      "id": "STU-2026-024",
      "admissionNo": "ADM-2026-1024",
      "rollNo": "102",
      "name": "Pari Saxena",
      "dob": "2020-10-29",
      "gender": "Female",
      "bloodGroup": "A+",
      "class": "Class 1",
      "section": "A",
      "house": "Dragons (Blue House)",
      "caste": "General",
      "aadhaarNo": "XXXX-XXXX-7359",
      "branchId": "BR-01",
      "branchName": "Dadheech Memorial Public School (Main Campus)",
      "status": "Active",
      "isRteStudent": false,
      "academicSession": "2026-2027",
      "admissionDate": "2026-04-05",
      "parents": {
        "fatherName": "Mr. Ashish Saxena",
        "fatherMobile": "+91 98440 06677",
        "fatherOccupation": "Optometry Specialist",
        "motherName": "Mrs. Garima Saxena",
        "motherMobile": "+91 98440 06677",
        "email": "pari.saxena@dmps-parent.edu.in",
        "address": "Main Bazaar, Jargwan",
        "emergencyContact": "+91 98440 06677"
      },
      "transport": {
        "isEnrolled": false,
        "routeName": "None",
        "pickupPoint": "Self Escorted",
        "monthlyFare": 0,
        "months": 11
      },
      "attendanceSummary": {
        "totalDays": 110,
        "presentDays": 97,
        "absentDays": 3,
        "leaveDays": 2,
        "percentage": 88.2
      },
      "feeSummary": {
        "tuitionDue": 24000,
        "otherChargesDue": 0,
        "otherChargesBreakdown": null,
        "transportDue11Months": 0,
        "parentVisibleDue": 24000,
        "totalDue": 24000,
        "totalPaid": 12000,
        "balance": 12000,
        "status": "Partial",
        "isElderSibling": false,
        "consolidatedFamilyDue": 0,
        "consolidatedFamilyPaid": 0,
        "consolidatedFamilyBalance": 0,
        "familySiblings": []
      }
    },
    {
      "id": "STU-2026-025",
      "admissionNo": "ADM-2026-1025",
      "rollNo": "101",
      "name": "Harshvardhan Tomar",
      "dob": "2021-01-16",
      "gender": "Male",
      "bloodGroup": "B+",
      "class": "UKG",
      "section": "A",
      "house": "Titans (Green House)",
      "caste": "General",
      "aadhaarNo": "XXXX-XXXX-4571",
      "branchId": "BR-03",
      "branchName": "Dadheech Kids School (Vinay Nagar PAC Campus)",
      "status": "Active",
      "isRteStudent": false,
      "academicSession": "2026-2027",
      "admissionDate": "2026-04-05",
      "parents": {
        "fatherName": "Mr. Dhirendra Tomar",
        "fatherMobile": "+91 98550 07788",
        "fatherOccupation": "Electrical Goods Supplier",
        "motherName": "Mrs. Manju Tomar",
        "motherMobile": "+91 98550 07788",
        "email": "harshvardhan.tomar@dmps-parent.edu.in",
        "address": "Tomar Market, Jargwan",
        "emergencyContact": "+91 98550 07788"
      },
      "transport": {
        "isEnrolled": false,
        "routeName": "None",
        "pickupPoint": "Walking",
        "monthlyFare": 0,
        "months": 11
      },
      "attendanceSummary": {
        "totalDays": 110,
        "presentDays": 104,
        "absentDays": 4,
        "leaveDays": 0,
        "percentage": 94.5
      },
      "feeSummary": {
        "tuitionDue": 22000,
        "otherChargesDue": 0,
        "otherChargesBreakdown": null,
        "transportDue11Months": 0,
        "parentVisibleDue": 22000,
        "totalDue": 22000,
        "totalPaid": 22000,
        "balance": 0,
        "status": "Paid",
        "isElderSibling": false,
        "consolidatedFamilyDue": 0,
        "consolidatedFamilyPaid": 0,
        "consolidatedFamilyBalance": 0,
        "familySiblings": []
      }
    },
    {
      "id": "STU-2026-026",
      "admissionNo": "ADM-2026-1026",
      "rollNo": "102",
      "name": "Sneha Kulkarni",
      "dob": "2021-05-24",
      "gender": "Female",
      "bloodGroup": "AB+",
      "class": "UKG",
      "section": "A",
      "house": "Phoenix (Red House)",
      "caste": "General",
      "aadhaarNo": "XXXX-XXXX-8525",
      "branchId": "BR-02",
      "branchName": "Dadheech Memorial Public School (Barheti Campus)",
      "status": "Active",
      "isRteStudent": false,
      "academicSession": "2026-2027",
      "admissionDate": "2026-04-05",
      "parents": {
        "fatherName": "Mr. Prasad Kulkarni",
        "fatherMobile": "+91 98660 08899",
        "fatherOccupation": "Telecom Network Engineer",
        "motherName": "Mrs. Swati Kulkarni",
        "motherMobile": "+91 98660 08899",
        "email": "sneha.kulkarni@dmps-parent.edu.in",
        "address": "BSNL Tower Enclave, Aligarh",
        "emergencyContact": "+91 98660 08899"
      },
      "transport": {
        "isEnrolled": true,
        "routeName": "Route 2 - Ramghat Corridor",
        "pickupPoint": "BSNL Tower",
        "monthlyFare": 1400,
        "months": 11
      },
      "attendanceSummary": {
        "totalDays": 110,
        "presentDays": 103,
        "absentDays": 0,
        "leaveDays": 1,
        "percentage": 93.6
      },
      "feeSummary": {
        "tuitionDue": 22000,
        "otherChargesDue": 0,
        "otherChargesBreakdown": null,
        "transportDue11Months": 15400,
        "parentVisibleDue": 37400,
        "totalDue": 37400,
        "totalPaid": 15000,
        "balance": 22400,
        "status": "Partial",
        "isElderSibling": false,
        "consolidatedFamilyDue": 0,
        "consolidatedFamilyPaid": 0,
        "consolidatedFamilyBalance": 0,
        "familySiblings": []
      }
    },
    {
      "id": "STU-2026-027",
      "admissionNo": "ADM-2026-1027",
      "rollNo": "101",
      "name": "Shlok Trivedi",
      "dob": "2022-03-08",
      "gender": "Male",
      "bloodGroup": "O+",
      "class": "LKG",
      "section": "A",
      "house": "Dragons (Blue House)",
      "caste": "General",
      "aadhaarNo": "XXXX-XXXX-2525",
      "branchId": "BR-01",
      "branchName": "Dadheech Memorial Public School (Main Campus)",
      "status": "Active",
      "isRteStudent": false,
      "academicSession": "2026-2027",
      "admissionDate": "2026-04-05",
      "parents": {
        "fatherName": "Pt. Harish Trivedi",
        "fatherMobile": "+91 98770 09900",
        "fatherOccupation": "Vedic Scholar",
        "motherName": "Mrs. Uma Trivedi",
        "motherMobile": "+91 98770 09900",
        "email": "shlok.trivedi@dmps-parent.edu.in",
        "address": "Temple Road, Jargwan",
        "emergencyContact": "+91 98770 09900"
      },
      "transport": {
        "isEnrolled": false,
        "routeName": "None",
        "pickupPoint": "Walking",
        "monthlyFare": 0,
        "months": 11
      },
      "attendanceSummary": {
        "totalDays": 110,
        "presentDays": 102,
        "absentDays": 1,
        "leaveDays": 2,
        "percentage": 92.7
      },
      "feeSummary": {
        "tuitionDue": 20000,
        "otherChargesDue": 0,
        "otherChargesBreakdown": null,
        "transportDue11Months": 0,
        "parentVisibleDue": 20000,
        "totalDue": 20000,
        "totalPaid": 20000,
        "balance": 0,
        "status": "Paid",
        "isElderSibling": false,
        "consolidatedFamilyDue": 0,
        "consolidatedFamilyPaid": 0,
        "consolidatedFamilyBalance": 0,
        "familySiblings": []
      }
    },
    {
      "id": "STU-2026-028",
      "admissionNo": "ADM-2026-1028",
      "rollNo": "102",
      "name": "Anvi Singhal",
      "dob": "2022-09-17",
      "gender": "Female",
      "bloodGroup": "A+",
      "class": "LKG",
      "section": "A",
      "house": "Warriors (Yellow House)",
      "caste": "General",
      "aadhaarNo": "XXXX-XXXX-9133",
      "branchId": "BR-01",
      "branchName": "Dadheech Memorial Public School (Main Campus)",
      "status": "Active",
      "isRteStudent": false,
      "academicSession": "2026-2027",
      "admissionDate": "2026-04-05",
      "parents": {
        "fatherName": "Mr. Rajesh Singhal",
        "fatherMobile": "+91 98880 01122",
        "fatherOccupation": "Hardware Store Owner",
        "motherName": "Mrs. Rashmi Singhal",
        "motherMobile": "+91 98880 01122",
        "email": "anvi.singhal@dmps-parent.edu.in",
        "address": "Singhal Hardware, Main Road, Jargwan",
        "emergencyContact": "+91 98880 01122"
      },
      "transport": {
        "isEnrolled": false,
        "routeName": "None",
        "pickupPoint": "Walking",
        "monthlyFare": 0,
        "months": 11
      },
      "attendanceSummary": {
        "totalDays": 110,
        "presentDays": 101,
        "absentDays": 2,
        "leaveDays": 0,
        "percentage": 91.8
      },
      "feeSummary": {
        "tuitionDue": 20000,
        "otherChargesDue": 0,
        "otherChargesBreakdown": null,
        "transportDue11Months": 0,
        "parentVisibleDue": 20000,
        "totalDue": 20000,
        "totalPaid": 10000,
        "balance": 10000,
        "status": "Partial",
        "isElderSibling": false,
        "consolidatedFamilyDue": 0,
        "consolidatedFamilyPaid": 0,
        "consolidatedFamilyBalance": 0,
        "familySiblings": []
      }
    },
    {
      "id": "STU-2026-029",
      "admissionNo": "ADM-2026-1029",
      "rollNo": "101",
      "name": "Arjun Rawat",
      "dob": "2023-02-14",
      "gender": "Male",
      "bloodGroup": "B+",
      "class": "Nursery",
      "section": "A",
      "house": "Titans (Green House)",
      "caste": "General",
      "aadhaarNo": "XXXX-XXXX-1928",
      "branchId": "BR-01",
      "branchName": "Dadheech Memorial Public School (Main Campus)",
      "status": "Active",
      "isRteStudent": false,
      "academicSession": "2026-2027",
      "admissionDate": "2026-04-05",
      "parents": {
        "fatherName": "Mr. Deepak Rawat",
        "fatherMobile": "+91 98990 02233",
        "fatherOccupation": "Defence Logistics Officer",
        "motherName": "Mrs. Monika Rawat",
        "motherMobile": "+91 98990 02233",
        "email": "arjun.rawat@dmps-parent.edu.in",
        "address": "Ramghat Road, Aligarh",
        "emergencyContact": "+91 98990 02233"
      },
      "transport": {
        "isEnrolled": true,
        "routeName": "Route 2 - Ramghat Corridor",
        "pickupPoint": "Rawat Niwas Point",
        "monthlyFare": 1200,
        "months": 11
      },
      "attendanceSummary": {
        "totalDays": 110,
        "presentDays": 100,
        "absentDays": 3,
        "leaveDays": 1,
        "percentage": 90.9
      },
      "feeSummary": {
        "tuitionDue": 18000,
        "otherChargesDue": 0,
        "otherChargesBreakdown": null,
        "transportDue11Months": 13200,
        "parentVisibleDue": 31200,
        "totalDue": 31200,
        "totalPaid": 18000,
        "balance": 13200,
        "status": "Partial",
        "isElderSibling": false,
        "consolidatedFamilyDue": 0,
        "consolidatedFamilyPaid": 0,
        "consolidatedFamilyBalance": 0,
        "familySiblings": []
      }
    },
    {
      "id": "STU-2026-030",
      "admissionNo": "ADM-2026-1030",
      "rollNo": "102",
      "name": "Myra Kapoor",
      "dob": "2023-08-05",
      "gender": "Female",
      "bloodGroup": "O+",
      "class": "Nursery",
      "section": "A",
      "house": "Phoenix (Red House)",
      "caste": "General",
      "aadhaarNo": "XXXX-XXXX-9865",
      "branchId": "BR-02",
      "branchName": "Dadheech Memorial Public School (Barheti Campus)",
      "status": "Active",
      "isRteStudent": false,
      "academicSession": "2026-2027",
      "admissionDate": "2026-04-05",
      "parents": {
        "fatherName": "Mr. Sandeep Kapoor",
        "fatherMobile": "+91 98880 09900",
        "fatherOccupation": "Footwear Factory Owner",
        "motherName": "Mrs. Anju Kapoor",
        "motherMobile": "+91 98880 09900",
        "email": "myra.kapoor@dmps-parent.edu.in",
        "address": "Industrial Area, Aligarh",
        "emergencyContact": "+91 98880 09900"
      },
      "transport": {
        "isEnrolled": true,
        "routeName": "Route 2 - Ramghat Corridor",
        "pickupPoint": "Industrial Gate 1",
        "monthlyFare": 1500,
        "months": 11
      },
      "attendanceSummary": {
        "totalDays": 110,
        "presentDays": 99,
        "absentDays": 4,
        "leaveDays": 2,
        "percentage": 90
      },
      "feeSummary": {
        "tuitionDue": 18000,
        "otherChargesDue": 0,
        "otherChargesBreakdown": null,
        "transportDue11Months": 16500,
        "parentVisibleDue": 34500,
        "totalDue": 34500,
        "totalPaid": 9000,
        "balance": 25500,
        "status": "Partial",
        "isElderSibling": false,
        "consolidatedFamilyDue": 0,
        "consolidatedFamilyPaid": 0,
        "consolidatedFamilyBalance": 0,
        "familySiblings": []
      },
      "siblings": [
        {
          "studentId": "STU-2026-018",
          "name": "Navya Kapoor",
          "class": "Class 4",
          "section": "A",
          "admissionNo": "ADM-2026-1018",
          "rollNo": "102",
          "relation": "Sibling (Real Brother/Sister)"
        }
      ]
    },
    {
      "id": "STU-2026-031",
      "admissionNo": "ADM-2026-1031",
      "rollNo": "101",
      "name": "Vivaan Mehra",
      "dob": "2024-01-20",
      "gender": "Male",
      "bloodGroup": "O+",
      "class": "Playgroup (PG)",
      "section": "A",
      "house": "Dragons (Blue House)",
      "caste": "General",
      "aadhaarNo": "XXXX-XXXX-7808",
      "branchId": "BR-01",
      "branchName": "Dadheech Memorial Public School (Main Campus)",
      "status": "Active",
      "isRteStudent": false,
      "academicSession": "2026-2027",
      "admissionDate": "2026-04-05",
      "parents": {
        "fatherName": "Mr. Rohit Mehra",
        "fatherMobile": "+91 98110 04455",
        "fatherOccupation": "Real Estate Consultant",
        "motherName": "Mrs. Shalini Mehra",
        "motherMobile": "+91 98110 04455",
        "email": "vivaan.mehra@dmps-parent.edu.in",
        "address": "Center Point, Aligarh",
        "emergencyContact": "+91 98110 04455"
      },
      "transport": {
        "isEnrolled": false,
        "routeName": "None",
        "pickupPoint": "Parent Escorted",
        "monthlyFare": 0,
        "months": 11
      },
      "attendanceSummary": {
        "totalDays": 110,
        "presentDays": 98,
        "absentDays": 0,
        "leaveDays": 0,
        "percentage": 89.1
      },
      "feeSummary": {
        "tuitionDue": 16000,
        "otherChargesDue": 0,
        "otherChargesBreakdown": null,
        "transportDue11Months": 0,
        "parentVisibleDue": 16000,
        "totalDue": 16000,
        "totalPaid": 16000,
        "balance": 0,
        "status": "Paid",
        "isElderSibling": false,
        "consolidatedFamilyDue": 0,
        "consolidatedFamilyPaid": 0,
        "consolidatedFamilyBalance": 0,
        "familySiblings": []
      }
    },
    {
      "id": "STU-2026-032",
      "admissionNo": "ADM-2026-1032",
      "rollNo": "102",
      "name": "Inaya Siddiqui",
      "dob": "2024-06-11",
      "gender": "Female",
      "bloodGroup": "A+",
      "class": "Playgroup (PG)",
      "section": "A",
      "house": "Warriors (Yellow House)",
      "caste": "General",
      "aadhaarNo": "XXXX-XXXX-6131",
      "branchId": "BR-01",
      "branchName": "Dadheech Memorial Public School (Main Campus)",
      "status": "Active",
      "isRteStudent": false,
      "academicSession": "2026-2027",
      "admissionDate": "2026-04-05",
      "parents": {
        "fatherName": "Mr. Zeeshan Siddiqui",
        "fatherMobile": "+91 98220 05566",
        "fatherOccupation": "Handicrafts Exporter",
        "motherName": "Mrs. Farha Siddiqui",
        "motherMobile": "+91 98220 05566",
        "email": "inaya.siddiqui@dmps-parent.edu.in",
        "address": "Civil Lines, Aligarh",
        "emergencyContact": "+91 98220 05566"
      },
      "transport": {
        "isEnrolled": false,
        "routeName": "None",
        "pickupPoint": "Parent Escorted",
        "monthlyFare": 0,
        "months": 11
      },
      "attendanceSummary": {
        "totalDays": 110,
        "presentDays": 97,
        "absentDays": 1,
        "leaveDays": 1,
        "percentage": 88.2
      },
      "feeSummary": {
        "tuitionDue": 16000,
        "otherChargesDue": 0,
        "otherChargesBreakdown": null,
        "transportDue11Months": 0,
        "parentVisibleDue": 16000,
        "totalDue": 16000,
        "totalPaid": 8000,
        "balance": 8000,
        "status": "Partial",
        "isElderSibling": false,
        "consolidatedFamilyDue": 0,
        "consolidatedFamilyPaid": 0,
        "consolidatedFamilyBalance": 0,
        "familySiblings": []
      }
    },
    {
      "id": "STU-2026-033",
      "admissionNo": "ADM-2026-1033",
      "rollNo": "101",
      "name": "Aditya Pratap Singh",
      "dob": "2010-05-14",
      "gender": "Male",
      "bloodGroup": "O+",
      "class": "Class 11",
      "section": "Science (PCM)",
      "house": "Phoenix (Red House)",
      "caste": "General",
      "aadhaarNo": "XXXX-XXXX-4439",
      "branchId": "BR-01",
      "branchName": "Dadheech Memorial Public School (Main Campus)",
      "status": "Active",
      "isRteStudent": false,
      "academicSession": "2026-2027",
      "admissionDate": "2026-04-05",
      "parents": {
        "fatherName": "Mr. Surendra Singh",
        "fatherMobile": "+91 98330 06677",
        "fatherOccupation": "Executive Engineer (PWD)",
        "motherName": "Mrs. Anita Singh",
        "motherMobile": "+91 98330 06677",
        "email": "aditya.pratap.singh@dmps-parent.edu.in",
        "address": "PWD Colony, Bulandshahr",
        "emergencyContact": "+91 98330 06677"
      },
      "transport": {
        "isEnrolled": true,
        "routeName": "Route 1 - City Express",
        "pickupPoint": "PWD Office Gate",
        "monthlyFare": 1400,
        "months": 11
      },
      "attendanceSummary": {
        "totalDays": 110,
        "presentDays": 104,
        "absentDays": 2,
        "leaveDays": 2,
        "percentage": 94.5
      },
      "feeSummary": {
        "tuitionDue": 50000,
        "otherChargesDue": 0,
        "otherChargesBreakdown": null,
        "transportDue11Months": 15400,
        "parentVisibleDue": 65400,
        "totalDue": 65400,
        "totalPaid": 50000,
        "balance": 15400,
        "status": "Partial",
        "isElderSibling": false,
        "consolidatedFamilyDue": 0,
        "consolidatedFamilyPaid": 0,
        "consolidatedFamilyBalance": 0,
        "familySiblings": []
      }
    },
    {
      "id": "STU-2026-034",
      "admissionNo": "ADM-2026-1034",
      "rollNo": "102",
      "name": "Kashish Agrawal",
      "dob": "2010-10-22",
      "gender": "Female",
      "bloodGroup": "B+",
      "class": "Class 11",
      "section": "Commerce",
      "house": "Titans (Green House)",
      "caste": "General",
      "aadhaarNo": "XXXX-XXXX-8778",
      "branchId": "BR-02",
      "branchName": "Dadheech Memorial Public School (Barheti Campus)",
      "status": "Active",
      "isRteStudent": false,
      "academicSession": "2026-2027",
      "admissionDate": "2026-04-05",
      "parents": {
        "fatherName": "Mr. Mukesh Agrawal",
        "fatherMobile": "+91 98440 07788",
        "fatherOccupation": "Stockbroker & Investor",
        "motherName": "Mrs. Seema Agrawal",
        "motherMobile": "+91 98440 07788",
        "email": "kashish.agrawal@dmps-parent.edu.in",
        "address": "Bank Colony, Aligarh",
        "emergencyContact": "+91 98440 07788"
      },
      "transport": {
        "isEnrolled": true,
        "routeName": "Route 2 - Ramghat Corridor",
        "pickupPoint": "Bank Colony Mode",
        "monthlyFare": 1500,
        "months": 11
      },
      "attendanceSummary": {
        "totalDays": 110,
        "presentDays": 103,
        "absentDays": 3,
        "leaveDays": 0,
        "percentage": 93.6
      },
      "feeSummary": {
        "tuitionDue": 48000,
        "otherChargesDue": 0,
        "otherChargesBreakdown": null,
        "transportDue11Months": 16500,
        "parentVisibleDue": 64500,
        "totalDue": 64500,
        "totalPaid": 24000,
        "balance": 40500,
        "status": "Partial",
        "isElderSibling": false,
        "consolidatedFamilyDue": 0,
        "consolidatedFamilyPaid": 0,
        "consolidatedFamilyBalance": 0,
        "familySiblings": []
      }
    },
    {
      "id": "STU-2026-035",
      "admissionNo": "ADM-2026-1035",
      "rollNo": "101",
      "name": "Siddharth Gautam",
      "dob": "2009-03-19",
      "gender": "Male",
      "bloodGroup": "AB+",
      "class": "Class 12",
      "section": "Science (PCM)",
      "house": "Dragons (Blue House)",
      "caste": "General",
      "aadhaarNo": "XXXX-XXXX-8529",
      "branchId": "BR-03",
      "branchName": "Dadheech Kids School (Vinay Nagar PAC Campus)",
      "status": "Active",
      "isRteStudent": false,
      "academicSession": "2026-2027",
      "admissionDate": "2026-04-05",
      "parents": {
        "fatherName": "Prof. H. K. Gautam",
        "fatherMobile": "+91 98550 08899",
        "fatherOccupation": "University Professor",
        "motherName": "Dr. Saroj Gautam",
        "motherMobile": "+91 98550 08899",
        "email": "siddharth.gautam@dmps-parent.edu.in",
        "address": "University Staff Quarters, Aligarh",
        "emergencyContact": "+91 98550 08899"
      },
      "transport": {
        "isEnrolled": true,
        "routeName": "Route 2 - Ramghat Corridor",
        "pickupPoint": "University Circle",
        "monthlyFare": 1500,
        "months": 11
      },
      "attendanceSummary": {
        "totalDays": 110,
        "presentDays": 102,
        "absentDays": 4,
        "leaveDays": 1,
        "percentage": 92.7
      },
      "feeSummary": {
        "tuitionDue": 55000,
        "otherChargesDue": 0,
        "otherChargesBreakdown": null,
        "transportDue11Months": 16500,
        "parentVisibleDue": 71500,
        "totalDue": 71500,
        "totalPaid": 55000,
        "balance": 16500,
        "status": "Partial",
        "isElderSibling": false,
        "consolidatedFamilyDue": 0,
        "consolidatedFamilyPaid": 0,
        "consolidatedFamilyBalance": 0,
        "familySiblings": []
      }
    },
    {
      "id": "STU-2026-036",
      "admissionNo": "ADM-2026-1036",
      "rollNo": "102",
      "name": "Bhavya Kaushik",
      "dob": "2009-08-11",
      "gender": "Female",
      "bloodGroup": "A+",
      "class": "Class 12",
      "section": "Commerce",
      "house": "Warriors (Yellow House)",
      "caste": "General",
      "aadhaarNo": "XXXX-XXXX-2902",
      "branchId": "BR-01",
      "branchName": "Dadheech Memorial Public School (Main Campus)",
      "status": "Active",
      "isRteStudent": false,
      "academicSession": "2026-2027",
      "admissionDate": "2026-04-05",
      "parents": {
        "fatherName": "Mr. Rakesh Kaushik",
        "fatherMobile": "+91 98660 09900",
        "fatherOccupation": "Tax Consultant",
        "motherName": "Mrs. Meenakshi Kaushik",
        "motherMobile": "+91 98660 09900",
        "email": "bhavya.kaushik@dmps-parent.edu.in",
        "address": "Court Road, Bulandshahr",
        "emergencyContact": "+91 98660 09900"
      },
      "transport": {
        "isEnrolled": true,
        "routeName": "Route 1 - City Express",
        "pickupPoint": "District Court Gate",
        "monthlyFare": 1300,
        "months": 11
      },
      "attendanceSummary": {
        "totalDays": 110,
        "presentDays": 101,
        "absentDays": 0,
        "leaveDays": 2,
        "percentage": 91.8
      },
      "feeSummary": {
        "tuitionDue": 52000,
        "otherChargesDue": 0,
        "otherChargesBreakdown": null,
        "transportDue11Months": 14300,
        "parentVisibleDue": 66300,
        "totalDue": 66300,
        "totalPaid": 35000,
        "balance": 31300,
        "status": "Partial",
        "isElderSibling": false,
        "consolidatedFamilyDue": 0,
        "consolidatedFamilyPaid": 0,
        "consolidatedFamilyBalance": 0,
        "familySiblings": []
      }
    },
    {
      "id": "STU-2026-037",
      "admissionNo": "ADM-2026-1037",
      "rollNo": "103",
      "name": "Sameer Kumar",
      "dob": "2016-12-05",
      "gender": "Male",
      "bloodGroup": "O+",
      "class": "Class 5",
      "section": "A",
      "house": "Titans (Green House)",
      "caste": "General",
      "aadhaarNo": "XXXX-XXXX-8479",
      "branchId": "BR-01",
      "branchName": "Dadheech Memorial Public School (Main Campus)",
      "status": "Active",
      "isRteStudent": true,
      "academicSession": "2026-2027",
      "admissionDate": "2026-04-05",
      "parents": {
        "fatherName": "Mr. Ram Prasad",
        "fatherMobile": "+91 98770 00112",
        "fatherOccupation": "Artisan / Daily Wage Earner",
        "motherName": "Mrs. Shanti Devi",
        "motherMobile": "+91 98770 00112",
        "email": "sameer.kumar@dmps-parent.edu.in",
        "address": "Jargwan Gramin Basti",
        "emergencyContact": "+91 98770 00112"
      },
      "transport": {
        "isEnrolled": false,
        "routeName": "None",
        "pickupPoint": "Self Walking",
        "monthlyFare": 0,
        "months": 11
      },
      "attendanceSummary": {
        "totalDays": 110,
        "presentDays": 100,
        "absentDays": 1,
        "leaveDays": 0,
        "percentage": 90.9
      },
      "feeSummary": {
        "tuitionDue": 0,
        "otherChargesDue": 4500,
        "otherChargesBreakdown": {
          "annualCharges": 2000,
          "smartClassFee": 1500,
          "examFee": 1000
        },
        "transportDue11Months": 0,
        "parentVisibleDue": 0,
        "totalDue": 4500,
        "totalPaid": 4500,
        "balance": 0,
        "status": "Paid",
        "isElderSibling": false,
        "consolidatedFamilyDue": 0,
        "consolidatedFamilyPaid": 0,
        "consolidatedFamilyBalance": 0,
        "familySiblings": []
      }
    }
  ],
  "feeInvoices": [
    {
      "id": "INV-2026-001",
      "invoiceNo": "REC-2026/1001",
      "studentId": "STU-2026-001",
      "studentName": "Aarav Sharma",
      "class": "Class 10",
      "section": "A",
      "fatherName": "Mr. Mukesh Sharma",
      "feeType": "Q1 & Q2 Tuition & Bus Fee",
      "amount": 45000,
      "paidAmount": 45000,
      "dueAmount": 0,
      "paymentDate": "2026-04-10",
      "date": "2026-04-10",
      "paymentMode": "UPI",
      "receiptNo": "RCPT-9001",
      "status": "Paid",
      "cashierRemarks": "Annual first semester fee cleared online via UPI",
      "breakdown": [
        {
          "name": "Tuition Fee Q1 & Q2",
          "amount": 31800
        },
        {
          "name": "Transport Fee (6 Months)",
          "amount": 7200
        },
        {
          "name": "Annual Charges & Lab",
          "amount": 6000
        }
      ]
    },
    {
      "id": "INV-2026-002",
      "invoiceNo": "REC-2026/1002",
      "studentId": "STU-2026-002",
      "studentName": "Ananya Deshmukh",
      "class": "Class 10",
      "section": "A",
      "fatherName": "Dr. Sanjay Deshmukh",
      "feeType": "Q1 Tuition & Bus Advance",
      "amount": 45000,
      "paidAmount": 30000,
      "dueAmount": 15000,
      "paymentDate": "2026-04-12",
      "date": "2026-04-12",
      "paymentMode": "Net Banking",
      "receiptNo": "RCPT-9002",
      "status": "Partial",
      "cashierRemarks": "First installment paid, second installment due by Sep 30",
      "breakdown": [
        {
          "name": "Tuition Fee Q1",
          "amount": 15000
        },
        {
          "name": "Annual Development Fee",
          "amount": 6000
        },
        {
          "name": "Transport Fee Q1",
          "amount": 9000
        }
      ]
    },
    {
      "id": "INV-2026-003",
      "invoiceNo": "REC-2026/1003",
      "studentId": "STU-2026-004",
      "studentName": "Diya Chatterjee",
      "class": "Class 10",
      "section": "B",
      "fatherName": "Mr. Debashish Chatterjee",
      "feeType": "Full Academic Session Fee",
      "amount": 45000,
      "paidAmount": 45000,
      "dueAmount": 0,
      "paymentDate": "2026-04-08",
      "date": "2026-04-08",
      "paymentMode": "Cheque",
      "receiptNo": "RCPT-9003",
      "status": "Paid",
      "cashierRemarks": "HDFC Bank Cheque No. 448921 cleared",
      "breakdown": [
        {
          "name": "Tuition Fee Full Year",
          "amount": 33000
        },
        {
          "name": "Transport Fee",
          "amount": 7200
        },
        {
          "name": "Examination & Smart Class",
          "amount": 4800
        }
      ]
    },
    {
      "id": "INV-2026-004",
      "invoiceNo": "REC-2026/1004",
      "studentId": "STU-2026-006",
      "studentName": "Priya Patel",
      "class": "Class 9",
      "section": "A",
      "fatherName": "Mr. Bhavesh Patel",
      "feeType": "Term 1 Tuition & Computer Fee",
      "amount": 42000,
      "paidAmount": 42000,
      "dueAmount": 0,
      "paymentDate": "2026-04-15",
      "date": "2026-04-15",
      "paymentMode": "Cash",
      "receiptNo": "RCPT-9004",
      "status": "Paid",
      "cashierRemarks": "Received in cash at school fee counter",
      "breakdown": [
        {
          "name": "Tuition Fee Term 1",
          "amount": 32000
        },
        {
          "name": "Computer & AI Lab Fee",
          "amount": 5000
        },
        {
          "name": "Library & Sports Fee",
          "amount": 5000
        }
      ]
    },
    {
      "id": "INV-2026-005",
      "invoiceNo": "REC-2026/1005",
      "studentId": "STU-2026-009",
      "studentName": "Meera Verma",
      "class": "Class 8",
      "section": "A",
      "fatherName": "Mr. Dharmendra Verma",
      "feeType": "Term 1 Complete Fee",
      "amount": 38000,
      "paidAmount": 38000,
      "dueAmount": 0,
      "paymentDate": "2026-04-18",
      "date": "2026-04-18",
      "paymentMode": "UPI",
      "receiptNo": "RCPT-9005",
      "status": "Paid",
      "cashierRemarks": "Google Pay UPI ID verification complete",
      "breakdown": [
        {
          "name": "Tuition Fee",
          "amount": 28000
        },
        {
          "name": "Transport Corridor 2",
          "amount": 6000
        },
        {
          "name": "Activity & Lab",
          "amount": 4000
        }
      ]
    }
  ],
  "frontOffice": {
    "enquiries": [
      {
        "id": "ENQ-2026-101",
        "date": "2026-08-28",
        "parentName": "Dr. Anurag Dixit",
        "mobile": "+91 97110 55443",
        "childName": "Pranav Dixit",
        "classSought": "Class 9",
        "branch": "Main Campus",
        "source": "Online Portal",
        "status": "Converted",
        "counselor": "Mrs. Monika Rawat",
        "remarks": "Parent visited science lab and campus, completed registration form."
      },
      {
        "id": "ENQ-2026-102",
        "date": "2026-08-29",
        "parentName": "Mr. Kamal Kishore",
        "mobile": "+91 97220 66554",
        "childName": "Tanmay Kishore",
        "classSought": "Class 1",
        "branch": "Barheti Campus",
        "source": "Parent Referral",
        "status": "In Followup",
        "counselor": "Mrs. Monika Rawat",
        "remarks": "Transport route confirmed from Ramghat mode. Awaiting birth certificate."
      },
      {
        "id": "ENQ-2026-103",
        "date": "2026-09-01",
        "parentName": "Mrs. Sunaina Singhal",
        "mobile": "+91 97330 77665",
        "childName": "Reva Singhal",
        "classSought": "Nursery",
        "branch": "Vinay Nagar PAC Campus",
        "source": "Walk-in Banner",
        "status": "Admitted",
        "counselor": "Mrs. Pooja Rajput",
        "remarks": "Admission completed. Welcome kit & books kit handed over."
      },
      {
        "id": "ENQ-2026-104",
        "date": "2026-09-05",
        "parentName": "Mr. Rakesh Sharma",
        "mobile": "+91 97440 88776",
        "childName": "Devansh Sharma",
        "classSought": "Class 11 (PCM)",
        "branch": "Main Campus",
        "source": "Newspaper Advertisement",
        "status": "Scheduled Entrance Test",
        "counselor": "Dr. Rajesh Sharma",
        "remarks": "Aptitude test scheduled for Saturday 10:00 AM."
      }
    ],
    "visitors": [
      {
        "id": "VIS-2026-201",
        "date": "2026-09-10",
        "name": "Mr. Arun Bansal",
        "phone": "+91 98112 00112",
        "personToMeet": "Shri Pramod Kumar Rajput",
        "purpose": "Solar Rooftop Project Inspection",
        "checkIn": "10:30 AM",
        "checkOut": "11:45 AM",
        "badgeNo": "VIS-01"
      },
      {
        "id": "VIS-2026-202",
        "date": "2026-09-10",
        "name": "Dr. Preeti Deshmukh",
        "phone": "+91 98220 02233",
        "personToMeet": "Mrs. Kavita Rani (Principal)",
        "purpose": "Student Health & Dental Camp Discussion",
        "checkIn": "11:15 AM",
        "checkOut": "12:00 PM",
        "badgeNo": "VIS-02"
      },
      {
        "id": "VIS-2026-203",
        "date": "2026-09-11",
        "name": "Mr. Sanjay Mittal",
        "phone": "+91 98330 44556",
        "personToMeet": "Mr. Suresh Chand (Accounts)",
        "purpose": "CBSE Textbook Supply Vendor Invoice",
        "checkIn": "02:00 PM",
        "checkOut": "02:40 PM",
        "badgeNo": "VIS-03"
      }
    ],
    "callLogs": [
      {
        "id": "CALL-2026-301",
        "date": "2026-09-10",
        "callerName": "Mrs. Rekha Varma",
        "phone": "+91 98550 05566",
        "type": "Incoming",
        "purpose": "Bus Route 2 timing inquiry during rainy season",
        "duration": "3 mins",
        "handledBy": "Mrs. Monika Rawat"
      },
      {
        "id": "CALL-2026-302",
        "date": "2026-09-11",
        "callerName": "CBSE Regional Office Helpdesk",
        "phone": "011-22509256",
        "type": "Incoming",
        "purpose": "Confirmation of Board Exam Center Superintendent List",
        "duration": "5 mins",
        "handledBy": "Dr. Rajesh Sharma"
      }
    ]
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
    "categories": [
      "Science Laboratory",
      "Information Technology",
      "Sports & Athletics",
      "Printing & Stationery",
      "Classroom Furniture",
      "Safety & First Aid"
    ],
    "items": [
      {
        "id": "INV-ITEM-01",
        "name": "Compound Biological Microscopes (1000x)",
        "category": "Science Laboratory",
        "stockQty": 18,
        "reorderLevel": 5,
        "unitPrice": 4200,
        "location": "Physics & Bio Lab (Almirah 2)",
        "supplier": "Modern Lab Instruments, Delhi"
      },
      {
        "id": "INV-ITEM-02",
        "name": "Desktop Computer Systems (Intel Core i5, 16GB)",
        "category": "Information Technology",
        "stockQty": 42,
        "reorderLevel": 8,
        "unitPrice": 32000,
        "location": "Computer Lab 1 & 2",
        "supplier": "TechZone Infotech, Aligarh"
      },
      {
        "id": "INV-ITEM-03",
        "name": "Nivia Leather Footballs (Size 5)",
        "category": "Sports & Athletics",
        "stockQty": 25,
        "reorderLevel": 10,
        "unitPrice": 850,
        "location": "Sports Room Rack A",
        "supplier": "Standard Sports Agency, Meerut"
      },
      {
        "id": "INV-ITEM-04",
        "name": "CBSE Student Progress Report Dossiers",
        "category": "Printing & Stationery",
        "stockQty": 850,
        "reorderLevel": 200,
        "unitPrice": 45,
        "location": "Stationery Store GF-04",
        "supplier": "Rajdhani Offset Printers, Bulandshahr"
      },
      {
        "id": "INV-ITEM-05",
        "name": "Dual Student Ergonomic Desk Benches",
        "category": "Classroom Furniture",
        "stockQty": 180,
        "reorderLevel": 30,
        "unitPrice": 2800,
        "location": "Classes 1 to 10",
        "supplier": "Classic Wooden Crafts, Jargwan"
      },
      {
        "id": "INV-ITEM-06",
        "name": "Interactive Smart Board Touch Displays (75 inch)",
        "category": "Information Technology",
        "stockQty": 12,
        "reorderLevel": 3,
        "unitPrice": 85000,
        "location": "Smart Classrooms",
        "supplier": "Edutech Solutions India"
      }
    ]
  },
  "library": {
    "books": [
      {
        "id": "BK-1001",
        "title": "Concepts of Physics (Vol 1 & 2)",
        "author": "Dr. H. C. Verma",
        "category": "Physics Reference",
        "isbn": "978-8177091878",
        "totalCopies": 20,
        "availableCopies": 16,
        "shelf": "Rack P-01"
      },
      {
        "id": "BK-1002",
        "title": "Mathematics for Class 10 (CBSE Exemplar)",
        "author": "Dr. R. D. Sharma",
        "category": "Mathematics",
        "isbn": "978-9383182817",
        "totalCopies": 25,
        "availableCopies": 21,
        "shelf": "Rack M-02"
      },
      {
        "id": "BK-1003",
        "title": "NCERT Complete Science & Technology (Classes 6-10)",
        "author": "NCERT Board Editorial",
        "category": "General Science",
        "isbn": "978-8174507000",
        "totalCopies": 50,
        "availableCopies": 44,
        "shelf": "Rack S-03"
      },
      {
        "id": "BK-1004",
        "title": "Wings of Fire (An Autobiography)",
        "author": "Dr. A. P. J. Abdul Kalam",
        "category": "Inspirational Biography",
        "isbn": "978-8173711466",
        "totalCopies": 15,
        "availableCopies": 12,
        "shelf": "Rack B-01"
      },
      {
        "id": "BK-1005",
        "title": "Oxford Advanced Learner's Dictionary (10th Edition)",
        "author": "Oxford University Press",
        "category": "English Reference",
        "isbn": "978-0194798488",
        "totalCopies": 18,
        "availableCopies": 15,
        "shelf": "Rack E-01"
      }
    ],
    "issuedBooks": [
      {
        "id": "ISS-01",
        "studentName": "Aarav Sharma",
        "class": "Class 10-A",
        "bookTitle": "Concepts of Physics (Vol 1)",
        "issueDate": "2026-09-02",
        "dueDate": "2026-09-16",
        "status": "Issued"
      },
      {
        "id": "ISS-02",
        "studentName": "Ananya Deshmukh",
        "class": "Class 10-A",
        "bookTitle": "Wings of Fire",
        "issueDate": "2026-09-04",
        "dueDate": "2026-09-18",
        "status": "Issued"
      }
    ]
  },
  "hostel": {
    "buildings": [
      {
        "id": "HST-01",
        "name": "Aryabhatta Senior Boys Hostel",
        "warden": "Mr. Sukhdev Singh",
        "totalRooms": 24,
        "capacity": 72,
        "currentOccupancy": 48,
        "address": "East Campus Residential Wing"
      },
      {
        "id": "HST-02",
        "name": "Gargi Senior Girls Hostel",
        "warden": "Mrs. Anju Kapoor",
        "totalRooms": 20,
        "capacity": 60,
        "currentOccupancy": 36,
        "address": "West Campus Residential Wing"
      }
    ],
    "rooms": [
      {
        "id": "RM-101",
        "building": "Aryabhatta Senior Boys Hostel",
        "roomNo": "B-101",
        "floor": "Ground Floor",
        "type": "3-Bedded AC",
        "capacity": 3,
        "occupied": 3,
        "students": [
          "Aarav Sharma",
          "Rohan Varma",
          "Kabir Khan"
        ]
      },
      {
        "id": "RM-102",
        "building": "Aryabhatta Senior Boys Hostel",
        "roomNo": "B-102",
        "floor": "Ground Floor",
        "type": "3-Bedded AC",
        "capacity": 3,
        "occupied": 2,
        "students": [
          "Ishaan Gupta",
          "Advait Joshi"
        ]
      },
      {
        "id": "RM-201",
        "building": "Gargi Senior Girls Hostel",
        "roomNo": "G-101",
        "floor": "First Floor",
        "type": "3-Bedded AC",
        "capacity": 3,
        "occupied": 3,
        "students": [
          "Ananya Deshmukh",
          "Diya Chatterjee",
          "Priya Patel"
        ]
      }
    ]
  },
  "homework": [
    {
      "id": "HW-2026-01",
      "title": "Quadratic Equations Applications in Real Life",
      "subject": "Mathematics",
      "class": "Class 10",
      "section": "A",
      "teacher": "Mrs. Sunita Verma",
      "assignedDate": "2026-09-10",
      "dueDate": "2026-09-14",
      "description": "Solve Exercise 4.3 and 4.4 from NCERT textbook and plot graph parabolic curves in homework notebook."
    },
    {
      "id": "HW-2026-02",
      "title": "Ray Optics: Spherical Mirrors & Lens Ray Diagrams",
      "subject": "Science (Physics)",
      "class": "Class 10",
      "section": "A",
      "teacher": "Dr. Rajesh Sharma",
      "assignedDate": "2026-09-11",
      "dueDate": "2026-09-15",
      "description": "Draw 6 concave mirror ray diagrams with exact scale and focal lengths in practical record book."
    },
    {
      "id": "HW-2026-03",
      "title": "Chemical Reactions & Equations Balancing Exercise",
      "subject": "Science (Chemistry)",
      "class": "Class 9",
      "section": "A",
      "teacher": "Mr. Amitabh Sen",
      "assignedDate": "2026-09-11",
      "dueDate": "2026-09-16",
      "description": "Balance the 20 given redox and displacement chemical equations given in classroom worksheet."
    },
    {
      "id": "HW-2026-04",
      "title": "English Formal Letter Writing (Editorial Letter on Road Safety)",
      "subject": "English Literature & Grammar",
      "class": "Class 8",
      "section": "A",
      "teacher": "Mrs. Ritu Jain",
      "assignedDate": "2026-09-12",
      "dueDate": "2026-09-16",
      "description": "Draft a 150-word letter to the Editor of National Daily regarding traffic safety near school crossings."
    }
  ],
  "notices": [
    {
      "id": "NOT-2026-01",
      "title": "Half Yearly Comprehensive Examinations 2026-27 Date Sheet Published",
      "target": "All Students, Faculty & Parents",
      "category": "Academic Examination",
      "publishDate": "2026-09-08",
      "isEmergency": false,
      "content": "The date sheet for CBSE pattern Half Yearly Examinations for Classes 1 to 12 has been officially published. Examinations will commence from 22nd September 2026. Admit cards will be issued from the fee counter upon clearing term dues."
    },
    {
      "id": "NOT-2026-02",
      "title": "Parent-Teacher Interactive Meeting (PTM) for Term 1 Progress Review",
      "target": "All Parents & Guardians",
      "category": "Parent Meeting",
      "publishDate": "2026-09-05",
      "isEmergency": false,
      "content": "Parent-Teacher Meeting (PTM) is scheduled for Saturday from 08:30 AM to 12:30 PM. Parents are warmly invited to interact with respective Class Teachers and Subject Incharges regarding student holistic dossier progress."
    },
    {
      "id": "NOT-2026-03",
      "title": "Annual Science, Robotics & Innovation Exhibition 2026 Announced",
      "target": "Classes 5th to 12th",
      "category": "School Events",
      "publishDate": "2026-09-02",
      "isEmergency": false,
      "content": "Dadheech Memorial Public School invites working scientific models and AI projects for the Annual Inter-School Science & Tech Expo. Contact Dr. Rajesh Sharma (HOD Science) for project registration."
    },
    {
      "id": "NOT-2026-04",
      "title": "Safe Transport & GPS Route Navigation Operational Notice",
      "target": "Transport Enrolled Parents",
      "category": "Transport & Safety",
      "publishDate": "2026-08-28",
      "isEmergency": false,
      "content": "All school buses and vans have been fitted with AIS-140 GPS trackers and CCTV cameras. Parents can monitor bus arrival via live route notifications."
    }
  ],
  "leaves": [
    {
      "id": "LEV-2026-01",
      "employeeName": "Mrs. Deepa Tyagi",
      "designation": "Primary Teacher (PRT)",
      "department": "Primary & Pre-Primary Wing",
      "leaveType": "Casual Leave",
      "fromDate": "2026-09-15",
      "toDate": "2026-09-16",
      "days": 2,
      "reason": "Attending CTET National Academic Workshop",
      "status": "Approved",
      "appliedOn": "2026-09-10"
    },
    {
      "id": "LEV-2026-02",
      "employeeName": "Mr. Amit Kumar",
      "designation": "TGT Computer Science",
      "department": "Science & Technology",
      "leaveType": "Medical Leave",
      "fromDate": "2026-09-18",
      "toDate": "2026-09-19",
      "days": 2,
      "reason": "Dental Root Canal Treatment",
      "status": "Approved",
      "appliedOn": "2026-09-11"
    }
  ]
};
