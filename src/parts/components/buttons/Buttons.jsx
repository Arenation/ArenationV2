import "./styles/style.css";
export function SolidButton({ text, handleClick }) {
    return <button className="solid-button" onClick={handleClick}>{text}</button>;
}
