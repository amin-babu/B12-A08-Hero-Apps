export const loadInstalledData = () => {
  try {
    const installedAppData = localStorage.getItem('installApps');
    return installedAppData ? JSON.parse(installedAppData) : [];
  } catch (err) {
    console.log(err);
    return [];
  }
}