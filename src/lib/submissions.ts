import { addDoc, collection, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase';

interface SubmissionPayload {
  id?: string;
  type: string;
  fullName: string;
  email?: string;
  phone?: string;
  parentName?: string;
  category?: string;
  location?: string;
  reason?: string;
  subject?: string;
  message?: string;
  notes?: string;
  createdAt?: string;
}

const readLocalSubmissions = () => {
  if (typeof window === 'undefined') return [];

  const existing = window.localStorage.getItem('kakuma-form-submissions');
  if (!existing) return [];

  try {
    return JSON.parse(existing);
  } catch {
    return [];
  }
};

const writeLocalSubmissions = (submissions: SubmissionPayload[]) => {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem('kakuma-form-submissions', JSON.stringify(submissions));
  }
};

export const saveSubmission = async (submission: SubmissionPayload) => {
  const payload = {
    ...submission,
    createdAt: submission.createdAt || new Date().toLocaleString(),
  };

  try {
    await addDoc(collection(db, 'submissions'), payload);
    return true;
  } catch (error) {
    console.error('Failed to save submission to Firestore', error);

    const stored = readLocalSubmissions();
    stored.unshift(payload);
    writeLocalSubmissions(stored);
    return false;
  }
};

export const loadSubmissions = async () => {
  try {
    const q = query(collection(db, 'submissions'), orderBy('createdAt', 'desc'));
    const snapshot = await getDocs(q);
    const fromFirestore = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

    if (fromFirestore.length > 0) {
      return fromFirestore;
    }
  } catch (error) {
    console.error('Failed to load submissions from Firestore', error);
  }

  return readLocalSubmissions();
};
