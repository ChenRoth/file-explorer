import * as React from 'react';
import { IFileProps } from '../File/File';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export interface IFolderProps {
    name: string;
    path: string;
    folders: IFolderProps[];
    files: IFileProps[];
    onEnter: (name: string) => void;
}

export class Folder extends React.Component<IFolderProps> {
    render() {
        const { name } = this.props;
        return (
            <button className="folder" onDoubleClick={this.handleEnterEvent}>
                <FontAwesomeIcon icon="folder" color="orange" size="2x" />
                <div>{name}</div>
            </button>
        );
    }

    handleEnterEvent = () => {
        const { onEnter, name } = this.props;
        onEnter(name);
    }
}