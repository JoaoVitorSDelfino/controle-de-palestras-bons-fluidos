import React, { createContext, useContext, useState, useEffect } from 'react';

// Contexto e Hook
export const RoleContext = createContext()

export function useRole() {
  return useContext(RoleContext)
}

export function RoleProvider({ children }) {
  const [role, setRole] = useState(() => {
    // Recuperar o estado do localStorage se existir
    const savedRole = localStorage.getItem('role')
    return savedRole || ''
  });

  useEffect(() => {
    // Salvar o estado no localStorage sempre que mudar
    console.log(role)
    localStorage.setItem('role', role);
  }, [role]);

  const value = { role, setRole };

  return (
    <RoleContext.Provider value={value}>
      {children}
    </RoleContext.Provider>
  );
}