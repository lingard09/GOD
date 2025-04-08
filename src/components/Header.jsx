import React from "react";

function Header() {
  return (
    <>
      <nav class="bg-white shadow-lg mb-8">
          <div class="container mx-auto px-4">
              <div class="flex justify-between items-center py-4">
                  <a href="/">
                      <h1 class="text-xl font-bold text-black hover:text-indigo-300 transition duration-200">Growth Optimization Device
                      </h1>
                  </a>                
                  <div class="flex items-center space-x-6">
                      <a href="/" class="nav-link text-white hover:text-indigo-300 active">홈</a>
                      <a href="/create-quest" class="nav-link text-gray-600 hover:text-indigo-600">퀘스트 생성</a>
                      <a href="/quest-list" class="nav-link text-gray-600 hover:text-indigo-600">퀘스트 목록</a>
                      <a href="/profile" class="nav-link text-gray-600 hover:text-indigo-600">프로필</a>
                      <div id="authButtons" class="flex items-center space-x-4">
                          <a href="/login" class="text-gray-600 hover:text-indigo-600">로그인</a>
                          <a href="/register" class="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">회원가입</a>
                      </div>
                      <div id="userInfo" class="hidden">
                          <span id="userName" class="text-gray-800 mr-2"></span>
                          <button onclick="logout()" class="text-red-600 hover:text-red-700">로그아웃</button>
                      </div>
                  </div>
              </div>
          </div>
      </nav>

    </>
  );
}

export default Header;
