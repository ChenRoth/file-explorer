import React from 'react';
import './App.css';
import { IFileProps, File } from './File/File';


interface IFolder {
    name: string;
    path: string;
    folders: IFolder[];
    files: IFileProps[];
}

type DiskObject = IFileProps | IFolder;

interface IAppState {
    currentPath: string;
    // Record<keyType, valueType> represents the type of objects where
    // all the keys have to be of type keyType, and all values have to be of type ValueType
    disk: Record<string, DiskObject>
}


export class App extends React.Component<any, IAppState> {
    state: IAppState = {
        currentPath: '',
        disk: {
            'banana': {
                name: 'banana',
                extension: 'jpg',
                path: 'banana'
            },
        }
    }

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