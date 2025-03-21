import React, { useState } from 'react'
import Field from './Field'

export default function General() {
    const [isEdit, setIsEdit] = useState(true);

    function handleIsEdit() {
        setIsEdit(!isEdit)
    }

  return (
    <div>
        <h1>General Information</h1>
        <Field name={"Name"} isEdit={isEdit} onEdit={handleIsEdit} />
        <Field name={"email"} type={"email"} isEdit={isEdit} onSubmit={handleIsEdit} />
        <Field name={"Phone Number"} type={"number"} isEdit={isEdit} onSubmit={handleIsEdit} />
    </div>
  )
}
