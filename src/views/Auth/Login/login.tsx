import { FC, memo } from 'react'
import { Formik } from 'formik'
import { InitialValues, ValidationSchema } from './constant'
import {
    Button,
    Container,
    Form,
    FormContent,
    Info,
    Input,
    InputController,
    InputError,
    Label,
    Link,
    Title,
} from './loginStyles'
import useLogic from './logic'
import Footer from '../../../components/Footer'
// import { Props } from './types'

const Login: FC = ({ }) => {
    const { handleOnSubmit } = useLogic()
    return (
        <Container>
            <Formik
                initialValues={InitialValues}
                validationSchema={ValidationSchema}
                onSubmit={handleOnSubmit}
            >
                {({ errors, handleSubmit, handleChange, values }) => (
                    <Form onSubmit={handleSubmit}>
                        <FormContent>
                            <Title>Would you like to know our fabulous cocktails?
                                Register here.</Title>
                            <InputController>
                                <Label>Email</Label>
                                <Input
                                    type="email"
                                    name="email"
                                    onChange={handleChange}
                                    value={values.email}
                                />
                                {errors?.email && <InputError>{errors.email}</InputError>}
                            </InputController>
                            <InputController>
                                <Label>Password</Label>
                                <Input
                                    type="password"
                                    name="password"
                                    onChange={handleChange}
                                    value={values.password}
                                />
                                {errors?.password && <InputError>{errors.password}</InputError>}
                            </InputController>
                            <Button type="submit">Log in</Button>
                            <Info>
                                Don't have an account yet?{' '}
                                <Link to="/signup">Sign up here </Link>
                            </Info>
                        </FormContent>
                    </Form>
                )}
            </Formik>
            <Footer />
        </Container>
    )
}

export default memo(Login)
