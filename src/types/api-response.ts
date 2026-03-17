export interface ApiResponse {
    success: boolean;
    message: string;
    data?: any;
}

export interface SignUpApiResponse {
    success: boolean;
    message: string;
    userId?: string; // Include userId for email verification context
}