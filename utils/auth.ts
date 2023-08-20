const TOKEN_KEY = 'token';
const REFRESH_KEY = 'refresh_token';

export function getToken(): string {
  const token = useCookie(TOKEN_KEY);
  return token.value!;
}

export function setToken(value: string) {
  const token = useCookie(TOKEN_KEY);
  return (token.value = value);
}

export function removeToken() {
  const token = useCookie(TOKEN_KEY);
  token.value = null;
}

export function getRefreshToken(): string {
  const token = useCookie(REFRESH_KEY);
  return token.value!;
}

export function setRefreshToken(value: string) {
  const token = useCookie(REFRESH_KEY);
  return (token.value = value);
}

export function removeRefreshToken() {
  const token = useCookie(REFRESH_KEY);
  token.value = null;
}
