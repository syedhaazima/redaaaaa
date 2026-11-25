import { createContext, useContext } from 'react';

/* Shared UI actions: project drawer, menu overlay, preselected enquiry sector, map location to show. */
export const UIContext = createContext(null);
export const useUI = () => useContext(UIContext);
