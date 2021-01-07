import { StringKeyValue } from '../common/StringKeyValue';
import { RuntimeStatusCode } from '../enums/RuntimeStatusCode';
export declare class ComponentConfiguration {
    id: string;
    component: string;
    dockerImage: string;
    variables: StringKeyValue[];
    mounts: StringKeyValue[];
    status: RuntimeStatusCode;
    constructor(id?: string, component?: string, dockerImage?: string, variables?: StringKeyValue[], mounts?: StringKeyValue[], status?: RuntimeStatusCode);
}
