import React from "react";

function Profile() {
  return (
    <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
            <div class="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
                <div class="bg-indigo-600 h-32"></div>
                <div class="px-6 py-4 relative">
                    <div class="absolute -top-16 left-6">
                        <div class="w-32 h-32 rounded-full bg-white p-2">
                            <div class="w-full h-full rounded-full bg-gray-300 flex items-center justify-center">
                                <span class="text-4xl text-gray-600" id="userInitial">U</span>
                            </div>
                        </div>
                    </div>
                    <div class="mt-16">
                        <h2 class="text-2xl font-bold text-gray-800" id="userName">사용자</h2>
                        <p class="text-gray-600" id="userLevel">레벨 1</p>
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div class="bg-white rounded-lg shadow p-6">
                    <h3 class="text-lg font-semibold text-gray-700 mb-2">총 경험치</h3>
                    <p class="text-3xl font-bold text-indigo-600" id="totalExp">0 XP</p>
                </div>
                <div class="bg-white rounded-lg shadow p-6">
                    <h3 class="text-lg font-semibold text-gray-700 mb-2">카르마 포인트</h3>
                    <p class="text-3xl font-bold text-green-600" id="karmaPoints">0</p>
                </div>
                <div class="bg-white rounded-lg shadow p-6">
                    <h3 class="text-lg font-semibold text-gray-700 mb-2">완료한 퀘스트</h3>
                    <p class="text-3xl font-bold text-purple-600" id="completedQuests">0</p>
                </div>
            </div>

            <div class="bg-white rounded-lg shadow-lg p-6 mb-8">
                <h3 class="text-xl font-bold text-gray-800 mb-4">레벨 진행 상황</h3>
                <div class="relative pt-1">
                    <div class="flex mb-2 items-center justify-between">
                        <div>
                            <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-indigo-600 bg-indigo-200">
                                진행도
                            </span>
                        </div>
                        <div class="text-right">
                            <span class="text-xs font-semibold inline-block text-indigo-600" id="expProgress">
                                0%
                            </span>
                        </div>
                    </div>
                    <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-indigo-200">
                        <div id="expProgressBar" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-600" style={{width: '0%'}}></div>
                    </div>
                </div>
            </div>

            <div class="bg-white rounded-lg shadow-lg p-6 mb-8">
                <h3 class="text-xl font-bold text-gray-800 mb-4">획득한 업적</h3>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4" id="achievements">
                    <div class="text-center p-4 rounded-lg border-2 border-gray-200">
                        <div class="w-16 h-16 rounded-full bg-gray-200 mx-auto mb-2 flex items-center justify-center">
                            <span class="text-2xl">🎯</span>
                        </div>
                        <h4 class="font-semibold text-gray-800">첫 퀘스트</h4>
                        <p class="text-sm text-gray-600">첫 번째 퀘스트 완료</p>
                    </div>
                </div>
            </div>

            <div class="bg-white rounded-lg shadow-lg p-6">
                <h3 class="text-xl font-bold text-gray-800 mb-4">최근 활동</h3>
                <div class="space-y-4" id="recentActivities">
                </div>
            </div>
        </div>
    </div>

  );
}

export default Profile;
