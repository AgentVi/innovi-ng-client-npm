import { StringKeyValue } from '../common/StringKeyValue';
export declare class ComponentVariables {
    component: string;
    variables: StringKeyValue[];
    mounts: StringKeyValue[];
    constructor(component?: string, variables?: StringKeyValue[], mounts?: StringKeyValue[]);
}
