const style = {
  input: "border border-slate-300",
  wrapper: "flex flex-col gap-1",
};

function getAccessToken() {
  return sessionStorage.getItem("token") || null;
}

export { style, getAccessToken };
