import React, { useState } from 'react';
import { UserManager, User } from '../shared/utils';

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  
  const userManager = new UserManager();

  const handleAddUser = () => {
    if (name && email) {
      const newUser: User = {
        id: Date.now(),
        name,
        email
      };
      
      userManager.addUser(newUser);
      setUsers(userManager.getAllUsers());
      setName('');
      setEmail('');
    }
  };

  return (
    <div>
      <h1>User Manager</h1>
      <div>
        <input 
          type="text" 
          placeholder="Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <button onClick={handleAddUser}>Add User</button>
      </div>
      
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;