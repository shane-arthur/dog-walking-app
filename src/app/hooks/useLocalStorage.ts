import { useState } from "react";

const useLocalStorage = (key: string, defaultValue?: string) => {
    const [localStorageValue, setLocalStorageValue] = useState(() => {
        try {
            if (!window) return
            const value = localStorage.getItem(key)

            if (value) {
                return JSON.parse(value)
            } else {
                localStorage.setItem(key, JSON.stringify(defaultValue));
                return defaultValue
            }
        } catch (error) {
            if (!window) return
            localStorage.setItem(key, JSON.stringify(defaultValue));
            return defaultValue
        }
    })

    const setLocalStorageStateValue = (valueOrFn: string | ((val: string) => null)) => {
        let newValue;
        if (typeof valueOrFn === 'function') {
            const fn = valueOrFn;
            newValue = fn(localStorageValue)
        }
        else {
            newValue = valueOrFn;
        }
        localStorage.setItem(key, JSON.stringify(newValue));
        setLocalStorageValue(newValue)
    }
    return [localStorageValue, setLocalStorageStateValue]
}

export default useLocalStorage;