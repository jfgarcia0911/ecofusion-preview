/**
 * Pagination utilities for API responses
 */

export interface PaginationParams {
  page: number;
  pageSize: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    pageSize: number;
    total: number;
    totalPages: number;
    hasMore: boolean;
  };
}

/**
 * Parse pagination parameters from URL search params
 * Defaults: page=1, pageSize=20
 */
export function parsePaginationParams(url: string): PaginationParams {
  const { searchParams } = new URL(url);

  const page = Math.max(1, parseInt(searchParams.get('page') || '1', 10));
  const pageSize = Math.min(100, Math.max(1, parseInt(searchParams.get('pageSize') || '20', 10)));

  return { page, pageSize };
}

/**
 * Calculate skip value for Prisma queries
 */
export function getSkip(params: PaginationParams): number {
  return (params.page - 1) * params.pageSize;
}

/**
 * Create a paginated response
 */
export function createPaginatedResponse<T>(
  data: T[],
  total: number,
  params: PaginationParams
): PaginatedResponse<T> {
  const totalPages = Math.ceil(total / params.pageSize);

  return {
    data,
    pagination: {
      page: params.page,
      pageSize: params.pageSize,
      total,
      totalPages,
      hasMore: params.page < totalPages,
    },
  };
}

/**
 * Helper to apply pagination to Prisma queries
 * Returns { skip, take } for use in findMany
 */
export function getPrismaParams(params: PaginationParams) {
  return {
    skip: getSkip(params),
    take: params.pageSize,
  };
}
