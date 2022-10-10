import "./register.css";

const Register = ({date_action}) => {
    return (
        <form className="registration-form">
            <label htmlFor="name">Name <span className="red">*</span></label>
            <input type="text" name="name" id="name" required="required" placeholder="Enter the name" />

            <label htmlFor="email">Email <span className="red">*</span></label>
            <input type="text" name="email" id="email" required="required" placeholder="Enter the email" />

            <label htmlFor="username">Username <span className="red">*</span></label>
            <input type="text" name="username" id="username" required="required" placeholder="Enter the username" />

            <label htmlFor="join-date">{date_action}<span className="red">*</span></label>
            <input type="date" name="join-date" id="join-date" required="required" placeholder="Enter the name" />

            <label htmlFor="password">Password <span className="red">*</span></label>
            <input type="password" name="password" id="password" required="required" placeholder="Enter the password" />

            <label htmlFor="confirm-password">Confirm Password<span className="red">*</span></label>
            <input type="password" name="confirm-password" id="confirm-password" required="required" placeholder="Confirm password" />

            <div className="action-btns">
                <button className="green-background">Submit</button>
                <button className="red-background margin-left">Cancel</button>
            </div>
        </form>
    )
}

export default Register