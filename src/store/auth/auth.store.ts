import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { AuthData } from "./auth.types";

const { persistAtom } = recoilPersist({
  key: "auth",
});

const authAtom = atom<AuthData>({
  key: "auth-user",
  default: {
    status: false,
    message: "",
    data: {
      id: 0,
      name: "",
      email: "",
      email_verified_at: "",
      created_at: "",
      updated_at: "",
      token: "",
    },
    pagination: "",
    error: "",
  },
  effects_UNSTABLE: [persistAtom],
});

export { authAtom };
