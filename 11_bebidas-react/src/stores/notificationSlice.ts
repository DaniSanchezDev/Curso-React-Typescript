import type { StateCreator } from 'zustand'
import type { FavoritesSliceType } from './favoritesSlice'


export type Notification =  {
    text: string
    error: boolean
    show: boolean
}

export type NotificationSliceType = {
    notification: Notification
    showNotification: (payload: Pick<Notification, 'text' | 'error'> ) => void
    hideNotification: () => void
}



export const createNotificationSlice : StateCreator<NotificationSliceType & FavoritesSliceType, [], [], NotificationSliceType> = (set, get) => {
    let hideTimeout: ReturnType<typeof setTimeout> | null = null;

    const clearHideTimeout = () => {
        if (hideTimeout) {
            clearTimeout(hideTimeout);
            hideTimeout = null;
        }
    };

    return {
        notification: {
            text: '',
            error: false,
            show: false
        },
        showNotification: (payload) => {
            // Limpiar cualquier timeout existente
            clearHideTimeout();

            set({
                notification: {
                    text: payload.text,
                    error: payload.error,
                    show: true
                }
            });

            // Configurar nuevo timeout
            hideTimeout = setTimeout(() => {
                get().hideNotification();
            }, 3000);
        },
        hideNotification: () => {
            clearHideTimeout();
            set({
                notification: {
                    text: '',
                    error: false,
                    show: false
                }
            });
        }
    }
}