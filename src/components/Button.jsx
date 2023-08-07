import { twMerge } from 'tailwind-merge'
function Button({ children, ...rest }){
    return (
        <button 
            {...rest}
            className={`${twMerge('grid grid-flow-col-dense items-center border border-sky-500 text-sky-500 rounded text-xs px-1 py-1 hover:bg-sky-600', rest.className)}`}
        >{children}</button>
    )
}
export default Button 