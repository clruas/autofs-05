import { twMerge } from 'tailwind-merge'

function Button({ children, ...rest }){
    return (
        <button 
            {...rest}
            className={`${twMerge('grid grid-flow-col-dense items-center border bg-sky-500 text-white rounded text-xs py-2 px-3 hover:bg-sky-600', rest.className)}`}
        >{children}</button>
    )
}
export default Button