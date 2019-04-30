import React from 'react';
import './App.css';
import { IFileProps, File } from './File/File';
import { IFolderProps, Folder } from './Folder/Folder';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFolder, faFileAlt } from '@fortawesome/free-solid-svg-icons'
library.add(faFolder, faFileAlt)

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

// we omit the 'onEnter' field from disk objects because we don't want to 
// repeat the onEnter definition for each object
// so we use Omit<type, fieldName> to get the whole type excluding a specific fieldName
export type DiskObject = IFileProps | Omit<IFolderProps, 'onEnter'>;

interface IAppState {
    currentPath: string[];
    // Record<keyType, valueType> represents the type of objects where
    // all the keys have to be of type keyType, and all values have to be of type ValueType
    disk: Omit<IFolderProps, 'onEnter'>;
}


export class App extends React.Component<any, IAppState> {
    state: IAppState = {
        currentPath: [],
        disk: {
            name: '/',
            children: {
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
                    children: {
                        'recipes': {
                            name: 'recipes',
                            extension: 'xlsx',
                            path: 'recipes'
                        }
                    },
                    path: 'secrets',
                },
                'zohars-passwords': {
                    name: 'zohars-passwords',
                    children: {},
                    path: 'zohars-passwords'
                },
            }
        }
    }

    render() {
        const { disk, currentPath } = this.state;
        let currentChildren = disk.children;
        currentPath.forEach(folderName => {
            currentChildren = (currentChildren[folderName] as IFolderProps).children;
        });

        const objects = Object.values(currentChildren);
        return (
            <div className="App">
                <div>current path: {currentPath.join(' / ')}</div>
                <div className="view">
                    <Folder name=".." onEnter={this.onExit} children={{}} />
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
                            return <Folder key={folder.name} {...folder} onEnter={this.onEnter} />;
                        }
                    })}
                </div>
            </div>
        );
    }

    onEnter = (name: string) => {
        this.setState({
            currentPath: this.state.currentPath.concat(name),
        });
    }

    onExit = () => {
        const {currentPath} = this.state;
        this.setState({
            currentPath: currentPath.slice(0, currentPath.length - 1),
        });
    }
}