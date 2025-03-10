import React, { useState } from "react";
import { useAppSelector } from "../../hooks/redux";
import axiosInstance from "../../utils/axios";
import { useForm } from "react-hook-form";
import styles from "./Account.module.css";
import { FaUserEdit, FaRegSave } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { setDataAccount } from "../../store/reducers/accountSlice";
import { useDispatch } from "react-redux";

const Account: React.FC = () => {
  const dispatch = useDispatch();
  const { user } = useAppSelector((state) => state.auth);
  const dataAccount = useAppSelector((state) => state.account.dataAccount);
  // si store pas initialisé alors on prend les valeurs de user
  if (!dataAccount.email) {
    dispatch(setDataAccount(user));
  }
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: dataAccount.email,
      username: dataAccount.username,
      password: "",
    },
  });

  const [isEditing, setIsEditing] = useState({
    email: false,
    password: false,
    username: false,
  });

  const navigate = useNavigate();

  const handleEditClick = (field: string) => {
    setIsEditing((prev) => ({ ...prev, [field]: true }));
  };

  const onSubmit = async (data: { email: string; username: string; password: string }) => {
    try {
      const updatedData = {
        email: data.email,
        username: data.username,
        password: data.password,
      };
      const res = await axiosInstance.patch(`/users/${user?.id}`, updatedData);
      const ret = { email: res.data.email, username: res.data.username, password: "" };
      dispatch(setDataAccount(ret));
      setIsEditing({ email: false, password: false, username: false });
    } catch (error) {
      console.error("Failed to update profile:", error);
    }
  };

  return (
    <div className={styles.profile_page}>
      <div className={styles.card_container}>
        <svg
          onClick={() => {
            navigate("/");
          }}
          className={styles.back}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512">
          <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
        </svg>
        <img
          className={styles.round}
          src="https://fastly.picsum.photos/id/593/200/200.jpg?hmac=E26lTUTkzs_AeuWXrkT-kFTudfYDTVCjgKVE_HDzRmk"
          alt="user"
        />

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.field}>
            <label>Email:</label>
            {isEditing.email ? <input type="email" {...register("email")} /> : <span>{dataAccount.email}</span>}
            {isEditing.email ? (
              <FaRegSave className={styles.icon} onClick={handleSubmit(onSubmit)} />
            ) : (
              <FaUserEdit className={styles.icon} onClick={() => handleEditClick("email")} />
            )}
          </div>

          <div className={styles.field}>
            <label>Username:</label>
            {isEditing.username ? <input type="text" {...register("username")} /> : <span>{dataAccount.username}</span>}
            {isEditing.username ? (
              <FaRegSave className={styles.icon} onClick={handleSubmit(onSubmit)} />
            ) : (
              <FaUserEdit className={styles.icon} onClick={() => handleEditClick("username")} />
            )}
          </div>

          <div className={styles.field}>
            <label>Password:</label>
            {isEditing.password ? <input type="password" {...register("password")} /> : <span>••••••••</span>}
            {isEditing.password ? (
              <FaRegSave className={styles.icon} onClick={handleSubmit(onSubmit)} />
            ) : (
              <FaUserEdit className={styles.icon} onClick={() => handleEditClick("password")} />
            )}
          </div>
        </form>

        <div className={styles.prefer}>
          <h6>Prefer Themes</h6>
          <ul>
            <li>Games</li>
            <li>Development</li>
            <li>Gym</li>
            <li>English</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Account;
