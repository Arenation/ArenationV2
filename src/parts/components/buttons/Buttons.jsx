export function SolidButton({disabled, type, text}) {
    return <button disabled={disabled} type={type} className="solid-button">{text}</button>;
}
