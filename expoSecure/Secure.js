import * as SecureStore from 'expo-secure-store';

export function save(key, value) {
      SecureStore.setItem(key, value);
  }
  
export function getValueFor(key) {
    let result = SecureStore.getItem(key);
    return result
  }