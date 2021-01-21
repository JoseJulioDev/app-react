import React, {useState, useEffect} from 'react';

import api from './services/api';

import './App.css';

import Header from './components/Header';

function App() {

    // first variable and the array itself 
    // second variable is the function that will update the array
    const [projects, setProjects] = useState([]);

    useEffect(() => {
      api.get('projects').then(response => {
        setProjects(response.data);
      });
    }, []);

    async function handleAddProject() {
      
      const response = await api.post('projects', {
        title: `Novo Projeto ${Date.now()}`,
        owner: 'José Julio'
      });
  
      const project = response.data;
  
      setProjects([...projects, project]);
    }

    async function handleUpdate(id) {
      const response = await api.put(`projects/${id}`, {
        title: `Projeto Alterado ${Date.now()}`,
        owner: 'José Julio'
      });

      const updateProject = response.data;

      const projectsUpdate = projects.map(project => {
        if(project.id === id) {
          return updateProject;
        }else {
          return project;
        }
      });

      setProjects(projectsUpdate);

    }

    async function handleRemoveProject(id) {
      await api.delete(`projects/${id}`);

      setProjects(projects.filter(
        project => project.id !== id
      ));

    }

    return (
        <>
          <Header title="Projects" />
          
          <ul>
            {projects.map(project => 
              <li key={project.id}>
                {project.title}
                <button onClick={() => handleUpdate(project.id)} >Alterar</button>
                <button onClick={() => handleRemoveProject(project.id)}>Remover</button>
              </li>)}
          </ul>

          <button type="button" onClick={handleAddProject} >Adicionar projeto</button>
        </>
    );
}

export default App;