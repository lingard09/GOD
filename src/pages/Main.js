import React from "react";
import './Main.css';

function Main() {
  return (
    <main class="bg-image min-h-screen">
        <div class="overlay min-h-screen flex items-center">
            <div class="container mx-auto px-4">
                <div class="max-w-3xl mx-auto text-center text-white">
                    <h1 class="text-5xl font-bold mb-6">당신의 모험을 시작하세요</h1>
                    <p class="text-xl mb-8">퀘스트 시스템과 함께 새로운 도전을 경험하세요</p>
                    <div class="space-x-4">
                        <a href="/register" class="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 inline-block">시작하기</a>
                        <a href="/quest-list" class="bg-white text-indigo-600 px-8 py-3 rounded-lg hover:bg-gray-100 inline-block">퀘스트 보기</a>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
                    <div class="glass-effect rounded-lg p-6 text-white">
                        <h3 class="text-xl font-bold mb-4">맞춤형 퀘스트</h3>
                        <p>당신의 레벨과 관심사에 맞는 다양한 퀘스트를 제공합니다.</p>
                    </div>
                    <div class="glass-effect rounded-lg p-6 text-white">
                        <h3 class="text-xl font-bold mb-4">성장 시스템</h3>
                        <p>퀘스트 완료를 통해 경험치와 카르마를 획득하고 레벨을 올리세요.</p>
                    </div>
                    <div class="glass-effect rounded-lg p-6 text-white">
                        <h3 class="text-xl font-bold mb-4">커뮤니티</h3>
                        <p>다른 모험가들과 함께 도전하고 경험을 공유하세요.</p>
                    </div>
                </div>
            </div>
        </div>
    </main>
  );
}

export default Main;