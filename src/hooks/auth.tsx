import React, {
  createContext,
  useContext,
  useCallback,
  useState,
  useEffect,
} from 'react';
import { useMemo } from 'react';
import { auth, firebase } from '../services/firebase';

interface IUserState {
  id: string;
  name: string;
  avatar: string;
}

interface IAuthContext {
  signIn: () => Promise<void>;
  user: IUserState | undefined;
}

const AuthContext = createContext({} as IAuthContext);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<IUserState>();

  useEffect(() => {
    auth.onAuthStateChanged(userInFirebase => {
      if (userInFirebase) {
        const { uid, displayName, photoURL } = userInFirebase;

        if (!displayName || !photoURL) {
          throw new Error('Missing information from Googla Account.');
        }

        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL,
        });
      }
    });
  }, []);

  const signIn = useCallback(async () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    const result = await auth.signInWithPopup(provider);

    if (result.user) {
      const { uid, displayName, photoURL } = result.user;

      if (!displayName || !photoURL) {
        throw new Error('Missing information from Googla Account.');
      }

      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL,
      });
    }
  }, []);

  const authMemo = useMemo(() => ({ signIn, user }), [signIn, user]);

  return (
    <AuthContext.Provider value={authMemo}>{children}</AuthContext.Provider>
  );
};

export function useAuth(): IAuthContext {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
