import sharedStyles from '../../shared-styles/styles.module.css'
import styles from './styles.module.css'
import Logo from '../../../../public/logo.svg'

const SignUp: React.FC = () => {
  return (
    <div className={`${sharedStyles.primaryColor} ${styles.container}`}>
      <header className={styles.header}>
        <Logo className={styles.logo} />
      </header>
    </div>
  )
}
export default SignUp
