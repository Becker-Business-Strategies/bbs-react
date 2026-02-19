// src/auth/RequireAuth.tsx
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth"; // your auth hook/context

type Props = {
  children: React.ReactNode;
};

export function RequireAuth({ children }: Props) {
  const { isLoggedIn } = useAuth();
  const location = useLocation();

  if (!isLoggedIn) {
    return (
      <Navigate
        to="/login"
        replace
        state={{ from: location.pathname || "/clients" }}
      />
    );
  }

  return <>{children}</>;
}
