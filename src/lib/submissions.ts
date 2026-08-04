import { addDoc, collection, getDocs, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase';

export interface SubmissionPayload {
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
  gender?: string;
  position?: string;
  amount?: number;
  tierId?: string;
  paymentMethod?: string;
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

  if (!db) {
    const stored = readLocalSubmissions();
    stored.unshift(payload);
    writeLocalSubmissions(stored);
    return false;
  }

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
  if (!db) {
    return readLocalSubmissions();
  }

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

export const subscribeToSubmissions = (callback: (submissions: SubmissionPayload[]) => void) => {
  if (!db) {
    callback(readLocalSubmissions());
    return () => undefined;
  }

  const q = query(collection(db, 'submissions'), orderBy('createdAt', 'desc'));

  const unsubscribe = onSnapshot(
    q,
    (snapshot) => {
      const fromFirestore = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      callback(fromFirestore.length > 0 ? fromFirestore : readLocalSubmissions());
    },
    (error) => {
      console.error('Failed to subscribe to submissions from Firestore', error);
      callback(readLocalSubmissions());
    }
  );

  return unsubscribe;
};
