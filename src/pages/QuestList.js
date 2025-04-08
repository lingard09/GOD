import React from "react";
import './QuestList.css'

class QuestSystem {
    constructor(user) {
        this.user = user;
        this.activeQuests = [];
        this.completedQuests = [];
    }

    /**
     * 맞춤형 퀘스트 생성
     * @param {Object} userStatus - 유저의 현재 상태 데이터
     * @returns {Object} 생성된 퀘스트
     */
    generateQuest(userStatus) {
        const questPool = [
            { id: 1, title: "오늘 5,000보 걷기", type: "운동", reward: 10, condition: userStatus.steps < 5000 },
            { id: 2, title: "30분 독서하기", type: "학습", reward: 15, condition: userStatus.readingTime < 30 },
            { id: 3, title: "명상 10분 하기", type: "마음챙김", reward: 20, condition: userStatus.meditationTime < 10 }
        ];

        const availableQuests = questPool.filter(q => q.condition);
        if (availableQuests.length > 0) {
            const selectedQuest = availableQuests[Math.floor(Math.random() * availableQuests.length)];
            this.activeQuests.push(selectedQuest);
            return selectedQuest;
        } else {
            return { message: "오늘 수행할 퀘스트가 없습니다." };
        }
    }

    /**
     * 퀘스트 진행 상태 업데이트
     * @param {number} questId - 완료할 퀘스트 ID
     * @returns {Object} 업데이트 결과
     */
    completeQuest(questId) {
        const questIndex = this.activeQuests.findIndex(q => q.id === questId);
        if (questIndex !== -1) {
            const completedQuest = this.activeQuests.splice(questIndex, 1)[0];
            this.completedQuests.push(completedQuest);
            this.user.points += completedQuest.reward;
            return { message: `${completedQuest.title} 완료! 보상: ${completedQuest.reward} 포인트` };
        } else {
            return { message: "해당 퀘스트를 찾을 수 없습니다." };
        }
    }

    /**
     * 유저의 현재 진행 중인 퀘스트 조회
     * @returns {Array} 진행 중인 퀘스트 목록
     */
    getActiveQuests() {
        return this.activeQuests;
    }

    /**
     * 완료된 퀘스트 목록 조회
     * @returns {Array} 완료된 퀘스트 목록
     */
    getCompletedQuests() {
        return this.completedQuests;
    }
}

// // 예제 유저 데이터
// const user = { name: "Player1", points: 0 };
// const questSystem = new QuestSystem(user);

// // 유저 상태 예제 (웨어러블 데이터와 연동 가능)
// const userStatus = { steps: 3000, readingTime: 10, meditationTime: 5 };

// // 퀘스트 생성
// const newQuest = questSystem.generateQuest(userStatus);
// console.log("🔹 새 퀘스트:", newQuest);

// // 퀘스트 완료 처리
// const completionMessage = questSystem.completeQuest(newQuest.id);
// console.log("✅ 퀘스트 완료:", completionMessage);

// // 현재 퀘스트 목록 확인
// console.log("📌 진행 중 퀘스트:", questSystem.getActiveQuests());
// console.log("🏆 완료된 퀘스트:", questSystem.getCompletedQuests());
// console.log("💰 유저 포인트:", user.points);



const questSystem = new QuestSystem();
        
        // function updateStats() {
        //     // const stats = questSystem.storage.getStats();
        //     document.getElementById('totalQuests').textContent = stats.totalQuests;
        //     document.getElementById('activeQuests').textContent = stats.activeQuests;
        //     document.getElementById('completedQuests').textContent = stats.completedQuests;
        //     const completionRate = stats.totalTasks > 0 
        //         ? Math.round((stats.completedTasks / stats.totalTasks) * 100) 
        //         : 0;
        //     document.getElementById('taskCompletion').textContent = `${completionRate}%`;
        // }

        function getStatusBadgeHTML(status) {
            const colors = {
                active: 'bg-green-100 text-green-800',
                completed: 'bg-blue-100 text-blue-800',
                failed: 'bg-red-100 text-red-800'
            };
            return `<span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${colors[status]}">${status}</span>`;
        }

        function renderQuestList(filters = {}) {
            const tbody = document.getElementById('questTableBody');
            tbody.innerHTML = '';
            
            const quests = questSystem.storage.getAllQuests()
                .filter(quest => {
                    if (filters.category && quest.category !== filters.category) return false;
                    if (filters.difficulty && quest.difficulty !== filters.difficulty) return false;
                    if (filters.search && !quest.title.toLowerCase().includes(filters.search.toLowerCase())) return false;
                    return true;
                });

            quests.forEach(quest => {
                const completedTasks = quest.tasks.filter(task => task.isCompleted).length;
                const totalTasks = quest.tasks.length;
                const progress = Math.round((completedTasks / totalTasks) * 100) || 0;

                const row = document.createElement('tr');
                row.className = 'quest-row';
                row.innerHTML = `
                    <td class="px-6 py-4 whitespace-nowrap">
                        ${getStatusBadgeHTML(quest.status)}
                    </td>
                    <td class="px-6 py-4">
                        <div class="text-sm font-medium text-gray-900">${quest.title}</div>
                        <div class="task-list transition-all">
                            ${quest.tasks.map(task => `
                                <div class="flex items-center mt-2">
                                    <input type="checkbox" ${task.isCompleted ? 'checked' : ''} 
                                           onchange="updateTaskStatus('${quest.id}', ${task.id}, this.checked)"
                                           class="mr-2">
                                    <span class="text-sm text-gray-600">${task.description}</span>
                                </div>
                            `).join('')}
                        </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                        <span class="px-2 py-1 text-sm rounded-full bg-gray-100">${quest.category}</span>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                        <span class="text-sm">${quest.difficulty}</span>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                        <div class="flex items-center">
                            <div class="w-3 h-3 rounded-full mr-2" style="background-color: ${quest.karma.color}"></div>
                            <span class="text-sm">${quest.karma.points}</span>
                        </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                        <div class="w-full bg-gray-200 rounded-full h-2">
                            <div class="bg-blue-600 h-2 rounded-full" style="width: ${progress}%"></div>
                        </div>
                        <span class="text-sm text-gray-600">${progress}%</span>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button onclick="toggleTasks(this)" class="text-blue-600 hover:text-blue-900 mr-3">
                            태스크 보기
                        </button>
                        <button onclick="deleteQuest('${quest.id}')" class="text-red-600 hover:text-red-900">
                            삭제
                        </button>
                    </td>
                `;
                tbody.appendChild(row);
            });
        }

        function toggleTasks(button) {
            const taskList = button.closest('tr').querySelector('.task-list');
            taskList.classList.toggle('open');
            button.textContent = taskList.classList.contains('open') ? '태스크 숨기기' : '태스크 보기';
        }

        // function updateTaskStatus(questId, taskId, isCompleted) {
        //     questSystem.storage.updateTaskStatus(questId, taskId, isCompleted);
        //     updateStats();
        //     // renderQuestList(getCurrentFilters());
        // }

        // function deleteQuest(questId) {
        //     if (alert('이 퀘스트를 삭제하시겠습니까?')) {
        //         questSystem.storage.deleteQuest(questId);
        //         updateStats();
        //         // renderQuestList(getCurrentFilters());
        //     }
        // }

        // function getCurrentFilters() {
        //     return {
        //         category: document.getElementById('categoryFilter').value,
        //         difficulty: document.getElementById('difficultyFilter').value,
        //         search: document.getElementById('searchInput').value
        //     };
        // }

        // // 이벤트 리스너 설정
        // document.getElementById('categoryFilter').addEventListener('change', () => {
        //     renderQuestList(getCurrentFilters());
        // });

        // document.getElementById('difficultyFilter').addEventListener('change', () => {
        //     renderQuestList(getCurrentFilters());
        // });

        // document.getElementById('searchInput').addEventListener('input', () => {
        //     renderQuestList(getCurrentFilters());
        // });

        // // 초기 로드
        // window.addEventListener('DOMContentLoaded', () => {
        //     updateStats();
        //     renderQuestList();
        // });



function QuestList() {
  return (
    <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div class="bg-white rounded-lg shadow p-6">
                <h3 class="text-lg font-semibold text-gray-700">총 퀘스트</h3>
                <p class="text-3xl font-bold text-blue-600" id="totalQuests">0</p>
            </div>
            <div class="bg-white rounded-lg shadow p-6">
                <h3 class="text-lg font-semibold text-gray-700">진행중</h3>
                <p class="text-3xl font-bold text-green-600" id="activeQuests">0</p>
            </div>
            <div class="bg-white rounded-lg shadow p-6">
                <h3 class="text-lg font-semibold text-gray-700">완료됨</h3>
                <p class="text-3xl font-bold text-purple-600" id="completedQuests">0</p>
            </div>
            <div class="bg-white rounded-lg shadow p-6">
                <h3 class="text-lg font-semibold text-gray-700">총 태스크 완료율</h3>
                <p class="text-3xl font-bold text-orange-600" id="taskCompletion">0%</p>
            </div>
        </div>

        <div class="bg-white rounded-lg shadow-lg p-6 mb-8">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                    <label class="block text-gray-700 mb-2">카테고리 필터</label>
                    <select id="categoryFilter" class="w-full p-2 border rounded">
                        <option value="">전체</option>
                        <option value="기본인성">기본인성</option>
                        <option value="자기계발">자기계발</option>
                        <option value="예술">예술</option>
                        <option value="운동">운동</option>
                        <option value="학업">학업</option>
                        <option value="사회활동">사회활동</option>
                    </select>
                </div>
                <div>
                    <label class="block text-gray-700 mb-2">난이도 필터</label>
                    <select id="difficultyFilter" class="w-full p-2 border rounded">
                        <option value="">전체</option>
                        <option value="E">E - 일반인 수준</option>
                        <option value="D">D - 취미 수준</option>
                        <option value="C">C - 준전문가 수준</option>
                        <option value="B">B - 전문가 수준</option>
                        <option value="A">A - 최고 전문가 수준</option>
                        <option value="S">S - 인류 최고 수준</option>
                    </select>
                </div>
                <div>
                    <label class="block text-gray-700 mb-2">검색</label>
                    <input type="text" id="searchInput" class="w-full p-2 border rounded" placeholder="퀘스트 제목 검색..." />
                </div>
            </div>
        </div>

        <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <table class="min-w-full">
                <thead>
                    <tr class="bg-gray-50">
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">상태</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">제목</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">카테고리</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">난이도</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">카르마</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">진행률</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">작업</th>
                    </tr>
                </thead>
                <tbody id="questTableBody" class="bg-white divide-y divide-gray-200">
                    <th>진행중</th>
                    <th>오늘 10,000보 걷기</th>
                    <th>운동</th>
                    <th>중</th>
                    <th>10</th>
                    <th>80%</th>
                    <th>!</th>
                </tbody>
            </table>
        </div>
    </div>
  );
}

export default QuestList;
