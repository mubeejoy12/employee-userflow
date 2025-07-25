import { NotificationsNone } from "@mui/icons-material";
import { InputAdornment, TextField } from "@mui/material";
import Image from "next/image";
import SearchIcon from "@mui/icons-material/Search";

export default function Header({ onProfileClick }) {
  return (
    <header className="w-full h-[54px] bg-white shadow fixed top-0 z-50 flex items-center justify-between px-6">
      {/* Left: Logo */}
      <div className="flex items-center space-x-3">
        <Image src="/logo.png" alt="Logo" width={120} height={40} />
        {/* <span className="text-lg font-semibold">Sinkronis</span> */}
      </div>

      <TextField
        placeholder="Search"
        variant="outlined"
        className="w-[400px]" // wider input
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon className="text-gray-500" />
            </InputAdornment>
          ),
          className: "bg-gray-100 rounded-full px-3 py-1",
          notched: false,
        }}
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: "9999px", // Pill-shaped
            height: "36px", // Reduced height
            fontSize: "14px",
            paddingRight: "8px",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#D1D5DB",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#9CA3AF",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#2563EB",
          },
        }}
      />

      {/* Right: Notifications + Profile */}
      <div className="flex items-center gap-4">
        <NotificationsNone className="text-gray-600" />
        <Image
          src="/Ellipse586.png"
          alt="User"
          width={32}
          height={32}
          onClick={() => {
            console.log("Image clicked ✅");
            onProfileClick?.(); // Use optional chaining just in case
          }}
          className="rounded-full cursor-pointer"
        />
      </div>
    </header>
  );
}
