// All routes that don't require authentication
export const publicRoutes: string[] = [
    // Add public routes here
]

// All routes that require authentication
export const protectedRoutes: string[] = [
    // Add protected routes here
    "/",
]

export const authRoutes: string[] = [
    "/auth/signin",
]

// Routes that should be accessible only to unauthenticated users
export const apiAuthPrefix: string = "/api/auth";

export const DEFAULT_LOGIN_REDIRECT = "/";