import { collection, doc, getDocs, setDoc } from 'firebase/firestore';
import { db } from '../firebase';

const DEFAULT_ADMIN = {
  email: 'admin@kakuma.org',
  password: 'kakuma2026',
};

export const verifyAdminCredentials = async (email: string, password: string) => {
  const normalizedEmail = email.trim().toLowerCase();

  try {
    const snapshot = await getDocs(collection(db, 'admins'));
    const admins = snapshot.docs.map((docItem) => ({ id: docItem.id, ...(docItem.data() as Record<string, unknown>) }));

    const matchedAdmin = admins.find((admin) => {
      const adminEmail = String(admin.email || '').trim().toLowerCase();
      const role = String((admin.role as string | undefined) || '').trim().toLowerCase();
      const passwordMatches = String(admin.password || '') === password;

      if (adminEmail !== normalizedEmail || !passwordMatches) {
        return false;
      }

      return role === 'admin' || role === '';
    });

    if (matchedAdmin) {
      return true;
    }

    if (normalizedEmail === DEFAULT_ADMIN.email && password === DEFAULT_ADMIN.password) {
      await setDoc(doc(db, 'admins', 'default-admin'), {
        email: normalizedEmail,
        password,
        role: 'admin',
        createdAt: new Date().toISOString(),
      });
      return true;
    }

    return false;
  } catch (error) {
    console.error('Failed to verify admin credentials from Firebase', error);
    return normalizedEmail === DEFAULT_ADMIN.email && password === DEFAULT_ADMIN.password;
  }
};
