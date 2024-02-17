import AdminLayout from '../../components/admin-nav/AdminLayout'
import { useAuthContext } from '../../context/AuthContext'

const Admin = () => {
  const { currentUser } = useAuthContext()

  return (
    <AdminLayout>
      <h1 className='text-[28px] text-secondary font-bold '>Bun venit, { currentUser?.name.split(' ')[0] }!</h1>
    </AdminLayout>
  )
}

export default Admin