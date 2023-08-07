export const Header = ({ children }) => {
    return (
        <div className='bg-white p-2 grid grid-cols-[200px_1fr_auto] items-center'>{children}</div>
    )
}

export const Content = ({ children }) => {
    return (
        <div className="grid">{children}</div>
    )
}

export const Footer = ({ children }) => {
    return (
        <div className='bg-white grid items-center'>{children}</div>
    )
}

Page.Header = Header;
Page.Content = Content;
Page.Footer = Footer;

export function Page({ children }) {
    return (
        <div className="grid grid-rows-[50px_1fr_50px]">{children}</div>
    )
}