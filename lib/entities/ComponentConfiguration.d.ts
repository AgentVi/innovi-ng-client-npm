import { RuntimeStatusCode } from '../enums/RuntimeStatusCode';
import { StringKeyValue } from '../common/StringKeyValue';
export declare class ComponentConfiguration {
    id: string;
    component: string;
    dockerImage: string;
    variables: StringKeyValue[];
    mounts: StringKeyValue[];
    status: RuntimeStatusCode;
    constructor(id?: string, component?: string, dockerImage?: string, variables?: StringKeyValue[], mounts?: StringKeyValue[], status?: RuntimeStatusCode);
}
