import React, { useState } from 'react';

import MemberForm from './components/MemberForm';
import Members from './components/Members';
import './App.css';

function App() {
  const [ members, setMembers ] = useState([
    {
      id: 1,
      name: 'Rashmi Poddar',
      email: 'poddar.rashmi@gmail.com',
      role: 'Full Stack Developer'
    }
  ]);

  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    };
    setMembers([...members, newMember])
  }

  return (
    <div className="App">
      <h1>Team Members</h1>
      <MemberForm addNewMember={addNewMember}/>
      <Members members={members}/> 
    </div>
  );
}

export default App;
