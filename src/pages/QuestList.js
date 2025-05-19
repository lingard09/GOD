import React, { useState, useEffect } from "react";
// import axios from "axios";  // axios 임포트
import './QuestList.css';

function QuestList() {
  // 초기 퀘스트 데이터
  const initialQuests = [
    {
      id: 1,
      title: "오늘 10,000보 걷기",
      category: "운동",
      difficulty: "D",
      karma: 10,
      progress: 80,
      status: "진행중",
    },
    {
      id: 2,
      title: "인사 100번 하기",
      category: "기본인성",
      difficulty: "D",
      karma: 5,
      progress: 100,
      status: "완료됨",
    },
    {
        id: 3,
        title: "책 1권 읽기",
        category: "자기계발",
        difficulty: "E",
        karma: 20,
        progress: 50,
        status: "진행중",
      },
    // 더 많은 퀘스트 데이터 추가
  ];

  const [quests, setQuests] = useState(initialQuests);
  const [filteredQuests, setFilteredQuests] = useState(quests);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [difficultyFilter, setDifficultyFilter] = useState("");

  // 퀘스트 필터링 기능
  useEffect(() => {
    let filtered = quests;

    if (searchTerm) {
      filtered = filtered.filter(quest =>
        quest.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (categoryFilter) {
      filtered = filtered.filter(quest => quest.category === categoryFilter);
    }

    if (difficultyFilter) {
      filtered = filtered.filter(quest => quest.difficulty === difficultyFilter);
    }

    setFilteredQuests(filtered);
  }, [searchTerm, categoryFilter, difficultyFilter, quests]);

  // 퀘스트 완료 처리 함수
  const completeQuest = (id) => {
    setQuests(prevQuests =>
      prevQuests.map(quest =>
        quest.id === id ? { ...quest, status: "완료됨", progress: 100 } : quest
      )
    );
  };

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        {/* 총 퀘스트, 진행중, 완료된 퀘스트 수 */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-700">총 퀘스트</h3>
          <p className="text-3xl font-bold text-blue-600">{quests.length}</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-700">진행중</h3>
          <p className="text-3xl font-bold text-green-600">
            {quests.filter(quest => quest.status === "진행중").length}
          </p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-700">완료됨</h3>
          <p className="text-3xl font-bold text-purple-600">
            {quests.filter(quest => quest.status === "완료됨").length}
          </p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-700">총 태스크 완료율</h3>
          <p className="text-3xl font-bold text-orange-600">
            {((quests.filter(quest => quest.status === "완료됨").length / quests.length) * 100).toFixed(2)}%
          </p>
        </div>
      </div>

      {/* 카테고리 필터, 난이도 필터, 검색 */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-gray-700 mb-2">카테고리 필터</label>
            <select
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="w-full p-2 border rounded"
            >
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
            <label className="block text-gray-700 mb-2">난이도 필터</label>
            <select
              onChange={(e) => setDifficultyFilter(e.target.value)}
              className="w-full p-2 border rounded"
            >
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
            <label className="block text-gray-700 mb-2">검색</label>
            <input
              type="text"
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="퀘스트 제목 검색..."
            />
          </div>
        </div>
      </div>

      {/* 퀘스트 테이블 */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">상태</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">제목</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">카테고리</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">난이도</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">카르마</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">진행률</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">작업</th>
            </tr>
          </thead>
          <tbody>
            {filteredQuests.map(quest => (
              <tr key={quest.id}>
                <td>{quest.status}</td>
                <td>{quest.title}</td>
                <td>{quest.category}</td>
                <td>{quest.difficulty}</td>
                <td>{quest.karma}</td>
                <td>{quest.progress}%</td>
                <td>
                  {quest.status === "진행중" && (
                    <button onClick={() => completeQuest(quest.id)} className="text-blue-600">완료하기</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default QuestList;
