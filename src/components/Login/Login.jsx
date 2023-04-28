
import { Field,Form } from "react-final-form"
import { connect } from "react-redux"
import { login } from "../../redux/auth-reducer"
import { Navigate } from "react-router-dom"

const required = value => {
    
    return (value ? undefined : 'Required')}



const Login = (props) => {
    const onSubmit = (formData) =>{
        props.login(formData.login,formData.password,formData.remember)
    }


    if(props.isAuth){
        return <Navigate to={'/profile'} />
    }
    
    return <div>
        <h1>LOGIN</h1>
        <Form
            onSubmit={onSubmit}
            render={({ handleSubmit, form, submitting, pristine,reset}) => (
        
        <form onSubmit={handleSubmit}>
            <div>
                <Field validate={required} placeholder={"login"} name={"login"} >
                {({ input, meta }) => (
                    <div>
                        <input {...input} />
                        {meta.error && meta.touched && <span>{meta.error}</span>}
                    </div>
                )}

                </Field>
            </div>
            <div>
                <Field validate={required} placeholder={"password"} name={"password"} type="password">
                {({ input, meta }) => (
                    <div>
                        <input {...input} />
                        {meta.error && meta.touched && <span>{meta.error}</span>}
                    </div>
                )}

                </Field>
            </div>
            <div>
                <Field type={"checkbox"} name={"remember"} component={"input"}  /> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
            )}
        />
        
    </div>
}

const mapStateToProps =(state)=>({
    isAuth:state.auth.isAuth
})


export default connect(mapStateToProps,{login})(Login)