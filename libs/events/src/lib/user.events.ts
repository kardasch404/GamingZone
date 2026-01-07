export interface UserRegisteredEvent {
  userId: string;
  email: string;
  name: string;
  timestamp: Date;
}

export interface UserVerifiedEvent {
  userId: string;
  email: string;
  timestamp: Date;
}

export interface PasswordResetEvent {
  userId: string;
  email: string;
  resetToken: string;
  timestamp: Date;
}
