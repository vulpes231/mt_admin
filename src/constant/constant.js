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

const getStatusBadge = (status) => {
  const statusLower = status?.toLowerCase();
  switch (statusLower) {
    case "completed":
    case "success":
      return "bg-green-100 text-green-800";
    case "pending":
      return "bg-yellow-100 text-yellow-800";
    case "failed":
    case "declined":
      return "bg-red-100 text-red-800";
    case "processing":
      return "bg-blue-100 text-blue-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const getTypeBadge = (type) => {
  const typeLower = type?.toLowerCase();
  switch (typeLower) {
    case "deposit":
      return "bg-green-100 text-green-800";
    case "withdrawal":
      return "bg-red-100 text-red-800";
    case "transfer":
      return "bg-blue-100 text-blue-800";
    case "payment":
      return "bg-purple-100 text-purple-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export {
  style,
  getAccessToken,
  formatAmount,
  formatDate,
  getTypeBadge,
  getStatusBadge,
};
