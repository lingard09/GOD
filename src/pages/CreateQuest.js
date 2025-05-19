import React from "react";

function CreateQuest() {
  return (
    <div class="container mx-auto px-4 py-8">
      <div class="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 class="text-2xl font-bold mb-4">새 퀘스트 생성</h2>
        <form id="questForm" class="space-y-4">
          <div>
            <label class="block text-gray-700 mb-2">퀘스트 제목</label>
            <input
              type="text"
              id="questTitle"
              class="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label class="block text-gray-700 mb-2">카테고리</label>
            <select id="questCategory" class="w-full p-2 border rounded">
              <option value="기본인성">기본인성</option>
              <option value="자기계발">자기계발</option>
              <option value="예술">예술</option>
              <option value="운동">운동</option>
              <option value="학업">학업</option>
              <option value="사회활동">사회활동</option>
            </select>
          </div>
          <div>
            <label class="block text-gray-700 mb-2">태스크 목록</label>
            <div id="taskList" class="space-y-2">
              <div class="flex gap-2">
                <input
                  type="text"
                  class="task-input w-full p-2 border rounded"
                  placeholder="태스크 내용"
                />
                <button
                  type="button"
                  class="remove-task px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  삭제
                </button>
              </div>
            </div>
            <button
              type="button"
              id="addTask"
              class="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              태스크 추가
            </button>
          </div>
          <button
            type="submit"
            class="w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            퀘스트 생성
          </button>
        </form>
      </div>

      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        id="questList"
      >
        <template id="questCardTemplate">
          <div class="quest-card bg-white rounded-lg shadow-lg p-6">
            <div class="flex justify-between items-start mb-4">
              <h3 class="text-xl font-bold quest-title">퀘스트 제목</h3>
              <span class="px-3 py-1 rounded text-sm quest-category"></span>
            </div>
            <div class="space-y-2 mb-4">
              <div class="flex items-center">
                <span class="karma-color"></span>
                <span class="quest-karma"></span>
              </div>
              <div class="flex items-center">
                <span class="text-gray-600">난이도:</span>
                <span class="ml-2 quest-difficulty"></span>
              </div>
            </div>
            <div class="border-t pt-4">
              <h4 class="font-bold mb-2">보상</h4>
              <div class="grid grid-cols-3 gap-2 text-sm">
                <div>
                  <span class="text-gray-600">경험치:</span>
                  <span class="quest-exp"></span>
                </div>
                <div>
                  <span class="text-gray-600">스킬:</span>
                  <span class="quest-skill"></span>
                </div>
                <div>
                  <span class="text-gray-600">카르마:</span>
                  <span class="quest-karma-points"></span>
                </div>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  );
}

export default CreateQuest;
