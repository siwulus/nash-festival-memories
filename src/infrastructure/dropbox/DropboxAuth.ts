import { AccessToken } from '@/core/boundary/auth';
import { inject, injectable } from 'inversify';

@injectable()
export class DropboxAuth {
  private cachedAccessToken: AccessToken | null = null;
  private tokenExpirationTime: number | null = null;

  constructor(
    @inject('DropboxRefreshToken')
    private readonly refreshToken: string,
    @inject('DropboxClientId')
    private readonly clientId: string,
    @inject('DropboxClientSecret')
    private readonly clientSecret: string,
    @inject('DropboxApiBaseUrl')
    private readonly apiBaseUrl: string
  ) {}

  async getAccessToken(): Promise<AccessToken> {
    // Check if we have a cached token and if it's still valid
    const currentTime = Date.now();
    if (
      this.cachedAccessToken &&
      this.tokenExpirationTime &&
      currentTime < this.tokenExpirationTime
    ) {
      return this.cachedAccessToken;
    }

    // Fetch a new access token
    const response = await fetch(`${this.apiBaseUrl}/oauth2/token`, {
      method: 'POST',
      body: new URLSearchParams({
        client_id: this.clientId,
        client_secret: this.clientSecret,
        grant_type: 'refresh_token',
        refresh_token: this.refreshToken,
      }),
    });
    const data = await response.json();
    const accessToken = AccessToken.parse(data);

    // Cache the token and calculate expiration time
    this.cachedAccessToken = accessToken;
    // Add a small buffer (10 minutes)
    this.tokenExpirationTime =
      currentTime + (accessToken.expires_in - 60 * 10) * 1000;

    return accessToken;
  }
}
