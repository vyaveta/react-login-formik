import React from 'react'
import {Form, Formik} from 'formik'

const FormComponent = ({initialValues,validationSchemaObj,onSubmitFunction,body}) => {

  return (
    <div>
        <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={validationSchemaObj}
        onSubmit={onSubmitFunction}
        >
            {
                (formik) => (
                    <Form>
                        {body}
                    </Form>
                )
            }
        </Formik>
    </div>
  )
}

export default FormComponent