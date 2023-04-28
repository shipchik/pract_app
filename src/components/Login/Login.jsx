
import { Field,Form } from "react-final-form"



const required = value => {
    
    return (value ? undefined : 'Required')}



const Login = (props) => {
    const onSubmit = (formData) =>{
        console.log(formData)
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
                <Field validate={required} placeholder={"password"} name={"password"}>
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




export default Login