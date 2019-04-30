import React from 'react';
import './App.css';

interface IFile {
    name: string;
    extension: string;
    path: string;
}

interface IFolder {
    name: string;
    path: string;
    folders: IFolder[];
    files: IFile[];
}

const App: React.FC = () => {
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
