import { useEffect } from 'react'
import { Formik, Field, Form } from 'formik'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ChatActionCreator from './actions/chatActionCreators'

function App (props) {
  const { messages, isFetching, error } = useSelector(state => state.app)
  const dispatch = useDispatch()

  const { createMessageRequest, getMessageRequest } = bindActionCreators(
    ChatActionCreator,
    dispatch
  )

  useEffect(() => {
    getMessageRequest()
  }, [])

  return (
    <>
      <Formik
        initialValues={{
          name: '',
          text: ''
        }}
        onSubmit={(values, formikBag) => {
          createMessageRequest(values)
          formikBag.resetForm()
        }}
      >
        <Form>
          <Field name='name' placeholder='name' />
          <Field name='text' placeholder='text' />
          <button type='submit'>Send msg</button>
        </Form>
      </Formik>
      <div>
        {messages.map(m => (
          <div key={m._id}>{JSON.stringify(m)}</div>
        ))}
      </div>
    </>
  )
}

export default App
