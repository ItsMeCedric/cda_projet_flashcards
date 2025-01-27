import './AuthForm.css'

function SignIn() {
  return (
    <div className='auth-container'>
      <div className='form-wrapper'>
        <h2>Inscription</h2>
        <form>
          <div className='form-group'>
            <label htmlFor='register-name'>Nom</label>
            <input
              type='text'
              id='register-name'
              placeholder='Entrez votre nom'
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='register-email'>Email</label>
            <input
              type='email'
              id='register-email'
              placeholder='Entrez votre email'
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='register-password'>Mot de passe</label>
            <input
              type='password'
              id='register-password'
              placeholder='Créez un mot de passe'
              required
            />
          </div>
          <button type='submit' className='btn'>
            S'inscrire
          </button>
        </form>
      </div>
    </div>
  )
}
export default SignIn
