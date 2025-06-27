import Link from 'next/link';

const Home = () => {
  return (
    <div className='min-h-screen bg-base-100'>
      {/* Navigation */}
      <div className='navbar bg-base-100 shadow-sm'>
        <div className='navbar-start'>
          <div className='dropdown'>
            <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
              <svg
                className='w-5 h-5'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
            >
              <li>
                <a>Features</a>
              </li>
              <li>
                <a>Community</a>
              </li>
              <li>
                <a>About</a>
              </li>
            </ul>
          </div>
          <Link href='/' className='btn btn-ghost text-xl'>
            Nash Festival Memories
          </Link>
        </div>
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal px-1'>
            <li>
              <a>Features</a>
            </li>
            <li>
              <a>Community</a>
            </li>
            <li>
              <a>About</a>
            </li>
          </ul>
        </div>
        <div className='navbar-end'>
          <Link href='/login' className='btn btn-primary'>
            Login
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className='hero min-h-screen bg-gradient-to-br from-primary/20 to-secondary/20'>
        <div className='hero-content text-center'>
          <div className='max-w-md'>
            <h1 className='text-5xl font-bold text-primary'>
              Nash Festival Memories
            </h1>
            <p className='py-6 text-base-content'>
              Capture and share your unforgettable moments from Nashville&apos;s
              most vibrant music festivals. Connect with fellow music lovers and
              relive the magic.
            </p>
            <button className='btn btn-primary btn-lg'>Get Started</button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className='container mx-auto px-4 py-16'>
        <h2 className='text-3xl font-bold text-center mb-12 text-base-content'>
          Features
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {/* Feature Card 1 */}
          <div className='card bg-base-200 shadow-xl'>
            <div className='card-body'>
              <h3 className='card-title text-primary'>
                <svg
                  className='w-6 h-6'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z'
                  />
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M15 13a3 3 0 11-6 0 3 3 0 016 0z'
                  />
                </svg>
                Photo Sharing
              </h3>
              <p>
                Upload and share your favorite festival moments with the
                community
              </p>
              <div className='card-actions justify-end'>
                <div className='badge badge-outline'>Photography</div>
              </div>
            </div>
          </div>

          {/* Feature Card 2 */}
          <div className='card bg-base-200 shadow-xl'>
            <div className='card-body'>
              <h3 className='card-title text-secondary'>
                <svg
                  className='w-6 h-6'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
                  />
                </svg>
                Community
              </h3>
              <p>Connect with other festival-goers and share experiences</p>
              <div className='card-actions justify-end'>
                <div className='badge badge-outline'>Social</div>
              </div>
            </div>
          </div>

          {/* Feature Card 3 */}
          <div className='card bg-base-200 shadow-xl'>
            <div className='card-body'>
              <h3 className='card-title text-accent'>
                <svg
                  className='w-6 h-6'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3'
                  />
                </svg>
                Music Discovery
              </h3>
              <p>
                Discover new artists and keep track of your favorite
                performances
              </p>
              <div className='card-actions justify-end'>
                <div className='badge badge-outline'>Music</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className='stats shadow w-full'>
        <div className='stat'>
          <div className='stat-figure text-primary'>
            <svg
              className='w-8 h-8'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M13 10V3L4 14h7v7l9-11h-7z'
              />
            </svg>
          </div>
          <div className='stat-title'>Festivals Covered</div>
          <div className='stat-value text-primary'>25+</div>
          <div className='stat-desc'>Nashville area festivals</div>
        </div>

        <div className='stat'>
          <div className='stat-figure text-secondary'>
            <svg
              className='w-8 h-8'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z'
              />
            </svg>
          </div>
          <div className='stat-title'>Community Members</div>
          <div className='stat-value text-secondary'>2.6K</div>
          <div className='stat-desc'>Music lovers connected</div>
        </div>

        <div className='stat'>
          <div className='stat-figure text-accent'>
            <svg
              className='w-8 h-8'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z'
              />
            </svg>
          </div>
          <div className='stat-title'>Photos Shared</div>
          <div className='stat-value text-accent'>12.4K</div>
          <div className='stat-desc'>Memories captured</div>
        </div>
      </div>

      {/* Call to Action */}
      <div className='hero py-16 bg-base-200'>
        <div className='hero-content text-center'>
          <div className='max-w-md'>
            <h2 className='text-3xl font-bold mb-4'>
              Ready to Share Your Memories?
            </h2>
            <p className='mb-6'>
              Join our community and start sharing your festival experiences
              today!
            </p>
            <div className='flex gap-4 justify-center'>
              <button className='btn btn-primary'>Sign Up</button>
              <button className='btn btn-outline'>Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
