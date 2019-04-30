import React from 'react';
import './App.css';
import { IFileProps, File } from './File/File';
import { IFolderProps, Folder } from './Folder/Folder';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFolder, faFileAlt } from '@fortawesome/free-solid-svg-icons'
library.add(faFolder, faFileAlt)

type Omit<T,K> = Pick<T, Exclude<keyof T, K>>;

type DiskObject = IFileProps | Omit<IFolderProps, 'onEnter'>;

interface IAppState {
    currentPath: string[];
    // Record<keyType, valueType> represents the type of objects where
    // all the keys have to be of type keyType, and all values have to be of type ValueType
    disk: Record<string, DiskObject>
}


export class App extends React.Component<any, IAppState> {
    state: IAppState = {
        currentPath: [],
        disk: {
            'banana': {
                name: 'banana',
                extension: 'jpg',
                path: 'banana'
            },
            'finance-report': {
                name: 'finance-report',
                extension: 'xlsx',
                path: 'finance-report'
            },
            'best-song': {
                name: 'best-song',
                extension: 'mp3',
                path: 'best-song'
            },
            'secrets': {
                name: 'secrets',
                files: [],
                folders: [],
                path: 'secrets',
            },
            'zohars-passwords': {
                name: 'zohars-passwords',
                files: [],
                folders: [],
                path: 'zohars-passwords'
            },
        }
    }

    render() {
        const { disk } = this.state;
        const objects: DiskObject[] = Object.values(disk);
        return (
            <div className="App">
                <div className="view">
                    {objects.map(object => {
                        // decide if this object is a file by checking if it has an extension
                        if ((object as any).extension) {
                            // this object has an extension, so we use a new variable of type IFileProps
                            // {...file} is equivalent to writing name={file.name} path={file.path} and so on....
                            const file = object as IFileProps;
                            return <File key={file.name} {...file} />;
                        } else {
                            const folder = object as Omit<IFolderProps, 'onEnter'>;
                            // {...folder} is equivalent to writing name={folder.name} path={folder.path} and so on....
                            return <Folder key={folder.name} {...folder} />;
                        }
                    })}
                </div>
            </div>
        );
    }
}