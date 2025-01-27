import './AuthForm.css'

function Login() {
  return (
    <div className='auth-container'>
      <div className='form-wrapper'>
        <h2>Connexion</h2>
        <form>
          <div className='form-group'>
            <label htmlFor='login-email'>Email</label>
            <input
              type='email'
              id='login-email'
              placeholder='Entrez votre email'
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='login-password'>Mot de passe</label>
            <input
              type='password'
              id='login-password'
              placeholder='Entrez votre mot de passe'
              required
            />
          </div>
          <button type='submit' className='btn'>
            Se connecter
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
