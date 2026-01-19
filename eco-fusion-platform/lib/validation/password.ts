// Common passwords list (top 100 most common)
const COMMON_PASSWORDS = new Set([
  'password', '123456', '12345678', 'qwerty', 'abc123', 'monkey', '1234567',
  'letmein', 'trustno1', 'dragon', 'baseball', 'iloveyou', 'master', 'sunshine',
  'ashley', 'bailey', 'passw0rd', 'shadow', '123123', '654321', 'superman',
  'qazwsx', 'michael', 'football', 'password1', 'password123', 'batman', 'login',
  'admin', 'welcome', 'hello', 'charlie', 'donald', 'loveme', 'princess',
  'adobe123', 'photoshop', 'qwertyuiop', 'starwars', 'passpass', 'password2',
  '000000', '111111', '112233', '121212', '123321', '123456789', '1234567890',
  'password12', 'password!', 'pa55word', 'p@ssword', 'p@ssw0rd', 'letmein1',
]);

export interface PasswordValidationResult {
  isValid: boolean;
  errors: string[];
  strength: 'weak' | 'fair' | 'good' | 'strong';
  score: number; // 0-100
}

export interface PasswordRequirements {
  minLength: number;
  requireUppercase: boolean;
  requireLowercase: boolean;
  requireNumber: boolean;
  requireSpecial: boolean;
  blockCommon: boolean;
}

const DEFAULT_REQUIREMENTS: PasswordRequirements = {
  minLength: 10,
  requireUppercase: true,
  requireLowercase: true,
  requireNumber: true,
  requireSpecial: true,
  blockCommon: true,
};

/**
 * Validates a password against security requirements
 */
export function validatePassword(
  password: string,
  requirements: Partial<PasswordRequirements> = {}
): PasswordValidationResult {
  const config = { ...DEFAULT_REQUIREMENTS, ...requirements };
  const errors: string[] = [];
  let score = 0;

  // Check minimum length
  if (password.length < config.minLength) {
    errors.push(`Password must be at least ${config.minLength} characters`);
  } else {
    score += 20;
    // Bonus for longer passwords
    if (password.length >= 12) score += 5;
    if (password.length >= 14) score += 5;
    if (password.length >= 16) score += 5;
  }

  // Check uppercase
  if (config.requireUppercase && !/[A-Z]/.test(password)) {
    errors.push('Password must contain at least one uppercase letter');
  } else if (/[A-Z]/.test(password)) {
    score += 15;
  }

  // Check lowercase
  if (config.requireLowercase && !/[a-z]/.test(password)) {
    errors.push('Password must contain at least one lowercase letter');
  } else if (/[a-z]/.test(password)) {
    score += 15;
  }

  // Check numbers
  if (config.requireNumber && !/\d/.test(password)) {
    errors.push('Password must contain at least one number');
  } else if (/\d/.test(password)) {
    score += 15;
  }

  // Check special characters
  if (config.requireSpecial && !/[!@#$%^&*(),.?":{}|<>_\-+=[\]\\/'`;~]/.test(password)) {
    errors.push('Password must contain at least one special character (!@#$%^&*(),.?":{}|<>)');
  } else if (/[!@#$%^&*(),.?":{}|<>_\-+=[\]\\/'`;~]/.test(password)) {
    score += 15;
  }

  // Check for common passwords
  if (config.blockCommon) {
    const lowerPassword = password.toLowerCase();
    if (COMMON_PASSWORDS.has(lowerPassword)) {
      errors.push('Password is too common. Please choose a more unique password');
      score = Math.max(0, score - 30);
    }

    // Check for simple patterns
    if (/^(.)\1+$/.test(password)) {
      errors.push('Password cannot be all the same character');
      score = Math.max(0, score - 20);
    }

    if (/^(012|123|234|345|456|567|678|789|890|abc|bcd|cde|def|efg|fgh|ghi|hij|ijk|jkl|klm|lmn|mno|nop|opq|pqr|qrs|rst|stu|tuv|uvw|vwx|wxy|xyz)+$/i.test(password)) {
      errors.push('Password cannot be a simple sequence');
      score = Math.max(0, score - 20);
    }
  }

  // Bonus for mix of character types
  const charTypes = [
    /[A-Z]/.test(password),
    /[a-z]/.test(password),
    /\d/.test(password),
    /[!@#$%^&*(),.?":{}|<>_\-+=[\]\\/'`;~]/.test(password),
  ].filter(Boolean).length;

  if (charTypes >= 4) score += 15;
  else if (charTypes >= 3) score += 10;

  // Cap score at 100
  score = Math.min(100, Math.max(0, score));

  // Determine strength
  let strength: 'weak' | 'fair' | 'good' | 'strong';
  if (score >= 80) strength = 'strong';
  else if (score >= 60) strength = 'good';
  else if (score >= 40) strength = 'fair';
  else strength = 'weak';

  return {
    isValid: errors.length === 0,
    errors,
    strength,
    score,
  };
}

/**
 * Returns the password requirements for display
 */
export function getPasswordRequirements(requirements: Partial<PasswordRequirements> = {}): string[] {
  const config = { ...DEFAULT_REQUIREMENTS, ...requirements };
  const reqs: string[] = [];

  reqs.push(`At least ${config.minLength} characters`);
  if (config.requireUppercase) reqs.push('One uppercase letter (A-Z)');
  if (config.requireLowercase) reqs.push('One lowercase letter (a-z)');
  if (config.requireNumber) reqs.push('One number (0-9)');
  if (config.requireSpecial) reqs.push('One special character (!@#$%^&*)');
  if (config.blockCommon) reqs.push('Not a commonly used password');

  return reqs;
}

/**
 * Quick check for client-side validation (returns first error only)
 */
export function quickValidate(password: string): string | null {
  const result = validatePassword(password);
  return result.errors[0] || null;
}
