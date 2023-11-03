import axiosInstance from "@/lib/common/axios";

export const registerUserApi = async ({
  username,
  email,
  password,
}: {
  username: string;
  email: string;
  password: string;
}) => {
  return axiosInstance.post("/auth/register", {
    username,
    email,
    password,
  });
};

export const loginUserApi = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  return axiosInstance.post("/auth/login", {
    email,
    password,
  });
};
