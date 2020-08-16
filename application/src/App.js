import React from 'react';
import NavigationBar from './components/NavigationBar';
import ProfileIntro from './components/ProfileIntro';
import SkillSet from './components/SkillSet';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <ProfileIntro />
      <SkillSet />
    </div>
  );
}

export default App;
