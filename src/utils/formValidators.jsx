import React from 'react'

const maxLength = max => value =>
  value && value.length > max
    ? `Must be ${max} characters or less`
    : undefined

const minLength = min => value =>
  value && value.length < min
    ? `Must be ${min} characters or more`
    : undefined

const required = value =>
  (value && value.length > 0 && value.trim().length > 0
    ? undefined
    : 'Required')

const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined

const username = value =>
  value && !/^[a-z]{8,16}$/.test(value)
    ? 'Username should be 8-16 characters long string of lowercase latin letters (a-z)'
    : undefined

const password = value =>
  value && !/^\w{8,16}$/.test(value)
    ? 'Password should be 8-16 characters long and contain letters, numbers and at least one special character'
    : undefined

const minLength3 = minLength(3)
const maxLength32 = maxLength(32)
const maxLength127 = maxLength(127)
const maxLength255 = maxLength(255)
const maxLength10000 = maxLength(10000)

export {
  required,
  email,
  username,
  password,
  minLength3,
  maxLength32,
  maxLength127,
  maxLength255,
  maxLength10000,
}