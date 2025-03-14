import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../hooks/redux";
import axiosInstance from "../../utils/axios";
import { useForm } from "react-hook-form";
import styles from "./Account.module.css";
import { FaUserEdit, FaRegSave } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { setDataAccount } from "../../store/reducers/accountSlice";
import { useDispatch } from "react-redux";
import { updateAccountSchema } from "../../validators/accountSchema";
import { zodResolver } from "@hookform/resolvers/zod";

const Account: React.FC = () => {
  const dispatch = useDispatch();
  const { user } = useAppSelector((state) => state.auth);
  const { email, username, password, profilePicture } = useAppSelector((state) => state.account.dataAccount);
  // si store pas initialisé alors on prend les valeurs de user
  if (!email) {
    dispatch(setDataAccount(user));
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(updateAccountSchema),
    defaultValues: {
      email: email,
      username: username,
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
      const ret = { email: res.data.email, username: res.data.username, password: "", profilePicture };
      dispatch(setDataAccount(ret));
      setIsEditing({ email: false, password: false, username: false });
    } catch (error) {
      console.error("Failed to update profile:", error);
    }
  };

  const handleImageChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      // Envoyer l'image au backend et mettre à jour la base de données
      await handleUpload(file);
    }
  };

  const handleUpload = async (file: File) => {
    const formData = new FormData();
    formData.append("profilePicture", file);
    try {
      const response = await axiosInstance.patch(`/users/${user?.id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      // Mettre à jour l'image avec l'URL renvoyée par le backend

      const ret = {
        email,
        username,
        password,
        profilePicture: import.meta.env.VITE_API_URL + response.data.profilePicture,
      };

      dispatch(setDataAccount(ret));
    } catch (error) {
      console.error("Erreur lors de l'upload :", error);
    }
  };

  useEffect(() => {}, [handleUpload]);

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
        <div className={styles.imageContainer} onClick={() => document.getElementById("fileInput")?.click()}>
          <img className={styles.round} src={profilePicture} alt="user" />
          <input type="file" id="fileInput" style={{ display: "none" }} accept="image/*" onChange={handleImageChange} />
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.field}>
            <label>Email:</label>
            {isEditing.email ? <input type="email" {...register("email")} /> : <span>{email}</span>}
            {isEditing.email ? (
              <FaRegSave className={styles.icon} onClick={handleSubmit(onSubmit)} />
            ) : (
              <FaUserEdit className={styles.icon} onClick={() => handleEditClick("email")} />
            )}
          </div>

          <div className={styles.field}>
            <label>Username:</label>
            {isEditing.username ? <input type="text" {...register("username")} /> : <span>{username}</span>}
            {isEditing.username ? (
              <FaRegSave className={styles.icon} onClick={handleSubmit(onSubmit)} />
            ) : (
              <FaUserEdit className={styles.icon} onClick={() => handleEditClick("username")} />
            )}
          </div>

          <div className={styles.field}>
            <label>Password:</label>
            <div className={styles.password}>
              {isEditing.password ? <input type="password" {...register("password")} /> : <span>••••••••</span>}
            </div>
            {isEditing.password ? (
              <FaRegSave className={styles.icon} onClick={handleSubmit(onSubmit)} />
            ) : (
              <FaUserEdit className={styles.icon} onClick={() => handleEditClick("password")} />
            )}
          </div>
          {errors.password && <p className={styles.error}>{errors.password.message}</p>}
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
