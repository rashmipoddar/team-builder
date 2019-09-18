import React from 'react';

const Members = (props) => {
  return (  
    <>
    {props.members.map(member => (
      <div key={member.id}>
        <h1>Name: {member.name}</h1>
        <h1>Email: {member.email}</h1>
        <h1>Role: {member.role}</h1>
      </div>
      )
    )}
    </>
  )
}

export default Members;