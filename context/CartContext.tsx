import { useContext, useState, createContext, useEffect } from "react"
import { Product } from "../types"
import Cookies from "js-cookie"
import toast from "react-hot-toast"
import { collection, documentId, getDocs, query, where } from "firebase/firestore"
import { db } from "../firebase"


type CartContextType = {
  cart: Product[]
  handleAddProduct: (product: Product) => void
  handleRemoveProduct: (product: Product) => void
}

const Context = createContext<CartContextType | null>(null)

type Props = { 
  children: React.ReactNode 
} 

export const CartContext = ({ children }: Props) => {
  const [cart, setCart] = useState< Product[] >([])

  const fetchCartProducts = async () => {
    const stringifiedCartIds = Cookies.get('cart')

    try {
      if ( stringifiedCartIds ) {
        const cartIds = JSON.parse( stringifiedCartIds ).slice(0, 30)
  
        const docsRef = query(collection(db, 'products'), where(documentId(), 'in', cartIds))
        const docsSnap = await getDocs(docsRef)

        const products: Product[] = docsSnap.docs.map((doc) => (
          { id: doc.id, ...doc.data() } as Product
        ))

        setCart(products)
      } 
    } catch (e) {
      console.log(e)
    }
 
  }

  useEffect(() => {
    fetchCartProducts()
  }, [])
  
  const handleAddProduct = ( product: Product ) => {
    if ( cart.findIndex(((item) => item.id == product.id )) != -1 ) {
      toast.success('Produsul este deja în coșul de cumpărături.')
      return
    }
    setCart(cart => [product, ...cart])

    const cartIds = [product, ...cart].map((product) => product.id )

    Cookies.set('cart', JSON.stringify(cartIds))
    toast.success('Produs adăugat în coșul de cumpărături.')
  }

  const handleRemoveProduct = ( product: Product ) => {
    setCart(cart => cart.filter(cart => cart.id != product.id ) )

    const cartIds = cart.filter(cart => cart.id != product.id ).map((product) => product.id )

    Cookies.set('cart', JSON.stringify(cartIds))
    toast.success('Produs a fost eliminat din coșul de cumpărături.')
  }

  return(
    <Context.Provider 
      value={{ cart, handleAddProduct, handleRemoveProduct }}
    >
      {children}
    </Context.Provider>
  )
}

export const useCartContext = () => {
  const cartContext = useContext(Context)

  if (!cartContext) throw new Error('You need to use this hook inside a context provider')

  return cartContext
}