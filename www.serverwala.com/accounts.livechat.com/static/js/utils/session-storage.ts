const supportsSessionStorage = (): boolean => {
  try {
    return !!window.sessionStorage;
  } catch (e) {
    return false;
  }
};

export const getItem = (name: string): string | null => {
  if (!supportsSessionStorage()) {
    return null;
  }

  try {
    const value = window.sessionStorage.getItem(name);

    try {
      return JSON.parse(value);
    } catch (e) {
      return value;
    }
  } catch (e) {
    return null;
  }
};

export const saveItem = (name: string, value: any): string | boolean => {
  if (!supportsSessionStorage()) {
    return false;
  }

  const toSave = typeof value !== 'string' ? JSON.stringify(value) : value;

  try {
    window.sessionStorage.setItem(name, toSave);
    return true;
  } catch (e) {
    return false;
  }
};

export const removeItem = (name: string): string | boolean => {
  if (!supportsSessionStorage()) {
    return false;
  }

  try {
    window.sessionStorage.removeItem(name);
    return true;
  } catch (e) {
    return false;
  }
};
