import { z } from 'zod';

export interface FileStorage {
  createFileRequest(args: CreateFileRequestArgs): Promise<FileRequest>;
  listFileRequests(): Promise<FileRequest[]>;
  updateFileRequest(args: UpdateFileRequestArgs): Promise<FileRequest>;
  uploadData(args: UploadDataArgs, content: Buffer): Promise<FileMetadata>;
}

export const CreateFileRequestArgs = z.object({
  destination: z.string(),
  description: z.string().optional(),
  open: z.boolean(),
  title: z.string(),
});

export type CreateFileRequestArgs = z.infer<typeof CreateFileRequestArgs>;

// FileRequestDeadline schema for the deadline field
export const FileRequestDeadline = z.object({
  deadline: z.string().datetime(),
  allow_late_uploads: z.boolean().optional(),
});

export type FileRequestDeadline = z.infer<typeof FileRequestDeadline>;

export const FileRequest = z.object({
  id: z.string(),
  url: z.string(),
  title: z.string(),
  created: z.string().datetime(),
  is_open: z.boolean(),
  file_count: z.number(),
  destination: z.string().optional(),
  deadline: FileRequestDeadline.optional(),
  description: z.string().optional(),
  video_project_id: z.string().optional(),
});

export type FileRequest = z.infer<typeof FileRequest>;

export const UploadDataArgs = z.object({
  path: z.string(),
  mode: z.enum(['add', 'overwrite']),
  autorename: z.boolean().optional(),
  mute: z.boolean().optional(),
});

export type UploadDataArgs = z.infer<typeof UploadDataArgs>;

// FileMetadata schema based on Dropbox API documentation
export const FileMetadata = z.object({
  name: z.string(),
  id: z.string(),
  client_modified: z.string().datetime(),
  server_modified: z.string().datetime(),
  size: z.number(),
  path_lower: z.string(),
  path_display: z.string(),
  content_hash: z.string().optional(),
});

export type FileMetadata = z.infer<typeof FileMetadata>;

export const UpdateFileRequestArgs = z.object({
  file_request_id: z.string(),
  title: z.string().optional(),
  description: z.string().optional(),
  deadline: FileRequestDeadline.optional(),
  is_open: z.boolean().optional(),
});

export type UpdateFileRequestArgs = z.infer<typeof UpdateFileRequestArgs>;
