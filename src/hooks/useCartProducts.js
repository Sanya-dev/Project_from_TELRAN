import { useSelector } from "react-redux"

export function useCartProducts(){
    const basket = useSelector(state => state.cart.list)
    const { list } = useSelector(state => state.products)
    const result = basket.map(item => {
        const product = list.find(({id}) => id === item.id)
        return {...item, ...product}
    })
    return result
}