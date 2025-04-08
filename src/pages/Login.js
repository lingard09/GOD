import React from "react";

function Login() {
  return (
    <div class="container mx-auto px-4">
        <div class="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
            <div class="text-center mb-8">
                <h2 class="text-3xl font-bold text-gray-800">로그인</h2>
                <p class="text-gray-600 mt-2">퀘스트 시스템에 오신 것을 환영합니다</p>
            </div>
            <form id="loginForm" class="space-y-6">
                <div>
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="email">이메일</label>
                    <input type="email" id="email" name="email" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500" />
                </div>
                <div>
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="password">비밀번호</label>
                    <input type="password" id="password" name="password" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500" />
                </div>
                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <input type="checkbox" id="remember" class="h-4 w-4 text-indigo-600" />
                        <label for="remember" class="ml-2 text-sm text-gray-600">로그인 상태 유지</label>
                    </div>
                    <a href="/" class="text-sm text-indigo-600 hover:text-indigo-800">비밀번호 찾기</a>
                </div>
                <button type="submit"
                        class="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition duration-200">
                    로그인
                </button>
            </form>
            <div class="mt-6 text-center">
                <p class="text-sm text-gray-600">
                    아직 계정이 없으신가요?
                    <a href="/register" class="text-indigo-600 hover:text-indigo-800 font-medium">회원가입</a>
                </p>
            </div>
        </div>
    </div>
  );
}

export default Login;