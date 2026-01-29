import React from 'react';
import './App.css';

// Mock data for the notices
const notices = [
  {
    id: 1,
    category: 'Student Council',
    title: 'Cultural Festival Preparation',
    content: 'All class representatives must attend the meeting in Room 3-B today at 16:00.',
    color: '#ffeb3b', // Yellow sticky note vibe
    date: '2026-01-29',
  },
  {
    id: 2,
    category: 'Library',
    title: 'Overdue Books',
    content: 'Please return all borrowed books before the winter break begins. The library will be closed from Friday.',
    color: '#ffffff', // White paper
    date: '2026-01-28',
  },
  {
    id: 3,
    category: 'Sports',
    title: 'Basketball Tryouts',
    content: 'Boys & Girls teams. Gym A. Bring your own shoes and water bottle.',
    color: '#ffcdd2', // Pinkish paper
    date: '2026-02-01',
  },
  {
    id: 4,
    category: 'Cafeteria',
    title: 'Daily Menu Update',
    content: 'Today\'s special: Curry Rice & Melon Pan. 500 Yen set available.',
    color: '#e0f7fa', // Light blue
    date: '2026-01-29',
  },
  {
    id: 5,
    category: 'Lost & Found',
    title: 'Red Scarf Found',
    content: 'A red wool scarf was found near the bike racks. Please claim it at the staff room.',
    color: '#fff9c4',
    date: '2026-01-27',
  }
];

const NoticeCard = ({ notice }) => {
  return (
    <div className="notice-card" style={{ backgroundColor: notice.color }}>
      <div className="pin"></div> {/* The visual "pin" */}
      <span className="notice-category">{notice.category}</span>
      <h3 className="notice-title">{notice.title}</h3>
      <p className="notice-content">{notice.content}</p>
      <div className="notice-footer">
        <span className="notice-date">{notice.date}</span>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <div className="board-container">
      {/* Wooden Frame Wrapper */}
      <div className="wood-frame">
        
        {/* Chalkboard Header */}
        <div className="header-plate">
          <h1>掲示板</h1> {/* Keijiban (Notice Board) */}
          <h2>SCHOOL NOTICES</h2>
        </div>

        {/* Corkboard Area */}
        <div className="cork-area">
          {notices.map((notice) => (
            <NoticeCard key={notice.id} notice={notice} />
          ))}
        </div>
        
      </div>
    </div>
  );
}