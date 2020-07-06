import { useState } from "react"

function useForm() {
  const [formData, setFormData] = useState({})
  const handleInput = e => {
    const { value, name } = e.target
    setFormData({ ...formData, [name]: value })
  }
  return [formData, handleInput]
}

export default useForm
