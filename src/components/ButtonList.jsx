const Label = ({ label, ...rest }) => (<span {...rest}>{label}</span>)
const Icon = ({ icon: Icon, ...rest }) => (<Icon {...rest} />)

ButtonList.Label = Label
ButtonList.Icon = Icon

function ButtonList({ children, ...rest }){
    return (
        <button 
            {...rest}
            className="grid grid-flow-col items-center m-1"
        >{children}</button>
    )
}
export default ButtonList