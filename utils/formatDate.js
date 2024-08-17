export function formatDate() {
  const now = new Date();

  const day = now.getDate();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const year = now.getFullYear();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  return `${month}/${day}/${year}, ${hours}:${minutes}`;
}
