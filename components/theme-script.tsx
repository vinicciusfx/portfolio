const themeScript = `
  (function () {
    try {
      var storageKey = 'pedro-vinicius-theme';
      var storedTheme = window.localStorage.getItem(storageKey);
      var theme = storedTheme === 'dark' ? 'dark' : 'light';
      var root = document.documentElement;
      root.classList.toggle('dark', theme === 'dark');
      root.dataset.theme = theme;
    } catch (error) {
      document.documentElement.classList.remove('dark');
      document.documentElement.dataset.theme = 'light';
    }
  })();
`;

export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: themeScript }} />;
}
