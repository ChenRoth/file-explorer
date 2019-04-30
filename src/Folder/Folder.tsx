import * as React from 'react';
import { IFileProps } from '../File/File';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export interface IFolderProps {
    name: string;
    path: string;
    folders: IFolderProps[];
    files: IFileProps[];
}

export class Folder extends React.Component<IFolderProps> {
    render() {
        const { name } = this.props;
        return (
            <div className="folder">
                <FontAwesomeIcon icon="folder" color="orange" size="2x"/>
                {name}
            </div>
        );
    }
}