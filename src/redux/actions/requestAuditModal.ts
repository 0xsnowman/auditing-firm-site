import { CHANGE_AUDIT_MODAL_OPENED } from "redux/constants/requestAuditModal";

export const changeAuditModalOpened = (auditModalOpened: boolean) => {
    console.log("auditModalOpened,", auditModalOpened)
    return {
        type: CHANGE_AUDIT_MODAL_OPENED,
        data: auditModalOpened
    };
};