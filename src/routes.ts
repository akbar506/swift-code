// All routes that don't require authentication
export const publicRoutes: string[] = [
    // Add public routes here
    "/api/sign-up",
    "/api/verify-code",
    "/",
]

// All routes that require authentication
export const protectedRoutes: string[] = [
    // Add protected routes here
    
]

export const authRoutes: string[] = [
    "/auth/sign-in",
    "/auth/sign-up",
    "/auth/verify-email"
]

// Routes that should be accessible only to unauthenticated users
export const apiAuthPrefix: string = "/api/auth";

export const DEFAULT_LOGIN_REDIRECT = "/dashboard";