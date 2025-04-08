import React from "react";

function Register() {
  return (
    <>
      <div class="container mx-auto px-4">
        <div class="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
            <div class="text-center mb-8">
                <h2 class="text-3xl font-bold text-gray-800">회원가입</h2>
                <p class="text-gray-600 mt-2">새로운 모험을 시작하세요</p>
            </div>
            <form id="registerForm" class="space-y-6">
                <div>
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="name">이름</label>
                    <input type="text" id="name" name="name" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500" />
                </div>
                <div>
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="email">이메일</label>
                    <input type="email" id="email" name="email" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500" />
                </div>
                <div>
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="password">비밀번호</label>
                    <input type="password" id="password" name="password" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500" />
                </div>
                <div>
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="passwordConfirm">비밀번호 확인</label>
                    <input type="password" id="passwordConfirm" name="passwordConfirm" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500" />
                </div>
                <button type="submit"
                        class="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition duration-200">
                    회원가입
                </button>
            </form>
            <div class="mt-6 text-center">
                <p class="text-sm text-gray-600">
                    이미 계정이 있으신가요?
                    <a href="/login" class="text-indigo-600 hover:text-indigo-800 font-medium">로그인</a>
                </p>
            </div>
        </div>
      </div>
    </>
  );
}

export default Register;
