import express from 'express';
import serverless from 'serverless-http';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();
app.use(cors({ origin: '*' }));
app.use(express.json());

const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://prashant732009_db_user:OoCajfq3RNetW0ko@cluster0.1gpymc7.mongodb.net/dmps_school_erp?retryWrites=true&w=majority&appName=Cluster0";

// Connect to MongoDB Atlas
let isConnected = false;
const connectToDB = async () => {
  if (isConnected) return;
  try {
    const db = await mongoose.connect(MONGODB_URI);
    isConnected = db.connections[0].readyState === 1;
    console.log("✅ Serverless connected to MongoDB Atlas");
  } catch (err) {
    console.error("MongoDB Atlas connection error:", err);
  }
};

// Schemas
const branchSchema = new mongoose.Schema({
  id: String,
  name: String,
  code: String,
  shortCode: String,
  address: String,
  phone: String,
  headName: String,
  classesOffered: String,
  totalStudents: Number,
  totalStaff: Number,
  status: String,
  isMain: Boolean
}, { timestamps: true });

const studentSchema = new mongoose.Schema({
  id: String,
  admissionNo: String,
  rollNo: String,
  name: String,
  dob: String,
  gender: String,
  bloodGroup: String,
  class: String,
  section: String,
  house: String,
  category: String,
  aadhaarNo: String,
  photo: String,
  branchId: String,
  status: String,
  parents: Object,
  siblings: Array,
  attendanceSummary: Object,
  feeSummary: Object
}, { timestamps: true });

const feeTransactionSchema = new mongoose.Schema({
  invoiceNo: String,
  customReceiptNo: String,
  studentId: String,
  studentName: String,
  class: String,
  section: String,
  fatherName: String,
  amount: Number,
  feeType: String,
  paymentMode: String,
  date: String,
  status: String,
  cashierRemarks: String,
  breakdown: Array
}, { timestamps: true });

const Branch = mongoose.models.Branch || mongoose.model('Branch', branchSchema);
const Student = mongoose.models.Student || mongoose.model('Student', studentSchema);
const FeeTransaction = mongoose.models.FeeTransaction || mongoose.model('FeeTransaction', feeTransactionSchema);

// Middleware to ensure DB connection
app.use(async (req, res, next) => {
  await connectToDB();
  next();
});

// API Routes
app.get('/api/health', (req, res) => {
  res.json({ status: "OK", server: "DMPS Cloud Serverless Backend", db: isConnected ? "Connected" : "Disconnected" });
});

// Branches
app.get('/api/branches', async (req, res) => {
  try {
    const branches = await Branch.find({});
    res.json({ success: true, data: branches });
  } catch (e) {
    res.status(500).json({ success: false, error: e.message });
  }
});

app.post('/api/branches', async (req, res) => {
  try {
    const branch = await Branch.create(req.body);
    res.status(201).json({ success: true, data: branch });
  } catch (e) {
    res.status(500).json({ success: false, error: e.message });
  }
});

// Students
app.get('/api/students', async (req, res) => {
  try {
    const students = await Student.find({});
    res.json({ success: true, data: students });
  } catch (e) {
    res.status(500).json({ success: false, error: e.message });
  }
});

app.post('/api/students', async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.status(201).json({ success: true, data: student });
  } catch (e) {
    res.status(500).json({ success: false, error: e.message });
  }
});

app.put('/api/students/:id', async (req, res) => {
  try {
    const student = await Student.findOneAndUpdate({ id: req.params.id }, req.body, { new: true });
    res.json({ success: true, data: student });
  } catch (e) {
    res.status(500).json({ success: false, error: e.message });
  }
});

// Fees
app.get('/api/fees/transactions', async (req, res) => {
  try {
    const transactions = await FeeTransaction.find({});
    res.json({ success: true, data: transactions });
  } catch (e) {
    res.status(500).json({ success: false, error: e.message });
  }
});

app.post('/api/fees/collect', async (req, res) => {
  try {
    const receipt = await FeeTransaction.create({
      invoiceNo: `REC-${Date.now()}`,
      date: new Date().toISOString().split('T')[0],
      ...req.body
    });
    res.status(201).json({ success: true, data: receipt });
  } catch (e) {
    res.status(500).json({ success: false, error: e.message });
  }
});

export const handler = serverless(app);
