// import React, { useEffect, useState } from "react";
// import { Dialog, DialogContent, IconButton, Box, Button } from "@mui/material";
// import CloseIcon from "@mui/icons-material/Close";

// import BannerImage from "../assets/2026-online-fitness-training.png";

// const EntryPopupBanner = () => {
//   const [open, setOpen] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setOpen(true);
//     }, 15000);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <Dialog
//       open={open}
//       onClose={() => setOpen(false)}
//       maxWidth={false}
//       PaperProps={{
//         sx: {
//           background: "transparent",
//           boxShadow: "none",
//         },
//       }}
//     >
//       <DialogContent
//         sx={{
//           p: 0,
//           overflow: "hidden",
//         }}
//       >
//         {/* Close */}
//         <IconButton
//           onClick={() => setOpen(false)}
//           sx={{
//             position: "absolute",
//             top: 8,
//             right: 8,
//             zIndex: 20,
//             background: "rgba(0,0,0,0.6)",
//             color: "#fff",
//           }}
//         >
//           <CloseIcon />
//         </IconButton>

//         {/* Popup */}
//         <Box
//           sx={{
//             width: { xs: "100%", sm: 420, md: 500 }, // ✅ FIX
//             maxHeight: { xs: "100%", sm: "unset" },
//             background: "#fff",
//             borderRadius: { xs: 0, sm: 3 },
//             overflow: "hidden",
//             display: "flex",
//             flexDirection: "column",
//           }}
//         >
//           {/* Image */}
//           <Box
//             sx={{
//               flex: 1,
//               minHeight: 0,
//             }}
//           >
//             <img
//               src={BannerImage}
//               alt="Entry Popup"
//               style={{
//                 width: "100%",
//                 height: "100%",
//                 objectFit: "contain", // ✅ FITS MOBILE
//               }}
//             />
//           </Box>

//           {/* Button */}
//           <Box sx={{ p: 1.5 }}>
//             <Button
//               fullWidth
//               size="large"
//               variant="contained"
//               href="https://wa.link/8n9m3i"
//               target="_blank"
//               sx={{
//                 backgroundColor: "#090030",
//                 fontWeight: 700,
//                 py: 1.3,
//                 fontSize: "16px",
//                 borderRadius: 2,
//                 "&:hover": {
//                   backgroundColor: "#090030",
//                 },
//               }}
//             >
//               JOIN NOW
//             </Button>
//           </Box>
//         </Box>
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default EntryPopupBanner;


import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  IconButton,
  Box,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const desktopImage =
  "https://venketfitness.com/assets/online-nri-fitness-trainer-in-india.png";

const mobileImage =
  "https://venketfitness.com/assets/venkat-fitness-training-for-nri-clients.jpg.jpeg";

const EntryPopupBanner = () => {
  const [open, setOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 15000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      maxWidth={false}
      PaperProps={{
        sx: {
          background: "transparent",
          boxShadow: "none",
        },
      }}
    >
      <DialogContent
        sx={{
          p: 0,
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Close Button */}
        <IconButton
          onClick={() => setOpen(false)}
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            zIndex: 20,
            background: "rgba(0,0,0,0.6)",
            color: "#fff",
          }}
        >
          <CloseIcon />
        </IconButton>

        {/* Popup Box */}
        <Box
          sx={{
            width: { xs: "100%", sm: 420, md: 500 },
            background: "#fff",
            borderRadius: { xs: 0, sm: 3 },
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Image */}
          <Box>
            <img
              src={isMobile ? mobileImage : desktopImage}
              alt="Entry Popup"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
              }}
            />
          </Box>

          {/* Button */}
          <Box sx={{ p: 1.5 }}>
            <Button
              fullWidth
              size="large"
              variant="contained"
              href="https://wa.link/8n9m3i"
              target="_blank"
              sx={{
                backgroundColor: "#090030",
                fontWeight: 700,
                py: 1.3,
                fontSize: "16px",
                borderRadius: 2,
                "&:hover": {
                  backgroundColor: "#090030",
                },
              }}
            >
              JOIN NOW
            </Button>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default EntryPopupBanner;