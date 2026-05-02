const style = {
  input: "border border-slate-300",
  wrapper: "flex flex-col gap-1 w-full",
  extWrapper: "flex items-center justify-between gap-2",
  th: "font-semibold text-[14px] py-2",
};

function getAccessToken() {
  return sessionStorage.getItem("token") || null;
}

export { style, getAccessToken };
