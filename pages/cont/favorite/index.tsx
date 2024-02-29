import React from 'react'
import AccountLayout from '../../../components/AccountLayout'
import { useFavoritesContext } from '../../../context/FavoritesContext'
import ReactLoading from 'react-loading'
import FavoriteProductCard from '../../../components/cont/FavoriteProductCard'

const Favorite = () => {
  const { favorites, isLoading } = useFavoritesContext()

  return (
    <AccountLayout pathName='favorite'>
      <div className='w-full lg:ml-12'>
        <h1 className='text-base mt-6 lg:mt-0 lg:text-[20px] font-bold text-secondary'>Produse favorite</h1>
        
        { !isLoading &&
          <div className='flex flex-col w-full'>
            { favorites.map((product) => (
              <FavoriteProductCard 
                key={product.id}
                product={product}
              />
            ))

            }
          </div>
        }

        { !isLoading && favorites.length == 0 &&
          <div className='h-[33vh] w-full flex items-center justify-center'>
            <p className='text-secondary font-bold sm:text-[20px]'>Nu ai adăugat niciun produs la favorite.</p>
          </div>
        }

        { isLoading &&
          <div className='h-[40vh] w-full flex items-center justify-center'>
            <ReactLoading type="spin" color="#FF7A00" width={32} height={32} /> 
          </div>
        }
      </div>
    </AccountLayout>
  )
}

export default Favorite