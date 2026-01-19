import { NextResponse } from 'next/server';

/**
 * Standard API error codes
 */
export const ErrorCodes = {
  // Client errors (4xx)
  BAD_REQUEST: 'BAD_REQUEST',
  UNAUTHORIZED: 'UNAUTHORIZED',
  FORBIDDEN: 'FORBIDDEN',
  NOT_FOUND: 'NOT_FOUND',
  CONFLICT: 'CONFLICT',
  VALIDATION_ERROR: 'VALIDATION_ERROR',
  BUSINESS_LOGIC_ERROR: 'BUSINESS_LOGIC_ERROR',

  // Server errors (5xx)
  INTERNAL_ERROR: 'INTERNAL_ERROR',
  SERVICE_UNAVAILABLE: 'SERVICE_UNAVAILABLE',
} as const;

export type ErrorCode = (typeof ErrorCodes)[keyof typeof ErrorCodes];

interface ApiErrorOptions {
  code: ErrorCode;
  message: string;
  details?: Record<string, unknown>;
}

/**
 * Standard API error response structure
 */
export interface ApiErrorResponse {
  error: {
    code: ErrorCode;
    message: string;
    details?: Record<string, unknown>;
  };
}

/**
 * Map error codes to HTTP status codes
 */
const statusCodeMap: Record<ErrorCode, number> = {
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  VALIDATION_ERROR: 422,
  BUSINESS_LOGIC_ERROR: 422,
  INTERNAL_ERROR: 500,
  SERVICE_UNAVAILABLE: 503,
};

/**
 * Create a standardized error response
 */
export function apiError(options: ApiErrorOptions): NextResponse<ApiErrorResponse> {
  const { code, message, details } = options;
  const status = statusCodeMap[code];

  const response: ApiErrorResponse = {
    error: {
      code,
      message,
      ...(details && { details }),
    },
  };

  return NextResponse.json(response, { status });
}

/**
 * Convenience methods for common errors
 */
export const ApiErrors = {
  badRequest: (message: string, details?: Record<string, unknown>) =>
    apiError({ code: ErrorCodes.BAD_REQUEST, message, details }),

  unauthorized: (message: string = 'Authentication required') =>
    apiError({ code: ErrorCodes.UNAUTHORIZED, message }),

  forbidden: (message: string = 'Access denied') =>
    apiError({ code: ErrorCodes.FORBIDDEN, message }),

  notFound: (resource: string = 'Resource') =>
    apiError({ code: ErrorCodes.NOT_FOUND, message: `${resource} not found` }),

  conflict: (message: string, details?: Record<string, unknown>) =>
    apiError({ code: ErrorCodes.CONFLICT, message, details }),

  validationError: (message: string, details?: Record<string, unknown>) =>
    apiError({ code: ErrorCodes.VALIDATION_ERROR, message, details }),

  businessError: (message: string, details?: Record<string, unknown>) =>
    apiError({ code: ErrorCodes.BUSINESS_LOGIC_ERROR, message, details }),

  internalError: (message: string = 'An unexpected error occurred') =>
    apiError({ code: ErrorCodes.INTERNAL_ERROR, message }),

  serviceUnavailable: (message: string = 'Service temporarily unavailable') =>
    apiError({ code: ErrorCodes.SERVICE_UNAVAILABLE, message }),
};

/**
 * Handle errors consistently and log them
 */
export function handleApiError(error: unknown, context: string): NextResponse<ApiErrorResponse> {
  console.error(`API Error in ${context}:`, error);

  // Check for Prisma errors
  if (error instanceof Error) {
    // Handle unique constraint violations
    if (error.message.includes('Unique constraint')) {
      return ApiErrors.conflict('A record with this data already exists');
    }

    // Handle foreign key constraint violations
    if (error.message.includes('Foreign key constraint')) {
      return ApiErrors.badRequest('Referenced record does not exist');
    }
  }

  return ApiErrors.internalError();
}
