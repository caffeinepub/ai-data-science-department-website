import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface ContactMessage {
    name: string;
    email: string;
    message: string;
}
export interface ContactInfo {
    linkedin: string;
    email: string;
    github: string;
}
export interface backendInterface {
    getContactInfo(): Promise<ContactInfo>;
    getContactMessages(): Promise<Array<ContactMessage>>;
    submitContactMessage(name: string, email: string, message: string): Promise<string>;
}
