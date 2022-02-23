import { ref } from "vue";

import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";

const error = ref(null);
const isLoading = ref(false);

const signup = async (email, password) => {
  error.value = null;
  isLoading.value = true;

  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    if (!res) {
      throw new Error("Could not complete signup");
    }

    error.value = null;
  } catch (err) {
    console.log(err);
    error.value = err.message;
  } finally {
    isLoading.value = false;
  }
};

const useSignup = () => {
  return { error, isLoading, signup };
};

export default useSignup;
