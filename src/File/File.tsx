import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface IFileProps {
    name: string;
    extension: string;
    path: string;
}

export class File extends React.Component<IFileProps> {
    render() {
        const { name, extension } = this.props;
        return (
            <div className="file">
                <FontAwesomeIcon icon="file-alt" size="2x"/>
                {name}.{extension}
            </div>
        );
    }
}