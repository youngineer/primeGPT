export const checkIsValid = (email, password) => {
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/.test(password.current.value);
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email.current.value);

    if(!isEmailValid) return "Invalid email";
    if(!isPasswordValid) return "Enter stronger password";

    
    return null;

};