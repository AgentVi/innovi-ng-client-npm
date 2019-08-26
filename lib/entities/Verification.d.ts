import { BaseEntity } from '../entities/BaseEntity';
export declare class Verification extends BaseEntity {
    code: string;
    userId: string;
    email: string;
    mobile: string;
    sent: number;
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
}
