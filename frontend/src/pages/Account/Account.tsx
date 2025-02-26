import styles from './Account.module.css'

type Props = {}

const Account = (props: Props) => {
  const handleEmailChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
  }

  const handlePasswordChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
  }

  return (
    <div className={styles.profile_page}>
      <div className={styles.card_container}>
        <img
          className={styles.round}
          src='https://fastly.picsum.photos/id/593/200/200.jpg?hmac=E26lTUTkzs_AeuWXrkT-kFTudfYDTVCjgKVE_HDzRmk'
          alt='user'
        />
        <h3>Username</h3>
        <h6>Email</h6>
        <div className={styles.buttons}>
          <button onClick={handleEmailChange} className={styles.primary}>
            Change Email
          </button>
          <button onClick={handlePasswordChange} className={styles.primary}>
            Change Password
          </button>
        </div>
        <div className={styles.prefer}>
          <h6>Prefer Themes</h6>
          <ul>
            <li>Games</li>
            <li>Developement</li>
            <li>Gym</li>
            <li>English</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Account
