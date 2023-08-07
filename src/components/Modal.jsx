export const Heading = ({ children }) => {
    return (
        <div>{children}</div>
    )
}

export const Body = ({ children }) => {
    return (
        <div>{children}</div>
    )
}

export const Wrap = ({ children }) => {
    return (
        <div>{children}</div>
    )
}

Modal.Heading = Heading;
Modal.Body = Body;

export function Modal({ isVisible, children }) {
  return (
    <Wrap isVisible={isVisible}>
      {children}
    </Wrap>
  )
}