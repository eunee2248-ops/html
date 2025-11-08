import React, { useState } from 'react'

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('이메일: ', email)
    console.log('비밀번호: ', password)

    alert('로그인 시도! 콘솔을 확인해주세요!!!')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg space-y-6">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">
          로그인
        </h2>
      </div>
    </div>
  )
}

export default LoginForm
