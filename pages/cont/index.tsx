import { useAuthContext } from '../../context/AuthContext'
import AccountDetails from '../../components/cont/AccountDetails'
import { useRouter } from 'next/navigation'
import AccountLayout from '../../components/AccountLayout'

const Cont = () => {
  const router = useRouter()
  const { currentUser, isLoadingAuth } = useAuthContext()

  if ( !isLoadingAuth && !currentUser ) {
    router.replace('/login')
  }

  return (
    <AccountLayout pathName='informatii'>
      <AccountDetails />
    </AccountLayout>
  )
}

export default Cont
