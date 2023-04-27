
import { reduxForm,Field } from "redux-form"





const LoginForm = (props) => {
    return (
        
        
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"login"} name={"login"} component={"input"} />
            </div>
            <div>
                <Field placeholder={"password"} name={"password"} component={"input"}/>
            </div>
            <div>
                <Field type={"checkbox"} name={"remember"} component={"input"}  /> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
        
       
    )
}

const ReduxForm = reduxForm({form:'login'})(LoginForm)


const Login = (props) => {
    const onSubmit = (formData) =>{
        console.log(formData)
    }
    return <div>
        <h1>LOGIN</h1>
        <ReduxForm onSubmit={onSubmit} />
    </div>
}




export default Login