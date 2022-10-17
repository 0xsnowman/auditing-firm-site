import { CHANGE_AUDIT_MODAL_OPENED } from "redux/constants/requestAuditModal"

const INITIAL = {
    auditModalOpened: false
};

export const RequestAuditModalReducer = (state = INITIAL, action: any) => {
    switch (action.type) {
        case CHANGE_AUDIT_MODAL_OPENED: {
            return {
                auditModalOpened: action.data
            }
        }
        default:
            return state;
    }
}