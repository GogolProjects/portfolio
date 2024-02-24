import * as React from 'react';

interface EmailTemplateProps {
  message: string,
  email: string
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({
  email, message
}) => (
  <div>
    <h1>Welcome, You have new message from Your Portfolio from {email}</h1>
    <p>{message}</p>
  </div>
);
export default EmailTemplate