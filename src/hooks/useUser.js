import {createContext, useContext, useEffect, useState} from 'react';
import {StorageEnum} from '../enums';
import Storage from '../utils/Storage';
import {Alert} from 'react-native';

export const AuthContext = createContext();

export function AuthProvider({children}) {
  const [likes, setLikes] = useState([]);

  async function addLike(id) {
    if (likes.includes(id)) {
      const aux = likes.filter(i => i !== id);
      await Storage.setItem(StorageEnum.LIKES, aux);
      setLikes(aux);
    } else {
      await Storage.setItem(StorageEnum.LIKES, [...likes, id]);
      setLikes([...likes, id]);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const storageUser = await Storage.getItem(StorageEnum.LIKES);
    setLikes(storageUser || []);
  }

  return (
    <AuthContext.Provider
      value={{
        addLike,
        likes,
      }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useUser() {
  const context = useContext(AuthContext);

  return context;
}
