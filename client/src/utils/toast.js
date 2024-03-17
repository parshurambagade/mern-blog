import { toast } from "react-toastify";

export const notifySuccess = (message) => toast(message, {
    type: "success"
});

export const notifyFailure = (message) => toast(message, {
    type: "error"
});