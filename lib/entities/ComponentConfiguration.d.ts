import { StringKeyValue } from '../common/StringKeyValue';
export declare class ComponentConfiguration {
    id: string;
    dockerImage: string;
    variables: StringKeyValue[];
    constructor(id?: string, dockerImage?: string, variables?: StringKeyValue[]);
}
