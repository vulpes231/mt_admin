const style = {
  input: "border border-slate-300",
  wrapper: "flex flex-col gap-1 w-full",
  extWrapper: "flex items-center justify-between gap-2",
  th: "font-semibold text-[14px] py-2",
  td: "font-normal text-[12px] py-2 px-2",
};

function getAccessToken() {
  return sessionStorage.getItem("token") || null;
}

// Format currency
const formatAmount = (amount) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(amount);
};

// Format date
const formatDate = (dateString) => {
  if (!dateString) return "N/A";
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

export { style, getAccessToken, formatAmount, formatDate };
