import * as React from 'react';

export interface IFileProps {
    name: string;
    extension: string;
    path: string;
}

export class File extends React.Component<IFileProps> {
    render() {
        const {name, extension} = this.props;
        return <div>{name}.{extension}</div>
    }
}