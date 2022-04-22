// import { useState } from "react";
// import TextField from "@mui/material/TextField";
// import DesktopDatePicker from "@mui/lab/DesktopDatePicker";

export function InputMail({
    label,
    isRequired = false,
    name,
    placeholder,
    value,
    onChange,
}) {
    isRequired = isRequired ? "required" : "optional";
    return (
        <div className="input_wrapper">
            <label htmlFor={name}>{label}</label>
            <input
                type="email"
                required={isRequired}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </div>
    );
}

export function InputPassword({
    label,
    isRequired = false,
    name,
    placeholder,
    value,
    onChange,
}) {
    return (
        <div className="input_wrapper">
            <label htmlFor={name}>{label}</label>
            <input
                type="password"
                required={isRequired}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    );
}

export function InputText({
    label,
    isRequired = false,
    name,
    placeholder,
    value,
    onChange,
}) {
    return (
        <div className="input_wrapper">
            <label htmlFor={name}>{label}</label>
            <input
                type="text"
                required={isRequired}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    );
}

// export function InputDate({ label, isRequired = false, name, placeholder }) {
//     const [value, setValue] = useState(new Date("2014-08-18T21:11:54"));

//     const handleChange = (newValue) => {
//         setValue(newValue);
//     };
//     return (
//         <div className="input_wrapper">
//             <label htmlFor={name}>{label}</label>
//             <DesktopDatePicker
//                 label="Date desktop"
//                 inputFormat="MM/dd/yyyy"
//                 value={value}
//                 onChange={handleChange}
//                 renderInput={(params) => <TextField {...params} />}
//             />
//             {/* <input
//                 type="text"
//                 required={isRequired}
//                 name={name}
//                 placeholder={placeholder}
//             /> */}
//         </div>
//     );
// }
