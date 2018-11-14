import React from "react"
import PropTypes from "prop-types"
import "./form.scss"
import Field from "./field"
import Actions from "./actions"

import { TextInput, TextArea } from "components"

const Form = props => {
  return <form className="form" {...props} />
}

Form.propTypes = {}

Form.defaultProps = {}

Form.Field = Field
Form.TextInput = props => <Field Component={TextInput} {...props} />
Form.TextArea = props => <Field Component={TextArea} {...props} />
Form.Actions = Actions

export default Form
