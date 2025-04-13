import AsyncStorage from "@react-native-async-storage/async-storage"

export default {
    async setItem(key, value) {
        value = JSON.stringify(value)
        AsyncStorage.setItem(key, value)
    },
    async getItem(key) {
        const item = await AsyncStorage.getItem(key)
        return JSON.parse(item)
    },
    async removeItem(key) {
        await AsyncStorage.removeItem(key)
    }
}