import React from 'react';
import './App.css';
import { IFileProps, File } from './File/File';
import { IFolderProps, Folder } from './Folder/Folder';

type DiskObject = IFileProps | IFolderProps;

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
            'secrets': {
                name: 'secrets',
                files: [],
                folders: [],
                path: 'secrets'
            },
        }
    }

    render() {
        const {disk} = this.state;
        const objects: DiskObject[] = Object.values(disk);
        return (
            <div className="App">
                {objects.map(object => {
                    // decide if this object is a file by checking if it has an extension
                    if ((object as any).extension) {
                        // this object has an extension, so we use a new variable of type IFileProps
                        const file = object as IFileProps;
                        return <File {...file}/>;
                    } else {
                        const folder = object as IFolderProps;
                        // {...folder} is equivalent to writing name={folder.name} path={folder.path} and so on....
                        return <Folder {...folder} />;
                    }
                })}
            </div>
        );
    }
}