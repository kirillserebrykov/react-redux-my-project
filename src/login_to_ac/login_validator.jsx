import React from 'react';
import './log.css';

export const required_validator_email = (value = []) => {
  if (value.indexOf('@') === -1) return "Incorrect email"
  return undefined
}
export const required_validator_password = (maxLength) => (value = []) => {
  if (value.length > maxLength) return "You have exceeded the maximum number of characters in a password"
  return undefined
}













