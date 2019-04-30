import React from 'react';
import './App.css';
import { IFileProps, File } from './File/File';


interface IFolder {
    name: string;
    path: string;
    folders: IFolder[];
    files: IFileProps[];
}

export class App extends React.Component {
    render() {
        return (
            <div className="App">
                <File name="banana" extension="jpg" path="C:\banana.jpg" />
                <File name="README" extension="txt" path="C:\README.txt" />
                <File name="secret-code" extension="zip" path="C:\secret-code.zip" />
            </div>
        );
    }
}