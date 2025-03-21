import React from 'react'

export default function Field({name, type = "text", isEdit, onSubmit}) {
  if (isEdit) {
    return (
      <label>
      {name}:{' '}
      <input type={type} />
    </label>
  )
} else {
  return (
    <p>{name}: </p>
  )
}
}
