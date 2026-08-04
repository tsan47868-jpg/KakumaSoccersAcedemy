import { signInWithEmailAndPassword, signOut, onAuthStateChanged, type User, type AuthError } from 'firebase/auth';
import { auth } from '../firebase';

export const signInAdmin = async (email: string, password: string) => {
  const normalizedEmail = email.trim();

  if (!auth) {
    return {
      ok: false,
      error: 'Firebase is not initialized. Check your VITE_FIREBASE_* environment variables.',
    };
  }

  try {
    await signInWithEmailAndPassword(auth, normalizedEmail, password);
    return { ok: true };
  } catch (error) {
    const code = (error as AuthError)?.code || '';
    let message = 'Incorrect admin email or password.';

    if (code.includes('user-not-found') || code.includes('wrong-password') || code.includes('invalid-credential')) {
      message = 'Incorrect admin email or password.';
    } else if (code.includes('network') || code.includes('timeout') || code.includes('unavailable')) {
      message = 'Unable to reach Firebase. Check your internet connection.';
    } else if (code.includes('too-many-requests')) {
      message = 'Too many failed attempts. Please try again later.';
    } else if (code.includes('invalid-email')) {
      message = 'Please enter a valid email address.';
    }

    console.error('Admin sign-in failed', error);
    return { ok: false, error: message };
  }
};

export const onAdminAuthStateChanged = (callback: (user: User | null) => void) => {
  if (!auth) {
    callback(null);
    return () => undefined;
  }

  return onAuthStateChanged(auth, callback);
};

export const signOutAdmin = async () => {
  if (!auth) return;

  try {
    await signOut(auth);
  } catch (error) {
    console.error('Admin sign-out failed', error);
  }
};
