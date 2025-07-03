'use client';

import { CopiedToClipboardIcon } from '@/app/components/icons/CopiedToClipboardIcon';
import { CopyToClipboardIcon } from '@/app/components/icons/CopyToClipboardIcon';
import { OpenInNewWindowIcon } from '@/app/components/icons/OpenInNewWindowIcon';
import { FC, useId, useState } from 'react';

type PhotoUploadProps = {
  uploadUrl: string;
};

export const PhotoUpload: FC<PhotoUploadProps> = ({ uploadUrl }) => {
  const id = useId();
  const [copied, setCopied] = useState(false);

  const handleCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(uploadUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy URL to clipboard:', err);
    }
  };

  const handleOpenInNewWindow = () => {
    window.open(uploadUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className='space-y-4'>
      <div className='join w-full'>
        <input
          id={id}
          type='text'
          value={uploadUrl}
          readOnly
          className='input join-item flex-1'
          placeholder='Upload URL'
        />
        <button onClick={handleCopyToClipboard} className='btn join-item'>
          {copied ? (
            <CopiedToClipboardIcon className='h-5 w-5' />
          ) : (
            <CopyToClipboardIcon className='h-5 w-5' />
          )}
        </button>
      </div>
      <button
        onClick={handleOpenInNewWindow}
        className='btn btn-primary w-full'
      >
        <OpenInNewWindowIcon className='h-5 w-5 mr-2' />
        Otwórz w nowym oknie
      </button>
    </div>
  );
};
