import { NOTIFICATION_STORAGE_KEY } from "@/hooks/useTelegramVisitNotification";
import { Navigate } from "react-router";

export default function ClearOwnerRoute() {
    localStorage.removeItem(NOTIFICATION_STORAGE_KEY)

    return <Navigate
        to="/"
        replace
        state={{ from: location.pathname }}
    />
}
