import { Login } from '@/app/components/login-form';

export default function LoginPage() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-primary/10 via-base-100 to-secondary/10 flex items-center justify-center p-4'>
      <div className='w-full max-w-md'>
        <Login />
      </div>
    </div>
  );
}
