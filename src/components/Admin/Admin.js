import React, { useState } from 'react';
import './Admin.css';

function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [projects, setProjects] = useState([]);
  const [stacks, setStacks] = useState([]);
  const [newProject, setNewProject] = useState({ title: '', description: '', link: '', image: null });
  const [newStack, setNewStack] = useState('');

  // Handle login
  const handleLogin = (e) => {
    e.preventDefault();
    const adminUser = process.env.REACT_APP_ADMIN_USER;
    const adminPassword = process.env.REACT_APP_ADMIN_PASSWORD;
    if (userId === adminUser && password === adminPassword) {
      setIsAuthenticated(true);
    } else {
      alert('Invalid credentials');
    }
  };

  // Handle project addition
  const handleAddProject = (e) => {
    e.preventDefault();
    if (newProject.title && newProject.description) {
      setProjects([...projects, { ...newProject, id: Date.now() }]);
      setNewProject({ title: '', description: '', link: '', image: null });
    } else {
      alert('Title and description are required');
    }
  };

  // Handle project removal
  const handleRemoveProject = (id) => {
    setProjects(projects.filter((project) => project.id !== id));
  };

  // Handle stack addition
  const handleAddStack = (e) => {
    e.preventDefault();
    if (newStack) {
      setStacks([...stacks, { name: newStack, id: Date.now() }]);
      setNewStack('');
    } else {
      alert('Stack name is required');
    }
  };

  // Handle stack removal
  const handleRemoveStack = (id) => {
    setStacks(stacks.filter((stack) => stack.id !== id));
  };

  // Handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewProject({ ...newProject, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="admin-login">
        <h2>Admin Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="User ID"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }

  return (
    <div className="admin-panel">
      <h2>Admin Panel</h2>
      <button onClick={() => setIsAuthenticated(false)}>Logout</button>

      <h3>Manage Projects</h3>
      <form onSubmit={handleAddProject}>
        <input
          type="text"
          placeholder="Project Title"
          value={newProject.title}
          onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
        />
        <textarea
          placeholder="Project Description"
          value={newProject.description}
          onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
        />
        <input
          type="url"
          placeholder="Project Link"
          value={newProject.link}
          onChange={(e) => setNewProject({ ...newProject, link: e.target.value })}
        />
        <input type="file" accept="image/*" onChange={handleImageChange} />
        <button type="submit">Add Project</button>
      </form>

      <div className="project-list">
        {projects.map((project) => (
          <div key={project.id} className="project-item">
            <img src={project.image || 'placeholder.jpg'} alt={project.title} />
            <h4>{project.title}</h4>
            <p>{project.description}</p>
            <a href={project.link}>{project.link}</a>
            <button onClick={() => handleRemoveProject(project.id)}>Remove</button>
          </div>
        ))}
      </div>

      <h3>Manage Tech Stacks</h3>
      <form onSubmit={handleAddStack}>
        <input
          type="text"
          placeholder="Stack Name"
          value={newStack}
          onChange={(e) => setNewStack(e.target.value)}
        />
        <button type="submit">Add Stack</button>
      </form>

      <div className="stack-list">
        {stacks.map((stack) => (
          <div key={stack.id} className="stack-item">
            <span>{stack.name}</span>
            <button onClick={() => handleRemoveStack(stack.id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Admin;