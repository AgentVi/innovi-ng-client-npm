import { StringKeyValue } from '../common/StringKeyValue';
export declare class ComponentConfiguration {
    id: string;
    component: string;
    dockerImage: string;
    variables: StringKeyValue[];
    constructor(id?: string, component?: string, dockerImage?: string, variables?: StringKeyValue[]);
}
