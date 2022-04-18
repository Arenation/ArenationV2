import "./styles/style.css";
export function SolidButton({ type, text}) {
    return <button type={type} className="solid-button">{text}</button>;
}
