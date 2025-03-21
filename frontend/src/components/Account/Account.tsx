import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import axiosInstance from "../../utils/axios";
import { useForm } from "react-hook-form";
import styles from "./Account.module.css";
import { FaUserEdit, FaRegSave, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { updateAccountSchema } from "../../validators/accountSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateData } from "../../store/actions/authActions";

const Account: React.FC = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);

  if (user === undefined) return <p>Loading...</p>;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(updateAccountSchema),
    defaultValues: {
      email: user.email,
      username: user.username,
      password: "",
    },
  });

  const [isEditing, setIsEditing] = useState({
    email: false,
    password: false,
    username: false,
  });

  const navigate = useNavigate();

  type EditingField = keyof typeof isEditing;
  const handleEditClick = (field: EditingField) => {
    setIsEditing((prev) => ({ ...prev, [field]: !prev[field] }));
    reset({
      email: user.email,
      username: user.username,
      password: "",
    });
  };

  const onSubmit = async (data: { email: string; username: string; password: string }) => {
    const result = confirm("Voulez-vous vraiment modifier votre profil ?");
    if (result) {
      const updatedData = {
        email: user.email === data.email ? undefined : data.email,
        username: user.username === data.username ? undefined : data.username,
        password: data.password,
      };
      axiosInstance
        .patch(`/users/${user.id}`, updatedData)
        .then(async (res) => {
          let ret: {
            username: string | undefined;
            password: string | undefined;
            email: string | undefined;
            profilePicture: string | undefined;
          } = {
            username: undefined,
            password: undefined,
            email: undefined,
            profilePicture: undefined,
          };
          if (res.status !== 409) {
            ret = {
              email: res.data.email,
              username: res.data.username,
              password: "",
              profilePicture: user.profilePicture,
            };
            dispatch(updateData(ret));
          }
          setIsEditing({ email: false, password: false, username: false });
          reset({
            email: ret?.email,
            username: ret?.username,
            password: undefined,
          });
        })
        .catch((error) => {
          if (error.status == 409) {
            alert("Changement impossible"); //On ne peut pas dire que c'est déjà utilisé pour des pbs de confidentialité
            setIsEditing({ email: false, password: false, username: false });
          }
        });
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
      const response = await axiosInstance.patch(`/users/${user.id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      // Mettre à jour l'image avec l'URL renvoyée par le backend

      const ret = {
        email: user.email,
        username: user.username,
        password: "",
        profilePicture: import.meta.env.VITE_API_URL + response.data.profilePicture,
      };

      dispatch(updateData(ret));
    } catch (error) {
      console.error("Erreur lors de l'upload :", error);
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
          viewBox="0 0 448 512"
        >
          <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
        </svg>
        <div className={styles.image_container}>
          <img
            className={styles.round}
            src={
              user.profilePicture.includes("https://")
                ? user.profilePicture
                : `${import.meta.env.VITE_API_URL}${user.profilePicture}`
            }
            alt="user"
            onClick={() => document.getElementById("fileInput")?.click()}
          />
          <input type="file" style={{ display: "none" }} id="fileInput" accept="image/*" onChange={handleImageChange} />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.field}>
            <label>Email:</label>
            {isEditing.email ? (
              <input
                type="text"
                {...register("email", {
                  pattern: {
                    value: /.+@.+\..+/,
                    message: "Format d'email invalide",
                  },
                })}
              />
            ) : (
              <span>{user.email}</span>
            )}
            {isEditing.email ? (
              <>
                <FaRegSave className={styles.icon} onClick={handleSubmit(onSubmit)} />
                <FaTimes className={styles.icon} onClick={() => handleEditClick("email")} />
              </>
            ) : (
              <FaUserEdit className={styles.icon} onClick={() => handleEditClick("email")} />
            )}
          </div>
          {errors.email && <p className={styles.error}>{errors.email.message}</p>}
          <div className={styles.field}>
            <label>Username:</label>
            {isEditing.username ? <input type="text" {...register("username")} /> : <span>{user.username}</span>}
            {isEditing.username ? (
              <>
                <FaRegSave className={styles.icon} onClick={handleSubmit(onSubmit)} />
                <FaTimes className={styles.icon} onClick={() => handleEditClick("username")} />
              </>
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
              <>
                <FaRegSave className={styles.icon} onClick={handleSubmit(onSubmit)} />
                <FaTimes className={styles.icon} onClick={() => handleEditClick("password")} />
              </>
            ) : (
              <FaUserEdit className={styles.icon} onClick={() => handleEditClick("password")} />
            )}
          </div>
          {errors.password && <p className={styles.error}>{errors.password.message}</p>}
        </form>
      </div>
    </div>
  );
};

export default Account;
