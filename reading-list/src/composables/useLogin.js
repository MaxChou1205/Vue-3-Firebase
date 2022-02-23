import { ref } from "vue";

import { auth } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";

const error = ref(null);
const isLoading = ref(false);

const login = async (email, password) => {
  error.value = null;
  isLoading.value = true;

  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    if (!res) {
      throw new Error("Could not complete login");
    }

    error.value = null;
  } catch (err) {
    console.log(err);
    error.value = err.message;
  } finally {
    isLoading.value = false;
  }
};

const useLogin = () => {
  return { error, isLoading, login };
};

export default useLogin;
