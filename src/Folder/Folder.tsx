import * as React from 'react';
import { IFileProps } from '../File/File';

export interface IFolderProps {
    name: string;
    path: string;
    folders: IFolderProps[];
    files: IFileProps[];
}

export class Folder extends React.Component<IFolderProps> {
    render() {
        const {name} = this.props;
        return <div>{name}</div>
    }
}