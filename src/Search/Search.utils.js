function redirectToSearch(text) {
  const querySearch = encodeURIComponent(text).replaceAll("%20", "+");
  const url = `/items/?search=${querySearch}`;
  window.location.href = url;
}

export { redirectToSearch };
