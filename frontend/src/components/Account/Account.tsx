import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../hooks/redux";
import axiosInstance from "../../utils/axios";
import { useForm } from "react-hook-form";
import styles from "./Account.module.css";
import { FaUserEdit, FaRegSave } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Account: React.FC = () => {
  const { user } = useAppSelector((state) => state.auth);
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: user?.email || "",
      username: user?.first_name || "",
      lastName: user?.last_name || "",
      password: "",
    },
  });

  const [isEditing, setIsEditing] = useState({
    email: false,
    password: false,
    username: false,
    lastName: false,
  });

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    axiosInstance.get(`/users/${localStorage.getItem("userId")}`).then((res) => {
      setEmail(res.data.email);
      setUsername(res.data.username);
    });
  }, []);

  const navigate = useNavigate();

  const handleEditClick = (field: string) => {
    setIsEditing((prev) => ({ ...prev, [field]: true }));
  };

  const onSubmit = async (data: any) => {
    try {
      const updatedData = {
        email: data.email,
        first_name: data.username,
        last_name: data.lastName,
        password: data.password,
      };
      await axiosInstance.patch(`/api/users/${user?.id}`, updatedData);
      alert("Profile updated successfully!");
      setIsEditing({ email: false, password: false, username: false, lastName: false });
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
          viewBox="0 0 448 512"
        >
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
