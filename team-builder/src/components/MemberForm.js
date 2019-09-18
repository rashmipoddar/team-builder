import React, { useState } from 'react';

const MemberForm = (props) => {
  const [member, setMember] = useState({name: '', email: '', role: ''})
  console.log('The member is ', member);

  const handleSubmit = (event) => {
    event.preventDefault()
    // console.log(event);
    // console.log('Form Submitted');
    props.addNewMember(member);
    setMember({name: '', email: '', role: ''})

  }

  const handleChange = (event) => {
    // console.log(event)
    setMember({...member, [event.target.name] : event.target.value });
    // console.log(member);
  }

  return (
    <form onSubmit={handleSubmit} >
      <label htmlFor='name'>Name</label>
      <input
        type='text'
        id='name'
        name='name'
        value={member.name}
        onChange={handleChange}
      />
      <label htmlFor='email'>Email</label>
      <input
        type='text'
        id='email'
        name='email'
        value={member.email}
        onChange={handleChange}
      />
      <label htmlFor='role'>Role</label>
      <input
        type='text'
        id='role'
        name='role'
        value={member.role}
        onChange={handleChange}
      />
      <button type='submit'>Submit</button>
    </form>  
  )
}

export default MemberForm;