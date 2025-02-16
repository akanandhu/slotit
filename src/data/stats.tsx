import TotalBooking from "~/svg/icons/TotalBooking.svg";
import TotalEarning from "~/svg/icons/TotalEarnings.svg";
import TotalCustomer from "~/svg/icons/TotalCustomers.svg";
import TotalWaiting from "~/svg/icons/TotalWaiting.svg";

export const stats = [
  {
    label: "Total Bookings",
    value: 6784,
    subLabel: "Last one month",
    icon: TotalBooking,
  },
  {
    label: "Total Earnings",
    value: 1920,
    subLabel: "Last one month",
    icon: TotalEarning,
  },
  {
    label: "Total Customers",
    value: 4412,
    subLabel: "Last one month",
    icon: TotalCustomer,
  },
  {
    label: "Waiting",
    value: 329,
    subLabel: "Last one month",
    icon: TotalWaiting,
  },
];
