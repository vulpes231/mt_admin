const style = {
  input: "border border-slate-300",
  wrapper: "flex flex-col gap-1",
  th: "font-semibold text-[14px] py-2",
};

function getAccessToken() {
  return sessionStorage.getItem("token") || null;
}

export { style, getAccessToken };
